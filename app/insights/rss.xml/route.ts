import { publishedInsights } from "@/content/insights";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const items = publishedInsights
    .map((i) => {
      const url = `${site.url}/insights/${i.slug}`;
      return `    <item>
      <title>${escape(i.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escape(i.excerpt)}</description>
      <category>${escape(i.category)}</category>
      <pubDate>${new Date(`${i.date}T09:00:00Z`).toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(site.name)} — Insights</title>
    <link>${site.url}/insights</link>
    <description>Practical thinking on software, product design and technology for businesses.</description>
    <language>en</language>
    <atom:link href="${site.url}/insights/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
