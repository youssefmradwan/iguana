import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Oakland is a Cairo-based construction, fine finishing and consulting firm with more than thirty years of experience, and woodwork contractor since 2016.",
  path: "/about/",
  image: about.story.image,
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
              natural
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="mt-12 hidden lg:block"
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
            <dl className="mt-14 grid gap-8 border-t border-cream/15 pt-10 sm:grid-cols-3">
              {about.stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse gap-2">
                  <dt className="text-xs leading-relaxed text-stone">{s.label}</dt>
                  <dd className="display text-5xl text-brass tabular-nums">{s.value}</dd>
                </div>
              ))}
            </dl>
            <Photo image={about.story.image} natural sizes="100vw" className="mt-14 lg:hidden" />
          </Reveal>
        </Container>
      </section>

      {/* Principles */}
      <section aria-labelledby="principles-title" className="bg-cream py-28 text-ink sm:py-40">
        <Container>
          <Reveal>
            <Eyebrow tone="light">Approach</Eyebrow>
            <h2 id="principles-title" className="display mt-6 text-4xl sm:text-5xl lg:text-6xl">
              {about.principles.heading}
            </h2>
          </Reveal>
          <ul className="mt-16 divide-y divide-ink/15 border-y border-ink/15 sm:mt-24">
            {about.principles.items.map((item) => (
              <Reveal as="li" key={item.title} className="grid gap-4 py-10 sm:py-14 md:grid-cols-12 md:gap-10">
                <h3 className="display text-3xl md:col-span-5 lg:text-4xl">{item.title}</h3>
                <p className="max-w-xl text-base leading-relaxed text-umber md:col-span-7">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Full-bleed image */}
      <Photo image={about.wideImage} className="h-[50vh] min-h-[300px] w-full sm:h-[75vh]" />

      {/* Contact the team */}
      <section aria-labelledby="team-title" className="bg-ink py-28 sm:py-40">
        <Container className="grid items-center gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={about.logo.full}
              alt={`${site.name} logo`}
              width={1137}
              height={851}
              loading="lazy"
              className="w-full max-w-sm"
            />
          </Reveal>
          <Reveal delay={150} className="md:col-span-6 md:col-start-7">
            <Eyebrow>Contact</Eyebrow>
            <h2 id="team-title" className="display mt-6 text-4xl text-cream sm:text-5xl">
              {about.team.heading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone">{about.team.lede}</p>
            <ul className="mt-10 divide-y divide-cream/15 border-y border-cream/15">
              {site.contact.people.map((p) => (
                <li key={p.phone} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5">
                  <span className="font-serif text-2xl text-cream">{p.name}</span>
                  <a href={p.phoneHref} className="text-base tracking-wide text-brass tabular-nums hover:text-cream">
                    {p.phone}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <ButtonLink href="/contact/">Send an enquiry</ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
