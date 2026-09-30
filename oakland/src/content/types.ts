/**
 * Shared content types. Everything a non-developer might edit lives in
 * /src/content — layout components only read from here.
 */

export type Image = {
  /** Full URL (e.g. Unsplash) or a local path like "/images/hero.jpg". */
  src: string;
  /** Describe what is in the photo for screen-reader users. Required. */
  alt: string;
  /** Optional focal point for cropping, as CSS object-position (e.g. "50% 30%"). */
  position?: string;
};

export type Category = "Furniture" | "Kitchens" | "Built-ins" | "Statement pieces";
