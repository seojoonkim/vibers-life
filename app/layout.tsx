import type { Metadata } from "next";
import { Press_Start_2P, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vibers Life — Top 1% Builder Fellowship",
  description:
    "Vibers Life는 상위 1%의 어린 빌더를 위한 펠로우십 프로그램입니다. Vibers House 6개월 레지던시를 통해 세계를 바꿀 빌더들을 발굴합니다. Powered by Hashed × NEXON.",
  keywords: ["vibers life", "builder fellowship", "hashed", "nexon", "vibers house", "startup", "web3"],
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
    <html lang="ko" className={`${pressStart2P.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
