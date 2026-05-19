# Hazelnart Website — Image Guide

## How to Add Your Portfolio Images

### 1. Drop images into the correct folder

Each company has its own folder inside `images/portfolio/`:

```
images/
├── logo/                          ← Drop your Hazelnart logo here (name it hazelnart-logo.png)
├── about/                         ← Drop a studio or profile photo here (name it studio.jpg)
├── hero/                          ← Optional hero/background images
└── portfolio/
    ├── frimps-oil/                ← Work done for FRIMPS OIL
    ├── fueltrade/                 ← Work done for FUELTRADE
    ├── gaso-petroleum/            ← Work done for GASO PETROLEUM
    ├── tema-fuel-company/         ← Work done for TEMA FUEL COMPANY
    ├── usuyya-gh/                 ← Work done for USUYYA GH
    ├── goethe-institut/           ← Work done for GOETHE INSTITUT
    ├── wpg-ghana/                 ← Work done for WPG GHANA
    └── individual/                ← Any individual / personal works
```

### 2. Edit script.js to register each image

Open `script.js` and find the `portfolioData` section at the top.

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
studio.jpg
```

This appears in the "About" section of the website.

---

## Opening the Website

Simply double-click `index.html` to open the website in your browser. No server needed.

---

## Contact & Phone

- **Phone 1:** 0266 575 930
- **Phone 2:** 0544 055 060
- **Location:** Accra Newtown, Raaco Down, Accra, Ghana
- **WhatsApp:** Both numbers are linked to WhatsApp buttons on the site

---

## Need Help?

All customisable content (services, partner names, contact info) is in `script.js` at the top of the file.
All visual styling (colours, fonts, spacing) is in `styles.css`.
