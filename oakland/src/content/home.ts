/**
 * Copy for the home page. Sections render in the order they appear in
 * src/app/page.tsx; text and images come from here.
 */
import { photos } from "./images";

export const home = {
  hero: {
    eyebrow: "Cairo, Egypt",
    tagline: "Construction, fine finishing and woodwork for offices, homes and hotels.",
    image: photos["dusit-01"],
  },

  intro: {
    eyebrow: "About Oakland",
    statement:
      "Three decades of construction and fine finishing, and woodwork contracting since 2016. We deliver spaces where timber, stone and light come together with precision.",
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
    title: "What we do",
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
    image: photos["lexies-01"],
  },
};
