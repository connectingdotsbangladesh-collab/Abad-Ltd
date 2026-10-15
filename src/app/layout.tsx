import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-noto-bengali",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#062b41",
};

export const metadata: Metadata = {
  title: "আবাদ লিমিটেড | Abad Limited",
  description: "কৃষক থেকে ক্রেতা, প্রযুক্তির সংযোগে একটি ডাটা-ভিত্তিক কৃষি ইকোসিস্টেম।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${inter.variable} ${notoBengali.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}