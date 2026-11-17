import { de } from "./de";
import { en } from "./en";
import type { Dictionary } from "./types";

export { person } from "./shared";
export type { Dictionary } from "./types";

export const locales = ["en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const dictionaries: Record<Locale, Dictionary> = { en, de };

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Public URL of a page: English has no prefix, other languages do (e.g. "/de/imprint"). */
export function localePath(locale: Locale, path = ""): string {
  if (locale === defaultLocale) return path || "/";
  return `/${locale}${path}`;
}

/** hreflang alternates for a page, for search engines. */
export function alternates(locale: Locale, path = "") {
  return {
    canonical: localePath(locale, path),
    languages: Object.fromEntries([
      ...locales.map((l) => [l, localePath(l, path)]),
      ["x-default", localePath(defaultLocale, path)],
    ]),
  };
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
