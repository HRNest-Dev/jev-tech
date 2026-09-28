import { principles } from "@/content/company";
import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui";
import Photo from "@/components/page/Photo";

export default function Company() {
  return (
    <Section id="company" aria-labelledby="company-title">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Photo image="company-story" aspect="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <div className="lg:py-8">
          <SectionHeading
            id="company-title"
            eyebrow="Why JEV"
            title="Technology should solve real problems."
            description="Too many businesses end up with software they have to work around. We design and engineer technology around your processes, people and goals — and stay accountable for it."
          />
          <ol className="mt-12 divide-y divide-line border-y border-line">
            {principles.map((p, i) => (
              <li key={p.title} className="grid grid-cols-[2.5rem_1fr] gap-2 py-6">
                <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-h4 font-semibold">{p.title}</h3>
                  <p className="mt-2 text-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <ButtonLink href="/company" variant="outline" arrow className="mt-10">
            More about us
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
