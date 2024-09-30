import { Button } from "@/components/ui/button";
import Transition from "@/components/ui/text-appear";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ServiceHero = ({
  content,
  title,
}: {
  content: {
    mainTitle: string;
    introPara: string;
  };
  title: string;
}) => {
  const titleImagePresence: boolean =
    title !== "creative-copywriting" &&
    title !== "social-media-marketing" &&
    title !== "illustration" &&
    title !== "seo-services";
  return (
    <section
      className={`bg-no-repeat bg-cover lg:pt-[12.5rem] lg:pb-[8.5rem] pt-[6.5rem] pb-[4.5rem] isolate relative lg:px-0 px-2 ${
        title === "nft-design" ? "!pb-0" : ""
      }`}
      style={{
        backgroundImage: `url(${title}/about_bnr-img.png)`,
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
            <h1 className="md:text-h1 sm:text-h2 text-h4 text-white font-semibold leading-tight mb-4">
              <Transition>{content.mainTitle}</Transition>
            </h1>
            <Transition>
              <p className="text-white text-sm  mb-5">{content.introPara}</p>
            </Transition>
            <Button className="" size="icon">
              Request a demo{" "}
              <span className="group-hover:-rotate-0 -rotate-45 transition-all sm:w-9 w-7 sm:h-9 h-7 text-sm grid place-items-center bg-white text-black rounded-full">
                <ArrowRight />
              </span>
            </Button>
          </div>
          {titleImagePresence && (
            <div
              className={`relative isolate xl:scale-100 xl:translate-x-0 xl:translate-y-0 lg:scale-125 -z-10  ${
                title === "nft-design"
                  ? "lg:translate-y-5 lg:-translate-x-[55px]"
                  : "lg:translate-y-32 lg:-translate-x-20"
              }`}
            >
              <Image
                className="max-h-[37.5rem] object-contain"
                src={`/services/${title}/about_hero-img.png`}
                alt="Hero Image"
                width={800}
                height={400}
                unoptimized
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
