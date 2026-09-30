import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { about } from "@/content/about";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Story",
  description:
    "Who we are and how we work: a small studio making bespoke furniture and joinery by hand from carefully sourced, slowly seasoned timber.",
  path: "/about/",
  image: about.heroImage,
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={about.eyebrow} title={about.title} image={about.heroImage} />

      {/* Story */}
      <section aria-labelledby="story-title" className="bg-ink py-28 sm:py-40">
        <Container className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 id="story-title" className="display text-4xl text-cream sm:text-5xl">
              {about.story.heading}
            </h2>
            <Photo
              image={about.story.image}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="mt-12 hidden aspect-[4/5] lg:block"
            />
          </Reveal>
          <Reveal delay={150} className="lg:col-span-6 lg:col-start-7 lg:pt-24">
            <div className="space-y-7 text-lg leading-[1.85] text-stone">
              {about.story.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "first-letter:float-left first-letter:mt-2 first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-brass"
                      : ""
                  }
                >
                  {p}
                </p>
              ))}
            </div>
            <Photo image={about.story.image} sizes="100vw" className="mt-14 aspect-[4/3] lg:hidden" />
          </Reveal>
        </Container>
      </section>

      {/* Principles */}
      <section aria-labelledby="principles-title" className="bg-cream py-28 text-ink sm:py-40">
        <Container>
          <Reveal>
            <Eyebrow tone="light">Philosophy</Eyebrow>
            <h2 id="principles-title" className="display mt-6 text-4xl sm:text-5xl lg:text-6xl">
              {about.principles.heading}
            </h2>
          </Reveal>
          <ol className="mt-16 divide-y divide-ink/15 border-y border-ink/15 sm:mt-24">
            {about.principles.items.map((item, i) => (
              <Reveal as="li" key={item.title} className="grid gap-4 py-10 sm:py-14 md:grid-cols-12 md:gap-10">
                <span className="font-serif text-2xl text-brass-deep md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display text-3xl md:col-span-4 lg:text-4xl">{item.title}</h3>
                <p className="max-w-xl text-base leading-relaxed text-umber md:col-span-7">{item.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Full-bleed material image */}
      <Photo image={about.timberImage} className="h-[50vh] min-h-[300px] w-full sm:h-[70vh]" />

      {/* Bespoke vs off-the-shelf */}
      <section aria-labelledby="bespoke-title" className="bg-ink py-28 sm:py-40">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>The difference</Eyebrow>
            <h2 id="bespoke-title" className="display mt-6 text-4xl text-cream sm:text-5xl lg:text-6xl">
              {about.bespoke.heading}
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-stone">{about.bespoke.lede}</p>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:mt-24 md:grid-cols-2 md:gap-0">
            {about.bespoke.columns.map((col, i) => (
              <Reveal
                key={col.label}
                delay={i * 150}
                className={`p-8 sm:p-12 ${i === 1 ? "bg-walnut" : "border border-cream/10 md:border-r-0"}`}
              >
                <h3 className={`eyebrow ${i === 1 ? "text-brass" : "text-stone"}`}>{col.label}</h3>
                <ul className="mt-8 space-y-5">
                  {col.points.map((point) => (
                    <li
                      key={point}
                      className={`flex gap-4 font-serif text-xl leading-snug sm:text-2xl ${i === 1 ? "text-cream" : "text-stone"}`}
                    >
                      <span aria-hidden="true" className={`mt-3 h-px w-5 shrink-0 ${i === 1 ? "bg-brass" : "bg-stone/50"}`} />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder note */}
      <section aria-label="A note from the founder" className="bg-parchment py-28 text-ink sm:py-40">
        <Container>
          <Reveal as="figure" className="mx-auto max-w-3xl text-center">
            <blockquote className="display text-3xl leading-[1.3] italic sm:text-4xl">“{about.founder.quote}”</blockquote>
            <figcaption className="mt-10">
              <span className="block font-serif text-xl">{about.founder.name}</span>
              <span className="eyebrow mt-2 block text-umber">{about.founder.role}</span>
            </figcaption>
          </Reveal>
          <Reveal className="mt-16 flex justify-center">
            <ButtonLink href="/contact/" tone="light">
              Begin a commission
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
