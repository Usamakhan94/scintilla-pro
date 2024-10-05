import { Button } from "@/components/ui/button";
import Transition from "@/components/ui/text-appear";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="bg-no-repeat bg-cover lg:pt-[12.5rem] pt-[6.5rem] sm:pb-[16.875rem] pb-[8.875rem] isolate relative lg:px-0 px-2"
      style={{
        backgroundImage: "url(/main_bnr-img.webp)",
        backgroundColor: "rgba(0, 0, 0, 0.94)",
      }}
    >
      <div className="absolute bottom-0 overflow-hidden right-0 -z-10 ">
        <Image
          className="xl:translate-y-11 translate-y-20 lg:translate-x-0 translate-x-8"
          src="/swiggler.svg"
          alt="Skwiggly Line"
          width={680}
          height={360}
        />
      </div>
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
          <div className="lg:max-w-[37.5rem]">
          <h5 className="text-h5 leading-none text-primary text-left font-semibold">
          <Transition>Proficient Design Agency.</Transition>
          </h5>
            <h1 className="md:text-h1 sm:text-h2 text-h4 text-white font-semibold leading-tight mb-4">
              <Transition>Surpassing with the Modernization & Originality.</Transition>{" "}
            </h1>
            <Transition>
              <p className="text-muted-gray text-sm  mb-5">
                {`Helping brands to digitally transform with a spice of innovation and technical expertise.`}
              </p>
            </Transition>
            <Button className="" size="icon">
              Request a demo{" "}
              <span className="group-hover:-rotate-0 -rotate-45 transition-all sm:w-9 w-7 sm:h-9 h-7 text-sm grid place-items-center bg-white text-black rounded-full">
                <ArrowRight />
              </span>
            </Button>
          </div>
          <div className="relative isolate">
            <Image
              src="/main-hero-img.webp"
              alt="Hero Image"
              width={800}
              height={400}
            />
            <div className="absolute -z-10 sm:w-[250px] w-[160px] sm:h-[250px] h-[160px] -top-1/2 sm:right-[15%] right-[5%] sm:translate-y-[40%] translate-y-[30%] overflow-hidden">
              <Image
                className="animate-spin duration-10s"
                src="/circulate.webp"
                alt="Rotating Logo"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
