import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Jev Technology - Software Development & Digital Solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1e1b4b 50%, #0a0a0a 100%)",
          position: "relative",
        }}
      >
        {/* Background glow effects */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "15%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "15%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              background: "linear-gradient(135deg, #3b82f6, #9333ea)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              fontWeight: 700,
              color: "white",
            }}
          >
            J
          </div>
          <div style={{ display: "flex", fontSize: "48px", fontWeight: 700 }}>
            <span style={{ color: "white" }}>Jev</span>
            <span style={{ color: "#3b82f6" }}>Tech</span>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            color: "#d4d4d8",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.4,
          }}
        >
          Building powerful software solutions for businesses across Africa
        </div>

        {/* Services tags */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "36px",
          }}
        >
          {["Web Development", "Mobile Apps", "HR & Payroll", "Cloud Solutions"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: "8px 20px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#a1a1aa",
                  fontSize: "16px",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#71717a",
            fontSize: "16px",
          }}
        >
          jevtechnology.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
