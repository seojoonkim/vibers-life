"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/house", label: "House" },
  { href: "/fellowship", label: "Fellowship" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
      <div className="container-wide flex h-18 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-foreground">
            Vibers Life
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-sub-text transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#waitlist" className="btn-primary px-5 py-3 text-xs">
            Join Waitlist
          </Link>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <div className="container-wide flex flex-col gap-5 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#waitlist"
              className="btn-primary w-fit px-5 py-3 text-xs"
              onClick={() => setOpen(false)}
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
