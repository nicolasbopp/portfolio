import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible_Next } from "next/font/google";
import "./globals.css";

const sans = Atkinson_Hyperlegible_Next({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  weight: "variable",
});

const description =
  "Nicolas Bopp builds software for clinical research: medical imaging pipelines, annotation tools and clinical decision support.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: "Nicolas Bopp, medical informatics",
  description,
  openGraph: { title: "Nicolas Bopp", description, type: "website" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#edf0f1" },
    { media: "(prefers-color-scheme: dark)", color: "#121a20" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
