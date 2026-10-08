"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
const stays=[["All stays","/stays"],["Whistling House","/stays/whistling-house"],["Chaaya Glades","/stays/chaaya-glades"]];
export function NavBar(){
 const [open,setOpen]=useState(false);
 return <header className="sticky top-0 z-50 border-b border-[#23382c]/10 bg-[#f6f3eb]/95 backdrop-blur-xl">
  <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between gap-6 px-5 sm:px-10 lg:px-16">
   <Link href="/" aria-label="Sunday Houses home" className="flex shrink-0 items-center gap-2"><Image src="/_static/sunday_houses.png" alt="Sunday Houses" width={56} height={56} className="h-12 w-12 object-contain"/><span className="font-serif text-xl font-semibold tracking-tight text-[#24362c] sm:text-2xl">Sunday Houses</span></Link>
   <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex xl:gap-9">
    <Link href="/" className="text-sm text-[#24362c] hover:opacity-60">Home</Link>
    <div className="relative" onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
     <button type="button" onClick={()=>setOpen(!open)} aria-expanded={open} className="flex items-center gap-1 py-6 text-sm text-[#24362c]">Our homes <ChevronDown size={15}/></button>
     {open&&<div className="absolute left-0 top-full min-w-64 rounded-xl border border-[#24362c]/10 bg-[#f6f3eb] p-3 shadow-xl">{stays.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)} className="block rounded-md px-3 py-3 text-sm text-[#24362c] hover:bg-[#e6e4d7]">{label}</Link>)}</div>}
    </div>
    <Link href="/nokdara" className="text-sm text-[#24362c] hover:opacity-60">Nokdara</Link><Link href="/our-story" className="text-sm text-[#24362c] hover:opacity-60">Our story</Link>
    <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#243d30] px-6 py-3 text-sm font-semibold text-white hover:bg-[#395a46]">Plan your stay <ArrowUpRight size={16}/></Link>
   </nav>
   <Link href="/contact" className="mr-12 inline-flex rounded-full border border-[#243d30]/30 px-4 py-2 text-xs font-semibold text-[#243d30] lg:hidden">Enquire</Link>
  </div>
 </header>;
}