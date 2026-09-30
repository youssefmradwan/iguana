import type { Image } from "@/content/types";
import Photo from "./Photo";
import { Container, Eyebrow } from "./ui";

type Props = {
  eyebrow: string;
  title: string;
  lede?: string;
  image?: Image;
};

/** Opening section for inner pages: headline on charcoal, optional full-bleed image beneath. */
export default function PageHero({ eyebrow, title, lede, image }: Props) {
  return (
    <header className="bg-ink pt-40 sm:pt-48">
      <Container className="pb-16 sm:pb-24">
        <Eyebrow className="animate-fade-up">{eyebrow}</Eyebrow>
        <h1
          className="display animate-fade-up mt-8 max-w-4xl text-5xl text-cream sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "120ms" }}
        >
          {title}
        </h1>
        {lede && (
          <p
            className="animate-fade-up mt-8 max-w-2xl text-base leading-relaxed text-stone sm:text-lg"
            style={{ animationDelay: "240ms" }}
          >
            {lede}
          </p>
        )}
      </Container>
      {image && (
        <Photo
          image={image}
          priority
          className="animate-fade-up h-[52vh] min-h-[320px] w-full sm:h-[68vh]"
          imgClassName="brightness-[0.85]"
        />
      )}
    </header>
  );
}
