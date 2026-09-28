import Link from "next/link";
import { capabilities } from "@/content/capabilities";
import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui";
import Photo from "@/components/page/Photo";

export default function Capabilities() {
  return (
    <Section id="services" aria-labelledby="services-title">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-title"
            eyebrow="What we do"
            title="One partner from first idea to running product."
            description="We solve business problems through digital product design and software engineering — and we stay involved long after launch."
          />
          <ButtonLink href="/services" variant="outline" arrow className="self-start lg:self-auto">
            All services
          </ButtonLink>
        </div>

        <div className="mt-14 border-t border-line sm:mt-16">
          {capabilities.map((cap, i) => (
            <article
              key={cap.title}
              className="reveal grid gap-6 border-b border-line py-10 sm:py-12 lg:grid-cols-12 lg:items-center lg:gap-10"
            >
              <span className="font-mono text-sm text-muted lg:col-span-1 lg:self-start lg:pt-3">{String(i + 1).padStart(2, "0")}</span>
              <div className="lg:col-span-6">
                <h3 className="text-h2 font-semibold">{cap.title}</h3>
                <p className="mt-4 max-w-lg text-lead text-muted">{cap.summary}</p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {cap.items.map((item) => (
                    <li key={item.label}>
                      {item.slug ? (
                        <Link
                          href={`/services/${item.slug}`}
                          className="inline-block rounded-full border border-line px-3.5 py-1.5 text-sm text-fg transition-colors hover:border-ink hover:bg-ink hover:text-white"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="inline-block rounded-full border border-line px-3.5 py-1.5 text-sm">{item.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <Photo
                image={cap.image}
                alt=""
                aspect="aspect-[16/10]"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="rounded-2xl lg:col-span-5"
              />
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
