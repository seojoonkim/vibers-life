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
          maxWidth: 1200,
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
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#111111",
          }}
        >
          Vibers Life
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: isActive ? "#111111" : "#6B7280",
                  transition: "color 0.15s ease",
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
              fontWeight: 600,
              color: "#FFFFFF",
              background: "#1B3054",
              padding: "8px 20px",
              borderRadius: 9999,
              transition: "background 0.15s ease",
            }}
          >
            웨이팅 등록
          </Link>
        </div>
      </div>
    </nav>
  );
}
