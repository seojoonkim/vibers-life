"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const links = [
    { href: "/about", label: "소개" },
    { href: "/house", label: "Vibers House" },
    { href: "/fellowship", label: "펠로우십" },
  ];

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #E8E8E8",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: 24,
            letterSpacing: "-0.02em",
            color: "#0A0A0A",
          }}
        >
          Vibers Life
        </Link>

        {/* Desktop Menu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="hidden md:flex"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: 15,
                fontWeight: 500,
                color: "#0A0A0A",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#FF4D00")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#0A0A0A")
              }
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#waitlist"
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              background: "#FF4D00",
              color: "#fff",
              padding: "10px 24px",
              borderRadius: 0,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#E64500")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#FF4D00")
            }
          >
            웨이팅 등록
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
          }}
          aria-label="메뉴"
        >
          <div style={{ width: 24, display: "flex", flexDirection: "column", gap: 5 }}>
            <span
              style={{
                display: "block",
                height: 2,
                background: "#0A0A0A",
                transition: "all 0.3s",
                transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                height: 2,
                background: "#0A0A0A",
                transition: "all 0.3s",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                height: 2,
                background: "#0A0A0A",
                transition: "all 0.3s",
                transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className="md:hidden"
        style={{
          maxHeight: open ? 400 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease",
          opacity: open ? 1 : 0,
          background: "#FFFFFF",
          boxShadow: open ? "0 8px 24px rgba(0,0,0,0.12)" : "none",
        }}
      >
        <div style={{ padding: "16px 24px 24px" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "14px 0",
                fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color: "#0A0A0A",
                borderBottom: "1px solid #F0F0F0",
                transition: "color 0.2s",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#waitlist"
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              marginTop: 20,
              textAlign: "center",
              fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              background: "#FF4D00",
              color: "#fff",
              padding: "14px 24px",
              transition: "background 0.2s",
            }}
          >
            웨이팅 등록
          </Link>
        </div>
      </div>
    </nav>
  );
}
