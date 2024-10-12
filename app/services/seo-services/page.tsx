import ContactUs from "@/components/sections/contact-us";
import AboutOurService from "@/components/sections/services/about-services";
import ServiceHero from "@/components/sections/services/hero-service";
import Portfolio from "@/components/sections/services/portfolio";
import OurPricing from "@/components/sections/services/price-list";
import Testimonials from "@/components/sections/testimonials";
import WorkTogether from "@/components/sections/work-together";

const page = () => {
  const service = {
    mainBanner: {
      mainTitle: "SEO Services Rank on Top on All Major Search Engines",
      introPara:
        "Scintillapro offers state-of-the-art SEO services which are based solely on results and client satisfaction.",
    },
    sectionBanner: {
      sectionTitle: "Professional SEO Company",
      sectionPara:
        "Scintillapro is one of the leading SEO services providers , Globe and nearby areas. We have served a number of A-List clients over the past few years. Our SEO specialists make sure that our collection, agile and result-oriented approach helps your brand with increased traffic, conversions, and digital visibility on all major search engines such as google, bing, and more.",
    },
    tabs: {},
    portfolio: false,
    comboPackage: {},
  };
  return (
    <main>
      <ServiceHero content={service.mainBanner} title={"seo-services"} />
      <AboutOurService content={service.sectionBanner} title={"seo-services"} />
      <Portfolio title={"seo-services"} />
      <OurPricing />
      <WorkTogether />
      <Testimonials />
      <ContactUs />
    </main>
  );
};

export default page;
