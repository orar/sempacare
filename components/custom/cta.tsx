import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import React from "react";


export function Cta({ headline, subText }: { headline?: string, subText?: string }) {
  const _headline = headline || 'Let us care for you now?';
  const _subText = subText || "Get in touch with us and let's figure out how we can care for you or your loved one.";

  return (
    <section className="py-12">
      <MaxWidthWrapper className="space-y-3 text-center">
        <h2 className="font-geist text-3xl font-bold capitalize">{_headline}</h2>
        <p className="text-lg">{_subText}</p>
        <div className="mx-auto pt-7">
          <Link href="/contact">
            <Button className="rounded-full px-7">
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>

      </MaxWidthWrapper>
    </section>
  )
}
