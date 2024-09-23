import { Button } from "@/components/ui/button";
import { CheckIcon, GrCommentIcon } from "@/components/ui/icons";
import PhoneLink from "@/components/ui/phone-link";
import Transition from "@/components/ui/text-appear";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ComboPackage = () => {
  return (
    <section
      className=" bg-no-repeat bg-cover pt-24 sm:pb-28 pb-12"
      style={{
        backgroundImage: "url(/combo-package-main.webp)",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-center lg:flex-row flex-col sm:gap-20 gap-10">
          <div className="bg-white shadow-2xl rounded-[0.75rem] sm:p-10 p-6 pt-0 relative isolate mx-2 sm:mx-0">
            <div className="relative flex sm:items-end items-center justify-between isolate">
              <div>
                <Transition>
                  <p className="text-primary-foreground sm:text-h5 text-base font-semibold">
                    Combo Packages
                  </p>
                </Transition>
              </div>
              <div className="px-6 min-h-[5.25rem] rounded-b-full flex flex-col justify-center items-center -translate-y-4 bg-gradient-to-b from-[#21D6A2] to-[#4F60E8] pricing_card relative before:absolute before:top-0 before:-right-4 before:h-4 before:w-4 before:bg-primary-dark">
                <Transition>
                  <p className="sm:text-h6 text-body font-semibold font-inter text-white">
                    20% <span className="block">OFF</span>
                  </p>
                </Transition>
              </div>
            </div>
            <h3 className="sm:text-h3 text-h5 text-secondary font-semibold lg:max-w-[25rem]">
              <Transition>Complete Branding Solution</Transition>
            </h3>
            <h2 className="text-secondary sm:text-h1 text-h3 font-semibold font-inter leading-tight">
              <Transition>
                <span className="text-h4">$</span>999
              </Transition>
            </h2>
            <div className="flex items-center flex-wrap sm:gap-7 gap-4 sm:my-10 my-3">
              <PhoneLink
                phone="548-584-687"
                dark
                darkText
                lightLabel
                multiIcon
              />
              <div className="flex items-center gap-2">
                <span className="grid place-items-center min-w-[3.125rem] h-[3.125rem] rounded-full border text-h6 bg-white">
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
              Start Project
              <span className="group-hover:-rotate-0 -rotate-45 transition-all sm:w-9 w-7 sm:h-9 h-7 text-sm grid place-items-center bg-white text-black rounded-full">
                <ArrowRight />
              </span>
            </Button>
            <div className="absolute -bottom-16 lg:-right-16 right-0 -z-10 pointer-events-none sm:opacity-100 opacity-35">
              <Image
                src="/shredded-circle.svg"
                alt="Shredded Circle"
                width={119}
                height={119}
              />
            </div>
            <div className="absolute lg:-top-16 -top-20 -left-16 -z-10 pointer-events-none sm:opacity-100 opacity-35">
              <Image
                src="/squared-box.svg"
                alt="Squared Box"
                width={162}
                height={162}
              />
            </div>
          </div>
          <div className="relative isolate mx-2 sm:mx-0">
            <h3 className=" sm:text-h2 text-3xl font-semibold text-white lg:max-w-[26.25rem]">
              <Transition>All in One Combo Package</Transition>
            </h3>
            <h5 className="sm:text-h5 text-base text-white">
              <Transition>
                Ultimate Value for Start-ups and Businesses
              </Transition>
            </h5>
            <ul className="flex flex-wrap gap-x-8 gap-y-5 lg:max-w-[40.625rem] sm:py-8 py-4">
              <Transition>
                <li className="text-white text-sm flex items-center gap-1">
                  <CheckIcon color="#fff" />
                  There are many variations of
                </li>
              </Transition>
              <li className="text-white text-sm flex items-center gap-1">
                <CheckIcon color="#fff" />
                There are many variations of
              </li>
              <li className="text-white text-sm flex items-center gap-1">
                <CheckIcon color="#fff" />
                There are many variations of
              </li>
              <li className="text-white text-sm flex items-center gap-1">
                <CheckIcon color="#fff" />
                There are many variations of
              </li>
              <li className="text-white text-sm flex items-center gap-1">
                <CheckIcon color="#fff" />
                There are many variations of
              </li>
              <li className="text-white text-sm flex items-center gap-1">
                <CheckIcon color="#fff" />
                There are many variations of
              </li>
              <li className="text-white text-sm flex items-center gap-1">
                <CheckIcon color="#fff" />
                There are many variations of
              </li>
              <li className="text-white text-sm flex items-center gap-1">
                <CheckIcon color="#fff" />
                There are many variations of
              </li>
              <li className="text-white text-sm flex items-center gap-1">
                <CheckIcon color="#fff" />
                There are many variations of
              </li>
              <li className="text-white text-sm flex items-center gap-1">
                <CheckIcon color="#fff" />
                There are many variations of
              </li>
            </ul>
            <Button variant="dark" className="" size="icon">
              Get in touch
              <span className="group-hover:-rotate-0 -rotate-45 transition-all sm:w-9 w-7 sm:h-9 h-7 text-sm grid place-items-center bg-white text-black rounded-full">
                <ArrowRight />
              </span>
            </Button>
            <div className="absolute lg:-top-16 -top-10 lg:right-0 lg:left-[unset] left-0 pointer-events-none sm:opacity-100 opacity-35 ">
              <Image
                src="/dotted-box.svg"
                alt="Floating Box"
                width={63}
                height={64}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComboPackage;
