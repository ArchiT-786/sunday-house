import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ReserveSection() {
  return (
    <section className="relative overflow-hidden bg-[#eee9df]">
      {/* ─────────────────────────────────────────
          BACKGROUND IMAGE
      ───────────────────────────────────────── */}

      <div className="absolute inset-0">
        <Image
          src="/images/reserve.webp"
          alt="Sunday Houses surrounded by nature"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Warm editorial treatment */}
        <div className="absolute inset-0 bg-[#eee9df]/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#eee9df]/95 via-[#eee9df]/75 to-[#eee9df]/15" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>

      {/* ─────────────────────────────────────────
          CONTENT
      ───────────────────────────────────────── */}

      <div className="relative mx-auto flex min-h-[500px] max-w-[1440px] items-center px-5 py-16 sm:min-h-[560px] sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-accent/70" />

            <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-primary/60">
              Sunday Houses · Nokdara
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-[3.35rem] font-medium leading-[0.86] tracking-[-0.06em] text-primary sm:text-6xl lg:text-[6rem]">
            Your place
            <br />
            <span className="font-serif font-normal italic tracking-[-0.045em] text-primary/75">
              in the mountains.
            </span>
          </h2>

          {/* Small supporting copy */}
          <p className="mt-6 max-w-sm text-[12px] leading-6 text-primary/55 sm:text-sm">
            Come for the view. Stay for the stillness.
          </p>

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
              bg-primary
              px-5
              text-[10px]
              font-medium
              uppercase
              tracking-[0.14em]
              text-primary-foreground
              shadow-[0_12px_35px_rgba(35,72,58,0.15)]
              transition-all
              duration-500
              hover:-translate-y-0.5
              hover:shadow-[0_16px_40px_rgba(35,72,58,0.22)]
            "
          >
            <span>Book your stay</span>

            <span className="flex size-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0.5">
              <ArrowUpRight className="size-3" />
            </span>
          </Link>
        </div>

        {/* ─────────────────────────────────────
            CORNER DETAIL
        ───────────────────────────────────── */}

        <div className="absolute bottom-7 right-5 hidden items-end gap-4 sm:flex lg:right-10">
          <div className="text-right">
            <p className="text-[8px] uppercase tracking-[0.25em] text-primary/35">
              A slower escape
            </p>

            <p className="mt-1 text-[10px] font-medium text-primary/55">
              Nokdara · Eastern Himalayas
            </p>
          </div>

          <div className="h-8 w-px bg-primary/15" />
        </div>
      </div>
    </section>
  );
}