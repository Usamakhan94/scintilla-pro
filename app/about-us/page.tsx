import AboutHero from "@/components/sections/about/about-hero";
import FuelingSuccess from "@/components/sections/about/fueling-success";
import OurValue from "@/components/sections/about/our-value";
import Success from "@/components/sections/about/success";
import WideService from "@/components/sections/about/wide-service";
import ContactUs from "@/components/sections/contact-us";
import FortuneCompanies from "@/components/sections/fortune-companies";
import Testimonials from "@/components/sections/testimonials";
import WorkWithUs from "@/components/sections/work-with-us";

const page = () => {
  return (
    <main>
      <AboutHero />
      <Success />
      <FuelingSuccess />
      <OurValue />
      <WideService />
      <FortuneCompanies />
      <WorkWithUs />
      <Testimonials />
      <ContactUs />
    </main>
  );
};

export default page;
