import { Container, Section, SectionHeading } from "@/components/ui";
import JsonLd from "./JsonLd";

type FaqItem = { question: string; answer: string };

export default function Faq({ items, title = "Common questions" }: { items: FaqItem[]; title?: string }) {
  if (items.length === 0) return null;
  return (
    <Section aria-labelledby="faq-title">
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading id="faq-title" eyebrow="FAQ" title={title} />
        </div>
        <div className="divide-y divide-line border-y border-line lg:col-span-8">
          {items.map((item) => (
            <details key={item.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-h4 font-medium [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-line-strong text-muted transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((i) => ({
            "@type": "Question",
            name: i.question,
            acceptedAnswer: { "@type": "Answer", text: i.answer },
          })),
        }}
      />
    </Section>
  );
}
