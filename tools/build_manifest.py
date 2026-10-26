#!/usr/bin/env python3
"""Regenerate the PHOTOS list in js/photos.js from the images/<category>/ folders.

Usage:  python3 tools/build_manifest.py

- Every image in images/<category>/ becomes an entry (sorted by filename).
- Titles default to the filename ("golden-gate_bridge.jpg" -> "Golden Gate Bridge");
  camera-style names like "IMG_1234" or "TU5A4766_SnapseedCopy" get no title.
- If images/<category>/thumbs/<same filename> exists it's used for the grid.
- Titles/meta you've already edited in js/photos.js are kept for files still present.
- SITE and CATEGORIES in js/photos.js are left untouched.
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PHOTOS_JS = ROOT / "js" / "photos.js"
IMAGES = ROOT / "images"
EXTS = {".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"}
CAMERA_NAME = re.compile(r"^_?[A-Z0-9]{3,5}[_-]?\d{3,5}([ _-]*(snapseed|copy|edit(ed)?|final|\d+))*$", re.I)

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
