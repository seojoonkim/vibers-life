"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/house", label: "House" },
  { href: "/fellowship", label: "Fellowship" },
  { href: "/about", label: "About" },
] as const;

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-nav-wrap">
      <div className="site-nav">
        <Link href="/" className="site-brand" onClick={() => setMenuOpen(false)}>
          <span>Vibers Life</span>
          <small>Hashed × Nexon</small>
        </Link>

        <nav className="site-nav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`site-nav-link${isActive ? " is-active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="site-nav-toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      {menuOpen ? (
        <div className="site-nav-mobile" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`site-nav-mobile-link${isActive ? " is-active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                <span>{link.label}</span>
                <span>{link.href === "/" ? "Index" : link.label}</span>
              </Link>
            );
          })}
        </div>
      ) : null}
    </header>
  );
}
