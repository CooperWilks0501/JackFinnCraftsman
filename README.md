# Jackfinn Craftsman

React + TypeScript website for Jackfinn Craftsman, built with Vite.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## GitHub Pages

This project is configured for GitHub Pages deployment from the `JackFinnCraftsman` repository.

- Vite base path: `/JackFinnCraftsman/`
- Router: `HashRouter` for reliable multi-page navigation on GitHub Pages
- GitHub Actions workflow: `.github/workflows/deploy.yml`

## Assets

- Logo path: `src/assets/JackfinnLogo.png`
- Portfolio photos folder: `src/assets/Photos`

The gallery uses Vite's `import.meta.glob(...)` in `src/data/galleryImages.ts`, so any supported image you add to `src/assets/Photos` will automatically appear on the Work Shown page.

## Pages

- Home: `/`
- Work Shown: `/work-shown`
- Contact: `/contact`
