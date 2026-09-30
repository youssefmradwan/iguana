import Link from "next/link";
import { logo } from "@/content/images";
import { site } from "@/content/site";
import { Container } from "./ui";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-cream/10 bg-charcoal text-stone">
      <Container className="grid gap-14 py-20 sm:py-24 md:grid-cols-12">
        <div className="md:col-span-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.mark} alt="" width={448} height={448} className="h-16 w-16" loading="lazy" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.wordmark} alt={site.name} width={1088} height={264} className="mt-6 h-8 w-auto" loading="lazy" />
          <p className="mt-6 max-w-sm font-serif text-xl leading-snug text-stone italic">{site.tagline}</p>
        </div>

        <div className="md:col-span-4">
          <h2 className="eyebrow text-brass">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm">
            {site.contact.people.map((p) => (
              <li key={p.phone}>
                <span className="block">{p.name}</span>
                <a href={p.phoneHref} className="text-cream transition-colors hover:text-brass">
                  {p.phone}
                </a>
              </li>
            ))}
            {site.contact.email && (
              <li>
                <a href={`mailto:${site.contact.email}`} className="break-all transition-colors hover:text-cream">
                  {site.contact.email}
                </a>
              </li>
            )}
            <li>
              <a href={site.contact.mapUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cream">
                {site.contact.location}
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
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
          © {year} {site.name}. All rights reserved.
        </p>
        <p>{site.descriptor}</p>
      </Container>
    </footer>
  );
}
