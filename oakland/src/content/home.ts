/**
 * Copy for the home page. Sections render in the order they appear in
 * src/app/page.tsx; text and images come from here.
 */
import { images } from "./images";

export const home = {
  hero: {
    // The brand name is taken from site.ts; this is the short line beneath it.
    tagline: "Bespoke furniture and joinery, drawn for your home and made entirely by hand.",
    image: images.hero,
  },

  intro: {
    eyebrow: "The studio",
    statement:
      "We make a small number of pieces each year — tables, kitchens, libraries and heirlooms — for people who would rather wait for something right than settle for something ready.",
    link: { href: "/about/", label: "Read our story" },
  },

  selectedWork: {
    eyebrow: "Selected work",
    title: "Recent commissions",
    link: { href: "/portfolio/", label: "View the portfolio" },
  },

  process: {
    eyebrow: "The commission",
    title: "From first conversation to lifelong aftercare",
    link: { href: "/services/#process", label: "How a commission works" },
  },

  testimonial: {
    // PLACEHOLDER — replace with a real client quote (with permission).
    quote:
      "They listened for an entire afternoon before drawing a single line. The table they made is the first thing anyone touches when they walk into our kitchen.",
    attribution: "Private client, dining commission",
  },

  cta: {
    title: "Begin a commission",
    body: "Tell us about your space and what you have in mind. We reply personally to every enquiry within two working days.",
    link: { href: "/contact/", label: "Start the conversation" },
    image: images.interior,
  },
};
