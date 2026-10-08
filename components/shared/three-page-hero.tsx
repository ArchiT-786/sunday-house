import Image from "@/components/shared/safe-photo";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
type Props={eyebrow:string;title:string;accent:string;description:string;height?:string};
export default function ThreePageHero({eyebrow,title,accent,description,height="min-h-[65svh]"}:Props){
 const key=(title+" "+eyebrow).toLowerCase();
 const photo=key.includes("chaaya")?"/images/properties/chaaya-glades/Vibrant Mountain Homestay Courtyard.png":key.includes("whistling")?"/images/properties/whistling-house/exterior.png":key.includes("nokdara")?"/images/luxury/natural-view.webp":"/images/properties/whistling-house/exterior.png";
 return <section className={`relative isolate flex items-end overflow-hidden bg-[#243d30] px-5 pb-14 pt-28 text-white sm:px-10 sm:pb-20 lg:px-16 ${height}`}>
  <Image src={photo} fallback={key.includes("chaaya")?"/images/our-story.jpg":"/images/hero.webp"} alt={title+" — Sunday Houses in Nokdara"} fill priority sizes="100vw" className="object-cover"/>
  <div className="absolute inset-0 bg-gradient-to-r from-[#122a21]/85 via-[#122a21]/45 to-[#122a21]/15"/>
  <div className="absolute inset-0 bg-gradient-to-t from-[#122a21]/60 via-transparent to-transparent"/>
  <div className="relative mx-auto w-full max-w-[1400px]">
   <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#f5dcb0]">{eyebrow}</p>
   <h1 className="max-w-5xl font-serif text-[clamp(3.1rem,8vw,8rem)] font-normal leading-[0.96] tracking-[-0.055em]">{title}<br/><em className="text-[#f5dcb0]">{accent}</em></h1>
   <p className="mt-6 max-w-xl text-base leading-8 text-white/90 sm:text-lg">{description}</p>
   <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#f4e6c9] px-6 py-3 text-sm font-semibold text-[#1b382e]">Plan your stay <ArrowUpRight size={17}/></Link>
  </div>
 </section>;
}