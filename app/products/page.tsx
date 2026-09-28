import type { Metadata } from "next";
import { productLessons } from "@/content/products";
import { Container, Section, SectionHeading } from "@/components/ui";
import PageHero from "@/components/page/PageHero";
import StaffDemFeature from "@/components/page/StaffDemFeature";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Beyond client work, JEV Technologies builds and operates its own software products, including StaffDem — an HR and payroll platform for growing organizations.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Products", href: "/products" }]}
        eyebrow="Products by JEV"
        title="We build and operate our own products."
        description="Running software for real organizations every day keeps our engineering honest. Everything we learn goes back into the products we build for clients."
      />

      <Section className="pt-0!" aria-label="Our products">
        <Container>
          <StaffDemFeature headingLevel="h2" />
        </Container>
      </Section>

      <Section tone="surface" aria-labelledby="lessons-title">
        <Container>
          <SectionHeading
            id="lessons-title"
            eyebrow="Why it matters to clients"
            title="What running our own product teaches us."
            description="Building software is one skill. Operating it for paying customers is another. We do both."
          />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {productLessons.map((l, i) => (
              <li key={l.title} className="bg-canvas p-7 sm:p-8">
                <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-h4 font-semibold">{l.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{l.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
