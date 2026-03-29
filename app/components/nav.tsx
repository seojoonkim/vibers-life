"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/house", label: "House" },
  { href: "/fellowship", label: "Fellowship" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#1A1A1A",
            flexShrink: 0,
          }}
        >
          Vibers Life
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 28 }}>
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

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
          aria-label="메뉴 열기"
        >
          <span style={{
            display: "block", width: 22, height: 2,
            background: "#1A1A1A", borderRadius: 2,
            transition: "all 0.2s",
            transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          }} />
          <span style={{
            display: "block", width: 22, height: 2,
            background: "#1A1A1A", borderRadius: 2,
            opacity: menuOpen ? 0 : 1,
            transition: "all 0.2s",
          }} />
          <span style={{
            display: "block", width: 22, height: 2,
            background: "#1A1A1A", borderRadius: 2,
            transition: "all 0.2s",
            transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
          }} />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div
          className="flex md:hidden"
          style={{
            flexDirection: "column",
            padding: "16px 0 24px",
            borderTop: "1px solid #EDE8DC",
            gap: 4,
          }}
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: isActive ? "#1A1A1A" : "#888",
                  padding: "10px 4px",
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
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 12,
              fontSize: 14,
              fontWeight: 700,
              color: "#F5F0E8",
              background: "#1A1A1A",
              padding: "10px 22px",
              borderRadius: 50,
              border: "2px solid #1A1A1A",
              textAlign: "center",
              display: "inline-block",
            }}
          >
            웨이팅 등록
          </Link>
        </div>
      )}
    </nav>
  );
}
