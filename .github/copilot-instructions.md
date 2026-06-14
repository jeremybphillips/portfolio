# Portfolio – Project Guidelines

## Overview

Jeremy Phillips' personal portfolio site. React 18 + Vite, deployed to GitHub Pages at `https://jeremybphillips.github.io/portfolio/`.

## Stack

- **React 18** (JSX, no TypeScript)
- **Vite 5** – dev server (`npm run dev`) and build (`npm run build`)
- **Bootstrap 5** – vendored at `public/vendor/bootstrap/` (not npm)
- **jQuery** – vendored at `public/vendor/jquery/` (used only for scroll logic in `index.html`)
- **yet-another-react-lightbox** with Captions plugin – image lightboxes
- **classnames** – conditional class logic
- **react-icons** – icon components
- **gh-pages** – `npm run deploy` builds and pushes to GitHub Pages

## Architecture

- `index.html` – entry point; loads vendored Bootstrap/jQuery and `public/assets/js/custom.js`
- `src/App.jsx` – single root component containing all page sections
- `src/components/` – reusable React components with co-located CSS Modules
- `public/assets/` – global CSS (`css/`), fonts, images (`images/{project}/`)
- `public/vendor/` – vendored Bootstrap and jQuery (do not replace with npm packages)

## Conventions

### Styles

- Component-scoped styles use **CSS Modules** (`.module.css` co-located with the component)
- Global / template styles live in `public/assets/css/` and are loaded via `index.html`
- Do not add a CSS-in-JS library; use CSS Modules or existing global stylesheets

### Lightbox pattern

Each work item follows this pattern in `App.jsx`:

```jsx
// State: const [lightboxOpen, setLightboxOpen] = useState(null);

<LightboxThumbnailButton
  isOpen={lightboxOpen === N}       // N = unique integer per item
  onClose={() => setLightboxOpen(null)}
  slides={[{ src: "assets/images/{project}/01.png", title: "..." }, ...]}
/>
<button onClick={() => setLightboxOpen(N)}>View More</button>
```

Add new work items by incrementing `N` and following this same structure.

### Asset paths

- Images: `public/assets/images/{project-name}/` → referenced as `assets/images/{project-name}/file.png`
- Vite base is `/portfolio/` — all public asset paths are relative, not absolute

### Commented-out sections

`section2` (What I'm good at) and `section3` (Contact Me) and their nav links are intentionally commented out. Do not remove them.

## Build & Deploy

```bash
npm run dev        # local dev server (http://localhost:5173/portfolio/)
npm run build      # production build → dist/
npm run deploy     # build + push to gh-pages branch
```

## Known TODOs

- Close mobile nav menu after clicking a link (screens < 846px)
- Populate nav `<ul class="main-menu">` links when sections are re-enabled
