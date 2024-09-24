import Transition from "@/components/ui/text-appear";
import { TbEyeCog, TbTargetArrow } from "react-icons/tb";

const OurValue = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white rounded-[1.875rem] py-[4.375rem] px-[3.125rem] flex flex-col justify-center items-center gap-[0.625rem]">
            <div className="flex items-center justify-center text-h4 w-16 h-16 rounded-full bg-gradient-to-t to-[#21D6A2] from-[#4F60E8] text-white">
              <TbTargetArrow />
            </div>
            <h4 className="text-h4 text-secondary font-semibold leading-none">
              <Transition>Our Mission</Transition>
            </h4>
            <Transition>
              <p className="text-toned-gray text-sm text-center">{`There are many variations of passages of Lorem Ipsum available, but the maj
red alteration in some form, by injected humour or ran domised words which
slightly believable. If you are going to use a pa ssage of Lorem Ipsum, you nee
re isn't anything embarrassing hidden.`}</p>
            </Transition>
          </div>
          <div className="bg-white rounded-[1.875rem] py-[4.375rem] px-[3.125rem] flex flex-col justify-center items-center gap-[0.625rem]">
            <div className="flex items-center justify-center text-h4 w-16 h-16 rounded-full bg-gradient-to-t to-[#21D6A2] from-[#4F60E8] text-white">
              <TbEyeCog />
            </div>
            <h4 className="text-h4 text-secondary font-semibold leading-none">
              <Transition>Our Vision</Transition>
            </h4>
            <Transition>
              <p className="text-toned-gray text-sm text-center">{`There are many variations of passages of Lorem Ipsum available, but the maj
red alteration in some form, by injected humour or ran domised words which
slightly believable. If you are going to use a pa ssage of Lorem Ipsum, you nee
re isn't anything embarrassing hidden.`}</p>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
