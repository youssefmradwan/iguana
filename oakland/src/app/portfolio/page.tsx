import PageHero from "@/components/PageHero";
import PortfolioGallery from "@/components/PortfolioGallery";
import { ButtonLink, Container } from "@/components/ui";
import { categories, portfolioIntro, projects } from "@/content/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Selected commissions: bespoke dining tables, solid-timber kitchens, libraries, fitted joinery and one-off statement pieces.",
  path: "/portfolio/",
  image: projects[0].image,
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero eyebrow={portfolioIntro.eyebrow} title={portfolioIntro.title} lede={portfolioIntro.lede} />
      <section aria-label="Projects" className="bg-ink pb-28 sm:pb-40">
        <Container>
          <PortfolioGallery projects={projects} categories={categories} />
          <div className="mt-16 flex flex-col items-start gap-8 border-t border-cream/15 pt-16 sm:flex-row sm:items-center sm:justify-between">
            <p className="display max-w-xl text-3xl text-cream sm:text-4xl">Have a space in mind?</p>
            <ButtonLink href="/contact/">Begin a commission</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
