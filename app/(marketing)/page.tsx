import { infos } from "@/config/landing";
import BentoGrid from "@/components/sections/bentogrid";
import Features from "@/components/sections/features";
import HeroLanding from "@/components/sections/hero-landing";
import InfoLanding from "@/components/sections/info-landing";
import Powered from "@/components/sections/powered";
import PreviewLanding from "@/components/sections/preview-landing";
import Testimonials from "@/components/sections/testimonials";
import ProductsLanding from "@/components/sections/products-landing";
import ServicesLanding from "@/components/sections/services-landing";
import QuoteForm from "@/components/sections/quote";
import Welcome from "@/components/sections/welcome";
import {Cta} from "@/components/custom/cta";

export default function IndexPage() {
  return (
    <>
      <HeroLanding />
      <Welcome />
      <InfoLanding data={infos[0]} />
      <Features />
      <Cta headline="Now, let us care for you!" />
      <BentoGrid />
      <Testimonials />
      <QuoteForm />


      {/*<ServicesLanding />*/}
      {/*<Powered />*/}
      {/*<InfoLanding data={infos[0]} reverse={true} />*/}
      {/* <InfoLanding data={infos[1]} /> */}
      {/*<Testimonials />*/}
    </>
  );
}
