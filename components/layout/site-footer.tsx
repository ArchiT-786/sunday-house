import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
const links=[["Home","/"],["Our homes","/stays"],["Whistling House","/stays/whistling-house"],["Chaaya Glades","/stays/chaaya-glades"],["Nokdara","/nokdara"],["Our story","/our-story"],["Contact","/contact"]];
export function SiteFooter({className=""}:{className?:string}){
 return <footer className={`bg-[#172c23] text-[#f6f3eb] ${className}`}>
  <div className="mx-auto max-w-[1600px] px-5 pb-10 pt-20 sm:px-10 lg:px-16">
   <div className="grid gap-12 border-b border-white/20 pb-16 lg:grid-cols-[1.5fr_0.7fr_1fr] lg:gap-20">
    <div><Link href="/" className="inline-flex items-center gap-3"><Image src="/_static/sunday_houses.png" alt="Sunday Houses logo" width={70} height={70} className="rounded-full bg-white object-contain"/><span className="font-serif text-2xl">Sunday Houses</span></Link><h2 className="mt-10 max-w-lg font-serif text-[clamp(2.5rem,4.5vw,5.2rem)] leading-[1.03] tracking-[-0.04em]">A little closer to <em className="text-[#e2c8a0]">what matters.</em></h2><p className="mt-6 text-sm text-white/65">Your home in the hills. Nokdara, Kalimpong.</p></div>
    <div><h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#e2c8a0]">Explore</h3><div className="grid gap-3">{links.map(([label,href])=><Link key={href} href={href} className="w-fit text-sm text-white/80 hover:text-white">{label}</Link>)}</div></div>
    <div><h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#e2c8a0]">Start a conversation</h3><a href="mailto:email.sundayhouse@gmail.com" className="break-all font-serif text-xl sm:text-2xl">email.sundayhouse@gmail.com</a><p className="mt-5 text-sm leading-7 text-white/65">Planning a quiet escape? We'd love to help you find the right stay.</p><Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#f4e6c9] px-6 py-3 text-sm font-semibold text-[#1b382e]">Enquire now <ArrowUpRight size={16}/></Link></div>
   </div><div className="flex flex-wrap justify-between gap-3 pt-7 text-xs text-white/55"><span>© {new Date().getFullYear()} Sunday Houses. All rights reserved.</span><span>Made for slower days · Nokdara, West Bengal</span></div>
  </div>
 </footer>;
}