import Link from "next/link";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Icons } from "@/components/shared/icons";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="homestay-section">
        <MaxWidthWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <p className="homestay-eyebrow">
              Plan your stay
            </p>

            <h1 className="homestay-heading text-4xl sm:text-5xl md:text-6xl">
              Come stay with us.
            </h1>

            <p className="homestay-description mx-auto mt-6">
              Have a question about Sunday House, Rishop, or planning your
              visit? Get in touch with us and we'll be happy to help.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Contact content */}
      <section className="pb-16 md:pb-24 lg:pb-28">
        <MaxWidthWrapper>
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            {/* Information */}
            <div className="rounded-[1.75rem] bg-primary p-7 text-primary-foreground sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
                Sunday House
              </p>

              <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight">
                A little mountain home in Rishop.
              </h2>

              <p className="mt-5 text-sm leading-6 text-primary-foreground/70">
                Reach out to us for availability, room information, directions,
                or anything else you'd like to know before your visit.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Icons.home className="size-4" />
                  </span>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-primary-foreground/50">
                      Location
                    </p>

                    <p className="mt-1 text-sm">
                      Rishop, West Bengal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Icons.messages className="size-4" />
                  </span>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-primary-foreground/50">
                      Enquiries
                    </p>

                    <p className="mt-1 text-sm">
                      Contact us for stay information
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-sm leading-6 text-primary-foreground/60">
                  We look forward to welcoming you to the hills.
                </p>
              </div>
            </div>

            {/* Enquiry form */}
            <div className="rounded-[1.75rem] border border-border/70 bg-card p-7 sm:p-9">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Send an enquiry
                </p>

                <h2 className="mt-3 font-heading text-3xl font-semibold text-primary">
                  Tell us about your trip.
                </h2>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  This form is currently a simple enquiry form. We can connect
                  it to email or WhatsApp once your contact details are ready.
                </p>
              </div>

              <form className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-primary"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="homestay-input w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-primary"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="homestay-input w-full"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-primary"
                  >
                    Phone / WhatsApp
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="homestay-input w-full"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="arrival"
                      className="mb-2 block text-sm font-medium text-primary"
                    >
                      Arrival
                    </label>

                    <input
                      id="arrival"
                      name="arrival"
                      type="date"
                      className="homestay-input w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="departure"
                      className="mb-2 block text-sm font-medium text-primary"
                    >
                      Departure
                    </label>

                    <input
                      id="departure"
                      name="departure"
                      type="date"
                      className="homestay-input w-full"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-primary"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us anything you'd like us to know..."
                    className="w-full resize-none rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <button
                  type="button"
                  className="homestay-primary-button w-full gap-2 sm:w-auto"
                >
                  Send enquiry
                  <Icons.arrowRight className="size-4" />
                </button>

                <p className="text-xs leading-5 text-muted-foreground">
                  Your enquiry form is currently for the website interface.
                  We'll connect the submission to your preferred contact
                  method next.
                </p>
              </form>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Back to stay */}
      <section className="border-t border-border/60 bg-card py-10">
        <MaxWidthWrapper>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              Looking for somewhere to stay?
            </p>

            <Link
              href="/stays"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              Explore Sunday House
              <Icons.arrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
