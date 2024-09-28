import ContactUs from "@/components/sections/contact-us";
import AboutOurService from "@/components/sections/services/about-services";
import ServiceHero from "@/components/sections/services/hero-service";
import OurServices from "@/components/sections/services/our-services";
import Portfolio from "@/components/sections/services/portfolio";
import OurPricing from "@/components/sections/services/price-list";
import Testimonials from "@/components/sections/testimonials";
import WorkTogether from "@/components/sections/work-together";
import servicesList from "@/app/services-content";
import { notFound } from "next/navigation";
import AllInOneComboPackage from "@/components/sections/services/services-combo";

const page = ({ params }: { params: { id: keyof typeof servicesList } }) => {
  const service = servicesList[params.id]?.[0];

  if (!service) {
    return notFound();
  }

  return (
    <main>
      <ServiceHero content={service.mainBanner} title={params.id} />
      <AboutOurService content={service.sectionBanner} title={params.id} />
      {service.tabs?.tabContent && (
        <OurServices content={service.tabs} title={params.id} />
      )}
      {service.portfolio && <Portfolio title={params.id} />}
      <OurPricing />
      <WorkTogether />
      {service?.comboPackage?.pricing && (
        <AllInOneComboPackage content={service.comboPackage} />
      )}
      <Testimonials />
      <ContactUs />
    </main>
  );
};

export default page;
