import PageHero from "@/components/PageHero";
import PortfolioGallery from "@/components/PortfolioGallery";
import { ButtonLink, Container } from "@/components/ui";
import { portfolioIntro, projects, sectors } from "@/content/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Selected Oakland projects: Luxoft, Dorra, Excel Systems and Qorrect head offices, National Bank of Egypt, private residences and villas, Holiday Inn Cairo Maadi and Dusit Thani LakeView.",
  path: "/portfolio/",
  image: projects[0].images[0],
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero eyebrow={portfolioIntro.eyebrow} title={portfolioIntro.title} lede={portfolioIntro.lede} />
      <section aria-label="Projects" className="bg-ink pb-28 sm:pb-40">
        <Container>
          <PortfolioGallery projects={projects} sectors={sectors.map((s) => s.name)} />
          <div className="mt-16 flex flex-col items-start gap-8 border-t border-cream/15 pt-16 sm:flex-row sm:items-center sm:justify-between">
            <p className="display max-w-xl text-3xl text-cream sm:text-4xl">Planning a project?</p>
            <ButtonLink href="/contact/">Start a project</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
