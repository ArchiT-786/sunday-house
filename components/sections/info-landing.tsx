import Image from "next/image";
import { InfoLdg } from "@/types";

import { cn } from "@/lib/utils";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

interface InfoLandingProps {
  data: InfoLdg;
  reverse?: boolean;
}

export default function InfoLanding({
  data,
  reverse = false,
}: InfoLandingProps) {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
      <MaxWidthWrapper
        className={cn(
          "grid items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-10",
          reverse && "lg:grid-cols-[1.15fr_0.85fr]",
        )}
      >
        {/* ─────────────────────────────────────────
            CONTENT
        ───────────────────────────────────────── */}

        <div
          className={cn(
            "relative z-10",
            reverse ? "lg:order-2" : "lg:order-1",
          )}
        >
          {/* Editorial eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-accent/60" />

            <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-accent">
              The Alaya experience
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-xl font-heading text-[2.7rem] font-medium leading-[0.94] tracking-[-0.055em] text-primary sm:text-5xl lg:text-[4.2rem]">
            {data.title}
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-lg text-[13px] leading-6 text-muted-foreground sm:text-sm">
            {data.description}
          </p>

          {/* Features */}
          <dl className="mt-8 divide-y divide-primary/10 border-y border-primary/10">
            {data.list.map((item, index) => {
              return (
                <div
                  key={index}
                  className="group flex gap-5 py-4 first:pt-5 last:pb-5"
                >
                  {/* Number */}
                  <span className="w-6 shrink-0 pt-0.5 text-[9px] font-medium tracking-[0.2em] text-accent/70">
                    0{index + 1}
                  </span>

                  <div className="min-w-0">
                    <dt className="text-sm font-medium tracking-[-0.01em] text-primary">
                      {item.title}
                    </dt>

                    <dd className="mt-1 max-w-md text-[11px] leading-5 text-muted-foreground">
                      {item.description}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>

        {/* ─────────────────────────────────────────
            IMAGE
        ───────────────────────────────────────── */}

        <div
          className={cn(
            "relative",
            reverse ? "lg:order-1" : "lg:order-2",
          )}
        >
          {/* Offset architectural frame */}
          <div
            className={cn(
              "absolute inset-0 hidden border border-primary/10 lg:block",
              reverse
                ? "-translate-x-4 translate-y-4"
                : "translate-x-4 translate-y-4",
            )}
          />

          {/* Image */}
          <div className="group relative aspect-[1.15] overflow-hidden bg-muted sm:aspect-[1.35] lg:aspect-[1.2]">
            <Image
              className="
                object-cover
                object-center
                transition-transform
                duration-[1600ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-[1.035]
              "
              src={data.image}
              alt={data.title}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />

            {/* Cinematic overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            {/* Top hairline */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/30" />

            {/* Image index */}
            <div className="absolute right-5 top-5">
              <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-white/60">
                Alaya / {reverse ? "02" : "01"}
              </span>
            </div>

            {/* Bottom caption */}
            <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
              <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-white/70">
                A slower way to stay
              </span>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}