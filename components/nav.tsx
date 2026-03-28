"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Scroll detection for shadow
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`nav-glass ${scrolled ? "scrolled" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
    >
      <div
        className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16"
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: 24,
            letterSpacing: "-0.02em",
            color: "var(--navy)",
          }}
        >
          Vibers Life
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "'Pretendard', sans-serif",
                fontSize: 15,
                fontWeight: 500,
                color: "var(--navy)",
                transition: "color 0.2s ease, opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--navy)")}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#waitlist"
            className="btn-primary"
            style={{
              padding: "10px 24px",
              fontSize: 14,
            }}
          >
            웨이팅 등록
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 10,
            minWidth: 44,
            minHeight: 44,
          }}
          aria-label="메뉴"
        >
          <div style={{ width: 22, display: "flex", flexDirection: "column", gap: 5 }}>
            <span
              style={{
                display: "block",
                height: 2,
                borderRadius: 1,
                background: "var(--navy)",
                transition: "all 0.3s ease",
                transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                height: 2,
                borderRadius: 1,
                background: "var(--navy)",
                transition: "all 0.3s ease",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                height: 2,
                borderRadius: 1,
                background: "var(--navy)",
                transition: "all 0.3s ease",
                transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className="md:hidden"
        style={{
          maxHeight: open ? 400 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
          opacity: open ? 1 : 0,
          background: "rgba(255,255,255,0.98)",
          backdropFilter: "blur(14px)",
          boxShadow: open ? "0 8px 32px rgba(0,0,0,0.1)" : "none",
          width: "100%",
        }}
      >
        <div style={{ padding: "12px 20px 24px" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "16px 0",
                fontFamily: "'Pretendard', sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color: "var(--navy)",
                borderBottom: "1px solid var(--border, #F0F0F0)",
                transition: "color 0.2s",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="btn-primary"
            style={{
              display: "block",
              marginTop: 16,
              textAlign: "center",
              width: "100%",
            }}
          >
            웨이팅 등록
          </Link>
        </div>
      </div>
    </nav>
  );
}
