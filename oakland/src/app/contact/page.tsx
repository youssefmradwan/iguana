import CommissionForm from "@/components/CommissionForm";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { Container } from "@/components/ui";
import { contactPage } from "@/content/contact";
import { photos } from "@/content/images";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

const contactImage = photos["doors-01"];

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Oakland in Cairo about bespoke woodwork or mass production. Call Arch. Mohamed Radwan or Eng. Youssef Radwan, or send an enquiry.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow={contactPage.eyebrow} title={contactPage.title} lede={contactPage.lede} />
      <section aria-label="Project enquiry" className="bg-ink pb-28 sm:pb-40">
        <Container className="grid gap-20 border-t border-cream/15 pt-16 lg:grid-cols-12 lg:gap-12 lg:pt-24">
          <div className="lg:col-span-7">
            <CommissionForm />
          </div>

          <aside aria-labelledby="contact-details" className="lg:col-span-4 lg:col-start-9">
            <div className="space-y-12 lg:sticky lg:top-32">
              <h2 id="contact-details" className="display text-3xl text-cream">
                Call us
              </h2>
              <ul className="divide-y divide-cream/15 border-y border-cream/15">
                {site.contact.people.map((p) => (
                  <li key={p.phone} className="py-5">
                    <span className="block text-sm text-stone">{p.name}</span>
                    <a href={p.phoneHref} className="mt-1 block font-serif text-3xl text-cream tabular-nums hover:text-brass">
                      {p.phone}
                    </a>
                  </li>
                ))}
              </ul>
              <dl className="space-y-8 text-sm">
                {site.contact.email && (
                  <div>
                    <dt className="eyebrow text-brass">Email</dt>
                    <dd className="mt-3">
                      <a href={`mailto:${site.contact.email}`} className="break-all text-cream underline decoration-cream/30 underline-offset-4 hover:decoration-brass">
                        {site.contact.email}
                      </a>
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="eyebrow text-brass">Based in</dt>
                  <dd className="mt-3 text-stone">{site.contact.location}</dd>
                </div>
              </dl>
              <Photo image={contactImage} natural sizes="(min-width: 1024px) 30vw, 100vw" />
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
