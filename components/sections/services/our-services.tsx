import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Transition from "@/components/ui/text-appear";

interface TabContent {
  tabHeading?: string;
  tabInfo?: string;
}

interface Content {
  tabtriggers?: string[];
  tabContent?: TabContent[];
}

interface OurServicesProps {
  content?: Content;
  title?: string;
}

const OurServices: React.FC<OurServicesProps> = ({ content, title }) => {
  return (
    <section className="pb-20">
      <div className="container">
        <h5 className="sm:text-h5 text-base text-center text-primary-foreground font-semibold mb-4 sm:mx-0 mx-2">
          <Transition>{`Our services`}</Transition>
        </h5>
        <h2 className="sm:text-h2 text-3xl text-center capitalize font-semibold leading-tight mb-4">
          <Transition>Our {title?.replace("-", " ")} Services</Transition>
        </h2>
        <div>
          <Tabs
            defaultValue={
              content?.tabtriggers?.length
                ? content?.tabtriggers[0]?.replace(" ", "-")?.toLowerCase()
                : ""
            }
            className=" mt-8"
          >
            <TabsList className="gap-[0.625rem] w-full lg:mb-9 mb-6 flex-wrap">
              {content?.tabtriggers?.length &&
                content.tabtriggers.map((tab: string, index: number) => {
                  return (
                    <TabsTrigger
                      key={index}
                      className="xl:w-[10.875rem] sm:px-6 px-4 xl:py-5 sm:py-4 py-2 bg-white rounded-full sm:text-sm text-xsm font-medium data-[state=active]:bg-gradient-to-r to-[#21D6A2] from-[#4F60E8] data-[state=active]:text-white"
                      value={tab?.replace(" ", "-").toLowerCase()}
                    >
                      {tab}
                    </TabsTrigger>
                  );
                })}
            </TabsList>
            {content?.tabContent?.length &&
              content.tabContent.map((logo: TabContent, index: number) => {
                return (
                  <TabsContent
                    key={index}
                    value={
                      content?.tabtriggers?.length
                        ? content?.tabtriggers[index]
                            ?.replace(" ", "-")
                            ?.toLowerCase()
                        : ""
                    }
                  >
                    <div className="bg-white px-12 py-10 rounded-[1.25rem]">
                      <h4 className="text-h4 text-secondary font-semibold leading-none">
                        <Transition>{logo?.tabHeading}</Transition>
                      </h4>
                      <Transition>
                        <p className="text-sm text-toned-gray ">
                          {logo?.tabInfo}
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
