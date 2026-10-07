import Image from "next/image";
import Link from "next/link";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Icons } from "@/components/shared/icons";

const rooms = [
  {
    name: "Mountain View Room",
    description:
      "A comfortable room for slow mornings, mountain air, and peaceful evenings at Sunday House.",
    image: "/images/stays/mountain-view-room.webp",
    alt: "Mountain view room at Sunday House in Rishop",
  },
  {
    name: "The Cosy Room",
    description:
      "A warm and simple space to rest after a day of exploring the hills around Rishop.",
    image: "/images/stays/cosy-room.webp",
    alt: "Cosy room at Sunday House homestay in Rishop",
  },
];

const comforts = [
  {
    icon: Icons.home,
    title: "A homely stay",
    description:
      "A relaxed mountain home designed for comfort rather than formality.",
  },
  {
    icon: Icons.search,
    title: "Close to nature",
    description:
      "Wake up to fresh mountain air, quiet surroundings, and the landscape of Rishop.",
  },
  {
    icon: Icons.messages,
    title: "Warm hospitality",
    description:
      "We're here when you need us, while giving you the space to enjoy your stay.",
  },
];

export default function StaysPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="homestay-container py-16 md:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="max-w-xl">
              <div className="homestay-eyebrow flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span>Stay at Sunday House</span>
              </div>

              <h1 className="font-heading text-4xl font-medium leading-[1.05] tracking-tight text-primary sm:text-5xl md:text-6xl">
                A quiet place to
                <span className="font-serif italic"> call home.</span>
              </h1>

              <p className="mt-7 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Settle into Sunday House in Rishop, West Bengal. Wake up to
                mountain air, spend your days exploring the hills, and return
                to a warm and comfortable place to rest.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="homestay-primary-button gap-2"
                >
                  Enquire about a stay
                  <Icons.arrowRight className="size-4" />
                </Link>

                <Link
                  href="/rishop"
                  className="homestay-secondary-button"
                >
                  Explore Rishop
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[1.75rem] bg-secondary/70" />

              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-muted shadow-xl">
                <Image
                  src="/images/stays/stay-hero.webp"
                  alt="Sunday House homestay in Rishop, West Bengal"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <div className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs text-white backdrop-blur-md">
                    Sunday House · Rishop
                  </div>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute -right-8 -top-8 -z-10 size-28 rounded-full bg-accent/10 blur-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="homestay-section border-y border-border/60 bg-card">
        <MaxWidthWrapper>
          <div className="max-w-2xl">
            <p className="homestay-eyebrow">Our spaces</p>

            <h2 className="homestay-heading">
              Settle in. Slow down.
            </h2>

            <p className="homestay-description">
              Simple, comfortable spaces for a peaceful stay in the hills.
              We believe a good homestay doesn't need to be complicated.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-14">
            {rooms.map((room) => (
              <article
                key={room.name}
                className="group overflow-hidden rounded-[1.5rem] border border-border/70 bg-background"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={room.image}
                    alt={room.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="font-heading text-2xl font-semibold text-primary">
                    {room.name}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
                    {room.description}
                  </p>

                  <Link
                    href="/contact"
                    className="group/link mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    Enquire about this room
                    <Icons.arrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Comforts */}
      <section className="homestay-section">
        <MaxWidthWrapper>
          <div className="mx-auto max-w-2xl text-center">
            <p className="homestay-eyebrow">The Sunday House way</p>

            <h2 className="homestay-heading">
              The little things matter.
            </h2>

            <p className="homestay-description mx-auto">
              Your stay should feel relaxed from the moment you arrive.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3 lg:mt-14">
            {comforts.map((comfort) => {
              const Icon = comfort.icon;

              return (
                <div
                  key={comfort.title}
                  className="rounded-2xl border border-border/70 bg-card p-6 sm:p-7"
                >
                  <div className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-semibold text-primary">
                    {comfort.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {comfort.description}
                  </p>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24 lg:pb-28">
        <MaxWidthWrapper>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-primary-foreground sm:px-10 md:py-16 lg:px-16">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 size-64 rounded-full bg-white/5 blur-2xl"
            />

            <div className="relative max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
                Plan your stay
              </p>

              <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight sm:text-4xl">
                Ready for a few slower days in Rishop?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-primary-foreground/70 sm:text-base">
                Get in touch with us to ask about availability, rooms, and
                planning your stay at Sunday House.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-primary transition-all hover:-translate-y-0.5 hover:bg-white/90"
              >
                Contact Sunday House
                <Icons.arrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
