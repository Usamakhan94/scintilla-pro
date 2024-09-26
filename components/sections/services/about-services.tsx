import { Button } from "@/components/ui/button";
import { FilledCommentIcon, GrCommentIcon } from "@/components/ui/icons";
import PhoneLink from "@/components/ui/phone-link";
import Transition from "@/components/ui/text-appear";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const AboutOurService = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative isolate">
            <Image
              src="/web-services.png"
              alt="Section Image"
              height={680}
              width={520}
              className="ml-auto"
              unoptimized
            />
          </div>
          <div className="lg:mt-0 mt-5 mx-2 sm:mx-0">
            <h2 className="sm:text-h2 text-h4 font-semibold text-secondary leading-tight">
              <Transition>
                Creative website design & development services
              </Transition>
            </h2>
            <Transition>
              <p className="text-body text-toned-gray">
                {`There are many variations of passages of Lorem Ipsum available, but the maj
red alteration in some form, by injected humour or ran domised words which
slightly believable. If you are going to use a pa ssage of Lorem Ipsum, you nee
re isn't anything embarrassing hidden.`}
              </p>
            </Transition>
            <div className="flex items-center flex-wrap sm:gap-7 gap-4 sm:my-10 my-3">
              <PhoneLink
                phone="548-584-687"
                dark
                darkText
                lightLabel
                multiIcon
                transparent
              />
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
              Get in touch
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

export default AboutOurService;
