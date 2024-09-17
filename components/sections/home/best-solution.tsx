import { Button } from "@/components/ui/button";
import PhoneLink from "@/components/ui/phone-link";
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
        <div className="grid grid-cols-2">
          <div className="max-w-[35.625rem]">
            <h2 className="text-h2 text-white font-semibold leading-tight mb-6">
              A future-oriented agency that provides the best solutions
            </h2>
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
            <div className="flex items-center gap-[0.625rem]">
              <Button className="" size="icon">
                Get in touch
                <span className="group-hover:-rotate-0 -rotate-45 transition-all w-9 h-9 grid place-items-center bg-white text-black rounded-full">
                  <ArrowRight />
                </span>
              </Button>
              <PhoneLink phone="548-584-687" dark />
            </div>
          </div>
          <div>
            <Image
              className=" -translate-x-[155px] translate-y-[88px] scale-[1.4]"
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
