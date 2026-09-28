import type { ImageKey } from "./images";

export type Capability = {
  title: string;
  image: ImageKey;
  summary: string;
  /** Each item links to its service page when `slug` is set. */
  items: { label: string; slug?: string }[];
};

export const capabilities: Capability[] = [
  {
    title: "Digital Experiences",
    image: "corporate-websites",
    summary: "Websites, commerce and portals that communicate credibility and turn visitors into customers.",
    items: [
      { label: "Corporate websites", slug: "corporate-websites" },
      { label: "E-commerce", slug: "ecommerce" },
      { label: "Customer portals", slug: "web-applications" },
      { label: "Landing pages", slug: "corporate-websites" },
    ],
  },
  {
    title: "Product Engineering",
    image: "custom-software",
    summary:
      "Custom software, web and mobile applications engineered around how your organization actually operates.",
    items: [
      { label: "Custom software", slug: "custom-software" },
      { label: "Web applications", slug: "web-applications" },
      { label: "Mobile applications", slug: "mobile-apps" },
      { label: "APIs & integrations", slug: "api-integration" },
    ],
  },
  {
    title: "Product Design",
    image: "ui-ux-design",
    summary: "Research-led UX and interface design that makes complex products feel simple to use.",
    items: [
      { label: "Product strategy", slug: "ui-ux-design" },
      { label: "UX & UI design", slug: "ui-ux-design" },
      { label: "Prototyping", slug: "ui-ux-design" },
      { label: "Design systems", slug: "ui-ux-design" },
    ],
  },
  {
    title: "Technology & Operations",
    image: "technology-consulting",
    summary:
      "The architecture, infrastructure and support that keep your technology reliable as your business grows.",
    items: [
      { label: "Technology consulting", slug: "technology-consulting" },
      { label: "Cloud & DevOps", slug: "cloud-devops" },
      { label: "Architecture", slug: "technology-consulting" },
      { label: "Maintenance & support", slug: "cloud-devops" },
    ],
  },
];
