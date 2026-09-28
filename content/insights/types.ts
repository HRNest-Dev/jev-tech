import type { ImageKey } from "../images";

export const insightCategories = ["Business & Technology", "Product", "Design", "Engineering", "Company"] as const;
export type InsightCategory = (typeof insightCategories)[number];

/** URL slug for a category page, e.g. "Business & Technology" → "business-technology". */
export function categorySlug(category: InsightCategory) {
  return category
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const categoryDescriptions: Record<InsightCategory, string> = {
  "Business & Technology":
    "When to invest in software, what to automate and how technology decisions affect the business.",
  Product: "Planning, scoping and shaping digital products so they solve the right problem.",
  Design: "User experience, interface design and making complex software easy to use.",
  Engineering: "Architecture, integration and operations — the foundations of reliable software.",
  Company: "News and perspectives from the JEV team.",
};

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  tags: string[];
  author: string;
  /** ISO date */
  date: string;
  cover: ImageKey;
  status: "draft" | "published";
  seo?: { title?: string; description?: string };
  body: Block[];
};

/** Card-sized data without the article body. */
export type InsightSummary = Omit<Insight, "body"> & { minutes: number };
