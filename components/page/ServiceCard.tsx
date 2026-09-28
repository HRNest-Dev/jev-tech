import Link from "next/link";
import type { Service } from "@/content/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="reveal group flex h-full flex-col justify-between rounded-2xl border border-line bg-canvas p-6 transition-[border-color,box-shadow] duration-300 hover:border-line-strong hover:shadow-[0_12px_32px_-16px_rgb(11_15_14/0.18)] sm:p-7"
    >
      <div>
        <p className="font-mono text-caption uppercase text-muted">{service.group}</p>
        <h3 className="mt-4 text-h4 font-semibold">{service.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
      </div>
      <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-fg">
        Learn more
        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
