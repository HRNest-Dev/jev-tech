"use client";

import { usePathname } from "next/navigation";
import { site, startProjectHref } from "@/lib/site";
import { ButtonLink } from "@/components/ui";

// Hidden where the page itself is the call to action.
const HIDE_ON = [startProjectHref, "/contact"];

export default function FooterCta() {
  const pathname = usePathname();
  if (HIDE_ON.includes(pathname)) return null;

  return (
    <div className="flex flex-col gap-8 border-b border-line-dark py-20 sm:py-24 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl">
        <h2 className="text-h1 font-semibold text-balance text-white">
          Have an idea? <span className="text-on-dark-muted">Let&rsquo;s build it.</span>
        </h2>
        <p className="mt-5 max-w-lg text-lead text-on-dark-muted">
          Tell us what you&rsquo;re working on. We&rsquo;ll help you shape it into something that works.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href={startProjectHref} size="lg" arrow>
          Start a Project
        </ButtonLink>
        <ButtonLink href={`mailto:${site.email}`} variant="outline-dark" size="lg">
          {site.email}
        </ButtonLink>
      </div>
    </div>
  );
}
