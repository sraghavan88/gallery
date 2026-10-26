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
  { category: "landscapes", src: "images/landscapes/02FEECC1-CA85-4D5C-92DB-D1973D415AE3.JPG", thumb: "images/landscapes/thumbs/02FEECC1-CA85-4D5C-92DB-D1973D415AE3.JPG", w: 2304, h: 1536, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/2AC28B0C-5A85-4006-97F3-0BCB9FBF14C7.JPG", thumb: "images/landscapes/thumbs/2AC28B0C-5A85-4006-97F3-0BCB9FBF14C7.JPG", w: 2304, h: 1536, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/2F92BD09-5106-4BA0-88D3-A993C343B512.JPG", thumb: "images/landscapes/thumbs/2F92BD09-5106-4BA0-88D3-A993C343B512.JPG", w: 2048, h: 1536, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/5DA55B7C-C85F-45D3-AF80-BB26DFF8E70E.JPG", thumb: "images/landscapes/thumbs/5DA55B7C-C85F-45D3-AF80-BB26DFF8E70E.JPG", w: 2304, h: 1536, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/D3746C8C-38ED-4E29-A071-F80CEC253162_1_201_a.JPG", thumb: "images/landscapes/thumbs/D3746C8C-38ED-4E29-A071-F80CEC253162_1_201_a.JPG", w: 2304, h: 1536, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/EAD9C6DF-1B29-49DC-BBC4-60199C760454.JPG", thumb: "images/landscapes/thumbs/EAD9C6DF-1B29-49DC-BBC4-60199C760454.JPG", w: 2304, h: 1536, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/F080FF41-F330-4CE8-9C66-902617EB2BE2.JPG", thumb: "images/landscapes/thumbs/F080FF41-F330-4CE8-9C66-902617EB2BE2.JPG", w: 2304, h: 1536, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/FullSizeRender-5.jpg", thumb: "images/landscapes/thumbs/FullSizeRender-5.jpg", w: 2400, h: 1600, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/IMG_2555.JPG", thumb: "images/landscapes/thumbs/IMG_2555.JPG", w: 2400, h: 1600, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/IMG_2647.JPG", thumb: "images/landscapes/thumbs/IMG_2647.JPG", w: 2400, h: 1600, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/Snapseed.jpg", thumb: "images/landscapes/thumbs/Snapseed.jpg", w: 2400, h: 1600, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/TU5A1200.jpg", thumb: "images/landscapes/thumbs/TU5A1200.jpg", w: 2400, h: 1600, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/TU5A3011_SnapseedCopy.jpg", thumb: "images/landscapes/thumbs/TU5A3011_SnapseedCopy.jpg", w: 2400, h: 1600, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/TU5A3035_SnapseedCopy.jpg", thumb: "images/landscapes/thumbs/TU5A3035_SnapseedCopy.jpg", w: 2400, h: 1600, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/TU5A4755.jpg", thumb: "images/landscapes/thumbs/TU5A4755.jpg", w: 2400, h: 1600, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/TU5A4766.jpg", thumb: "images/landscapes/thumbs/TU5A4766.jpg", w: 2400, h: 1600, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/TU5A4776.jpg", thumb: "images/landscapes/thumbs/TU5A4776.jpg", w: 2400, h: 1600, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/_16P0830.jpg", thumb: "images/landscapes/thumbs/_16P0830.jpg", w: 2400, h: 1600, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/_16P1067.jpg", thumb: "images/landscapes/thumbs/_16P1067.jpg", w: 2400, h: 1600, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/_16P1099.jpg", thumb: "images/landscapes/thumbs/_16P1099.jpg", w: 2400, h: 1600, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/_16P1129.jpg", thumb: "images/landscapes/thumbs/_16P1129.jpg", w: 2400, h: 1600, title: "", meta: "" },
  { category: "landscapes", src: "images/landscapes/_60A0314.jpg", thumb: "images/landscapes/thumbs/_60A0314.jpg", w: 2400, h: 1600, title: "", meta: "" },

  // Cityscapes
  { category: "cityscapes", src: "images/cityscapes/00675D8A-5C8C-4883-BA3B-86E7E3ED403B.JPG", thumb: "images/cityscapes/thumbs/00675D8A-5C8C-4883-BA3B-86E7E3ED403B.JPG", w: 2304, h: 1536, title: "", meta: "" },
  { category: "cityscapes", src: "images/cityscapes/01C3CC34-A1C3-408B-89D8-BC1C39C00B88.JPG", thumb: "images/cityscapes/thumbs/01C3CC34-A1C3-408B-89D8-BC1C39C00B88.JPG", w: 2304, h: 1536, title: "", meta: "" },
  { category: "cityscapes", src: "images/cityscapes/4531EEC3-D70B-413C-AD02-80384D563C2B.JPG", thumb: "images/cityscapes/thumbs/4531EEC3-D70B-413C-AD02-80384D563C2B.JPG", w: 2304, h: 1536, title: "", meta: "" },
  { category: "cityscapes", src: "images/cityscapes/5V8A0107.jpg", thumb: "images/cityscapes/thumbs/5V8A0107.jpg", w: 2400, h: 1600, title: "", meta: "" },
  { category: "cityscapes", src: "images/cityscapes/8A7FBB7D-1837-45BA-B875-86B0033A8873.JPG", thumb: "images/cityscapes/thumbs/8A7FBB7D-1837-45BA-B875-86B0033A8873.JPG", w: 2304, h: 1536, title: "", meta: "" },
  { category: "cityscapes", src: "images/cityscapes/ACB22A11-1557-4032-85CB-FC2B475B37E6.JPG", thumb: "images/cityscapes/thumbs/ACB22A11-1557-4032-85CB-FC2B475B37E6.JPG", w: 2304, h: 1536, title: "", meta: "" },
  { category: "cityscapes", src: "images/cityscapes/D9689EA5-2B9C-4AAD-B14C-E973E564B710.JPG", thumb: "images/cityscapes/thumbs/D9689EA5-2B9C-4AAD-B14C-E973E564B710.JPG", w: 2304, h: 1536, title: "", meta: "" },
  { category: "cityscapes", src: "images/cityscapes/E6D1FCAA-FB34-48DE-A019-180500F875F1.JPG", thumb: "images/cityscapes/thumbs/E6D1FCAA-FB34-48DE-A019-180500F875F1.JPG", w: 2304, h: 1536, title: "", meta: "" },
  { category: "cityscapes", src: "images/cityscapes/F57CCB29-EB25-4AEA-8AD7-E9BE12B2A385.JPG", thumb: "images/cityscapes/thumbs/F57CCB29-EB25-4AEA-8AD7-E9BE12B2A385.JPG", w: 2304, h: 1536, title: "", meta: "" },
  { category: "cityscapes", src: "images/cityscapes/FullSizeRender-5.jpg", thumb: "images/cityscapes/thumbs/FullSizeRender-5.jpg", w: 2400, h: 1600, title: "", meta: "" },
  { category: "cityscapes", src: "images/cityscapes/TU5A3302.jpg", thumb: "images/cityscapes/thumbs/TU5A3302.jpg", w: 2400, h: 1600, title: "", meta: "" },

  // Birds
  { category: "birds", src: "images/birds/5V8A5708.jpg", thumb: "images/birds/thumbs/5V8A5708.jpg", w: 1919, h: 2400, title: "", meta: "" },
  { category: "birds", src: "images/birds/IMG_2342.jpg", thumb: "images/birds/thumbs/IMG_2342.jpg", w: 2400, h: 1599, title: "", meta: "" },
  { category: "birds", src: "images/birds/IMG_2343.jpg", thumb: "images/birds/thumbs/IMG_2343.jpg", w: 1857, h: 2321, title: "", meta: "" },
  { category: "birds", src: "images/birds/IMG_2411.jpg", thumb: "images/birds/thumbs/IMG_2411.jpg", w: 2400, h: 1600, title: "", meta: "" },
  { category: "birds", src: "images/birds/IMG_2412.jpg", thumb: "images/birds/thumbs/IMG_2412.jpg", w: 1919, h: 2400, title: "", meta: "" },
];
