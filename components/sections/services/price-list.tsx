import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PricingContent from "../../../app/pricing-content";
import PriceCard from "@/components/ui/price-card";
import Transition from "@/components/ui/text-appear";
const OurPricing = ({ title }: { title: string }) => {
  const tabTriggers = [
    { label: "Website Development", value: "website-design" },
    { label: "Logo Design", value: "logo-design" },
    { label: "Combo", value: "combo" },
    { label: "Ecommerce Solutions", value: "ecommerce-solutions" },
    { label: "Animation", value: "animation" },
    { label: "NFT Design", value: "nft-design" },
    { label: "Illustration", value: "illustration" },
    { label: "Marketing Collateral", value: "marketing-collateral" },
    { label: "SEO", value: "seo-services" },
    { label: "SMM", value: "smm-services" },
    { label: "Creative Copywriting", value: "creative-copywriting" },
  ];

  return (
    <section className="bg-background sm:py-20 py-10 relative isolate">
      <div className="container">
        <h5 className="text-h5 leading-none text-primary text-center font-semibold">
          <Transition>Our Pricing</Transition>
        </h5>
        <h2 className="sm:text-h2 text-3xl text-center font-semibold leading-tight max-w-2xl mx-auto mb-4">
          <Transition>That Suits Everyone!</Transition>
        </h2>
        <Transition>
          <p className="text-sm text-toned-gray max-w-[800px] text-center mx-auto">
            {`To provide your business with customized and unique website development services at reasonable prices`}
          </p>
        </Transition>
        <Tabs defaultValue={tabTriggers[0].value} className="mt-8">
          <TabsList className="gap-[0.625rem] w-full lg:mb-9 mb-6 flex-wrap">
            {tabTriggers.map((tab, index) => (
              <TabsTrigger
                key={index}
                className="xl:w-[10.875rem] sm:px-6 px-4 xl:py-5 sm:py-4 py-2 bg-white rounded-full sm:text-sm text-xsm font-medium data-[state=active]:bg-gradient-to-r to-[#21D6A2] from-[#4F60E8] data-[state=active]:text-white"
                value={tab.value}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabTriggers.map((tab, index) => {
            const filteredPricing = PricingContent.filter((item) => {
              return item.title === tab.value;
            });
            return (
              <TabsContent key={index} value={tab.value}>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-y-6 lg:gap-8 gap-3 items-end 2xl:mx-28 sm:mx-0 mx-2">
                  {filteredPricing.map((priceCard, indexed) => {
                    if (indexed >= 3) return;
                    return <PriceCard whiteCard key={indexed} {...priceCard} />;
                  })}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default OurPricing;
