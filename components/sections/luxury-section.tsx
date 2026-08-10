import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function LuxurySection() {
  return (
    <section className="relative overflow-hidden bg-[#1f3932] py-16 text-white sm:py-20 lg:py-24">
      <div className="homestay-container">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* ─────────────────────────────────────────
              IMAGE COMPOSITION
          ───────────────────────────────────────── */}

          <div className="relative">
            <div className="group relative aspect-[1.15] overflow-hidden bg-black/10 sm:aspect-[1.3]">
              <Image
                src="/images/luxury/main.webp"
                alt="Luxury interior at Sunday House"
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="
                  object-cover
                  transition-transform
                  duration-[1800ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:scale-[1.035]
                "
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-white/65">
                  The house
                </span>
              </div>

              <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                <p className="text-[8px] font-medium uppercase tracking-[0.25em] text-white/55">
                  Quiet luxury
                </p>

                <p className="mt-1 text-sm font-medium text-white">
                  Made for slower days.
                </p>
              </div>
            </div>

            {/* Floating secondary image */}
            <div className="absolute -bottom-7 right-5 hidden aspect-[1.25] w-36 overflow-hidden border-[5px] border-[#1f3932] shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:block lg:right-8 lg:w-40">
              <Image
                src="/images/luxury/lounge.webp"
                alt="Sunday House lounge"
                fill
                sizes="160px"
                className="
                  object-cover
                  transition-transform
                  duration-1000
                  hover:scale-105
                "
              />
            </div>

            {/* Small editorial marker */}
            <div className="absolute -bottom-8 left-0 hidden sm:block">
              <span className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                03 / 04
              </span>
            </div>
          </div>

          {/* ─────────────────────────────────────────
              CONTENT
          ───────────────────────────────────────── */}

          <div className="lg:pl-2">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c68a6d]" />

              <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/55">
                Serenity awaits
              </p>
            </div>

            <h2 className="max-w-xl font-heading text-[2.8rem] font-medium leading-[0.92] tracking-[-0.055em] sm:text-5xl lg:text-[4.25rem]">
              Luxury that
              <br />
              <span className="font-serif font-normal italic tracking-[-0.04em] text-white/80">
                feels effortless.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-[13px] leading-6 text-white/60 sm:text-sm">
              A private retreat surrounded by the natural beauty of
              the Himalayas — warm interiors, quiet corners, and
              uninterrupted mountain views.
            </p>

            <p className="mt-4 max-w-md text-[12px] leading-6 text-white/40">
              Wake to the light over the hills, linger over breakfast,
              and let the afternoon disappear into the landscape.
            </p>

            {/* Detail strip */}
            <div className="mt-8 grid max-w-md grid-cols-3 border-y border-white/10 py-4">
              <div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/35">
                  Views
                </p>
                <p className="mt-1.5 text-xs font-medium text-white/80">
                  Mountains
                </p>
              </div>

              <div className="border-l border-white/10 pl-4">
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/35">
                  Setting
                </p>
                <p className="mt-1.5 text-xs font-medium text-white/80">
                  Private
                </p>
              </div>

              <div className="border-l border-white/10 pl-4">
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/35">
                  Mood
                </p>
                <p className="mt-1.5 text-xs font-medium text-white/80">
                  Unhurried
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/stays"
              className="
                group
                mt-7
                inline-flex
                h-11
                items-center
                gap-3
                rounded-full
                border
                border-white/20
                bg-white
                px-5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-[#1f3932]
                transition-all
                duration-500
                hover:-translate-y-0.5
                hover:bg-[#f4f0e7]
              "
            >
              <span>Explore your cabin</span>

              <span className="flex size-6 items-center justify-center rounded-full bg-[#1f3932] text-white transition-transform duration-500 group-hover:translate-x-0.5">
                <ArrowUpRight className="size-3" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle atmospheric glow */}
      <div className="pointer-events-none absolute -right-32 top-1/3 size-96 rounded-full bg-[#9caf8d]/[0.06] blur-3xl" />
    </section>
  );
}