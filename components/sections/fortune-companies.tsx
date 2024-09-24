import AnimatedCounter from "@/components/ui/counter";
import Transition from "@/components/ui/text-appear";

const FortuneCompanies = () => {
  return (
    <section className="sm:py-24 py-12">
      <div className="container ">
        <h5 className="sm:text-h5 text-base text-primary-foreground font-semibold mb-4 sm:mx-0 mx-2">
          <Transition>
            {`Logos, Web Designs & Development Solutions for`}
          </Transition>
        </h5>
        <h3 className="sm:text-h2 text-3xl font-semibold leading-tight max-w-[50rem] sm:mx-0 mx-2">
          <Transition>{`Fortune 500 Companies From 40+ Industries`}</Transition>
        </h3>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 xl:gap-8 gap-5 sm:mt-10 mt-4 sm:mx-0 mx-2">
          <div className="py-11 flex justify-center items-center flex-col rounded-[1.25rem] even:bg-toned-dark odd:bg-gradient-to-r from-[#21D6A2] to-[#4F60E8]">
            <h5 className="text-h2 text-white leading-tight font-semibold">
              <AnimatedCounter to={400} />+
            </h5>
            <h5 className="text-h6 text-white">
              <Transition>Projects Ordered</Transition>
            </h5>
          </div>
          <div className="py-11 flex justify-center items-center flex-col rounded-[1.25rem] even:bg-toned-dark odd:bg-gradient-to-r from-[#21D6A2] to-[#4F60E8]">
            <h5 className="text-h2 text-white leading-tight font-semibold">
              <AnimatedCounter to={1000} />+
            </h5>
            <h5 className="text-h6 text-white">
              <Transition>Happy Clients</Transition>
            </h5>
          </div>
          <div className="py-11 flex justify-center items-center flex-col rounded-[1.25rem] even:bg-toned-dark odd:bg-gradient-to-r from-[#21D6A2] to-[#4F60E8]">
            <h5 className="text-h2 text-white leading-tight font-semibold">
              <AnimatedCounter to={900} />+
            </h5>
            <h5 className="text-h6 text-white">
              <Transition>Projects Completed</Transition>
            </h5>
          </div>
          <div className="py-11 flex justify-center items-center flex-col rounded-[1.25rem] even:bg-toned-dark odd:bg-gradient-to-r from-[#21D6A2] to-[#4F60E8]">
            <h5 className="text-h2 text-white leading-tight font-semibold">
              <AnimatedCounter to={300} />+
            </h5>
            <h5 className="text-h6 text-white">
              <Transition>Comments</Transition>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FortuneCompanies;
