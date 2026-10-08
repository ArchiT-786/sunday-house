import ThreePageHero from "@/components/shared/three-page-hero";
import Link from "next/link";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import ContactEnquiryForm from "@/components/forms/contact-enquiry-form";

export default function ContactPage() {
  return (
    <main>
      <ThreePageHero eyebrow="Your next journey begins here" title="Let's plan" accent="your escape." description="Questions about Whistling House, Chaaya Glades or exploring Nokdara? Tell us about your trip." height="min-h-[65svh]" />
      <section className="pb-16 md:pb-24 lg:pb-28">
        <MaxWidthWrapper>
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            <div className="rounded-[1.75rem] bg-primary p-7 text-primary-foreground sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">Sunday Houses</p>
              <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight">Thoughtful stays, memorable journeys.</h2>
              <p className="mt-5 text-sm leading-7 text-primary-foreground/75">
                Discover our two homestays in Nokdara, Kalimpong, near Gumbadhara Monastery.
                Ask about rooms, availability, directions and local experiences.
              </p>
              <p className="mt-8 text-sm">Email us at <a className="underline underline-offset-4" href="mailto:email.sundayhouse@gmail.com">email.sundayhouse@gmail.com</a></p>
              <Link href="/stays" className="mt-10 inline-block border-b border-white/60 pb-1 text-sm">Explore our homestays →</Link>
            </div>
            <div className="rounded-[1.75rem] border border-border/70 bg-card p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Send an enquiry</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-primary">Tell us about your trip.</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">Send your question directly to the Sunday Houses team.</p>
              <ContactEnquiryForm />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
