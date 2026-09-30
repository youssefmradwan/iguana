/**
 * Services and the commission process — used on /services and the home page.
 */
import { images } from "./images";
import type { Image } from "./types";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  body: string;
  includes: string[];
  leadTime: string;
  image: Image;
};

export const servicesIntro = {
  eyebrow: "Services",
  title: "Four disciplines, one workshop",
  lede:
    "Whether it is a single chair or every cabinet in a house, the work passes through the same hands and the same standards. We take on a small number of commissions each year so that each receives our full attention.",
};

export const services: Service[] = [
  {
    slug: "furniture",
    title: "Bespoke furniture",
    summary: "Tables, seating, beds and cabinets, drawn for the room they will live in.",
    body:
      "Freestanding pieces designed around the way you live — the height you like to sit at, the number of people you cook for, the light that falls across the floor in the afternoon. Every joint is cut by hand and every surface finished in oil or wax, never lacquered over.",
    includes: ["Dining & occasional tables", "Chairs & benches", "Beds & bedside cabinets", "Desks & writing tables"],
    leadTime: "12 – 20 weeks",
    image: images.dining,
  },
  {
    slug: "kitchens",
    title: "Kitchens",
    summary: "Solid-timber kitchens built to work hard and age beautifully.",
    body:
      "Our kitchens are made the way furniture is made: solid timber carcasses, hand-cut dovetailed drawers, and doors hung to close with a quiet, weighty click. We plan the room with you from first sketch to final fitting, working alongside your architect or builder where needed.",
    includes: ["Full kitchen design & build", "Islands & larders", "Pantries & utility rooms", "Stone & metal worktop coordination"],
    leadTime: "20 – 30 weeks",
    image: images.kitchen,
  },
  {
    slug: "built-ins",
    title: "Built-ins & joinery",
    summary: "Libraries, wardrobes and panelling that become part of the architecture.",
    body:
      "Fitted joinery should feel as though it has always been there. We survey each space by hand, scribe to every uneven wall and build in the workshop before installing on site — so the finished room is calm, precise and quietly generous with storage.",
    includes: ["Libraries & shelving", "Dressing rooms & wardrobes", "Wall panelling", "Media walls & window seats"],
    leadTime: "14 – 24 weeks",
    image: images.builtIn,
  },
  {
    slug: "statement-pieces",
    title: "Statement pieces",
    summary: "One-off commissions where the brief is simply: make something remarkable.",
    body:
      "For clients who want a single piece to anchor a room — a boardroom table cut from one tree, a sculptural staircase balustrade, a cabinet of curiosities. These commissions begin with conversation and material, and are allowed the time they need.",
    includes: ["Single-slab tables", "Sculptural cabinets", "Architectural details", "Heirloom & gift commissions"],
    leadTime: "By discussion",
    image: images.armchair,
  },
];

export type ProcessStep = {
  title: string;
  duration: string;
  body: string;
};

export const processIntro = {
  eyebrow: "The commission",
  title: "How a piece comes to be",
  lede:
    "A commission is a collaboration. The process below is how most of our projects unfold — though we are always happy to adapt it to yours.",
};

export const process: ProcessStep[] = [
  {
    title: "Conversation",
    duration: "Week 1",
    body:
      "We begin with a call or a visit to the workshop. We want to understand the room, the way you use it, and what you would like the piece to feel like. There is no charge and no obligation.",
  },
  {
    title: "Survey & sketch",
    duration: "Weeks 2 – 3",
    body:
      "We visit your home to measure and photograph the space, then return with hand sketches and an initial estimate so you can see where the ideas are heading.",
  },
  {
    title: "Design & drawings",
    duration: "Weeks 3 – 6",
    body:
      "A design fee secures detailed drawings, timber samples and finish boards. We refine together until every proportion is right. The design fee is credited against the final commission.",
  },
  {
    title: "Commission",
    duration: "On approval",
    body:
      "You receive a fixed-price proposal with a clear schedule. On signing and a deposit, we select and set aside your timber — often from boards we have been air-drying for years.",
  },
  {
    title: "Making",
    duration: "8 – 24 weeks",
    body:
      "Your piece is made by hand in our workshop. We share progress photographs along the way and you are always welcome to visit and see it take shape on the bench.",
  },
  {
    title: "Delivery & installation",
    duration: "Final week",
    body:
      "We deliver and install everything ourselves, with care. Before we leave, we walk you through caring for the timber and finish.",
  },
  {
    title: "Aftercare",
    duration: "For life",
    body:
      "Solid wood moves with the seasons. We return after the first year to make any adjustments, and we will refinish or repair any piece we have made, for as long as it is in use.",
  },
];

export const faqs = [
  {
    q: "What does a commission typically cost?",
    a: "Freestanding furniture generally begins around $6,000; kitchens and larger joinery projects typically start from $45,000. We provide an initial estimate after our first visit and a fixed price before any making begins.",
  },
  {
    q: "Do you work with architects and interior designers?",
    a: "Often. We are happy to work to a designer's drawings, collaborate on the detailing, or lead the joinery design ourselves.",
  },
  {
    q: "Which timbers do you use?",
    a: "Mostly native hardwoods — oak, walnut, ash, cherry and elm — from sustainably managed sources we know personally. We are glad to discuss reclaimed or client-supplied timber.",
  },
  {
    q: "How far do you travel?",
    a: "We install throughout the region as standard, and further afield for larger commissions. Freestanding pieces can be crated and shipped.",
  },
];
