/**
 * Shared content types. Everything a non-developer might edit lives in
 * /src/content — layout components only read from here.
 */

export type Image = {
  /** Local path like "/images/projects/luxoft-01.jpg", or a full URL. */
  src: string;
  /** Describe what is in the photo for screen-reader users. Required. */
  alt: string;
  /** Pixel size of the original file. Lets photos show uncropped, at their own proportions. */
  width?: number;
  height?: number;
  /** Optional focal point used when a photo has to be cropped, as CSS object-position (e.g. "50% 30%"). */
  position?: string;
};

export type Sector = "Administrative" | "Residential" | "Hospitality";
