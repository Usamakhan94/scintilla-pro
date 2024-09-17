import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PricingContent from "./pricing-content";
import { CheckIcon } from "@/components/ui/icons";
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
    <section className="bg-white py-20">
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
                    return (
                      <div
                        key={index}
                        className="odd:bg-background even:bg-white pricing_cards even:shadow-2xl p-6 rounded-[0.625rem] relativegroup"
                      >
                        <p className="text-primary-foreground text-sm font-medium">
                          {priceCard.packageName}
                        </p>
                        <h3 className="text-h3 font-inter font-semibold">
                          ${priceCard.pricing}
                        </h3>
                        <p className="text-sm text-toned-gray mb-6">
                          {priceCard.quality}
                        </p>
                        <ul className="rounded-[0.625rem] px-5 py-8">
                          {priceCard.listDetails.map(
                            (listItem: string, index: number) => (
                              <li
                                key={index}
                                className="text-sm text-toned-gray flex items-center gap-1 last:mb-0 mb-3"
                              >
                                <span>
                                  <CheckIcon />
                                </span>
                                <span>{listItem}</span>
                              </li>
                            )
                          )}
                        </ul>
                        <button className="bg-toned-dark w-full text-body font-semibold rounded-[0.75rem] grid place-items-center text-white mt-3 min-h-[3.125rem] group-hover:bg-gradient-to-r from-[#21D6A2] to-[#4F60E8]">
                          Order Now
                        </button>
                      </div>
                    );
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
