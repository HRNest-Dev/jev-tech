import Image from "next/image";
import { staffdem } from "@/content/products";
import { staffdemScreens } from "@/content/staffdem";
import { ButtonLink } from "@/components/ui";

/** Dark feature card for StaffDem with a real product screenshot. */
export default function StaffDemFeature({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  const shot = staffdemScreens.hrDashboard;
  return (
    <article className="reveal relative grid overflow-hidden rounded-3xl bg-ink text-on-dark lg:grid-cols-12">
      <div className="relative z-10 flex flex-col p-8 sm:p-12 lg:col-span-5">
        <p className="font-mono text-caption uppercase text-brand-400">{staffdem.category}</p>
        <Heading className="mt-5 text-h1 font-semibold text-white">{staffdem.name}</Heading>
        <p className="mt-5 max-w-md text-lead text-on-dark-muted">{staffdem.summary}</p>

        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
          {staffdem.modules.map((m) => (
            <li key={m.title} className="flex items-center gap-2 text-on-dark">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-500" />
              {m.title}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3 lg:mt-auto lg:pt-10">
          <ButtonLink href="/products/staffdem" arrow>
            Explore {staffdem.name}
          </ButtonLink>
          {staffdem.url && (
            <ButtonLink href={staffdem.url} variant="outline-dark" target="_blank" rel="noopener noreferrer">
              Visit website
            </ButtonLink>
          )}
        </div>
      </div>

      <div className="relative px-6 sm:px-12 lg:col-span-7 lg:px-0 lg:pt-12">
        <div className="overflow-hidden rounded-t-xl border border-b-0 border-graphite-700 shadow-[0_-8px_48px_-12px_rgb(0_0_0/0.5)] lg:rounded-tr-none">
          <Image src={shot.src} alt={shot.alt} placeholder="blur" sizes="(min-width: 1024px) 55vw, 100vw" className="block h-auto w-full" />
        </div>
      </div>
    </article>
  );
}
