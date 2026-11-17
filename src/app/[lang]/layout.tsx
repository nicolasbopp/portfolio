import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { alternates, getDictionary, hasLocale, locales } from "@/content";
import { themeInitScript } from "@/lib/theme";
import "../globals.css";

// Allo by Josh Puckett (SIL Open Font License), variable in optical size, weight and roundness.
const sans = localFont({
  src: "../../../node_modules/allo-font/fonts/webfonts/AlloVariable.woff2",
  variable: "--font-sans",
  weight: "100 900",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
    title: t.meta.title,
    description: t.meta.description,
    alternates: alternates(lang),
    openGraph: {
      title: "Nicolas Bopp",
      description: t.meta.description,
      type: "website",
      locale: lang === "de" ? "de_CH" : "en_GB",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#15161a",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    // The init script may set data-theme before React hydrates, hence suppressHydrationWarning.
    <html lang={lang === "de" ? "de-CH" : "en"} className={sans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
