import Link from "next/link";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { ArrowLink, ButtonLink, Container, Eyebrow } from "@/components/ui";
import { about } from "@/content/about";
import { home } from "@/content/home";
import { logo } from "@/content/images";
import { clients, projects, sectors } from "@/content/portfolio";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  description: site.description,
  path: "/",
  image: home.hero.image,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.name,
  description: site.description,
  url: site.url,
  logo: new URL(logo.full, site.url).toString(),
  telephone: site.contact.people.map((p) => p.phoneHref.replace("tel:", "")),
  address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
  areaServed: "Egypt",
};

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative flex h-[100svh] min-h-[600px] items-end overflow-hidden bg-ink">
        <Photo image={home.hero.image} priority className="absolute! inset-0" imgClassName="animate-hero-zoom" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/35" />
        <Container className="relative pb-20 sm:pb-28">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo.mark}
            alt=""
            width={448}
            height={448}
            className="animate-fade-up h-16 w-16 sm:h-20 sm:w-20"
            style={{ animationDelay: "150ms" }}
          />
          <h1
            id="hero-title"
            className="animate-fade-up mt-8"
            style={{ animationDelay: "300ms" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.wordmark}
              alt={site.name}
              width={1088}
              height={264}
              className="h-auto w-[min(88vw,760px)]"
            />
          </h1>
          <div
            className="animate-fade-up mt-10 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between"
            style={{ animationDelay: "500ms" }}
          >
            <div className="max-w-xl">
              <p className="eyebrow text-brass">{site.descriptor}</p>
              <p className="mt-4 font-serif text-2xl leading-snug text-cream/90 italic sm:text-3xl">{home.hero.tagline}</p>
            </div>
            <a href="#about-oakland" className="group hidden items-center gap-4 text-cream/70 hover:text-cream sm:flex">
              <span className="eyebrow">Discover</span>
              <span aria-hidden="true" className="relative block h-14 w-px overflow-hidden bg-cream/20">
                <span className="animate-scroll-cue absolute inset-0 bg-cream" />
              </span>
            </a>
          </div>
        </Container>
      </section>

      {/* Statement + key figures */}
      <section id="about-oakland" aria-labelledby="about-title" className="scroll-mt-24 bg-ink py-28 sm:py-40">
        <Container className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <Eyebrow>
              <span id="about-title">{home.intro.eyebrow}</span>
            </Eyebrow>
          </Reveal>
          <Reveal delay={120} className="md:col-span-9">
            <p className="display text-3xl leading-[1.25] text-cream sm:text-4xl lg:text-5xl">{home.intro.statement}</p>
            <ArrowLink href={home.intro.link.href} className="mt-12 text-brass">
              {home.intro.link.label}
            </ArrowLink>
          </Reveal>
        </Container>
        <Container>
          <dl className="mt-20 grid gap-10 border-t border-cream/15 pt-12 sm:grid-cols-3 sm:mt-28">
            {about.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} className="flex flex-col-reverse gap-3">
                <dt className="max-w-[16rem] text-sm leading-relaxed text-stone">{s.label}</dt>
                <dd className="display text-6xl text-brass tabular-nums">{s.value}</dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* Sectors */}
      <section aria-labelledby="sectors-title" className="bg-cream py-28 text-ink sm:py-40">
        <Container>
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow tone="light">{home.sectors.eyebrow}</Eyebrow>
              <h2 id="sectors-title" className="display mt-6 text-4xl sm:text-5xl lg:text-6xl">
                {home.sectors.title}
              </h2>
            </div>
          </Reveal>

          <ul className="mt-16 grid gap-x-8 gap-y-16 sm:mt-24 md:grid-cols-3 lg:gap-x-12">
            {sectors.map((sector, i) => (
              <Reveal as="li" key={sector.name} delay={i * 140} className={i === 1 ? "md:mt-20" : ""}>
                <Link href={`/portfolio/#${sector.name.toLowerCase()}`} className="group block">
                  <div className="overflow-hidden">
                    <Photo
                      image={sector.cover}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="aspect-[4/5]"
                      imgClassName="transition-transform duration-[1.6s] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="display mt-6 text-3xl">{sector.name}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-umber">{sector.summary}</p>
                  <span className="link-line mt-5 text-brass-deep">
                    View projects
                    <span aria-hidden="true" className="arrow">
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Selected work — photos shown uncropped */}
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

          <div className="mt-16 grid items-start gap-x-8 gap-y-14 sm:mt-24 md:grid-cols-2 lg:gap-x-12">
            {featured.map((project, i) => (
              <Reveal key={project.id} delay={i === 0 ? 0 : (i - 1) * 140} className={i === 0 ? "md:col-span-2" : ""}>
                <figure>
                  <Photo
                    image={project.images[0]}
                    natural
                    sizes={i === 0 ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
                  />
                  <figcaption className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-cream/15 pt-4">
                    <span className="display text-2xl text-cream sm:text-3xl">{project.title}</span>
                    <span className="text-xs tracking-[0.18em] text-stone uppercase">
                      {project.sector}
                      {project.location && ` · ${project.location}`}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section aria-labelledby="services-title" className="bg-parchment py-28 text-ink sm:py-40">
        <Container>
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow tone="light">{home.services.eyebrow}</Eyebrow>
              <h2 id="services-title" className="display mt-6 text-4xl sm:text-5xl lg:text-6xl">
                {home.services.title}
              </h2>
            </div>
            <ArrowLink href={home.services.link.href} className="text-brass-deep">
              {home.services.link.label}
            </ArrowLink>
          </Reveal>
          <ul className="mt-16 grid gap-x-10 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal as="li" key={service.slug} delay={i * 100} className="border-t border-ink/20 pt-6">
                <Link href={`/services/#${service.slug}`} className="group block">
                  <h3 className="display text-3xl transition-colors group-hover:text-brass-deep">{service.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-umber">{service.summary}</p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Clients */}
      <section aria-labelledby="clients-title" className="bg-walnut py-24 sm:py-32">
        <Container>
          <Reveal className="text-center">
            <Eyebrow className="justify-center">{home.clients.eyebrow}</Eyebrow>
            <h2 id="clients-title" className="sr-only">
              {home.clients.title}
            </h2>
            <ul className="mx-auto mt-12 flex max-w-5xl flex-wrap items-baseline justify-center gap-x-10 gap-y-5 sm:gap-x-14">
              {clients.map((client) => (
                <li key={client} className="display text-2xl text-cream/85 sm:text-3xl">
                  {client}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Call to action */}
      <section aria-labelledby="cta-title" className="relative overflow-hidden bg-ink">
        <Photo image={home.cta.image} className="absolute! inset-0" imgClassName="brightness-[0.5]" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/65 to-ink/20" />
        <Container className="relative py-36 sm:py-52">
          <Reveal className="max-w-xl">
            <Eyebrow>Contact</Eyebrow>
            <h2 id="cta-title" className="display mt-6 text-5xl text-cream sm:text-6xl">
              {home.cta.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone sm:text-lg">{home.cta.body}</p>
            <ul className="mt-8 space-y-2 text-sm">
              {site.contact.people.map((p) => (
                <li key={p.phone} className="text-stone">
                  {p.name} ·{" "}
                  <a href={p.phoneHref} className="text-cream underline decoration-cream/30 underline-offset-4 hover:decoration-brass">
                    {p.phone}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <ButtonLink href={home.cta.link.href}>{home.cta.link.label}</ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
