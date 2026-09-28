export type NavLink = { label: string; href: string };
export type SocialLink = { label: string; href: string };

export const site = {
  name: "JEV Technologies",
  // TODO: confirm registered legal name
  legalName: "JEV Technologies",
  url: "https://www.jevtechnology.com",
  tagline: "Technology built around your business.",
  description:
    "JEV Technologies is a digital product and software engineering company. We design and build websites, e-commerce platforms, custom software and mobile applications — from idea to launch and beyond.",
  email: "hello@jevtechnology.com",
  phones: ["+234 706 204 3789", "+234 814 250 4666"],
  location: "Nigeria",
  // Fill these in to show the "At a glance" facts on the Company page.
  founded: undefined as string | undefined, // e.g. "2019"
  city: undefined as string | undefined, // e.g. "Lagos"
  // Add real profile URLs here; the footer only renders entries that exist.
  socials: [] as SocialLink[],
};

export const startProjectHref = "/start-a-project";

/** Top-level nav. "Services" renders as a mega menu built from content/services. */
export const mainNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Products", href: "/products" },
  { label: "Company", href: "/company" },
  { label: "Insights", href: "/insights" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Corporate Websites", href: "/services/corporate-websites" },
      { label: "E-Commerce", href: "/services/ecommerce" },
      { label: "Custom Software", href: "/services/custom-software" },
      { label: "Mobile Applications", href: "/services/mobile-apps" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Consulting", href: "/services/technology-consulting" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "How we work", href: "/how-we-work" },
      { label: "Careers", href: "/careers" },
      { label: "Products", href: "/products" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
