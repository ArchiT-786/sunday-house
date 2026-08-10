"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

const ReactPhotoSphereViewer = dynamic(
  () =>
    import("react-photo-sphere-viewer").then(
      (mod) => mod.ReactPhotoSphereViewer,
    ),
  {
    ssr: false,
  },
);

export default function VirtualTourSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
        <div className="homestay-container">
          {/* ─────────────────────────────────────────
              HEADER
          ───────────────────────────────────────── */}

          <div className="flex items-end justify-between gap-8">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-accent/60" />

                <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-accent">
                  Virtual tour
                </span>
              </div>

              <h2 className="font-heading text-[2.8rem] font-medium leading-[0.92] tracking-[-0.055em] text-primary sm:text-5xl lg:text-[4.4rem]">
                No surprises.
                <br />
                <span className="font-serif font-normal italic tracking-[-0.04em] text-primary/70">
                  Just arrive.
                </span>
              </h2>
            </div>

            <p className="hidden max-w-[210px] pb-1 text-right text-[11px] leading-5 text-muted-foreground sm:block">
              Step inside before you arrive.
              <br />
              Explore the cabin in 360°.
            </p>
          </div>

          {/* ─────────────────────────────────────────
              TOUR IMAGE
          ───────────────────────────────────────── */}

          <div className="group relative mt-9 overflow-hidden bg-muted sm:mt-11">
            <div className="relative aspect-[1.65] sm:aspect-[2.15]">
              <Image
                src="/images/virtual-tour.webp"
                alt="Interior of Sunday House cabin"
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="
                  object-cover
                  transition-transform
                  duration-[1800ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:scale-[1.025]
                "
              />

              {/* Cinematic treatment */}
              <div className="pointer-events-none absolute inset-0 bg-black/10" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />

              {/* Top hairline */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/30" />

              {/* ─────────────────────────────────────
                  360 BUTTON
              ───────────────────────────────────── */}

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open 360 degree virtual tour"
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  size-[76px]
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/50
                  bg-black/10
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-700
                  hover:scale-110
                  hover:border-white/80
                  hover:bg-white/10
                "
              >
                <div className="flex flex-col items-center">
                  <span className="text-sm font-medium tracking-[-0.03em]">
                    360°
                  </span>

                  <span className="mt-0.5 text-[7px] uppercase tracking-[0.2em] text-white/60">
                    Explore
                  </span>
                </div>
              </button>

              {/* ─────────────────────────────────────
                  BOTTOM INFORMATION
              ───────────────────────────────────── */}

              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between sm:inset-x-7 sm:bottom-7">
                <div>
                  <p className="text-[8px] font-medium uppercase tracking-[0.25em] text-white/55">
                    Inside Sunday House
                  </p>

                  <p className="mt-1 text-sm font-medium text-white/90 sm:text-base">
                    Take a look around.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="
                    group hidden
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/25
                    bg-black/15
                    px-4
                    py-2.5
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-white/90
                    backdrop-blur-md
                    transition-all
                    duration-500
                    hover:border-white/50
                    hover:bg-white/10
                    sm:flex
                  "
                >
                  Explore virtually

                  <span className="flex size-5 items-center justify-center rounded-full bg-white/10">
                    <ArrowUpRight className="size-2.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────
              FOOTER META
          ───────────────────────────────────────── */}

          <div className="mt-4 flex items-center justify-between border-t border-primary/10 pt-4">
            <p className="text-[8px] uppercase tracking-[0.24em] text-muted-foreground">
              360° virtual experience
            </p>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-primary/60
                transition-colors
                hover:text-primary
                sm:hidden
              "
            >
              Open tour →
            </button>

            <span className="hidden text-[8px] uppercase tracking-[0.24em] text-muted-foreground sm:block">
              Drag · Look · Explore
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          FULLSCREEN 360° VIEWER
      ───────────────────────────────────────── */}

      {open && (
        <div className="fixed inset-0 z-[100] bg-black">
          {/* Close */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close virtual tour"
            className="
              absolute
              right-5
              top-5
              z-[110]
              flex
              size-11
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-black/40
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-white/35
              hover:bg-black/60
            "
          >
            <X className="size-4" />
          </button>

          {/* Viewer */}
          <div className="h-full w-full">
            <ReactPhotoSphereViewer
              src="/images/virtual-tour.webp"
              height="100vh"
              width="100%"
              navbar={["zoom", "fullscreen"]}
            />
          </div>

          {/* Viewer instruction */}
          <div className="pointer-events-none absolute bottom-6 left-1/2 z-[110] -translate-x-1/2">
            <div className="rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-md">
              <span className="text-[8px] font-medium uppercase tracking-[0.24em] text-white/60">
                Drag to explore
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}