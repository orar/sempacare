import React from 'react';
import {contact} from "@/config/contact";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import Link from "next/link";
import {Button} from "@/components/ui/button";


// private nursing
// we help provide nursing for client

const Page = () => {
  const contactEmail = contact.email[0]

  return (
    <section className="bg-zinc-300/20 py-24">
      <MaxWidthWrapper className="grid grid-cols-1 space-y-12 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="font-heading text-2xl text-foreground md:text-4xl lg:text-[40px]">
            Nursing Recruitment
          </h2>
          <div className="mt-2 text-muted-foreground">
            Nursing Talent Acquisition with Precision
          </div>
          <div className="mt-10 space-y-3">
            <p>
              Our specialized nursing recruitment services focus on connecting healthcare facilities with exceptional nursing talent.
            </p>
            <p>
              We understand that quality patient care stems from having the right professionals in the right roles. Through rigorous screening processes and comprehensive skills assessment, we ensure each placement meets the highest standards of professional excellence.
            </p>
            <p>
              Whether you need to staff a hospital unit, specialty clinic, or private care facility, our recruitment team works efficiently to identify and place nursing professionals who match your specific requirements.
            </p>
            <p>
              We handle the complexities of credential verification, background checks, and professional reference validation, streamlining the hiring process while maintaining the highest standards of quality
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="my-24 space-y-10">
        <p className="mx-auto max-w-3xl text-center text-lg">
          Our commitment aims at creating successful, long-term matches that benefit both healthcare facilities and nursing professionals, ultimately contributing to enhanced patient care outcomes.
        </p>
        <div className="flex justify-center">
          <Link href={`mailto:${contactEmail}?subject=Private%20Nursing`}>
            <Button size="lg" className="rounded-full px-20 font-semibold">Let&apos;s Connect Now</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;