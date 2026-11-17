import { NextResponse, type NextRequest } from "next/server";

const locales = ["en", "de"];

/** Picks German for browsers that prefer it over English, English otherwise. */
function preferredLocale(acceptLanguage: string | null): string {
  if (!acceptLanguage) return "en";
  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.toLowerCase().slice(0, 2), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  const hit = ranked.find((r) => locales.includes(r.lang));
  return hit?.lang ?? "en";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request.headers.get("accept-language"))}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Everything except API routes, Next.js internals and files with an extension.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
