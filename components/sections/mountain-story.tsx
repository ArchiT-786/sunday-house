"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function MountainStory() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const rotation = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 17]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, reduce ? 1.12 : 1.7]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-14%"]);
  const opacityFirst = useTransform(scrollYProgress, [0, 0.16, 0.31], [1, 1, 0]);
  const opacitySecond = useTransform(scrollYProgress, [0.29, 0.42, 0.62], [0, 1, 0]);
  const opacityThird = useTransform(scrollYProgress, [0.6, 0.77, 0.96], [0, 1, 1]);
  return <section ref={ref} className="relative h-[320vh] bg-[#101e23] text-white" aria-label="Discover Sunday Houses">
    <div className="sticky top-0 h-screen overflow-hidden">
      <motion.div style={{ rotate: rotation, scale, x }} className="absolute inset-[-12%] will-change-transform">
        <Image src="/images/hero.webp" alt="Cinematic Himalayan mountain scenery" fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#071a20]/80 via-[#0a1d23]/35 to-[#071a20]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071a20]/85 via-transparent to-[#071a20]/25" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#101e23] to-transparent" />
      <motion.div style={{ opacity: opacityFirst }} className="absolute inset-0 flex items-center px-6 md:px-16">
        <div className="mx-auto w-full max-w-7xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">Sunday Houses · Curated mountain escapes</p>
          <h1 className="max-w-5xl font-heading text-[clamp(3.5rem,9vw,9rem)] leading-[0.92] tracking-[-0.06em]">Find your<br/><span className="font-serif font-normal italic text-amber-100">mountain moment.</span></h1>
          <p className="mt-8 max-w-lg text-base leading-8 text-white/75">More than a room. A collection of places to pause, explore and feel at home in the Eastern Himalayas.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/stays" className="rounded-full bg-white px-7 py-3 text-sm font-medium text-[#18362c]">Explore our homestays <ArrowUpRight className="ml-2 inline h-4 w-4"/></Link>
            <Link href="/our-story" className="rounded-full border border-white/40 px-7 py-3 text-sm text-white">Our philosophy</Link>
          </div>
        </div>
      </motion.div>
      <motion.div style={{ opacity: opacitySecond }} className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl"><p className="mb-6 text-xs uppercase tracking-[0.35em] text-amber-200">A different kind of travel</p>
          <h2 className="font-heading text-[clamp(3rem,7vw,7rem)] leading-[1.02] tracking-tight">Let the mountains<br/><span className="font-serif italic text-amber-100">set the pace.</span></h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-white/80">Slow mornings, warm welcomes, village trails and the freedom to explore on your own terms.</p>
        </div>
      </motion.div>
      <motion.div style={{ opacity: opacityThird }} className="pointer-events-none absolute inset-0 flex items-end px-6 pb-28 md:px-16 md:pb-32">
        <div className="mx-auto w-full max-w-7xl"><p className="mb-5 text-xs uppercase tracking-[0.3em] text-amber-200">Our first destination · Nokdara</p>
          <h2 className="max-w-4xl font-heading text-[clamp(3.2rem,8vw,8rem)] leading-[0.95] tracking-tight">Two homes.<br/><span className="font-serif italic text-amber-100">Endless horizons.</span></h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-white/80">Discover Whistling House and Chaaya Glades in the Kalimpong hills.</p>
        </div>
      </motion.div>
      <div className="absolute bottom-8 right-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/60"><ArrowDownRight className="h-4 w-4"/> Scroll to explore</div>
    </div>
  </section>;
}
