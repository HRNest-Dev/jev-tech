import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { Container, Logo } from "@/components/ui";
import FooterCta from "./FooterCta";

export default function Footer() {
  return (
    <footer className="bg-ink text-on-dark">
      <Container>
        <FooterCta />

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="dark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-on-dark-muted">
              A digital product and software engineering company. We design and build technology around how businesses
              actually work.
            </p>
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={`${group.title} links`} className="lg:col-span-2 lg:col-start-auto">
              <h2 className="text-sm font-medium text-white">{group.title}</h2>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-on-dark-muted transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-3 lg:col-start-10">
            <h2 className="text-sm font-medium text-white">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm text-on-dark-muted">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
              {site.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="transition-colors hover:text-white">
                    {phone}
                  </a>
                </li>
              ))}
              <li>{site.location}</li>
            </ul>
            {site.socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-on-dark-muted hover:text-white">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line-dark py-8 text-sm text-on-dark-muted sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
