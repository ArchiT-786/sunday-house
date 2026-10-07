import Image from "next/image";
import Link from "next/link";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Icons } from "@/components/shared/icons";

const places = [
  {
    title: "Rishop Hills",
    eyebrow: "Mountain views",
    description:
      "Take in the quiet landscape around Rishop, with forested slopes, open skies, and beautiful mountain views.",
    image: "/images/rishop/hills.webp",
    alt: "Mountain landscape around Rishop, West Bengal",
  },
  {
    title: "Forest Walks",
    eyebrow: "Slow exploration",
    description:
      "Follow the quieter paths through the surrounding forests and enjoy the fresh mountain air at your own pace.",
    image: "/images/rishop/forest.webp",
    alt: "Forest path near Rishop, West Bengal",
  },
  {
    title: "Nearby Viewpoints",
    eyebrow: "Look a little further",
    description:
      "Explore viewpoints around the hills and discover the changing colours and moods of the Eastern Himalayas.",
    image: "/images/rishop/viewpoint.webp",
    alt: "Mountain viewpoint near Rishop",
  },
];

const thingsToDo = [
  "Take a quiet morning walk",
  "Explore the surrounding forests",
  "Visit nearby viewpoints",
  "Spend an afternoon enjoying the mountain air",
  "Discover local food and village life",
  "Return to Sunday House for a slow evening",
];

export default function RishopPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="homestay-container py-16 md:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[1.75rem] bg-secondary/70" />

              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-muted shadow-xl">
                <Image
                  src="/images/rishop/hero.webp"
                  alt="Rishop mountain landscape in West Bengal"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <div className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs text-white backdrop-blur-md">
                    Rishop · West Bengal
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 max-w-xl lg:order-2">
              <div className="homestay-eyebrow flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span>Explore Rishop</span>
              </div>

              <h1 className="font-heading text-4xl font-medium leading-[1.05] tracking-tight text-primary sm:text-5xl md:text-6xl">
                Let the mountains
                <span className="font-serif italic"> set the pace.</span>
              </h1>

              <p className="mt-7 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Rishop is a quiet hill destination in West Bengal, surrounded
                by forests, mountain air, and peaceful trails. Stay at Sunday
                House and take your time discovering the area.
              </p>

              <p className="mt-5 text-base leading-7 text-muted-foreground">
                There is no need to rush. Walk, explore, stop for tea, enjoy
                the views, and let a few quiet days become part of your
                journey.
              </p>

              <Link
                href="/stays"
                className="homestay-primary-button mt-8 gap-2"
              >
                Stay at Sunday House
                <Icons.arrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Places */}
      <section
        id="explore"
        className="homestay-section border-y border-border/60 bg-card"
      >
        <MaxWidthWrapper>
          <div className="max-w-2xl">
            <p className="homestay-eyebrow">Around the village</p>

            <h2 className="homestay-heading">
              Explore slowly.
            </h2>

            <p className="homestay-description">
              The best way to experience Rishop is without trying to see
              everything at once.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-14">
            {places.map((place) => (
              <article
                key={place.title}
                className="group overflow-hidden rounded-[1.5rem] border border-border/70 bg-background"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={place.image}
                    alt={place.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {place.eyebrow}
                  </p>

                  <h3 className="mt-3 font-heading text-2xl font-semibold text-primary">
                    {place.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {place.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Things to do */}
      <section className="homestay-section">
        <MaxWidthWrapper>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="homestay-eyebrow">A slower itinerary</p>

              <h2 className="homestay-heading">
                You don't need a packed schedule.
              </h2>

              <p className="homestay-description">
                Rishop is best enjoyed with enough time to stop, look around,
                and simply enjoy where you are.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {thingsToDo.map((thing, index) => (
                <div
                  key={thing}
                  className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="pt-1 text-sm leading-6 text-muted-foreground">
                    {thing}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Closing image */}
      <section className="pb-16 md:pb-24 lg:pb-28">
        <MaxWidthWrapper>
          <div className="relative overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[16/7] min-h-[360px]">
              <Image
                src="/images/rishop/evening.webp"
                alt="Peaceful evening landscape in Rishop"
                fill
                className="object-cover"
                sizes="100vw"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

              <div className="absolute inset-y-0 left-0 flex max-w-2xl items-center px-6 sm:px-10 lg:px-16">
                <div className="text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    Come see for yourself
                  </p>

                  <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
                    A few quiet days can be enough.
                  </h2>

                  <Link
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-primary transition-all hover:-translate-y-0.5 hover:bg-white/90"
                  >
                    Plan your stay
                    <Icons.arrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
