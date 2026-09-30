# Oakland — Bespoke Woodwork

Marketing site for Oakland: a static, responsive site built with **Next.js (App Router)**, **Tailwind CSS v4** and **TypeScript**. `npm run build` exports plain HTML/CSS/JS to `out/`, so it can be hosted anywhere (Netlify, Vercel, Cloudflare Pages, S3, any static host).

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
  content/          ← ALL copy, images and contact details (edit these)
    site.ts           studio name, tagline, email, phone, address, nav, domain
    images.ts         every placeholder photo in one place
    home.ts           home page copy
    about.ts          story, philosophy, "why bespoke", founder quote
    services.ts       services, commission process steps, FAQs
    portfolio.ts      projects (title, category, materials, dimensions, image)
    contact.ts        form dropdown options, upload limits, contact page copy
  app/              ← one folder per page (layout only, reads from content/)
  components/       ← reusable layout pieces (header, footer, gallery, form…)
  lib/
    submitCommission.ts   ← the form's submit handler (placeholder, see below)
  app/globals.css   ← colour palette, fonts and animation tokens
public/images/      ← put your real photos here
```

Layout components never hard-code copy. To change wording, edit the files in `src/content/`.

## Swapping in real content

### Photography
1. Put optimised photos in `public/images/`. JPG or WebP at about 2400px on the long edge, under ~500 KB each, works well.
2. In `src/content/images.ts`, change each `src` to the local path (e.g. `"/images/harrow-table.jpg"`) and **rewrite the `alt` text** to describe the real photo.
3. Portfolio projects each point at an image in `portfolio.ts`. You can also give a project its own image inline: `image: { src: "/images/…", alt: "…" }`.
4. Optional: add `position: "50% 30%"` to an image to control how it is cropped.

Placeholders currently come from Unsplash. If one fails to load, a walnut-toned block shows in its place instead of a broken-image icon. All images below the fold load lazily, and Unsplash images get a responsive `srcset` automatically.

### Logo
The logo is currently a typeset wordmark. To replace it, edit `src/components/SiteHeader.tsx` (look for the `LOGO:` comment) and the footer in `src/components/SiteFooter.tsx`. Place logo files in `public/` and add a `favicon.ico` / `icon.png` to `src/app/` (Next.js picks these up automatically).

### Copy & contact details
- Everything marked **PLACEHOLDER** in `src/content/` needs real values. This includes the email, phone, address, Instagram, founder name/quote, testimonial and the production domain (`site.url`, used for canonical URLs, Open Graph and the sitemap).
- Budget ranges and FAQ prices are in USD. Change them in `contact.ts` and `services.ts` if needed.

### Palette & fonts
Colours and font families are defined once in the `@theme` block at the top of `src/app/globals.css`. Fonts (Cormorant Garamond + Manrope) are self-hosted via `@fontsource`, so the site makes no Google Fonts requests.

## Connecting the commission form

The form (`src/components/CommissionForm.tsx`) validates everything client-side: required fields, email/phone format, minimum description length, and file type/size/count. It also includes a hidden honeypot field against spam bots.

On a valid submit it calls `submitCommission()` in **`src/lib/submitCommission.ts`**. Right now that function only `console.log`s the data. Replace its body with your integration, for example a Formspree/Basin endpoint, or your own serverless function that emails the studio and creates a CRM lead. The `toFormData()` helper already packages every field and uploaded file as `multipart/form-data`. Throw an error on failure and the form will show a retry message.

## Accessibility & SEO notes
- Semantic landmarks, skip link, visible focus styles, keyboard-accessible mobile menu (focus trap and Escape), gallery filters (`aria-pressed`) and lightbox (native `<dialog>`, arrow keys to step through).
- Form fields have associated labels, hints and errors via `aria-describedby`/`aria-invalid`, and focus moves to the first invalid field.
- Animations respect `prefers-reduced-motion`. Content is fully visible without JavaScript.
- Text colour pairs meet WCAG AA contrast (see the notes in `globals.css`).
- Per-page titles, meta descriptions, canonical URLs, Open Graph/Twitter tags, `sitemap.xml`, `robots.txt` and LocalBusiness JSON-LD on the home page.
