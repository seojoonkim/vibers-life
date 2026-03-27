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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e8e8e8] bg-white/95 backdrop-blur-2xl">
      <div className="mx-auto flex h-[72px] max-w-editorial items-center justify-between px-6 md:h-20 md:px-12 lg:px-16">
        <Link href="/" className="group" onClick={() => setOpen(false)}>
          <span className="block text-[15px] font-bold uppercase tracking-[-0.02em]">
            Vibers Life
          </span>
          <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
            Hashed × Nexon
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 ${
                  active
                    ? "border border-accent/30 bg-accent-light text-accent"
                    : "text-text-sub hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-[2px] w-[18px] bg-foreground transition-all duration-200 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-[18px] bg-foreground transition-all duration-200 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-white md:hidden" aria-label="Mobile">
          <div className="mx-auto max-w-editorial px-6">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between border-b border-border py-4 text-[13px] font-bold uppercase tracking-[0.14em] ${
                    active ? "text-accent" : "text-foreground"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <span>{link.label}</span>
                  <span className="text-[11px] text-text-sub">
                    {link.href === "/" ? "Index" : link.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
