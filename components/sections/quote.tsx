import {Card} from "@/components/ui/card";
import {MessageContactForm} from "@/components/forms/contact-form";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import Image from "next/image";
import {Icons} from "@/components/shared/icons";

export default function QuoteForm() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <MaxWidthWrapper className="space-y-16 px-4 md:px-6">
          <div className="mx-auto max-w-[900px] space-y-2 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tighter md:text-4xl">Request a Call From Us</h2>
            <p className=" text-muted-foreground md:text-lg/relaxed">
              Interested in our services? Fill out the form below and we&apos;ll get back to you with smiles.
            </p>
          </div>
          <div className="grid-col-1 md:grid-col-7 grid space-y-12">
            <div className="relative col-span-2">
              <Image
                src="/_static/stocks/woman_child.jpg"
                alt=""
                width={300}
                height={450}
                className="rounded-[24px]"
                style={{ transform: 'rotate(3deg)' }}

              />
              <Image
                src="/_static/stocks/ladies.jpg"
                alt=""
                width={250}
                height={1}
                className="absolute bottom-0 right-0 rounded-[24px]"
                style={{ transform: 'translate3d(-60px, -15px, 300px) rotate(-7deg)' }}
              />
              <Card
                className="-z-1 absolute right-0 top-0 size-32 rounded-lg border-gray-200 bg-pink-300 p-5"
                style={{ transform: 'translate3d(-60px, -15px, 300px) rotate(-14deg)' }}
              >
                <div className="text-gray-900">
                  <Icons.heart className="size-9 text-center text-red-600" />
                  <span className="block font-heading text-3xl">1600+</span>
                  <span className="font-urban text-sm font-bold capitalize">Lives cared</span>
                </div>
              </Card>
              <Card
                className="absolute right-0 top-24 -z-10 size-32 rounded-lg bg-pink-500 p-7"
                style={{ transform: 'translate3d(30px, -15px, 300px) rotate(9deg)' }}
              >
                <div className="text-gray-100">
                  <span className="block font-heading text-3xl">250+</span>
                  <span className="font-urban text-sm font-bold capitalize">professional caregivers</span></div>
              </Card>
            </div>
            <div className="col-span-1 flex justify-center space-y-2 md:col-span-2 md:col-start-6">
              <Card className="w-96 p-7">
                <MessageContactForm />
              </Card>
            </div>
          </div>
      </MaxWidthWrapper>
    </section>
  )
}