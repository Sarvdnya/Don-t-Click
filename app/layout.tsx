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

export const metadata: Metadata = {
  title: "Sarvdnya Purnale — Developer & Builder",
  description:
    "Personal portfolio of Sarvdnya Purnale, a Computer Science student and developer building digital experiences, web products and creative technology.",
  openGraph: {
    title: "Sarvdnya Purnale — Developer & Builder",
    description:
      "Personal portfolio of Sarvdnya Purnale, a Computer Science student and developer building digital experiences, web products and creative technology.",
    type: "website",
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%230a0a0c'/%3E%3Ctext x='16' y='22' font-family='monospace' font-size='16' fill='%23ff5a1f' text-anchor='middle'%3ESP%3C/text%3E%3C/svg%3E",
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