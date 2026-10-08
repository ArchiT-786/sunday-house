import ThreePageHero from "@/components/shared/three-page-hero";
import Image from "next/image";
import Link from "next/link";
export default function NokdaraPage() {
  return <main className="bg-[#f8f7f1]">
    <ThreePageHero eyebrow="Our first destination · Kalimpong" title="Discover" accent="Nokdara." description="Quiet forest trails, mountain air, village life and the freedom to take your time." />
    <section className="mx-auto grid max-w-7xl gap-14 px-6 py-28 md:grid-cols-2 lg:px-10">
      <div><p className="text-xs uppercase tracking-[0.3em] text-accent">Beyond the ordinary</p>
        <h2 className="mt-6 font-heading text-5xl leading-tight text-primary">Find room to<br/><span className="font-serif italic">slow down.</span></h2></div>
      <div className="space-y-5 text-base leading-9 text-muted-foreground"><p>Nokdara lies in the Kalimpong hills between the better-known destinations of Lava and Lolegaon. Visitors come for peaceful countryside, scenic trails, Nokdara Lake and mountain views when the skies are clear.</p>
        <p>Sunday Houses begins its collection here with Whistling House and Chaaya Glades, close to Gumbadhara Monastery.</p>
        <Link href="/stays" className="inline-block font-semibold text-primary">Explore our Nokdara homestays ↗</Link></div>
    </section>
    <section className="bg-[#e9ece4] px-5 py-16 sm:px-10 sm:py-24"><div className="mx-auto max-w-7xl"><p className="text-xs uppercase tracking-[0.24em] text-[#8c7558]">Through the lens · Real photographs from Nokdara</p><h2 className="mt-4 font-serif text-[clamp(2.7rem,6vw,6rem)] leading-tight text-[#24362c]">The beauty is in <em>the journey.</em></h2><div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">{[["mountain-panorama","Himalayan ridges"],["forest-road","Forest road"],["misty-pine-forest","Pines in the mist"],["hilltop-monastery","Hilltop monastery"],["mountain-valley","Mountain valley"],["pine-forest-road","Pine forest drive"],["misty-mountain-road","Misty mountain road"],["forest-trail","Forest trail"]].map(([photo,caption],i)=><figure key={photo} className={`group overflow-hidden rounded-2xl bg-[#c9d2c6] ${i===0?"col-span-2 row-span-2":""}`}><div className="relative aspect-[4/5] overflow-hidden"><Image src={`/images/nokdara/${photo}.webp`} alt={caption+" photographed around Nokdara"} fill sizes="(max-width:640px) 50vw, (max-width:1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105"/></div><figcaption className="px-3 py-3 text-xs text-[#24362c] sm:text-sm">{caption}</figcaption></figure>)}</div></div></section>
    <section className="bg-[#e9ece4] px-6 py-24"><div className="mx-auto max-w-7xl"><h2 className="font-heading text-4xl text-primary">Make time for the little things.</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">{["Visit Nokdara Lake","Discover village life","Enjoy forest walks and mountain scenery"].map((title,i)=><div key={title} className="rounded-3xl bg-white p-8"><p className="text-xs text-accent">0{i+1}</p><h3 className="mt-6 font-heading text-2xl text-primary">{title}</h3></div>)}</div></div></section>
    <section className="px-6 py-24 text-center"><h2 className="font-heading text-4xl text-primary">Make Nokdara your next escape.</h2><Link href="/contact" className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-white">Plan your stay →</Link></section>
  </main>;
}
