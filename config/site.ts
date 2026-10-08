import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Sunday Houses",
  description: "Sunday Houses curates welcoming mountain homestays and thoughtful tourist services. Discover Whistling House and Chaaya Glades in Nokdara, Kalimpong.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
  mailSupport: "email.sundayhouse@gmail.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Discover",
    items: [
      { title: "Our Homestays", href: "/stays" },
      { title: "Our Story", href: "/our-story" },
    ],
  },
  {
    title: "Get in touch",
    items: [
      { title: "Plan your stay", href: "/contact" },
      { title: "Email us", href: "mailto:email.sundayhouse@gmail.com" },
    ],
  },
];
