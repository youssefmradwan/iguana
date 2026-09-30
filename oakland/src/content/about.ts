/**
 * Copy for the About page. Facts (founding, years of experience, services)
 * come from the company profile; review the wording before launch.
 */
import { logo, photos } from "./images";

export const about = {
  eyebrow: "About us",
  title: "Built on three decades of craft",
  heroImage: photos["brand-01"],

  story: {
    heading: "Who we are",
    paragraphs: [
      "Oakland is a construction, finishing and consulting services firm based in Cairo, Egypt. We work as main contractor for construction and fine finishing, and as woodwork contractor on administrative, residential and hospitality projects.",
      "Our experience in construction and fine finishing goes back more than thirty years. Since 2016 we have also worked as woodwork contractors, and timber has become the signature of our projects: slatted feature walls, entrance doors, kitchens, wardrobes and reception desks, each made for its space.",
      "Our clients include developers, contractors, hotels, banks and private owners, from head offices in Capital Business Park to villas on the North Coast.",
    ],
    image: photos["dusit-02"],
  },

  stats: [
    { value: "30+", label: "years in construction and fine finishing" },
    { value: "2016", label: "woodwork contracting since" },
    { value: "3", label: "sectors: administrative, residential, hospitality" },
  ],

  principles: {
    heading: "How we work",
    items: [
      {
        title: "One team, start to finish",
        body: "As main contractor we coordinate every trade on site, so finishing and joinery are planned together rather than left to the end.",
      },
      {
        title: "Made for the space",
        body: "Joinery is measured on site and made to fit: cladding that lines up with doors, slats that align with ceilings, storage built into the architecture.",
      },
      {
        title: "Attention to detail",
        body: "The quality of a finish is in its junctions. We care about how timber meets stone, how panels meet ceilings, and how everything is lit.",
      },
      {
        title: "Clear communication",
        body: "Owners, designers and contractors get a clear scope, drawings for approval and regular updates from site.",
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
