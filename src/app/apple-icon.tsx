import { ImageResponse } from "next/og";

// Home-screen icon for iOS, which does not use SVG favicons.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c7a68",
          color: "#ffffff",
          fontSize: 84,
          fontWeight: 800,
          letterSpacing: "-0.03em",
        }}
      >
        NB
      </div>
    ),
    size,
  );
}
