import Transition from "@/components/ui/text-appear";
import { TbEyeCog, TbTargetArrow } from "react-icons/tb";

const OurValue = () => {
  return (
    <section className="md:py-24 py-12">
      <div className="container">
        <div className="grid sm:grid-cols-2 xl:gap-8 gap-4 sm:mx-0 mx-2">
          <div className="bg-white rounded-[1.875rem] lg:py-[4.375rem] py-[2.375rem] lg:px-[3.125rem] px-[1.5rem] flex flex-col justify-center items-center gap-[0.625rem]">
            <div className="flex items-center justify-center text-h4 w-16 h-16 rounded-full bg-gradient-to-t to-[#21D6A2] from-[#4F60E8] text-white">
              <TbTargetArrow />
            </div>
            <h4 className="text-h4 text-secondary font-semibold leading-none">
              <Transition>Our Mission</Transition>
            </h4>
            <Transition>
              <p className="text-toned-gray text-sm text-center">{`We work with the mission of delivering breakthrough digital solutions to businesses around the world, while paving the way for socially responsible businesses.`}</p>
            </Transition>
          </div>
          <div className="bg-white rounded-[1.875rem] lg:py-[4.375rem] py-[2.375rem] lg:px-[3.125rem] px-[1.5rem] flex flex-col justify-center items-center gap-[0.625rem]">
            <div className="flex items-center justify-center text-h4 w-16 h-16 rounded-full bg-gradient-to-t to-[#21D6A2] from-[#4F60E8] text-white">
              <TbEyeCog />
            </div>
            <h4 className="text-h4 text-secondary font-semibold leading-none">
              <Transition>Our Vision</Transition>
            </h4>
            <Transition>
              <p className="text-toned-gray text-sm text-center">{`Diversify the world of tech and become a leader in the digital community, while creating the best product and using businesses to inspire entrepreneurs with the power of technology.`}</p>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
