# gallery
My Photo Gallery — a photography collection website hosted on GitHub Pages.

Collections: **Landscapes · Cityscapes · Portraits · Kids · Sports · Birds · Macro**

Plain HTML/CSS/JS — no build step, no dependencies.

## Features
- Home page with hero, collection cards, and a filterable masonry gallery
- Shareable links per collection, e.g. `https://<user>.github.io/gallery/#birds`
- Full-screen lightbox with keyboard (← → Esc) and swipe navigation
- Lazy-loaded images, responsive layout, mobile menu

## Adding your photos
1. Put images in the matching folder:
   ```
   images/landscapes/  images/cityscapes/  images/portraits/  images/kids/
   images/sports/      images/birds/       images/macro/
   ```
2. Regenerate the photo list:
   ```sh
   python3 tools/build_manifest.py
   ```
   This replaces the placeholder photos with yours. Titles come from filenames
   (`misty-lake.jpg` → "Misty Lake"); edit `title` / `meta` in `js/photos.js`
   afterwards — your edits are kept the next time you run the script.
3. Set your name and tagline in `window.SITE` at the top of `js/photos.js`.

Tip: export images at ~2000px on the long edge (JPEG quality ~80) so pages load fast.
GitHub recommends keeping repos under 1 GB. Optionally add a `thumb` field per photo
pointing to a smaller version for the grid. A category can set `cover: "images/..."` to
choose its card image.

## Preview locally
```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish on GitHub Pages
1. Push to GitHub.
2. Repo **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*,
   Branch = `main`, folder = `/ (root)`.
3. Your site will be live at `https://<your-username>.github.io/gallery/`.
