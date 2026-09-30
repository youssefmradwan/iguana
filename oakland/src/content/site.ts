/**
 * Studio-wide details: name, contact information, navigation and SEO defaults.
 * Replace every value marked PLACEHOLDER before launch.
 */

export const site = {
  name: "Oakland",
  descriptor: "Bespoke Woodwork",
  tagline: "Furniture made slowly, to be kept for generations.",
  description:
    "Oakland designs and hand-builds bespoke furniture, kitchens and fitted joinery for private clients. Each piece is drawn, made and finished in our own workshop.",
  // PLACEHOLDER — the production domain. Used for canonical URLs and Open Graph.
  url: "https://www.oakland-studio.example",
  locale: "en_US",

  contact: {
    // PLACEHOLDER contact details
    email: "studio@oakland-studio.example",
    phone: "+1 (555) 010-0142",
    phoneHref: "tel:+15550100142",
    addressLines: ["The Timber Yard, Unit 4", "000 Placeholder Street", "Your City, ST 00000"],
    hours: "Workshop visits by appointment, Tuesday – Saturday",
    instagram: "https://instagram.com/", // PLACEHOLDER
    instagramHandle: "@oakland.studio", // PLACEHOLDER
  },

  nav: [
    { href: "/about/", label: "Story" },
    { href: "/services/", label: "Services" },
    { href: "/portfolio/", label: "Portfolio" },
    { href: "/contact/", label: "Commission" },
  ],
} as const;
