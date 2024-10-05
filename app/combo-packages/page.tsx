import ContactUs from "@/components/sections/contact-us";
import PackagesHero from "@/components/sections/packages/packages-hero";
import ComboPricingContent from "../combo-pricing-content";
import PriceCard from "@/components/ui/price-card";
import Image from "next/image";
import Transition from "@/components/ui/text-appear";

const page = () => {
  return (
    <main>
      <PackagesHero />
      <section className="bg-background sm:py-20 py-10 sm:pb-28 relative isolate">
      <div className="absolute top-0 left-0 -z-10 opacity-45 ">
        <Image
          src="/swiggler-rotated.svg"
          alt="Skwiggly Line"
          width={420}
          height={200}
        />
      </div>
        <div className="container">
        <h5 className="text-h5 leading-none text-primary text-center font-semibold">
          <Transition>Our Pricing</Transition>
        </h5>
        <h2 className="sm:text-h2 text-3xl text-center font-semibold leading-tight max-w-2xl mx-auto mb-4">
          <Transition>That Suits Everyone!</Transition>
        </h2>
        <Transition>
          <p className="text-sm text-toned-gray max-w-[800px] text-center mx-auto">
            {`There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form by injected humour
          or randomised words which don't look even slightly believable.`}
          </p>
        </Transition>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-y-6 lg:gap-8 gap-3 items-end 2xl:mx-28 sm:mx-0 mx-2 mt-12">
                  {ComboPricingContent.map((priceCard, indexed) => {
                    return <PriceCard whiteCard key={indexed} {...priceCard} />;
                  })}
                </div>
        </div>
      </section>
      <ContactUs />
    </main>
  );
};

export default page;
