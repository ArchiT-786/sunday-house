import Image from "next/image";
import Link from "next/link";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Icons } from "@/components/shared/icons";

const places = [
  {
    title: "Nokdara Lake",
    eyebrow: "The heart of Nokdara",
    description:
      "Spend some time around Nokdara Lake, a peaceful highland lake surrounded by green hills, landscaped gardens, and quiet mountain scenery.",
    image: "/images/nokdara/lake.webp",
    alt: "Nokdara Lake surrounded by green hills in Kalimpong, West Bengal",
  },
  {
    title: "Forest & Village Walks",
    eyebrow: "Slow exploration",
    description:
      "Wander through the surrounding village and forested landscape, taking in the quiet roads, mountain air, and everyday life of rural Kalimpong.",
    image: "/images/nokdara/forest.webp",
    alt: "Forested landscape and village surroundings in Nokdara, Kalimpong",
  },
  {
    title: "Mountain Views",
    eyebrow: "Look a little further",
    description:
      "On clear days, the surrounding hills open up to beautiful mountain views, including distant views towards Kanchenjunga.",
    image: "/images/nokdara/viewpoint.webp",
    alt: "Mountain views from Nokdara in Kalimpong, West Bengal",
  },
];

const thingsToDo = [
  "Spend a quiet morning around Nokdara Lake",
  "Take a slow walk through the surrounding village",
  "Explore the forested hills and quieter roads",
  "Enjoy boating at Nokdara Lake when available",
  "Look out for Himalayan birds and changing mountain views",
  "Return to Sunday House for a slow evening",
];

export default function NokdaraPage() {
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
                  src="/images/nokdara/hero.webp"
                  alt="Nokdara landscape in Kalimpong, West Bengal"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <div className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs text-white backdrop-blur-md">
                    Nokdara · Kalimpong
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 max-w-xl lg:order-2">
              <div className="homestay-eyebrow flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span>Explore Nokdara</span>
              </div>

              <h1 className="font-heading text-4xl font-medium leading-[1.05] tracking-tight text-primary sm:text-5xl md:text-6xl">
                Let the mountains
                <span className="font-serif italic"> slow you down.</span>
              </h1>

              <p className="mt-7 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Nokdara is a quiet rural destination in the hills of
                Kalimpong, known for its lake, forested surroundings, village
                landscapes, and expansive mountain views.
              </p>

              <p className="mt-5 text-base leading-7 text-muted-foreground">
                Spend an unhurried day by the lake, walk through the
                surrounding hills, look out towards the mountains, and enjoy
                the slower rhythm of village life.
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
            <p className="homestay-eyebrow">Around Nokdara</p>

            <h2 className="homestay-heading">
              Explore slowly.
            </h2>

            <p className="homestay-description">
              Nokdara is best experienced at an easy pace — by the lake,
              through the village, and among the surrounding hills.
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
                Nokdara invites you to slow down — spend time by the lake,
                walk through the surrounding landscape, and enjoy the quieter
                side of the Kalimpong hills.
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
                src="/images/nokdara/evening.webp"
                alt="Peaceful evening landscape in Nokdara, Kalimpong"
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
