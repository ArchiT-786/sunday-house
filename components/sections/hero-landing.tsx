"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroLanding() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallax = Math.min(scrollY * 0.18, 120);
  const contentParallax = Math.min(scrollY * 0.08, 45);

  return (
    <section className="relative min-h-[calc(100svh-64px)] overflow-hidden bg-[#182b25] text-white">
      {/* ─────────────────────────────────────────
          BACKGROUND IMAGE
      ───────────────────────────────────────── */}

      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero.webp"
          alt="Sunday House surrounded by the mountains of Rishop"
          fill
          priority
          sizes="100vw"
          className="scale-[1.08] object-cover"
          style={{
            transform: `translate3d(0, ${parallax}px, 0) scale(1.08)`,
          }}
        />

        {/* Cinematic color treatment */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      </div>

      {/* ─────────────────────────────────────────
          TOP LOCATION
      ───────────────────────────────────────── */}

      <div className="absolute left-5 top-7 z-10 sm:left-8 sm:top-9 lg:left-10">
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-white/60" />

          <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-white/65 sm:text-[9px]">
            Rishop · West Bengal
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────
          HERO CONTENT
      ───────────────────────────────────────── */}

      <div
        className="relative z-10 mx-auto flex min-h-[calc(100svh-64px)] max-w-[1440px] items-end px-5 pb-12 pt-28 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20"
        style={{
          transform: `translate3d(0, ${contentParallax}px, 0)`,
        }}
      >
        <div className="w-full">
          <div className="max-w-6xl">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-white/55">
                Sunday House
              </span>

              <span className="h-px w-10 bg-white/25" />

              <span className="text-[8px] uppercase tracking-[0.25em] text-white/40">
                A mountain stay
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[1100px] font-heading text-[3.7rem] font-medium leading-[0.84] tracking-[-0.065em] text-white sm:text-6xl md:text-7xl lg:text-[7.2rem]">
              Wake up
              <br />
              <span className="font-serif font-normal italic tracking-[-0.055em] text-white/90">
                above the clouds.
              </span>
            </h1>

            {/* Supporting content */}
            <div className="mt-7 flex flex-col gap-7 sm:mt-8 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-md text-[12px] leading-6 text-white/65 sm:text-sm">
                A quiet hideaway in the hills of Rishop,
                surrounded by pine forests, mountain air,
                and the slower rhythm of life in the Himalayas.
              </p>

              <div className="flex flex-wrap gap-2.5 lg:pb-1">
                <Link
                  href="/stays"
                  className="
                    group
                    inline-flex
                    h-11
                    items-center
                    gap-3
                    rounded-full
                    bg-white
                    px-5
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-primary
                    transition-all
                    duration-500
                    hover:-translate-y-0.5
                    hover:bg-[#f4f0e7]
                  "
                >
                  <span>Stay at Sunday House</span>

                  <span className="flex size-6 items-center justify-center rounded-full bg-primary text-white transition-transform duration-500 group-hover:translate-x-0.5">
                    <ArrowUpRight className="size-3" />
                  </span>
                </Link>

                <Link
                  href="/rishop"
                  className="
                    inline-flex
                    h-11
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/25
                    bg-black/10
                    px-5
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-white/90
                    backdrop-blur-md
                    transition-all
                    duration-500
                    hover:border-white/50
                    hover:bg-white/10
                  "
                >
                  Explore Rishop
                  <ArrowDown className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────
              BOTTOM META
          ───────────────────────────────────── */}

          <div className="mt-10 flex items-center justify-between border-t border-white/15 pt-4 lg:mt-12">
            <div className="flex items-center gap-5">
              <span className="text-[8px] uppercase tracking-[0.25em] text-white/40">
                27.00° N
              </span>

              <span className="hidden h-3 w-px bg-white/20 sm:block" />

              <span className="hidden text-[8px] uppercase tracking-[0.25em] text-white/40 sm:block">
                Eastern Himalayas
              </span>
            </div>

            <span className="text-[8px] uppercase tracking-[0.25em] text-white/40">
              Est. Rishop
            </span>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────
          SCROLL CUE
      ───────────────────────────────────────── */}

      <div className="absolute bottom-8 right-6 z-20 hidden flex-col items-center gap-3 md:flex lg:right-10">
        <span className="[writing-mode:vertical-rl] text-[8px] font-medium uppercase tracking-[0.3em] text-white/50">
          Explore
        </span>

        <span className="relative h-14 w-px overflow-hidden bg-white/15">
          <span className="absolute left-0 top-0 h-5 w-px animate-pulse bg-white/70" />
        </span>
      </div>

      {/* Subtle bottom vignette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  );
}