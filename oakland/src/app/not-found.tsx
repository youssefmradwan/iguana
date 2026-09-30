import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-ink pt-32 pb-20">
      <Container>
        <Eyebrow>404</Eyebrow>
        <h1 className="display mt-6 max-w-2xl text-5xl text-cream sm:text-6xl">This page seems to have been planed away.</h1>
        <p className="mt-6 max-w-lg text-stone">The page you were looking for doesn’t exist, or has moved.</p>
        <div className="mt-12">
          <ButtonLink href="/">Return home</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
