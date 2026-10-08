"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "All homestays", href: "/stays" },
  { label: "Whistling House", href: "/stays/whistling-house" },
  { label: "Chaaya Glades", href: "/stays/chaaya-glades" },
];
export function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#284b3a]/10 bg-[#f8f7f1]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-10">
        <Link href="/preview" className="flex items-center gap-2" aria-label="Sunday Houses home preview">
          <Image src="/_static/sunday_houses.png" alt="Sunday Houses logo" width={68} height={68} className="h-16 w-16 object-contain" />
          <span className="hidden font-heading text-lg font-semibold tracking-tight text-primary sm:block">Sunday Houses</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          <Link href="/preview" className="text-sm text-primary/80 hover:text-primary">Home</Link>
          <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <button onClick={() => setOpen(!open)} aria-expanded={open} aria-haspopup="true" className="flex items-center gap-1 py-7 text-sm text-primary/80 hover:text-primary">
              Our homestays <ChevronDown className="h-4 w-4" />
            </button>
            {open && <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 rounded-2xl border border-primary/10 bg-white p-3 shadow-2xl">
              <p className="px-3 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-accent">Nokdara · Kalimpong</p>
              {links.map(item => <Link onClick={() => setOpen(false)} key={item.href} href={item.href} className="flex items-center justify-between rounded-xl px-3 py-3 text-sm text-primary hover:bg-secondary">{item.label}<ArrowUpRight className="h-4 w-4"/></Link>)}
            </div>}
          </div>
          <Link href="/nokdara" className="text-sm text-primary/80 hover:text-primary">Explore Nokdara</Link>
          <Link href="/our-story" className="text-sm text-primary/80 hover:text-primary">Our Story</Link>
          <Link href="/contact" className="rounded-full bg-primary px-5 py-2.5 text-sm text-white transition-transform hover:-translate-y-0.5">Plan your stay</Link>
        </nav>
      </div>
    </header>
  );
}
