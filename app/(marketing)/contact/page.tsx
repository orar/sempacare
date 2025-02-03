import React from 'react';
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {Card} from "@/components/ui/card";
import {TestimonialCard} from "@/components/custom/testimony";
import { testimonials } from "@/config/landing";
import {MessageContactForm} from "@/components/forms/contact-form";
import { contact } from "@/config/contact";
import {Icons} from "@/components/shared/icons";

function Page(){
  return (
    <div>
      <ContactFormSection />
    </div>
  );
}

export default Page;

function ContactFormSection () {
  const testimonial1 = testimonials[Math.floor(Math.random() * testimonials.length)]
  const testimonial2 = testimonials[Math.floor(Math.random() * testimonials.length)]
  const testimonial3 = testimonials[Math.floor(Math.random() * testimonials.length)]

  return (
    <section className="py-24">
      <MaxWidthWrapper>
        <div className="grid-col-1 grid w-full md:grid-cols-7">
          <div className="col-span-1 space-y-12 md:col-span-3">
            <div>
              <h3 className="font-heading text-3xl">We will love to hear from you!</h3>
              <h3 className="font-heading text-3xl">Get in touch 👋</h3>
              <p className="mt-7">
                We offer free advisory to every one; no situation is the same. Just give us a call or send us an email.
              </p>
            </div>
            <div className="relative flex min-h-80 flex-wrap">
              <TestimonialCard
                testimony={testimonial1}
                maxContent={250}
                className="z-1"
                style={{
                  transform: `translate3d(20px, 45px, 30px) rotate(7deg) scale(0.9)`,
                  background: 'linear-gradient(145deg,  hsla(303 77% 22.2% / 0.3), hsla(340 81.6% 46.9% / 0.28),  hsla(63 100% 87.8% / 0.41), hsla(338 78.5% 56.3% / 0.1))'
              }}
              />
              <TestimonialCard
                testimony={testimonial2}
                maxContent={250}
                className="z-1"
                style={{
                  transform: `translate3d(-25px, -10px, 45px) rotate(-10deg) scale(0.9)`,
                  background: 'linear-gradient(145deg,  rgb(252, 199, 55, 0.1), hsla(24 89.7% 50.4% / 0.1),  hsla(63 100% 87.8% / 0.41), hsla(338 78.5% 56.3% / 0.1))'
              }}
              />
              <TestimonialCard
                testimony={testimonial3}
                maxContent={300}
                className="z-1"
                style={{
                  transform: `translate3d(35px, 10px, 45px) rotate(15deg) scale(0.7)`,
                  background: 'linear-gradient(145deg,  rgb(252, 199, 55, 0.1), hsla(24 89.7% 50.4% / 0.1),  hsla(291 71.6% 33.1% / 0.1), hsla(338 78.5% 56.3% / 0.1))'
              }}
              />
            </div>
          </div>
          <div className="col-span-1 px-3 py-16 md:col-span-3 md:col-start-5">
            <Card className="my-7 space-y-7 p-5">
              <div className="space-y-2">
                <h4 className="font-bold">
                  <Icons.phone className="inline size-4" />{" "}Phone
                </h4>
                <div className="text-lg">
                  {contact.phones.map(phone => <p><a href={`tel:${phone.id}`}>{phone.text}</a></p>)}
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold">
                  <Icons.mail className="inline size-4" />{" "}Email Address
                </h4>
                <div className="text-lg">
                  {contact.email}
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="inline font-bold">
                  <span><Icons.mapPin className="inline size-4" /></span>{" "}Location
                </h4>
                <div className="text-lg">
                  <p>{contact.address.line1}</p>
                  <p>{contact.address.line2}</p>
                </div>
              </div>

            </Card>
            <Card className="self-center rounded-lg p-7">
              <MessageContactForm />
            </Card>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}