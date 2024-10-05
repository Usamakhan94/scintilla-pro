import { Button } from "@/components/ui/button";
import PhoneLink from "@/components/ui/phone-link";
import Transition from "@/components/ui/text-appear";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const BestSolution = () => {
  return (
    <section
      className="bg-cover pt-16 pb-24 relative isolate"
      style={{ backgroundImage: "url(/wavy-img.webp)" }}
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
        <div className="grid xl:grid-cols-2 sm:px-0 px-2">
          <div className="max-w-[35.625rem]">
          <h5 className="sm:text-h5 text-base text-start text-primary font-semibold mb-4 sm:mx-0 mx-2">
          <Transition>
            {`Endorse Your Business`}
          </Transition>
        </h5>
            <h2 className="xl:text-h2 sm:text-h3 text-[1.75rem] text-white font-semibold leading-tight mb-6">
              <Transition>With Influential Client Experience-Driven Websites. </Transition>
            </h2>
            <Transition>
              <p className="text-white text-sm mb-8">
                {`
The creative team at Digineto knows how crucial a website presence in the digital world is. We believe in providing our customers with premium website solutions, therefore, we work closely with our clients to understand their requirements, deliver timely results, and boost up your business proficiency. `}
              </p>
            </Transition>
            <div className="flex items-center gap-[0.625rem] flex-wrap">
              <Button className="" size="icon">
                Get in touch
                <span className="group-hover:-rotate-0 -rotate-45 transition-all sm:w-9 w-7 sm:h-9 h-7 text-sm grid place-items-center bg-white text-black rounded-full">
                  <ArrowRight />
                </span>
              </Button>
              <PhoneLink phone="548-584-687" dark />
            </div>
          </div>
          <div className="xl:static xl:translate-y-0 absolute top-1/2 lg:-translate-y-1/2 right-0 xl:max-w-full max-w-[50%] lg:block hidden ">
            <Image
              className=" 2xl:-translate-x-[155px] xl:-translate-x-[100px] xl:translate-y-[88px] 2xl:scale-[1.4] xl:scale-[1.2]"
              src="/future-main-img.webp"
              alt="Section Image"
              width={936}
              height={551}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSolution;
