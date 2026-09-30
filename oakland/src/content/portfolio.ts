/**
 * Projects, taken from the Oakland company profile.
 *
 * Add, remove or reorder freely. The gallery filters come from `sectors`,
 * and the first image of each project is its cover. `featured: true`
 * projects also appear on the home page (first three).
 */
import { photos, type PhotoName } from "./images";
import type { Image, Sector } from "./types";

export type Project = {
  id: string;
  title: string;
  sector: Sector;
  client?: string;
  location?: string;
  scope?: string;
  images: Image[];
  featured?: boolean;
};

export const portfolioIntro = {
  eyebrow: "Projects",
  title: "Selected work",
  lede:
    "Woodwork for head offices, banking halls, private homes, restaurants and hotels across Greater Cairo.",
};

export const sectors: { name: Sector; summary: string; cover: Image }[] = [
  {
    name: "Administrative",
    summary: "Wall cladding, reception desks, doors and storage for head offices, customer service centres and banking halls.",
    cover: photos["section-01"],
  },
  {
    name: "Residential",
    summary: "Bespoke joinery, kitchens, dressing rooms, entrance doors and feature timber work for private homes.",
    cover: photos["doors-01"],
  },
  {
    name: "Hospitality",
    summary: "Feature woodwork for hotels, restaurants and poolside spaces.",
    cover: photos["section-03"],
  },
];

const pick = (...names: PhotoName[]) => names.map((n) => photos[n]);
const range = (prefix: string, count: number) =>
  pick(...Array.from({ length: count }, (_, i) => `${prefix}-${String(i + 1).padStart(2, "0")}` as PhotoName));

export const projects: Project[] = [
  {
    id: "luxoft",
    title: "Luxoft Head Office",
    sector: "Administrative",
    client: "Sole Fine Works",
    location: "Emaar Mivida",
    images: range("luxoft", 15),
    featured: true,
  },
  {
    id: "dorra",
    title: "Dorra Customer Service Office",
    sector: "Administrative",
    client: "Dorra Group",
    location: "Capital Business Park",
    images: range("dorra", 5),
  },
  {
    id: "excel",
    title: "Excel Systems Head Office",
    sector: "Administrative",
    client: "Dorra Group",
    location: "Capital Business Park",
    images: [...range("excel", 3), photos["section-01"]],
    featured: true,
  },
  {
    id: "qorrect",
    title: "Qorrect Head Office",
    sector: "Administrative",
    client: "Qorrect",
    location: "Dokki",
    images: range("qorrect", 4),
  },
  {
    id: "nbe",
    title: "National Bank of Egypt",
    sector: "Administrative",
    client: "National Bank of Egypt",
    location: "El-Azhar",
    images: range("nbe", 4),
  },
  {
    id: "heliopolis",
    title: "Private Residence, Heliopolis",
    sector: "Residential",
    client: "Private client",
    location: "Heliopolis",
    images: [...range("heliopolis", 6), photos["section-02"]],
  },
  {
    id: "zayed",
    title: "Private Residence, Sheikh Zayed",
    sector: "Residential",
    client: "Private client",
    location: "Sheikh Zayed",
    images: range("zayed", 3),
  },
  {
    id: "holidayinn",
    title: "Holiday Inn Cairo Maadi, Restaurant",
    sector: "Hospitality",
    client: "ASASS Construction",
    location: "Maadi, Cairo",
    images: [...range("holidayinn", 2), photos["section-03"]],
    featured: true,
  },
];

/** Client names shown on the home page, in profile order, without duplicates. */
export const clients = Array.from(
  new Set(projects.map((p) => p.client).filter((c): c is string => !!c && c !== "Private client")),
);
