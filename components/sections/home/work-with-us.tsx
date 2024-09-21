import { FilledCommentIcon } from "@/components/ui/icons";
import PhoneLink from "@/components/ui/phone-link";
import Image from "next/image";

const WorkWithUs = () => {
  return (
    <section className="">
      <div className="container">
        <div className="grid grid-cols-2 items-center">
          <div className="relative isolate">
            <Image
              src="/work-with-us.webp"
              alt="Section Image"
              height={600}
              width={620}
              unoptimized
            />
            <div className="bg-white rounded-[1.125rem] w-fit absolute -bottom-5 right-[20%]">
              <Image
                src="/heading-bg.webp"
                alt=""
                width={200}
                height={170}
                className="shadow-2xl rounded-[1.125rem] overflow-hidden"
                unoptimized
              />
            </div>
          </div>
          <div>
            <h2 className="text-h1 font-semibold text-secondary max-w-[26.25rem] leading-tight">
              Ready to work with us
            </h2>
            <p className="text-body text-toned-gray">
              {`Sed ut pers piciatis unde omnis iste natus error sit volu ptatem
              accu santium do lore mque lau dantium, totam rem aperiam, eaque
              ipsaquae ab illo inve ntore veritatis et quasi archi tecto be atae
              vitae dictasunt explicabo.`}
            </p>
            <div className="py-8 flex gap-5 border-y border-[#00000052] w-fit pr-5 mt-7 relative before:absolute before:w-2 before:h-2 before:border-r before:border-[#00000052] before:border-t before:-top-[5px] before:right-0 before:rotate-45 after:absolute after:w-2 after:h-2 after:border-l after:border-[#00000052] after:border-b after:-bottom-[5px] after:left-0 after:rotate-45">
              <PhoneLink phone="548-584-687" gradient darkText lightLabel />
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
