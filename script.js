/* ============================================================
   HAZELNART — JavaScript
   ============================================================ */

/* ============================================================
   ★ PORTFOLIO DATA — ADD YOUR IMAGES HERE ★

   To add a new image, copy the format below and add a new line.
   Format:
   { src: 'images/portfolio/FOLDER/filename.jpg', title: 'Work Title', company: 'COMPANY NAME', filter: 'folder-name' }

   Optional extras:
   type:   'video'  → src is an .mp4; add poster: 'path/to/frame.jpg'
   shape:  'tall'   → portrait shots/videos are shown whole over a blurred backdrop
   tags:   ['signage', ...] → also shown under that filter button
   ============================================================ */

const portfolioData = [

  // ── NASTYGIRLWRLD.CO ───────────────────────────────────────
  { src: 'images/portfolio/nastygirlwrld/nastygirlwrld-3d-wall-letters.jpeg', title: '3D Wall Lettering', company: 'NastyGirlWrld.co', filter: 'nastygirlwrld', tags: ['signage'] },

  // ── OKANTA MEDICAL CENTRE ──────────────────────────────────
  { type: 'video', src: 'images/portfolio/okanta-medical-centre/okanta-medical-centre-pylon-sign-closeup.mp4', poster: 'images/portfolio/okanta-medical-centre/okanta-medical-centre-pylon-sign-closeup-poster.jpg', title: 'Pylon Signage — Video', company: 'Okanta Medical Centre', filter: 'okanta-medical-centre', shape: 'tall', tags: ['signage', 'video'] },
  { src: 'images/portfolio/okanta-medical-centre/okanta-medical-centre-pylon-sign-1.jpeg', title: '24/7 Pylon Signage', company: 'Okanta Medical Centre', filter: 'okanta-medical-centre', shape: 'tall', tags: ['signage'] },
  { type: 'video', src: 'images/portfolio/nastygirlwrld/nastygirlwrld-3d-wall-letters.mp4', poster: 'images/portfolio/nastygirlwrld/nastygirlwrld-3d-wall-letters-poster.jpg', title: '3D Wall Lettering — Video', company: 'NastyGirlWrld.co', filter: 'nastygirlwrld', tags: ['signage', 'video'] },
  { type: 'video', src: 'images/portfolio/individual/pa-gya-festival-tote-bags.mp4', poster: 'images/portfolio/individual/pa-gya-festival-tote-bags-poster.jpg', title: '10th Anniversary Tote Bags', company: 'Pa Gya! Literary Festival', filter: 'individual', shape: 'tall', tags: ['video'] },
  { src: 'images/portfolio/okanta-medical-centre/okanta-medical-centre-pylon-sign-2.jpeg', title: '24/7 Pylon Signage', company: 'Okanta Medical Centre', filter: 'okanta-medical-centre', shape: 'tall', tags: ['signage'] },
  { type: 'video', src: 'images/portfolio/okanta-medical-centre/okanta-medical-centre-pylon-sign-site.mp4', poster: 'images/portfolio/okanta-medical-centre/okanta-medical-centre-pylon-sign-site-poster.jpg', title: 'Pylon Signage — On Site', company: 'Okanta Medical Centre', filter: 'okanta-medical-centre', shape: 'tall', tags: ['signage', 'video'] },

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
  { src: 'images/portfolio/individual/eys-glam-studio-signage.jpeg',        title: 'Studio Signage',             company: 'EYS Glam Studio',          filter: 'individual', tags: ['signage'] },
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
  { src: 'images/portfolio/individual/emergency-assembly-signs.jpeg',       title: 'Emergency Assembly Signs',   company: 'Signage',                  filter: 'individual', tags: ['signage'] },
  { src: 'images/portfolio/individual/legal-aid-commission-award.jpeg',     title: 'Award Design',               company: 'Legal Aid Commission',     filter: 'individual' },
  { src: 'images/portfolio/individual/goodgoods-banner.jpeg',               title: 'Promotional Banner',         company: 'Good Goods',               filter: 'individual' },
  { src: 'images/portfolio/individual/exhibition-mirror-panels.jpeg',       title: 'Exhibition Mirror Panels',   company: 'Exhibition',               filter: 'individual' },
  { src: 'images/portfolio/individual/despite-automobile-museum-sign.jpeg', title: 'Museum Signage',             company: 'Despite Automobile Museum',filter: 'individual', tags: ['signage'] },

];

/* ============================================================
   LATEST PROJECTS SHOWCASE
   area: a = left tall · b = centre top · c = right tall · d = centre bottom
   ============================================================ */
const showcaseData = [
  { area: 'a', type: 'video', src: 'images/portfolio/okanta-medical-centre/okanta-medical-centre-pylon-sign-closeup.mp4', poster: 'images/portfolio/okanta-medical-centre/okanta-medical-centre-pylon-sign-closeup-poster.jpg', title: '24/7 Pylon Signage', company: 'Okanta Medical Centre', tag: 'Outdoor Signage' },
  { area: 'b', type: 'video', src: 'images/portfolio/nastygirlwrld/nastygirlwrld-3d-wall-letters.mp4', poster: 'images/portfolio/nastygirlwrld/nastygirlwrld-3d-wall-letters-poster.jpg', title: '3D Wall Lettering', company: 'NastyGirlWrld.co', tag: '3D Signage' },
  { area: 'c', type: 'video', src: 'images/portfolio/individual/pa-gya-festival-tote-bags.mp4', poster: 'images/portfolio/individual/pa-gya-festival-tote-bags-poster.jpg', title: '10th Anniversary Tote Bags', company: 'Pa Gya! Literary Festival', tag: 'Branded Merchandise' },
  { area: 'd', type: 'image', src: 'images/portfolio/nastygirlwrld/nastygirlwrld-3d-wall-letters.jpeg', title: '3D Wall Lettering — Detail', company: 'NastyGirlWrld.co', tag: '3D Signage' },
];

/* ============================================================
   SERVICES DATA
   ============================================================ */
const servicesData = [
  { icon: '🖨️', title: 'Digital Paper Prints',    img: 'images/services/digital-paper-prints.jpg', desc: 'Flyers, brochures, business cards, catalogues, posters, and every paper-based print material crafted with precision and premium quality.' },
  { icon: '📐', title: 'Large Format Prints',      img: 'images/services/large-format-prints.jpg', desc: 'Banners, billboards, flex prints, roll-up stands, and monumental graphics that command attention and stop people in their tracks.' },
  { icon: '🎯', title: '3D Design & Renders',      img: 'images/services/3d-design-renders.jpg', desc: 'Stunning 3D mockups, product visualisations, architectural renders, and dimensional brand materials that bring concepts to life.' },
  { icon: '👕', title: 'T-Shirt & Apparel',        img: 'images/services/tshirt-apparel.jpg', desc: 'DTF printing, screen printing, embroidery, and sublimation for corporate uniforms, branded merchandise, and event apparel.' },
  { icon: '🎁', title: 'Souvenirs & Gift Items',   img: 'images/services/souvenirs-gifts.jpg', desc: 'Branded mugs, pens, notebooks, keychains, tote bags, phone cases, and custom corporate gifts that leave lasting impressions.' },
  { icon: '🎨', title: 'Brand Identity & Logo',    img: 'images/services/brand-identity.jpg', desc: 'Complete brand identity design — logos, colour systems, typography, and brand guidelines that define and distinguish your business.' },
  { icon: '📋', title: 'Corporate Stationery',     img: 'images/services/corporate-stationery.jpg', desc: 'Letterheads, envelopes, compliment slips, invoice templates, and full stationery packages that project professionalism.' },
  { icon: '🚗', title: 'Vehicle Branding',         img: 'images/services/vehicle-branding.jpg', desc: 'Car wraps, truck graphics, fleet vehicle branding, and mobile advertising that carries your brand wherever the road goes.' },
  { icon: '🎪', title: 'Exhibition & Events',      img: 'images/services/exhibition-events.jpg', desc: 'Trade show booths, pop-up displays, step-and-repeat backdrops, and event branding that makes your brand unforgettable.' },
  { icon: '📦', title: 'Packaging Design',         img: 'images/services/packaging-design.jpg', desc: 'Product box design, labels, stickers, and packaging that protects your product while elevating your brand on the shelf.' },
  { icon: '🏗️', title: 'Outdoor Advertising',     img: 'images/services/outdoor-advertising.jpg', desc: 'Billboard designs, shop frontage signage, wayfinding systems, and outdoor advertising that drives footfall and brand recall.' },
  { icon: '📱', title: 'Digital Marketing Assets', img: 'images/services/digital-marketing.jpg', desc: 'Social media graphics, email templates, digital banners, and all visual content your brand needs for a powerful online presence.' },
];

/* ============================================================
   PARTNERS DATA
   ============================================================ */
const partnersData = [
  {
    name: 'FRIMPS OIL', sector: 'Oil & Gas', initial: 'F',
    logo: 'images/individual designs/frimps.png',
    images: [
      'images/portfolio/frimps-oil/frimps-oil-flask-white.jpeg',
      'images/portfolio/frimps-oil/frimps-oil-flask-black.jpeg',
      'images/portfolio/frimps-oil/frimps-oil-flask-red.jpeg',
      'images/portfolio/frimps-oil/frimps-oil-packaging-box.jpeg',
    ],
    story: 'From flask to shelf — we built a complete branded merchandise suite for Frimps Oil, turning everyday items into powerful brand ambassadors across their entire network.',
    work: ['Branded Flasks', 'Packaging Design', 'Brand Merchandise'],
  },
  {
    name: 'FUELTRADE', sector: 'Energy Trading', initial: 'F',
    logo: 'images/individual designs/fuel-trade.png',
    images: [
      'images/portfolio/fueltrade/fueltrade-branded-tshirt-1.jpeg',
      'images/portfolio/fueltrade/fueltrade-branded-tshirt-2.jpeg',
      'images/portfolio/fueltrade/fueltrade-workers-day-tshirt-1.jpeg',
      'images/portfolio/fueltrade/fueltrade-workers-day-tshirt-2.jpeg',
    ],
    story: "Uniting a workforce through design — Fueltrade's corporate apparel and Workers' Day collection gave every team member a shared sense of pride and identity.",
    work: ['Corporate Uniforms', "Workers' Day Apparel", 'Staff Branding'],
  },
  {
    name: 'EAGLE PETROLEUM', sector: 'Petroleum', initial: 'E',
    logo: 'images/individual designs/Eagle petroleum.png',
    images: [
      'images/portfolio/individual/eagle-petroleum-mugs.jpeg',
      'images/portfolio/individual/eagle-petroleum-flasks.jpeg',
    ],
    story: "From branded mugs to custom flasks — Eagle Petroleum's merchandise programme puts their identity in the hands of staff and clients alike, reinforcing trust and pride across every level of their operations.",
    work: ['Branded Mugs', 'Branded Flasks', 'Corporate Merchandise'],
  },
  {
    name: 'USUYYA GH', sector: 'Construction & Safety', initial: 'U',
    images: [
      'images/portfolio/usuyya-gh/usuyya-hard-hat-1.jpeg',
      'images/portfolio/usuyya-gh/usuyya-hard-hat-2.jpeg',
    ],
    story: 'Where safety meets brand power — custom branded hard hats that carry the Usuyya GH identity on every job site, turning protective gear into a bold statement of professionalism.',
    work: ['Safety Equipment Branding', 'Corporate Identity'],
  },
  {
    name: 'GASO PETROLEUM', sector: 'Petroleum', initial: 'G',
    logo: 'images/individual designs/Gaso-petroleum.png',
    story: 'A trusted name in Ghana\'s petroleum sector — Hazelnart has partnered with Gaso Petroleum to deliver sharp, consistent brand materials that reinforce their authority and reliability across every touchpoint.',
    work: ['Brand Identity', 'Print Collateral', 'Corporate Stationery'],
  },
  {
    name: 'TEMA FUEL COMPANY', sector: 'Energy Sector', initial: 'T',
    logo: 'images/individual designs/tema-fuel-company.png',
    story: 'Powering Tema\'s energy identity — we work with Tema Fuel Company to ensure every piece of branded material reflects the strength, precision, and professionalism that their clients have come to expect.',
    work: ['Branded Materials', 'Corporate Branding', 'Print Design'],
  },
  {
    name: 'GOETHE INSTITUT', sector: 'Cultural Institute', initial: 'G',
    logo: 'images/individual designs/Goethe.png',
    story: 'Bridging cultures through design — Hazelnart has proudly supported the Goethe Institut in Ghana, producing high-quality print and visual materials that honour the institute\'s global standard of cultural excellence.',
    work: ['Event Materials', 'Print Production', 'Exhibition Graphics'],
  },
  {
    name: 'WPG GHANA', sector: 'Business & Trade', initial: 'W',
    logo: 'images/individual designs/WPG.png',
    story: 'A partnership built on precision — WPG Ghana relies on Hazelnart to deliver branded materials and design solutions that project confidence and credibility in Ghana\'s competitive business landscape.',
    work: ['Corporate Branding', 'Branded Merchandise', 'Stationery Design'],
  },
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
  initPageTransitions();
  buildServices();
  buildServicePreview();
  buildShowcase();
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
  initHeroVideos();
  initInViewVideos();
});

/* ─── Build Latest Projects Showcase ───────────────────────── */
function buildShowcase() {
  const grid = document.getElementById('showcaseGrid');
  if (!grid) return;

  showcaseData.forEach((item, idx) => {
    const isVideo = item.type === 'video';
    const card = document.createElement('div');
    card.className = `sc-card sc-card--${item.area} reveal`;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${isVideo ? 'Play' : 'View'} ${item.title} — ${item.company}`);

    card.innerHTML = `
      ${isVideo
        ? `<video class="sc-card__media" src="${item.src}" poster="${item.poster}" muted loop playsinline preload="metadata" data-autoplay></video>`
        : `<img class="sc-card__media" src="${item.src}" alt="${item.title} — ${item.company}" loading="lazy" />`}
      <span class="sc-card__badge">${isVideo ? '&#9654; Watch in HD' : '&#10530; View in HD'}</span>
      <div class="sc-card__cap">
        <span class="sc-card__tag">${item.tag}</span>
        <p class="sc-card__title">${item.title}</p>
        <p class="sc-card__co">${item.company}</p>
      </div>
    `;

    const open = () => openMediaLightbox(showcaseData, idx);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
    grid.appendChild(card);
  });
}

/* ─── Play muted previews only while on screen ─────────────── */
function initInViewVideos() {
  const videos = document.querySelectorAll('video[data-autoplay]');
  if (!videos.length) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const io = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting && !reduceMotion) target.play().catch(() => {});
      else target.pause();
    });
  }, { threshold: 0.35 });

  videos.forEach(v => io.observe(v));
}

const enquireUrl = title => `contact.html?service=${encodeURIComponent(title)}`;

/* ─── Home: Services Preview (first six) ───────────────────── */
function buildServicePreview() {
  const grid = document.getElementById('svcPreview');
  if (!grid) return;
  servicesData.slice(0, 6).forEach((s, i) => {
    const a = document.createElement('a');
    a.href = 'services.html';
    a.className = 'svc-tile reveal' + (i % 3 ? ` reveal-d${i % 3}` : '');
    a.innerHTML = `
      <img class="svc-tile__img" src="${s.img}" alt="" loading="lazy" />
      <span class="svc-tile__shade" aria-hidden="true"></span>
      <span class="svc-tile__icon" aria-hidden="true">${s.icon}</span>
      <span class="svc-tile__title">${s.title}</span>
      <span class="svc-tile__more">Explore &#8594;</span>
    `;
    grid.appendChild(a);
  });
}

/* ─── Build Services Storybook ─────────────────────────────── */
function buildServices() {
  const track = document.getElementById('svcTrack');
  if (!track) return;

  servicesData.forEach((s, i) => {
    const num  = String(i + 1).padStart(2, '0');
    const card = document.createElement('div');
    card.className = 'svc-story-card' + (i === 0 ? ' svc-story-card--featured' : '');
    card.setAttribute('data-num', num);
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${s.title} — Enquire`);
    card.innerHTML = `
      <img class="svc-story-card__bg" src="${s.img}" alt="" loading="lazy" aria-hidden="true" />
      <span class="svc-story-card__shade" aria-hidden="true"></span>
      <span class="svc-story-card__number">${num}</span>
      <div class="svc-story-card__icon" aria-hidden="true">${s.icon}</div>
      <h3 class="svc-story-card__title">${s.title}</h3>
      <p class="svc-story-card__desc">${s.desc}</p>
      <a href="${enquireUrl(s.title)}" class="svc-story-card__cta">Enquire &#8594;</a>
    `;
    card.addEventListener('click', e => {
      if (e.target.closest('a')) return;
      card.querySelector('.svc-story-card__cta').click();
    });
    track.appendChild(card);
  });

  requestAnimationFrame(initServicesStorybook);
}

/* ─── Services Storybook Scroll Engine ─────────────────────── */
function initServicesStorybook() {
  const storybook = document.getElementById('svcStorybook');
  const sticky    = document.getElementById('svcSticky');
  const track     = document.getElementById('svcTrack');
  const fill      = document.getElementById('svcProgressFill');
  const label     = document.getElementById('svcProgressLabel');
  if (!storybook || !sticky || !track) return;

  const cards = Array.from(track.querySelectorAll('.svc-story-card'));
  const MOBILE_PX_PER_CARD = 140; // scroll distance per card on mobile
  let raf;

  const isMobile = () => window.innerWidth <= 767;

  function setup() {
    if (isMobile()) {
      storybook.style.height = (sticky.offsetHeight + cards.length * MOBILE_PX_PER_CARD) + 'px';
      track.style.transform  = '';
    } else {
      const maxTrans = Math.max(0, track.scrollWidth - sticky.clientWidth);
      storybook.style.height = (sticky.offsetHeight + maxTrans) + 'px';
      // Clear any mobile inline styles
      cards.forEach(c => { c.style.opacity = ''; c.style.transform = ''; });
    }
  }

  function tick() {
    const rect     = storybook.getBoundingClientRect();
    const stickyH  = sticky.offsetHeight;
    const range    = storybook.offsetHeight - stickyH;
    const progress = range > 0 ? Math.min(1, Math.max(0, -rect.top / range)) : 0;

    if (fill) fill.style.width = (progress * 100) + '%';

    if (isMobile()) {
      // One card at a time — vertical page-flip
      const activeIdx = Math.min(cards.length - 1, Math.floor(progress * cards.length));
      cards.forEach((card, i) => {
        if (i === activeIdx) {
          card.style.opacity   = '1';
          card.style.transform = 'translateY(0)';
        } else if (i < activeIdx) {
          card.style.opacity   = '0';
          card.style.transform = 'translateY(-28px)';
        } else {
          card.style.opacity   = '0';
          card.style.transform = 'translateY(32px)';
        }
      });
      if (label) label.textContent =
        `${String(activeIdx + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
    } else {
      // Desktop — horizontal track translation
      const maxTrans = Math.max(0, track.scrollWidth - sticky.clientWidth);
      track.style.transform = `translateX(${-(progress * maxTrans)}px)`;
      if (label) {
        const cardStep = cards[0] ? cards[0].offsetWidth + 20 : 320;
        const idx = Math.min(cards.length - 1, Math.floor((progress * maxTrans) / cardStep));
        label.textContent =
          `${String(idx + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
      }
    }
  }

  const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(tick); };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { setup(); tick(); });

  setup();
  tick();
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
    const isVideo = item.type === 'video';
    const el = document.createElement('div');
    el.className = 'pf-item' + (item.shape === 'tall' ? ' pf-item--tall' : '') + (isVideo ? ' pf-item--video' : '');
    el.dataset.filter = item.filter;
    el.dataset.tags = (item.tags || []).join(' ');
    el.dataset.idx = idx;
    const col = idx % 3;
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', `${isVideo ? 'Play' : 'View'} ${item.title} — ${item.company}`);

    el.style.transitionDelay = `${col * 0.1}s`;

    el.innerHTML = `
      ${item.shape === 'tall'
        ? `<span class="pf-item__backdrop" style="background-image:url('${isVideo ? item.poster : item.src}')" aria-hidden="true"></span>`
        : ''}
      ${isVideo
        ? `<video src="${item.src}" poster="${item.poster}" muted loop playsinline preload="none" data-autoplay></video>
           <span class="pf-item__play" aria-hidden="true">&#9654; Video</span>`
        : `<img
        src="${item.src}"
        alt="${item.title} — ${item.company}"
        loading="lazy"
        onerror="this.closest('.pf-item').classList.add('pf-item--ph'); this.remove();"
      />`}
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

/* ─── Build Partners (marquee + storytelling blocks) ──────── */
function buildPartners() {
  const track         = document.getElementById('partnersTrack');
  const storyBlocksEl = document.getElementById('storyBlocks');

  // Marquee — all partners
  if (track) {
    const chips = partnersData.map(p =>
      p.logo
        ? `<span class="partners__chip partners__chip--logo"><img src="${p.logo}" alt="${p.name}" class="partners__chip-logo" /></span>`
        : `<span class="partners__chip">${p.initial}&nbsp;${p.name}</span>`
    ).join('');
    track.innerHTML = chips + chips;
  }

  // ── Story blocks for ALL partners ─────────────────────────
  if (storyBlocksEl) {
    partnersData.forEach((p, i) => {
      const isReverse = i % 2 !== 0;
      const hasPhotos = p.images?.length;

      const block = document.createElement('div');
      block.className = 'story-block' + (isReverse ? ' story-block--reverse' : '');

      const tagsHTML = p.work.map(w =>
        `<span class="story-block__tag">${w}</span>`
      ).join('');

      let imgSideHTML;
      if (hasPhotos) {
        const [mainSrc, ...thumbSrcs] = p.images;
        const thumbsHTML = thumbSrcs.map(t =>
          `<button class="story-block__thumb" aria-label="View ${p.name}">
             <img src="${t}" alt="${p.name}" loading="lazy" />
           </button>`
        ).join('');
        imgSideHTML = `
          <div class="story-block__img-side">
            <div class="story-block__img-main-wrap">
              <img src="${mainSrc}" alt="${p.name}" loading="lazy" class="story-block__img-main" />
            </div>
            ${thumbSrcs.length ? `<div class="story-block__thumbs">${thumbsHTML}</div>` : ''}
          </div>`;
      } else {
        imgSideHTML = `
          <div class="story-block__img-side story-block__img-side--logo-only">
            <div class="story-block__logo-hero">
              <img src="${p.logo}" alt="${p.name}" class="story-block__logo-hero-img" loading="lazy" />
            </div>
          </div>`;
      }

      block.innerHTML = `
        ${imgSideHTML}
        <div class="story-block__text-side">
          <span class="story-block__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
          ${p.logo && hasPhotos ? `<img src="${p.logo}" alt="${p.name} logo" class="story-block__inline-logo" loading="lazy" />` : ''}
          <h3 class="story-block__name">${p.name}</h3>
          <p class="story-block__sector">${p.sector}</p>
          <div class="story-block__divider"></div>
          <p class="story-block__story">${p.story}</p>
          <div class="story-block__tags">${tagsHTML}</div>
        </div>
      `;

      // Thumb click swaps main image with a crossfade
      block.querySelectorAll('.story-block__thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
          const mainImg  = block.querySelector('.story-block__img-main');
          const thumbImg = thumb.querySelector('img');
          const prevSrc  = mainImg.src;
          mainImg.style.opacity   = '0';
          mainImg.style.transform = 'scale(1.06)';
          setTimeout(() => {
            mainImg.src             = thumbImg.src;
            thumbImg.src            = prevSrc;
            mainImg.style.opacity   = '1';
            mainImg.style.transform = 'scale(1)';
          }, 220);
        });
      });

      storyBlocksEl.appendChild(block);
    });

    // Reveal each block as it enters the viewport
    const storyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('story-revealed');
          storyObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    storyBlocksEl.querySelectorAll('.story-block').forEach(el => storyObserver.observe(el));
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

/* ─── Sidebar: in-page #links scroll smoothly ──────────────── */
function initSidebarScroll() {
  document.querySelectorAll('.sidebar__link').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ─── Page Transitions (curtain wipe between pages) ────────── */
function initPageTransitions() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Returning via the back button can restore a page mid-transition
  window.addEventListener('pageshow', e => {
    if (e.persisted) document.body.classList.remove('is-leaving');
  });

  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a || reduceMotion) return;
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.target && a.target !== '_self') return;
    if (a.hasAttribute('download')) return;

    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || !/\.html$|\/$/.test(url.pathname)) return;
    if (url.pathname === location.pathname && url.search === location.search) return; // same page / #anchor

    e.preventDefault();
    document.body.classList.add('is-leaving');
    setTimeout(() => { location.href = url.href; }, 420);
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

  const interactables = 'a, button, .pf-item, .sc-card, .svc-tile, .next-stop, .svc-card, .svc-story-card, .partner-card, .pf-btn';
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
      currentFilter === 'all' || item.dataset.filter === currentFilter ||
      (item.dataset.tags || '').split(' ').includes(currentFilter)
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
let currentIdx = 0;
let lbItems    = [];

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

// Opened from the portfolio grid — browse whatever is currently visible
function openLightbox(dataIdx) {
  const visible = [...document.querySelectorAll('.pf-item:not(.pf-item--ph):not(.hidden)')]
    .map(el => parseInt(el.dataset.idx, 10));
  const start = visible.indexOf(dataIdx);
  if (start === -1) return;
  openMediaLightbox(visible.map(i => portfolioData[i]), start);
}

// items: [{ type?, src, poster?, title, company }]
function openMediaLightbox(items, start) {
  lbItems    = items;
  currentIdx = start;
  renderLightboxImage();
  document.getElementById('lightbox')?.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.getElementById('lbClose')?.focus();
}

function closeLightbox() {
  document.getElementById('lightbox')?.classList.remove('active');
  document.body.style.overflow = '';
  const lbVideo = document.getElementById('lbVideo');
  if (lbVideo) { lbVideo.pause(); lbVideo.removeAttribute('src'); lbVideo.load(); }
}

function navigateLightbox(dir) {
  currentIdx = (currentIdx + dir + lbItems.length) % lbItems.length;
  renderLightboxImage();
}

function renderLightboxImage() {
  const item    = lbItems[currentIdx];
  const lbImg   = document.getElementById('lbImg');
  const lbVideo = document.getElementById('lbVideo');
  const lbTitle = document.getElementById('lbTitle');
  const lbCo    = document.getElementById('lbCo');
  if (!item) return;

  const isVideo = item.type === 'video';
  if (lbImg) {
    lbImg.hidden = isVideo;
    if (!isVideo) { lbImg.src = item.src; lbImg.alt = `${item.title} — ${item.company}`; }
  }
  if (lbVideo) {
    lbVideo.hidden = !isVideo;
    if (isVideo) {
      lbVideo.poster = item.poster || '';
      lbVideo.src    = item.src;
      lbVideo.muted  = false;
      lbVideo.play().catch(() => {});
    } else {
      lbVideo.pause();
    }
  }
  if (lbTitle) lbTitle.textContent = item.title;
  if (lbCo)    lbCo.textContent    = item.company;
}

/* ─── Contact Form (WhatsApp) ──────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const wanted = new URLSearchParams(location.search).get('service');
  const select = document.getElementById('cService');
  if (wanted && select) {
    const key = wanted.toLowerCase().split(/[\s&]+/).filter(Boolean).slice(0, 2).join(' ');
    const match = [...select.options].find(o =>
      o.value && o.text.toLowerCase().replace(/&/g, ' ').replace(/\s+/g, ' ').includes(key));
    if (match) select.value = match.text;
  }

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

/* ─── Hero Background Videos ───────────────────────────────── */
function initHeroVideos() {
  const videos = Array.from(document.querySelectorAll('.hero__video'));
  if (!videos.length) return;

  let current  = 0;
  let transitioning = false;

  // Prepare all videos
  videos.forEach(v => {
    v.muted      = true;
    v.playsInline = true;
    v.loop       = false;
  });

  // Activate and play the first video
  videos[0].classList.add('active');
  videos[0].play().catch(() => {});

  function goNext() {
    if (transitioning) return;
    transitioning = true;

    const prev = current;
    current = (current + 1) % videos.length;

    // Reset & start the incoming video before fading it in
    videos[current].currentTime = 0;
    videos[current].play().catch(() => {});

    // Crossfade: incoming fades in immediately
    videos[current].classList.add('active');

    // Outgoing fades out after a short overlap (matches CSS transition of 1.4s)
    setTimeout(() => {
      videos[prev].classList.remove('active');
      videos[prev].pause();
      videos[prev].currentTime = 0;
      transitioning = false;
    }, 1500);
  }

  // Switch on natural end of each video
  videos.forEach(v => v.addEventListener('ended', goNext));

  // Fallback: if a video stalls or is very short, force switch after 12s
  let fallback = setInterval(() => {
    const active = videos[current];
    if (active && active.paused && !transitioning) goNext();
  }, 12000);

  // Clean up interval if user leaves page
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      videos.forEach(v => v.pause());
    } else {
      videos[current]?.play().catch(() => {});
    }
  });
}
