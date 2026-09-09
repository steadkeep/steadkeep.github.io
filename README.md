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
    │   └── app-icon.png
    ├── screenshots/
    │   ├── 01_today_hero.png
    │   ├── 02_progress.png
    │   ├── 03_create.png
    │   ├── 04_personalities.png
    │   ├── 05_widget.png
    │   └── 06_alldone.png
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
- Privacy policy: `privacy.html`.
- Terms of use: `terms.html`.
- Colors, typography, spacing, and component styles: the design-token block at the top of `css/styles.css`.
- Mobile menu, current year, and theme switch: `js/main.js`.

The site currently presents SteadKeep as coming soon. Once App Store Connect provides the
numeric Apple ID, replace the non-interactive “Coming soon” labels with the final product URL.

## Replace visual assets

### App icon and favicons

`assets/icons/app-icon.png` is the final 1024 × 1024 app icon copied from the Xcode asset
catalog and is used for the site brand, favicon, Apple touch icon, and social metadata.

### Social sharing image

Public pages currently use the final app icon at an absolute production URL for social
metadata. A dedicated 1200 × 630 campaign image can be added later without blocking launch.

### Screenshots

To update a screenshot, replace the corresponding PNG in `assets/screenshots/`. Keep the same dimensions or update the HTML `width` and `height` attributes to preserve layout stability.

The source PNGs are high-resolution and total roughly 8.5 MB. For production, export visually equivalent AVIF/WebP versions with PNG fallbacks if desired, then verify Safari compatibility and screenshot quality.

## GitHub Pages deployment

The site is hosted from the `website-review` branch of
`steadkeep/steadkeep.github.io`. GitHub Pages publishes the repository root.

To deploy an update:

1. Make and preview the changes locally.
2. Commit the approved files to `website-review`.
3. Push the branch to GitHub.
4. Confirm the Pages deployment succeeds under **Actions** or **Settings → Pages**.

Because the site uses relative links such as `css/styles.css` and `privacy.html`, it works both at a user site (`username.github.io`) and a project site (`username.github.io/repository-name/`).

## Custom domain

The configured production domain is `steadkeep.app`.

- Keep the repository’s `CNAME` file.
- Keep the four GitHub Pages `A` records, four `AAAA` records, and the `www`
  `CNAME` record in Porkbun.
- Keep **Enforce HTTPS** enabled in **Settings → Pages**.
- Do not remove Porkbun’s MX and SPF records; they support
  `support@steadkeep.app` forwarding.
- Update Open Graph image URLs and add canonical URLs before the final public
  launch.

## Remaining launch checklist

- Confirm that `support@steadkeep.app` forwards correctly to the support inbox.
- Add the final App Store product URL after Apple assigns the numeric ID.
- Recheck public feature statements whenever the release build changes.
- Test every page after future content changes.

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
rg -n 'TODO|FIXME|id0000000000' .
```

Run a local server and check the homepage at narrow phone widths, tablet width, and desktop width in current Safari, Chrome, Firefox, and Edge before publishing.
