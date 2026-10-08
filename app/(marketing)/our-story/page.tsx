import Image from "next/image";
import Link from "next/link";
export default function OurStoryPage() {
  return <main className="bg-[#f8f7f1]">
    <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-36">
      <div><p className="text-xs uppercase tracking-[0.3em] text-accent">The Sunday Houses philosophy</p>
        <h1 className="mt-7 font-heading text-[clamp(3.2rem,6vw,6rem)] leading-[1.04] text-primary">A collection of<br/><span className="font-serif italic">mountain moments.</span></h1>
        <p className="mt-8 text-lg leading-9 text-muted-foreground">Sunday Houses began with a simple idea: finding a place to stay should feel as welcoming as arriving there. We bring together characterful homestays and thoughtful travel experiences, starting in Nokdara, Kalimpong.</p>
        <p className="mt-5 text-base leading-8 text-muted-foreground">We believe the best journeys make space for the little things — a slower morning, a conversation with a local host, an unexpected view and the comfort of a home away from home.</p>
        <Link href="/stays" className="mt-9 inline-block rounded-full bg-primary px-7 py-3 text-sm text-white">Meet our homestays →</Link>
      </div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]"><Image src="/images/our-story.jpg" alt="Mountain setting that inspires Sunday Houses" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover"/></div>
    </section>
    <section className="bg-[#e9ece4] px-6 py-28 text-center"><div className="mx-auto max-w-4xl"><p className="text-xs uppercase tracking-[0.3em] text-accent">What we believe</p>
      <h2 className="mt-6 font-heading text-[clamp(2.7rem,6vw,5rem)] leading-tight text-primary">Every home has a story.<br/><span className="font-serif italic">Every guest brings another.</span></h2>
      <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground">From Whistling House to Chaaya Glades, our collection is about comfort, connection and discovering the hills at your own pace.</p></div></section>
    <section className="px-6 py-28 text-center"><h2 className="font-heading text-4xl text-primary">Ready to make your own memories?</h2><Link href="/contact" className="mt-7 inline-block rounded-full bg-primary px-7 py-3 text-sm text-white">Get in touch →</Link></section>
  </main>;
}
