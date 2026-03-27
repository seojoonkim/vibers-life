import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import Nav from "@/components/nav";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vibers Life — Top 1% Builder Fellowship",
  description:
    "Vibers Life는 상위 1%의 어린 빌더를 위한 펠로우십 프로그램입니다. Powered by Hashed × NEXON.",
  openGraph: {
    title: "Vibers Life — Top 1% Builder Fellowship",
    description: "상위 1% 어린 빌더 펠로우십. Powered by Hashed × NEXON.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${spaceGrotesk.variable} ${playfairDisplay.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
