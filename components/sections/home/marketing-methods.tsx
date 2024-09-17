import { Button } from "@/components/ui/button";
import PhoneLink from "@/components/ui/phone-link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    <section className="pt-[9.75rem] pb-[8.125rem]">
      <div className="container">
        <h2 className="text-h2 text-center font-semibold leading-tight max-w-2xl mx-auto mb-4">
          Together With Focused Marketing Methods
        </h2>
        <p className="text-sm text-toned-gray max-w-[800px] text-center mx-auto">
          {`There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form by injected humour
          or randomised words which don't look even slightly believable.`}
        </p>
        <div>
          <Tabs defaultValue={tabTriggers[0].value} className="mt-8">
            <TabsList className="gap-[0.625rem] w-full mb-9">
              {tabTriggers.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  className="w-[10.875rem] py-5 bg-white rounded-full text-sm font-medium data-[state=active]:bg-gradient-to-r to-[#21D6A2] from-[#4F60E8] data-[state=active]:text-white"
                  value={tab.value}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabContent.map((logos, indexC) => (
              <TabsContent key={indexC} value={tabTriggers[indexC].value}>
                {tabTriggers[indexC].label === "Logo Design" ? (
                  <Tabs
                    defaultValue={logosTypes[0].iconTrigger}
                    className="flex flex-col"
                  >
                    <TabsList className="gap-[0.625rem] w-fit mx-auto mb-9 p-0 rounded-none border-b">
                      {logosTypes.map((logoTitle, indexdb) => (
                        <TabsTrigger
                          key={indexdb}
                          value={logoTitle.iconTrigger}
                          className="rounded-none !shadow-none border-b-2 border-transparent data-[state=active]:border-[#4F60E8] !-mb-[1px]"
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
                        <div className="grid grid-cols-4 gap-6">
                          {logosTypesContent[indexLogo].map(
                            (logoUrl, indexing) => (
                              <div
                                key={indexing}
                                style={{
                                  backgroundImage: `url(${logoUrl.iconHref})`,
                                }}
                                className="w-full min-h-[24.375rem] bg-white bg-cover bg-center rounded-[0.625rem]"
                              ></div>
                            )
                          )}
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                ) : (
                  <div className="grid grid-cols-4 gap-6">
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
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
        <div className="flex items-center justify-center w-fit mx-auto bg-background px-8 gap-[0.625rem] mt-16 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-full before:w-full before:-z-10 before:bg-border before:h-[2px] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-full after:w-full after:-z-10 after:bg-border after:h-[2px]">
          <Button className="" size="icon">
            Get in touch
            <span className="group-hover:-rotate-0 -rotate-45 transition-all w-9 h-9 grid place-items-center bg-white text-black rounded-full">
              <ArrowRight />
            </span>
          </Button>
          <PhoneLink phone="548-584-687" dark darkText lightLabel multiIcon />
        </div>
      </div>
    </section>
  );
};

export default MarketingMethods;
