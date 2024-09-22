import { Button } from "@/components/ui/button";
import Transition from "@/components/ui/text-appear";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="bg-no-repeat bg-cover lg:pt-[12.5rem] sm:pt-[6.5rem] pt-[4rem] pb-[16.875rem] isolate relative lg:px-0 px-2"
      style={{
        backgroundImage: "url(/main_bnr-img.webp)",
        backgroundColor: "rgba(0, 0, 0, 0.94)",
      }}
    >
      <div className="absolute bottom-0 overflow-hidden right-0 -z-10 ">
        <Image
          className="translate-y-11"
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
          <div className="lg:max-w-[34.375rem]">
            <h1 className="md:text-h1 sm:text-h2 text-3xl text-white font-semibold leading-tight mb-4">
              <Transition>Transforming</Transition>{" "}
              <Transition>Ideas into Digital</Transition>{" "}
              <Transition> Realities</Transition>
            </h1>
            <Transition>
              <p className="text-muted-gray text-sm  mb-5">
                {`Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inven tore veritatis et quasi architecto`}
              </p>
            </Transition>
            <Button variant="dark" className="" size="icon">
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
