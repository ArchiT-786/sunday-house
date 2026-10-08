import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";
const site_url = env.NEXT_PUBLIC_APP_URL;
export const siteConfig: SiteConfig = {
  name: "Sunday Houses",
  description: "Sunday Houses offers handpicked mountain homestays and travel experiences, beginning with Whistling House and Chaaya Glades in Nokdara, Kalimpong.",
  url: site_url,
  ogImage: `${site_url}/_static/sunday_houses.png`,
  links: { twitter: "https://twitter.com", github: "https://github.com" },
  mailSupport: "email.sundayhouse@gmail.com",
};
export const footerLinks: SidebarNavItem[] = [
  { title: "Our Homestays", items: [
    { title: "All Properties", href: "/stays" },
    { title: "Whistling House", href: "/stays/whistling-house" },
    { title: "Chaaya Glades", href: "/stays/chaaya-glades" },
  ]},
  { title: "Discover", items: [
    { title: "Nokdara", href: "/nokdara" },
    { title: "Our Story", href: "/our-story" },
    { title: "Contact", href: "/contact" },
  ]},
];
