import { Button } from "@/components/ui/button";
import PhoneLink from "@/components/ui/phone-link";
import Transition from "@/components/ui/text-appear";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  return (
    <section>
      <div className="container">
        <h2 className="sm:text-h2 text-3xl text-center font-semibold leading-tight max-w-2xl mx-auto mb-6 ">
          <Transition>Our Portfolio</Transition>
        </h2>
        <div className="grid grid-cols-4 gap-7">
          <div className="max-h-96 overflow-hidden rounded-[0.625rem] group transition-all">
            <img
              className="w-full h-[inherit] object-cover scale-110 group-hover:scale-100 transition-all"
              src="/portfolio/web/1.webp"
            />
          </div>
          <div className="max-h-96 overflow-hidden rounded-[0.625rem] group transition-all">
            <img
              className="w-full h-[inherit] object-cover scale-110 group-hover:scale-100 transition-all"
              src="/portfolio/web/2.webp"
            />
          </div>
          <div className="max-h-96 overflow-hidden rounded-[0.625rem] group transition-all">
            <img
              className="w-full h-[inherit] object-cover scale-110 group-hover:scale-100 transition-all"
              src="/portfolio/web/3.webp"
            />
          </div>
          <div className="max-h-96 overflow-hidden rounded-[0.625rem] group transition-all">
            <img
              className="w-full h-[inherit] object-cover scale-110 group-hover:scale-100 transition-all"
              src="/portfolio/web/4.webp"
            />
          </div>
          <div className="max-h-96 overflow-hidden rounded-[0.625rem] group transition-all">
            <img
              className="w-full h-[inherit] object-cover scale-110 group-hover:scale-100 transition-all"
              src="/portfolio/web/5.webp"
            />
          </div>
          <div className="max-h-96 overflow-hidden rounded-[0.625rem] group transition-all">
            <img
              className="w-full h-[inherit] object-cover scale-110 group-hover:scale-100 transition-all"
              src="/portfolio/web/6.webp"
            />
          </div>
          <div className="max-h-96 overflow-hidden rounded-[0.625rem] group transition-all">
            <img
              className="w-full h-[inherit] object-cover scale-110 group-hover:scale-100 transition-all"
              src="/portfolio/web/7.webp"
            />
          </div>
          <div className="max-h-96 overflow-hidden rounded-[0.625rem] group transition-all">
            <img
              className="w-full h-[inherit] object-cover scale-110 group-hover:scale-100 transition-all"
              src="/portfolio/web/8.webp"
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-16 relative isolate">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full -z-10 bg-border h-[2px] pointer-events-none" />
          <div className="flex items-center justify-center flex-wrap w-fit bg-background gap-[0.625rem] px-8">
            <Button className="" size="icon">
              Get in touch
              <span className="group-hover:-rotate-0 -rotate-45 transition-all sm:w-9 w-7 sm:h-9 h-7 text-sm grid place-items-center bg-white text-black rounded-full">
                <ArrowRight />
              </span>
            </Button>
            <PhoneLink phone="548-584-687" dark darkText lightLabel multiIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
