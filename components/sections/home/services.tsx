import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Transition from "@/components/ui/text-appear";

const Services = () => {
  const tabTriggers = [
    { label: "Logo Design", value: "logo-design" },
    { label: "Website Design", value: "website-design" },
    { label: "Digital Marketing", value: "digital-marketing" },
    { label: "Mobile Apps", value: "mobile-apps" },
    { label: "Video Animation", value: "video-animation" },
    { label: "Marketing Collateral", value: "marketing-collateral" },
  ];
  const tabContent = [
    [
      { iconTitle: "Iconic Logo" },
      { iconTitle: "Typographic Logo" },
      { iconTitle: "Illustrative Logo" },
      { iconTitle: "Animated Logo" },
      { iconTitle: "3D Logo" },
      { iconTitle: "Wordmark Logo" },
      { iconTitle: "Emblem Logo" },
      { iconTitle: "2D Logo" },
    ],
    [
      { iconTitle: "Iconic Logo" },
      { iconTitle: "Animated Logo" },
      { iconTitle: "Typographic Logo" },
      { iconTitle: "3D Logo" },
      { iconTitle: "Emblem Logo" },
      { iconTitle: "Wordmark Logo" },
      { iconTitle: "Illustrative Logo" },
      { iconTitle: "2D Logo" },
    ],
    [
      { iconTitle: "Typographic Logo" },
      { iconTitle: "Illustrative Logo" },
      { iconTitle: "Iconic Logo" },
      { iconTitle: "3D Logo" },
      { iconTitle: "Animated Logo" },
      { iconTitle: "Wordmark Logo" },
      { iconTitle: "2D Logo" },
      { iconTitle: "Emblem Logo" },
    ],
    [
      { iconTitle: "Illustrative Logo" },
      { iconTitle: "Typographic Logo" },
      { iconTitle: "Iconic Logo" },
      { iconTitle: "Animated Logo" },
      { iconTitle: "Wordmark Logo" },
      { iconTitle: "3D Logo" },
      { iconTitle: "2D Logo" },
      { iconTitle: "Emblem Logo" },
    ],
    [
      { iconTitle: "Typographic Logo" },
      { iconTitle: "Illustrative Logo" },
      { iconTitle: "Iconic Logo" },
      { iconTitle: "Wordmark Logo" },
      { iconTitle: "3D Logo" },
      { iconTitle: "Emblem Logo" },
      { iconTitle: "2D Logo" },
      { iconTitle: "Animated Logo" },
    ],
    [
      { iconTitle: "Typographic Logo" },
      { iconTitle: "Iconic Logo" },
      { iconTitle: "Animated Logo" },
      { iconTitle: "Illustrative Logo" },
      { iconTitle: "3D Logo" },
      { iconTitle: "2D Logo" },
      { iconTitle: "Wordmark Logo" },
      { iconTitle: "Emblem Logo" },
    ],
  ];
  return (
    <section className="xl:pb-40 lg:pb-32 pb-20">
      <div className="container">
        <h2 className="sm:text-h2 text-3xl text-center font-semibold leading-tight max-w-2xl mx-auto mb-4">
          <Transition>Our services to grow your online business</Transition>
        </h2>
        <Transition>
          <p className="text-sm text-toned-gray max-w-[800px] text-center mx-auto">
            {`There are many variations of passages of Lorem Ipsum available, but
          the majorty have suffered alteration in some form by injected humour
          or randomised words which don't look even slightly believable.`}
          </p>
        </Transition>
        <div>
          <Tabs defaultValue={tabTriggers[0].value} className=" mt-8">
            <TabsList className="gap-[0.625rem] w-full lg:mb-9 mb-6 flex-wrap">
              {tabTriggers.map((tab, index) => {
                return (
                  <TabsTrigger
                    key={index}
                    className="xl:w-[10.875rem] sm:px-6 px-4 xl:py-5 sm:py-4 py-2 bg-white rounded-full sm:text-sm text-xsm font-medium data-[state=active]:bg-gradient-to-r to-[#21D6A2] from-[#4F60E8] data-[state=active]:text-white"
                    value={tab.value}
                  >
                    {tab.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {tabContent.map((logo, index) => {
              return (
                <TabsContent key={index} value={tabTriggers[index].value}>
                  <div className="grid lg:grid-cols-4 sm:grid-cols-3 lg:gap-6 gap-4 sm:mx-0 mx-2">
                    {logo.map((brand, indexed) => {
                      const logoUrl: string = brand.iconTitle
                        .split(" ")
                        .join("-")
                        .toLowerCase();
                      return (
                        <div
                          key={indexed}
                          className="bg-white w-full lg:min-h-72 lg:py-0 py-9 rounded-[0.625rem] flex flex-col justify-center items-center md:gap-8 gap-4 cursor-pointer shadow-none hover:shadow-xl transition-all"
                        >
                          <img
                            src={`/logos/${logoUrl}.webp`}
                            alt={brand.iconTitle}
                          />
                          <h5 className="lg:text-h5 text-h6 font-medium text-toned-dark">
                            <Transition>{brand.iconTitle}</Transition>
                          </h5>
                        </div>
                      );
                    })}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Services;
