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

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
