(() => {
  const SITE = window.SITE || {};
  const CATEGORIES = window.CATEGORIES || [];
  const PHOTOS = window.PHOTOS || [];

  const $ = (sel) => document.querySelector(sel);
  const nav = $("#site-nav");
  const filters = $("#filters");
  const gallery = $("#gallery");
  const grid = $("#collection-grid");
  const empty = $("#empty");

  const catById = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));
  const photosIn = (id) => (id === "all" ? PHOTOS : PHOTOS.filter((p) => p.category === id));

  let current = "all";
  let visible = [];
  let lbIndex = 0;

  // ---------- Site text ----------
  if (SITE.name) {
    $("#brand-name").textContent = SITE.name;
    $("#footer-name").textContent = SITE.name;
    document.title = `${SITE.name} — Photography Collection`;
  }
  if (SITE.tagline) $("#hero-title").textContent = SITE.tagline;
  $("#hero-sub").textContent = CATEGORIES.map((c) => c.name).join(" · ");
  $("#year").textContent = new Date().getFullYear();

  // Hero background: first landscape (or first photo)
  const heroPhoto = photosIn("landscapes")[0] || PHOTOS[0];
  if (heroPhoto) $("#hero-bg").style.backgroundImage = `url("${heroPhoto.src}")`;

  // ---------- Navigation & filters ----------
  const tabs = [{ id: "all", name: "All" }, ...CATEGORIES];

  nav.innerHTML = tabs
    .map((t) => `<a href="#${t.id === "all" ? "gallery" : t.id}" data-category="${t.id}">${t.name}</a>`)
    .join("");

  filters.innerHTML = tabs
    .map(
      (t) =>
        `<button role="tab" data-category="${t.id}">${t.name}<span class="count">${photosIn(t.id).length}</span></button>`
    )
    .join("");

  // ---------- Collection cards ----------
  grid.innerHTML = CATEGORIES.map((c) => {
    const list = photosIn(c.id);
    const cover = c.cover || (list[0] && list[0].src) || "";
    return `
      <a class="collection-card${cover ? "" : " is-empty"}" href="#${c.id}" data-category="${c.id}">
        ${cover ? `<img src="${cover}" alt="${c.name}" loading="lazy" />` : ""}
        <div class="label">
          <span>${list.length ? `${list.length} photo${list.length === 1 ? "" : "s"}` : "Coming soon"}</span>
          <h3>${c.name}</h3>
        </div>
      </a>`;
  }).join("");

  // ---------- Gallery rendering ----------
  function render(category) {
    current = catById[category] ? category : "all";
    visible = photosIn(current);

    const cat = catById[current];
    $("#gallery-title").textContent = cat ? cat.name : "All Work";
    $("#gallery-desc").textContent = cat ? cat.description : "Every style, every subject — the complete collection.";

    gallery.innerHTML = visible
      .map(
        (p, i) => `
        <figure tabindex="0" data-index="${i}" style="${p.w && p.h ? `--r:${(p.w / p.h).toFixed(4)};` : ""}animation-delay:${Math.min(i, 12) * 40}ms">
          <img src="${p.thumb || p.src}" alt="${p.title || ""}" loading="lazy" />
          <figcaption>
            <small>${catById[p.category]?.name || ""}</small>
            <strong>${p.title || ""}</strong>
          </figcaption>
        </figure>`
      )
      .join("");
    empty.hidden = visible.length > 0;

    document.querySelectorAll("[data-category]").forEach((el) => {
      el.classList.toggle("active", el.dataset.category === current && !el.classList.contains("brand"));
    });
  }

  function select(category, scroll = true) {
    render(category);
    const hash = category === "all" ? "#gallery" : `#${category}`;
    if (location.hash !== hash) history.replaceState(null, "", hash);
    if (scroll) $("#gallery-section").scrollIntoView({ behavior: "smooth" });
    nav.classList.remove("open");
  }

  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-category]");
    if (!el) return;
    e.preventDefault();
    if (el.classList.contains("brand")) {
      render("all");
      history.replaceState(null, "", location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    select(el.dataset.category);
  });

  $(".menu-toggle").addEventListener("click", (e) => {
    const open = nav.classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", open);
  });

  // Deep links: yoursite/#birds opens the Birds gallery
  function fromHash() {
    const id = location.hash.slice(1);
    if (catById[id]) select(id);
    else if (id === "gallery") select("all");
    else render("all");
  }
  window.addEventListener("hashchange", fromHash);
  fromHash();

  // ---------- Lightbox ----------
  const lb = $("#lightbox");
  const lbImg = $("#lb-img");

  function show(i) {
    lbIndex = (i + visible.length) % visible.length;
    const p = visible[lbIndex];
    lbImg.src = p.src;
    lbImg.alt = p.title || "";
    $("#lb-title").textContent = p.title || "";
    $("#lb-meta").textContent = [catById[p.category]?.name, p.meta].filter(Boolean).join(" · ");
    $("#lb-count").textContent = `${lbIndex + 1} / ${visible.length}`;
    // Preload neighbours for snappy navigation
    [lbIndex + 1, lbIndex - 1].forEach((n) => {
      const q = visible[(n + visible.length) % visible.length];
      if (q) new Image().src = q.src;
    });
  }
  function openLb(i) {
    show(i);
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    $(".lb-close").focus();
  }
  function closeLb() {
    lb.hidden = true;
    document.body.style.overflow = "";
    gallery.querySelector(`[data-index="${lbIndex}"]`)?.focus();
  }

  // Photos listed without w/h: measure once loaded so the row layout is correct
  gallery.addEventListener("load", (e) => {
    const img = e.target, fig = img.closest("figure");
    if (fig && !fig.style.getPropertyValue("--r") && img.naturalHeight) {
      fig.style.setProperty("--r", (img.naturalWidth / img.naturalHeight).toFixed(4));
    }
  }, true);

  gallery.addEventListener("click", (e) => {
    const fig = e.target.closest("figure");
    if (fig) openLb(+fig.dataset.index);
  });
  gallery.addEventListener("keydown", (e) => {
    const fig = e.target.closest("figure");
    if (fig && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      openLb(+fig.dataset.index);
    }
  });

  $(".lb-close").addEventListener("click", closeLb);
  $(".lb-prev").addEventListener("click", () => show(lbIndex - 1));
  $(".lb-next").addEventListener("click", () => show(lbIndex + 1));
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });

  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") show(lbIndex - 1);
    if (e.key === "ArrowRight") show(lbIndex + 1);
  });

  // Swipe on touch devices
  let touchX = null;
  lb.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX), { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) show(lbIndex + (dx < 0 ? 1 : -1));
    touchX = null;
  });
})();
