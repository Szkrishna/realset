import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nestovian — Arrive Move Settle",
  description: "Nestovian by Realset Pvt Ltd — Premium relocation solutions for expatriates and corporate teams. Residential leasing, service apartments, city orientation and more.",
  keywords: ["relocation", "expatriate", "corporate housing", "Gurgaon", "Nestovian", "Realset"],
  authors: [{ name: "Realset Pvt Ltd" }],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", rel: "shortcut icon" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ── Google Fonts ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet" />
        {/* ── Favicon (RealFaviconGenerator compatible) ── */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#D4A853" />
      </head>
      <body>{children}</body>
    </html>
  );
}
