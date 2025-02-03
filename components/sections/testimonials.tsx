import { testimonials } from "@/config/landing";
import { HeaderSection } from "@/components/shared/header-section";
import {TestimonialCard} from "@/components/custom/testimony";

export default function Testimonials() {
  return (
    <section>
      <div className="container flex max-w-6xl flex-col gap-10 py-32 sm:gap-y-16">
        <HeaderSection
          label="Testimonials"
          title="What are our clients are saying?"
          subtitle="Explore some satisfying commentaries from delighted families."
        />

        <div className="column-1 gap-5 space-y-5 md:columns-2 lg:columns-3 ">
          {testimonials.map((item) => (
            <TestimonialCard testimony={item} key={item.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
