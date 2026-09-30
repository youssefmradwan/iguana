"use client";

import { useEffect, useRef, useState } from "react";
import type { Image } from "@/content/types";

const WIDTHS = [480, 800, 1200, 1600, 2200];
const SMALL = 900;

/**
 * Builds a responsive srcset:
 *  - project photos use the 900px copy in /images/projects/sm/ plus the original
 *  - Unsplash URLs are resized on the fly
 *  - anything else is served as-is
 */
function sources(image: Image) {
  const { src, width } = image;
  const local = src.match(/^(\/images\/projects\/)([^/]+)$/);
  if (local && width && width > SMALL) {
    return { src, srcSet: `${local[1]}sm/${local[2]} ${SMALL}w, ${src} ${width}w` };
  }
  if (!src.startsWith("https://images.unsplash.com/")) return { src };
  const url = (w: number) => `${src}?auto=format&fit=crop&q=72&w=${w}`;
  return {
    src: url(1600),
    srcSet: WIDTHS.map((w) => `${url(w)} ${w}w`).join(", "),
  };
}

type Props = {
  image: Image;
  /** Tells the browser how wide the image renders, e.g. "(min-width: 768px) 50vw, 100vw". */
  sizes?: string;
  /** Load immediately (use only for above-the-fold images such as the hero). */
  priority?: boolean;
  /**
   * Show the whole photo at its own proportions instead of cropping it to the
   * box. Needs `width` and `height` on the image.
   */
  natural?: boolean;
  className?: string;
  imgClassName?: string;
};

/**
 * Responsive, lazy-loaded image on a warm wood-toned placeholder.
 * The photo fades in once loaded; if it fails, the placeholder remains.
 * Size the wrapper with `className` (e.g. aspect-[4/5]) — the photo is cropped
 * to fill it — or pass `natural` to show the whole photo at its own proportions.
 */
export default function Photo({
  image,
  sizes = "100vw",
  priority = false,
  natural = false,
  className = "",
  imgClassName = "",
}: Props) {
  const ref = useRef<HTMLImageElement>(null);
  const [state, setState] = useState<"loading" | "loaded" | "error">("loading");

  // The image may finish loading before React hydrates and attaches onLoad.
  useEffect(() => {
    const img = ref.current;
    if (img?.complete) setState(img.naturalWidth > 0 ? "loaded" : "error");
  }, []);

  const { src, srcSet } = sources(image);
  const ratio = natural && image.width && image.height ? `${image.width} / ${image.height}` : undefined;

  return (
    <div className={`wood-placeholder relative overflow-hidden ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      {state !== "error" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={src}
          srcSet={srcSet}
          sizes={srcSet ? sizes : undefined}
          alt={image.alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding="async"
          onLoad={() => setState("loaded")}
          onError={() => setState("error")}
          style={{ objectPosition: image.position }}
          className={`photo-img absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            state === "loaded" ? "is-loaded" : ""
          } ${imgClassName}`}
        />
      )}
      {state === "error" && (
        // Keep the description available when the photo can't be shown.
        <span role="img" aria-label={image.alt} className="absolute inset-0" />
      )}
    </div>
  );
}
