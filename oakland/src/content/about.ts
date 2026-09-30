/**
 * Copy for the About page. Facts (woodwork since 2016, 30+ years of experience,
 * sectors) come from the company profile; review the wording before launch.
 */
import { logo, photos } from "./images";

export const about = {
  eyebrow: "About us",
  title: "Woodwork, made in Cairo",
  heroImage: photos["brand-01"],

  story: {
    heading: "Who we are",
    paragraphs: [
      "Oakland is a woodwork company based in Cairo, Egypt. We make bespoke joinery and mass-produced woodwork for administrative, residential and hospitality projects.",
      "We have worked as woodwork contractors since 2016, building on more than thirty years of industry experience. Timber is the signature of everything we deliver: slatted feature walls, entrance doors, kitchens, wardrobes and reception desks.",
      "Our clients include developers, contractors, hotels, banks and private owners, from head offices in Capital Business Park to villas on the North Coast.",
    ],
    image: photos["dusit-02"],
  },

  stats: [
    { value: "2016", label: "woodwork contracting since" },
    { value: "30+", label: "years of industry experience" },
    { value: "2", label: "services: bespoke woodwork and mass production" },
  ],

  principles: {
    heading: "How we work",
    items: [
      {
        title: "One piece or many",
        body: "Whether you need a single reception desk or two hundred wardrobe units, the same team makes it, to the same standard.",
      },
      {
        title: "Made for the space",
        body: "Bespoke work is measured on site and made to fit: cladding that lines up with doors, slats that align with ceilings, storage built into the architecture.",
      },
      {
        title: "Consistent in volume",
        body: "Production runs start from an approved sample and drawings, so every piece in the batch matches the first.",
      },
      {
        title: "Clear communication",
        body: "Owners, designers and contractors get a clear scope, drawings for approval and regular progress updates.",
      },
    ],
  },

  wideImage: photos["marina-02"],

  logo,

  team: {
    heading: "Talk to us directly",
    lede: "Call Arch. Mohamed Radwan or Eng. Youssef Radwan to discuss your project.",
  },
};
