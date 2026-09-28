import { testimonials } from "@/content/home";
import { Container, Section, SectionHeading } from "@/components/ui";

/** Renders only when real, approved quotes exist in content/home.ts. */
export default function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <Section tone="dark" aria-labelledby="testimonials-title">
      <Container>
        <SectionHeading id="testimonials-title" tone="dark" eyebrow="Clients" title="In their words." />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-3xl bg-graphite-900 p-8 sm:p-10">
              <blockquote className="text-h4 font-medium text-white">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-8 text-sm text-on-dark-muted lg:mt-auto lg:pt-8">
                <span className="font-medium text-white">{t.name}</span> · {t.role}, {t.organization}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
