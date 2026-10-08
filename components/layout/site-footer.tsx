import Image from "next/image";
import Link from "next/link";
const links = [
  ["Home", "/preview"], ["Our Homestays", "/stays"], ["Whistling House", "/stays/whistling-house"],
  ["Chaaya Glades", "/stays/chaaya-glades"], ["Explore Nokdara", "/nokdara"],
  ["Our Story", "/our-story"], ["Contact", "/contact"],
];
export function SiteFooter({className = ""}: {className?: string}) {
  return <footer className={`bg-[#172e27] text-white ${className}`}>
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr_1fr] lg:px-10">
      <div><Image src="/_static/sunday_houses.png" width={130} height={130} alt="Sunday Houses logo" className="rounded-full bg-white/95 object-contain"/>
        <h2 className="mt-5 font-heading text-3xl">Sunday Houses</h2>
        <p className="mt-3 max-w-xs text-sm leading-7 text-white/65">Your home in the hills. Handpicked stays and thoughtful travel experiences, beginning in Nokdara, Kalimpong.</p>
      </div>
      <div><h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Explore</h3>
        <div className="grid gap-3">{links.map(([name,href]) => <Link className="text-sm text-white/80 transition-colors hover:text-white" href={href} key={href}>{name}</Link>)}</div>
      </div>
      <div><h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Let's talk</h3>
        <a className="break-all text-sm text-white/85" href="mailto:email.sundayhouse@gmail.com">email.sundayhouse@gmail.com</a>
        <p className="mt-4 text-sm text-white/65">Nokdara · Kalimpong · West Bengal</p>
        <Link href="/contact" className="mt-6 inline-block rounded-full border border-white/30 px-5 py-3 text-sm hover:bg-white/10">Plan your stay →</Link>
      </div>
    </div>
    <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/50">© {new Date().getFullYear()} Sunday Houses. All rights reserved.</div>
  </footer>;
}
