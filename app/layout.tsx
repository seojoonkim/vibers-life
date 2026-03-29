import type { Metadata } from "next";
import Nav from "./components/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibers Life — 차세대 빌더 펠로우십",
  description:
    "상위 1%의 젊은 개발자를 발굴하고, 후원하고, 함께 성장하는 프로그램. Hashed × NEXON이 함께합니다.",
  openGraph: {
    title: "Vibers Life — 차세대 빌더 펠로우십",
    description:
      "선발형 멤버십, 집중 펠로우십, 몰입형 레지던시. 상위 1%의 젊은 빌더를 위한 프로그램.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
