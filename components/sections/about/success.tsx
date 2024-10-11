import { GrCommentIcon } from "@/components/ui/icons";
import Transition from "@/components/ui/text-appear";
import Link from "next/link";

const Success = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="sm:text-h2 text-3xl text-center font-semibold leading-tight lg:max-w-[53.75rem] mx-auto mb-4">
          <Transition>
          Creativity and determination guiding you
          to the ultimate digital success
          </Transition>
        </h2>
        <Transition>
          <p className="text-sm text-toned-gray max-w-[53.75rem] text-center mx-auto">
            {`We provide comprehensive and thoughtful digital solutions for individuals and businesses that have proven effective for them. With an experienced team of professionals at your service and a high-level marketing plan, success will be knocking your door!`}
          </p>
        </Transition>
        <div className="flex justify-between items-center sm:flex-row flex-col py-9 px-10 bg-gradient-to-r to-[#21D6A2] from-[#4F60E8] lg:max-w-[53.75rem] sm:mx-auto rounded-[1.0625rem] mt-8 mx-2">
          <h4 className="text-white text-h5 font-medium sm:text-left text-center sm:max-w-[17.5rem] sm:leading-tight">
            <Transition>Sign up now to Avail 70% Discount</Transition>
          </h4>
          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="bg-white/10 border border-white rounded-full text-white h-[3.125rem] min-w-[7.375rem] flex items-center justify-center"
            >
              Avail Offer
            </Link>
            <div className="flex items-center gap-2">
              <span className="grid place-items-center min-w-[3.125rem] h-[3.125rem] rounded-full border text-h6 bg-white">
                <GrCommentIcon />
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-xsm leading-none text-nowrap text-white">
                  Click here to
                </span>
                <p className="font-inter text-base text-nowrap font-semibold leading-none text-white">
                  Live Chat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
