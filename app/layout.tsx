import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KOOM/KOOM — Soutenir · Développer · Guider",
  description:
    "KOOM/KOOM transforme un besoin flou en projet digital clair, structuré et réalisable. Né et lancé au Sénégal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${sora.variable} ${inter.variable}`}>
      <body className="grain font-sans antialiased">{children}</body>
    </html>
  );
}
