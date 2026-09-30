import Link from "next/link";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { ArrowLink, ButtonLink, Container, Eyebrow } from "@/components/ui";
import { home } from "@/content/home";
import { projects } from "@/content/portfolio";
import { process, services } from "@/content/services";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  description: site.description,
  path: "/",
  image: home.hero.image,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: `${site.name} ${site.descriptor}`,
  description: site.description,
  url: site.url,
  email: site.contact.email,
  telephone: site.contact.phone,
  address: { "@type": "PostalAddress", streetAddress: site.contact.addressLines.join(", ") },
};

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative flex h-[100svh] min-h-[560px] items-end overflow-hidden bg-ink">
        <Photo image={home.hero.image} priority className="absolute! inset-0" imgClassName="animate-hero-zoom" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/30" />
        <Container className="relative pb-20 sm:pb-28">
          <p className="eyebrow animate-fade-up text-brass" style={{ animationDelay: "200ms" }}>
            {site.descriptor}
          </p>
          <h1
            id="hero-title"
            className="wordmark animate-fade-up mt-6 text-[clamp(3.25rem,13vw,11rem)] leading-[0.9] tracking-[0.18em] text-cream"
            style={{ animationDelay: "350ms" }}
          >
            {site.name}
          </h1>
          <div
            className="animate-fade-up mt-10 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between"
            style={{ animationDelay: "550ms" }}
          >
            <p className="max-w-md font-serif text-2xl leading-snug text-cream/90 italic sm:text-3xl">{home.hero.tagline}</p>
            <a href="#studio" className="group hidden items-center gap-4 text-cream/70 hover:text-cream sm:flex">
              <span className="eyebrow">Discover</span>
              <span aria-hidden="true" className="relative block h-14 w-px overflow-hidden bg-cream/20">
                <span className="animate-scroll-cue absolute inset-0 bg-cream" />
              </span>
            </a>
          </div>
        </Container>
      </section>

      {/* Studio statement */}
      <section id="studio" aria-labelledby="studio-title" className="scroll-mt-24 bg-ink py-28 sm:py-40">
        <Container className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <Eyebrow>
              <span id="studio-title">{home.intro.eyebrow}</span>
            </Eyebrow>
          </Reveal>
          <Reveal delay={120} className="md:col-span-9">
            <p className="display text-3xl leading-[1.25] text-cream sm:text-4xl lg:text-5xl">{home.intro.statement}</p>
            <ArrowLink href={home.intro.link.href} className="mt-12 text-brass">
              {home.intro.link.label}
            </ArrowLink>
          </Reveal>
        </Container>
      </section>

      {/* Disciplines */}
      <section aria-labelledby="disciplines-title" className="bg-cream py-28 text-ink sm:py-40">
        <Container>
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow tone="light">What we make</Eyebrow>
              <h2 id="disciplines-title" className="display mt-6 text-4xl sm:text-5xl lg:text-6xl">
                Four disciplines
              </h2>
            </div>
            <ArrowLink href="/services/" className="text-brass-deep">
              All services
            </ArrowLink>
          </Reveal>

          <ul className="mt-16 grid gap-x-8 gap-y-16 sm:mt-24 sm:grid-cols-2 lg:gap-x-12">
            {services.map((service, i) => (
              <Reveal as="li" key={service.slug} delay={(i % 2) * 150} className={i % 2 === 1 ? "sm:mt-24" : ""}>
                <Link href={`/services/#${service.slug}`} className="group block">
                  <div className="overflow-hidden">
                    <Photo
                      image={service.image}
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="aspect-[4/5]"
                      imgClassName="transition-transform duration-[1.6s] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-6 flex items-baseline gap-5">
                    <span className="font-serif text-lg text-brass-deep">0{i + 1}</span>
                    <div>
                      <h3 className="display text-3xl">{service.title}</h3>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-umber">{service.summary}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Selected work */}
      <section aria-labelledby="work-title" className="bg-ink py-28 sm:py-40">
        <Container>
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>{home.selectedWork.eyebrow}</Eyebrow>
              <h2 id="work-title" className="display mt-6 text-4xl text-cream sm:text-5xl lg:text-6xl">
                {home.selectedWork.title}
              </h2>
            </div>
            <ArrowLink href={home.selectedWork.link.href} className="text-brass">
              {home.selectedWork.link.label}
            </ArrowLink>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:mt-24 md:grid-cols-12 lg:gap-12">
            {featured.map((project, i) => (
              <Reveal
                key={project.id}
                delay={i * 120}
                className={
                  i === 0 ? "md:col-span-7 md:row-span-2" : i === 1 ? "md:col-span-5" : "md:col-span-5 md:col-start-8"
                }
              >
                <figure>
                  <Photo
                    image={project.image}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className={i === 0 ? "aspect-[4/5]" : "aspect-[3/2]"}
                  />
                  <figcaption className="mt-5 flex items-baseline justify-between gap-6 border-t border-cream/15 pt-4">
                    <span className="display text-2xl text-cream">{project.title}</span>
                    <span className="shrink-0 text-xs tracking-[0.18em] text-stone uppercase">{project.category}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process teaser */}
      <section aria-labelledby="process-title" className="bg-parchment py-28 text-ink sm:py-40">
        <Container className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow tone="light">{home.process.eyebrow}</Eyebrow>
            <h2 id="process-title" className="display mt-6 text-4xl sm:text-5xl">
              {home.process.title}
            </h2>
            <ArrowLink href={home.process.link.href} className="mt-10 text-brass-deep">
              {home.process.link.label}
            </ArrowLink>
          </Reveal>
          <ol className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-8">
            {process.slice(0, 4).map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 100} className="border-t border-ink/20 pt-6">
                <span className="font-serif text-4xl text-brass-deep">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display mt-4 text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-umber">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Testimonial */}
      <section aria-label="Client testimonial" className="bg-walnut py-28 sm:py-40">
        <Container>
          <Reveal as="figure" className="mx-auto max-w-4xl text-center">
            <span aria-hidden="true" className="display block text-7xl leading-none text-brass">
              “
            </span>
            <blockquote className="display mt-4 text-3xl leading-[1.3] text-cream italic sm:text-4xl lg:text-[2.75rem]">
              {home.testimonial.quote}
            </blockquote>
            <figcaption className="eyebrow mt-10 text-stone">{home.testimonial.attribution}</figcaption>
          </Reveal>
        </Container>
      </section>

      {/* Call to action */}
      <section aria-labelledby="cta-title" className="relative overflow-hidden bg-ink">
        <Photo image={home.cta.image} className="absolute! inset-0" imgClassName="brightness-[0.55]" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" />
        <Container className="relative py-36 sm:py-52">
          <Reveal className="max-w-xl">
            <Eyebrow>Commissions</Eyebrow>
            <h2 id="cta-title" className="display mt-6 text-5xl text-cream sm:text-6xl">
              {home.cta.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone sm:text-lg">{home.cta.body}</p>
            <div className="mt-12">
              <ButtonLink href={home.cta.link.href}>{home.cta.link.label}</ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
