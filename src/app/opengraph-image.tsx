import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const tags = site.focusAreas.map((a) => a.en);

// Gambar share preview (LinkedIn, WhatsApp, X, dll.), dibuat otomatis saat build.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#e6edf7",
          background:
            "radial-gradient(ellipse 70% 60% at 85% 0%, rgba(37,99,235,0.55) 0%, rgba(8,13,25,0) 70%), #080d19",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "rgba(37,99,235,0.2)",
              border: "2px solid rgba(96,165,250,0.35)",
              color: "#60a5fa",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            {"</>"}
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#8fa3c0" }}>{site.shortName}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, lineHeight: 1.05, color: "#ffffff" }}>
            {site.name}
          </div>
          <div style={{ display: "flex", marginTop: 22, fontSize: 42, color: "#60a5fa" }}>{site.role}</div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 28, color: "#8fa3c0", maxWidth: 900 }}>
            {site.tagline}
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {tags.map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: "2px solid rgba(96,165,250,0.3)",
                background: "rgba(17,27,45,0.8)",
                color: "#60a5fa",
                fontSize: 26,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
