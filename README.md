# SteadKeep marketing website

A dependency-free static website for the SteadKeep iPhone app. It uses semantic HTML, modern CSS, and a small vanilla JavaScript file. It is designed for GitHub Pages and works from a repository subpath because all internal URLs are relative.

## Project structure

```text
.
├── index.html
├── privacy.html
├── support.html
├── terms.html
├── 404.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    ├── icons/
    │   ├── app-icon-placeholder.svg
    │   ├── apple-touch-icon-placeholder.svg
    │   └── favicon-placeholder.svg
    ├── screenshots/
    │   ├── 01_today_hero.png
    │   ├── 02_progress.png
    │   ├── 03_create.png
    │   ├── 04_personalities.png
    │   ├── 05_widget.png
    │   └── 06_alldone.png
    └── social/
        └── og-image-placeholder.svg
```

The six screenshots are the existing Claude-generated assets copied from `/Users/robertblair/Desktop/SteadKeep Screenshots`. They are not mockups invented for this website.

## Local preview

Opening `index.html` directly works for a quick check. A local server better matches GitHub Pages:

```bash
cd /Users/robertblair/Desktop/SteadKeep-Website
python3 -m http.server 8080
```

Then visit `http://localhost:8080/`.

No build command, package manager, or dependency install is required.

## Where to edit

- Homepage product copy: `index.html`, between the section comments and headings.
- Support guidance: `support.html`.
- Draft privacy structure: `privacy.html`.
- Draft terms structure: `terms.html`.
- Colors, typography, spacing, and component styles: the design-token block at the top of `css/styles.css`.
- Mobile menu, current year, and theme switch: `js/main.js`.

Search for `PLACEHOLDER`, `REPLACE`, `CONFIRM`, `VERIFY`, and `LEGAL REVIEW` before publishing.

## Replace the App Store URL

The placeholder URL is:

```text
https://apps.apple.com/app/id0000000000
```

Replace every occurrence in all `.html` files with the final App Store product URL. A simple editor-wide find and replace is safest. The visible “URL placeholder” labels can then be removed.

## Replace visual assets

### App icon and favicons

The files in `assets/icons/` are deliberate placeholders. Replace them with final approved exports and either keep the filenames or update every HTML reference.

Recommended:

- App icon: SVG or optimized PNG, at least 256 × 256.
- Apple touch icon: 180 × 180 PNG.
- Favicon: SVG plus optional 32 × 32 and 16 × 16 PNG fallbacks.

### Social sharing image

Replace `assets/social/og-image-placeholder.svg` with a final 1200 × 630 PNG or JPEG. Update the `og:image` path in every public page if the filename changes. Once the production domain is known, consider using an absolute URL for maximum crawler compatibility.

### Screenshots

To update a screenshot, replace the corresponding PNG in `assets/screenshots/`. Keep the same dimensions or update the HTML `width` and `height` attributes to preserve layout stability.

The source PNGs are high-resolution and total roughly 8.5 MB. For production, export visually equivalent AVIF/WebP versions with PNG fallbacks if desired, then verify Safari compatibility and screenshot quality.

## GitHub Pages deployment

1. Create a new GitHub repository.
2. Add the contents of this folder at the repository root.
3. Commit and push to the default branch.
4. In the GitHub repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the default branch and `/ (root)`, then save.
7. Wait for GitHub to show the published URL.

Because the site uses relative links such as `css/styles.css` and `privacy.html`, it works both at a user site (`username.github.io`) and a project site (`username.github.io/repository-name/`).

## Optional custom domain

1. Add the domain in **Settings → Pages → Custom domain**.
2. Follow GitHub’s displayed DNS instructions for an apex domain or subdomain.
3. After DNS is valid, enable **Enforce HTTPS**.
4. GitHub will add a `CNAME` file. Keep that file in the repository.
5. Update Open Graph image URLs and add canonical URLs after the final domain is known.

Do not create a `CNAME` file before the domain is chosen.

## Required pre-publication checklist

- Replace every App Store URL and remove its visible placeholder labels.
- Confirm that `support@steadkeep.app` forwards correctly to the dedicated support inbox.
- Replace all app icon, favicon, Apple touch icon, and social image placeholders.
- Confirm the final color palette in the CSS variables.
- Have the Privacy Policy reviewed and replace every privacy placeholder.
- Have the Terms reviewed and replace every legal placeholder.
- Confirm the exact Premium features against the released binary and App Store product.
- Add effective dates to Privacy and Terms.
- Add the legal business or developer name and any required address/contact details.
- Confirm the iOS minimum version and current product availability.
- Decide whether Privacy and Terms should remain `noindex`; remove that meta tag only when the final documents are approved.
- Confirm the homepage privacy wording matches the final policy and App Store privacy questionnaire.
- Confirm the free three-habit limit and all public feature statements still match the release build.
- Test every page after the final replacements.

## Accessibility and performance notes

- A skip link, semantic landmarks, keyboard-operable navigation, visible focus states, descriptive screenshot alt text, and reduced-motion behavior are included.
- The mobile menu closes with Escape and returns focus to its toggle.
- System light/dark mode is respected; the footer button stores a manual choice in `localStorage`.
- JavaScript is not required to read or navigate the core content.
- System fonts avoid font downloads.
- Screenshot dimensions are declared to reduce layout shift.
- Below-the-fold screenshots use native lazy loading.

## Final verification commands

From the project directory:

```bash
rg -n 'PLACEHOLDER|REPLACE|CONFIRM|VERIFY|LEGAL REVIEW|id0000000000' .
```

Run a local server and check the homepage at narrow phone widths, tablet width, and desktop width in current Safari, Chrome, Firefox, and Edge before publishing.
