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
      mainTitle: "eCommerce Solution Services",
      introPara:
        "eCommerce is taking the world by storm and changing the dynamics of the digital market. We provide complete, comprehensive e-commerce business solutions that aim to take your SMEs to new heights. Safe, secure, and completely customized e-commerce marketing solutions are just a tap away!",
    },
    sectionBanner: {
      sectionTitle:
        "Hire the best eCommerce Solution Providers For Your Rapidly Growing eCommerce Business",
      sectionPara:
        "We offer a wide range of e-commerce marketing solutions for small and large enterprises, startups, and entrepreneurs. eCommerce is rapidly growing and changing the dynamics of online stores, and shopping. If you require an Interactive, feature-filled, and highly compatible and user-friendly eCommerce business solution, then our dedicated teams can take the charge. Our skilled eCommerce solution provider can turn your eCommerce idea into reality using the latest technology. Therefore, get in touch because your dream gets your idea to become a part of the fast-paced eCommerce industry.",
    },
    tabs: {
      tabtriggers: [
        "Responsive Website",
        "Wordpress Website",
        "eCommerce Web",
        "Corporate Web",
        "Flat Website",
        "Landing pages",
      ],
      tabContent: [
        {
          tabHeading: "Responsive Website",
          tabInfo:
            "Responsive websites allow you to reach your audience in a much more engaging way than regular websites. Today, most people use smartphones or tablets when browsing the web, and responsive websites can host different screen sizes.",
        },
        {
          tabHeading: "WordPress Websites",
          tabInfo:
            "While WordPress simplifies the process of building your website, it's not entirely easy, especially when it comes to the creative side of web development. We can help you design fully custom websites using WordPress, so you don't have to worry much.",
        },
        {
          tabHeading: "eCommerce Website",
          tabInfo:
            "What makes an e-commerce website more effective than it already is? Merchant integration, CMS, product reports and coupons are just some of the ways we provide comprehensive online solutions to improve your annual income.",
        },
        {
          tabHeading: "Corporate Website",
          tabInfo:
            "An effective business website increases your brand credibility and strengthens your business image. These websites are meant to provide information about their products and services so that every viewer can fully understand what they stand for.",
        },
        {
          tabHeading: "Flat Website",
          tabInfo:
            "Flat design websites implement minimalist UI designs that are effective for apps and websites. Simple but attractive flat design websites focus solely on content and nothing else. The focus on simplicity leads to a streamlined user experience.",
        },
        {
          tabHeading: "Landing Pages",
          tabInfo:
            "Landing pages are essential when marketing your products and services online through your website because they give a first impression of your work. A landing page is also known as the main page of a website",
        },
      ],
    },
    portfolio: true,
    comboPackage: {
      pricing: "999",
      offInPercent: "20",
      listing: [
        "Complete Custom Design & Development",
        "Dating Portal, Job Portal, Professional Network Portal, Social Network Portal, Restaurant Portal, Medical Portal, Enterprise Portal (Any One)",
        "Unique, User Friendly, Interactive, Dynamic, High End UI Design",
        "Unlimited Banner Designs",
        "Interactive Sliding Banners",
        "Special Hoover Effects",
        "Unlimited Stock Images",
        "5User Signup Area",
        "Client/User Dashboard Area",
        "Custom Coding and Development",
        "Content Management System (Custom)",
        "Online Appointment/Scheduling/Online Ordering Integration (Optional)",
        "Online Payment Integration (Optional)",
        "Multi Lingual (Optional)",
        "Custom Dynamic Forms (Optional)*",
        "Shopping Cart Integration (Optional)",
        "Complete Database Creation",
        "Signup Automated Email Authentication",
        "Web Traffic Analytics Integration",
        "3rd Party API Integrations",
        "Signup Area (For Newsletters, Offers etc.)",
        "Search Bar for Easy Search",
        "Live Feeds of Social Networks integration (Optional)",
        "Search Engine Submission",
        "Module-wise Architecture",
        "Extensive Admin Panel",
        "Aware Winning Team of Expert Designers and Developers",
        "Complete Deployment",
        "Complete Source Files",
        "Dedicated Project Manager",
        "*NO MONTHLY OR ANY HIDDEN FEE*",
        "100% Satisfaction",
        "100% Ownership Rights*",
        "Money Back Guarantee",
        "Dedicated Account Manager",
      ],
    },
  };
  return (
    <main>
      <ServiceHero content={service.mainBanner} title={"ecommerce"} />
      <AboutOurService content={service.sectionBanner} title={"ecommerce"} />
      {service.tabs?.tabContent && (
        <OurServices content={service.tabs} title={"ecommerce"} />
      )}
      {service.portfolio && <Portfolio title={"ecommerce"} />}
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
