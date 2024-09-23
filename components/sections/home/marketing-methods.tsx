import { Button } from "@/components/ui/button";
import PhoneLink from "@/components/ui/phone-link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Transition from "@/components/ui/text-appear";
import { ArrowRight } from "lucide-react";

const MarketingMethods = () => {
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

  const logosTypes = [
    { iconTitle: "Abstract", iconTrigger: "abstract" },
    { iconTitle: "Iconic", iconTrigger: "iconic" },
    { iconTitle: "Illustration", iconTrigger: "illustration" },
    { iconTitle: "Mascot", iconTrigger: "mascot" },
    { iconTitle: "Minimal", iconTrigger: "minimal" },
    { iconTitle: "Monogram - Badge", iconTrigger: "monogram-badge" },
    { iconTitle: "Vector 3D", iconTrigger: "vector-3d" },
    { iconTitle: "Wordmark", iconTrigger: "wordmark" },
  ];

  const logosTypesContent = [
    [
      { iconHref: "/logos-unique/artastro.png" },
      { iconHref: "/logos-unique/ats.png" },
      { iconHref: "/logos-unique/connect.png" },
      { iconHref: "/logos-unique/optimistic.png" },
      { iconHref: "/logos-unique/palm.png" },
      { iconHref: "/logos-unique/rise.png" },
      { iconHref: "/logos-unique/rtc.png" },
      { iconHref: "/logos-unique/titeg.png" },
    ],
    [
      { iconHref: "/logos-unique/ats.png" },
      { iconHref: "/logos-unique/connect.png" },
      { iconHref: "/logos-unique/artastro.png" },
      { iconHref: "/logos-unique/palm.png" },
      { iconHref: "/logos-unique/optimistic.png" },
      { iconHref: "/logos-unique/rise.png" },
      { iconHref: "/logos-unique/rtc.png" },
      { iconHref: "/logos-unique/titeg.png" },
    ],
    [
      { iconHref: "/logos-unique/ats.png" },
      { iconHref: "/logos-unique/connect.png" },
      { iconHref: "/logos-unique/artastro.png" },
      { iconHref: "/logos-unique/palm.png" },
      { iconHref: "/logos-unique/optimistic.png" },
      { iconHref: "/logos-unique/rise.png" },
      { iconHref: "/logos-unique/titeg.png" },
      { iconHref: "/logos-unique/rtc.png" },
    ],
    [
      { iconHref: "/logos-unique/ats.png" },
      { iconHref: "/logos-unique/connect.png" },
      { iconHref: "/logos-unique/artastro.png" },
      { iconHref: "/logos-unique/palm.png" },
      { iconHref: "/logos-unique/optimistic.png" },
      { iconHref: "/logos-unique/rtc.png" },
      { iconHref: "/logos-unique/rise.png" },
      { iconHref: "/logos-unique/titeg.png" },
    ],
    [
      { iconHref: "/logos-unique/ats.png" },
      { iconHref: "/logos-unique/artastro.png" },
      { iconHref: "/logos-unique/rtc.png" },
      { iconHref: "/logos-unique/palm.png" },
      { iconHref: "/logos-unique/connect.png" },
      { iconHref: "/logos-unique/optimistic.png" },
      { iconHref: "/logos-unique/rise.png" },
      { iconHref: "/logos-unique/titeg.png" },
    ],
    [
      { iconHref: "/logos-unique/ats.png" },
      { iconHref: "/logos-unique/artastro.png" },
      { iconHref: "/logos-unique/palm.png" },
      { iconHref: "/logos-unique/optimistic.png" },
      { iconHref: "/logos-unique/connect.png" },
      { iconHref: "/logos-unique/rtc.png" },
      { iconHref: "/logos-unique/rise.png" },
      { iconHref: "/logos-unique/titeg.png" },
    ],
    [
      { iconHref: "/logos-unique/ats.png" },
      { iconHref: "/logos-unique/artastro.png" },
      { iconHref: "/logos-unique/rtc.png" },
      { iconHref: "/logos-unique/palm.png" },
      { iconHref: "/logos-unique/optimistic.png" },
      { iconHref: "/logos-unique/rise.png" },
      { iconHref: "/logos-unique/connect.png" },
      { iconHref: "/logos-unique/titeg.png" },
    ],
    [
      { iconHref: "/logos-unique/ats.png" },
      { iconHref: "/logos-unique/artastro.png" },
      { iconHref: "/logos-unique/rtc.png" },
      { iconHref: "/logos-unique/palm.png" },
      { iconHref: "/logos-unique/connect.png" },
      { iconHref: "/logos-unique/optimistic.png" },
      { iconHref: "/logos-unique/rise.png" },
      { iconHref: "/logos-unique/titeg.png" },
    ],
  ];

  return (
    <section className="sm:pt-[9.75rem] pt-[3.75rem] sm:pb-[8.125rem] pb-[2.5rem]">
      <div className="container">
        <h2 className="sm:text-h2 text-[24px] text-center font-semibold leading-tight max-w-2xl mx-auto mb-4">
          <Transition>Together With Focused </Transition>
          <Transition>Marketing Methods</Transition>
        </h2>
        <Transition>
          <p className="text-sm text-toned-gray max-w-[800px] text-center sm:mx-auto mx-2">
            {`There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form by injected humour
          or randomised words which don't look even slightly believable.`}
          </p>
        </Transition>
        <div>
          <Tabs defaultValue={tabTriggers[0].value} className="mt-8">
            <TabsList className="gap-[0.625rem] w-full lg:mb-9 sm:mb-6 mb-3 flex-wrap">
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
            {tabContent.map((logos, indexC) => (
              <TabsContent key={indexC} value={tabTriggers[indexC].value}>
                {/* {tabTriggers[indexC].label === "Logo Design" ? (
                  <Tabs
                    defaultValue={logosTypes[0].iconTrigger}
                    className="flex flex-col"
                  >
                    <TabsList className="flex-wrap w-fit mx-auto gap-y-1 mb-9 p-0 rounded-none border-b">
                      {logosTypes.map((logoTitle, indexdb) => (
                        <TabsTrigger
                          key={indexdb}
                          value={logoTitle.iconTrigger}
                          className="rounded-none px-4 !w-fit !shadow-none border-b data-[state=active]:border-[#4F60E8] data-[state=active]:border-b-2 !-mb-[1px]"
                        >
                          {logoTitle.iconTitle}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {logosTypes.map((newLogo, indexLogo) => (
                      <TabsContent
                        key={indexLogo}
                        value={logosTypes[indexLogo].iconTrigger}
                      >
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-6 gap-4 sm:mx-0 mx-2">
                          {logosTypesContent[indexLogo].map(
                            (logoUrl, indexing) => (
                              <div
                                key={indexing}
                                style={{
                                  backgroundImage: `url(${logoUrl.iconHref})`,
                                }}
                                className="w-full xl:min-h-[24.375rem] py-20 bg-white bg-cover bg-center rounded-[0.625rem]"
                              ></div>
                            )
                          )}
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                ) : (
                  <div className="grid lg:grid-cols-4 sm:grid-cols-3 lg:gap-6 gap-4 sm:mx-0 mx-2">
                    {logos.map((brand, indexed) => {
                      const logoUrl = brand.iconTitle
                        .split(" ")
                        .join("-")
                        .toLowerCase();
                      return (
                        <div
                          key={indexed}
                          style={{
                            backgroundImage: `url(/logos/${logoUrl}.webp)`,
                            backgroundSize: "140px",
                          }}
                          className="w-full min-h-[24.375rem] bg-white bg-contain bg-no-repeat bg-center rounded-[0.625rem]"
                        ></div>
                      );
                    })}
                  </div>
                )} */}
                <div className="grid lg:grid-cols-4 sm:grid-cols-3 lg:gap-6 gap-4 sm:mx-0 mx-2">
                  {logos.map((brand, indexed) => {
                    const logoUrl = brand.iconTitle
                      .split(" ")
                      .join("-")
                      .toLowerCase();
                    return (
                      <div
                        key={indexed}
                        style={{
                          backgroundImage: `url(/logos/${logoUrl}.webp)`,
                          backgroundSize: "140px",
                        }}
                        className="w-full min-h-[24.375rem] bg-white bg-contain bg-no-repeat bg-center rounded-[0.625rem]"
                      ></div>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        <div className="flex items-center justify-center mt-16 relative isolate">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full -z-10 bg-border h-[2px] pointer-events-none" />
          <div className="flex items-center justify-center flex-wrap w-fit bg-background gap-[0.625rem] px-8">
            <Button className="" size="icon">
              Get in touch
              <span className="group-hover:-rotate-0 -rotate-45 transition-all sm:w-9 w-7 sm:h-9 h-7 text-sm grid place-items-center bg-white text-black rounded-full">
                <ArrowRight />
              </span>
            </Button>
            <PhoneLink phone="548-584-687" dark darkText lightLabel multiIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingMethods;
