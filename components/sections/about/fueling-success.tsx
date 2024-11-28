import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/ui/counter";
import { GrCommentIcon } from "@/components/ui/icons";
import PhoneLink from "@/components/ui/phone-link";
import Transition from "@/components/ui/text-appear";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FaRegSmile } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { MdOutlineCheckCircleOutline } from "react-icons/md";

const FuelingSuccess = () => {
  return (
    <section>
      <div className="container">
        <div className="flex lg:flex-row flex-col xl:gap-7 gap-4 mx-2 sm:mx-0">
          <div className="grid sm:grid-cols-2 xl:gap-7 gap-4 flex-1">
            <div className="rounded-[1.0625rem] group overflow-hidden sm:block hidden">
              <Image
                src="/business-people.png"
                alt=""
                width={306}
                height={433}
                className="scale-150 group-hover:scale-125 w-full transition-all"
              />
            </div>
            <div className="bg-black rounded-[1.0625rem] py-8 px-6 flex flex-col items-start justify-between sm:gap-0 gap-4 relative isolate overflow-hidden">
              <Image
                src="/business-people.png"
                alt=""
                width={306}
                height={433}
                className="absolute w-full h-full -z-10 top-0 left-0 block sm:hidden object-cover opacity-25"
              />
              <div className="flex items-center gap-[0.625rem] sm:pb-7 pb-4 border-b border-white/20 w-full">
                <div className="flex items-center justify-center text-h4 w-16 h-16 rounded-full bg-gradient-to-t to-[#21D6A2] from-[#4F60E8] text-white">
                  <MdOutlineCheckCircleOutline />
                </div>
                <div className="flex flex-col">
                  <span className="text-white leading-tight">
                    Projects Done
                  </span>
                  <h5 className="text-h4 text-white leading-tight font-semibold font-inter">
                    <AnimatedCounter to={400} />+
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-[0.625rem] sm:pb-7 pb-4 border-b border-white/20 w-full">
                <div className="flex items-center justify-center text-h4 w-16 h-16 rounded-full bg-gradient-to-t to-[#21D6A2] from-[#4F60E8] text-white">
                  <FaRegSmile />
                </div>
                <div className="flex flex-col">
                  <span className="text-white leading-tight">
                    Happy Clients
                  </span>
                  <h5 className="text-h4 text-white leading-tight font-semibold font-inter">
                    <AnimatedCounter to={47856} />+
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-[0.625rem] w-full">
                <div className="flex items-center justify-center text-h5 w-16 h-16 rounded-full bg-gradient-to-t to-[#21D6A2] from-[#4F60E8] text-white">
                  <FaChartLine />
                </div>
                <div className="flex flex-col">
                  <span className="text-white leading-tight">Success Rate</span>
                  <h5 className="text-h4 text-white leading-tight font-semibold font-inter">
                    94.5%
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="sm:text-h2 text-[1.75rem] font-semibold text-secondary leading-tight">
              <Transition>Satisfying Our Clients</Transition>
            </h2>
            <Transition>
              <p className="text-sm text-toned-gray">
                {`We work with the conviction that our clients define us, which is why we ensure that what our clients get helps them realize their potential and reach milestones as they grow as a business.`}
              </p>
            </Transition>
            <div className="flex items-center flex-wrap sm:gap-7 gap-4 sm:my-10 my-3">
              <PhoneLink dark darkText lightLabel multiIcon transparent />
              <div className="flex items-center gap-2">
                <span className="grid place-items-center min-w-[3.125rem] h-[3.125rem] rounded-full border text-h6 ">
                  <GrCommentIcon />
                </span>
                <div className="flex flex-col gap-2">
                  <span className="text-xsm leading-none text-nowrap text-primary-foreground">
                    Talk To Us Now
                  </span>
                  <p className="font-inter text-base text-nowrap font-semibold leading-none text-toned-dark">
                    Discuss your project
                  </p>
                </div>
              </div>
            </div>
            <Button className="" size="icon">
              Start your project{" "}
              <span className="group-hover:-rotate-0 -rotate-45 transition-all sm:w-9 w-7 sm:h-9 h-7 text-sm grid place-items-center bg-white text-black rounded-full">
                <ArrowRight />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuelingSuccess;
