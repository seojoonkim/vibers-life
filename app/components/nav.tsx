"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/house", label: "House" },
  { href: "/fellowship", label: "Fellowship" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className="nav-bar"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        padding: "0 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#1A1A1A",
          }}
        >
          Vibers Life ☀️
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: isActive ? "#1A1A1A" : "#888",
                  transition: "color 0.15s ease",
                  textDecoration: isActive ? "underline" : "none",
                  textUnderlineOffset: 4,
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/#waitlist"
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#F5F0E8",
              background: "#1A1A1A",
              padding: "9px 22px",
              borderRadius: 50,
              border: "2px solid #1A1A1A",
              transition: "all 0.2s",
            }}
          >
            웨이팅 등록
          </Link>
        </div>
      </div>
    </nav>
  );
}
