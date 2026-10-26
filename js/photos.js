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

window.PHOTOS = [
  // Landscapes
  { category: "landscapes", src: "images/landscapes/IMG_2555.JPG", thumb: "images/landscapes/thumbs/IMG_2555.JPG", title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/TU5A3035_SnapseedCopy.jpg", thumb: "images/landscapes/thumbs/TU5A3035_SnapseedCopy.jpg", title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/TU5A4755.jpg", thumb: "images/landscapes/thumbs/TU5A4755.jpg", title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/TU5A4766.jpg", thumb: "images/landscapes/thumbs/TU5A4766.jpg", title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/TU5A4776.jpg", thumb: "images/landscapes/thumbs/TU5A4776.jpg", title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/_16P0830.jpg", thumb: "images/landscapes/thumbs/_16P0830.jpg", title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/_16P1067.jpg", thumb: "images/landscapes/thumbs/_16P1067.jpg", title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/_16P1099.jpg", thumb: "images/landscapes/thumbs/_16P1099.jpg", title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/_16P1129.jpg", thumb: "images/landscapes/thumbs/_16P1129.jpg", title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/_60A0314.jpg", thumb: "images/landscapes/thumbs/_60A0314.jpg", title: "", meta: "" },

  // Cityscapes
  { category: "cityscapes", src: "images/cityscapes/5V8A0107.jpg", thumb: "images/cityscapes/thumbs/5V8A0107.jpg", title: "", meta: "" },
  { category: "cityscapes", src: "images/cityscapes/TU5A3302.jpg", thumb: "images/cityscapes/thumbs/TU5A3302.jpg", title: "", meta: "" },

  // Birds
  { category: "birds", src: "images/birds/IMG_2342.jpg", thumb: "images/birds/thumbs/IMG_2342.jpg", title: "", meta: "" },
  { category: "birds", src: "images/birds/IMG_2343.jpg", thumb: "images/birds/thumbs/IMG_2343.jpg", title: "", meta: "" },
  { category: "birds", src: "images/birds/IMG_2411.jpg", thumb: "images/birds/thumbs/IMG_2411.jpg", title: "", meta: "" },
  { category: "birds", src: "images/birds/IMG_2412.jpg", thumb: "images/birds/thumbs/IMG_2412.jpg", title: "", meta: "" },
];
