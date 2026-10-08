import Image from "next/image";
import Link from "next/link";
import { readSettings } from "@/lib/site-access";
import ComingSoonCountdown from "@/components/coming-soon-countdown";
export const dynamic="force-dynamic";
export const metadata={title:"Coming Soon | Sunday Houses",description:"Something beautiful is coming to the hills of Nokdara."};
export default async function ComingSoon(){
 let launchAt:string|null=null;let showCountdown=false;
 try{const data=(await readSettings()).settings;launchAt=data.launchAt;showCountdown=data.showCountdown;}catch{}
 return <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#17291f] px-6 py-20 text-white"><Image src="/images/properties/whistling-house/exterior.png" alt="Sunday Houses mountain retreat" fill priority className="object-cover opacity-40"/><div className="absolute inset-0 bg-gradient-to-b from-[#14271c]/60 via-[#14271c]/50 to-[#14271c]/90"/><div className="relative z-10 mx-auto w-full max-w-3xl text-center"><Image src="/_static/sunday_houses.png" alt="Sunday Houses" width={96} height={96} className="mx-auto mb-6 h-24 w-24 object-contain"/><p className="text-xs font-semibold uppercase tracking-[.3em] text-[#e2d2b6]">Sunday Houses · Nokdara, Himalayas</p><h1 className="mt-7 font-serif text-[clamp(4rem,11vw,8rem)] leading-[.95] tracking-tight">Coming <em className="font-normal">Soon.</em></h1><p className="mx-auto mt-7 max-w-xl text-base leading-8 text-[#e5e4dc] sm:text-lg">A new chapter of mountain living is almost here. Quiet mornings, breathtaking views and the warmth of a home in the hills await.</p>{showCountdown&&launchAt&&<ComingSoonCountdown launchAt={launchAt}/>}<div className="mt-12 flex flex-wrap items-center justify-center gap-4"><Link href="mailto:hello@sundayhouses.com" className="rounded-full border border-white/60 bg-white/10 px-7 py-3 text-sm font-semibold backdrop-blur-md transition hover:bg-white/20">Get in touch</Link></div><p className="mt-12 text-xs uppercase tracking-[.2em] text-[#c6c7b9]">Your Home In The Hills</p></div></main>;
}
