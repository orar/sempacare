import Link from "next/link";

import { features } from "@/config/landing";
import { Button } from "@/components/ui/button";
import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function Services() {
  return (
    <section>
      <div className="pb-6 pt-28">
        <MaxWidthWrapper>
          <HeaderSection
            label="Simplified Services"
            title="Discover care services"
            subtitle="From basic personal care to specialized nursing, we offer comprehensive home care solutions tailored to your unique needs. Our experienced team delivers professional, compassionate care that helps your loved ones maintain independence and dignity at home."
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = Icons[feature.icon || "nextjs"];
              return (
                <div
                  className="group relative overflow-hidden rounded-2xl border bg-background p-5 md:p-8"
                  key={feature.title}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b from-purple-500/80 to-white opacity-25 blur-2xl duration-300 group-hover:-translate-y-1/4 dark:from-white dark:to-white dark:opacity-5 dark:group-hover:opacity-10"
                  />
                  <div className="relative ">
                    <div className="flex flex-col items-center space-y-3">
                      <Icon className="size-16 transition-all duration-300 group-hover:text-primary" />
                      <span className="text-xl font-semibold">{feature.title}</span>
                    </div>

                    <p className="mt-6 h-12 overflow-hidden text-ellipsis pb-6 text-muted-foreground">
                      {feature.description}
                    </p>

                    <div className="-mb-5 flex gap-3 border-t border-muted py-4 md:-mb-7">
                      <Button
                        variant="secondary"
                        size="sm"
                        rounded="xl"
                        className="px-4"
                      >
                        <Link href={feature.link} className="flex items-center gap-2">
                          <span>Learn More</span>
                          <Icons.arrowRight className="size-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
