import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInsight, publishedInsights, readingTime, relatedInsights, summarize, type Block } from "@/content/insights";
import { images } from "@/content/images";
import { site, startProjectHref } from "@/lib/site";
import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui";
import Breadcrumbs from "@/components/page/Breadcrumbs";
import Photo from "@/components/page/Photo";
import JsonLd from "@/components/page/JsonLd";
import ArticleCard, { formatDate } from "@/components/page/ArticleCard";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedInsights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const insight = getInsight((await params).slug);
  if (!insight) return {};
  const path = `/insights/${insight.slug}`;
  const description = insight.seo?.description ?? insight.excerpt;
  return {
    title: insight.seo?.title ?? insight.title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: insight.title,
      description,
      url: path,
      publishedTime: insight.date,
    },
  };
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} id={slugify(block.text)} className="mt-14 scroll-mt-28 text-h3 font-semibold text-fg first:mt-0">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p key={i} className="mt-6">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mt-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-brand-500" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mt-6 space-y-3">
          {block.items.map((item, n) => (
            <li key={item} className="flex gap-4">
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-line-strong font-mono text-xs text-fg">
                {n + 1}
              </span>
              <span className="pt-0.5">{item}</span>
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote key={i} className="my-12 border-l-2 border-brand-500 pl-6 text-h3 font-medium text-balance text-fg">
          {block.text}
        </blockquote>
      );
  }
}

export default async function InsightPage({ params }: Props) {
  const insight = getInsight((await params).slug);
  if (!insight) notFound();

  const headings = insight.body.filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2");
  const related = relatedInsights(insight).map(summarize);

  return (
    <>
      <article>
        <header className="pt-28 pb-12 sm:pt-36">
          <Container>
            <Breadcrumbs
              items={[
                { label: "Insights", href: "/insights" },
                { label: insight.title, href: `/insights/${insight.slug}` },
              ]}
            />
            <div className="mt-10 max-w-4xl lg:mt-14">
              <p className="flex flex-wrap items-center gap-x-2 text-sm text-muted">
                <span className="font-medium text-brand-700">{insight.category}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={insight.date}>{formatDate(insight.date)}</time>
                <span aria-hidden="true">·</span>
                <span>{readingTime(insight)} min read</span>
              </p>
              <h1 className="mt-5 text-h1 font-semibold text-balance">{insight.title}</h1>
              <p className="mt-6 max-w-3xl text-lead text-muted">{insight.excerpt}</p>
              <p className="mt-6 text-sm">
                By <span className="font-medium">{insight.author}</span>
              </p>
            </div>
            <Photo image={insight.cover} priority aspect="aspect-[3/2] sm:aspect-[2/1]" className="mt-12" />
          </Container>
        </header>

        <Container className="grid gap-12 pb-20 sm:pb-28 lg:grid-cols-12">
          {headings.length > 2 && (
            <aside className="hidden lg:col-span-3 lg:block">
              <nav aria-label="On this page" className="sticky top-28">
                <p className="font-mono text-caption uppercase text-muted">On this page</p>
                <ul className="mt-4 space-y-2.5 border-l border-line text-sm">
                  {headings.map((h) => (
                    <li key={h.text}>
                      <a href={`#${slugify(h.text)}`} className="-ml-px block border-l border-transparent pl-4 text-muted hover:border-fg hover:text-fg">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          )}
          <div className="text-[1.0625rem] leading-[1.75] text-graphite-700 sm:text-lg lg:col-span-7 lg:col-start-4">
            {insight.body.map(renderBlock)}

            <div className="mt-16 flex flex-wrap gap-2 border-t border-line pt-8">
              {insight.tags.map((t) => (
                <span key={t} className="rounded-full bg-surface px-3 py-1 text-sm text-muted">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-surface p-8">
              <p className="text-h4 font-semibold text-fg">Working on something like this?</p>
              <p className="mt-2 text-base text-muted">
                We help organizations plan, design and build software that fits how they work.
              </p>
              <ButtonLink href={startProjectHref} variant="secondary" arrow className="mt-6">
                Start a Project
              </ButtonLink>
            </div>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <Section tone="surface" aria-labelledby="related-title">
          <Container>
            <SectionHeading id="related-title" eyebrow="Keep reading" title="More insights." />
            <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((i) => (
                <ArticleCard key={i.slug} insight={i} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: insight.title,
          description: insight.excerpt,
          datePublished: insight.date,
          image: new URL(images[insight.cover].src.src, site.url).toString(),
          author: { "@type": "Organization", name: insight.author },
          publisher: { "@type": "Organization", name: site.name, url: site.url },
          mainEntityOfPage: `${site.url}/insights/${insight.slug}`,
        }}
      />
    </>
  );
}
