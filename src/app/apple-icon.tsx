import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Home-screen icon for iOS, which does not use SVG favicons. Matches icon.svg.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const display = await readFile(join(process.cwd(), "src/assets/allo-display.ttf"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f2d04b",
          color: "#1a1709",
          fontFamily: "Allo Display",
          fontSize: 92,
          letterSpacing: "-0.04em",
        }}
      >
        NB
      </div>
    ),
    { ...size, fonts: [{ name: "Allo Display", data: display, style: "normal" }] },
  );
}
