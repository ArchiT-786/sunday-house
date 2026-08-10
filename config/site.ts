import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Sunday House",
  description:
    "",
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
    title: "Stay",
    items: [
      { title: "Stay with us", href: "/stay" },
      
    ],
  },
  {
    title: "Rishop",
    items: [
      { title: "Your Place", href: "/rishop" },
      
    ],
  },
  {
    title: "Our Story",
    items: [
      { title: "Our Story", href: "/our-story" },
      { title: "Contact Us", href: "/contact" },
    ],
  },
];
