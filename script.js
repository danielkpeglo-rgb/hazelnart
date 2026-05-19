/* ============================================================
   HAZELNART — JavaScript
   ============================================================ */

/* ============================================================
   ★ PORTFOLIO DATA — ADD YOUR IMAGES HERE ★

   To add a new image, copy the format below and add a new line.
   Format:
   { src: 'images/portfolio/FOLDER/filename.jpg', title: 'Work Title', company: 'COMPANY NAME', filter: 'folder-name' }
   ============================================================ */

const portfolioData = [

  // ── FRIMPS OIL ─────────────────────────────────────────────
  { src: 'images/portfolio/frimps-oil/frimps-oil-flask-white.jpeg',    title: 'Branded Flask — White',  company: 'FRIMPS OIL', filter: 'frimps-oil' },
  { src: 'images/portfolio/frimps-oil/frimps-oil-packaging-box.jpeg',  title: 'Brand Packaging',        company: 'FRIMPS OIL', filter: 'frimps-oil' },
  { src: 'images/portfolio/frimps-oil/frimps-oil-flask-black.jpeg',    title: 'Branded Flask — Black',  company: 'FRIMPS OIL', filter: 'frimps-oil' },
  { src: 'images/portfolio/frimps-oil/frimps-oil-flask-red.jpeg',      title: 'Branded Flask — Red',    company: 'FRIMPS OIL', filter: 'frimps-oil' },

  // ── FUELTRADE ───────────────────────────────────────────────
  { src: 'images/portfolio/fueltrade/fueltrade-workers-day-tshirt-1.jpeg', title: "Workers' Day T-Shirt",  company: 'FUELTRADE', filter: 'fueltrade' },
  { src: 'images/portfolio/fueltrade/fueltrade-workers-day-tshirt-2.jpeg', title: "Workers' Day T-Shirt",  company: 'FUELTRADE', filter: 'fueltrade' },
  { src: 'images/portfolio/fueltrade/fueltrade-branded-tshirt-1.jpeg',     title: 'Corporate T-Shirt',     company: 'FUELTRADE', filter: 'fueltrade' },
  { src: 'images/portfolio/fueltrade/fueltrade-branded-tshirt-2.jpeg',     title: 'Corporate T-Shirt',     company: 'FUELTRADE', filter: 'fueltrade' },

  // ── USUYYA GH ──────────────────────────────────────────────
  { src: 'images/portfolio/usuyya-gh/usuyya-hard-hat-1.jpeg', title: 'Branded Hard Hat', company: 'USUYYA GH', filter: 'usuyya-gh' },
  { src: 'images/portfolio/usuyya-gh/usuyya-hard-hat-2.jpeg', title: 'Branded Hard Hat', company: 'USUYYA GH', filter: 'usuyya-gh' },

  // ── INDIVIDUAL WORKS ───────────────────────────────────────
  { src: 'images/portfolio/individual/eys-glam-studio-signage.jpeg',        title: 'Studio Signage',             company: 'EYS Glam Studio',          filter: 'individual' },
  { src: 'images/portfolio/individual/jozzy-kidz-tshirts.jpeg',             title: 'Branded T-Shirts',           company: 'Jozzy Kidz',               filter: 'individual' },
  { src: 'images/portfolio/individual/eagle-petroleum-mugs.jpeg',           title: 'Branded Mugs',               company: 'Eagle Petroleum',          filter: 'individual' },
  { src: 'images/portfolio/individual/eagle-petroleum-flasks.jpeg',         title: 'Branded Flasks',             company: 'Eagle Petroleum',          filter: 'individual' },
  { src: 'images/portfolio/individual/ji-anniversary-notebooks.jpeg',       title: 'Anniversary Notebooks',      company: 'JI',                       filter: 'individual' },
  { src: 'images/portfolio/individual/harryhill-consulting-pen.jpeg',       title: 'Branded Pen',                company: 'Harryhill Consulting',     filter: 'individual' },
  { src: 'images/portfolio/individual/harryhill-consulting-pens-batch.jpeg',title: 'Branded Pens Batch',         company: 'Harryhill Consulting',     filter: 'individual' },
  { src: 'images/portfolio/individual/ja-group-anniversary-bag.jpeg',       title: 'Anniversary Bag',            company: 'JA Group',                 filter: 'individual' },
  { src: 'images/portfolio/individual/bolivia-2025-caps-1.jpeg',            title: 'Branded Caps',               company: 'Bolivia 2025',             filter: 'individual' },
  { src: 'images/portfolio/individual/bolivia-2025-caps-2.jpeg',            title: 'Branded Caps',               company: 'Bolivia 2025',             filter: 'individual' },
  { src: 'images/portfolio/individual/bolivia-2025-bottle-opener.jpeg',     title: 'Branded Bottle Opener',      company: 'Bolivia 2025',             filter: 'individual' },
  { src: 'images/portfolio/individual/bolivia-2025-keychains.jpeg',         title: 'Branded Keychains',          company: 'Bolivia 2025',             filter: 'individual' },
  { src: 'images/portfolio/individual/kwasaf-business-cards-front.jpeg',    title: 'Business Cards — Front',     company: 'Kwasaf',                   filter: 'individual' },
  { src: 'images/portfolio/individual/kwasaf-business-cards-back.jpeg',     title: 'Business Cards — Back',      company: 'Kwasaf',                   filter: 'individual' },
  { src: 'images/portfolio/individual/pure-word-ministry-tshirts.jpeg',     title: 'Ministry T-Shirts',          company: 'Pure Word Ministry',       filter: 'individual' },
  { src: 'images/portfolio/individual/pj-cost-business-cards-1.jpeg',       title: 'Business Cards',             company: 'PJ Cost',                  filter: 'individual' },
  { src: 'images/portfolio/individual/pj-cost-business-cards-2.jpeg',       title: 'Business Cards',             company: 'PJ Cost',                  filter: 'individual' },
  { src: 'images/portfolio/individual/presbyterian-college-badge.jpeg',     title: 'College Badge',              company: 'Presbyterian College',     filter: 'individual' },
  { src: 'images/portfolio/individual/school-badges-collection.jpeg',       title: 'School Badges Collection',   company: 'Various Schools',          filter: 'individual' },
  { src: 'images/portfolio/individual/sapore-perfetto-bag-1.jpeg',          title: 'Branded Paper Bag',          company: 'Sapore Perfetto',          filter: 'individual' },
  { src: 'images/portfolio/individual/sapore-perfetto-bag-2.jpeg',          title: 'Branded Paper Bag',          company: 'Sapore Perfetto',          filter: 'individual' },
  { src: 'images/portfolio/individual/dna-paper-bag-1.jpeg',                title: 'Branded Paper Bag',          company: 'DNA',                      filter: 'individual' },
  { src: 'images/portfolio/individual/dna-paper-bag-2.jpeg',                title: 'Branded Paper Bag',          company: 'DNA',                      filter: 'individual' },
  { src: 'images/portfolio/individual/kasani-lux-pouch-red.jpeg',           title: 'Luxury Pouch — Red',         company: 'Kasani Lux',               filter: 'individual' },
  { src: 'images/portfolio/individual/kasani-lux-pouches.jpeg',             title: 'Luxury Pouches',             company: 'Kasani Lux',               filter: 'individual' },
  { src: 'images/portfolio/individual/emergency-assembly-signs.jpeg',       title: 'Emergency Assembly Signs',   company: 'Signage',                  filter: 'individual' },
  { src: 'images/portfolio/individual/legal-aid-commission-award.jpeg',     title: 'Award Design',               company: 'Legal Aid Commission',     filter: 'individual' },
  { src: 'images/portfolio/individual/goodgoods-banner.jpeg',               title: 'Promotional Banner',         company: 'Good Goods',               filter: 'individual' },
  { src: 'images/portfolio/individual/exhibition-mirror-panels.jpeg',       title: 'Exhibition Mirror Panels',   company: 'Exhibition',               filter: 'individual' },
  { src: 'images/portfolio/individual/despite-automobile-museum-sign.jpeg', title: 'Museum Signage',             company: 'Despite Automobile Museum',filter: 'individual' },

];

/* ============================================================
   SERVICES DATA
   ============================================================ */
const servicesData = [
  { icon: '🖨️', title: 'Digital Paper Prints',    desc: 'Flyers, brochures, business cards, catalogues, posters, and every paper-based print material crafted with precision and premium quality.' },
  { icon: '📐', title: 'Large Format Prints',      desc: 'Banners, billboards, flex prints, roll-up stands, and monumental graphics that command attention and stop people in their tracks.' },
  { icon: '🎯', title: '3D Design & Renders',      desc: 'Stunning 3D mockups, product visualisations, architectural renders, and dimensional brand materials that bring concepts to life.' },
  { icon: '👕', title: 'T-Shirt & Apparel',        desc: 'DTF printing, screen printing, embroidery, and sublimation for corporate uniforms, branded merchandise, and event apparel.' },
  { icon: '🎁', title: 'Souvenirs & Gift Items',   desc: 'Branded mugs, pens, notebooks, keychains, tote bags, phone cases, and custom corporate gifts that leave lasting impressions.' },
  { icon: '🎨', title: 'Brand Identity & Logo',    desc: 'Complete brand identity design — logos, colour systems, typography, and brand guidelines that define and distinguish your business.' },
  { icon: '📋', title: 'Corporate Stationery',     desc: 'Letterheads, envelopes, compliment slips, invoice templates, and full stationery packages that project professionalism.' },
  { icon: '🚗', title: 'Vehicle Branding',         desc: 'Car wraps, truck graphics, fleet vehicle branding, and mobile advertising that carries your brand wherever the road goes.' },
  { icon: '🎪', title: 'Exhibition & Events',      desc: 'Trade show booths, pop-up displays, step-and-repeat backdrops, and event branding that makes your brand unforgettable.' },
  { icon: '📦', title: 'Packaging Design',         desc: 'Product box design, labels, stickers, and packaging that protects your product while elevating your brand on the shelf.' },
  { icon: '🏗️', title: 'Outdoor Advertising',     desc: 'Billboard designs, shop frontage signage, wayfinding systems, and outdoor advertising that drives footfall and brand recall.' },
  { icon: '📱', title: 'Digital Marketing Assets', desc: 'Social media graphics, email templates, digital banners, and all visual content your brand needs for a powerful online presence.' },
];

/* ============================================================
   PARTNERS DATA
   ============================================================ */
const partnersData = [
  { name: 'FRIMPS OIL',        sector: 'Oil & Gas',         initial: 'F' },
  { name: 'FUELTRADE',         sector: 'Energy Trading',    initial: 'F' },
  { name: 'GASO PETROLEUM',    sector: 'Petroleum',         initial: 'G' },
  { name: 'TEMA FUEL COMPANY', sector: 'Energy Sector',     initial: 'T' },
  { name: 'USUYYA GH',         sector: 'Ghana',             initial: 'U' },
  { name: 'GOETHE INSTITUT',   sector: 'Cultural Institute',initial: 'G' },
  { name: 'WPG GHANA',         sector: 'Ghana',             initial: 'W' },
];

/* ============================================================
   PLACEHOLDER SLUGS (shown when portfolio is empty)
   ============================================================ */
const companySlugs = [
  { filter: 'frimps-oil',        name: 'FRIMPS OIL' },
  { filter: 'fueltrade',         name: 'FUELTRADE' },
  { filter: 'gaso-petroleum',    name: 'GASO PETROLEUM' },
  { filter: 'tema-fuel-company', name: 'TEMA FUEL COMPANY' },
  { filter: 'usuyya-gh',         name: 'USUYYA GH' },
  { filter: 'goethe-institut',   name: 'GOETHE INSTITUT' },
  { filter: 'wpg-ghana',         name: 'WPG GHANA' },
  { filter: 'individual',        name: 'Individual Works' },
];

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  buildServices();
  buildPortfolio();
  buildPartners();
  initMobileMenu();
  initSidebarScroll();
  initScrollReveal();
  initPortfolioWipe();
  initCounters();
  initCursor();
  initLightbox();
  initFilters();
  initContactForm();
  initBackToTop();
  setFooterYear();
});

/* ─── Build Services Grid ──────────────────────────────────── */
function buildServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;

  servicesData.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'svc-card reveal' + (i === 0 ? ' svc-card--gold' : '');
    card.style.transitionDelay = `${(i % 4) * 0.08}s`;
    card.setAttribute('data-num', String(i + 1).padStart(2, '0'));
    card.innerHTML = `
      <div class="svc-card__icon-wrap"><span class="svc-card__icon" aria-hidden="true">${s.icon}</span></div>
      <h3 class="svc-card__title">${s.title}</h3>
      <p class="svc-card__desc">${s.desc}</p>
      <span class="svc-card__arrow">Enquire &#8594;</span>
    `;
    grid.appendChild(card);
  });

  observeReveal(grid.querySelectorAll('.reveal'));
}

/* ─── Build Portfolio Grid ─────────────────────────────────── */
function buildPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  const note = document.getElementById('portfolioNote');
  if (!grid) return;

  if (portfolioData.length === 0) {
    companySlugs.forEach(c => {
      const item = document.createElement('div');
      item.className = 'pf-item pf-item--ph';
      item.dataset.filter = c.filter;
      item.innerHTML = `
        <div class="ph__icon" aria-hidden="true">🖼️</div>
        <div class="ph__text">
          <strong>${c.name}</strong>
          Add images to<br><code>images/portfolio/${c.filter}/</code>
        </div>
      `;
      grid.appendChild(item);
    });
    if (note) note.style.display = 'block';
    return;
  }

  if (note) note.style.display = 'none';

  portfolioData.forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = 'pf-item';
    el.dataset.filter = item.filter;
    el.dataset.idx = idx;
    const col = idx % 3;
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', `View ${item.title} — ${item.company}`);

    el.style.transitionDelay = `${col * 0.1}s`;

    el.innerHTML = `
      <img
        src="${item.src}"
        alt="${item.title} — ${item.company}"
        loading="lazy"
        onerror="this.closest('.pf-item').classList.add('pf-item--ph'); this.remove();"
      />
      <div class="pf-item__overlay">
        <p class="pf-item__title">${item.title}</p>
        <p class="pf-item__co">${item.company}</p>
      </div>
    `;

    el.addEventListener('click', () => openLightbox(idx));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(idx); }
    });
    grid.appendChild(el);
  });
}

/* ─── Build Partners (marquee + grid) ─────────────────────── */
function buildPartners() {
  const track = document.getElementById('partnersTrack');
  const grid  = document.getElementById('partnersGrid');

  if (track) {
    // Build marquee chips — duplicated for seamless loop
    const chips = partnersData.map(p =>
      `<span class="partners__chip">${p.initial} &nbsp;${p.name}</span>`
    ).join('');
    track.innerHTML = chips + chips;
  }

  if (grid) {
    partnersData.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'partner-card reveal';
      card.style.transitionDelay = `${i * 0.07}s`;
      card.innerHTML = `
        <div class="partner-card__avatar" aria-hidden="true">${p.initial}</div>
        <p class="partner-card__name">${p.name}</p>
        <p class="partner-card__sector">${p.sector}</p>
      `;
      grid.appendChild(card);
    });
    observeReveal(grid.querySelectorAll('.reveal'));
  }
}

/* ─── Mobile Menu ──────────────────────────────────────────── */
function initMobileMenu() {
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');
  const closeBtn    = document.getElementById('mobileClose');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');

  const openMenu = () => {
    mobileMenu.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  hamburger?.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });

  closeBtn?.addEventListener('click', closeMenu);
  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

  mobileMenu?.addEventListener('click', e => {
    if (e.target === mobileMenu) closeMenu();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu?.classList.contains('open')) closeMenu();
  });
}

/* ─── Sidebar Active Link Tracking ─────────────────────────── */
function initSidebarScroll() {
  const sidebarLinks = document.querySelectorAll('.sidebar__link');
  const sections     = document.querySelectorAll('main section[id]');

  const setActive = (id) => {
    sidebarLinks.forEach(link => {
      const matches = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('active', matches);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));

  // Smooth scroll for sidebar links
  sidebarLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ─── Scroll Reveal ─────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

function initScrollReveal() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

function observeReveal(elements) {
  elements.forEach(el => revealObserver.observe(el));
}

/* ─── Counter Animation ─────────────────────────────────────── */
function initCounters() {
  const counters = document.querySelectorAll('.stat__num');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target, parseInt(entry.target.dataset.target, 10));
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  counters.forEach(el => counterObserver.observe(el));
}

function animateCounter(el, target) {
  const duration  = 2200;
  const startTime = performance.now();

  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }

  requestAnimationFrame(step);
}

/* ─── Custom Cursor ─────────────────────────────────────────── */
function initCursor() {
  if (window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches) return;

  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0, rX = 0, rY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
  });

  (function animateRing() {
    rX += (mouseX - rX) * 0.1;
    rY += (mouseY - rY) * 0.1;
    ring.style.transform = `translate(${rX - 15}px, ${rY - 15}px)`;
    requestAnimationFrame(animateRing);
  })();

  const interactables = 'a, button, .pf-item, .svc-card, .partner-card, .pf-btn';
  document.querySelectorAll(interactables).forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width   = '56px';
      ring.style.height  = '56px';
      ring.style.opacity = '0.3';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width   = '30px';
      ring.style.height  = '30px';
      ring.style.opacity = '0.5';
    });
  });
}

/* ─── Portfolio Filter + Pagination ────────────────────────── */
const ITEMS_PER_PAGE = 12;
let currentFilter = 'all';
let shownCount = ITEMS_PER_PAGE;

function initFilters() {
  const buttons     = document.querySelectorAll('.pf-btn');
  const loadMoreBtn = document.getElementById('pfLoadMore');
  const loadMoreWrap = document.getElementById('pfLoadMoreWrap');

  function getMatchingItems() {
    return [...document.querySelectorAll('.pf-item:not(.pf-item--ph)')].filter(item =>
      currentFilter === 'all' || item.dataset.filter === currentFilter
    );
  }

  function applyDisplay(animateFrom = 0) {
    const allItems = document.querySelectorAll('.pf-item');
    const matching = getMatchingItems();

    allItems.forEach(item => item.classList.add('hidden'));

    matching.slice(0, shownCount).forEach((item, i) => {
      item.classList.remove('hidden');
      if (i >= animateFrom) {
        item.style.animation = 'fadeUp 0.4s var(--ease) forwards';
        setTimeout(() => { item.style.animation = ''; }, 450);
      }
    });

    if (loadMoreWrap) {
      loadMoreWrap.style.display = shownCount < matching.length ? 'flex' : 'none';
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      currentFilter = btn.dataset.filter;
      shownCount = ITEMS_PER_PAGE;
      applyDisplay(0);
    });
  });

  loadMoreBtn?.addEventListener('click', () => {
    const prev = shownCount;
    shownCount += ITEMS_PER_PAGE;
    applyDisplay(prev);
  });

  applyDisplay(0);
}

/* ─── Lightbox ──────────────────────────────────────────────── */
let currentIdx   = 0;
let visibleItems = [];

function initLightbox() {
  const lbBg   = document.getElementById('lbBg');
  const lbClose = document.getElementById('lbClose');
  const lbPrev  = document.getElementById('lbPrev');
  const lbNext  = document.getElementById('lbNext');

  lbBg?.addEventListener('click', closeLightbox);
  lbClose?.addEventListener('click', closeLightbox);
  lbPrev?.addEventListener('click', () => navigateLightbox(-1));
  lbNext?.addEventListener('click', () => navigateLightbox(1));

  document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (!lb?.classList.contains('active')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(dataIdx) {
  const lb = document.getElementById('lightbox');
  visibleItems = [...document.querySelectorAll('.pf-item:not(.pf-item--ph):not(.hidden)')];
  currentIdx   = visibleItems.findIndex(el => parseInt(el.dataset.idx, 10) === dataIdx);
  if (currentIdx === -1) return;

  renderLightboxImage();
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.getElementById('lbClose')?.focus();
}

function closeLightbox() {
  document.getElementById('lightbox')?.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  currentIdx = (currentIdx + dir + visibleItems.length) % visibleItems.length;
  renderLightboxImage();
}

function renderLightboxImage() {
  const item    = visibleItems[currentIdx];
  const img     = item?.querySelector('img');
  const lbImg   = document.getElementById('lbImg');
  const lbTitle = document.getElementById('lbTitle');
  const lbCo    = document.getElementById('lbCo');

  if (lbImg && img) { lbImg.src = img.src; lbImg.alt = img.alt; }
  if (lbTitle) lbTitle.textContent = item?.querySelector('.pf-item__title')?.textContent || '';
  if (lbCo)    lbCo.textContent    = item?.querySelector('.pf-item__co')?.textContent    || '';
}

/* ─── Contact Form (WhatsApp) ──────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name    = document.getElementById('cName')?.value.trim()    || 'A visitor';
    const phone   = document.getElementById('cPhone')?.value.trim()   || 'Not provided';
    const service = document.getElementById('cService')?.value        || 'General enquiry';
    const message = document.getElementById('cMsg')?.value.trim()     || '';

    const text = encodeURIComponent(
      `Hello Hazelnart! 👋\n\n` +
      `My name is *${name}*.\n` +
      `Phone: ${phone}\n` +
      `Interested in: *${service}*\n\n` +
      (message ? `Message:\n${message}` : `I'd like to enquire about your services.`)
    );

    window.open(`https://wa.me/233266575930?text=${text}`, '_blank', 'noopener');
  });
}

/* ─── Portfolio Reveal ──────────────────────────────────────── */
function initPortfolioWipe() {
  const wipeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('wipe-in');
        wipeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.04 });

  document.querySelectorAll('.pf-item:not(.pf-item--ph)').forEach(el => {
    wipeObserver.observe(el);
  });
}

/* ─── Back To Top ───────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('backTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─── Footer Year ───────────────────────────────────────────── */
function setFooterYear() {
  const el = document.getElementById('yr');
  if (el) el.textContent = new Date().getFullYear();
}
