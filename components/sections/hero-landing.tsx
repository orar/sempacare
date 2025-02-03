import Link from "next/link";

import { env } from "@/env.mjs";
import { siteConfig } from "@/config/site";
import { cn, nFormatter } from "@/lib/utils";
import {Button, buttonVariants} from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

export default async function HeroLanding() {

  return (
    <section className="relative w-full bg-red-50 bg-[url('/_static/stocks/landing.jpg')] bg-center py-40 md:py-24 lg:py-32 xl:py-48">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center md:justify-end">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter text-pink-200 sm:text-4xl md:text-5xl lg:text-6xl/none">
              Compassionate Care
            </h1>
            <h1 className="text-5xl font-bold tracking-tighter text-pink-200 sm:text-4xl md:text-5xl lg:text-6xl/none">
              Right at Home
            </h1>
            <p className="mx-auto max-w-[700px] text-white md:text-xl">
              We bring comfort, dignity, and independence to your family and loved ones keeping them connected and happy.
            </p>
          </div>
          <div className="flex flex-wrap items-baseline justify-center space-x-4 space-y-3">
            <Link href="/contact">
              <Button className="rounded-full">
                Schedule a Free Consultation
              </Button>
            </Link>
            <Link href="/services" className="whitespace-nowrap font-bold text-white">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-0 size-full bg-black opacity-50"></div>
    </section>
  );
}
