import Image from "next/image";

export default function AmenitiesSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
      <div className="homestay-container">
        {/* ─────────────────────────────────────────
            EDITORIAL INTRO
        ───────────────────────────────────────── */}

        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-accent/60" />

                <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-accent">
                  Your hideaway in nature
                </p>
              </div>

              <h2 className="text-balance font-heading text-[2.75rem] font-medium leading-[0.95] tracking-[-0.055em] text-primary sm:text-5xl lg:text-[4.5rem]">
                Everything you need.
                <br />
                <span className="font-serif font-normal italic tracking-[-0.035em] text-primary/80">
                  Nothing you don't.
                </span>
              </h2>
            </div>

            <p className="max-w-xs pb-1 text-[11px] leading-5 text-muted-foreground lg:text-right">
              Thoughtful comforts, warm textures, and spaces designed
              for slower days in the mountains.
            </p>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            HERO IMAGE
        ───────────────────────────────────────── */}

        <div className="relative mx-auto mt-10 max-w-6xl sm:mt-12 lg:mt-14">
          <div className="group relative aspect-[16/8.5] overflow-hidden rounded-[4px] bg-muted">
            <Image
              src="/images/amenities/interior.webp"
              alt="Interior of Alaya"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="
                object-cover
                transition-transform
                duration-[1800ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-[1.025]
              "
            />

            {/* Cinematic overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5" />

            {/* Top hairline */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/30" />

            {/* Image information */}
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between sm:inset-x-7 sm:bottom-7">
              <div>
                <p className="text-[8px] font-medium uppercase tracking-[0.25em] text-white/60">
                  The living space
                </p>

                <p className="mt-1 text-sm font-medium tracking-[-0.01em] text-white sm:text-base">
                  Warm, quiet, considered.
                </p>
              </div>

              <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/50 sm:block">
                01 / 03
              </span>
            </div>
          </div>

          {/* ─────────────────────────────────────
              FLOATING DETAIL IMAGE
          ───────────────────────────────────── */}

          <div
            className="
              absolute
              -bottom-8
              right-5
              hidden
              aspect-[3/4]
              w-28
              overflow-hidden
              border-[6px]
              border-background
              shadow-[0_20px_50px_rgba(35,72,58,0.18)]
              md:block
              lg:right-12
              lg:w-36
          "
          >
            <Image
              src="/images/amenities/fireplace.jpg"
              alt="Cosy fireplace at Alaya"
              fill
              sizes="144px"
              className="
                object-cover
                transition-transform
                duration-1000
                ease-out
                hover:scale-105
              "
            />

            <div className="pointer-events-none absolute inset-0 bg-black/5" />
          </div>
        </div>

        {/* ─────────────────────────────────────────
            AMENITY DETAILS
        ───────────────────────────────────────── */}

        <div className="mx-auto mt-12 max-w-6xl border-t border-primary/10 pt-6 sm:mt-14">
          <div className="grid grid-cols-2 gap-y-7 sm:grid-cols-4 sm:gap-0">
            <div className="sm:border-r sm:border-primary/10 sm:px-6 first:sm:pl-0">
              <p className="text-[8px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Kitchen
              </p>

              <p className="mt-1.5 text-sm font-medium tracking-tight text-primary">
                Fully equipped
              </p>
            </div>

            <div className="sm:border-r sm:border-primary/10 sm:px-6">
              <p className="text-[8px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Evenings
              </p>

              <p className="mt-1.5 text-sm font-medium tracking-tight text-primary">
                Cosy fireplace
              </p>
            </div>

            <div className="sm:border-r sm:border-primary/10 sm:px-6">
              <p className="text-[8px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Outdoors
              </p>

              <p className="mt-1.5 text-sm font-medium tracking-tight text-primary">
                Private deck
              </p>
            </div>

            <div className="sm:px-6 sm:pr-0">
              <p className="text-[8px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Atmosphere
              </p>

              <p className="mt-1.5 text-sm font-medium tracking-tight text-primary">
                Mountain views
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
