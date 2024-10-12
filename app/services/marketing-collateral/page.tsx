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
      mainTitle: "Marketing Collateral Design",
      introPara:
        "Impress your clientele through amazing and outstanding marketing collateral designs and more. We offer a large number of marketing designs, strategies, and everything that your fast-growing business needs.",
    },
    sectionBanner: {
      sectionTitle: "We offer solutions that Enable everlasting impressions",
      sectionPara:
        "Create marketing collateral for you, keeping your business requirements in measure. From designing marketing collateral to delivering what you require, we got you covered. Our high-tech teams provide all types of marketing collateral design services such as SEO, logo designs, illustrations, digital marketing, and so on. Our experts understand the industry and offer customized solutions that resonate with your brand with sheer elegance & drive better results.",
    },
    tabs: {
      tabtriggers: [
        "Stationery Design",
        "Brochure Design",
        "Poster Design",
        "Product Packing Design",
        "Book/magazine Design",
      ],
      tabContent: [
        {
          tabHeading: "Stationery Designing Marketing Collateral",
          tabInfo:
            "Business cards, letterheads, and other professional stationery templates are the essentials of any business. Allow us to create astounding stationary business supplies fully customized and one with lasting impressions.",
        },
        {
          tabHeading: "Brochure Design",
          tabInfo:
            "Creative, edgy, and professional brochure designs based on your brand’s persona that suits it the most. Our experts can help you run marketing campaigns through these unique and stunning brochures like never before. Therefore, allow us to level up the marketing collateral design dynamics in a snap!",
        },
        {
          tabHeading: "Poster Design",
          tabInfo:
            "Poster design is one of the commonly used types of marketing collateral which catches the eye quickly and promotes brand awareness during corporate events or seminars. We create amazing posters that make your brand stand out the most amongst many others. Clear goals, missions, strengthens and credibility on a poster speaking for itself.",
        },
        {
          tabHeading: "Product Packaging Design",
          tabInfo:
            "Great packaging means a great product. If you want to make your product hold the first spot and be the consumer’s favorite one, then the packing has to be remarkable. Our experts will add so much value in designing marketing collateral for your brand that will immediately catch the buyer's eye. Stronger presence of your brand is guaranteed.",
        },
        {
          tabHeading: "Book Designing Marketing Collateral",
          tabInfo:
            "Magazines and books are a necessity of every business, and coming up with one is not easy. But we are here to help you create an interesting yet creative book and magazine designs that suit your brand in the best way possible. Customization, as well as predefined template options, are always available. Get your brand’s book or magazines designed by top-notch designers today.",
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
      <ServiceHero
        content={service.mainBanner}
        title={"marketing-collateral"}
      />
      <AboutOurService
        content={service.sectionBanner}
        title={"marketing-collateral"}
      />
      {service.tabs?.tabContent && (
        <OurServices content={service.tabs} title={"marketing-collateral"} />
      )}
      {service.portfolio && <Portfolio title={"marketing-collateral"} />}
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
