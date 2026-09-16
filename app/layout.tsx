import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Karla, Caveat } from "next/font/google";
import NightSky from "@/components/NightSky";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const body = Karla({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Amplop yang Menunggu", template: "%s" },
  description: "Beberapa surat yang belum sempat terkirim.",
  robots: { index: false, follow: false },
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }] },
};

export const viewport: Viewport = {
  themeColor: "#0D0906",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${display.variable} ${body.variable} ${hand.variable}`}
    >
      <body className="min-h-screen font-body antialiased">
        <NightSky />
        {children}
      </body>
    </html>
  );
}