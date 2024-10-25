import BestSolution from "@/components/sections/home/best-solution";
import ComboPackage from "@/components/sections/combo-package";
import ContactUs from "@/components/sections/contact-us";
import FortuneCompanies from "@/components/sections/fortune-companies";
import Hero from "@/components/sections/home/hero";
import MarketingMethods from "@/components/sections/home/marketing-methods";
import OurFeatures from "@/components/sections/home/our-features";
import OurPricing from "@/components/sections/home/our-pricing";
import Services from "@/components/sections/home/services";
import Testimonials from "@/components/sections/testimonials";
import WorkTogether from "@/components/sections/work-together";
import WorkWithUs from "@/components/sections/work-with-us";
import PaymentMethods from "@/components/sections/home/payment-methods";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurFeatures />
      <Services />
      <BestSolution />
      <MarketingMethods />
      <OurPricing />
      <WorkTogether />
      <ComboPackage />
      <FortuneCompanies />
      <WorkWithUs />
      <PaymentMethods />
      <Testimonials />
      <ContactUs />
    </main>
  );
}
