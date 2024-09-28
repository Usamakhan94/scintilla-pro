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
  console.log(title);
  return (
    <section
      className="bg-no-repeat bg-cover lg:pt-[12.5rem] lg:pb-[8.5rem] pt-[6.5rem] pb-[4.5rem] isolate relative lg:px-0 px-2"
      style={{
        backgroundImage: "url(/about_bnr-img.webp)",
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
        <div className="flex flex-col items-center justify-center lg:gap-0 gap-8">
          <h1 className="md:text-h1 sm:text-h2 text-h4 text-white text-center font-semibold leading-tight mb-4">
            <Transition>{content.mainTitle}</Transition>{" "}
          </h1>
          <Transition>
            <p className="text-muted-gray text-sm text-center lg:max-w-[37.5rem] mb-5">
              {content.introPara}
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
    </section>
  );
};

export default ServiceHero;
