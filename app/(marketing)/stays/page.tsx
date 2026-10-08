import ThreePageHero from "@/components/shared/three-page-hero";
import PropertyImage from "@/components/shared/property-image";
import Image from "next/image";
import Link from "next/link";
const stays = [
  {name:"Whistling House",slug:"whistling-house",image:"/images/hero.webp",desc:"A welcoming mountain retreat for slowing down and reconnecting with the hills."},
  {name:"Chaaya Glades",slug:"chaaya-glades",image:"/images/our-story.jpg",desc:"A calm hideaway to enjoy fresh air, unhurried mornings and a change of pace."},
];
export default function StaysPage() {
  return <main className="bg-[#f8f7f1]">
    <ThreePageHero eyebrow="The Sunday Houses collection" title="Find your place" accent="in the hills." description="Two individual mountain homes in Nokdara, Kalimpong, near Gumbadhara Monastery. Explore the collection and find your kind of quiet." />
    <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-32 md:grid-cols-2 lg:px-10">
      {stays.map((stay)=><Link href={`/stays/${stay.slug}`} key={stay.slug} className="group block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
          <PropertyImage slug={stay.slug as "whistling-house" | "chaaya-glades"} className="object-cover transition-transform duration-1000 group-hover:scale-110"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
          <h2 className="absolute bottom-8 left-8 font-heading text-4xl text-white">{stay.name}</h2>
        </div>
        <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">{stay.desc}</p>
        <p className="mt-4 text-sm font-semibold text-primary">Explore property ↗</p>
      </Link>)}
    </section>
    <section className="bg-[#17342c] px-6 py-20 text-center text-white"><h2 className="font-heading text-4xl">Need help choosing?</h2>
      <p className="mx-auto mt-4 max-w-xl text-white/70">Tell us about your trip and we'll help you find the right mountain stay.</p>
      <Link href="/contact" className="mt-7 inline-block rounded-full bg-white px-7 py-3 text-sm text-primary">Send an enquiry →</Link>
    </section>
  </main>;
}
