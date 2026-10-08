"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  ["Home", "/preview"], ["All Homestays", "/stays"],
  ["Whistling House", "/stays/whistling-house"], ["Chaaya Glades", "/stays/chaaya-glades"],
  ["Explore Nokdara", "/nokdara"], ["Our Story", "/our-story"], ["Contact", "/contact"],
];
export function NavMobile() {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}
      className="fixed right-4 top-4 z-[70] rounded-full bg-white p-3 shadow-lg md:hidden">
      {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
    </button>
    {open && <nav aria-label="Mobile navigation" className="fixed inset-0 z-[60] overflow-y-auto bg-[#f8f7f1] px-8 pb-12 pt-20 md:hidden">
      <Image src="/_static/sunday_houses.png" width={100} height={100} alt="Sunday Houses logo" className="mb-8 object-contain"/>
      {links.map(([title,href]) => <Link key={href} href={href} onClick={() => setOpen(false)}
        className="block border-b border-primary/10 py-4 font-heading text-xl text-primary">{title}</Link>)}
      <p className="mt-8 text-sm text-muted-foreground">Curated mountain stays in Nokdara, Kalimpong.</p>
    </nav>}
  </>;
}
