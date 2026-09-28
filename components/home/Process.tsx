import { processSteps } from "@/content/process";
import { Container, Section, SectionHeading } from "@/components/ui";

export default function Process() {
  return (
    <Section id="process" tone="dark" aria-labelledby="process-title">
      <Container>
        <SectionHeading
          id="process-title"
          tone="dark"
          eyebrow="How we work"
          title="From idea to execution."
          description="Every engagement follows the same structured path, so you always know where your product is, what comes next and why."
        />

        <ol className="mt-16 grid gap-x-8 gap-y-14 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <li key={step.title} className="reveal relative pt-8">
              {/* rail + node, echoing the connected nodes in the logo */}
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-line-dark" />
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 size-3 -translate-y-1/2 rounded-full border-2 border-brand-500 bg-ink"
              />
              <p className="font-mono text-sm text-brand-400">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-h3 font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-on-dark-muted">{step.summary}</p>
              <p className="mt-5 text-sm leading-relaxed text-on-dark-muted/80">{step.items.join(" · ")}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
