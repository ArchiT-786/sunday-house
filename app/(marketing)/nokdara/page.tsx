import Image from "next/image";
import Link from "next/link";
export default function NokdaraPage() {
  return <main className="bg-[#f8f7f1]">
    <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-primary px-6 pb-20 text-white md:px-12">
      <Image src="/images/luxury/natural-view.webp" alt="Green mountain landscape of the Eastern Himalayas" fill priority sizes="100vw" className="object-cover opacity-65"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent"/>
      <div className="relative mx-auto w-full max-w-7xl"><p className="text-xs uppercase tracking-[0.3em] text-amber-200">Our first destination · Kalimpong</p>
        <h1 className="mt-6 font-heading text-[clamp(4rem,10vw,9rem)] leading-none">Discover <span className="font-serif italic">Nokdara.</span></h1>
        <p className="mt-7 max-w-xl text-base leading-8 text-white/80">A quieter corner of the Eastern Himalayas, known for forested hills, mountain air and a slower way of life.</p></div>
    </section>
    <section className="mx-auto grid max-w-7xl gap-14 px-6 py-28 md:grid-cols-2 lg:px-10">
      <div><p className="text-xs uppercase tracking-[0.3em] text-accent">Beyond the ordinary</p>
        <h2 className="mt-6 font-heading text-5xl leading-tight text-primary">Find room to<br/><span className="font-serif italic">slow down.</span></h2></div>
      <div className="space-y-5 text-base leading-9 text-muted-foreground"><p>Nokdara lies in the Kalimpong hills between the better-known destinations of Lava and Lolegaon. Visitors come for peaceful countryside, scenic trails, Nokdara Lake and mountain views when the skies are clear.</p>
        <p>Sunday Houses begins its collection here with Whistling House and Chaaya Glades, close to Gumbadhara Monastery.</p>
        <Link href="/stays" className="inline-block font-semibold text-primary">Explore our Nokdara homestays ↗</Link></div>
    </section>
    <section className="bg-[#e9ece4] px-6 py-24"><div className="mx-auto max-w-7xl"><h2 className="font-heading text-4xl text-primary">Make time for the little things.</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">{["Visit Nokdara Lake","Discover village life","Enjoy forest walks and mountain scenery"].map((title,i)=><div key={title} className="rounded-3xl bg-white p-8"><p className="text-xs text-accent">0{i+1}</p><h3 className="mt-6 font-heading text-2xl text-primary">{title}</h3></div>)}</div></div></section>
    <section className="px-6 py-24 text-center"><h2 className="font-heading text-4xl text-primary">Make Nokdara your next escape.</h2><Link href="/contact" className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-white">Plan your stay →</Link></section>
  </main>;
}
