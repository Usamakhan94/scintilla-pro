import ContactUs from "@/components/sections/contact-us";
import AboutOurService from "@/components/sections/services/about-services";
import ServiceHero from "@/components/sections/services/hero-service";
import OurServices from "@/components/sections/services/our-services";
import Portfolio from "@/components/sections/services/portfolio";
import OurPricing from "@/components/sections/services/price-list";
import Testimonials from "@/components/sections/testimonials";
import WorkTogether from "@/components/sections/work-together";
import AllInOneComboPackage from "@/components/sections/services/services-combo";

const page = () => {
  const service = {
    mainBanner: {
      mainTitle: "Customized Web Development",
      introPara:
        "Scalable, efficient, and customized web development solutions are just one tap away! Scintillapro is one of the leading web development companies . We offer customized web development solutions that are interactive, high-tech, and adaptive. Hire our team of experts today!",
    },
    sectionBanner: {
      sectionTitle: "Customized Web Development Services in US",
      sectionPara:
        "Our dedicated teams of professional web designers and developers augment an innovative & conversion-driven site on WordPress. Aspire Logo holds the first spot when it comes to web development companies . We turn your visionary idea into a scalable, adaptive, and highly compatible website. Custom web development services and engaging web design can be a game-changer for your business. Therefore, reach out today and hire our team of experts. We integrate high-tech methods to make your business shine and help you achieve your goals in the most efficient way possible.",
    },
    tabs: {
      tabtriggers: [
        "Web Development",
        "WordPress",
        "eCommerce Web",
        "Corporate Website",
        "Flat Web",
        "Landing Pages",
      ],
      tabContent: [
        {
          tabHeading: "Interactive Web Development Services",
          tabInfo:
            "An engaging website does wonders since it increases USbility and end-user experience. Responsive web design and development intends to make pages render well on a wide range of gadgets and screen sizes.",
        },
        {
          tabHeading: "WordPress Custom Website Development",
          tabInfo:
            "WordPress is one of the leading CMS globally. It allows you to develop easy-to-use, engaging and highly scalable websites for your business and makes customized web development swift as well as adaptable. Hire our team of experts and allow us to build a fully customized website for you using WordPress.",
        },
        {
          tabHeading: "eCommerce Web Development",
          tabInfo:
            "We bring forward a broad spectrum of eCommerce comprehensive solutions that your website requires. Optimize the efficiency of your business & custom web development services through upscale, versatile, and user-friendly eCommerce sites.",
        },
        {
          tabHeading: "Corporate Website",
          tabInfo:
            "An effective corporate website that mirrors brand values and expertise is all that your business requires. We develop optimized tailor-made websites just for your business upon its requirements and needs. Our professional web development services can help your business shine and become more digitally present in no time.",
        },
        {
          tabHeading: "Flat Web Development, San Jose",
          tabInfo:
            "Flat websites use very minimal UI designs, are superfast and solely focus on the content. Flat websites convey brand’s message effectively and strengthen business image. To get your business’s flat website made, get in touch with our top-notch developers today.",
        },
        {
          tabHeading: "Landing Pages",
          tabInfo:
            "Landing page holds very significant value when it comes to marketing and brand image. It is also known as the main page of any website. Our top-notch developers build state-of-the-art landing pages in the most time and cost-efficient manner.",
        },
      ],
    },
    portfolio: true,
    comboPackage: {
      pricing: "999",
      offInPercent: "20",
      listing: [
        "Unlimited Custom Logo Design Concepts",
        "6 Dedicated Designers",
        "UNLIMITED Pages Website",
        "Mobile Responsive",
        "Icon Design",
        "Business Card, Letterhead, Envelope",
        "MS Word Letterhead",
        "5 Stock Photos + 3 Banner Designs",
        "Complete W3C Certified HTML",
        "Complete Deployment",
        "Complete Deployment",
        "Facebook Page Design",
        "All Final File Formats",
        "100% Satisfaction",
        "100% Ownership Rights*",
        "Money Back Guarantee",
        "Dedicated Account Manager",
      ],
    },
  };
  return (
    <main>
      <ServiceHero content={service.mainBanner} title={"web-development"} />
      <AboutOurService
        content={service.sectionBanner}
        title={"web-development"}
      />
      {service.tabs?.tabContent && (
        <OurServices content={service.tabs} title={"web-development"} />
      )}
      {service.portfolio && <Portfolio title={"web-development"} />}
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
