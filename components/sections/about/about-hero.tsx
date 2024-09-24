import { Button } from "@/components/ui/button";
import Transition from "@/components/ui/text-appear";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const AboutHero = () => {
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
        <div className="flex items-center justify-between lg:flex-row flex-col lg:gap-0 gap-8">
          <div className="lg:max-w-[37rem]">
            <h1 className="md:text-h1 sm:text-h2 text-h4 text-white font-semibold leading-tight mb-4">
              <Transition>Design and</Transition>{" "}
              <Transition>Marketing Agency</Transition>
            </h1>
            <Transition>
              <p className="text-muted-gray text-sm  mb-5">
                {`Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inven tore veritatis et quasi architecto`}
              </p>
            </Transition>
            <Button className="" size="icon">
              Request a demo{" "}
              <span className="group-hover:-rotate-0 -rotate-45 transition-all sm:w-9 w-7 sm:h-9 h-7 text-sm grid place-items-center bg-white text-black rounded-full">
                <ArrowRight />
              </span>
            </Button>
          </div>
          <div className="relative isolate xl:scale-100 xl:translate-x-0 xl:translate-y-0 lg:scale-125 lg:-translate-x-20  lg:translate-y-32">
            <Image
              src="/about_hero-img.png"
              alt="Hero Image"
              width={800}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
