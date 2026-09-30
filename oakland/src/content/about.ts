/**
 * Copy for the About / Story page.
 * Paragraph arrays render as separate <p> elements.
 */
import { images } from "./images";

export const about = {
  eyebrow: "Our story",
  title: "Made by hand, in no particular hurry",
  heroImage: images.workshopDetail,

  story: {
    heading: "A workshop, not a factory",
    paragraphs: [
      "Oakland began with a single bench, a set of inherited chisels and a stubborn belief that the things we live with every day deserve to be made properly. More than a decade later we are still a small studio — a handful of makers, one workshop, and a timber store that smells of oak and linseed.",
      "We design and build furniture and fitted joinery for private homes. Every commission starts with a conversation and a sheet of paper, and ends with a piece that fits its room so naturally it seems to have grown there.",
      "We are not the fastest, and we are not the cheapest. We are, we hope, the people you call when you want something made once, and made right.",
    ],
    image: images.workshop,
  },

  principles: {
    heading: "What we believe",
    items: [
      {
        title: "Material first",
        body: "We buy timber by the log, not the board, and let it air-dry slowly in our yard. Knowing where every plank came from means we can match grain across a whole room — and tell you the story of the tree.",
      },
      {
        title: "Joinery you can trust",
        body: "Dovetails, mortise-and-tenons and drawbored pegs: joints that have held furniture together for centuries. We use screws and metal fixings only where wood-to-wood would be the wrong answer.",
      },
      {
        title: "Finishes that age well",
        body: "Natural oils, waxes and soaps rather than plastic lacquers. They let the wood breathe, deepen with use, and can be repaired at home rather than stripped back in a workshop.",
      },
      {
        title: "Responsibility",
        body: "Our timber comes from certified and small-scale local sources, offcuts heat the workshop, and we will refinish or repair any piece we have ever made. The most sustainable furniture is the piece nobody ever needs to replace.",
      },
    ],
  },

  bespoke: {
    heading: "Why bespoke?",
    lede: "Off-the-shelf furniture is designed for an average room that doesn’t exist. Bespoke work begins with yours.",
    columns: [
      {
        label: "Off the shelf",
        points: [
          "Sized for a catalogue, not your space",
          "Veneered board, stapled and glued",
          "Lacquered finishes that chip and can’t be repaired",
          "Designed to be replaced in a decade",
        ],
      },
      {
        label: "Oakland",
        points: [
          "Drawn to the millimetre for your room and your life",
          "Solid timber, joined by hand",
          "Oiled and waxed finishes that improve with age",
          "Made to be repaired, handed down and kept",
        ],
      },
    ],
  },

  timberImage: images.timber,

  founder: {
    // PLACEHOLDER — replace with the founder's real name and words.
    quote:
      "I want someone to open a drawer we made in fifty years’ time and feel the same quiet satisfaction we felt when we fitted it.",
    name: "Founder Name",
    role: "Founder & Master Maker",
  },
};
