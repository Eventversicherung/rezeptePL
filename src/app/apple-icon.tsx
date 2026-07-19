import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Red/white cooking mark for home-screen icon. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#DC143C",
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* ladle bowl */}
        <div
          style={{
            display: "flex",
            width: 64,
            height: 64,
            borderRadius: 999,
            border: "10px solid #FFFFFF",
            marginRight: -8,
            marginTop: -28,
          }}
        />
        {/* ladle handle */}
        <div
          style={{
            display: "flex",
            width: 14,
            height: 78,
            background: "#FFFFFF",
            borderRadius: 8,
            transform: "rotate(-42deg)",
            marginTop: 36,
            marginLeft: -6,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
