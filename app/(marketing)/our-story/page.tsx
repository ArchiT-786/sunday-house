import Image from "next/image";
import Link from "next/link";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Icons } from "@/components/shared/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function OurStoryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <MaxWidthWrapper>
          <div className="grid min-h-[620px] items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-20 lg:py-28">
            {/* Content */}
            <div className="max-w-xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Our Story
                </span>
              </div>

              <h1 className="font-heading text-4xl font-medium leading-[1.05] tracking-tight text-primary sm:text-5xl md:text-6xl">
                A little home
                <br />
                <span className="font-serif italic">
                  in the hills.
                </span>
              </h1>

              <p className="mt-7 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Sunday House is our little mountain home in Nokdara,
                Kalimpong. We created it as a place where people can
                slow down, enjoy the quiet surroundings, and experience
                the warmth of staying somewhere that feels personal.
              </p>

              <p className="mt-5 text-base leading-7 text-muted-foreground sm:leading-8">
                Away from the rush of busy towns, Nokdara has a gentler
                rhythm — quiet mornings, forested hills, fresh mountain
                air, village roads, and the peaceful presence of
                Nokdara Lake.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/stays"
                  className={cn(
                    buttonVariants({
                      size: "lg",
                      rounded: "full",
                    }),
                    "group gap-2 px-7",
                  )}
                >
                  Stay with us
                  <Icons.arrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/nokdara"
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "lg",
                      rounded: "full",
                    }),
                    "px-6 text-primary",
                  )}
                >
                  Explore Nokdara
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -bottom-6 -left-6 h-full w-full rounded-[1.75rem] bg-secondary/70" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-xl">
                <Image
                  src="/images/our-story.jpg"
                  alt="Sunday House in Nokdara, Kalimpong"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <div className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs text-white backdrop-blur-md">
                    Sunday House · Nokdara
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* The idea behind Sunday House */}
      <section className="homestay-section bg-sage-gradient">
        <MaxWidthWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <p className="homestay-eyebrow">
              Why Sunday House
            </p>

            <h2 className="homestay-heading">
              A homestay made for slowing down.
            </h2>

            <p className="homestay-description mx-auto">
              We believe a stay in the mountains should be more than
              simply having a room for the night. It should give you
              the chance to experience the place, meet the people,
              discover the surroundings, and enjoy a slower pace.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <StoryCard
              icon={<Icons.home className="size-5" />}
              title="Feel at home"
              description="A comfortable, welcoming space where you can settle in, put your feet up, and take your time."
            />

            <StoryCard
              icon={<Icons.search className="size-5" />}
              title="Experience Nokdara"
              description="Step outside and discover the lake, forested hills, village surroundings, and quiet character of the area."
            />

            <StoryCard
              icon={<Icons.messages className="size-5" />}
              title="Stay connected"
              description="We want guests to feel looked after without losing the freedom to enjoy their own time."
            />
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Nokdara */}
      <section className="homestay-section">
        <MaxWidthWrapper>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-xl">
                <Image
                  src="/images/nokdara-surroundings.webp"
                  alt="Landscape around Nokdara in Kalimpong, West Bengal"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </div>

            <div className="order-1 max-w-xl lg:order-2">
              <p className="homestay-eyebrow">
                The place we call home
              </p>

              <h2 className="homestay-heading">
                Nokdara is part of the story.
              </h2>

              <p className="homestay-description">
                Set among the hills of Kalimpong, Nokdara is a quiet
                place shaped by forests, village surroundings, mountain
                air, and the presence of its lake.
              </p>

              <p className="mt-5 text-base leading-7 text-muted-foreground">
                The landscape here encourages a different pace. There
                is time to take a walk, spend a little while by the
                lake, explore the surrounding hills, or simply sit and
                enjoy the changing light around you.
              </p>

              <p className="mt-5 text-base leading-7 text-muted-foreground">
                That is what we hope guests discover when they stay at
                Sunday House: not just a place to sleep, but a chance
                to experience a quieter side of the Kalimpong hills.
              </p>

              <Link
                href="/nokdara"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                Discover Nokdara
                <Icons.arrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Closing */}
      <section className="bg-forest-gradient py-20 text-primary-foreground md:py-28">
        <MaxWidthWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/60">
              Sunday House
            </p>

            <h2 className="mt-5 font-heading text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
              Come as a guest.
              <br />
              Leave with a little piece of the hills.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-primary-foreground/70 sm:text-base">
              We would love to welcome you to Nokdara and share our
              little corner of the Kalimpong hills with you.
            </p>

            <Link
              href="/stays"
              className={cn(
                buttonVariants({
                  size: "lg",
                  rounded: "full",
                }),
                "mt-8 bg-white px-7 text-primary hover:bg-white/90",
              )}
            >
              Explore Sunday House
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}

function StoryCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="homestay-card p-6 md:p-7">
      <div className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
        {icon}
      </div>

      <h3 className="mt-5 font-heading text-xl font-semibold text-primary">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
