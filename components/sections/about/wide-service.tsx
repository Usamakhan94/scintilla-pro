import Transition from "@/components/ui/text-appear";

const WideService = () => {
  return (
    <section>
      <div className="container">
        <h5 className="sm:text-h5 text-base text-center text-primary-foreground font-semibold mb-4 sm:mx-0 mx-2">
          <Transition>{`Scintillapro Services`}</Transition>
        </h5>
        <h3 className="sm:text-h2 text-3xl text-center font-semibold leading-tight sm:mx-0 mx-2">
          <Transition>{`A wide variety of premium services we offer`}</Transition>
        </h3>
        <Transition>
          <p className="text-toned-gray text-sm text-center">{`We are one of the leading digital design firms concerned with meeting the needs of their clients. Our work is impeccable and
incomparable. We enhance your business efficiency and results through our innovative and fantastic work ethic`}</p>
        </Transition>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-6 gap-3 sm:mt-8 mt-4 mx-2 sm:mx-0">
          <div
            className="relative isolate rounded-[1.5rem] overflow-hidden bg-cover sm:bg-top bg-center sm:min-h-96 min-h-56 flex justify-start items-end py-8 px-7 group"
            style={{ backgroundImage: "url('/strategy.png')" }}
          >
            <div className="bg-gradient-to-t from-black to-black/10 blur-sm absolute w-full h-full bottom-0 left-0 -z-10 translate-y-8 group-hover:translate-y-0 transition-all" />
            <h5 className="xl:text-h5 text-h6 font-semibold text-white">
              <Transition>BRAND </Transition>
              <Transition>STRATEGY</Transition>
            </h5>
          </div>
          <div
            className="relative isolate rounded-[1.5rem] overflow-hidden bg-cover sm:bg-top bg-center sm:min-h-96 min-h-56 flex justify-start items-end py-8 px-7 group"
            style={{ backgroundImage: "url('/digital-dev.png')" }}
          >
            <div className="bg-gradient-to-t from-black to-black/10 blur-sm absolute w-full h-full bottom-0 left-0 -z-10 translate-y-8 group-hover:translate-y-0 transition-all" />
            <h5 className="xl:text-h5 text-h6 font-semibold text-white">
              <Transition>DIGITAL </Transition>
              <Transition>DEVELOPMENT</Transition>
            </h5>
          </div>
          <div
            className="relative isolate rounded-[1.5rem] overflow-hidden bg-cover sm:bg-top bg-[center_-5rem] sm:min-h-96 min-h-56 flex justify-start items-end py-8 px-7 group"
            style={{ backgroundImage: "url('/tech-consulting.png')" }}
          >
            <div className="bg-gradient-to-t from-black to-black/10 blur-sm absolute w-full h-full bottom-0 left-0 -z-10 translate-y-8 group-hover:translate-y-0 transition-all" />
            <h5 className="xl:text-h5 text-h6 font-semibold text-white">
              <Transition>TECHNOLOGY</Transition>
              <Transition> CONSULTING</Transition>
            </h5>
          </div>
          <div
            className="relative isolate rounded-[1.5rem] overflow-hidden bg-cover sm:bg-top bg-[center_-1.5rem] sm:min-h-96 min-h-56 flex justify-start items-end py-8 px-7 group"
            style={{ backgroundImage: "url('/identity-design.png')" }}
          >
            <div className="bg-gradient-to-t from-black to-black/10 blur-sm absolute w-full h-full bottom-0 left-0 -z-10 translate-y-8 group-hover:translate-y-0 transition-all" />
            <h5 className="xl:text-h5 text-h6 font-semibold text-white">
              <Transition>IDENTITY </Transition>
              <Transition>DESIGN</Transition>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WideService;
