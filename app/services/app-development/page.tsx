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
      mainTitle: "Mobile App Development, Globe",
      introPara:
        "We develop robust, comprehensive and ultra-modern mobile apps to optimize the efficiency of your brand and business.",
    },
    sectionBanner: {
      sectionTitle: "Scintillapro Top Mobile App Development Company in US",
      sectionPara:
        "To manage and streamline the complex operations of your business, you require a powerful, secure, swift, and robust mobile app. A great app can optimize the efficiency of the business exponentially and double the ROI utilized in app development. Therefore, your business needs a mobile application that we can develop and deliver. Because revolutionary products are our forte.",
    },
    tabs: {
      tabtriggers: [
        "iOS App Development",
        "Android App Development",
        "React Native App",
        "Ar/Vr App Development",
        "Customize Web App",
      ],
      tabContent: [
        {
          tabHeading: "iOS Mobile App Development Services in US",
          tabInfo:
            "We are the experts of iOS development and have been ruling the iOS development industry for a long time. It is our forte, and we strive to attain perfection. And for that very reason, our every iOS app is a masterpiece in itself. We provide mobile app development services in Globe that you can rely on.",
        },
        {
          tabHeading: "Android App Development",
          tabInfo:
            "Customized, extensible, and feature-rich android app development is one of our best solutions. Android has the maximum user-base across the globe, and in order to increase your business’s awareness, efficiency, accessibility, and clarity, your brand needs one great android app. Our professional and team of dedicated developers are always there to help you develop the app of your dreams.",
        },
        {
          tabHeading: "React Native App",
          tabInfo:
            "We develop custom reactive native apps that suit your brand and business in the most incredible way. Native apps are capable of acquiring functions of platform unique capability. Enhanced user experience and futuristic technology.",
        },
        {
          tabHeading: "Augmented & Virtual Reality App Development",
          tabInfo:
            "AR & VR is the future of tech and will take over the world in no time. Our team of experienced developers delivers incredible and engaging experiences by leveraging augmented reality and virtual reality to build next-generation apps. We can help you to be ahead of time and be a part of trend setting paradigms.",
        },
        {
          tabHeading: "Customize Web App Development Services, Globe",
          tabInfo:
            "It's time to improve the monotonous and basic websites into progressive web apps that resonate with your mobile app and brand’s persona. Our specialists who are masters in doing so will transform your website into a customizable, intelligent, and interactive web app.",
        },
      ],
    },
    portfolio: true,
    comboPackage: {},
  };
  return (
    <main>
      <ServiceHero content={service.mainBanner} title={"app-development"} />
      <AboutOurService
        content={service.sectionBanner}
        title={"app-development"}
      />
      {service.tabs?.tabContent && (
        <OurServices content={service.tabs} title={"app-development"} />
      )}
      {service.portfolio && <Portfolio title={"app-development"} />}
      <OurPricing />
      <WorkTogether />
      <Testimonials />
      <ContactUs />
    </main>
  );
};

export default page;
