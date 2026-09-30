/**
 * Portfolio projects. Add, remove or reorder freely — the gallery filters
 * are generated from the `category` values used here.
 *
 * `featured: true` projects also appear on the home page (first three).
 */
import { images } from "./images";
import type { Category, Image } from "./types";

export type Project = {
  id: string;
  title: string;
  category: Category;
  materials: string;
  dimensions: string;
  year: number;
  location: string;
  image: Image;
  /** Tall images span two rows in the gallery for a more editorial rhythm. */
  tall?: boolean;
  featured?: boolean;
};

export const portfolioIntro = {
  eyebrow: "Portfolio",
  title: "Selected work",
  lede:
    "A selection of recent commissions for private homes. Many of our clients prefer discretion, so locations are given only broadly.",
};

export const categories: Category[] = ["Furniture", "Kitchens", "Built-ins", "Statement pieces"];

export const projects: Project[] = [
  {
    id: "harrow-table",
    title: "The Harrow Dining Table",
    category: "Furniture",
    materials: "Quarter-sawn English oak, hand-rubbed oil",
    dimensions: "L 280 × W 105 × H 74 cm",
    year: 2025,
    location: "Private residence, countryside",
    image: images.hero,
    featured: true,
  },
  {
    id: "linden-kitchen",
    title: "Linden House Kitchen",
    category: "Kitchens",
    materials: "Rift ash, honed limestone, unlacquered brass",
    dimensions: "Island L 360 × W 120 cm",
    year: 2025,
    location: "Townhouse, city centre",
    image: images.kitchen,
    tall: true,
    featured: true,
  },
  {
    id: "hollis-library",
    title: "Hollis Library Wall",
    category: "Built-ins",
    materials: "Black walnut, bronze ladder rail",
    dimensions: "W 640 × H 390 cm",
    year: 2024,
    location: "Converted chapel",
    image: images.builtIn,
    featured: true,
  },
  {
    id: "wren-stool",
    title: "Wren Stool",
    category: "Furniture",
    materials: "Cherry, wedged through-tenons",
    dimensions: "Ø 34 × H 46 cm",
    year: 2024,
    location: "Edition of 12",
    image: images.chair,
    tall: true,
  },
  {
    id: "marlow-armchair",
    title: "Marlow Reading Chair",
    category: "Statement pieces",
    materials: "Fumed oak, vegetable-tanned leather",
    dimensions: "W 78 × D 82 × H 88 cm",
    year: 2024,
    location: "Private collection",
    image: images.armchair,
  },
  {
    id: "orchard-kitchen",
    title: "Orchard Lane Kitchen",
    category: "Kitchens",
    materials: "Pale oak, zellige tile, oiled finish",
    dimensions: "Galley L 540 cm",
    year: 2023,
    location: "Farmhouse restoration",
    image: images.kitchenAlt,
  },
  {
    id: "ashby-sideboard",
    title: "Ashby Sideboard",
    category: "Furniture",
    materials: "Walnut, hand-cut dovetails, leather pulls",
    dimensions: "L 210 × D 48 × H 72 cm",
    year: 2023,
    location: "Coastal home",
    image: images.sideboard,
  },
  {
    id: "fenwick-study",
    title: "Fenwick Study",
    category: "Built-ins",
    materials: "Oak panelling, walnut desk inlay",
    dimensions: "Room 4.2 × 3.6 m",
    year: 2023,
    location: "Georgian townhouse",
    image: images.study,
    tall: true,
  },
  {
    id: "eldon-bed",
    title: "Eldon Bed",
    category: "Furniture",
    materials: "Ash, woven linen headboard",
    dimensions: "W 190 × L 220 × H 110 cm",
    year: 2022,
    location: "Private residence",
    image: images.bedroom,
  },
  {
    id: "single-tree-table",
    title: "Single-Tree Boardroom Table",
    category: "Statement pieces",
    materials: "One elm tree, butterfly keys, blackened steel",
    dimensions: "L 520 × W 140 × H 75 cm",
    year: 2022,
    location: "Family office",
    image: images.dining,
  },
  {
    id: "garden-room",
    title: "Garden Room Joinery",
    category: "Built-ins",
    materials: "Larch, window seat with storage",
    dimensions: "W 460 × H 240 cm",
    year: 2022,
    location: "Country house",
    image: images.living,
  },
  {
    id: "lounge-table",
    title: "Low Lounge Table",
    category: "Statement pieces",
    materials: "Bog oak, hand-carved base",
    dimensions: "Ø 120 × H 34 cm",
    year: 2021,
    location: "Private residence",
    image: images.lounge,
  },
];
