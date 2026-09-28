import { publishedInsights, summarize } from "@/content/insights";
import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui";
import ArticleCard from "@/components/page/ArticleCard";

export default function LatestInsights() {
  const latest = publishedInsights.slice(0, 3).map(summarize);
  if (latest.length === 0) return null;

  return (
    <Section tone="surface" aria-labelledby="insights-title">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="insights-title"
            eyebrow="Insights"
            title="Practical thinking for better technology decisions."
          />
          <ButtonLink href="/insights" variant="outline" arrow className="self-start lg:self-auto">
            All insights
          </ButtonLink>
        </div>
        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((i) => (
            <ArticleCard key={i.slug} insight={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
