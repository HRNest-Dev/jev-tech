import type { ReactNode } from "react";
import type { ImageKey } from "@/content/images";
import { Container, Eyebrow } from "@/components/ui";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import Photo from "./Photo";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  breadcrumbs?: Crumb[];
  image?: ImageKey;
  /** Custom visual shown below the text instead of a photo. */
  visual?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, actions, breadcrumbs, image, visual }: PageHeroProps) {
  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-20">
      <Container>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h1 className="mt-5 text-h1 font-semibold text-balance">{title}</h1>
          </div>
          {(description || actions) && (
            <div className="animate-rise [animation-delay:120ms] lg:col-span-5">
              {description && <p className="text-lead text-muted text-pretty">{description}</p>}
              {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
            </div>
          )}
        </div>
        {visual && <div className="mt-12 animate-rise [animation-delay:200ms] sm:mt-16">{visual}</div>}
        {image && !visual && (
          <Photo
            image={image}
            priority
            aspect="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]"
            className="mt-12 animate-rise [animation-delay:200ms] sm:mt-16"
          />
        )}
      </Container>
    </section>
  );
}
