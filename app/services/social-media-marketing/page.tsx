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
      mainTitle: "Social Media Marketing Service",
      introPara:
        "We are known globally for delivering leverage growth through our agile strategy and great understanding of rapidly changing algorithms.",
    },
    sectionBanner: {
      sectionTitle:
        "We create everlasting experiences for our customers in the digital world",
      sectionPara:
        "Our mantra is to provide the results you're looking for from your brands virtually. Our marketing ninja will dive deep and find the solutions that are completely customizable and do wonders for your business. Full-fledged solutions that can increase the digital presence of your brand and gain deserved spotlight.",
    },
    tabs: {
      tabtriggers: ["Customized", "Community", "Follower", "Engagement"],
      tabContent: [
        {
          tabHeading: "Customized Verification Plan",
          tabInfo:
            "We bring premium standards to the table for your brand by verifying your Facebook and Instagram accounts first. We curate collective and agile marketing campaigns, keeping the ongoing trends in measure. Not only that, but we stick to achieving your business goals and objectives real quick.",
        },
        {
          tabHeading: "Community Management",
          tabInfo:
            "Community management and delivering quality work is our top priority. The best marketing comes with an even better hold on community management strategies. We prepare tailored plans uniquely devised for your business needs and brand’s requirements. That produces results beyond your expectations. Hire our experts today.",
        },
        {
          tabHeading: "Follower Growth",
          tabInfo:
            "What's social media marketing that causes no impact on the right audiences? We strive to bring a change, revolutionize the digital marketing paradigms, and bring new approaches in the play. Follower growth is one of the key components of digital marketing, and we guarantee our customers and clients an improved and enhanced follower growth rate.",
        },
        {
          tabHeading: "Interactive Engagement",
          tabInfo:
            "Scintillapro’s marketing experts develop campaigns for your business that make a difference. Creative, fun, professional, and interesting social media copies as well as campaigns that users love and wish to see more. We can help your brand to engage more audiences on different social media platforms.",
        },
      ],
    },
    portfolio: false,
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
        "Dedicated Account Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee",
      ],
    },
  };
  return (
    <main>
      <ServiceHero
        content={service.mainBanner}
        title={"social-media-marketing"}
      />
      <AboutOurService
        content={service.sectionBanner}
        title={"social-media-marketing"}
      />
      {service.tabs?.tabContent && (
        <OurServices content={service.tabs} title={"social-media-marketing"} />
      )}
      {service.portfolio && <Portfolio title={"social-media-marketing"} />}
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
