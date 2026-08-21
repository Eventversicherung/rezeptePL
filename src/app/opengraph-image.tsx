import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Alemniam — Polnische Rezepte";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#DC143C",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 54,
              height: 54,
              borderRadius: 999,
              border: "8px solid #FFFFFF",
              marginRight: -6,
            }}
          />
          <div
            style={{
              display: "flex",
              width: 12,
              height: 64,
              background: "#FFFFFF",
              borderRadius: 8,
              transform: "rotate(-42deg)",
              marginTop: 28,
            }}
          />
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
          }}
        >
          Alemniam
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 32,
            color: "rgba(255,255,255,0.88)",
          }}
        >
          Polnische Rezepte. Klar. Zuhause.
        </div>
      </div>
    ),
    { ...size },
  );
}
