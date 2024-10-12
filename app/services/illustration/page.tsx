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
      mainTitle: "Creative and Catchy Custom Illustration Services",
      introPara:
        "We create super engaging and creative graphic design illustrations that can help you shine bright on all leading digital platforms as well as it will set your website stand out the most.",
    },
    sectionBanner: {
      sectionTitle:
        "Artistic, Moving or Original, Our Creative Illustration Design Will Speak To The World On Your Behalf.",
      sectionPara:
        "Graphic design illustration is much more than just pretty images, and striking colors. Behind every illustration there's a techie who sets up the design, maps the flow and sequences of the images, then finds the right colors so that the illustration comes out as perfect as it can ever imagine. Therefore, behind every perfect character illustration styles and designs, there's someone’s hours of hard work. Our objective is to provide quality service that matches your budget, requirements, and brand’s needs. We make sure that we come up with exciting creative work that makes you and your client happy with the end results. We create illustrations that go with your brand’s image in possibly the best way.",
    },
    tabs: {},
    portfolio: true,
    comboPackage: {},
  };
  return (
    <main>
      <ServiceHero content={service.mainBanner} title={"illustration"} />
      <AboutOurService content={service.sectionBanner} title={"illustration"} />
      {service.portfolio && <Portfolio title={"illustration"} />}
      <OurPricing />
      <WorkTogether />
      <Testimonials />
      <ContactUs />
    </main>
  );
};

export default page;
