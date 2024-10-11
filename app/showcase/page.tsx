import { Button } from "@/components/ui/button";
import Transition from "@/components/ui/text-appear";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PhoneLink from "@/components/ui/phone-link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const page = () => {
  const tabTriggers = [
    { label: "Logo Design", value: "logo-design" },
    { label: "Website Design", value: "website-design" },
    { label: "Ecommerce Website", value: "ecommerce-website" },
    { label: "Mobile Apps", value: "mobile-apps" },
    { label: "NFT Design", value: "nft-design" },
    { label: "Marketing Collateral", value: "marketing-collateral" },
  ];
  const tabContent = [
    [],
    [
      { iconTitle: "/portfolio/web-development/1.webp" },
      { iconTitle: "/portfolio/web-development/2.webp" },
      { iconTitle: "/portfolio/web-development/3.webp" },
      { iconTitle: "/portfolio/web-development/4.webp" },
      { iconTitle: "/portfolio/web-development/5.webp" },
      { iconTitle: "/portfolio/web-development/6.webp" },
      { iconTitle: "/portfolio/web-development/7.webp" },
      { iconTitle: "/portfolio/web-development/8.webp" },
    ],
    [
      { iconTitle: "/portfolio/ecommerce/1.webp" },
      { iconTitle: "/portfolio/ecommerce/2.webp" },
      { iconTitle: "/portfolio/ecommerce/3.webp" },
      { iconTitle: "/portfolio/ecommerce/4.webp" },
      { iconTitle: "/portfolio/ecommerce/5.webp" },
      { iconTitle: "/portfolio/ecommerce/6.webp" },
      { iconTitle: "/portfolio/ecommerce/7.webp" },
      { iconTitle: "/portfolio/ecommerce/8.webp" },
    ],
    [
      { iconTitle: "/portfolio/app-development/1.webp" },
      { iconTitle: "/portfolio/app-development/2.webp" },
      { iconTitle: "/portfolio/app-development/3.webp" },
      { iconTitle: "/portfolio/app-development/4.webp" },
      { iconTitle: "/portfolio/app-development/5.webp" },
      { iconTitle: "/portfolio/app-development/6.webp" },
      { iconTitle: "/portfolio/app-development/7.webp" },
      { iconTitle: "/portfolio/app-development/8.webp" },
    ],
    [
      { iconTitle: "/portfolio/nft-design/1.jpg" },
      { iconTitle: "/portfolio/nft-design/2.jpg" },
      { iconTitle: "/portfolio/nft-design/3.jpg" },
      { iconTitle: "/portfolio/nft-design/4.jpg" },
      { iconTitle: "/portfolio/nft-design/5.jpg" },
      { iconTitle: "/portfolio/nft-design/6.jpg" },
      { iconTitle: "/portfolio/nft-design/7.jpg" },
      { iconTitle: "/portfolio/nft-design/8.jpg" },
    ],
    [
      { iconTitle: "/portfolio/marketing-collateral/1.webp" },
      { iconTitle: "/portfolio/marketing-collateral/2.webp" },
      { iconTitle: "/portfolio/marketing-collateral/3.webp" },
      { iconTitle: "/portfolio/marketing-collateral/4.webp" },
      { iconTitle: "/portfolio/marketing-collateral/5.webp" },
      { iconTitle: "/portfolio/marketing-collateral/6.webp" },
      { iconTitle: "/portfolio/marketing-collateral/7.webp" },
      { iconTitle: "/portfolio/marketing-collateral/8.webp" },
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
      { iconHref: "/logos-unique/abstract/1.jpg" },
      { iconHref: "/logos-unique/abstract/2.jpg" },
      { iconHref: "/logos-unique/abstract/3.jpg" },
      { iconHref: "/logos-unique/abstract/4.jpg" },
      { iconHref: "/logos-unique/abstract/5.jpg" },
      { iconHref: "/logos-unique/abstract/6.jpg" },
      { iconHref: "/logos-unique/abstract/7.jpg" },
      { iconHref: "/logos-unique/abstract/8.jpg" },
      { iconHref: "/logos-unique/abstract/9.jpg" },
      { iconHref: "/logos-unique/abstract/10.jpg" },
      { iconHref: "/logos-unique/abstract/11.jpg" },
      { iconHref: "/logos-unique/abstract/12.jpg" },
    ],
    [
      { iconHref: "/logos-unique/iconic/1.jpg" },
      { iconHref: "/logos-unique/iconic/2.jpg" },
      { iconHref: "/logos-unique/iconic/3.jpg" },
      { iconHref: "/logos-unique/iconic/4.jpg" },
      { iconHref: "/logos-unique/iconic/5.jpg" },
      { iconHref: "/logos-unique/iconic/6.jpg" },
      { iconHref: "/logos-unique/iconic/7.jpg" },
      { iconHref: "/logos-unique/iconic/8.jpg" },
      { iconHref: "/logos-unique/iconic/9.jpg" },
      { iconHref: "/logos-unique/iconic/10.jpg" },
      { iconHref: "/logos-unique/iconic/11.jpg" },
      { iconHref: "/logos-unique/iconic/12.jpg" },
    ],
    [
      { iconHref: "/logos-unique/Illustration/1.jpg" },
      { iconHref: "/logos-unique/Illustration/2.jpg" },
      { iconHref: "/logos-unique/Illustration/3.jpg" },
      { iconHref: "/logos-unique/Illustration/4.jpg" },
      { iconHref: "/logos-unique/Illustration/5.jpg" },
      { iconHref: "/logos-unique/Illustration/6.jpg" },
      { iconHref: "/logos-unique/Illustration/7.jpg" },
      { iconHref: "/logos-unique/Illustration/8.jpg" },
      { iconHref: "/logos-unique/Illustration/9.jpg" },
      { iconHref: "/logos-unique/Illustration/10.jpg" },
      { iconHref: "/logos-unique/Illustration/11.jpg" },
      { iconHref: "/logos-unique/Illustration/12.jpg" },
    ],
    [
      { iconHref: "/logos-unique/mascot/1.jpg" },
      { iconHref: "/logos-unique/mascot/2.jpg" },
      { iconHref: "/logos-unique/mascot/3.jpg" },
      { iconHref: "/logos-unique/mascot/4.jpg" },
      { iconHref: "/logos-unique/mascot/5.jpg" },
      { iconHref: "/logos-unique/mascot/6.jpg" },
      { iconHref: "/logos-unique/mascot/7.jpg" },
      { iconHref: "/logos-unique/mascot/8.jpg" },
      { iconHref: "/logos-unique/mascot/9.jpg" },
      { iconHref: "/logos-unique/mascot/10.jpg" },
      { iconHref: "/logos-unique/mascot/11.jpg" },
      { iconHref: "/logos-unique/mascot/12.jpg" },
    ],
    [
      { iconHref: "/logos-unique/minimal/1.jpg" },
      { iconHref: "/logos-unique/minimal/2.jpg" },
      { iconHref: "/logos-unique/minimal/3.jpg" },
      { iconHref: "/logos-unique/minimal/4.jpg" },
      { iconHref: "/logos-unique/minimal/5.jpg" },
      { iconHref: "/logos-unique/minimal/6.jpg" },
      { iconHref: "/logos-unique/minimal/7.jpg" },
      { iconHref: "/logos-unique/minimal/8.jpg" },
      { iconHref: "/logos-unique/minimal/9.jpg" },
      { iconHref: "/logos-unique/minimal/10.jpg" },
      { iconHref: "/logos-unique/minimal/11.jpg" },
      { iconHref: "/logos-unique/minimal/12.jpg" },
    ],
    [
      { iconHref: "/logos-unique/monogram-badge/1.jpg" },
      { iconHref: "/logos-unique/monogram-badge/2.jpg" },
      { iconHref: "/logos-unique/monogram-badge/3.jpg" },
      { iconHref: "/logos-unique/monogram-badge/4.jpg" },
      { iconHref: "/logos-unique/monogram-badge/5.jpg" },
      { iconHref: "/logos-unique/monogram-badge/6.jpg" },
      { iconHref: "/logos-unique/monogram-badge/7.jpg" },
      { iconHref: "/logos-unique/monogram-badge/8.jpg" },
      { iconHref: "/logos-unique/monogram-badge/9.jpg" },
      { iconHref: "/logos-unique/monogram-badge/10.jpg" },
      { iconHref: "/logos-unique/monogram-badge/11.jpg" },
      { iconHref: "/logos-unique/monogram-badge/12.jpg" },
    ],
    [
      { iconHref: "/logos-unique/vector-3d/1.jpg" },
      { iconHref: "/logos-unique/vector-3d/2.jpg" },
      { iconHref: "/logos-unique/vector-3d/3.jpg" },
      { iconHref: "/logos-unique/vector-3d/4.jpg" },
      { iconHref: "/logos-unique/vector-3d/5.jpg" },
      { iconHref: "/logos-unique/vector-3d/6.jpg" },
      { iconHref: "/logos-unique/vector-3d/7.jpg" },
      { iconHref: "/logos-unique/vector-3d/8.jpg" },
      { iconHref: "/logos-unique/vector-3d/9.jpg" },
      { iconHref: "/logos-unique/vector-3d/10.jpg" },
      { iconHref: "/logos-unique/vector-3d/11.jpg" },
      { iconHref: "/logos-unique/vector-3d/12.jpg" },
    ],
    [
      { iconHref: "/logos-unique/wordmark/1.jpg" },
      { iconHref: "/logos-unique/wordmark/2.jpg" },
      { iconHref: "/logos-unique/wordmark/3.jpg" },
      { iconHref: "/logos-unique/wordmark/4.jpg" },
      { iconHref: "/logos-unique/wordmark/5.jpg" },
      { iconHref: "/logos-unique/wordmark/6.jpg" },
      { iconHref: "/logos-unique/wordmark/7.jpg" },
      { iconHref: "/logos-unique/wordmark/8.jpg" },
      { iconHref: "/logos-unique/wordmark/9.jpg" },
      { iconHref: "/logos-unique/wordmark/10.jpg" },
      { iconHref: "/logos-unique/wordmark/11.jpg" },
      { iconHref: "/logos-unique/wordmark/12.jpg" },
    ],
  ];
  return (
    <>
      <section
        className="bg-no-repeat bg-cover lg:pt-[12.5rem] lg:pb-[8.5rem] pt-[6.5rem] pb-[4.5rem] isolate relative lg:px-0 px-2"
        style={{
          backgroundImage: "url(/showcase/about_bnr-img.png)",
          backgroundColor: "rgba(0, 0, 0, 0.94)",
        }}
      >
        <div className="absolute top-0 left-0 -z-10 ">
          <Image
            src="/swiggler-rotated.svg"
            alt="Skwiggly Line"
            width={420}
            height={200}
          />
        </div>
        <div className="container">
          <div className="flex items-center justify-between lg:flex-row flex-col lg:gap-0 gap-8">
            <div className="lg:max-w-[37rem]">
              <h5 className="text-h5 leading-none text-primary text-left font-semibold">
                <Transition>Serving Clients Worldwide</Transition>
              </h5>
              <h1 className="md:text-h1 sm:text-h2 text-h4 text-white font-semibold leading-tight mb-4">
                <Transition>At Scintillapro, Everything</Transition>{" "}
                <Transition>Is Possible</Transition>
              </h1>
              <Transition>
                <p className="text-muted-gray text-sm  mb-5">
                  {`We are a team of creative thinkers and problem solvers dedicated
to expanding the limits of what is possible by helping brands
achieve their goals.`}
                </p>
              </Transition>
              <Button className="" size="icon">
                Request a demo{" "}
                <span className="group-hover:-rotate-0 -rotate-45 transition-all sm:w-9 w-7 sm:h-9 h-7 text-sm grid place-items-center bg-white text-black rounded-full">
                  <ArrowRight />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="sm:pt-[9.75rem] pt-[3.75rem] sm:pb-[8.125rem] pb-[2.5rem]">
        <div className="container">
          <h5 className="sm:text-h5 text-base text-center text-primary font-semibold mb-4 sm:mx-0 mx-2">
            <Transition>{`Lead Focused Web Designs`}</Transition>
          </h5>
          <h2 className="sm:text-h2 text-[24px] text-center font-semibold leading-tight max-w-2xl mx-auto mb-4">
            <Transition>Along With Targeted</Transition>
            <Transition>Marketing Techniques</Transition>
          </h2>
          <Transition>
            <p className="text-sm text-toned-gray max-w-[800px] text-center sm:mx-auto mx-2">
              {`We build brands by impecular design sense combined with words that pull the interest of your target audience.`}
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
                  {tabTriggers[indexC].label === "Logo Design" ? (
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
                      {logosTypes.map((_, indexLogo) => (
                        <TabsContent
                          key={indexLogo}
                          value={logosTypes[indexLogo].iconTrigger}
                        >
                          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-6 gap-4 sm:mx-0 mx-2">
                            {logosTypesContent[indexLogo].map(
                              (logoUrl, indexing) => (
                                <div
                                  key={indexing}
                                  className="w-full flex overflow-hidden items-center justify-center bg-white rounded-[0.625rem]"
                                >
                                  <img
                                    className="w-full object-contain"
                                    src={logoUrl.iconHref}
                                    alt=""
                                  />
                                </div>
                              )
                            )}
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  ) : (
                    <div className="grid lg:grid-cols-4 sm:grid-cols-3 lg:gap-6 gap-4 sm:mx-0 mx-2">
                      {logos.map((brand, indexed) => {
                        return (
                          <div
                            key={indexed}
                            className="max-h-96 overflow-hidden rounded-[0.625rem] group transition-all"
                          >
                            <img
                              className="w-full h-[inherit] object-cover scale-110 group-hover:scale-100 transition-all"
                              src={brand.iconTitle}
                            />
                          </div>
                        );
                      })}
                    </div>
                  )}
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
              <PhoneLink
                phone="548-584-687"
                dark
                darkText
                lightLabel
                multiIcon
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
