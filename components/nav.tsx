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
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-arcade-line bg-arcade-black/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="transition-transform duration-200 group-hover:scale-110"
          >
            <rect x="2" y="2" width="7" height="7" fill="#8B5CF6" />
            <rect x="10.5" y="2" width="7" height="7" fill="#00FF88" />
            <rect x="19" y="2" width="7" height="7" fill="#8B5CF6" />
            <rect x="2" y="10.5" width="7" height="7" fill="#00FF88" />
            <rect x="10.5" y="10.5" width="7" height="7" fill="#FF0080" />
            <rect x="19" y="10.5" width="7" height="7" fill="#00FF88" />
            <rect x="2" y="19" width="7" height="7" fill="#8B5CF6" />
            <rect x="10.5" y="19" width="7" height="7" fill="#00FF88" />
            <rect x="19" y="19" width="7" height="7" fill="#8B5CF6" />
          </svg>
          <span className="font-pixel text-[10px] text-neon-purple transition-colors duration-200 group-hover:text-neon-green">
            VIBERS.LIFE
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 font-pixel text-[8px] tracking-wider transition-all duration-200 ${
                  active
                    ? "text-neon-green neon-glow-green"
                    : "text-content-muted hover:text-neon-purple"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="/#waitlist"
            className="btn-neon ml-3 min-h-0 px-4 py-2 text-[8px]"
          >
            JOIN
          </a>
        </nav>

        <button
          type="button"
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] border border-arcade-line bg-arcade-dark text-neon-green md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
        >
          <span
            className={`block h-[2px] w-[14px] bg-neon-green transition-all duration-200 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-[14px] bg-neon-green transition-all duration-200 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-arcade-line bg-arcade-black md:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto max-w-content px-6 py-2">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center border-b border-arcade-line py-4 font-pixel text-[9px] tracking-wider ${
                    active ? "text-neon-green" : "text-content-muted"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <span className="mr-3 text-neon-purple">{"> "}</span>
                  {link.label}
                </Link>
              );
            })}
            <a
              href="/#waitlist"
              className="btn-neon mt-4 mb-2 block w-full py-3 text-center text-[9px]"
              onClick={() => setOpen(false)}
            >
              JOIN WAITLIST
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
