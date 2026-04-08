import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jev Technology - Software Development & Digital Solutions",
    short_name: "JevTech",
    description:
      "Empowering organizations with cutting-edge web development, mobile apps, HR systems, and software consultancy across Africa.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
