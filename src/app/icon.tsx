import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon: logo "</>" yang sama dengan navbar.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2563eb",
          borderRadius: 14,
          color: "#ffffff",
          fontSize: 28,
          fontWeight: 800,
        }}
      >
        {"</>"}
      </div>
    ),
    size,
  );
}
