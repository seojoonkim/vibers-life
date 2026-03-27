import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import Nav from "./components/nav";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vibers Life",
  description:
    "Vibers Life is a builder fellowship and residency shaped for the next generation of founders.",
  openGraph: {
    title: "Vibers Life",
    description:
      "Editorial landing pages for the fellowship, house, and builder ecosystem powered by Hashed × Nexon.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${playfairDisplay.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
