import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[80dvh] items-center pt-28 pb-20">
      <Container>
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-h1 font-semibold text-balance">We couldn&rsquo;t find that page.</h1>
        <p className="mt-5 max-w-xl text-lead text-muted">
          It may have moved as part of our new website. Try one of these instead.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="secondary" arrow>
            Home
          </ButtonLink>
          <ButtonLink href="/services" variant="outline">
            Services
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Contact
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
