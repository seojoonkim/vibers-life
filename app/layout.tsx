import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import Nav from "@/components/nav";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vibers Life",
  description:
    "Vibers Life is a builder fellowship and residency shaped for the next generation of founders.",
  openGraph: {
    title: "Vibers Life",
    description:
      "Editorial landing for the fellowship, house, and builder ecosystem — Hashed × Nexon.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${playfair.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
