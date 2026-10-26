#!/usr/bin/env python3
"""Regenerate the PHOTOS list in js/photos.js from the images/<category>/ folders.

Usage:  python3 tools/build_manifest.py

- Every image in images/<category>/ becomes an entry (sorted by filename).
- Titles default to the filename ("golden-gate_bridge.jpg" -> "Golden Gate Bridge");
  camera/export names like "IMG_1234", "TU5A4766_SnapseedCopy" or Apple Photos
  UUIDs get no title.
- If images/<category>/thumbs/<same filename> exists it's used for the grid.
- Width/height are recorded so the gallery can lay out rows before images load.
- Titles/meta you've already edited in js/photos.js are kept for files still present.
- SITE and CATEGORIES in js/photos.js are left untouched.
"""
import json
import re
import struct
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PHOTOS_JS = ROOT / "js" / "photos.js"
IMAGES = ROOT / "images"
EXTS = {".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"}
CAMERA_NAME = re.compile(
    r"^(_?[A-Z0-9]{3,5}[_-]?\d{3,5}"                    # IMG_1234, TU5A4766, _16P1099
    r"|[0-9A-F]{8}(-[0-9A-F]{4}){3}-[0-9A-F]{12}"         # Apple Photos export UUIDs
    r"|snapseed|fullsizerender)"                          # editor/iPhone export names
    r"([ _-]*(snapseed|copy|edit(ed)?|final|a|\d+))*$",
    re.I,
)


def image_size(path):
    """Return (width, height) as displayed, for JPEG/PNG; None if unknown."""
    data = path.read_bytes()
    if data[:8] == b"\x89PNG\r\n\x1a\n":
        return struct.unpack(">II", data[16:24])
    if data[:2] != b"\xff\xd8":
        return None
    size, orientation, i = None, 1, 2
    while i + 4 <= len(data) and size is None:
        if data[i] != 0xFF:
            i += 1
            continue
        marker, length = data[i + 1], struct.unpack(">H", data[i + 2:i + 4])[0]
        seg = data[i + 4:i + 2 + length]
        if marker == 0xE1 and seg[:6] == b"Exif\0\0":
            tiff = seg[6:]
            endian = "<" if tiff[:2] == b"II" else ">"
            ifd = struct.unpack(endian + "I", tiff[4:8])[0]
            for n in range(struct.unpack(endian + "H", tiff[ifd:ifd + 2])[0]):
                e = ifd + 2 + n * 12
                if struct.unpack(endian + "H", tiff[e:e + 2])[0] == 0x0112:
                    orientation = struct.unpack(endian + "H", tiff[e + 8:e + 10])[0]
        elif 0xC0 <= marker <= 0xCF and marker not in (0xC4, 0xC8, 0xCC):
            h, w = struct.unpack(">HH", seg[1:5])
            size = (w, h)
        i += 2 + length
    if size and orientation in (5, 6, 7, 8):  # rotated 90°: swap
        size = size[::-1]
    return size


text = PHOTOS_JS.read_text()
categories = re.findall(r'id:\s*"([^"]+)"', text.split("window.PHOTOS")[0])

# Keep existing title/meta for local images already listed.
existing = {}
for line in re.findall(r"^\s*\{.*\},?\s*$", text, flags=re.M):
    src = re.search(r'src:\s*"([^"]+)"', line)
    if src:
        title = re.search(r'title:\s*"((?:[^"\\]|\\.)*)"', line)
        meta = re.search(r'meta:\s*"((?:[^"\\]|\\.)*)"', line)
        existing[src.group(1)] = (
            json.loads(f'"{title.group(1)}"') if title else None,
            json.loads(f'"{meta.group(1)}"') if meta else "",
        )

lines, total = [], 0
for cat in categories:
    files = sorted(
        p for p in (IMAGES / cat).glob("*")
        if p.suffix.lower() in EXTS and not p.name.startswith(".")
    )
    if not files:
        continue
    lines.append(f"  // {cat.capitalize()}")
    for f in files:
        src = f.relative_to(ROOT).as_posix()
        default_title = "" if CAMERA_NAME.match(f.stem) else re.sub(r"[-_]+", " ", f.stem).strip().title()
        title, meta = existing.get(src, (None, ""))
        entry = {"category": cat, "src": src}
        thumb = f.parent / "thumbs" / f.name
        if thumb.exists():
            entry["thumb"] = thumb.relative_to(ROOT).as_posix()
        size = image_size(f)
        if size:
            entry["w"], entry["h"] = size
        entry.update(title=default_title if title is None else title, meta=meta)
        body = ", ".join(f"{k}: {json.dumps(v, ensure_ascii=False)}" for k, v in entry.items())
        lines.append(f"  {{ {body} }},")
        total += 1
    lines.append("")

if total == 0:
    raise SystemExit("No images found in images/<category>/ — nothing changed.")

head = text.split("// Placeholder helper")[0] if "// Placeholder helper" in text else text.split("window.PHOTOS")[0]
PHOTOS_JS.write_text(head.rstrip() + "\n\nwindow.PHOTOS = [\n" + "\n".join(lines).rstrip() + "\n];\n")
print(f"Wrote {total} photos to {PHOTOS_JS.relative_to(ROOT)}")
