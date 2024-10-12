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
      mainTitle: "Professional and highly creative copywriting services",
      introPara:
        "Our experts write copies that leave an everlasting impression on your audiences. Clear, crisp and captivating copies that do wonders for your brand.",
    },
    sectionBanner: {
      sectionTitle: "Clear, Connecting & Captivating SEO Copywriting Services",
      sectionPara:
        "Scintillapro offers professional copywriting services to businesses, eCommerce, agencies and startups. Our experts develop content that is optimized, plagiarism-free and highly creative yet professional. Our objective is to write copies that enhance your brand's digital presence, improves organic traffic, and promotes more leads. We also deal in website copywriting services, SEO copywriting services, blogs, articles, and everything you want us to write for your brand.",
    },
    tabs: {
      tabtriggers: [
        "Article Writing Services",
        "Blog Writing",
        "Press Release",
        "Website Content",
        "Product Description",
      ],
      tabContent: [
        {
          tabHeading: "Article Writing Services",
          tabInfo:
            "We understand that article writing is not a piece of pie and for that reason our professional native English writers are here to rescue you. Scintillapro masters in article writing because of our dedicated teams of experienced, skilled, and intelligent writers. Let our writing do the talking for your business.",
        },
        {
          tabHeading: "Blog Writing Services",
          tabInfo:
            "Scintillapro brings forward blog writing services for its clients and customers at great prices. Blogging is one of the most preferred way to drive traffic, serves as catalyst for marketing via email and so much more.Our experts create amazing blog content that will make your clientele or target audience fall in love with your brand.",
        },
        {
          tabHeading: "Press Release",
          tabInfo:
            "Press release is a type of writing that is powerful, and captivating. Our professional writers and authors are skilled and understand the psyche. We have decades of experience in advertising content and copywriting for various businesses across many platforms.",
        },
        {
          tabHeading: "Website Copywriting Services",
          tabInfo:
            "Quality web content material delivers value to traffic and enables increased website sales and conversions, drives traffic, improves web content sharing, and increases the degree of engagement of your customers.",
        },
        {
          tabHeading: "Product Description",
          tabInfo:
            "Scintillapro presents product description writing services to its honorable clientele. Our professional writers will make certain to provide the most attractive product description with clean specifications and specific characteristics of your services and products. Our objective is to provide everything you anticipate.",
        },
      ],
    },
    portfolio: false,
    comboPackage: {},
  };
  return (
    <main>
      <ServiceHero
        content={service.mainBanner}
        title={"creative-copywriting"}
      />
      <AboutOurService
        content={service.sectionBanner}
        title={"creative-copywriting"}
      />
      <OurServices content={service.tabs} title={"creative-copywriting"} />
      <Portfolio title={"creative-copywriting"} />
      <OurPricing />
      <WorkTogether />
      <Testimonials />
      <ContactUs />
    </main>
  );
};

export default page;
