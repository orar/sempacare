import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Sempa Care & Health",
  description:
    "Compassionate Care Right at Home | We bring comfort, dignity, and independence to your family and loved ones keeping them connected and happy.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com/miickasmt",
    github: "https://github.com/mickasmt/next-saas-stripe-starter",
  },
  mailSupport: "ask@sempacare.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Services",
    items: [
      { title: "Daily Living Support", href: "/services/living-support" },
      { title: "Personal Care Services", href: "/services/personal-care" },
      { title: "Companion Care", href: "/services/companion-care" },
      { title: "Respite Care", href: "/services/respite-care" },
      { title: "Skilled Nursing Care", href: "/services/skilled-nursing" },
      { title: "Specialized Care Services", href: "/services/specialized-care" },
    ],
  },
  {
    title: "Corporate",
    items: [
      { title: "Corporate Medical Staffing", href: "/corporate/medical-staffing" },
      { title: "Private Nursing", href: "/private-nursing" },
      { title: "Nursing Recruitment", href: "/nursing-recruitment" },
    ],
  },
];
