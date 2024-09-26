import ComboPackage from "@/components/sections/combo-package";
import ContactUs from "@/components/sections/contact-us";
import AboutOurService from "@/components/sections/services/about-services";
import ServiceHero from "@/components/sections/services/hero-service";
import OurServices from "@/components/sections/services/our-services";
import Portfolio from "@/components/sections/services/portfolio";
import OurPricing from "@/components/sections/services/price-list";
import Testimonials from "@/components/sections/testimonials";
import WorkTogether from "@/components/sections/work-together";
import servicesList from "@/app/services-content";

const page = ({ params }: { params: { id: keyof typeof servicesList } }) => {
  const service = servicesList[params.id]?.[0];

  if (!service) {
    return <p>404</p>;
  }

  console.log(service);
  return (
    <main>
      <ServiceHero />
      <AboutOurService />
      <OurServices />
      <Portfolio />
      <OurPricing />
      <WorkTogether />
      <ComboPackage />
      <Testimonials />
      <ContactUs />
    </main>
  );
};

export default page;
