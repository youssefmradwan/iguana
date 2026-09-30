# Oakland — Bespoke Woodwork · Mass Production

Website for Oakland, a woodwork company in Cairo, Egypt, offering bespoke woodwork and mass production. Projects, photography, logo and brand colours come from the Oakland company profile.

> The earlier version, which also covered construction, fine finishing and consulting, is commit `ebee3e0` on this branch. Check it out with `git checkout ebee3e0`.

It is a static, responsive site built with **Next.js (App Router)**, **Tailwind CSS v4** and **TypeScript**. `npm run build` exports plain HTML/CSS/JS to `out/`, so it can be hosted anywhere (Netlify, Vercel, Cloudflare Pages, S3, any static host).

## Run it

Requires Node.js 20 or newer.

```bash
cd oakland
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # static export to ./out
npm start          # preview ./out locally
npm run typecheck
```

## Where things live

```
src/
  content/          ← ALL copy, photos and contact details (edit these)
    site.ts           company name, tagline, phone numbers, email, nav, domain
    images.ts         catalogue of every photo (file, size, alt text) + logo files
    home.ts           home page copy
    about.ts          about text, key figures, approach
    services.ts       the two services (bespoke, mass production), process, FAQs
    portfolio.ts      projects (sector, client, location, scope, photos) + sectors
    contact.ts        enquiry form options, upload limits, contact page copy
  app/              ← one folder per page (layout only, reads from content/)
  components/       ← reusable layout pieces (header, footer, gallery, form…)
  lib/
    submitCommission.ts   ← the form's submit handler (placeholder, see below)
  app/globals.css   ← brand colours, fonts and animation tokens
public/
  images/projects/     full-size project photos (max 1920px)
  images/projects/sm/  900px copies, served to phones automatically
  brand/               logo: full JPG, plus transparent cream mark & wordmark PNGs
```

Layout components never hard-code copy. To change wording, edit the files in `src/content/`.

## Updating content

### Adding a project or photos
1. Put the photo in `public/images/projects/` and a 900px-wide copy with the same name in `public/images/projects/sm/`.
2. Add a line for it in `src/content/images.ts` with its pixel size and a short description (alt text).
3. Add or edit the project in `src/content/portfolio.ts`. The first photo in `images` is the project's cover. `featured: true` puts it on the home page.

Project photos are shown uncropped at their own proportions in the portfolio, the project viewer and the home page's recent work. Only the full-width backgrounds (page heroes and banners) and the sector and service tiles are cropped.

### Logo
The header, hero and footer use the transparent PNGs in `public/brand/`, which were cut from `oakland-logo.jpg`. If you have the logo as a vector (SVG or PDF), swap those files for sharper results. The favicon is `src/app/icon.png`.

### Still to confirm before launch
Search `src/content/` for **PLACEHOLDER**:
- `site.url`: the real domain (used for canonical URLs, Open Graph and the sitemap).
- `site.contact.email`: the company email. It is hidden while empty.
- `budgetRanges` in `contact.ts`: EGP ranges I proposed. Adjust them to your typical project sizes.
- The longer copy on the About and Services pages expands on the profile's wording. Please review it.

### Palette & fonts
The brand colours from the profile (walnut `#2D2118`, cream `#F3ECDF`, brass `#C29A62` / `#7A5A30`) are defined in the `@theme` block at the top of `src/app/globals.css`. Fonts (Cormorant Garamond + Manrope) are self-hosted via `@fontsource`.

## Connecting the enquiry form

The form (`src/components/CommissionForm.tsx`) validates everything client-side: required fields, email/phone format, minimum description length, and file type/size/count. It also includes a hidden honeypot field against spam bots.

On a valid submit it calls `submitCommission()` in **`src/lib/submitCommission.ts`**. Right now that function only `console.log`s the data. Replace its body with your integration, for example a Formspree/Basin endpoint, or your own serverless function that emails Oakland and creates a CRM lead. The `toFormData()` helper already packages every field and uploaded file as `multipart/form-data`. Throw an error on failure and the form will show a retry message.

## Accessibility & SEO notes
- Semantic landmarks, skip link, visible focus styles, keyboard-accessible mobile menu (focus trap and Escape), portfolio filters (`aria-pressed`, and links like `/portfolio/#residential` open pre-filtered) and project viewer (native `<dialog>`, arrow keys to step through photos).
- Form fields have associated labels, hints and errors via `aria-describedby`/`aria-invalid`, and focus moves to the first invalid field.
- Animations respect `prefers-reduced-motion`. Content is fully visible without JavaScript.
- Text colour pairs meet WCAG AA contrast (see the notes in `globals.css`).
- Per-page titles, meta descriptions, canonical URLs, Open Graph/Twitter tags, `sitemap.xml`, `robots.txt` and GeneralContractor JSON-LD on the home page.
