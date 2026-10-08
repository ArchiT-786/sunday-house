import ThreePageHero from "@/components/shared/three-page-hero";
import Image from "next/image";
import Link from "next/link";
export default function OurStoryPage() {
  return <main className="bg-[#f8f7f1]">
    <ThreePageHero eyebrow="The Sunday Houses philosophy" title="A collection of" accent="mountain moments." description="A growing collection of distinctive homes, meaningful experiences, and a warmer way to travel." />
    <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
      <div><p className="text-xs uppercase tracking-[0.3em] text-accent">Why Sunday Houses</p><h2 className="mt-6 font-heading text-5xl leading-tight text-primary">Travel further.<br/><span className="font-serif italic">Feel at home.</span></h2></div>
      <div><p className="text-lg leading-9 text-muted-foreground">Sunday Houses brings together characterful homestays and thoughtful travel experiences, beginning in Nokdara, Kalimpong.</p><p className="mt-5 text-base leading-8 text-muted-foreground">Slow mornings, conversations with local hosts, unexpected views, and the warmth of a home away from home.</p><Link href="/stays" className="mt-8 inline-block border-b border-primary pb-2 text-sm font-semibold text-primary">Meet our homestays ↗</Link></div>
    </section>
    <section className="bg-[#e9ece4] px-6 py-28 text-center"><div className="mx-auto max-w-4xl"><p className="text-xs uppercase tracking-[0.3em] text-accent">What we believe</p>
      <h2 className="mt-6 font-heading text-[clamp(2.7rem,6vw,5rem)] leading-tight text-primary">Every home has a story.<br/><span className="font-serif italic">Every guest brings another.</span></h2>
      <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground">From Whistling House to Chaaya Glades, our collection is about comfort, connection and discovering the hills at your own pace.</p></div></section>
    <section className="px-6 py-28 text-center"><h2 className="font-heading text-4xl text-primary">Ready to make your own memories?</h2><Link href="/contact" className="mt-7 inline-block rounded-full bg-primary px-7 py-3 text-sm text-white">Get in touch →</Link></section>
  </main>;
}
