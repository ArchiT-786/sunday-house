import ThreePageHero from "@/components/shared/three-page-hero";
import PropertyImage from "@/components/shared/property-image";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
const properties = {
  "whistling-house": {
    name: "Whistling House",
    eyebrow: "A quiet mountain hideaway",
    description: "Take your time in the hills. Whistling House is part of the Sunday Houses collection in Nokdara, Kalimpong, close to Gumbadhara Monastery.",
    image: "/images/hero.webp",
  },
  "chaaya-glades": {
    name: "Chaaya Glades",
    eyebrow: "A gentle retreat into nature",
    description: "Find a quieter rhythm at Chaaya Glades, a Sunday Houses mountain homestay in Nokdara, Kalimpong, near Gumbadhara Monastery.",
    image: "/images/our-story.jpg",
  },
} as const;
type Slug = keyof typeof properties;
export function generateStaticParams() { return Object.keys(properties).map(slug => ({ slug })); }
export function generateMetadata({ params }: {params:{slug:string}}): Metadata {
  const stay = properties[params.slug as Slug];
  return {title: stay ? `${stay.name} | Sunday Houses` : "Sunday Houses"};
}
export default function PropertyPage({params}: {params:{slug:string}}) {
  const stay = properties[params.slug as Slug];
  if (!stay) notFound();
  return <main className="bg-[#f8f7f1]">
    <ThreePageHero eyebrow="Sunday Houses · Nokdara" title={stay.name} accent="Your mountain home." description={stay.description} />
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-2 lg:px-10">
      <div><p className="text-xs uppercase tracking-[0.3em] text-accent">Your home in the hills</p>
        <h2 className="mt-6 font-heading text-5xl leading-tight text-primary">A place to <span className="font-serif italic">simply be.</span></h2></div>
      <div><p className="text-lg leading-9 text-muted-foreground">{stay.description}</p>
        <p className="mt-5 text-base leading-8 text-muted-foreground">Ask our team about availability, room options, local experiences and planning your visit.</p>
        <Link href="/contact" className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-sm text-white">Enquire about {stay.name} →</Link></div>
    </section>
    <section className="bg-[#e9ece4] px-6 py-20 text-center"><h2 className="font-heading text-4xl text-primary">Explore more with Sunday Houses.</h2>
      <div className="mt-7 flex flex-wrap justify-center gap-4"><Link href="/stays" className="rounded-full border border-primary/30 px-6 py-3 text-sm text-primary">All homestays</Link>
        <Link href="/nokdara" className="rounded-full border border-primary/30 px-6 py-3 text-sm text-primary">Discover Nokdara</Link></div></section>
  </main>;
}
