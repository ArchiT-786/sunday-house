"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Compass, Heart, Mountain, MapPin } from "lucide-react";
import MountainStory from "./mountain-story";

const properties = [
  { name: "Whistling House", slug: "whistling-house", image: "/images/hero.webp", label: "A peaceful mountain retreat", number: "01" },
  { name: "Chaaya Glades", slug: "chaaya-glades", image: "/images/our-story.jpg", label: "A gentle escape into nature", number: "02" },
];
function Reveal({children, className = ""}: {children: React.ReactNode; className?: string}) {
  const reduce = useReducedMotion();
  return <motion.div initial={reduce ? false : { opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>;
}
export default function BrandHome() {
  return <main className="overflow-hidden bg-[#f8f7f1]">
    <MountainStory/>
    <section className="px-6 py-28 md:py-40 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal><p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Your home in the hills</p>
          <h2 className="mt-7 max-w-5xl font-heading text-[clamp(2.7rem,6vw,6rem)] leading-[1.04] tracking-tight text-primary">Not just places to stay.<br/><span className="font-serif italic font-normal">Places to belong.</span></h2>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-muted-foreground">Sunday Houses brings together thoughtfully chosen mountain homestays and personal travel experiences. Each home has its own character. Every journey has room to breathe.</p>
        </Reveal>
        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {[
            {icon: Heart, title: "A warm welcome", description: "The comfort of a home, the joy of being somewhere new."},
            {icon: Mountain, title: "Closer to nature", description: "Forest air, mountain horizons and space to slow down."},
            {icon: Compass, title: "Travel thoughtfully", description: "Discover local places and experiences at your own pace."},
          ].map((item,i) => <Reveal key={item.title}><div className="h-full rounded-3xl border border-primary/10 bg-white p-9 transition-transform duration-500 hover:-translate-y-2">
            <item.icon className="h-9 w-9 text-accent"/><p className="mt-10 text-xs text-primary/40">0{i+1}</p>
            <h3 className="mt-3 font-heading text-2xl text-primary">{item.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
          </div></Reveal>)}
        </div>
      </div>
    </section>
    <section className="bg-[#e9ece4] px-6 py-28 md:py-36 lg:px-12" id="homestays">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div><p className="text-xs uppercase tracking-[0.3em] text-accent">The collection</p>
            <h2 className="mt-5 font-heading text-[clamp(3rem,6vw,6rem)] leading-tight text-primary">Our mountain <span className="font-serif italic">homes.</span></h2>
            <p className="mt-5 max-w-xl leading-8 text-muted-foreground">Two distinct homestays in Nokdara, near Gumbadhara Monastery in the Kalimpong hills.</p>
          </div><Link href="/stays" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">View all stays <ArrowUpRight className="h-4 w-4"/></Link>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          {properties.map((item,i) => <Reveal key={item.slug} className={i===1 ? "md:mt-24" : ""}>
            <Link href={`/stays/${item.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#18362c]">
                <Image src={item.image} alt={`Mountain setting representing ${item.name}`} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition-transform duration-[1400ms] group-hover:scale-110"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"/>
                <span className="absolute left-7 top-7 rounded-full border border-white/50 bg-black/20 px-4 py-2 text-xs text-white backdrop-blur">{item.number} · Nokdara</span>
                <div className="absolute bottom-8 left-8 right-8 text-white"><p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/75">{item.label}</p>
                  <h3 className="font-heading text-4xl sm:text-5xl">{item.name}</h3></div>
              </div>
              <div className="mt-5 flex items-center justify-between text-sm text-primary"><span>Explore this homestay</span><ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></div>
            </Link>
          </Reveal>)}
        </div>
      </div>
    </section>
    <section className="relative min-h-[70vh] overflow-hidden bg-[#1b352e] px-6 py-28 text-white lg:px-12">
      <Image src="/images/luxury/natural-view.webp" alt="Mountain landscape in the Eastern Himalayas" fill sizes="100vw" className="object-cover opacity-35"/>
      <div className="absolute inset-0 bg-gradient-to-r from-[#112b26]/95 to-[#112b26]/30"/>
      <Reveal className="relative mx-auto flex min-h-[45vh] max-w-7xl flex-col justify-center">
        <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-amber-200"><MapPin className="h-4 w-4"/> Discover Nokdara</p>
        <h2 className="mt-7 max-w-4xl font-heading text-[clamp(3rem,7vw,7rem)] leading-[1.03]">A quieter side of<br/><span className="font-serif italic">the Himalayas.</span></h2>
        <p className="mt-7 max-w-xl text-base leading-8 text-white/80">Winding trails, village life and the calm of the Kalimpong hills. Start your next chapter here.</p>
        <Link href="/nokdara" className="mt-9 w-fit rounded-full bg-white px-7 py-3 text-sm font-medium text-primary">Explore the destination →</Link>
      </Reveal>
    </section>
    <section className="px-6 py-28 text-center md:py-40">
      <Reveal className="mx-auto max-w-4xl"><p className="text-xs uppercase tracking-[0.3em] text-accent">Your journey begins here</p>
        <h2 className="mt-6 font-heading text-[clamp(3rem,7vw,7rem)] leading-tight text-primary">Come for the view.<br/><span className="font-serif italic">Stay for the feeling.</span></h2>
        <Link href="/contact" className="mt-9 inline-block rounded-full bg-primary px-9 py-4 text-sm text-white transition-transform hover:-translate-y-1">Plan your escape →</Link>
      </Reveal>
    </section>
  </main>;
}
