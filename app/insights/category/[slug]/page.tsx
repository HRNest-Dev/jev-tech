import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  activeCategories,
  categoryDescriptions,
  categorySlug,
  getCategoryBySlug,
  publishedInsights,
  summarize,
} from "@/content/insights";
import { cn } from "@/lib/cn";
import { Container, Section } from "@/components/ui";
import PageHero from "@/components/page/PageHero";
import ArticleCard from "@/components/page/ArticleCard";
import SubscribeCard from "@/components/forms/SubscribeCard";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return activeCategories().map((c) => ({ slug: categorySlug(c) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryBySlug((await params).slug);
  if (!category) return {};
  const path = `/insights/category/${categorySlug(category)}`;
  return {
    title: `${category} Insights`,
    description: categoryDescriptions[category],
    alternates: { canonical: path, types: { "application/rss+xml": "/insights/rss.xml" } },
  };
}

export default async function InsightCategoryPage({ params }: Props) {
  const category = getCategoryBySlug((await params).slug);
  if (!category) notFound();

  const articles = publishedInsights.filter((i) => i.category === category).map(summarize);
  const href = `/insights/category/${categorySlug(category)}`;

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Insights", href: "/insights" },
          { label: category, href },
        ]}
        eyebrow="Insights"
        title={category}
        description={categoryDescriptions[category]}
      />

      <Section className="pt-0!" aria-label={`${category} articles`}>
        <Container>
          <nav aria-label="Topics" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            <Link
              href="/insights"
              className="shrink-0 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-fg hover:text-fg"
            >
              All topics
            </Link>
            {activeCategories().map((c) => {
              const current = c === category;
              return (
                <Link
                  key={c}
                  href={`/insights/category/${categorySlug(c)}`}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    current ? "border-ink bg-ink text-white" : "border-line-strong text-muted hover:border-fg hover:text-fg",
                  )}
                >
                  {c}
                </Link>
              );
            })}
          </nav>

          <p className="mt-10 text-sm text-muted">
            {articles.length} {articles.length === 1 ? "article" : "articles"}
          </p>
          <div className="mt-6 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((i) => (
              <ArticleCard key={i.slug} insight={i} headingLevel="h2" />
            ))}
          </div>

          <SubscribeCard className="mt-20" />
        </Container>
      </Section>
    </>
  );
}
