import React from 'react';
import Link from "next/link";
import {servicesBriefList} from "@/config/services";
import {Icons} from "@/components/shared/icons";
import {Button} from "@/components/ui/button";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {HeaderSection} from "@/components/shared/header-section";
import {Blockquote} from "@/components/custom/blockquotes";
import Image from "next/image";
import cn from "clsx";
import {Cta} from "@/components/custom/cta";

function Page() {

  return (
    <div className="overflow-hidden">
      <HeroServices />
      <Welcome />
      <Cta />
      <AllServices />
    </div>
  );
}

export default Page;


function Welcome() {
  return (
    <section className="py-16">
      <MaxWidthWrapper className="max-w-4xl space-y-12">
        <Blockquote className="font-geist text-xl">
          Our goal is to reduce your worry, lighten your load, and ensure your loved ones receive exceptional care with dignity, all from the comfort of their own home.
        </Blockquote>
        <p className="text-xl text-muted-foreground">
          Whether you&apos;re struggling with daily care, managing complex medical needs, or simply seeking quality companionship for an aging parent or a young child, we offer a compassionate, professional solution that adapts to your unique family situation.
        </p>
      </MaxWidthWrapper>
    </section>
  )
}

function HeroServices() {
  return (
    <section className="relative w-full bg-red-50 bg-[url('/_static/stocks/mum_kids.jpg')] bg-center py-40 md:py-24 lg:py-32 xl:py-48">
      <div className="container relative z-10 px-4  md:px-6">
        <div className="flex flex-col items-center space-y-12 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-pink-200 md:text-5xl lg:text-6xl/none">
              Our Care Services
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-gray-200 md:text-xl">
              Supporting independence and dignity with 24/7 professional home care services means your loved ones are in good hands always
            </p>
          </div>
          <div className="">
            <Link href="/contact">
              <Button className="rounded-full bg-pink-500 font-bold hover:bg-pink-400">
                Talk to a Care Advisor
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-0 size-full bg-black opacity-50"></div>
    </section>
  )
}

function FullServices() {

  return (
    <section>
      <div className="pb-6 pt-28">
        <MaxWidthWrapper>

          <div>
            <HeaderSection
              label="Our Services"
              title="Explore all services"
              subtitle="Our goal is to reduce your worry, lighten your load, and ensure your loved ones receive exceptional care with dignity, all from the comfort of their own home."
            />
            <div className="my-7 space-y-5 text-center">
              <p className="text-balance text-muted-foreground">
                Whether you&apos;re struggling with daily care, managing complex medical needs, or simply seeking quality companionship for an aging parent or a young child, we offer a compassionate, professional solution that adapts to your unique family situation.
              </p>

            </div>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {servicesBriefList.map((service) => {
              const Icon = Icons[service.icon || "nextjs"];
              return (
                <div
                  className="group relative overflow-hidden rounded-2xl border bg-background p-5 md:p-8"
                  key={service.title}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b from-purple-500/80 to-white opacity-25 blur-2xl duration-300 group-hover:-translate-y-1/4 dark:from-white dark:to-white dark:opacity-5 dark:group-hover:opacity-10"
                  />
                  <div className="relative">
                    <div className="flex items-center space-x-3">
                      <div className="relative flex size-12 rounded-2xl border border-border shadow-sm *:relative *:m-auto *:size-6">
                        <Icon />
                      </div>
                      <span className="font-semibold">{service.title}</span>
                    </div>


                    <p className="mt-6 pb-6 text-muted-foreground">
                      {service.description}
                    </p>

                    <div className="-mb-5 flex gap-3 border-t border-muted py-4 md:-mb-7">
                      <Button
                        variant="secondary"
                        size="sm"
                        rounded="xl"
                        className="px-4"
                      >
                        <Link href={service.link} className="flex items-center gap-2">
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
  )
}

function AllServices () {
  let services = servicesBriefList.map((s, idx) => {
    Object.assign(s,  { reverse: idx % 2 !== 0});
    return s;
  })

  return (
    <section>
      {services.map((s,i) => {
        let grd = s.bg_gradients.join(', ');

        return (
          <div key={i} style={{ background: `linear-gradient(150deg, ${grd})`}}>
            <MaxWidthWrapper className="md:px-10" >
              <ServiceWrap
                key={s.title}
                images={s.images}
                title={s.title}
                content={s.content}
                link={s.link}
                // @ts-ignore
                reverse={s?.reverse}
              />
            </MaxWidthWrapper>
          </div>

        )})}
    </section>
  )
}


function ServiceWrap ({ images, title, content, link, reverse }) {
  const mainImg = images[0]
  const arrangement = reverse ? 'flex-row-reverse space-x-reverse' : 'flex-row';

  const cls = cn(
    arrangement,
    'flex space-x-12 space-y-12 py-16 max-md:space-x-7 md:py-32',
    'flex-wrap max-md:flex-col',
  );

  return (
    <div className={cls}>
      {mainImg && (
        <div className="min-w-2xl relative flex justify-center">
          <ImageCollage main={mainImg} images={images.slice(1)} w={400} h={250} alt={title} reverse={reverse} />
        </div>
      )}
      <div className="max-w-2xl">
        <div className="space-y-5">
          <h3 className={cn('font-heading text-3xl', {'text-right': reverse })}>{title}</h3>
          <div className="space-y-3">
            {content.map((c, idx) => (
              <p key={idx} className={cn('text-lg ', {'text-right': reverse, 'text-muted-foreground': idx !== 0 })}>{c}</p>
            ))}
          </div>
        </div>
        <div className={cn('mt-7 flex w-full', {'justify-end': reverse} )}>
          {link && (
            <Link href={link}>
              <Button className="rounded-full  px-7">
                Read More
              </Button>
            </Link>
          )}
        </div>

      </div>

    </div>
  )
}
const placements = ['top-0', 'bottom-0'];

function ImageCollage({ main, images, alt, w, h, reverse }) {
  return (
    <div>
      <Image src={main} alt={alt} height={w} width={h} className="rounded-[20px]" />
      {images.map((img, idx) => {

        let tx = Math.floor(Math.random() * 150) + 50;
        let ty = Math.ceil(Math.random() * 200) * (Math.round(Math.random()) ? 1 : -1)
        let rotate = Math.floor(Math.random() * 50);
        let p = placements[Math.floor(Math.random() * 2)] || placements[1]

        if (!reverse) {
          tx = tx * -1;
          rotate = rotate * -1;
        }

        const cls = cn('absolute rounded-[20px] max-md:-translate-y-20',  `z-[${idx + 1}] ${p}`)
        return (
          <Image
            key={idx}
            src={img}
            alt={alt}
            height={w}
            width={h}
            className={cls}
            style={{transform: `translate3d(${tx}px, ${ty}px, 30px) rotate(${rotate}deg) scale(0.6)`}}
          />
        )})}
    </div>
  )
}