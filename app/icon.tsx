import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

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
          background: "#0a0a0c",
          borderRadius: 12,
        }}
      >
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 34,
            fontWeight: 700,
            color: "#ff5a1f",
            lineHeight: 1,
          }}
        >
          SP
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}