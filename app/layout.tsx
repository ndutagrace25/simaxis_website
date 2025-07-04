import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://si-maxis.com"),
  title: "SI-MAXIS - Smart Electricity & Water Token Solutions",
  description:
    "Leading provider of electricity tokens, token meters, and water meters. Buy tokens via paybill 444440 with instant SMS delivery.",
  keywords:
    "electricity tokens, token meters, water meters, paybill 444440, SMS tokens, smart meters",
  authors: [{ name: "SI-MAXIS" }],
  robots: "index, follow",
  openGraph: {
    title: "SI-MAXIS - Smart Electricity & Water Token Solutions",
    description:
      "Leading provider of electricity tokens, token meters, and water meters. Buy tokens via paybill 444440 with instant SMS delivery.",
    type: "website",
    locale: "en_US",
    url: "https://si-maxis.com",
    siteName: "SI-MAXIS",
  },
  twitter: {
    card: "summary_large_image",
    title: "SI-MAXIS - Smart Electricity & Water Token Solutions",
    description:
      "Leading provider of electricity tokens, token meters, and water meters.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
