import { categorySlug, insightCategories, type Insight, type InsightSummary } from "./types";
import { whenToAutomate } from "./articles/when-to-automate-an-internal-process";
import { saasThatScales } from "./articles/building-a-saas-product-that-scales";
import { employeeSoftware } from "./articles/designing-software-employees-want-to-use";
import { hrPayrollSoftware } from "./articles/what-hr-and-payroll-software-must-get-right";
import { beforeMobileApp } from "./articles/before-you-build-a-mobile-app";
import { apisExplained } from "./articles/apis-explained-for-business";
import { whenCustomSoftware } from "./articles/when-does-your-business-need-custom-software";
import { planningProject } from "./articles/how-to-plan-a-custom-software-project";
import { corporateWebsite } from "./articles/what-makes-a-corporate-website-effective";

export * from "./types";

/**
 * To publish an article: add a file in ./articles, import it here and set
 * status to "published". Articles on the same date keep this order.
 */
const insights: Insight[] = [
  whenToAutomate,
  saasThatScales,
  employeeSoftware,
  hrPayrollSoftware,
  beforeMobileApp,
  apisExplained,
  whenCustomSoftware,
  planningProject,
  corporateWebsite,
];

export const publishedInsights = insights
  .filter((i) => i.status === "published")
  .sort((a, b) => b.date.localeCompare(a.date));

/** Categories that have at least one published article. */
export function activeCategories() {
  return insightCategories.filter((c) => publishedInsights.some((i) => i.category === c));
}

export function getCategoryBySlug(slug: string) {
  return activeCategories().find((c) => categorySlug(c) === slug);
}

export function getInsight(slug: string) {
  return publishedInsights.find((i) => i.slug === slug);
}

/** Same-category articles first, then the most recent others. */
export function relatedInsights(insight: Insight, count = 3) {
  const others = publishedInsights.filter((i) => i.slug !== insight.slug);
  const same = others.filter((i) => i.category === insight.category);
  const rest = others.filter((i) => i.category !== insight.category);
  return [...same, ...rest].slice(0, count);
}

/** Card-sized data without the article body. */
export function summarize(insight: Insight): InsightSummary {
  const { body, ...rest } = insight;
  void body;
  return { ...rest, minutes: readingTime(insight) };
}

export function readingTime(insight: Insight) {
  const words = insight.body
    .map((b) => ("text" in b ? b.text : b.items.join(" ")))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
