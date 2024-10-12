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
      mainTitle: "Artistic Logo Designs",
      introPara:
        "A customer is always introduced to the company’s logo first and foremost.A great logo speaks volumes and holds the brand’s identity strongly. Our team is here to create an outstanding logo for your brand at the most affordable prices.",
    },
    sectionBanner: {
      sectionTitle:
        "Behind Every Great Logo, There’s a Team of Great Designers",
      sectionPara:
        "As we know that log is the first presentation of your business and the first impression on the clientele. Therefore, we understand the importance of an amazing creative logo that speaks for itself. Our logo experts are always there to help you bring an astounding customized logo for your brand. Now all you need to do is stop searching for “logo designers near me” or “Globe custom logos creator” because we got your back! Our professional services logo makers will curate the best logo that will become your brand’s identity. Feel free to reach out if you have any queries and allow our experts to guide you through.",
    },
    tabs: {
      tabtriggers: [
        "Iconic logo",
        "3D Animated Logo",
        "2D Animated Logo",
        "Typographic logo",
        "Symbolic Logo",
        "Illustrative Logo",
      ],
      tabContent: [
        {
          tabHeading: "Iconic Graphic Design",
          tabInfo:
            "Minimal and extremely aesthetically pleasant type of logos. Iconic logos work for all brands and entrepreneurs. Iconic logos are easy to understand and depict business values perfectly. The right blend of design, text, and art.",
        },
        {
          tabHeading: "3D Animated Logo Designs",
          tabInfo:
            "Creative logos grab the user’s eye at the speed of light. Interesting logos tell the story, craft, and brand’s persona a lot. So to become a part of such brands you need an amazing 3D logo. Rich in colors, designs, and animations plus comes with a reasonable price tag. So what are you waiting for? Hire our experts today.",
        },
        {
          tabHeading: "2D Animated Logo Designs",
          tabInfo:
            "Creative logos grab the user’s eye at the speed of light. Appealing logos tell the story, craft, and brand’s persona a lot. So to become a part of such brands, you require a stunning 2D logo. Rich in colors, designs, and animations plus comes with a reasonable price tag. So what are you waiting for? Hire our experts today.",
        },
        {
          tabHeading: "Typographic Logo Designs",
          tabInfo:
            "Classic and typographic logo designs can never go wrong! Fun, funky, classic, professional, and so on types of fonts, great color palettes, graphical sequence, use of banners, and some text is a timeless recipe for a catchy, & classic typographic logo design.",
        },
        {
          tabHeading: "Symbolic Logo",
          tabInfo:
            "Symmetrical shapes, fine lines—forming the initials of the brand name or graphical image coherent to brand persona is something we saw a lot in recent times. Symbolic logos are very fine, clear, and present a very state-of-the-art look for the brand. A striking, clean appearance enables the logo to present something memorable and timeless.",
        },
        {
          tabHeading: "Illustrative Logo",
          tabInfo:
            "If you are searching “custom logo design company near me” or “logo design San Jose” then we got you covered. Now you can get your hands on an amazing illustrative custom logo for your brand or choose from a wide range of predefined templates. Our professional designers are available 24/7 at your service.",
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
      <ServiceHero content={service.mainBanner} title={"logo-design"} />
      <AboutOurService content={service.sectionBanner} title={"logo-design"} />
      {service.tabs?.tabContent && (
        <OurServices content={service.tabs} title={"logo-design"} />
      )}
      {service.portfolio && <Portfolio title={"logo-design"} />}
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
