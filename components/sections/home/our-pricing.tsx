import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PricingContent from "./pricing-content";
import PriceCard from "@/components/ui/price-card";
import Image from "next/image";
import Transition from "@/components/ui/text-appear";
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
    <section className="bg-white sm:py-20 py-10 relative isolate">
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
          <Transition>Our Pricing</Transition>
        </h5>
        <h2 className="sm:text-h2 text-3xl text-center font-semibold leading-tight max-w-2xl mx-auto mb-4">
          <Transition>That Suits Everyone!</Transition>
        </h2>
        <Transition>
          <p className="text-sm text-toned-gray max-w-[800px] text-center mx-auto">
            {`There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form by injected humour
          or randomised words which don't look even slightly believable.`}
          </p>
        </Transition>
        <Tabs defaultValue={tabTriggers[0].value} className="mt-8">
          <TabsList className="gap-[0.625rem] w-full lg:mb-9 mb-6 flex-wrap">
            {tabTriggers.map((tab, index) => (
              <TabsTrigger
                key={index}
                className="xl:w-[10.875rem] sm:px-6 px-4 xl:py-5 sm:py-4 py-2 bg-background rounded-full sm:text-sm text-xsm font-medium data-[state=active]:bg-gradient-to-r to-[#21D6A2] from-[#4F60E8] data-[state=active]:text-white"
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
