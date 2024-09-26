import Transition from "@/components/ui/text-appear";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WorkTogether = () => {
  return (
    <section
      className=" py-12 bg-cover relative isolate"
      style={{ backgroundImage: "url(/work-together.webp)" }}
    >
      <div className="absolute bottom-0 left-0 opacity-20 sm:opacity-100">
        <Image
          src="/contact-image.webp"
          alt="Section Image"
          width={307}
          height={133}
        />
      </div>
      <div className="container">
        <div className="sm:mx-0 mx-4 sm:ml-80 flex items-center gap-6">
          <h4 className="text-h4 font-semibold text-white leading-tight max-w-[11.25rem]">
            <Transition>{`Let’s work `}</Transition>
            <Transition>{`Together`}</Transition>
          </h4>
          <Link
            href="/"
            className="bg-gradient-to-l from-[#21D6A2] to-[#4F60E8] w-[4.375rem] h-[4.375rem] rounded-full text-white grid place-items-center p-4 -rotate-45 hover:rotate-0 transition-all duration-300"
          >
            <ArrowRight className="w-full h-full" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
