import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PricingContent from "./pricing-content";
import PriceCard from "@/components/ui/price-card";
import Image from "next/image";
const OurPricing = () => {
  const tabTriggers = [
    { label: "Logo Design", value: "logo-design" },
    { label: "Website Design", value: "website-design" },
    { label: "Digital Marketing", value: "digital-marketing" },
    { label: "Mobile Apps", value: "mobile-apps" },
    { label: "Video Animation", value: "video-animation" },
    { label: "Marketing Collateral", value: "marketing-collateral" },
  ];

  return (
    <section className="bg-white py-20 relative isolate">
      <div className="absolute top-0 left-0 -z-10 opacity-45 ">
        <Image
          src="/swiggler-rotated.svg"
          alt="Skwiggly Line"
          width={420}
          height={200}
        />
      </div>
      <div className="absolute bottom-0 right-0 -z-10 opacity-45 ">
        <Image
          className=" rotate-180"
          src="/swiggler-rotated.svg"
          alt="Skwiggly Line"
          width={420}
          height={200}
        />
      </div>
      <div className="container">
        <h5 className="text-h5 leading-none text-primary text-center font-semibold">
          Our Pricing
        </h5>
        <h2 className="text-h2 text-center font-semibold leading-tight max-w-2xl mx-auto mb-4">
          That Suits Everyone!
        </h2>
        <p className="text-sm text-toned-gray max-w-[800px] text-center mx-auto">
          {`There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form by injected humour
          or randomised words which don't look even slightly believable.`}
        </p>
        <Tabs defaultValue={tabTriggers[0].value} className="mt-8">
          <TabsList className="gap-[0.625rem] w-full mb-9">
            {tabTriggers.map((tab, index) => (
              <TabsTrigger
                key={index}
                className="w-[10.875rem] py-5 bg-background rounded-full text-sm font-medium data-[state=active]:bg-gradient-to-r from-[#21D6A2] to-[#4F60E8] data-[state=active]:text-white"
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
                <div className="grid grid-cols-3 gap-8 items-end mx-28">
                  {filteredPricing.map((priceCard, index) => {
                    if (index == 3) return;
                    return <PriceCard key={index} {...priceCard} />;
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
