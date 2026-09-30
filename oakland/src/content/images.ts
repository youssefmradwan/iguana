/**
 * Placeholder photography.
 *
 * Every image on the site is referenced from here (or from a content file),
 * so swapping in real photography is a matter of:
 *   1. dropping the files into /public/images/
 *   2. replacing the `src` below with e.g. "/images/hero-dining-table.jpg"
 *   3. updating the `alt` text to describe the real photo
 *
 * If an image fails to load, <Photo /> shows a warm, wood-toned block
 * instead of a broken-image icon.
 */
import type { Image } from "./types";

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const images = {
  hero: {
    src: unsplash("1533090481720-856c6e3c1fdc"),
    alt: "A solid timber dining table set in a softly lit, minimal room",
  },
  workshop: {
    src: unsplash("1504148455328-c376907d081c"),
    alt: "Hand tools laid out on a well-used workbench",
  },
  workshopDetail: {
    src: unsplash("1588854337236-6889d631faa8"),
    alt: "A craftsman planing a board by hand in the workshop",
  },
  timber: {
    src: unsplash("1452860606245-08befc0ff44b"),
    alt: "Stacked planks of air-drying hardwood showing the end grain",
  },
  kitchen: {
    src: unsplash("1556911220-bff31c812dba"),
    alt: "A kitchen with timber cabinetry and a stone worktop",
  },
  builtIn: {
    src: unsplash("1595428774223-ef52624120d2"),
    alt: "Floor-to-ceiling fitted shelving in a quiet living room",
  },
  chair: {
    src: unsplash("1503602642458-232111445657"),
    alt: "A simple hand-made wooden stool photographed against a pale wall",
  },
  interior: {
    src: unsplash("1618221195710-dd6b41faaea6"),
    alt: "A calm living space furnished with natural materials",
  },
  dining: {
    src: unsplash("1617806118233-18e1de247200"),
    alt: "A dining room with a long timber table and pendant light",
  },
  living: {
    src: unsplash("1493663284031-b7e3aefcae8e"),
    alt: "A living room with low timber furniture and warm light",
  },
  bedroom: {
    src: unsplash("1519710164239-da123dc03ef4"),
    alt: "A bedroom with a timber headboard and linen bedding",
  },
  kitchenAlt: {
    src: unsplash("1556909114-f6e7ad7d3136"),
    alt: "A kitchen island in pale oak with integrated storage",
  },
  lounge: {
    src: unsplash("1586023492125-27b2c045efd7"),
    alt: "A lounge chair beside a low side table in a sunlit room",
  },
  armchair: {
    src: unsplash("1567538096630-e0c55bd6374c"),
    alt: "A sculptural armchair with a timber frame",
  },
  study: {
    src: unsplash("1524758631624-e2822e304c36"),
    alt: "A study with a writing desk and fitted joinery",
  },
  sideboard: {
    src: unsplash("1484101403633-562f891dc89a"),
    alt: "A long, low timber sideboard beneath a window",
  },
} satisfies Record<string, Image>;
