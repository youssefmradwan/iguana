import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { faqs, process, processIntro, services, servicesIntro } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services & Process",
  description:
    "Bespoke furniture, kitchens, fitted joinery and statement pieces — and how a commission unfolds, from first conversation to installation and lifelong aftercare.",
  path: "/services/",
  image: services[1].image,
});

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow={servicesIntro.eyebrow} title={servicesIntro.title} lede={servicesIntro.lede} />

      {/* Services */}
      <section aria-label="Services" className="bg-ink pb-28 sm:pb-40">
        <Container className="space-y-28 sm:space-y-40">
          {services.map((service, i) => (
            <article
              key={service.slug}
              id={service.slug}
              aria-labelledby={`${service.slug}-title`}
              className="grid scroll-mt-28 items-center gap-10 md:grid-cols-12 md:gap-12"
            >
              <Reveal className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2 md:col-start-6" : ""}`}>
                <Photo image={service.image} sizes="(min-width: 768px) 58vw, 100vw" className="aspect-[4/3] md:aspect-[5/4]" />
              </Reveal>
              <Reveal
                delay={150}
                className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1 md:col-start-1 md:pr-6" : "md:pl-6"}`}
              >
                <span className="font-serif text-lg text-brass">{String(i + 1).padStart(2, "0")}</span>
                <h2 id={`${service.slug}-title`} className="display mt-3 text-4xl text-cream sm:text-5xl">
                  {service.title}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-stone">{service.body}</p>
                <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 border-t border-cream/15 pt-6 text-sm text-cream/85 sm:grid-cols-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-brass" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-xs tracking-[0.2em] text-stone uppercase">
                  Typical lead time <span className="ml-2 text-cream">{service.leadTime}</span>
                </p>
              </Reveal>
            </article>
          ))}
        </Container>
      </section>

      {/* Process */}
      <section id="process" aria-labelledby="process-title" className="scroll-mt-20 bg-cream py-28 text-ink sm:py-40">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-32">
              <Eyebrow tone="light">{processIntro.eyebrow}</Eyebrow>
              <h2 id="process-title" className="display mt-6 text-4xl sm:text-5xl lg:text-6xl">
                {processIntro.title}
              </h2>
              <p className="mt-8 max-w-sm text-base leading-relaxed text-umber">{processIntro.lede}</p>
            </Reveal>
          </div>
          <ol className="lg:col-span-7 lg:col-start-6">
            {process.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                className="relative grid grid-cols-[3.5rem_1fr] gap-x-4 pb-14 last:pb-0 sm:grid-cols-[5rem_1fr]"
              >
                {/* Timeline line */}
                {i < process.length - 1 && (
                  <span aria-hidden="true" className="absolute top-14 bottom-2 left-[1.1rem] w-px bg-ink/15 sm:left-[1.35rem]" />
                )}
                <span className="font-serif text-3xl leading-none text-brass-deep sm:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="display text-3xl">{step.title}</h3>
                    <span className="text-xs tracking-[0.2em] text-umber uppercase">{step.duration}</span>
                  </div>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-umber">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="bg-ink py-28 sm:py-40">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Questions</Eyebrow>
            <h2 id="faq-title" className="display mt-6 text-4xl text-cream sm:text-5xl">
              Often asked
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7 lg:col-start-6">
            <div className="divide-y divide-cream/15 border-y border-cream/15">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-serif text-xl text-cream sm:text-2xl [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span
                      aria-hidden="true"
                      className="text-2xl text-brass transition-transform duration-500 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-6 text-base leading-relaxed text-stone">{faq.a}</p>
                </details>
              ))}
            </div>
            <div className="mt-14">
              <ButtonLink href="/contact/">Begin a commission</ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
