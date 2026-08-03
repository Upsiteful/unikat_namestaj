/* ==========================================================================
   UNIKAT NAMEŠTAJ — main.js
   ========================================================================== */

const LANGS = {
  sr: { label: "Srpski", flag: "🇷🇸" },
  en: { label: "English", flag: "🇬🇧" },
  de: { label: "Deutsch", flag: "🇩🇪" }
};

function getLang(){
  return localStorage.getItem("un_lang") || "sr";
}
function setLang(lang){
  localStorage.setItem("un_lang", lang);
  applyI18n(lang);
  document.documentElement.setAttribute("lang", lang);
  document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
}

function applyI18n(lang){
  const dict = I18N[lang] || I18N.sr;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key = el.getAttribute("data-i18n-placeholder");
    if(dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });
  // update lang switch UI
  document.querySelectorAll(".lang-current .flag").forEach(f=> f.textContent = LANGS[lang].flag);
  document.querySelectorAll(".lang-current .lang-code").forEach(f=> f.textContent = lang.toUpperCase());
  document.querySelectorAll(".lang-menu button").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang === lang);
  });
}

function initLangSwitchers(){
  document.querySelectorAll(".lang-switch").forEach(box=>{
    const current = box.querySelector(".lang-current");
    current.addEventListener("click", (e)=>{
      e.stopPropagation();
      document.querySelectorAll(".lang-switch.open").forEach(o=>{ if(o!==box) o.classList.remove("open"); });
      box.classList.toggle("open");
    });
    box.querySelectorAll(".lang-menu button").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        setLang(btn.dataset.lang);
        box.classList.remove("open");
      });
    });
  });
  document.addEventListener("click", ()=> document.querySelectorAll(".lang-switch.open").forEach(o=>o.classList.remove("open")));
}

function initMobileNav(){
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-nav");
  if(!burger || !nav) return;
  burger.addEventListener("click", ()=>{
    burger.classList.toggle("open");
    nav.classList.toggle("open");
  });
  document.querySelectorAll(".nav-item.has-drop > a").forEach(a=>{
    a.addEventListener("click",(e)=>{
      if(window.innerWidth <= 980){
        e.preventDefault();
        a.parentElement.classList.toggle("open");
      }
    });
  });
}

function initFloatingWidget(){
  const widget = document.querySelector(".floating-widget");
  if(!widget) return;
  const toggle = widget.querySelector(".fw-toggle");
  toggle.addEventListener("click", ()=> widget.classList.toggle("open"));
  document.addEventListener("click",(e)=>{
    if(!widget.contains(e.target)) widget.classList.remove("open");
  });
}

function initFaq(){
  document.querySelectorAll(".faq-item").forEach(item=>{
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    q.addEventListener("click", ()=>{
      const isOpen = item.classList.contains("open");
      item.parentElement.querySelectorAll(".faq-item").forEach(i=>{
        i.classList.remove("open");
        i.querySelector(".faq-a").style.maxHeight = null;
      });
      if(!isOpen){
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });
}

function initReveal(){
  const els = document.querySelectorAll(".reveal");
  if(!els.length) return;
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); obs.unobserve(e.target); } });
  }, { threshold: 0.15 });
  els.forEach(el=> obs.observe(el));
}

function initHeaderShadow(){
  const header = document.querySelector(".site-header");
  if(!header) return;
  window.addEventListener("scroll", ()=>{
    header.style.boxShadow = window.scrollY > 12 ? "0 8px 24px -18px rgba(25,20,16,.4)" : "none";
  });
}

/* ---------------- Configurator (homepage) ---------------- */
function renderConfiguratorOptions(){
  const wrap = document.querySelector(".conf-options");
  if(!wrap) return;
  const lang = getLang();
  wrap.innerHTML = CATEGORIES.map(c=>`
    <button type="button" class="conf-opt" data-piece="${c.id}">
      <img src="${c.icon}" alt="">
      <span>${pickLang(c.name, lang)}</span>
    </button>
  `).join("");
}

function initConfigurator(){
  const stage = document.querySelector(".conf-stage");
  const wrap = document.querySelector(".conf-options");
  if(!stage || !wrap) return;
  const label = document.querySelector(".conf-stage-label span");
  const clearBtn = document.querySelector(".conf-clear-btn");

  function clearStage(){
    stage.querySelectorAll(".layer:not(.base)").forEach(l=> l.classList.remove("active"));
    wrap.querySelectorAll(".conf-opt").forEach(o=>o.classList.remove("active"));
    if(label) label.textContent = (I18N[getLang()]||I18N.sr).conf_empty_label;
  }

  wrap.addEventListener("click",(e)=>{
    const opt = e.target.closest(".conf-opt");
    if(!opt) return;
    const key = opt.dataset.piece;
    const isActive = opt.classList.contains("active");
    stage.querySelectorAll(".layer:not(.base)").forEach(l=> l.classList.remove("active"));
    wrap.querySelectorAll(".conf-opt").forEach(o=>o.classList.remove("active"));
    if(!isActive){
      const layer = stage.querySelector(`.layer[data-piece="${key}"]`);
      if(layer) layer.classList.add("active");
      opt.classList.add("active");
      if(label) label.textContent = opt.querySelector("span").textContent;
    } else {
      if(label) label.textContent = (I18N[getLang()]||I18N.sr).conf_empty_label;
    }
  });

  if(clearBtn) clearBtn.addEventListener("click", clearStage);
}

/* ---------------- Homepage: categories + gallery ---------------- */
const SWATCHES = ["#8a5f38","#6f4a2d","#b08d57","#4a3320","#c7ae82","#5b3a24"];

function renderHomeCategories(){
  const grid = document.querySelector(".cat-grid");
  if(!grid) return;
  const lang = getLang();
  grid.innerHTML = CATEGORIES.map(c => `
    <a class="cat-card reveal" href="kategorija.html?kat=${c.id}">
      <div class="icon-plate"><img src="${c.icon}" alt=""></div>
      <h3>${pickLang(c.name, lang)}</h3>
      <p>${pickLang(c.desc, lang)}</p>
      <span class="cat-link" data-i18n="cat_cta">${(I18N[lang]||I18N.sr).cat_cta}</span>
    </a>
  `).join("");
}

function renderMegaMenu(){
  document.querySelectorAll(".mega-drop").forEach(drop=>{
    const lang = getLang();
    drop.innerHTML = CATEGORIES.map(c=>`
      <a href="kategorija.html?kat=${c.id}"><img src="${c.icon}" alt="">${pickLang(c.name, lang)}</a>
    `).join("");
  });
}
function renderGallery(){
  document.querySelectorAll(".gallery-grid").forEach(grid=>{
    const limit = grid.dataset.galleryLimit;
    const images = (!limit || limit === "all")
      ? INSTAGRAM_IMAGES
      : INSTAGRAM_IMAGES.slice(0, parseInt(limit, 10));
    grid.innerHTML = images.map((src, i) => `
      <button type="button" class="reveal insta-tile-btn" data-src="${src}">
        <span class="insta-tile">
          <span class="swatch" style="background:linear-gradient(150deg, ${SWATCHES[i % SWATCHES.length]}, #241a12);"></span>
          <img class="insta-photo" src="${src}" alt="" loading="lazy" onerror="this.remove()">
          <span class="ig-icon">${iconZoom()}</span>
        </span>
      </button>
    `).join("");
  });
}
/* ---------------- Lightbox (zumiranje galerije) ---------------- */
function ensureLightbox(){
  if(document.querySelector(".lightbox")) return;
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = `
    <div class="lightbox-backdrop"></div>
    <div class="lightbox-inner">
      <button type="button" class="lightbox-close" aria-label="Zatvori">${iconClose()}</button>
      <button type="button" class="lightbox-prev" aria-label="Prethodna slika">${iconChevron()}</button>
      <img class="lightbox-img" src="" alt="">
      <button type="button" class="lightbox-next" aria-label="Sledeća slika">${iconChevron("right")}</button>
    </div>
  `;
  document.body.appendChild(lb);
}

function initLightbox(){
  ensureLightbox();
  const lb = document.querySelector(".lightbox");
  const imgEl = lb.querySelector(".lightbox-img");
  let list = [];
  let index = 0;

  function show(){ imgEl.src = list[index]; }
  function open(newList, startIndex){
    list = newList; index = startIndex;
    show();
    lb.classList.add("open");
    document.body.classList.add("lightbox-lock");
  }
  function close(){
    lb.classList.remove("open");
    document.body.classList.remove("lightbox-lock");
    imgEl.src = "";
  }
  function step(dir){
    if(!list.length) return;
    index = (index + dir + list.length) % list.length;
    show();
  }

  document.addEventListener("click",(e)=>{
    const tileBtn = e.target.closest(".insta-tile-btn");
    if(tileBtn){
      if(!tileBtn.querySelector(".insta-photo")) return; // slika još nije postavljena
      const grid = tileBtn.closest(".gallery-grid");
      const tiles = Array.from(grid.querySelectorAll(".insta-tile-btn")).filter(b=>b.querySelector(".insta-photo"));
      const newList = tiles.map(b=>b.dataset.src);
      open(newList, tiles.indexOf(tileBtn));
      return;
    }
    if(e.target.closest(".lightbox-close") || e.target.closest(".lightbox-backdrop")){ close(); return; }
    if(e.target.closest(".lightbox-next")){ step(1); return; }
    if(e.target.closest(".lightbox-prev")){ step(-1); return; }
  });

  document.addEventListener("keydown",(e)=>{
    if(!lb.classList.contains("open")) return;
    if(e.key === "Escape") close();
    if(e.key === "ArrowRight") step(1);
    if(e.key === "ArrowLeft") step(-1);
  });
}
/* ---------------- Testimonials ---------------- */
function renderTestimonials(){
  const grid = document.querySelector(".testimonials-grid");
  if(!grid) return;
  const lang = getLang();
  grid.innerHTML = TESTIMONIALS.map(t=>`
    <figure class="testi-card reveal">
      <span class="testi-quote-mark">&ldquo;</span>
      <blockquote>${pickLang(t.quote, lang)}</blockquote>
      <div class="testi-stars">${"★".repeat(t.rating)}${"☆".repeat(5-t.rating)}</div>
      <figcaption>
        <span class="testi-avatar">${t.initials}</span>
        <span>
          <b>${t.name}</b>
          <small>${pickLang(t.role, lang)}</small>
        </span>
      </figcaption>
    </figure>
  `).join("");
}

/* ---------------- Category listing page ---------------- */
function initCategoryPage(){
  const pillsWrap = document.querySelector(".cat-pills");
  if(!pillsWrap) return;
  const grid = document.querySelector(".product-grid");
  if(!grid) return;
  const params = new URLSearchParams(location.search);
  let activeCat = params.get("kat") || "all";

  function renderPills(){
    const lang = getLang();
    let html = `<a href="kategorija.html" class="cat-pill ${activeCat==='all'?'active':''}">${(I18N[lang]||I18N.sr).cat_page_all}</a>`;
    html += CATEGORIES.map(c=>`<a href="kategorija.html?kat=${c.id}" class="cat-pill ${activeCat===c.id?'active':''}">${pickLang(c.name,lang)}</a>`).join("");
    pillsWrap.innerHTML = html;
  }

  function renderHeading(){
    const lang = getLang();
    const titleEl = document.querySelector(".page-hero h1");
    const textEl = document.querySelector(".page-hero p");
    const crumbCurrent = document.querySelector(".breadcrumb .current");
    if(activeCat === "all"){
      titleEl.textContent = (I18N[lang]||I18N.sr).cat_page_all;
      textEl.textContent = "";
      if(crumbCurrent) crumbCurrent.textContent = (I18N[lang]||I18N.sr).cat_page_all;
    } else {
      const cat = CATEGORIES.find(c=>c.id===activeCat);
      if(cat){
        titleEl.textContent = pickLang(cat.name, lang);
        textEl.textContent = pickLang(cat.desc, lang);
        if(crumbCurrent) crumbCurrent.textContent = pickLang(cat.name, lang);
      }
    }
  }

  function renderProducts(){
    const lang = getLang();
    const list = activeCat === "all" ? PRODUCTS : PRODUCTS.filter(p=>p.cat===activeCat);
    if(!list.length){
      grid.innerHTML = `<div class="empty-state">—</div>`;
      return;
    }
    grid.innerHTML = list.map(p=>`
      <a class="product-card reveal" href="proizvod.html?id=${p.id}">
        <div class="product-media">
          <span class="tag">${pickLang(CATEGORIES.find(c=>c.id===p.cat).name, lang)}</span>
          <img src="${p.icon}" alt="${pickLang(p.name,lang)}">
        </div>
        <div class="product-body">
          <h3>${pickLang(p.name, lang)}</h3>
          <div class="material">${pickLang(p.material, lang)}</div>
          <div class="product-foot">
            <div class="product-price"><small>${(I18N[lang]||I18N.sr).cat_page_from}</small>€${p.price}</div>
            <span class="mini-link">${(I18N[lang]||I18N.sr).cat_page_view}</span>
          </div>
        </div>
      </a>
    `).join("");
    initReveal();
  }

  function renderAll(){ renderPills(); renderHeading(); renderProducts(); }
  renderAll();
  document.addEventListener("langchange", renderAll);
}

/* ---------------- Product detail page ---------------- */
/* Derives the base illustration name from a product's icon path,
   e.g. "images/configurator/ormar.svg" -> "ormar", so we can look up
   the matching per-color file in images/configurator/colors/. */
function shapeKeyFromIcon(iconPath){
  const file = iconPath.split("/").pop();
  return file.replace(/\.[a-z0-9]+$/i, "");
}

function initProductPage(){
  const root = document.querySelector(".product-detail");
  if(!root) return;
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const product = PRODUCTS.find(p=>p.id===id) || PRODUCTS[0];
  const category = CATEGORIES.find(c=>c.id===product.cat);
  const baseShape = shapeKeyFromIcon(product.icon);

  const palette = (product.colors && product.colors.length) ? product.colors : COLORS;
  let selectedColor = palette[0];

  const orderColorField = document.querySelector(".pd-order input[name='color']");

  function colorImagePath(color){
    // A color can carry its own explicit `image` (real product photo, once available).
    // Otherwise we fall back to the generated per-shape/per-color illustration.
    return color.image || `images/configurator/colors/${baseShape}-${color.code}.svg`;
  }

  function applyColor(color){
    selectedColor = color;
    const img = document.querySelector(".pd-media img");
    if(img){
      img.src = colorImagePath(color);
      // if a color-specific image doesn't exist yet, fall back to the base product photo
      img.onerror = function(){ this.onerror = null; this.src = product.icon; };
    }
    const lang = getLang();
    const activeDot = document.querySelector(".pd-color-active .dot");
    const activeName = document.querySelector(".pd-color-active .name");
    const activeCode = document.querySelector(".pd-color-active .code");
    if(activeDot) activeDot.style.background = color.hex;
    if(activeName) activeName.textContent = pickLang(color.name, lang);
    if(activeCode) activeCode.textContent = color.code;
    document.querySelectorAll(".swatch-btn").forEach(btn=>{
      btn.classList.toggle("active", btn.dataset.code === color.code);
    });
    if(orderColorField) orderColorField.value = `${pickLang(color.name,"sr")} (${color.code})`;
  }

  function renderSwatches(){
  const wrap = document.querySelector("#colorSwatches");
  if(!wrap) return;

  const lang = getLang();

  wrap.innerHTML = palette.map(c=>`
    <button
      type="button"
      class="swatch-btn ${c.code === selectedColor.code ? "active" : ""}"
      data-code="${c.code}"
      style="--swatch:${c.hex};"
      title="${pickLang(c.name, lang)} — ${c.code}"
      aria-label="${pickLang(c.name, lang)}"
    >
      <span class="swatch-fill"></span>
    </button>
  `).join("");

  wrap.querySelectorAll(".swatch-btn").forEach(btn=>{
    btn.addEventListener("click", e=>{
      e.preventDefault();

      const color = palette.find(c => c.code === btn.dataset.code);

      if(color){
        applyColor(color);
      }
    });
  });
}

  function filterSwatches(query){
    const q = query.trim().toLowerCase();
    const emptyMsg = document.querySelector(".color-empty");
    let visibleCount = 0;
    document.querySelectorAll(".swatch-btn").forEach(btn=>{
      const c = palette.find(p=>p.code===btn.dataset.code);
      const lang = getLang();
      const haystack = (c.code + " " + pickLang(c.name, lang)).toLowerCase();
      const match = !q || haystack.includes(q);
      btn.style.display = match ? "" : "none";
      if(match) visibleCount++;
    });
    if(emptyMsg) emptyMsg.hidden = visibleCount !== 0;
  }

  function render(){
    const lang = getLang();
    document.title = pickLang(product.name, lang) + " — Unikat Nameštaj";
    document.querySelector(".breadcrumb .current").textContent = pickLang(product.name, lang);
    document.querySelector(".breadcrumb .cat-crumb").textContent = pickLang(category.name, lang);
    document.querySelector(".breadcrumb .cat-crumb").href = `kategorija.html?kat=${category.id}`;
    document.querySelector(".pd-media img").alt = pickLang(product.name, lang);
    document.querySelector(".pd-info h1").textContent = pickLang(product.name, lang);
    document.querySelector(".pd-desc").textContent = pickLang(product.desc, lang);
    document.querySelector(".pd-price").innerHTML = `<small>${(I18N[lang]||I18N.sr).product_price_label}</small>€${product.price}`;
    document.querySelector('[data-spec="material"] span').textContent = pickLang(product.material, lang);
    document.querySelector('[data-spec="dims"] span').textContent = product.dims;
    document.querySelector(".pd-order input[name='product']").value = pickLang(product.name, "sr") + " (" + product.id + ")";

    renderSwatches();
    applyColor(selectedColor);
    const searchInput = document.querySelector("#colorSearch");
    if(searchInput) filterSwatches(searchInput.value || "");

    const related = PRODUCTS.filter(p=>p.cat===product.cat && p.id!==product.id).slice(0,3);
    const relGrid = document.querySelector(".related .product-grid");
    if(relGrid){
      relGrid.innerHTML = related.map(p=>`
        <a class="product-card reveal" href="proizvod.html?id=${p.id}">
          <div class="product-media">
            <span class="tag">${pickLang(category.name, lang)}</span>
            <img src="${p.icon}" alt="${pickLang(p.name,lang)}">
          </div>
          <div class="product-body">
            <h3>${pickLang(p.name, lang)}</h3>
            <div class="material">${pickLang(p.material, lang)}</div>
            <div class="product-foot">
              <div class="product-price"><small>${(I18N[lang]||I18N.sr).cat_page_from}</small>€${p.price}</div>
              <span class="mini-link">${(I18N[lang]||I18N.sr).cat_page_view}</span>
            </div>
          </div>
        </a>
      `).join("");
    }
    initReveal();
  }

  const swatchesWrap = document.querySelector("#colorSwatches");
  if(swatchesWrap){
    swatchesWrap.addEventListener("click", (e)=>{
      const btn = e.target.closest(".swatch-btn");
      if(!btn) return;
      const color = palette.find(c=>c.code===btn.dataset.code);
      if(color) applyColor(color);
    });
  }
  const searchInput = document.querySelector("#colorSearch");
  if(searchInput){
    searchInput.addEventListener("input", ()=> filterSwatches(searchInput.value));
  }

  render();
  document.addEventListener("langchange", render);
}

/* ---------------- Forms (contact + order) — front-end only ---------------- */
function initForms(){
  document.querySelectorAll("form[data-form]").forEach(form=>{
    form.addEventListener("submit",(e)=>{
      e.preventDefault();
      const lang = getLang();
      const status = form.querySelector(".form-status");
      const required = form.querySelectorAll("[required]");
      let valid = true;
      required.forEach(f=>{ if(!f.value.trim()) valid = false; });
      if(!valid){
        status.textContent = (I18N[lang]||I18N.sr).form_required;
        status.className = "form-status show err";
        return;
      }
      const successKey = form.dataset.form === "order" ? "product_order_success" : "form_success";
      status.textContent = (I18N[lang]||I18N.sr)[successKey];
      status.className = "form-status show ok";
      const submitBtn = form.querySelector("button[type='submit']");
      if(submitBtn) submitBtn.setAttribute("disabled","disabled");
      form.reset();
    });
  });
}

/* ---------------- small inline icons ---------------- */
function iconInstagram(){
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#241a12" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>`;
}
function iconZoom(){
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#241a12" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6M8 11h6"/></svg>`;
}
function iconClose(){
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>`;
}
function iconChevron(dir){
  const d = dir === "right" ? "m9 6 6 6-6 6" : "m15 6-6 6 6 6";
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${d}"/></svg>`;
}
/* ---------------- boot ---------------- */
document.addEventListener("DOMContentLoaded", ()=>{
  document.documentElement.setAttribute("lang", getLang());
  initLangSwitchers();
  initMobileNav();
  initFloatingWidget();
  initFaq();
  initHeaderShadow();
  renderMegaMenu();
  renderHomeCategories();
  renderGallery();
  initLightbox();   // ⬅ dodaj ovu liniju odmah posle renderGallery()
  renderConfiguratorOptions();
  renderTestimonials();
  initConfigurator();
  initCategoryPage();
  initProductPage();
  initForms();
  applyI18n(getLang());
  initReveal();

  document.addEventListener("langchange", ()=>{
    renderMegaMenu();
    renderHomeCategories();
    renderConfiguratorOptions();
    renderTestimonials();
  });
});
