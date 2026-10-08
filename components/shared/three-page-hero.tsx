"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { MountainScene } from "@/components/sections/mountain-story";

type Props = {
 eyebrow: string;
 title: string;
 accent: string;
 description: string;
 height?: string;
};
export default function ThreePageHero({ eyebrow, title, accent, description, height = "min-h-[82svh]" }: Props) {
 const ref = useRef<HTMLElement>(null);
 const progress = useRef(0);
 const reduce = useReducedMotion();
 const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
 const smooth = useSpring(scrollYProgress, { stiffness: 75, damping: 25 });
 useEffect(() => smooth.on("change", v => { progress.current = reduce ? 0 : Math.min(1,v*0.8); }), [smooth, reduce]);
 const textY = useTransform(smooth, [0,1], ["0%", "-22%"]);
 const textOpacity = useTransform(smooth,[0,0.65,1],[1,1,0]);
 return <section ref={ref} className={`relative isolate flex items-end overflow-hidden bg-[#102c36] px-6 pb-16 pt-28 text-[#f5eee5] md:px-12 md:pb-24 ${height}`}>
  <MountainScene progress={progress}/>
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071920]/95 via-[#071920]/45 to-[#071920]/10"/>
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071920]/45 via-transparent to-transparent"/>
  <motion.div style={{y:textY,opacity:textOpacity}} className="relative mx-auto w-full max-w-7xl">
   <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.36em] text-[#e5c4a0]">{eyebrow}</p>
   <h1 className="max-w-6xl font-heading text-[clamp(3.4rem,8vw,8.5rem)] leading-[0.95] tracking-[-0.055em]">{title}<br/><span className="font-serif font-normal italic text-[#f0d1a7]">{accent}</span></h1>
   <p className="mt-8 max-w-xl text-base leading-8 text-white/85 md:text-lg">{description}</p>
  </motion.div>
  <div className="pointer-events-none absolute bottom-5 right-6 text-[10px] uppercase tracking-[0.2em] text-white/60">3D mountain journey · Scroll ↓</div>
 </section>;
}
