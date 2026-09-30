/**
 * Services, how a project works, and FAQs — used on /services and the home page.
 * The four services and their one-line summaries come from the company profile.
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
  title: "From structure to the final detail",
  lede:
    "We work as main contractor for construction and fine finishing, and as woodwork contractor on administrative, residential and hospitality projects. Clients can bring us in for the whole build or for the joinery alone.",
};

export const services: Service[] = [
  {
    slug: "main-contracting",
    title: "Main contracting",
    summary: "Leading construction works as main contractor, managing trades and delivery.",
    body:
      "We take responsibility for the whole project: coordinating every trade on site, keeping to programme, and answering to one standard of quality from the first works to handover.",
    includes: ["Construction works", "Trade coordination", "Programme & site management", "Handover"],
    image: photos["luxoft-06"],
  },
  {
    slug: "fine-finishing",
    title: "Fine finishing",
    summary: "High-end interior finishing for offices, homes and hospitality spaces.",
    body:
      "The last layer of a building is the one people live with. We deliver finishing works where the joints, lines and junctions between materials are resolved with care.",
    includes: ["Offices & head offices", "Private residences & villas", "Hotel & restaurant interiors", "Banking halls"],
    image: photos["marina-01"],
  },
  {
    slug: "woodwork",
    title: "Woodwork",
    summary: "Custom joinery, wall cladding, doors, kitchens and wardrobes.",
    body:
      "Woodwork is at the heart of Oakland. Every piece is made to measure for its space, from slatted feature walls and pivot entrance doors to kitchens, dressing rooms and reception desks.",
    includes: ["Wall cladding & slatted screens", "Entrance & pivot doors", "Kitchens & wardrobes", "Reception desks & counters"],
    image: photos["dusit-03"],
  },
  {
    slug: "consulting",
    title: "Consulting",
    summary: "Technical and finishing advice for owners, designers and contractors.",
    body:
      "Owners, designers and contractors call on our experience to review details, choose materials and finishes, and plan the finishing stages of a project before work starts on site.",
    includes: ["Detail & shop-drawing review", "Material & finish selection", "Finishing works planning", "Site advice"],
    image: photos["excel-03"],
  },
];

export type ProcessStep = { title: string; body: string };

export const processIntro = {
  eyebrow: "How we work",
  title: "From first meeting to handover",
  lede: "Every project is different, but most follow the same path. We adapt it to your programme and the other parties involved.",
};

export const process: ProcessStep[] = [
  {
    title: "First meeting",
    body: "We start by understanding the project: the space, the brief, the programme, and who else is involved, whether that is an owner, designer or main contractor.",
  },
  {
    title: "Site survey",
    body: "We visit the site to measure, check existing conditions and identify anything that will affect the finishing or joinery works.",
  },
  {
    title: "Design & shop drawings",
    body: "We develop or review the design and prepare detailed shop drawings and material samples for approval before anything is made.",
  },
  {
    title: "Proposal",
    body: "You receive a clear scope, price and programme, so everyone knows what will be delivered and when.",
  },
  {
    title: "Fabrication & site works",
    body: "Joinery is made to measure while finishing works progress on site. We keep you updated at every stage.",
  },
  {
    title: "Installation & handover",
    body: "We install, finish and snag every item before handing the space over, ready to use.",
  },
];

export const faqs = [
  {
    q: "What kinds of projects do you take on?",
    a: "Administrative, residential and hospitality projects: head offices, banks, private homes and villas, hotel lobbies and restaurants.",
  },
  {
    q: "Can you do just the woodwork on a project?",
    a: "Yes. We work as main contractor for construction and fine finishing, and also as woodwork contractor alongside another main contractor.",
  },
  {
    q: "Do you work with architects and interior designers?",
    a: "Often. We can build to a designer's drawings, develop the joinery details with them, or advise on finishes and materials.",
  },
  {
    q: "Where do you work?",
    a: "We are based in Cairo and have delivered projects across Greater Cairo and on the North Coast.",
  },
];
