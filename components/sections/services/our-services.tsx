import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Transition from "@/components/ui/text-appear";

const OurServices = () => {
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
    <section className="pb-20">
      <div className="container">
        <h5 className="sm:text-h5 text-base text-center text-primary-foreground font-semibold mb-4 sm:mx-0 mx-2">
          <Transition>{`Our services`}</Transition>
        </h5>
        <h2 className="sm:text-h2 text-3xl text-center font-semibold leading-tight mb-4">
          <Transition>Our web development Services</Transition>
        </h2>
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
                  <div className="bg-white px-12 py-10 rounded-[1.25rem]">
                    <h4 className="text-h4 text-secondary font-semibold leading-none">
                      <Transition>Our Mission</Transition>
                    </h4>
                    <Transition>
                      <p className="text-sm text-toned-gray ">
                        {`There are many variations of passages of Lorem Ipsum available, but
          the majorty have suffered alteration in some form by injected humour
          or randomised words which don't look even slightly believable.`}
                      </p>
                    </Transition>
                    <div className="grid lg:grid-cols-4 sm:grid-cols-3 lg:gap-6 gap-4 ">
                      <div className="max-h-64 bg-white rounded-[0.875rem]"></div>
                    </div>
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

export default OurServices;
