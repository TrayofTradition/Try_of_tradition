# Tray of Tradition — GitHub Pages

This copy is prepared as a static Vite + React site for a repository named `Try_of_tradition`.

## Local test

```bash
npm install
npm run build
npm run preview
```

The production files are generated in `dist/`.

## GitHub Pages

1. Create a **public** GitHub repository named `Try_of_tradition`.
2. Upload the contents of this folder to the repository root. Do not upload the ZIP itself.
3. Commit to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment → Source**, select **GitHub Actions**.
6. The included `.github/workflows/deploy.yml` builds the site and deploys `dist/` automatically.
7. After the workflow finishes, the site will be available at:
   `https://YOUR-GITHUB-USERNAME.github.io/Try_of_tradition/`

## Important: logo

The original ZIP contains a metadata file for the Tray of Tradition logo, but not the actual PNG file. This static copy therefore uses a text-based logo in the hero section so GitHub Pages does not show a broken image. If you have the original `tray-of-tradition-logo.png`, place it at `public/tray-of-tradition-logo.png` and replace the text logo block in `src/routes/index.tsx` with an `<img>` pointing to `/Try_of_tradition/tray-of-tradition-logo.png`.

## Repository name

The Vite `base` is set to `/Try_of_tradition/`. If you choose a different repository name, change the `base` value in `vite.config.ts` and the favicon path in `index.html` to match it.
