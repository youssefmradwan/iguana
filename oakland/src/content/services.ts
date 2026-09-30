/**
 * Services, how a project works, and FAQs — used on /services and the home page.
 * Oakland offers two services: bespoke woodwork and mass production.
 */
import { photos } from "./images";
import type { Image } from "./types";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  body: string;
  includes: string[];
  image: Image;
};

export const servicesIntro = {
  eyebrow: "Services",
  title: "Bespoke pieces or full production runs",
  lede:
    "We make woodwork for administrative, residential and hospitality projects. Some jobs need one piece made for one space. Others need the same piece made many times over. We do both, to the same standard.",
};

export const services: Service[] = [
  {
    slug: "bespoke-woodwork",
    title: "Bespoke woodwork",
    summary: "One-off joinery designed and made to measure for a specific space.",
    body:
      "Every bespoke piece starts on site. We measure, develop shop drawings with you or your designer, and make each item to fit its space exactly, from slatted feature walls and pivot entrance doors to kitchens, dressing rooms and reception desks.",
    includes: [
      "Wall cladding & slatted screens",
      "Entrance & pivot doors",
      "Kitchens, wardrobes & dressing rooms",
      "Reception desks & counters",
      "Feature ceilings & staircases",
      "One-off furniture",
    ],
    image: photos["zayed-01"],
  },
  {
    slug: "mass-production",
    title: "Mass production",
    summary: "Repeat woodwork made in volume to one consistent specification.",
    body:
      "For developers, hotels and offices that need the same item many times, we produce woodwork in batches from approved samples and drawings, so the first piece and the last match.",
    includes: [
      "Doors & frames",
      "Kitchen & wardrobe units",
      "Lockers & office storage",
      "Hotel room joinery",
      "Wall panels to a repeat specification",
      "Furniture in series",
    ],
    image: photos["luxoft-04"],
  },
];

export type ProcessStep = { title: string; body: string };

export const processIntro = {
  eyebrow: "How we work",
  title: "From first meeting to installation",
  lede: "Bespoke pieces and production runs follow the same path, adapted to your programme and the other parties involved.",
};

export const process: ProcessStep[] = [
  {
    title: "First meeting",
    body: "Tell us what you need: one bespoke piece, a full fit-out of joinery, or a quantity of repeat items. We also want to know about the space, the programme and who else is involved.",
  },
  {
    title: "Site survey",
    body: "For bespoke work we measure on site and check existing conditions. For production runs we confirm the specification and quantities.",
  },
  {
    title: "Drawings & samples",
    body: "We prepare shop drawings and timber and finish samples. For production runs, a first sample piece is approved before the batch begins.",
  },
  {
    title: "Proposal",
    body: "You receive a clear scope, price and programme, so everyone knows what will be delivered and when.",
  },
  {
    title: "Production",
    body: "Bespoke pieces are made to measure. Production runs are made in batches and checked against the approved sample. We keep you updated throughout.",
  },
  {
    title: "Delivery & installation",
    body: "We deliver and install, then check every item before handover.",
  },
];

export const faqs = [
  {
    q: "What is the difference between bespoke woodwork and mass production?",
    a: "Bespoke woodwork is designed and made for one specific space, usually as a single piece or a small set. Mass production is for items needed many times over, like doors, wardrobes or hotel room joinery, made in batches to one approved specification.",
  },
  {
    q: "Can one project use both?",
    a: "Yes. A hotel or office often needs feature pieces for the lobby or reception, plus repeat items for rooms or floors. We can handle both on the same project.",
  },
  {
    q: "Do you work with architects, designers and contractors?",
    a: "Often. We can make woodwork to a designer's drawings, develop the joinery details with them, or work as woodwork contractor alongside a main contractor.",
  },
  {
    q: "Where do you work?",
    a: "Our office is in Katameya Business Complex, Cairo, and we deliver projects across Greater Cairo.",
  },
];
