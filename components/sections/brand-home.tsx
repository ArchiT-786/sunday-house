"use client";
import PropertyImage from "@/components/shared/property-image";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Compass, MoveUpRight } from "lucide-react";
import MountainStory from "./mountain-story";

const properties = [
  { name: "Whistling House", slug: "whistling-house", image: "/images/hero.webp", label: "An intimate mountain escape", number: "01" },
  { name: "Chaaya Glades", slug: "chaaya-glades", image: "/images/our-story.jpg", label: "A sanctuary for slower days", number: "02" },
];
function Reveal({children,className=""}:{children:React.ReactNode;className?:string}){
 const reduce=useReducedMotion();
 return <motion.div initial={reduce?false:{opacity:0,y:64}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.12}}
  transition={{duration:0.95,ease:[0.22,1,0.36,1]}} className={className}>{children}</motion.div>;
}
export default function BrandHome(){
 return <main className="overflow-hidden bg-[#eee9df]">
  <MountainStory/>
  <section className="relative bg-[#eee9df] px-6 py-32 text-[#172f32] md:py-48 lg:px-12">
   <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
    <Reveal><div className="flex items-center gap-4"><span className="h-px w-12 bg-[#a87850]"/><p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#a87850]">The Sunday Houses philosophy</p></div>
      <p className="mt-12 max-w-sm text-lg leading-9 text-[#506365]">Curated escapes where the landscape sets the rhythm and every stay feels personal.</p>
      <div className="mt-14 flex h-32 w-32 items-center justify-center rounded-full border border-[#a87850]/50"><Compass className="h-10 w-10 text-[#a87850]"/></div>
    </Reveal>
    <Reveal><h2 className="font-heading text-[clamp(3.4rem,7vw,7.7rem)] leading-[1.02] tracking-[-0.06em]">We believe<br/>in <span className="font-serif font-normal italic text-[#9d704e]">getting lost</span><br/>in the moment.</h2>
      <p className="mt-10 max-w-xl text-lg leading-9 text-[#506365]">Not another hotel chain. A thoughtful collection of mountain homes, each with its own story, sense of place, and warm welcome. Our journey begins in Nokdara, Kalimpong.</p>
      <Link href="/our-story" className="group mt-10 inline-flex items-center gap-3 border-b border-[#172f32] pb-2 text-sm font-semibold uppercase tracking-[0.13em]">The story behind Sunday Houses <MoveUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></Link>
    </Reveal>
   </div>
  </section>
  <section className="bg-[#122a2f] px-6 py-32 text-[#f4eee4] md:py-40 lg:px-12" id="homestays">
   <div className="mx-auto max-w-7xl">
    <Reveal className="mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end">
     <div><p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#caa579]">The collection · Nokdara</p>
      <h2 className="mt-7 font-heading text-[clamp(3.7rem,7.5vw,8rem)] leading-[0.98] tracking-[-0.055em]">Find your<br/><span className="font-serif font-normal italic text-[#d6b58d]">kind of quiet.</span></h2></div>
     <div className="max-w-sm"><p className="text-base leading-8 text-[#d5d9d4]/75">Two individual mountain homes, near Gumbadhara Monastery in the Kalimpong hills.</p>
      <Link href="/stays" className="mt-6 inline-flex items-center gap-3 text-sm font-medium text-[#e4c7a2]">Discover the full collection <ArrowUpRight className="h-4 w-4"/></Link></div>
    </Reveal>
    <div className="grid gap-16 md:grid-cols-2 md:gap-8">
     {properties.map((item,i)=><Reveal key={item.slug} className={i===1?"md:mt-36":""}>
      <Link href={`/stays/${item.slug}`} className="group block">
       <div className="relative aspect-[3/4] overflow-hidden bg-[#2c4547]">
        <PropertyImage slug={item.slug as "whistling-house" | "chaaya-glades"} className="object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-110"/>
        <div className="absolute inset-0 bg-gradient-to-t from-[#061c23]/65 via-transparent to-transparent"/>
        <span className="absolute left-7 top-7 text-xs uppercase tracking-[0.3em] text-white">{item.number} / Sunday Houses</span>
        <div className="absolute bottom-8 left-8 right-8"><p className="text-xs uppercase tracking-[0.22em] text-white/80">{item.label}</p>
         <h3 className="mt-3 font-heading text-[clamp(2.5rem,4vw,4.8rem)] leading-tight text-white">{item.name}</h3></div>
       </div>
       <div className="mt-6 flex items-center justify-between border-b border-white/20 pb-5 text-sm uppercase tracking-[0.12em] text-[#e9e5da]"><span>Explore the property</span><ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></div>
      </Link>
     </Reveal>)}
    </div>
   </div>
  </section>
  <section className="relative isolate min-h-[85vh] overflow-hidden bg-[#213a3b] text-white">
   <Image src="/images/luxury/natural-view.webp" fill sizes="100vw" alt="Eastern Himalayan landscape" className="object-cover"/>
   <div className="absolute inset-0 bg-gradient-to-r from-[#081e23]/90 via-[#081e23]/55 to-[#081e23]/15"/>
   <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-6 py-28 lg:px-12">
    <Reveal><p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#e6c39c]">The destination · Nokdara</p>
     <h2 className="mt-8 max-w-5xl font-heading text-[clamp(3.6rem,8vw,8rem)] leading-[0.99] tracking-[-0.055em]">The beauty of<br/><span className="font-serif font-normal italic text-[#f0d5b2]">nowhere to be.</span></h2>
     <p className="mt-8 max-w-lg text-lg leading-9 text-white/80">Quiet village trails. Misty mornings. The simple luxury of time. Discover a different side of the Kalimpong hills.</p>
     <Link href="/nokdara" className="mt-9 w-fit rounded-full border border-white/60 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#122a2f]">Explore Nokdara ↗</Link>
    </Reveal>
   </div>
  </section>
  <section className="bg-[#eee9df] px-6 py-36 text-center text-[#172f32] md:py-48">
   <Reveal className="mx-auto max-w-5xl"><p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#a87850]">An invitation to slow down</p>
    <h2 className="mt-8 font-heading text-[clamp(3.4rem,8vw,8rem)] leading-[1.02] tracking-[-0.06em]">The next chapter<br/><span className="font-serif font-normal italic text-[#9d704e]">is yours.</span></h2>
    <p className="mx-auto mt-8 max-w-lg text-lg leading-8 text-[#506365]">Let's find the mountain home that feels right for you.</p>
    <Link href="/contact" className="mt-10 inline-block rounded-full bg-[#172f32] px-9 py-4 text-sm font-medium text-[#f4eee4] transition-transform hover:-translate-y-1">Plan your stay ↗</Link>
   </Reveal>
  </section>
 </main>;
}
