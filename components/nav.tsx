"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/house", label: "HOUSE" },
  { href: "/fellowship", label: "FELLOWSHIP" },
  { href: "/about", label: "ABOUT" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "rgba(10, 10, 15, 0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(139, 92, 246, 0.25)",
          padding: "14px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "11px",
              color: "#8B5CF6",
              letterSpacing: "1px",
            }}
          >
            VIBERS_LIFE
            <span
              style={{ color: "#00FF88", animation: "blink-cursor 1s infinite" }}
            >
              _
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
          className="nav-desktop"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "9px",
                  color: isActive ? "#00FF88" : "#9090B0",
                  textDecoration: "none",
                  padding: "8px 12px",
                  border: isActive
                    ? "1px solid rgba(0,255,136,0.4)"
                    : "1px solid transparent",
                  background: isActive ? "rgba(0,255,136,0.08)" : "transparent",
                  letterSpacing: "1px",
                  transition: "all 0.2s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#00FF88";
                    e.currentTarget.style.borderColor = "rgba(0,255,136,0.25)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#9090B0";
                    e.currentTarget.style.borderColor = "transparent";
                  }
                }}
              >
                {isActive && (
                  <span style={{ color: "#00FF88", fontSize: "8px" }}>▶</span>
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{
            background: "transparent",
            border: "1px solid rgba(139,92,246,0.4)",
            cursor: "pointer",
            padding: "8px 10px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {menuOpen ? (
            /* X icon */
            <div
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "12px",
                color: "#00FF88",
                lineHeight: 1,
              }}
            >
              ✕
            </div>
          ) : (
            /* Pixel hamburger lines */
            <>
              <div style={{ width: "16px", height: "2px", background: "#8B5CF6" }} />
              <div style={{ width: "16px", height: "2px", background: "#8B5CF6" }} />
              <div style={{ width: "16px", height: "2px", background: "#8B5CF6" }} />
            </>
          )}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "53px",
            left: 0,
            right: 0,
            zIndex: 999,
            background: "rgba(10, 10, 15, 0.97)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(139,92,246,0.3)",
            padding: "8px 0 24px",
          }}
        >
          {NAV_LINKS.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "16px 32px",
                  fontFamily: "var(--font-pixel)",
                  fontSize: "11px",
                  color: isActive ? "#00FF88" : "#9090B0",
                  textDecoration: "none",
                  borderLeft: isActive
                    ? "2px solid #00FF88"
                    : "2px solid transparent",
                  background: isActive
                    ? "rgba(0,255,136,0.05)"
                    : "transparent",
                  letterSpacing: "1px",
                  transition: "all 0.15s",
                  animationDelay: `${i * 60}ms`,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "8px",
                    color: isActive ? "#00FF88" : "#3030A0",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {isActive && (
                  <span style={{ color: "#00FF88", fontSize: "9px" }}>▶</span>
                )}
                {link.label}
              </Link>
            );
          })}

          {/* Mobile menu footer */}
          <div
            style={{
              padding: "20px 32px 0",
              borderTop: "1px solid rgba(139,92,246,0.12)",
              marginTop: "8px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "7px",
                color: "#3030A0",
                letterSpacing: "2px",
              }}
            >
              POWERED BY HASHED × NEXON
            </div>
          </div>
        </div>
      )}

      <style>{`
        .nav-mobile-btn { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
