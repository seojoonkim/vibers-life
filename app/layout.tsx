import type { Metadata } from "next";
import Nav from "@/components/nav";
import "./globals.css";

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
    <html lang="ko">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
