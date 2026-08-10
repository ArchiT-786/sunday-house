"use client";

import Link from "next/link";
import { SunMedium } from "lucide-react";

export function NavBar() {
  return (
    <header className="relative z-50 h-16 border-b border-black/5 bg-[#f7f6f1]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="font-heading text-sm font-semibold tracking-tight text-primary"
        >
          Sunday House
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link
            href="/"
            className="text-[11px] text-foreground/60 transition-colors hover:text-primary"
          >
            Home
          </Link>

          <Link
            href="/stays"
            className="text-[11px] text-foreground/60 transition-colors hover:text-primary"
          >
            Stay
          </Link>

          <Link
            href="/rishop"
            className="text-[11px] text-foreground/60 transition-colors hover:text-primary"
          >
            Rishop
          </Link>

          <Link
            href="/our-story"
            className="text-[11px] text-foreground/60 transition-colors hover:text-primary"
          >
            Our Story
          </Link>

          <Link
            href="/contact"
            className="text-[11px] text-foreground/60 transition-colors hover:text-primary"
          >
            Contact
          </Link>

          <button
            type="button"
            aria-label="Toggle theme"
            className="text-foreground/70"
          >
            <SunMedium className="size-3.5" />
          </button>
        </nav>
      </div>
    </header>
  );
}