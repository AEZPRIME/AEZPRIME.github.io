/* ============================================================
   LABTECA — LÓGICA PRINCIPAL
   Depende de que js/data.js se cargue primero en el HTML.
   ============================================================ */

let activeCat = 'all';
let statusFilter = 'all';
let searchTerm = '';
const GALERIA_PAGINA = 12; // fotos por página (12 se divide bien entre 2, 3 y 4 columnas)
let galeriaPagina = 0;     // página actual (0-indexada)

function catInfo(id){ return CATEGORIAS.find(c => c.id === id); }

/* ============================================================
   ESTADO DE LECTURA — "leyendo" / "leído" por libro, guardado en
   este navegador (localStorage). No requiere cuenta ni servidor;
   si se borra el caché o se usa otro dispositivo, no se conserva.
   ============================================================ */
const STATUS_KEY = 'labteca-status';
let bookStatus = {};
try { bookStatus = JSON.parse(localStorage.getItem(STATUS_KEY)) || {}; } catch(e){ bookStatus = {}; }

function getStatus(id){ return bookStatus[id] || 'none'; }

function setStatus(id, status){
  if(status === 'none') delete bookStatus[id];
  else bookStatus[id] = status;
  try { localStorage.setItem(STATUS_KEY, JSON.stringify(bookStatus)); } catch(e){ /* almacenamiento no disponible */ }
}

function cycleStatus(id){
  const order = ['none', 'leyendo', 'leido'];
  const next = order[(order.indexOf(getStatus(id)) + 1) % order.length];
  setStatus(id, next);
  return next;
}

function statusIconSVG(status){
  if(status === 'leido'){
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.6l4.6 4.6L19 7.5"/></svg>`;
  }
  if(status === 'leyendo'){
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12.3" r="7.3"/><path d="M12 8.4v4l2.8 1.8"/></svg>`;
  }
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4h10a1 1 0 0 1 1 1v15l-6-4-6 4V5a1 1 0 0 1 1-1Z"/></svg>`;
}
function statusNextLabel(status){
  return status === 'leido' ? 'Quitar marca de leído' : status === 'leyendo' ? 'Marcar como leído' : 'Marcar como leyendo';
}

/* ============================================================
   TEMA CLARO / OSCURO
   ============================================================ */
const THEME_KEY = 'labteca-theme';
function applyTheme(theme){
  if(theme === 'dark'){
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}
(function initTheme(){
  let saved = null;
  try { saved = localStorage.getItem(THEME_KEY); } catch(e){ /* almacenamiento no disponible */ }
  applyTheme(saved === 'dark' ? 'dark' : 'light');
})();

document.getElementById('themeToggle').addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem(THEME_KEY, next); } catch(e){ /* almacenamiento no disponible */ }
});

/* ---------------- FILTROS ---------------- */
function renderFilters(){
  const wrap = document.getElementById('filters');
  const all = `<button class="chip is-active" data-cat="all"><span class="dot" style="background:var(--ink)"></span>Todas</button>`;
  const chips = CATEGORIAS.map(c =>
    `<button class="chip" data-cat="${c.id}"><span class="dot" style="background:${c.color}"></span>${c.nombre}</button>`
  ).join('');
  wrap.innerHTML = all + chips;
  wrap.addEventListener('click', e => {
    const btn = e.target.closest('.chip');
    if(!btn) return;
    activeCat = btn.dataset.cat;
    [...wrap.children].forEach(c => c.classList.toggle('is-active', c === btn));
    btn.blur();
    renderBooks();
  });
}

/* ---------------- ÍCONOS ----------------
   Set propio de íconos de línea, trazo consistente (1.5–1.8),
   con un par de piezas con identidad de laboratorio (frasco,
   buscador con mira de precisión) en vez de íconos genéricos. */
function phIconSVG(){
  return `<svg class="ph-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 3h6"/>
    <path d="M10 3v5.6L4.85 17.1a2 2 0 0 0 1.72 3h10.86a2 2 0 0 0 1.72-3L14 8.6V3"/>
    <path d="M7.6 14.4h8.8"/>
  </svg>`;
}
function bookIconSVG(){
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 6.4C10.3 5.2 7.9 4.5 5.3 4.5v12.7c2.6 0 5 .7 6.7 1.9 1.7-1.2 4.1-1.9 6.7-1.9V4.5c-2.6 0-5 .7-6.7 1.9Z"/>
    <path d="M12 6.4v12.7"/>
  </svg>`;
}
function downloadIconSVG(){
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3.7v9.7"/><path d="M8.2 9.7l3.8 3.8 3.8-3.8"/>
    <path d="M5 16.6v1.8a1.8 1.8 0 0 0 1.8 1.8h10.4a1.8 1.8 0 0 0 1.8-1.8v-1.8"/>
  </svg>`;
}
function emptyIconSVG(){
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 3h6"/><path d="M10 3v5.6L4.85 17.1a2 2 0 0 0 1.72 3h10.86a2 2 0 0 0 1.72-3L14 8.6V3"/><path d="M7.6 14.4h8.8"/>
  </svg>`;
}

function coverHTML(libro){
  const src = libroPortada(libro);
  if(!src){
    return phIconSVG();
  }
  return `<img src="${src}" alt="Portada de ${libro.titulo}" loading="lazy"
           onload="this.classList.add('is-loaded')"
           onerror="this.style.display='none'; this.parentElement.insertAdjacentHTML('beforeend', phIconSVG());">`;
}

function bookCardHTML(libro, idx){
  const cat = catInfo(libro.categoria);
  const status = getStatus(libro.id);
  const warn = libro.permisoPendiente
    ? `<span class="card-warn">Falta compartir en Drive</span>`
    : '';
  return `
  <article class="card status-${status}" style="--ci:${idx}">
    <div class="card-cap" style="background:${cat.color}"></div>
    <div class="card-cover">
      <span class="card-code">${libro.codigo}</span>
      <button class="status-btn" data-action="status" data-id="${libro.id}" aria-label="${statusNextLabel(status)}" title="${statusNextLabel(status)}">${statusIconSVG(status)}</button>
      ${coverHTML(libro)}
    </div>
    <div class="card-body">
      <span class="card-cat" style="color:${cat.color}">${cat.nombre}</span>
      <h3 class="card-title">${libro.titulo}</h3>
      <p class="card-meta">${libro.autor}${libro.edicion ? ' · ' + libro.edicion : ''}</p>
      <p class="card-desc">${libro.descripcion}</p>
      ${warn}
      <div class="card-actions">
        <button class="btn btn-primary btn-sm" data-action="leer" data-id="${libro.id}">${bookIconSVG()}Leer</button>
        <a class="btn btn-ghost btn-sm" href="${libroDescarga(libro)}" target="_blank" rel="noopener">${downloadIconSVG()}Descargar</a>
      </div>
    </div>
  </article>`;
}

function emptyCardHTML(cat){
  return `
  <div class="card-empty">
    ${emptyIconSVG()}
    <strong>${cat.nombre}</strong>
    <p>Aún no hay libros aquí. Agrega uno en el arreglo <code>LIBROS</code> de js/data.js.</p>
  </div>`;
}

function renderBooks(){
  const grid = document.getElementById('bookGrid');
  const term = searchTerm.trim().toLowerCase();

  let lista = LIBROS.filter(l =>
    (activeCat === 'all' || l.categoria === activeCat) &&
    (statusFilter === 'all' || getStatus(l.id) === statusFilter) &&
    (term === '' || l.titulo.toLowerCase().includes(term) || l.autor.toLowerCase().includes(term))
  );

  if(lista.length === 0){
    const cats = activeCat === 'all' ? CATEGORIAS : [catInfo(activeCat)];
    grid.innerHTML = statusFilter !== 'all'
      ? `<div class="card-empty" style="grid-column:1/-1;">${emptyIconSVG()}<strong>Sin resultados</strong><p>No hay libros con ese estado en esta categoría todavía.</p></div>`
      : cats.map(emptyCardHTML).join('');
  } else {
    grid.innerHTML = lista.map((l, i) => bookCardHTML(l, i)).join('');
  }

  document.getElementById('countTag').textContent = `${lista.length} título${lista.length === 1 ? '' : 's'}`;
  updateProgress();
}

function updateProgress(){
  const total = LIBROS.length;
  const leidos = LIBROS.filter(l => getStatus(l.id) === 'leido').length;
  const leyendo = LIBROS.filter(l => getStatus(l.id) === 'leyendo').length;
  const pct = total ? Math.round((leidos / total) * 100) : 0;
  const tag = document.getElementById('progressTag');
  const fill = document.getElementById('progressBarFill');
  if(tag) tag.textContent = `${leidos} de ${total} leídos · ${leyendo} en progreso`;
  if(fill) fill.style.width = pct + '%';
}

function renderStatusFilters(){
  const wrap = document.getElementById('statusFilters');
  wrap.addEventListener('click', e => {
    const btn = e.target.closest('.chip');
    if(!btn) return;
    statusFilter = btn.dataset.status;
    [...wrap.children].forEach(c => c.classList.toggle('is-active', c === btn));
    btn.blur();
    renderBooks();
  });
}

/* ---------------- GALERÍA (paginada: tamaño fijo, no crece hacia abajo) ---------------- */
function renderGallery(){
  const grid = document.getElementById('galleryGrid');
  const pager = document.getElementById('galleryPager');

  if(GALERIA.length === 0){
    grid.innerHTML = `<div class="card-empty" style="grid-column:1/-1;">
      ${emptyIconSVG()}
      <strong>Sin imágenes todavía</strong>
      <p>Agrega fotos del laboratorio en el arreglo <code>GALERIA</code> de js/data.js.</p>
    </div>`;
    pager.style.display = 'none';
    document.getElementById('galleryCount').textContent = '';
    return;
  }

  const totalPaginas = Math.ceil(GALERIA.length / GALERIA_PAGINA);
  galeriaPagina = Math.max(0, Math.min(galeriaPagina, totalPaginas - 1));
  const inicio = galeriaPagina * GALERIA_PAGINA;
  const pagina = GALERIA.slice(inicio, inicio + GALERIA_PAGINA);

  grid.innerHTML = pagina.map((g, i) => `
    <figure class="gphoto" data-idx="${inicio + i}" style="--gi:${i}">
      <img src="${galeriaSrc(g, 400)}" alt="${g.caption || 'Imagen de laboratorio'}" loading="lazy"
           onload="this.classList.add('is-loaded')"
           onerror="this.style.display='none'; this.parentElement.insertAdjacentHTML('beforeend', phIconSVG());">
      ${g.caption ? `<figcaption>${g.caption}</figcaption>` : ''}
    </figure>`).join('');

  grid.querySelectorAll('.gphoto').forEach(fig => {
    fig.addEventListener('click', () => openLightbox(Number(fig.dataset.idx)));
  });

  document.getElementById('galleryCount').textContent = `${GALERIA.length} fotos en total`;
  document.getElementById('galleryPageLabel').textContent = `Página ${galeriaPagina + 1} / ${totalPaginas}`;
  document.getElementById('galleryPrev').disabled = galeriaPagina === 0;
  document.getElementById('galleryNext').disabled = galeriaPagina >= totalPaginas - 1;
}

document.getElementById('galleryPrev').addEventListener('click', () => {
  if(galeriaPagina > 0){ galeriaPagina--; renderGallery(); }
});
document.getElementById('galleryNext').addEventListener('click', () => {
  const totalPaginas = Math.ceil(GALERIA.length / GALERIA_PAGINA);
  if(galeriaPagina < totalPaginas - 1){ galeriaPagina++; renderGallery(); }
});

/* ---------------- LIGHTBOX con avanzar / retroceder (recorre TODA la galería) ---------------- */
const lightbox = document.getElementById('lightbox');
let lightboxIndex = 0;

function showLightboxImage(){
  const item = GALERIA[lightboxIndex];
  if(!item) return;
  document.getElementById('lightboxImg').src = galeriaSrc(item, 1600);
  document.getElementById('lightboxImg').alt = item.caption || '';
  document.getElementById('lightboxCount').textContent = `${lightboxIndex + 1} / ${GALERIA.length}`;
}

function openLightbox(idx){
  lightboxIndex = idx;
  showLightboxImage();
  lightbox.classList.add('is-open');
  requestAnimationFrame(() => lightbox.classList.add('is-active'));
  document.body.style.overflow = 'hidden';
}

function lightboxStep(delta){
  const n = GALERIA.length;
  lightboxIndex = (lightboxIndex + delta + n) % n;
  showLightboxImage();
}

function closeLightbox(){
  lightbox.classList.remove('is-active');
  document.body.style.overflow = '';
  setTimeout(() => lightbox.classList.remove('is-open'), 200);
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', () => lightboxStep(-1));
document.getElementById('lightboxNext').addEventListener('click', () => lightboxStep(1));
lightbox.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });

// Deslizar con el dedo para avanzar/retroceder
let touchStartX = null;
const stage = document.querySelector('.lightbox-stage');
stage.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, {passive:true});
stage.addEventListener('touchend', e => {
  if(touchStartX === null) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if(Math.abs(dx) > 40) lightboxStep(dx < 0 ? 1 : -1);
  touchStartX = null;
}, {passive:true});

/* ============================================================
   LECTOR (MODAL) — recorta la barra de Drive solo cuando aplica;
   incluye control de zoom propio (independiente del visor de Drive).
   ============================================================ */
const overlay = document.getElementById('readerOverlay');
const frameWrap = document.getElementById('readerFrameWrap');
const fallback = document.getElementById('readerFallback');
const zoomLevelEl = document.getElementById('zoomLevel');
let readerZoom = 1;
const ZOOM_MIN = 1, ZOOM_MAX = 3, ZOOM_STEP = 0.25;

function applyZoom(){
  frameWrap.style.setProperty('--rzoom', readerZoom);
  zoomLevelEl.textContent = Math.round(readerZoom * 100) + '%';
}
document.getElementById('zoomIn').addEventListener('click', () => {
  readerZoom = Math.min(ZOOM_MAX, +(readerZoom + ZOOM_STEP).toFixed(2));
  applyZoom();
});
document.getElementById('zoomOut').addEventListener('click', () => {
  readerZoom = Math.max(ZOOM_MIN, +(readerZoom - ZOOM_STEP).toFixed(2));
  applyZoom();
});

function openReader(libro){
  document.getElementById('readerTitle').textContent = libro.titulo;
  document.getElementById('readerCode').textContent = libro.codigo;
  document.getElementById('readerDownload').href = libroDescarga(libro);
  fallback.classList.remove('show');

  readerZoom = 1;
  applyZoom();

  frameWrap.classList.toggle('is-drive', libroEsDrive(libro));
  frameWrap.innerHTML = `<iframe src="${libroVisor(libro)}" allow="autoplay"></iframe>`;
  overlay.classList.add('is-open');
  requestAnimationFrame(() => overlay.classList.add('is-active'));
  document.body.style.overflow = 'hidden';
}

function closeReader(){
  overlay.classList.remove('is-active');
  document.body.style.overflow = '';
  setTimeout(() => {
    overlay.classList.remove('is-open');
    frameWrap.innerHTML = '';
  }, 200);
}

document.getElementById('readerClose').addEventListener('click', closeReader);
overlay.addEventListener('click', e => { if(e.target === overlay) closeReader(); });

document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){ closeReader(); closeLightbox(); }
  if(lightbox.classList.contains('is-open')){
    if(e.key === 'ArrowLeft') lightboxStep(-1);
    if(e.key === 'ArrowRight') lightboxStep(1);
  }
  // Atajo "/" para enfocar la búsqueda, salvo si ya se está escribiendo en un campo
  if(e.key === '/' && document.activeElement.tagName !== 'INPUT'){
    e.preventDefault();
    document.getElementById('searchInput').focus();
  }
});

document.getElementById('bookGrid').addEventListener('click', e => {
  const leerBtn = e.target.closest('[data-action="leer"]');
  if(leerBtn){
    const libro = LIBROS.find(l => l.id == leerBtn.dataset.id);
    if(libro) openReader(libro);
    return;
  }
  const statusBtn = e.target.closest('[data-action="status"]');
  if(statusBtn){
    cycleStatus(statusBtn.dataset.id);
    renderBooks();
  }
});

/* ============================================================
   NAV MÓVIL, BÚSQUEDA Y GRADILLA
   ============================================================ */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', open);
});
navLinks.addEventListener('click', e => { if(e.target.tagName === 'A') { navLinks.classList.remove('is-open'); navToggle.setAttribute('aria-expanded', false); } });

document.getElementById('searchInput').addEventListener('input', e => {
  searchTerm = e.target.value;
  renderBooks();
});

document.querySelector('.rack').addEventListener('click', e => {
  const tube = e.target.closest('.tube');
  if(!tube) return;
  e.preventDefault();
  activeCat = tube.dataset.cat;
  document.querySelectorAll('.chip').forEach(c => c.classList.toggle('is-active', c.dataset.cat === activeCat));
  renderBooks();
  document.getElementById('catalogo').scrollIntoView({behavior:'smooth'});
});

document.getElementById('year').textContent = new Date().getFullYear();

/* ============================================================
   ENCABEZADO: sombra al hacer scroll + barra de progreso de lectura
   ============================================================ */
const header = document.getElementById('siteHeader');
const progressBar = document.getElementById('headerProgress');
function onScrollHeader(){
  header.classList.toggle('is-scrolled', window.scrollY > 8);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  progressBar.style.width = pct + '%';
}
document.addEventListener('scroll', onScrollHeader, {passive:true});
onScrollHeader();

/* ---------------- Resalte de sección activa en la navegación (scrollspy) ---------------- */
const spySections = ['inicio','categorias','catalogo','galeria','acerca']
  .map(id => document.getElementById(id)).filter(Boolean);
const spyLinks = [...document.querySelectorAll('[data-spy]')];
const spyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const id = entry.target.id;
      spyLinks.forEach(a => a.classList.toggle('is-active', a.dataset.spy === id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
spySections.forEach(s => spyObserver.observe(s));

/* ---------------- Botón "volver arriba" ---------------- */
const toTop = document.getElementById('toTop');
document.addEventListener('scroll', () => {
  toTop.classList.toggle('is-visible', window.scrollY > 600);
}, {passive:true});
toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

/* ---------------- Revelado al hacer scroll ---------------- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const delay = entry.target.dataset.revealDelay;
      if(delay) entry.target.style.transitionDelay = delay + 'ms';
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

/* ---------------- Contadores animados de la sección "Acerca" ---------------- */
function animateCount(el, target, duration = 1100){
  const start = performance.now();
  function tick(now){
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(eased * target);
    if(p < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  }
  requestAnimationFrame(tick);
}
const statBooksEl = document.getElementById('statBooks');
const statCatsEl = document.getElementById('statCats');
const countObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      animateCount(statBooksEl, LIBROS.length);
      animateCount(statCatsEl, CATEGORIAS.length);
      countObserver.disconnect();
    }
  });
}, { threshold: 0.4 });
countObserver.observe(document.querySelector('.about-card'));

/* ============================================================
   INICIO
   ============================================================ */
renderFilters();
renderStatusFilters();
renderBooks();
renderGallery();
