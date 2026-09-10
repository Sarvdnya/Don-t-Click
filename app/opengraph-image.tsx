import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt =
  "Sarvdnya Purnale — Frontend Developer & Digital Product Builder";

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
          padding: "72px 80px",
          background: "#0a0a0c",
          color: "#eceae6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontFamily: "monospace",
            fontSize: "20px",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#8a8a85",
          }}
        >
          <span
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "999px",
              background: "#ff5a1f",
            }}
          />
          PORTFOLIO — 2026
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div
            style={{
              fontSize: "128px",
              fontWeight: 700,
              lineHeight: "1",
              letterSpacing: "-0.03em",
              color: "#eceae6",
              display: "flex",
            }}
          >
            SARVDNYA
          </div>
          <div
            style={{
              fontSize: "128px",
              fontWeight: 700,
              lineHeight: "1",
              letterSpacing: "-0.03em",
              color: "#ff5a1f",
              display: "flex",
            }}
          >
            PURNALE
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: "26px",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#8a8a85",
          }}
        >
          <span style={{ display: "flex" }}>
            Frontend Developer · Digital Product Builder
          </span>
          <span
            style={{
              width: "220px",
              height: "2px",
              background: "#ff5a1f",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}