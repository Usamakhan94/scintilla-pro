import Transition from "@/components/ui/text-appear";

const WideService = () => {
  return (
    <section>
      <div className="container">
        <h5 className="sm:text-h5 text-base text-center text-primary-foreground font-semibold mb-4 sm:mx-0 mx-2">
          <Transition>{`Our services`}</Transition>
        </h5>
        <h3 className="sm:text-h2 text-3xl text-center font-semibold leading-tight sm:mx-0 mx-2">
          <Transition>{`Our wide range of services`}</Transition>
        </h3>
        <Transition>
          <p className="text-toned-gray text-sm text-center">{`There are many variations of passages of Lorem Ipsum available, but the maj red alteration in some form, by injected humour
domised words which slightly believable.`}</p>
        </Transition>
        <div className="grid grid-cols-4 gap-6 mt-8">
          <div
            className="relative isolate rounded-[1.5rem] overflow-hidden bg-cover min-h-96 flex justify-start items-end py-8 px-7 group"
            style={{ backgroundImage: "url('/strategy.png')" }}
          >
            <div className="bg-gradient-to-t from-black to-black/10 blur-sm absolute w-full h-full bottom-0 left-0 -z-10 translate-y-8 group-hover:translate-y-0 transition-all" />
            <h5 className="text-h5 font-semibold text-white">
              <Transition>BRAND </Transition>
              <Transition>STRATEGY</Transition>
            </h5>
          </div>
          <div
            className="relative isolate rounded-[1.5rem] overflow-hidden bg-cover min-h-96 flex justify-start items-end py-8 px-7 group"
            style={{ backgroundImage: "url('/digital-dev.png')" }}
          >
            <div className="bg-gradient-to-t from-black to-black/10 blur-sm absolute w-full h-full bottom-0 left-0 -z-10 translate-y-8 group-hover:translate-y-0 transition-all" />
            <h5 className="text-h5 font-semibold text-white">
              <Transition>DIGITAL </Transition>
              <Transition>DEVELOPMENT</Transition>
            </h5>
          </div>
          <div
            className="relative isolate rounded-[1.5rem] overflow-hidden bg-cover min-h-96 flex justify-start items-end py-8 px-7 group"
            style={{ backgroundImage: "url('/tech-consulting.png')" }}
          >
            <div className="bg-gradient-to-t from-black to-black/10 blur-sm absolute w-full h-full bottom-0 left-0 -z-10 translate-y-8 group-hover:translate-y-0 transition-all" />
            <h5 className="text-h5 font-semibold text-white">
              <Transition>TECHNOLOGY</Transition>
              <Transition> CONSULTING</Transition>
            </h5>
          </div>
          <div
            className="relative isolate rounded-[1.5rem] overflow-hidden bg-cover min-h-96 flex justify-start items-end py-8 px-7 group"
            style={{ backgroundImage: "url('/identity-design.png')" }}
          >
            <div className="bg-gradient-to-t from-black to-black/10 blur-sm absolute w-full h-full bottom-0 left-0 -z-10 translate-y-8 group-hover:translate-y-0 transition-all" />
            <h5 className="text-h5 font-semibold text-white">
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
