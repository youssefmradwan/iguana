/**
 * Copy for the home page. Sections render in the order they appear in
 * src/app/page.tsx; text and images come from here.
 */
import { photos } from "./images";

export const home = {
  hero: {
    eyebrow: "Cairo, Egypt",
    tagline: "Bespoke woodwork and mass production for offices, homes and hotels.",
    image: photos["luxoft-14"],
  },

  intro: {
    eyebrow: "About Oakland",
    statement:
      "Woodwork is all we do. Wall cladding, doors, kitchens, wardrobes and reception desks, made to measure as one-off pieces or produced in volume to one consistent standard.",
    link: { href: "/about/", label: "About us" },
  },

  sectors: {
    eyebrow: "Sectors",
    title: "Where we work",
  },

  selectedWork: {
    eyebrow: "Selected projects",
    title: "Recent work",
    link: { href: "/portfolio/", label: "All projects" },
  },

  services: {
    eyebrow: "Services",
    title: "Two ways to work with us",
    link: { href: "/services/", label: "Our services" },
  },

  clients: {
    eyebrow: "Clients & partners",
    title: "Trusted by",
  },

  cta: {
    title: "Let’s talk about your next project",
    body: "Tell us about your space and what you have in mind, or call us directly.",
    link: { href: "/contact/", label: "Start a project" },
    image: photos["excel-03"],
  },
};
