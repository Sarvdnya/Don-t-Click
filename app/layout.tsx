import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import SmoothScroll from "@/components/animations/SmoothScroll";
import MotionProvider from "@/components/animations/MotionProvider";
import CustomCursor from "@/components/animations/CustomCursor";
import Grain from "@/components/effects/Grain";
import GridBackground from "@/components/effects/GridBackground";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const TITLE = "Sarvdnya Purnale — Frontend Developer & Digital Product Builder";
const DESCRIPTION =
  "Sarvdnya Purnale is a frontend developer and digital product builder crafting interactive interfaces, AI-powered applications and thoughtful web experiences.";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? null;

export const metadata: Metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  title: {
    default: TITLE,
    template: "%s — Sarvdnya Purnale",
  },
  description: DESCRIPTION,
  applicationName: "Sarvdnya Purnale Portfolio",
  creator: "Sarvdnya Purnale",
  authors: [{ name: "Sarvdnya Purnale" }],
  keywords: [
    "Sarvdnya Purnale",
    "frontend developer",
    "UI engineer",
    "digital product builder",
    "React",
    "Next.js",
    "interactive interfaces",
    "AI applications",
    "web development portfolio",
  ],
  alternates: {
    canonical: SITE_URL ?? undefined,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Sarvdnya Purnale",
    locale: "en_US",
    url: SITE_URL ?? undefined,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        <noscript>
          <style>{`.preloader { display: none; }`}</style>
        </noscript>
        <div id="top" aria-hidden="true" />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:border focus:border-border-subtle focus:bg-background focus:px-5 focus:py-3 focus:font-mono focus:text-xs focus:uppercase focus:tracking-[0.2em] focus:text-accent"
        >
          Skip to content
        </a>
        <MotionProvider>
          <GridBackground />
          <Grain />
          <Navbar />
          <Preloader />
          <SmoothScroll />
          <CustomCursor />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}