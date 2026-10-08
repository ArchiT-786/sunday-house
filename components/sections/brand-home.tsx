"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, MapPin, Sparkles } from "lucide-react";
import PropertyImage from "@/components/shared/property-image";

const stays=[
 {name:"Whistling House",slug:"whistling-house",note:"A home for unhurried mornings",index:"01"},
 {name:"Chaaya Glades",slug:"chaaya-glades",note:"A sanctuary for slower days",index:"02"},
] as const;
function Reveal({children,className=""}:{children:React.ReactNode;className?:string}){
 const reduce=useReducedMotion();
 return <motion.div initial={reduce?false:{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.12}} transition={{duration:0.65,ease:"easeOut"}} className={className}>{children}</motion.div>;
}
export default function BrandHome(){
 return <main className="overflow-x-clip bg-[#f6f3eb] text-[#24362c]">
  <section className="relative isolate min-h-[min(840px,92svh)] overflow-hidden bg-[#253d30] text-white sm:min-h-[92svh]">
   <Image src="/images/properties/whistling-house/exterior.webp" alt="Whistling House garden and mountain homestay in Nokdara" fill priority sizes="100vw" className="object-cover" />
   <div className="absolute inset-0 bg-gradient-to-r from-[#0e261f]/85 via-[#112a24]/40 to-[#112a24]/10"/>
   <div className="absolute inset-0 bg-gradient-to-t from-[#0e261f]/65 via-transparent to-transparent"/>
   <div className="relative mx-auto flex min-h-[min(840px,92svh)] max-w-[1600px] flex-col justify-between px-5 pb-10 pt-24 sm:min-h-[92svh] sm:px-10 sm:pt-32 lg:px-16">
    <div className="max-w-[900px]">
     <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f3e6cb]">Sunday Houses <span className="mx-2">/</span> Nokdara, Kalimpong</p>
     <h1 className="mt-8 max-w-[900px] font-serif text-[clamp(3.4rem,9vw,9.6rem)] font-normal leading-[0.91] tracking-[-0.055em]">Some places <em className="text-[#f6dca9]">stay</em> with you.</h1>
     <p className="mt-7 max-w-md text-base leading-7 text-white/90 sm:text-lg sm:leading-8">A collection of intimate mountain homes. Rooted in the hills, made for the moments that matter.</p>
     <div className="mt-8 flex flex-wrap gap-3"><Link href="/stays" className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#f4e6c9] px-6 py-3 text-sm font-semibold text-[#1b382e] transition-colors hover:bg-white">Explore our stays <ArrowUpRight size={17}/></Link><Link href="/contact" className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15">Plan your escape <ArrowUpRight size={17}/></Link></div>
    </div>
    <div className="flex flex-wrap items-end justify-between gap-5 border-t border-white/35 pt-5 text-[11px] uppercase tracking-[0.2em] text-white/85"><span>27° North · A slower way to travel</span><span className="flex items-center gap-2">Scroll to discover <ArrowDownRight size={17}/></span></div>
   </div>
  </section>
  <section className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-20 sm:px-10 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-16">
   <Reveal><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#937148]">The Sunday Houses feeling</p><div className="mt-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#a8a38b]"><Sparkles size={23}/></div><p className="mt-7 max-w-sm text-base leading-8 text-[#536257]">Fresh mountain air. The warmth of a familiar home. A little more time to be yourself.</p></Reveal>
   <Reveal><h2 className="font-serif text-[clamp(3rem,6.5vw,7rem)] leading-[1.03] tracking-[-0.05em]">Come for the views. <em className="text-[#9b7856]">Stay for the feeling.</em></h2><Link href="/our-story" className="mt-8 inline-flex items-center gap-2 border-b border-[#24362c] pb-2 text-sm font-semibold">Our story <ArrowUpRight size={17}/></Link></Reveal>
  </section>
  <section className="bg-[#e9e8dd] px-5 py-20 sm:px-10 sm:py-28 lg:px-16" id="homestays">
   <div className="mx-auto max-w-[1400px]">
    <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-14"><div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#937148]">Stay a little longer</p><h2 className="mt-4 font-serif text-[clamp(3.2rem,7vw,7.4rem)] leading-[0.95] tracking-[-0.05em]">Our <em>homes.</em></h2></div><Link href="/stays" className="inline-flex items-center gap-2 border-b border-[#24362c] pb-2 text-sm font-semibold">View all homestays <ArrowUpRight size={17}/></Link></Reveal>
    <div className="grid gap-8 md:grid-cols-2 lg:gap-10">{stays.map((stay,i)=><Reveal key={stay.slug} className={i===1?"md:pt-20":""}><Link href={`/stays/${stay.slug}`} className="group block"><div className="relative aspect-[5/6] overflow-hidden rounded-t-[9rem] bg-[#9b9c86] sm:aspect-[4/5]"><PropertyImage slug={stay.slug} className="object-cover transition-transform duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-[#172d24]/55 via-transparent to-transparent"/><span className="absolute bottom-6 left-6 text-xs font-medium uppercase tracking-[0.22em] text-white">{stay.index} / Sunday Houses</span></div><div className="flex items-center justify-between gap-4 border-b border-[#24362c]/25 py-5"><div><h3 className="font-serif text-[clamp(2rem,3vw,3.4rem)] leading-tight">{stay.name}</h3><p className="mt-1 text-sm text-[#657166]">{stay.note}</p></div><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#24362c]/40 transition-colors group-hover:bg-[#24362c] group-hover:text-white"><ArrowUpRight size={21}/></span></div></Link></Reveal>)}</div>
   </div>
  </section>
  <section className="relative isolate min-h-[70svh] overflow-hidden bg-[#24362c] text-white"><Image src="/images/luxury/natural-view.webp" alt="Misty hills of the eastern Himalayas" fill sizes="100vw" className="object-cover"/><div className="absolute inset-0 bg-[#12291e]/55"/><div className="relative mx-auto flex min-h-[70svh] max-w-[1400px] flex-col justify-center px-5 py-24 sm:px-10 lg:px-16"><Reveal><p className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#f5dcb0]"><MapPin size={16}/> The destination · Nokdara</p><h2 className="mt-7 max-w-4xl font-serif text-[clamp(3.2rem,7.5vw,8rem)] leading-[0.98] tracking-[-0.055em]">Far from the noise. <em className="text-[#f6dca9]">Close to everything that matters.</em></h2><p className="mt-6 max-w-lg text-base leading-8 text-white/90">Discover the quieter side of Kalimpong, one winding trail and mountain morning at a time.</p><Link href="/nokdara" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#f4e6c9] px-7 py-3.5 text-sm font-semibold text-[#1b382e]">Discover Nokdara <ArrowUpRight size={17}/></Link></Reveal></div></section>
  <section className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-20 sm:px-10 sm:py-28 lg:grid-cols-2 lg:gap-24 lg:px-16"><Reveal><div className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem]"><Image src="/images/properties/chaaya-glades/prayer-room.webp" alt="Traditional Himalayan prayer room at Chaaya Glades" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover"/></div></Reveal><Reveal><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#937148]">Beyond the ordinary</p><h2 className="mt-5 font-serif text-[clamp(3rem,5vw,5.8rem)] leading-[1.02] tracking-[-0.045em]">A little closer to <em>the heart of the hills.</em></h2><p className="mt-6 max-w-lg text-base leading-8 text-[#536257]">Every home has a story. Explore the people, culture and everyday details that make Nokdara so memorable.</p><Link href="/our-story" className="mt-7 inline-flex items-center gap-2 border-b border-[#24362c] pb-2 text-sm font-semibold">Meet Sunday Houses <ArrowUpRight size={17}/></Link></Reveal></section>
  <section className="bg-[#263e32] px-5 py-20 text-center text-white sm:px-10 sm:py-28"><Reveal className="mx-auto max-w-4xl"><p className="text-xs uppercase tracking-[0.24em] text-[#f5dcb0]">Your home in the hills</p><h2 className="mt-5 font-serif text-[clamp(3.4rem,8vw,8rem)] leading-[0.95] tracking-[-0.05em]">Your next chapter <em className="text-[#f6dca9]">starts here.</em></h2><p className="mx-auto mt-7 max-w-lg text-base leading-8 text-white/80">A quiet weekend or a longer escape — we'll help you find your mountain home.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#f4e6c9] px-8 py-4 text-sm font-semibold text-[#1b382e]">Enquire about a stay <ArrowUpRight size={17}/></Link></Reveal></section>
 </main>;
}
