import type { Metadata } from "next";
import { Press_Start_2P, Space_Grotesk } from "next/font/google";
import Nav from "@/components/nav";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-pixel",
  weight: "400",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vibers Life — The Fellowship for Elite Young Builders",
  description:
    "We find, fund, and grow the top 1% of young developers. Selective membership, intensive fellowship, and immersive residency. Backed by Hashed × NEXON.",
  openGraph: {
    title: "Vibers Life — The Fellowship for Elite Young Builders",
    description:
      "Selective membership, intensive fellowship, and immersive residency for the top 1% of young builders. Backed by Hashed × NEXON.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pressStart2P.variable} ${spaceGrotesk.variable}`}
    >
      <body className="scanline-overlay">
        <Nav />
        {children}
      </body>
    </html>
  );
}
