import type { Metadata } from "next";
import { site } from "@/content/site";
import type { Image } from "@/content/types";

/** Per-page metadata with matching Open Graph / Twitter tags. */
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title?: string;
  description: string;
  path: string;
  image?: Image;
}): Metadata {
  const ogImage = image ? ogImageUrl(image.src) : undefined;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: `${site.name} ${site.descriptor}`,
      locale: site.locale,
      url: path,
      title: title ? `${title} — ${site.name}` : `${site.name} — ${site.descriptor}`,
      description,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: image!.alt }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

function ogImageUrl(src: string) {
  return src.startsWith("https://images.unsplash.com/") ? `${src}?auto=format&fit=crop&q=75&w=1200&h=630` : src;
}
