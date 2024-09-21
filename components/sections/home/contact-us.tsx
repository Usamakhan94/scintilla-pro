import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ui/contact-form";
import { CommentIcon } from "@/components/ui/icons";
import PhoneLink from "@/components/ui/phone-link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="grid grid-cols-2 items-center">
          <div className="px-20">
            <h5 className="text-h5 text-primary-foreground font-semibold">
              Contact us
            </h5>
            <h3 className="text-h2 font-semibold">{`Let’s get started!`}</h3>
            <ContactForm />
          </div>
          <div className="px-10 pt-9 bg-gradient-to-t to-[#21D6A2] from-[#4F60E8] mr-20 pricing_card relative isolate -translate-y-14 before:absolute before:bg-primary-dark before:w-16 before:h-14 before:top-0 before:-right-16">
            <h4 className="text-h4 text-white font-semibold">Chat with us</h4>
            <p className="text-white text-sm">
              {`Sed ut pers piciatis unde omnis iste natus error sit volu ptatem
              accu santiu do lore mque laudantium, totam rem aperiam, eaque ipsa
              quaeab illo i nve atae vitae dictasunt explicabo.`}
            </p>
            <div className="flex items-center gap-7 mt-6 mb-4">
              <PhoneLink defaultLabel phone="548-584-687" />
              <div className="flex items-center gap-2">
                <span className="grid place-items-center min-w-[3.125rem] h-[3.125rem] rounded-full border text-h6 ">
                  <CommentIcon />
                </span>
                <div className="flex flex-col gap-2">
                  <span className="text-xsm leading-none text-nowrap text-white">
                    Talk To Us Now
                  </span>
                  <p className="font-inter text-base text-nowrap font-semibold leading-none text-white">
                    Discuss your project
                  </p>
                </div>
              </div>
            </div>
            <Button
              className="w-fit min-w-[10.625rem] justify-between"
              size="icon"
              variant="dark"
            >
              Send Now
              <span className="group-hover:-rotate-0 -rotate-45 transition-all w-9 h-9 grid place-items-center bg-white text-black rounded-full">
                <ArrowRight />
              </span>
            </Button>
            <Image
              src="/contact-image.webp"
              alt="Section Image"
              width={500}
              height={300}
              className="mt-9 mx-auto"
            />
            <div className="absolute -z-10 right-0 bottom-0">
              <Image
                src="/masked-cirlce.webp"
                alt="Shape"
                width={300}
                height={280}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
