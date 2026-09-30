import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "./site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

let markDataUrl: Promise<string> | undefined;
let fontData: Promise<[Buffer, Buffer]> | undefined;

// Plus Jakarta Sans (SIL Open Font License) — the site's typeface, bundled for the image renderer.
function fonts() {
  fontData ??= Promise.all([
    readFile(join(process.cwd(), "assets/fonts/PlusJakartaSans-400.woff")),
    readFile(join(process.cwd(), "assets/fonts/PlusJakartaSans-600.woff")),
  ]);
  return fontData;
}

function mark() {
  markDataUrl ??= readFile(join(process.cwd(), "public/brand/jev-mark.png")).then(
    (buf) => `data:image/png;base64,${buf.toString("base64")}`,
  );
  return markDataUrl;
}

/** Branded 1200×630 share image used by every opengraph-image route. */
export async function renderOgImage({ eyebrow, title }: { eyebrow: string; title: string }) {
  const [logo, [regular, semibold]] = await Promise.all([mark(), fonts()]);
  const titleSize = title.length > 70 ? 56 : title.length > 45 ? 64 : 76;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0b0f0e",
          backgroundImage: "radial-gradient(circle at 100% 0%, rgba(44,198,92,0.28) 0%, rgba(11,15,14,0) 55%)",
          color: "#ffffff",
          fontFamily: "Plus Jakarta Sans",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- rendered by next/og, not the browser */}
          <img src={logo} width={62} height={57} alt="" />
          <div style={{ display: "flex", fontSize: 30, letterSpacing: -0.5 }}>
            <span style={{ fontWeight: 600 }}>JEV</span>
            <span style={{ marginLeft: 10, color: "#9aa3a0" }}>Technologies</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 24, color: "#4ade80", letterSpacing: 2, textTransform: "uppercase" }}>
            <div style={{ width: 10, height: 10, borderRadius: 999, background: "#2cc65c" }} />
            {eyebrow}
          </div>
          <div style={{ display: "flex", fontSize: titleSize, fontWeight: 600, lineHeight: 1.06, letterSpacing: -2, maxWidth: 1000 }}>
            {title}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#9aa3a0" }}>
          <span>Websites · E-commerce · Custom software · Mobile apps</span>
          <span>{new URL(site.url).hostname.replace(/^www\./, "")}</span>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Plus Jakarta Sans", data: regular, weight: 400, style: "normal" },
        { name: "Plus Jakarta Sans", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
