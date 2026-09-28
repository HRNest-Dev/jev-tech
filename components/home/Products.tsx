import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui";
import StaffDemFeature from "@/components/page/StaffDemFeature";

export default function Products() {
  return (
    <Section id="products" tone="surface" aria-labelledby="products-title">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="products-title"
            eyebrow="Products by JEV"
            title="We build and run our own software, too."
            description="Beyond building technology for clients, we build and operate our own products. It keeps us close to what it takes to run software for real users every day."
          />
          <ButtonLink href="/products" variant="outline" arrow className="self-start lg:self-auto">
            About our products
          </ButtonLink>
        </div>
        <div className="mt-14 sm:mt-16">
          <StaffDemFeature />
        </div>
      </Container>
    </Section>
  );
}
