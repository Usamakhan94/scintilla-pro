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
            <h2 className="xl:text-h2 sm:text-h3 text-[1.75rem] text-white font-semibold leading-tight mb-6">
              <Transition>A future-oriented </Transition>
              <Transition>agency that provides </Transition>
              <Transition>the best solutions</Transition>
            </h2>
            <Transition>
              <p className="text-white text-sm mb-8">
                {`
              There are many variations of passages of Lorem Ipsum available,
              but the majorty have suffer ed alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lor em
              Ipsum, you need to be sure the re isn't anything embarrassing
              hidden in them iddle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat prede fined chunks as necessary, `}
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
