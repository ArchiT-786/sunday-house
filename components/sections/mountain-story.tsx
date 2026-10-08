"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

const ridges = [
  { d: "M0 800 L0 500 140 390 245 460 380 220 495 390 625 150 750 340 860 260 1050 450 1200 340 1440 540 1600 410 1600 800Z", color: "#c9d9df", depth: -200 },
  { d: "M0 800 L0 610 185 480 320 570 510 290 630 440 810 240 990 520 1140 370 1350 550 1600 460 1600 800Z", color: "#77949a", depth: 0 },
  { d: "M0 800 L0 650 180 560 350 650 540 410 700 590 875 370 1060 640 1250 490 1430 650 1600 580 1600 800Z", color: "#365b60", depth: 180 },
  { d: "M0 800 L0 750 250 610 410 720 670 560 890 730 1120 580 1390 740 1600 620 1600 800Z", color: "#142f37", depth: 340 },
];
export default function MountainStory() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 85, damping: 26, mass: 0.55 });
  const cameraRotation = useTransform(smooth, [0, 0.45, 1], [0, reduced ? 0 : -13, reduced ? 0 : 17]);
  const cameraY = useTransform(smooth, [0, 1], [0, reduced ? 0 : 150]);
  const cameraScale = useTransform(smooth, [0, 1], [1, reduced ? 1 : 1.6]);
  const first = useTransform(smooth, [0, 0.17, 0.29], [1, 1, 0]);
  const second = useTransform(smooth, [0.28, 0.43, 0.57], [0, 1, 0]);
  const third = useTransform(smooth, [0.59, 0.76, 1], [0, 1, 1]);
  return (
    <section ref={ref} className="relative h-[350vh] bg-[#071b26] text-white" aria-label="Sunday Houses mountain journey">
      <div className="sticky top-0 isolate h-screen overflow-hidden" style={{ perspective: "900px" }}>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#071b26_0%,#285567_48%,#d1bba1_100%)]" />
        <div className="absolute left-[68%] top-[19%] h-28 w-28 rounded-full bg-[#fff0d1] opacity-80 blur-[3px] shadow-[0_0_130px_60px_rgba(255,219,170,0.18)]" />
        <motion.div aria-hidden="true" className="absolute inset-[-20%] origin-center" style={{
          rotateY: cameraRotation, y: cameraY, scale: cameraScale,
          transformStyle: "preserve-3d", willChange: "transform"
        }}>
          {ridges.map((ridge, index) => (
            <div key={index} className="absolute inset-0" style={{
              transform: `translateZ(${ridge.depth}px)`,
              transformStyle: "preserve-3d"
            }}>
              <svg className="h-full w-full" viewBox="0 0 1600 800" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
                <path d={ridge.d} fill={ridge.color}/>
                {index < 2 && <path d="M380 220 345 289 379 271 410 308 428 282 380 220 M625 150 584 249 626 225 671 285 696 247 625 150 M810 240 770 323 810 304 842 336 864 315 810 240" fill="#f4f3e8" opacity={index === 0 ? 0.95 : 0.35}/>}
              </svg>
            </div>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#06131a]/40 via-transparent to-[#06131a]/70"/>
        <motion.div style={{ opacity: first }} className="absolute inset-0 flex items-center px-6 md:px-16">
          <div className="mx-auto w-full max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#f4d9ad]">Sunday Houses · The Himalayan collection</p>
            <h1 className="mt-7 max-w-5xl font-heading text-[clamp(3.5rem,9vw,9rem)] leading-[0.93] tracking-[-0.06em]">The mountains<br/><span className="font-serif font-normal italic text-[#f6dfbd]">are calling.</span></h1>
            <p className="mt-8 max-w-lg text-base leading-8 text-white/85">Beautifully personal mountain stays. Thoughtful journeys. A feeling you'll carry home.</p>
            <Link href="/stays" className="mt-9 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#17362e]">Explore the collection ↗</Link>
          </div>
        </motion.div>
        <motion.div style={{ opacity: second }} className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.32em] text-[#f4d9ad]">Move with the mountains</p>
            <h2 className="mt-7 font-heading text-[clamp(3.2rem,7vw,7rem)] leading-[1.02]">Not just a stay.<br/><span className="font-serif italic text-[#f6dfbd]">A different pace.</span></h2>
            <p className="mx-auto mt-7 max-w-xl leading-8 text-white/85">Leave the rush behind. Follow quiet trails, wake up slowly, and make room for the moments that matter.</p>
          </div>
        </motion.div>
        <motion.div style={{ opacity: third }} className="pointer-events-none absolute inset-0 flex items-end px-6 pb-24 md:px-16 md:pb-32">
          <div className="mx-auto w-full max-w-7xl">
            <p className="text-xs uppercase tracking-[0.32em] text-[#f4d9ad]">Nokdara · Kalimpong</p>
            <h2 className="mt-6 max-w-5xl font-heading text-[clamp(3.2rem,7.5vw,7.5rem)] leading-[0.98]">Two beautiful homes.<br/><span className="font-serif italic text-[#f6dfbd]">One warm welcome.</span></h2>
            <p className="mt-7 max-w-xl leading-8 text-white/85">Whistling House and Chaaya Glades. Your first invitation into the Sunday Houses collection.</p>
          </div>
        </motion.div>
        <div className="absolute bottom-7 right-7 text-[10px] uppercase tracking-[0.3em] text-white/75">Scroll to discover ↓</div>
      </div>
    </section>
  );
}
