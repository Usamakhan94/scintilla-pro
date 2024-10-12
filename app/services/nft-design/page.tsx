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
      mainTitle: "Enter the World of NFTs Design & Metaverse with Logo Aspire",
      introPara:
        "NFTs & Metaverse is the future. Become a part of the exponentially growing marketplace with us today.",
    },
    sectionBanner: {
      sectionTitle: "NFTs Design & Metaverse – Taking World by Storm",
      sectionPara:
        "We live in the world of science and technology, and every sphere of our lives is getting digitized at a very fast pace. If you are still wondering, “What are NFTs?” or “What is Metaverse?” Scintillapro is here to help!  Non-Fungible Tokens aka NFTs; in simpler words, these are digital tokens that represent ownership of unique items. So basically these tokens are non-transferable, unlike other fungible assets or currencies such as bitcoins. NFTs can represent a wide assortment of digital art which has taken the world by storm. If you wish to own a custom one, then our professional NFT graphic designers can do it for you.",
    },
    tabs: {},
    portfolio: true,
    comboPackage: {},
  };
  return (
    <main>
      <ServiceHero content={service.mainBanner} title={"nft-design"} />
      <AboutOurService content={service.sectionBanner} title={"nft-design"} />
      {service.portfolio && <Portfolio title={"nft-design"} />}
      <OurPricing />
      <WorkTogether />
      <Testimonials />
      <ContactUs />
    </main>
  );
};

export default page;
