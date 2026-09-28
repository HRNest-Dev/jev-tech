"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { mainNav, site, startProjectHref } from "@/lib/site";
import { serviceGroups, servicesInGroup } from "@/content/services";
import { ButtonLink, Container, Logo } from "@/components/ui";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={cn("size-3.5 transition-transform duration-200", open && "rotate-180")}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6l4 4 4-4" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);
  const headerRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close every menu when the route changes.
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setMobileOpen(false);
    setMegaOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!megaOpen && !mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (megaOpen) {
        setMegaOpen(false);
        servicesButtonRef.current?.focus();
      }
      if (mobileOpen) {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setMegaOpen(false);
    };
    const onResize = () => window.innerWidth >= 1024 && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", onResize);
    // While the mobile menu is open, the page behind it can't be reached.
    const background = [document.getElementById("main"), document.querySelector("footer")];
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      background.forEach((el) => el?.setAttribute("inert", ""));
      mobileMenuRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    }
    return () => {
      background.forEach((el) => el?.removeAttribute("inert"));
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [megaOpen, mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const hoverOpen = () => {
    clearTimeout(hoverTimer.current);
    setMegaOpen(true);
  };
  const hoverClose = () => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const solid = scrolled || mobileOpen || megaOpen;

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300",
        solid ? "border-line bg-canvas/95 backdrop-blur-md" : "border-transparent bg-canvas",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Container className="flex h-18 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((link) =>
              link.label === "Services" ? (
                <li
                  key={link.href}
                  onMouseEnter={hoverOpen}
                  onMouseLeave={hoverClose}
                  onBlur={(e) => {
                    if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget as Node)) setMegaOpen(false);
                  }}
                >
                  <button
                    ref={servicesButtonRef}
                    type="button"
                    aria-expanded={megaOpen}
                    aria-controls="services-menu"
                    onClick={() => setMegaOpen((v) => !v)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.9375rem] transition-colors hover:bg-surface hover:text-fg",
                      megaOpen || isActive(link.href) ? "text-fg" : "text-muted",
                    )}
                  >
                    {link.label}
                    <Chevron open={megaOpen} />
                  </button>
                  {/* Rendered inside the <li> so it follows the button in tab order;
                      positioned against the fixed header. */}
                  <div
                    id="services-menu"
                    hidden={!megaOpen}
                    className="absolute inset-x-0 top-full hidden border-b border-line bg-canvas shadow-[0_24px_48px_-24px_rgb(11_15_14/0.18)] lg:block"
                  >
                    <Container className="grid grid-cols-12 gap-10 py-10">
                      {serviceGroups.map((group) => (
                        <div key={group.name} className="col-span-3">
                          <p className="font-mono text-caption uppercase text-muted">{group.name}</p>
                          <ul className="mt-4 space-y-1">
                            {servicesInGroup(group.name).map((s) => (
                              <li key={s.slug}>
                                <Link
                                  href={`/services/${s.slug}`}
                                  onClick={() => setMegaOpen(false)}
                                  className="-mx-3 block rounded-xl px-3 py-2.5 transition-colors hover:bg-surface"
                                >
                                  <span className="block text-[0.9375rem] font-medium text-fg">{s.name}</span>
                                  <span className="mt-0.5 line-clamp-1 block text-sm text-muted">{s.summary}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="col-span-3 flex flex-col justify-between rounded-2xl bg-surface p-6">
                        <div>
                          <p className="font-medium">Not sure what you need?</p>
                          <p className="mt-2 text-sm text-muted">Bring us the problem. Defining it is part of the work.</p>
                        </div>
                        <div className="mt-6 flex flex-col items-start gap-3">
                          <ButtonLink href="/services" variant="link" arrow onClick={() => setMegaOpen(false)}>
                            All services
                          </ButtonLink>
                          <ButtonLink href={startProjectHref} variant="link" arrow onClick={() => setMegaOpen(false)}>
                            Start a conversation
                          </ButtonLink>
                        </div>
                      </div>
                    </Container>
                  </div>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "rounded-full px-4 py-2 text-[0.9375rem] transition-colors hover:bg-surface hover:text-fg",
                      isActive(link.href) ? "text-fg" : "text-muted",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link href="/contact" className="text-[0.9375rem] text-muted transition-colors hover:text-fg">
            Contact
          </Link>
          <ButtonLink href={startProjectHref} variant="secondary">
            Start a Project
          </ButtonLink>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-fg hover:bg-surface lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round">
            {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </Container>

      {/* Mobile menu */}
      <div ref={mobileMenuRef} id="mobile-menu" hidden={!mobileOpen} className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-canvas lg:hidden">
        <Container className="flex min-h-full flex-col py-4">
          <nav aria-label="Mobile">
            <ul className="divide-y divide-line">
              <li>
                <button
                  type="button"
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-4 text-h3 font-medium"
                >
                  Services
                  <Chevron open={mobileServicesOpen} />
                </button>
                <div id="mobile-services" hidden={!mobileServicesOpen} className="pb-5">
                  {serviceGroups.map((group) => (
                    <div key={group.name} className="mt-3 first:mt-0">
                      <p className="font-mono text-caption uppercase text-muted">{group.name}</p>
                      <ul className="mt-2">
                        {servicesInGroup(group.name).map((s) => (
                          <li key={s.slug}>
                            <Link href={`/services/${s.slug}`} className="block py-2 text-fg">
                              {s.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <Link href="/services" className="mt-3 inline-block text-sm font-medium text-brand-700">
                    All services →
                  </Link>
                </div>
              </li>
              {[...mainNav.filter((l) => l.label !== "Services"), { label: "Contact", href: "/contact" }].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className="flex items-center justify-between py-4 text-h3 font-medium"
                  >
                    {link.label}
                    <span aria-hidden="true" className="text-muted">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto space-y-5 pt-10">
            <ButtonLink href={startProjectHref} size="lg" arrow className="w-full">
              Start a Project
            </ButtonLink>
            <a href={`mailto:${site.email}`} className="block text-center text-sm text-muted hover:text-fg">
              {site.email}
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
