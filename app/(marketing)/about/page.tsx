import React from 'react';
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {Icons} from "@/components/shared/icons";
import {Cta} from "@/components/custom/cta";

function Page() {
  return (
    <div>
      <AboutHero />
      <CoreValues />
      <Cta />
    </div>
  );
}

export default Page;

function AboutHero() {
  return (
    <div>

    </div>
  )
}

function CoreValues() {
  return (
    <section className="py-24">
      <MaxWidthWrapper>
        <div className="text-center">
          <h2 className="font-geist text-3xl font-bold leading-tight md:text-4xl">Our Core Values</h2>
          <p className="mt-4 text-base leading-7 sm:mt-8">
            Our values are at the core of everything we do. They’re the qualities we look for in our team and clients, and they outline how we approach our work. Since we began, our values have remained the same, and it’s keeping our values at the forefront that has powered our journey so far.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-12 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 md:grid-cols-3 md:gap-0 xl:mt-24">

          <div className="md:p-8 lg:p-14">
            <Icons.phone className="mx-auto size-20" />
            <h3 className="mt-12 font-urban text-xl font-bold">Passion</h3>
            <p className="mt-5 text-base">
              We’re passionate about all things digital. It’s this passion that aids us in achieving the best possible results for our clients.
            </p>
          </div>

          <div className="md:border-l md:border-gray-200 md:p-8 lg:p-14">
            <Icons.mapPin className="mx-auto size-20" />
            <h3 className="mt-12 font-urban text-xl font-bold">Freedom</h3>
            <p className="mt-5 text-base">
              There are no limits to our employees’ potential. Our experts thrive when given the freedom to explore and experiment.
            </p>
          </div>

          <div className="md:border-l md:border-gray-200 md:p-8 lg:p-14">
            <Icons.bookOpen className="mx-auto size-20" />
            <h3 className="mt-12 font-urban text-xl font-bold">Integrity</h3>
            <p className="mt-5 text-base">
              We’re always open and frank as we pursue optimum ways to innovate because we firmly believe that our activities make a positive difference.
            </p>
          </div>

          <div className="md:border-t md:border-gray-200 md:p-8 lg:p-14">
            <Icons.home className="mx-auto size-20" />
            <h3 className="mt-12 font-urban text-xl font-bold">Respect</h3>
            <p className="mt-5 text-base">
              Respect is our universal code and is at the core of our approach. We are all equal, and we embrace other ideas in search of the best solutions.
            </p>
          </div>
          <div className="md:border-l md:border-t md:border-gray-200 md:p-8 lg:p-14">
            <Icons.gitHub className="mx-auto size-20" />
            <h3 className="mt-12 font-urban text-xl font-bold">Dedication</h3>
            <p className="mt-5 text-base">
              We’re fully committed to fulfilling the goals of our clients which is why we devote ourselves to every step of the process.
            </p>
          </div>

          <div className="md:border-l md:border-t md:border-gray-200 md:p-8 lg:p-14">
          </div>
      </div>
      </MaxWidthWrapper>
    </section>
  )
}
