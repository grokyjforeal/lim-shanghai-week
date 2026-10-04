import type { Metadata, Viewport } from "next";
import { Newsreader, Noto_Sans_SC, Noto_Serif_SC, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const notoSans = Noto_Sans_SC({
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
  display: "swap",
  preload: false,
});

const notoSerif = Noto_Serif_SC({
  variable: "--font-noto-serif",
  weight: ["500", "600"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Shanghai, 22 to 28 October 2026",
  description:
    "The Lim family week in Shanghai: West Lake on Friday, a birthday on Saturday, Suzhou on Sunday, Disneyland on Monday.",
  appleWebApp: { capable: true, title: "Shanghai", statusBarStyle: "default" },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f3eee6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${newsreader.variable} ${notoSans.variable} ${notoSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
