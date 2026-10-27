# Hazelnart Website

## Folder layout

```
*.html          Pages (kept in the main folder so their web addresses never change)
css/            Stylesheets
js/             Scripts (site, forms, design studio)
api/            send.php emails enquiries; send-config.php holds the reCAPTCHA secret (not in git)
images/         All pictures and videos, one folder per use (see below)
favicon.ico     Browser icon (Google looks for it in the main folder)
.htaccess, robots.txt, sitemap.xml   Server and Google settings
```

## Image Guide

## How to Add Your Portfolio Images

### 1. Drop images into the correct folder

Each company has its own folder inside `images/portfolio/`:

```
images/
├── logo/                          ← Hazelnart logo (hazelnart-logo.png)
├── icons/                         ← Browser and phone icons (favicon.ico stays in the main folder)
├── social/                        ← Image shown when the site is shared (og-share.jpg)
├── hero/                          ← Home page background videos
├── about/                         ← Studio photo for the About page
├── banners/                       ← Page banner images
├── process/                       ← "How we work" step photos
├── services/                      ← One photo per service
├── partners/                      ← Client and partner logos
└── portfolio/
    ├── frimps-oil/                ← Work done for FRIMPS OIL
    ├── fueltrade/                 ← Work done for FUELTRADE
    ├── gaso-petroleum/            ← Work done for GASO PETROLEUM
    ├── tema-fuel-company/         ← Work done for TEMA FUEL COMPANY
    ├── usuyya-gh/                 ← Work done for USUYYA GH
    ├── goethe-institut/           ← Work done for GOETHE INSTITUT
    ├── wpg-ghana/                 ← Work done for WPG GHANA
    ├── okanta-medical-centre/     ← Pylon signage for OKANTA MEDICAL CENTRE (photos + videos)
    ├── nastygirlwrld/             ← 3D wall lettering for NASTYGIRLWRLD.CO (photo + video)
    └── individual/                ← Any individual / personal works
```

### 2. Edit js/script.js to register each image

Open `js/script.js` and find the `portfolioData` section at the top.

For each image you add, **remove the two slashes `//`** at the start of a line and update the filename.

**Example — adding a FRIMPS OIL banner:**

Before:
```js
// { src: 'images/portfolio/frimps-oil/brand-identity.jpg', title: 'Brand Identity', company: 'FRIMPS OIL', filter: 'frimps-oil' },
```

After (just remove the `// ` at the start):
```js
{ src: 'images/portfolio/frimps-oil/brand-identity.jpg', title: 'Brand Identity', company: 'FRIMPS OIL', filter: 'frimps-oil' },
```

Or copy this template and fill in your own values:
```js
{ src: 'images/portfolio/FOLDER/YOUR-FILENAME.jpg', title: 'Your Title', company: 'COMPANY NAME', filter: 'folder-name' },
```

### Adding a video

Videos (`.mp4`) go in the same client folders. Register them with `type: 'video'` and a `poster` image
(a still frame shown before the video loads). For portrait/phone-shot work, add `shape: 'tall'` so the
whole piece is shown. Add `tags: ['signage']` or `tags: ['video']` to show it under those filter buttons.

```js
{ type: 'video', src: 'images/portfolio/FOLDER/clip.mp4', poster: 'images/portfolio/FOLDER/clip-poster.jpg', title: 'Your Title', company: 'COMPANY NAME', filter: 'folder-name', shape: 'tall', tags: ['video'] },
```

The dark **Latest Projects** strip at the top of the Portfolio section is controlled by `showcaseData` in `js/script.js`.

### 3. Supported image formats

- `.jpg` / `.jpeg` — best for photos and designs
- `.png` — use for designs with transparency
- `.webp` — smaller file size, great for web

Keep each image **under 2MB** for fast loading. Tools like [Squoosh](https://squoosh.app) can compress images for free.

---

## Adding the Logo

Place your logo file in `images/logo/` and name it exactly:
```
hazelnart-logo.png
```

The website will automatically show it in the navigation header.

---

## Adding a Studio / About Photo

Place a photo in `images/about/` and name it exactly:
```
hazelnart-creative-studio.jpg
```

This appears in the "About" section of the website.

---

## Website Pages

The site is now split into separate pages, each with its own banner and a "Next stop" link to the following page:

| Page | File |
|---|---|
| Home | `index.html` |
| About | `about.html` |
| Services | `services.html` |
| Portfolio | `portfolio.html` |
| Partners | `partners.html` |
| Contact | `contact.html` |
| Design Studio | `design-studio.html` |

The sidebar, mobile menu and footer are copied into every page — if you change a menu link or phone number, update it in **all** the files above.
All pages share `styles.css` and `script.js`, so portfolio, services and partner data still live in one place (`script.js`).

## Opening the Website

Simply double-click `index.html` to open the website in your browser. No server needed.

---

## Contact & Phone

- **Phone / WhatsApp:** +233 26 657 5930
- **Location:** Accra Newtown, Raaco Down, Accra, Ghana

---

## Need Help?

All customisable content (services, partner names, contact info) is in `script.js` at the top of the file.
All visual styling (colours, fonts, spacing) is in `styles.css`.
