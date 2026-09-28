import type { Metadata } from "next";
import { publishedInsights, summarize } from "@/content/insights";
import { Container, Section } from "@/components/ui";
import PageHero from "@/components/page/PageHero";
import InsightsBrowser from "@/components/page/InsightsBrowser";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical thinking on software, product design and technology for businesses — from the team at JEV Technologies.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Insights", href: "/insights" }]}
        eyebrow="Insights"
        title="Thinking on software, product and business."
        description="Practical guidance for leaders deciding what to build, how to build it and how to get value from technology."
      />
      <Section className="pt-0!" aria-label="Articles">
        <Container>
          <InsightsBrowser insights={publishedInsights.map(summarize)} />
        </Container>
      </Section>
    </>
  );
}
