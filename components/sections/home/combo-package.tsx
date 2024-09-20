import { Button } from "@/components/ui/button";
import { CheckIcon, GrCommentIcon } from "@/components/ui/icons";
import PhoneLink from "@/components/ui/phone-link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ComboPackage = () => {
  return (
    <section
      className=" bg-no-repeat pt-24 pb-28"
      style={{
        backgroundImage: "url(/combo-package-main.webp)",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-center gap-20">
          <div className="bg-white shadow-2xl rounded-[0.75rem] p-10 pt-0 relative isolate">
            <div className="relative flex items-end justify-between isolate">
              <div>
                <p className="text-primary-foreground text-h5 font-semibold">
                  Combo Packages
                </p>
              </div>
              <div className="px-6 min-h-[5.25rem] rounded-b-full flex flex-col justify-center items-center -translate-y-4 bg-gradient-to-b from-[#21D6A2] to-[#4F60E8] pricing_card relative before:absolute before:top-0 before:-right-4 before:h-4 before:w-4 before:bg-primary-dark">
                <p className="text-h6 font-semibold font-inter text-white">
                  20% <span className="block">OFF</span>
                </p>
              </div>
            </div>
            <h3 className="text-h3 text-secondary font-semibold max-w-[25rem]">
              Complete Branding Solution
            </h3>
            <h2 className="text-secondary text-h1 font-semibold font-inter leading-tight">
              <span className="text-h4">$</span>999
            </h2>
            <div className="flex items-center gap-7 my-10">
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
              <span className="group-hover:-rotate-0 -rotate-45 transition-all w-9 h-9 grid place-items-center bg-white text-black rounded-full">
                <ArrowRight />
              </span>
            </Button>
            <div className="absolute -bottom-16 -right-16 -z-10 pointer-events-none">
              <Image
                src="/shredded-circle.svg"
                alt="Shredded Circle"
                width={119}
                height={119}
              />
            </div>
            <div className="absolute -top-16 -left-16 -z-10 pointer-events-none">
              <Image
                src="/squared-box.svg"
                alt="Squared Box"
                width={162}
                height={162}
              />
            </div>
          </div>
          <div className="relative isolate">
            <h3 className=" text-h2 font-semibold text-white max-w-[26.25rem]">
              All in One Combo Package
            </h3>
            <h5 className="text-h5 text-white">
              Ultimate Value for Start-ups and Businesses
            </h5>
            <ul className="flex flex-wrap gap-x-8 gap-y-5 max-w-[40.625rem] py-8">
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
              <li className="text-white text-sm flex items-center gap-1">
                <CheckIcon color="#fff" />
                There are many variations of
              </li>
            </ul>
            <Button variant="dark" className="" size="icon">
              Get in touch
              <span className="group-hover:-rotate-0 -rotate-45 transition-all w-9 h-9 grid place-items-center bg-white text-black rounded-full">
                <ArrowRight />
              </span>
            </Button>
            <div className="absolute -top-16 right-0 pointer-events-none">
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
