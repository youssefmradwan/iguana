/**
 * Company-wide details: name, contact information, navigation and SEO defaults.
 * Values marked PLACEHOLDER still need confirming before launch.
 */

export const site = {
  name: "Oakland",
  descriptor: "Construction · Fine Finishing · Woodwork",
  shortDescriptor: "Fine Finishing & Woodwork",
  tagline: "Construction, fine finishing and woodwork, crafted in Cairo.",
  description:
    "Oakland is a construction, fine finishing and woodwork contractor based in Cairo, Egypt, delivering administrative, residential and hospitality projects.",
  // PLACEHOLDER — the production domain. Used for canonical URLs, Open Graph and the sitemap.
  url: "https://www.oakland-eg.example",
  locale: "en_EG",

  contact: {
    location: "Cairo, Egypt",
    people: [
      { name: "Arch. Mohamed Radwan", phone: "0120 866 6010", phoneHref: "tel:+201208666010" },
      { name: "Eng. Youssef Radwan", phone: "0122 600 4006", phoneHref: "tel:+201226004006" },
    ],
    // PLACEHOLDER — add the company email address when available (leave "" to hide it).
    email: "",
  },

  nav: [
    { href: "/about/", label: "About" },
    { href: "/services/", label: "Services" },
    { href: "/portfolio/", label: "Projects" },
    { href: "/contact/", label: "Contact" },
  ],
} as const;
