/*
 * Photo collection data.
 *
 * To add your own photos:
 *   1. Drop the image file into images/<category>/ (e.g. images/birds/kingfisher.jpg)
 *   2. Add an entry to PHOTOS below, or run:  python3 tools/build_manifest.py
 *      to regenerate this list automatically from the images/ folders.
 *
 * Each photo:
 *   src       – path or URL to the full-size image (required)
 *   category  – one of the category ids below (required)
 *   title     – shown on hover and in the lightbox
 *   meta      – optional line such as location / camera / settings
 *
 * The picsum.photos URLs below are PLACEHOLDERS so the site looks complete
 * out of the box. Replace them with your own work.
 */

window.SITE = {
  name: "Photography",                              // your name or studio name
  tagline: "Light, Life & Everything In Between",
};

window.CATEGORIES = [
  { id: "landscapes", name: "Landscapes", description: "Mountains, coastlines, forests and the quiet drama of wide open places." },
  { id: "cityscapes", name: "Cityscapes", description: "Skylines, streets and architecture — cities by day and by night." },
  { id: "portraits",  name: "Portraits",  description: "People, character and expression captured in natural and studio light." },
  { id: "kids",       name: "Kids",       description: "Candid childhood moments — play, wonder and pure joy." },
  { id: "sports",     name: "Sports",     description: "Peak action, speed and emotion frozen in a fraction of a second." },
  { id: "birds",      name: "Birds",      description: "Wings, feathers and patience — birdlife in the wild." },
  { id: "macro",      name: "Macro",      description: "The tiny world up close — insects, flowers, textures and details." },
];

// Placeholder helper — remove once you've added real photos.
const ph = (id, w, h) => `https://picsum.photos/id/${id}/${w}/${h}`;

window.PHOTOS = [
  // Landscapes
  { category: "landscapes", src: ph(10, 1600, 1067), title: "Alpine Morning", meta: "Placeholder" },
  { category: "landscapes", src: ph(11, 1200, 1600), title: "Valley Light", meta: "Placeholder" },
  { category: "landscapes", src: ph(12, 1600, 900),  title: "Coastal Dusk", meta: "Placeholder" },
  { category: "landscapes", src: ph(13, 1600, 1067), title: "Forest Path", meta: "Placeholder" },

  // Cityscapes
  { category: "cityscapes", src: ph(14, 1600, 1067), title: "Blue Hour Skyline", meta: "Placeholder" },
  { category: "cityscapes", src: ph(15, 1200, 1600), title: "Downtown Lines", meta: "Placeholder" },
  { category: "cityscapes", src: ph(16, 1600, 1067), title: "Night Streets", meta: "Placeholder" },
  { category: "cityscapes", src: ph(17, 1600, 900),  title: "Bridge at Dawn", meta: "Placeholder" },

  // Portraits
  { category: "portraits", src: ph(18, 1200, 1600), title: "Window Light", meta: "Placeholder" },
  { category: "portraits", src: ph(19, 1200, 1500), title: "Golden Hour", meta: "Placeholder" },
  { category: "portraits", src: ph(20, 1600, 1067), title: "Studio Session", meta: "Placeholder" },
  { category: "portraits", src: ph(21, 1200, 1600), title: "Street Portrait", meta: "Placeholder" },

  // Kids
  { category: "kids", src: ph(22, 1600, 1067), title: "First Steps", meta: "Placeholder" },
  { category: "kids", src: ph(23, 1200, 1600), title: "Bubbles", meta: "Placeholder" },
  { category: "kids", src: ph(24, 1600, 1067), title: "Playground", meta: "Placeholder" },
  { category: "kids", src: ph(25, 1200, 1500), title: "Giggles", meta: "Placeholder" },

  // Sports
  { category: "sports", src: ph(26, 1600, 1067), title: "Breakaway", meta: "Placeholder" },
  { category: "sports", src: ph(27, 1600, 900),  title: "Final Lap", meta: "Placeholder" },
  { category: "sports", src: ph(28, 1200, 1600), title: "Slam Dunk", meta: "Placeholder" },
  { category: "sports", src: ph(29, 1600, 1067), title: "The Goal", meta: "Placeholder" },

  // Birds
  { category: "birds", src: ph(30, 1600, 1067), title: "Kingfisher", meta: "Placeholder" },
  { category: "birds", src: ph(31, 1200, 1600), title: "Heron at Rest", meta: "Placeholder" },
  { category: "birds", src: ph(32, 1600, 1067), title: "In Flight", meta: "Placeholder" },
  { category: "birds", src: ph(33, 1600, 900),  title: "Morning Song", meta: "Placeholder" },

  // Macro
  { category: "macro", src: ph(34, 1600, 1600), title: "Dewdrops", meta: "Placeholder" },
  { category: "macro", src: ph(35, 1200, 1600), title: "Honeybee", meta: "Placeholder" },
  { category: "macro", src: ph(36, 1600, 1067), title: "Petal Detail", meta: "Placeholder" },
  { category: "macro", src: ph(37, 1600, 1067), title: "Dragonfly Eyes", meta: "Placeholder" },
];
