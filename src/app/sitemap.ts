import type { MetadataRoute } from "next";
import { localePath, locales, siteUrl } from "@/content";

const pages = ["", "/imprint", "/privacy"];

/** Every page in every language, each pointing at its translations. */
export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (path: string) => `${siteUrl}${path === "/" ? "" : path}`;
  return pages.flatMap((page) =>
    locales.map((lang) => ({
      url: abs(localePath(lang, page)),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.3,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, abs(localePath(l, page))])),
      },
    })),
  );
}
