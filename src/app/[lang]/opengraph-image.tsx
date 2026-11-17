import { ImageResponse } from "next/og";
import { cacheLife } from "next/cache";
import { getDictionary, hasLocale, person } from "@/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Nicolas Bopp";

/** Loads one weight of the site's typeface as TTF from Google Fonts, or null if unavailable. */
async function loadFont(weight: number, text: string): Promise<ArrayBuffer | null> {
  "use cache";
  cacheLife("max");
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@${weight}&text=${encodeURIComponent(text)}`,
    ).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(hasLocale(lang) ? lang : "en");
  const site = (process.env.SITE_URL ?? "").replace(/^https?:\/\//, "").replace(/\/$/, "");

  const strings = [person.name, t.profile.role, t.profile.location, t.ui.currently, site];
  const text = strings.join("");
  const [bold, regular] = await Promise.all([loadFont(800, text), loadFont(400, text)]);
  const fonts = [
    bold && { name: "Atkinson", data: bold, weight: 800 as const, style: "normal" as const },
    regular && { name: "Atkinson", data: regular, weight: 400 as const, style: "normal" as const },
  ].filter((f) => f !== null);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 88px",
          background: "#edf0f1",
          color: "#16222b",
          fontFamily: "Atkinson",
        }}
      >
        <div style={{ display: "flex", width: 120, height: 10, background: "#1c7a68", borderRadius: 2 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 132, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1 }}>
            {person.name}
          </div>
          <div style={{ fontSize: 46, fontWeight: 800, marginTop: 36 }}>{t.profile.role}</div>
          <div style={{ fontSize: 34, color: "#56636d", marginTop: 12 }}>{t.profile.location}</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#56636d" }}>{site}</div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}
