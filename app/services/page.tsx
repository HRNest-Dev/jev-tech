import type { Metadata } from "next";
import Link from "next/link";
import { serviceGroups, servicesInGroup } from "@/content/services";
import { startProjectHref } from "@/lib/site";
import { ButtonLink, Container, Section } from "@/components/ui";
import PageHero from "@/components/page/PageHero";
import Process from "@/components/home/Process";
import EngagementModels from "@/components/home/EngagementModels";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Corporate websites, e-commerce, custom software, web and mobile applications, product design, integration, cloud and technology consulting.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }]}
        eyebrow="Services"
        title="Everything it takes to design, build and run digital products."
        description="One team across strategy, design, engineering and support — so nothing gets lost between handovers."
        actions={
          <ButtonLink href={startProjectHref} size="lg" arrow>
            Start a Project
          </ButtonLink>
        }
        image="services-hero"
      />

      <Section className="pt-0!">
        <Container className="space-y-16 sm:space-y-20">
          {serviceGroups.map((group) => (
            <div key={group.name} className="grid gap-6 border-t border-line pt-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <h2 className="text-h2 font-semibold">{group.name}</h2>
                <p className="mt-3 text-muted">{group.description}</p>
              </div>
              <ul className="divide-y divide-line lg:col-span-8">
                {servicesInGroup(group.name).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group -mx-4 flex items-center justify-between gap-6 rounded-2xl px-4 py-6 transition-colors hover:bg-surface"
                    >
                      <div>
                        <h3 className="text-h3 font-semibold">{s.name}</h3>
                        <p className="mt-2 max-w-xl text-muted">{s.summary}</p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line-strong transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-white"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </Section>

      <EngagementModels />
      <Process />
    </>
  );
}
