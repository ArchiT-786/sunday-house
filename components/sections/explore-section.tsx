import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ExploreSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
      <div className="homestay-container">
        {/* ─────────────────────────────────────────
            EDITORIAL HEADER
        ───────────────────────────────────────── */}

        <div className="grid items-end gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent/60" />

              <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-accent">
                Explore Rishop
              </span>
            </div>
          </div>

          <h2 className="max-w-4xl font-heading text-[2.8rem] font-medium leading-[0.92] tracking-[-0.055em] text-primary sm:text-5xl lg:text-[5rem]">
            A little further from
            <br />
            <span className="font-serif font-normal italic tracking-[-0.04em] text-primary/75">
              everything ordinary.
            </span>
          </h2>
        </div>

        {/* ─────────────────────────────────────────
            IMAGE + STORY
        ───────────────────────────────────────── */}

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-14">
          {/* Image */}
          <div className="group relative">
            {/* Offset frame */}
            <div className="absolute -bottom-3 -left-3 h-full w-full border border-primary/10" />

            <div className="relative aspect-[1.2] overflow-hidden bg-muted sm:aspect-[1.45]">
              <Image
                src="/images/rishop-surroundings.jpeg"
                alt="Mountain landscape surrounding Rishop"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="
                  object-cover
                  transition-transform
                  duration-[1800ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:scale-[1.035]
                "
              />

              {/* Cinematic treatment */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />

              {/* Location */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3 sm:bottom-7 sm:left-7">
                <span className="h-px w-6 bg-white/60" />

                <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-white/80">
                  Rishop · West Bengal
                </span>
              </div>

              {/* Image index */}
              <span className="absolute right-5 top-5 text-[8px] tracking-[0.2em] text-white/60">
                02 / 04
              </span>
            </div>
          </div>

          {/* Story */}
          <div className="lg:pb-2">
            <p className="max-w-md text-[15px] leading-7 tracking-[-0.01em] text-primary/80">
              Sunday House sits quietly in Rishop — a small hill
              village surrounded by pine forests, mountain trails,
              and wide-open views of the eastern Himalayas.
            </p>

            <p className="mt-5 max-w-md text-[12px] leading-6 text-muted-foreground">
              Walk through the forest, discover a viewpoint, breathe
              in the mountain air, or simply stay still and let the
              landscape set the pace.
            </p>

            {/* Nature detail */}
            <div className="mt-8 border-y border-primary/10 py-5">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-[8px] font-medium uppercase tracking-[0.22em] text-accent">
                    The setting
                  </p>

                  <p className="mt-2 text-sm font-medium tracking-tight text-primary">
                    Forest paths. Mountain air. Slow mornings.
                  </p>
                </div>

                <span className="hidden size-9 shrink-0 items-center justify-center rounded-full border border-primary/15 sm:flex">
                  <span className="text-sm text-primary/70">⌁</span>
                </span>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/rishop"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-3
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-primary
              "
            >
              <span className="relative">
                Discover the area

                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-primary/30 transition-transform duration-500 group-hover:scale-x-0" />
              </span>

              <span className="flex size-7 items-center justify-center rounded-full border border-primary/15 transition-all duration-500 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowUpRight className="size-3" />
              </span>
            </Link>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            MICRO DETAILS
        ───────────────────────────────────────── */}

        <div className="mt-12 grid grid-cols-3 border-t border-primary/10 pt-5 sm:mt-16 sm:grid-cols-3">
          <div>
            <p className="text-[8px] uppercase tracking-[0.2em] text-muted-foreground">
              Setting
            </p>
            <p className="mt-1.5 text-xs font-medium text-primary">
              Himalayan foothills
            </p>
          </div>

          <div className="border-l border-primary/10 pl-5 sm:pl-8">
            <p className="text-[8px] uppercase tracking-[0.2em] text-muted-foreground">
              Atmosphere
            </p>
            <p className="mt-1.5 text-xs font-medium text-primary">
              Quiet & unhurried
            </p>
          </div>

          <div className="border-l border-primary/10 pl-5 sm:pl-8">
            <p className="text-[8px] uppercase tracking-[0.2em] text-muted-foreground">
              Surroundings
            </p>
            <p className="mt-1.5 text-xs font-medium text-primary">
              Forest & mountain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}