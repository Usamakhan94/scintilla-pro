import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="bg-no-repeat bg-cover pt-[12.5rem] pb-[16.875rem] isolate relative"
      style={{
        backgroundImage: "url(/main_bnr-img.webp)",
        backgroundColor: "rgba(0, 0, 0, 0.94)",
      }}
    >
      <div className="absolute bottom-20 right-0 -z-10 ">
        <Image
          src="/swiggler.svg"
          alt="Skwiggly Line"
          width={680}
          height={360}
        />
      </div>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="max-w-[31.375rem]">
            <h1 className="text-h1 text-white font-semibold leading-tight mb-4">
              Transforming Ideas into Digital Realities
            </h1>
            <p className="text-muted-gray text-sm  mb-5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inven tore veritatis et quasi architecto
            </p>
            <Button className="" size="icon">
              Request a demo{" "}
              <span className="group-hover:-rotate-0 -rotate-45 transition-all w-9 h-9 grid place-items-center bg-white text-black rounded-full">
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
            <div className="absolute -z-10 -top-1/2 right-[15%] translate-y-[40%]">
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
