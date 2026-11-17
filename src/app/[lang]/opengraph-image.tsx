import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getDictionary, hasLocale, person } from "@/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Nicolas Bopp";

// Static instances of Allo (SIL Open Font License), cut from the variable font at the site's display and text settings.
const display = readFile(join(process.cwd(), "src/assets/allo-display.ttf"));
const text = readFile(join(process.cwd(), "src/assets/allo-text.ttf"));

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(hasLocale(lang) ? lang : "en");
  const site = (process.env.SITE_URL ?? "").replace(/^https?:\/\//, "").replace(/\/$/, "");
  const [first, last] = person.name.split(" ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px 56px",
          background: "#f2d04b",
          color: "#1a1709",
          fontFamily: "Allo Text",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "Allo Display", fontSize: 38 }}>{t.profile.role}</div>
            <div style={{ color: "#4a4220", marginTop: 6 }}>{t.profile.location}</div>
          </div>
          <div style={{ color: "#4a4220" }}>{site}</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Allo Display",
            fontSize: 210,
            lineHeight: 0.86,
            letterSpacing: "-0.045em",
            marginLeft: -8,
          }}
        >
          <div>{first}</div>
          <div>{last}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Allo Display", data: await display, style: "normal" },
        { name: "Allo Text", data: await text, style: "normal" },
      ],
    },
  );
}
