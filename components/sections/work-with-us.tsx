import { FilledCommentIcon } from "@/components/ui/icons";
import PhoneLink from "@/components/ui/phone-link";
import Transition from "@/components/ui/text-appear";
import Image from "next/image";

const WorkWithUs = () => {
  return (
    <section className="pb-12">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center">
          <div className="relative isolate">
            <Image
              src="/work-with-us.webp"
              alt="Section Image"
              height={600}
              width={620}
              unoptimized
            />
            <div className="bg-white rounded-[1.125rem] w-fit absolute -bottom-5 sm:right-[20%] right-5">
              <Image
                src="/heading-bg.webp"
                alt=""
                width={200}
                height={170}
                className="shadow-2xl rounded-[1.125rem] overflow-hidden sm:max-w-[12.5rem] max-w-[8.75rem]"
                unoptimized
              />
            </div>
          </div>
          <div className="lg:mt-0 mt-5 mx-2 sm:mx-0">
            <h2 className="sm:text-h1 text-h3 font-semibold text-secondary max-w-[26.25rem] leading-tight">
              <Transition>Ready to work with us</Transition>
            </h2>
            <Transition>
              <p className="text-body text-toned-gray">
                {`Contact us to discuss your logo design or general inquiries`}
              </p>
            </Transition>
            <div className="py-8 flex flex-wrap gap-5 border-y border-[#00000052] w-fit pr-5 mt-7 relative before:absolute before:w-2 before:h-2 before:border-r before:border-[#00000052] before:border-t before:-top-[5px] before:right-0 before:rotate-45 after:absolute after:w-2 after:h-2 after:border-l after:border-[#00000052] after:border-b after:-bottom-[5px] after:left-0 after:rotate-45">
              <PhoneLink gradient darkText lightLabel />
              <div className="flex items-center gap-2">
                <span className="grid place-items-center min-w-[3.125rem] h-[3.125rem] rounded-full border text-h6 bg-gradient-to-b to-[#21D6A2] from-[#4F60E8]">
                  <FilledCommentIcon />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
