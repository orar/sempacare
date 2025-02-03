import React from 'react';
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {contact} from "@/config/contact";
import {corporate} from "@/config/corporate";

// private nursing
// medical staffing
// nursing recruitment
const Page = () => {
  return (
   <>
     <PrivateNursing />
     <MedicalStaffing />
     <NursingRecruitment />
   </>
  );
};

export default Page;

const contactEmail = contact.email[0]


export function PrivateNursing({ }) {
  const contactEmail = contact.email[0]

  return (
    <section className="py-16">
      <MaxWidthWrapper className="grid grid-cols-1 space-y-12 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="font-heading text-2xl text-foreground md:text-4xl lg:text-[40px]">
            Private Nursing
          </h2>
          <div className="my-3 text-lg text-muted-foreground">
            Expert Nursing Care, Personalized for Every Need
          </div>
          <div className="my-7 space-y-5">
            <p className="">
              Whether you&apos;re caring for an elderly loved one, recovering from surgery, or managing a chronic condition, our experienced healthcare team provides tailored nursing solutions.
            </p>
            <p>
              With specialized professionals ready to deliver compassionate, skilled care precisely where you need it.
            </p>
            <p>
              From elder care to surgical recovery, our specialized team ensures you receive exact, expert support tailored to your unique health landscape.
            </p>
          </div>
          <div className="space-x-7 py-10 md:space-x-12">
            <Link href="/corporate/private-nursing">
              <Button className="rounded-full px-7">Learn More</Button>
            </Link>
            <Link href={`mailto:${contactEmail}?subject=PrivateNursing`}>
              <Button className="rounded-full bg-foreground px-7 text-background">Get In Touch</Button>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div className="mx-auto grid auto-rows-[100px] grid-cols-5 gap-4 lg:auto-rows-[180px] ">
            <div
              className="col-span-2 row-span-2 w-full rounded-lg bg-cover"
              style={{backgroundImage: `url("${corporate.privateNursing.images.a}")`}}
            />
            <div
              className="col-span-3 w-full rounded-lg bg-cover"
              style={{backgroundImage: `url("${corporate.privateNursing.images.b}")`}}
            />
            <div
              className="col-span-3 w-full  rounded-lg bg-cover"
              style={{backgroundImage: `url("${corporate.privateNursing.images.c}")`}}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export function MedicalStaffing({ }) {

  return (
    <section className="bg-zinc-300/30 py-24">
      <MaxWidthWrapper className="grid grid-cols-1 space-y-12 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="font-heading text-2xl text-foreground md:text-4xl lg:text-[40px]">
            Medical Staffing
          </h2>
          <div className="my-3 text-lg text-muted-foreground">
            Expert Nursing Care, Personalized for Every Need
          </div>
          <div className="my-7 space-y-5">
            <p className="">
              Whether you&apos;re caring for an elderly loved one, recovering from surgery, or managing a chronic condition, our experienced healthcare team provides tailored nursing solutions.
            </p>
            <p>
              With specialized professionals ready to deliver compassionate, skilled care precisely where you need it.
            </p>
            <p>
              From elder care to surgical recovery, our specialized team ensures you receive exact, expert support tailored to your unique health landscape.
            </p>
          </div>
          <div className="space-x-7 py-10 md:space-x-12">
            <Link href="/corporate/medical-staffing">
              <Button className="rounded-full px-7">Learn More</Button>
            </Link>
            <Link href={`mailto:${contactEmail}?subject=Private%20Nursing`}>
              <Button className="rounded-full bg-foreground px-7 text-background">Get In Touch</Button>
            </Link>
          </div>
        </div>
        <div className="order-first w-full">
          <div className="mx-auto grid auto-rows-[100px] grid-cols-5 gap-4 lg:auto-rows-[180px] ">
            <div
              className="lg:rotate(-12deg) col-span-2 w-full rounded-lg bg-cover"
              style={{backgroundImage: `url("${corporate.medicalStaffing.images.a}")`}}
            />
            <div
              className="col-span-1 w-full rounded-lg bg-cover"
              style={{backgroundImage: `url("${corporate.medicalStaffing.images.b}")`}}
            />
            <div
              className="col-span-2 row-span-2 w-full rounded-lg bg-cover"
              style={{backgroundImage: `url("${corporate.medicalStaffing.images.c}")`}}
            />
            <div
              className="col-span-3 w-full  rounded-lg bg-cover"
              style={{backgroundImage: `url("${corporate.medicalStaffing.images.d}")`}}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export function NursingRecruitment({ }) {

  return (
    <section className="py-20">
      <MaxWidthWrapper className="grid grid-cols-1 space-y-12 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="font-heading text-2xl text-foreground md:text-4xl lg:text-[40px]">
            Nursing Recruitment
          </h2>
          <div className="my-3 text-lg text-muted-foreground">
            Expert Nursing Care, Personalized for Every Need
          </div>
          <div className="my-7 space-y-5">
            <p className="">
              Whether you&apos;re caring for an elderly loved one, recovering from surgery, or managing a chronic condition, our experienced healthcare team provides tailored nursing solutions.
            </p>
            <p>
              With specialized professionals ready to deliver compassionate, skilled care precisely where you need it.
            </p>
            <p>
              From elder care to surgical recovery, our specialized team ensures you receive exact, expert support tailored to your unique health landscape.
            </p>
          </div>
          <div className="space-x-7 py-10 md:space-x-12">
            <Link href="/corporate/private-nursing">
              <Button className="rounded-full px-7">Learn More</Button>
            </Link>
            <Link href={`mailto:${contactEmail}?subject=PrivateNursing`}>
              <Button className="rounded-full bg-foreground px-7 text-background">Apply</Button>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div className="mx-auto grid auto-rows-[100px] grid-cols-5 gap-4 lg:auto-rows-[180px] ">
            <div
              className="col-span-3 w-full rounded-lg bg-cover"
              style={{backgroundImage: `url("${corporate.nursingRecruitment.images.a}")`}}
            />
            <div
              className="col-span-2 w-full rounded-lg bg-cover"
              style={{backgroundImage: `url("${corporate.nursingRecruitment.images.b}")`}}
            />
            <div
              className="col-span-2 w-full rounded-lg bg-cover"
              style={{backgroundImage: `url("${corporate.nursingRecruitment.images.c}")`}}
            />
            <div
              className="col-span-3 w-full  rounded-lg bg-cover"
              style={{backgroundImage: `url("${corporate.nursingRecruitment.images.d}")`}}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>

  )
}