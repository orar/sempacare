import React from 'react';
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {Icons} from "@/components/shared/icons";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {contact} from "@/config/contact";

// intro
// staff
// use case

// we constantly review and update our portfolio to match the specialties of the industry and the specialists.
// Infective sourcing medical staff can result in lawsuits and brand damage. This makes sourcing of medical personnel
// need more attention and time to make sure all personnel have gumption need for the role.
// We are to alleviate that stress for you. We are always on the search for practitioners to help clients like you within the shortest possible time
//
// List of common roles and specialties:

// doctors
// nurses
// dietitian
// care practitioner
// lab technicians
// midwives
// dentists & optometrist
// biomedical technicians & engineers
// custom role

// use cases
// public and private medical facility
// government & ngos
// private & residential clients
// foreign assistance and intl inclusion


export default function Page() {
  const contactEmail = contact.email[0]

  return (
    <section className="py-16">
      <MaxWidthWrapper className="grid grid-cols-1 space-y-12 md:gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="font-heading text-2xl text-foreground md:text-4xl lg:text-[40px]">
            Corporate Medical Staffing Solutions
          </h2>
          <div className="mt-2 text-muted-foreground">
            Precision in Placement, Excellence in Care
          </div>
          <div className="mt-10 space-y-3">
            <p>
              We meticulously review and continuously update our talent portfolio to match the evolving specialties and demands of the healthcare industry.
            </p>
            <p>
              Our rigorous sourcing process mitigates risks of potential lawsuits and brand damage by ensuring each professional meets the highest standards of competence and expertise.
            </p>
          </div>
          <div className="py-7">
            <div className="my-3 border-b border-primary">
              <h3 className="font-heading text-2xl text-foreground/70">Our mission</h3>
            </div>
            <div className="space-y-3">
              <p>
                Our mission is to alleviate the stress of medical personnel recruitment.
              </p>
              <p>
                We leverage our extensive network and sophisticated screening processes to connect you with top-tier healthcare professionals, delivering optimal candidates within the shortest possible timeframe.
              </p>
            </div>
          </div>
          <div className="">
            <div className="my-3 border-b border-primary">
              <h3 className="font-heading text-2xl text-foreground/70">
                Common Specialties
              </h3>
            </div>
            <p className="mt-7">
              Our medical staffing solutions span a wide range of critical healthcare roles:
            </p>
            <div className="mt-7">
              <ul className="space-y-7">
                <li>
                  <dl>
                    <dt className="grid grid-cols-[40px_1fr] items-center font-geist text-lg font-semibold">
                      <span className="pr-3"><Icons.stethoscope className="size-6 text-primary" /></span>
                      <span>Physicians</span>
                    </dt>
                    <dd className="pl-[40px]">Covering diverse medical specialties</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt className="grid grid-cols-[40px_1fr] items-center font-geist text-lg font-semibold">
                      <span className="pr-3"><Icons.heartPulse className="size-6 text-primary" /></span>
                      <span>Nurses</span>
                    </dt>
                    <dd className="pl-[40px]">From registered nurses to specialized care nurses</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt className="grid grid-cols-[40px_1fr] items-center font-geist text-lg font-semibold">
                      <span className="pr-3"><Icons.ribbon className="size-6 text-primary" /></span>
                      Allied Health Professionals
                    </dt>
                    <dd className="mt-3 pl-[40px]">
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <span className="mr-5"><Icons.fish className="size-4" /></span>
                          Dietitians
                        </li>
                        <li className="flex items-center">
                          <span className="mr-5"><Icons.user className="size-4" /></span>
                          Care Practitioner
                        </li>
                        <li className="flex items-center">
                          <span className="mr-5"><Icons.microscope className="size-4" /></span>
                          Lab Technicians
                        </li>
                        <li className="flex items-center">
                          <span className="mr-5"><Icons.speech className="size-4" /></span>
                          Dentists
                        </li>
                        <li className="flex">
                          <span className="mr-5"><Icons.glasses className="size-4" /></span>
                          Optometrists
                        </li>
                      </ul>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt className="grid grid-cols-[40px_1fr] items-center font-geist text-lg font-semibold">
                      <Icons.dna className="size-6 text-primary" /> Technical Specialists
                    </dt>
                    <dd className="mt-3 pl-[40px]">
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <span className="mr-5"><Icons.userRoundCog className="size-4" /></span>
                          Biomedical Technicians
                        </li>
                        <li className="flex items-center">
                          <span className="mr-5"><Icons.userRoundCog className="size-4" /></span>
                          Biomedical Engineers
                        </li>
                      </ul>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt className="grid grid-cols-[40px_1fr] items-center font-geist text-lg font-semibold">
                      <Icons.infinity className="size-6 text-primary" /> Custom Role Placement
                    </dt>
                    <dd className="mt-3 pl-[40px]">
                      Tailored to your unique organizational needs
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12">
            <div className="my-3 border-b border-primary">
              <h3 className="font-heading text-2xl text-foreground/70">
                Our Service Reach
              </h3>
            </div>
            <div className="my-5">
              We provide medical staffing solutions for:
            </div>
            <div>
              <ul className="space-y-7">
                <li>
                  <dl>
                    <dt className="grid grid-cols-[40px_1fr] items-center font-geist text-lg font-semibold">
                      <span className="pr-3"><Icons.rockingChair className="size-6 text-primary" /></span>
                      <span>Private and Residential Clients</span>
                    </dt>
                    <dd className="pl-[40px] text-foreground/80">
                      Our medical staffing solutions support hospitals, clinics, and medical centers, providing skilled professionals for both outpatient and inpatient care settings.
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt className="grid grid-cols-[40px_1fr] items-center font-geist text-lg font-semibold">
                      <span className="pr-3"><Icons.stethoscope className="size-6 text-primary" /></span>
                      <span>Public and Private Medical Facilities</span>
                    </dt>
                    <dd className="pl-[40px] text-foreground/80">
                      Our medical staffing services cater to both public and private medical facilities, ensuring hospitals, clinics, and medical centers can efficiently staff their outpatient and inpatient care settings with skilled healthcare professionals.
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt className="grid grid-cols-[40px_1fr] items-center font-geist text-lg font-semibold">
                      <span className="pr-3"><Icons.landmark className="size-6 text-primary" /></span>
                      <span>Government and Non-Governmental Organizations</span>
                    </dt>
                    <dd className="pl-[40px] text-foreground/80">
                      We provide comprehensive staffing solutions for government and NGO healthcare programs, supporting public health initiatives, facilitating community health services, and deploying skilled professionals to humanitarian medical missions around the world.
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt className="grid grid-cols-[40px_1fr] items-center font-geist text-lg font-semibold">
                      <span className="pr-3"><Icons.plane className="size-6 text-primary" /></span>
                      <span>International Aid and Global Healthcare Initiatives</span>
                    </dt>
                    <dd className="pl-[40px] text-foreground/80">
                      We provide international healthcare support through cross-border medical staffing, connecting global health organizations with qualified professionals and supporting emergency medical response teams in critical situations worldwide.
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="my-24 space-y-10">
        <p className="mx-auto max-w-3xl text-center text-lg">
          Our goal is to connect you with qualified medical professionals quickly and efficiently, ensuring your healthcare needs are met with the highest level of expertise.
        </p>
        <div className="flex justify-center">
          <Link href={`mailto:${contactEmail}?subject=Medical%20Staffing`}>
            <Button size="lg" className="rounded-full px-20 font-semibold">Let&apos;s Connect Now</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
