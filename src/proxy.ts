import { NextResponse, type NextRequest } from "next/server";

// English is served without a prefix ("/", "/imprint"); German lives under "/de".
// Pages are built under app/[lang], so English URLs are rewritten to "/en/..." internally.

function startsWithLocale(pathname: string, locale: string) {
  return pathname === `/${locale}` || pathname.startsWith(`/${locale}/`);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (startsWithLocale(pathname, "de")) return;

  if (startsWithLocale(pathname, "en")) {
    // Generated images keep their internal path; pages move to the clean URL.
    if (pathname.endsWith("/opengraph-image")) return;
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Everything except API routes, Next.js internals and files with an extension.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
