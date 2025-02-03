"use client"

import React from 'react';
import Link from "next/link"
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Icons } from "@/components/shared/icons"

type NavLink = {
  title: string;
  href: string;
}

type NavMenu = {
  title: string;
  menu: {
    cover?: {
      cover_img: string
      title: string;
      description: string
    },
    links: NavMenuLink[]
  }
}

type NavMenuCover = {

}
type NavMenuLink = {
  title: string;
  href: string;
  description: string
}

type NavItem = NavLink|NavMenu

const mlinks = {
  services: {
    title: "Services",
    menu: {
      cover: {
        href: "/services",
        cover_img: "/_static/stocks/woman_child.jpg",
        title: "Care Services",
        description: "Discover our range of care services we offer to support your loved ones at every stage of their healthcare journey"
      },
      links: [
        {
          title: "Personal Care Services",
          href: "/services/personal-care",
          description:
            "Assistance with daily living activities, including bathing, dressing, grooming, and mobility support.",
        },
        {
          title: "Companion Care",
          href: "/services/companion-care",
          description:
            "Emotional support, social engagement, conversation, and meaningful activity companionship",
        },
        {
          title: "Daily Living Support",
          href: "/services/living-support",
          description:
            "Seamless home support for daily essentials. We handle chores, meals helping your loved ones live comfortably",
        },
        {
          title: "Respite Care",
          href: "/services/respite-care",
          description:
          "Temporary professional care giving family caregivers essential rest while maintaining quality support."
        },
        {
          title: "Skilled Nursing Care",
          href: "/services/skilled-nursing",
          description:
            "Professional medical monitoring, medication management, wound care, and complex health condition support.",
        },
        {
          title: "Specialized Care Services",
          href: "/services/specialized-care",
          description:
            "Targeted support for Alzheimer's, Parkinson's, post-stroke recovery, and chronic illness management.",
        },
      ]
    }
  },
  corporate: {
    title: "Corporate",
    menu: {
      cover: {
        href: "/corporate",
        cover_img: "/_static/stocks/girl_beau.jpg",
        title: "Corporate Services",
        description: "Explore our corporate services, designed to engage the medical needs of your businesses and clients"
      },
      links: [
        {
          title: "Private Nursing",
          href: "/corporate/private-nursing",
          description:
            "Personalized, one-on-one nursing care tailored to individual health requirements and comfort.",
        },
        {
          title: "Corporate Medical Staffing",
          href: "/corporate/medical-staffing",
          description:
            "Connecting healthcare organizations with top-tier medical professionals, quickly and efficiently.",
        },
        {
          title: "Nursing Recruitment",
          href: "/corporate/nursing-recruitment",
          description:
            "Specialized recruitment for skilled nursing professionals, matching top talent with organizations' precise staffing needs",
        },
      ]
    }
  },
  company: {
    title: "Company",
    menu: {
      links: [
        {
          title: "About",
          href: "/about",
          description:
            "Healthcare experts committed to connecting skilled medical talent with patients, families, and organizational needs.",
        },
        {
          title: "Corporate Social Responsibility",
          href: "/csr",
          description:
            "Driving positive change through ethical business practices, community engagement, and sustainable impact",
        },
      ]
    }
  },
  contact: {
    title: "Contact Us",
    href: "/contact",
  },
}


export function ServicesNavMenu({ links, scroll }: { scroll: boolean, links: NavItem[] }) {
  const scrollClx = cn({ "bg-transparent": scroll });

  const services = mlinks["services"]
  const corporate = mlinks["corporate"]
  const company = mlinks["company"]

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={scrollClx}>
            {services.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="group grid gap-3 p-4 md:w-[700px] lg:w-[800px] lg:grid-cols-[.75fr_1fr_1fr]">
              <li className="row-span-3" >
                <NavigationMenuLink asChild>
                  <a
                    className="flex size-full select-none flex-col justify-end rounded-md bg-cover bg-no-repeat no-underline  outline-none focus:shadow-md"
                    href={services.menu.cover.href}
                    style={{backgroundImage: `url("${services.menu.cover.cover_img}")`}}
                  >
                    <div className="flex flex-col bg-gradient-to-b from-muted/10 via-muted/30 via-muted/60 to-muted p-3">
                      <Icons.heartPulse className="size-10 group-hover:text-primary" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        {services.menu.cover.title}
                      </div>
                      <p className="text-sm leading-tight text-foreground/80">
                        {services.menu.cover.description}
                      </p>
                    </div>

                  </a>
                </NavigationMenuLink>
              </li>
              {services.menu.links.map(link => (
                <ListItem key={link.href} href={link.href} title={link.title}>
                  {link.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={scrollClx}>Corporate</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="group grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-[.75fr_1fr] lg:w-[600px] ">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex size-full select-none flex-col justify-end rounded-md bg-cover bg-no-repeat no-underline outline-none focus:shadow-md"
                    href={corporate.menu.cover.href}
                    style={{backgroundImage: `url("${corporate.menu.cover.cover_img}")`}}
                  >
                    <div className="flex flex-col justify-end bg-gradient-to-b from-muted/10 via-muted/30 via-muted/60 to-muted p-3">
                      <Icons.stethoscope className="size-10 group-hover:text-primary" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        {corporate.menu.cover.title}
                      </div>
                      <p className="text-sm leading-tight text-foreground">
                        {corporate.menu.cover.description}
                      </p>
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
              {corporate.menu.links.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={scrollClx}>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="group grid w-[400px] gap-3 p-4">
              {company.menu.links.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href={mlinks['contact']?.href} legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), scrollClx)}>
              {mlinks["contact"].title}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none group-hover:text-primary">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
