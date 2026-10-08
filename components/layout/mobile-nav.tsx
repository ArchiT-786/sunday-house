"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links=[["Home","/"],["Our homestays","/stays"],["Whistling House","/stays/whistling-house"],["Chaaya Glades","/stays/chaaya-glades"],["Explore Nokdara","/nokdara"],["Our story","/our-story"],["Contact","/contact"]];
export function NavMobile(){
 const [open,setOpen]=useState(false);
 return <><button type="button" onClick={()=>setOpen(!open)} aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} className="fixed right-4 top-[18px] z-[70] flex h-10 w-10 items-center justify-center rounded-full bg-[#243d30] text-white shadow-lg lg:hidden">{open?<X size={20}/>:<Menu size={20}/>}</button>
 {open&&<nav aria-label="Mobile navigation" className="fixed inset-0 z-[60] overflow-y-auto bg-[#f6f3eb] px-7 pb-12 pt-20 lg:hidden"><Image src="/_static/sunday_houses.png" width={84} height={84} alt="Sunday Houses logo"/><p className="mb-5 mt-5 text-xs uppercase tracking-[0.24em] text-[#937148]">Your home in the hills</p>{links.map(([title,href])=><Link key={href} href={href} onClick={()=>setOpen(false)} className="flex items-center justify-between gap-3 border-b border-[#24362c]/15 py-4 font-serif text-2xl text-[#24362c]">{title}<ArrowUpRight size={18}/></Link>)}<p className="mt-8 text-sm text-[#637166]">Nokdara · Kalimpong · West Bengal</p></nav>}</>;
}