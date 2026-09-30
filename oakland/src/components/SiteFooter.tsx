import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./ui";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-cream/10 bg-ink text-stone">
      <Container className="grid gap-14 py-20 sm:py-24 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="wordmark text-3xl text-cream">{site.name}</p>
          <p className="mt-6 max-w-sm font-serif text-xl leading-snug text-stone italic">{site.tagline}</p>
        </div>

        <div className="md:col-span-3">
          <h2 className="eyebrow text-brass">Studio</h2>
          <address className="mt-5 space-y-1 text-sm leading-relaxed not-italic">
            {site.contact.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-4 text-sm leading-relaxed">{site.contact.hours}</p>
        </div>

        <div className="md:col-span-2">
          <h2 className="eyebrow text-brass">Contact</h2>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.contact.email}`} className="break-all transition-colors hover:text-cream">
                {site.contact.email}
              </a>
            </li>
            <li>
              <a href={site.contact.phoneHref} className="transition-colors hover:text-cream">
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a href={site.contact.instagram} className="transition-colors hover:text-cream" rel="noopener noreferrer">
                {site.contact.instagramHandle}
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer" className="md:col-span-2">
          <h2 className="eyebrow text-brass">Explore</h2>
          <ul className="mt-5 space-y-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-cream/10 py-8 text-xs tracking-wide sm:flex-row sm:justify-between">
        <p>
          © {year} {site.name} {site.descriptor}. All rights reserved.
        </p>
        <p>Designed and made by hand.</p>
      </Container>
    </footer>
  );
}
