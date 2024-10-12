import ContactUs from "@/components/sections/contact-us";
import AboutOurService from "@/components/sections/services/about-services";
import ServiceHero from "@/components/sections/services/hero-service";
import OurServices from "@/components/sections/services/our-services";
import Portfolio from "@/components/sections/services/portfolio";
import OurPricing from "@/components/sections/services/price-list";
import Testimonials from "@/components/sections/testimonials";
import WorkTogether from "@/components/sections/work-together";

const page = () => {
  const service = {
    mainBanner: {
      mainTitle: "Hire Video Animation Experts",
      introPara:
        "Right video animation can result in higher user engagement, aesthetically rich websites and greater conversion rates.We bring forth numerous options to choose from. Get an amazing customized animated video for your brand today.",
    },
    sectionBanner: {
      sectionTitle: "We are one-stop animation video company for you",
      sectionPara:
        "Our team of talented tech-geeks can help you up your website or product game through fun, creative and eye-catching animations. If you wish to learn more or get a quotation, then reach out to our 24/7 available swift customer service. We are there to help you and bring some innovation as well as a revolution in the video animation market.",
    },
    tabs: {
      tabtriggers: [
        "2D Animated Videos",
        "3D Animated Videos",
        "Whiteboard Animation",
        "Stop Motion Animation",
      ],
      tabContent: [
        {
          tabHeading: "2D Animation Services",
          tabInfo:
            "2D Animation videos make your brand and product stand out the most amongst all. It allows you to be creative at max. We are one of the leading 2D video animation agencies for a reason that is, complete client satisfaction and excellent service.",
        },
        {
          tabHeading: "3D animation services",
          tabInfo:
            "Over the past few decades, 3D animation has gained immense recognition & popularity. From rough models and textures to rendered images and videos, our team uses a combination of technologies to create stunning 3D animations for any type of brand. Hire our video animation expert and become a part of the San Jose animation club.",
        },
        {
          tabHeading: "Whiteboard Animation Services",
          tabInfo:
            "As per research, we came to the conclusion that whiteboard animation videos capture the maximum traffic and generate leads. If you are also willing to be a part of such high conversion rates websites, then hire our top-notch whiteboard video animators. We provide what your business needs and requires in the best way possible.",
        },
        {
          tabHeading: "Stop Motion Animation",
          tabInfo:
            "Stop-motion animation, with all of its quirks, is an engaging medium and part of the online world. Our team of experienced video animators has created numerous stop-motion videos with interesting concepts in the past.We also customize product animation videos and provide logo animation services upon request.",
        },
      ],
    },
    portfolio: false,
  };
  return (
    <main>
      <ServiceHero content={service.mainBanner} title={"video-animation"} />
      <AboutOurService
        content={service.sectionBanner}
        title={"video-animation"}
      />
      {service.tabs?.tabContent && (
        <OurServices content={service.tabs} title={"video-animation"} />
      )}
      {service.portfolio && <Portfolio title={"video-animation"} />}
      <OurPricing />
      <WorkTogether />
      <Testimonials />
      <ContactUs />
    </main>
  );
};

export default page;
