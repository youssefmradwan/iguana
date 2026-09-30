import CommissionForm from "@/components/CommissionForm";
import PageHero from "@/components/PageHero";
import { Container } from "@/components/ui";
import { contactPage } from "@/content/contact";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Commission a Piece",
  description:
    "Begin a bespoke commission with Oakland. Tell us about your space and project, and we will reply personally within two working days.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow={contactPage.eyebrow} title={contactPage.title} lede={contactPage.lede} />
      <section aria-label="Commission request" className="bg-ink pb-28 sm:pb-40">
        <Container className="grid gap-20 border-t border-cream/15 pt-16 lg:grid-cols-12 lg:gap-12 lg:pt-24">
          <div className="lg:col-span-7">
            <CommissionForm />
          </div>

          <aside aria-labelledby="studio-details" className="lg:col-span-4 lg:col-start-9">
            <div className="space-y-12 lg:sticky lg:top-32">
              <h2 id="studio-details" className="display text-3xl text-cream">
                The studio
              </h2>
              <dl className="space-y-8 text-sm">
                <div>
                  <dt className="eyebrow text-brass">Visit</dt>
                  <dd className="mt-3 leading-relaxed text-stone">
                    <address className="not-italic">
                      {site.contact.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                    <span className="mt-2 block">{site.contact.hours}</span>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-brass">Write</dt>
                  <dd className="mt-3">
                    <a href={`mailto:${site.contact.email}`} className="break-all text-cream underline decoration-cream/30 underline-offset-4 hover:decoration-brass">
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-brass">Call</dt>
                  <dd className="mt-3">
                    <a href={site.contact.phoneHref} className="text-cream underline decoration-cream/30 underline-offset-4 hover:decoration-brass">
                      {site.contact.phone}
                    </a>
                  </dd>
                </div>
              </dl>
              {/* MAP: drop an embedded map or a photograph of the workshop here. */}
              <div className="wood-placeholder flex aspect-[4/3] items-end p-6" role="img" aria-label="Placeholder for a map or workshop photograph">
                <span aria-hidden="true" className="eyebrow text-cream/70">
                  Workshop map
                </span>
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
