import React from 'react';
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {contact} from "@/config/contact";

//

export default function Page() {
  const contactEmail = contact.email[0]

  return (
    <section className="bg-zinc-300/20 py-24">
      <MaxWidthWrapper className="grid grid-cols-1 space-y-12 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="font-heading text-2xl text-foreground md:text-4xl lg:text-[40px]">
            Private Nursing
          </h2>
          <div className="mt-2 text-muted-foreground">
            Corporate Wellness, Reimagined: Private Nursing Solutions
          </div>
          <div className="mt-10 space-y-3">
            <p>
              Experience professional medical care tailored to your unique needs.
            </p>
            <p>
              Elevate your organization&apos;s health strategy with our specialized corporate private nursing services. We transform workplace health management from a reactive expense to a proactive investment
            </p>
            <p>
              Our nurses become an extension of your team, delivering comprehensive health support tailored to your corporate environment.
            </p>
            <p>
              From executive health screenings to comprehensive employee wellness programs, we provide precise, professional medical care that drives organizational performance.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="my-24 space-y-10">
        <p className="mx-auto max-w-3xl text-center text-lg">
          Empower your workforce with precision healthcare that drives organizational success.
        </p>
        <div className="flex justify-center">
          <Link href={`mailto:${contactEmail}?subject=Private%20Nursing`}>
            <Button size="lg" className="rounded-full px-20 font-semibold">Let&apos;s Connect Now</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}


