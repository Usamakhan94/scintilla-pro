import AnimatedCounter from "@/components/ui/counter";

const FortuneCompanies = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h5 className="text-h5 text-primary-foreground font-semibold mb-4">
          {`Logos, Web Designs & Development Solutions for`}
        </h5>
        <h3 className="text-h2 font-semibold leading-tight max-w-[50rem]">
          {`Fortune 500 Companies From 40+ Industries`}
        </h3>
        <div className="grid grid-cols-4 gap-8 mt-10">
          <div className="py-11 flex justify-center items-center flex-col rounded-[1.25rem] even:bg-toned-dark odd:bg-gradient-to-r from-[#21D6A2] to-[#4F60E8]">
            <h5 className="text-h2 text-white leading-tight font-semibold">
              <AnimatedCounter to={400} />+
            </h5>
            <h5 className="text-h6 text-white">Projects Ordered</h5>
          </div>
          <div className="py-11 flex justify-center items-center flex-col rounded-[1.25rem] even:bg-toned-dark odd:bg-gradient-to-r from-[#21D6A2] to-[#4F60E8]">
            <h5 className="text-h2 text-white leading-tight font-semibold">
              <AnimatedCounter to={1000} />+
            </h5>
            <h5 className="text-h6 text-white">Happy Clients</h5>
          </div>
          <div className="py-11 flex justify-center items-center flex-col rounded-[1.25rem] even:bg-toned-dark odd:bg-gradient-to-r from-[#21D6A2] to-[#4F60E8]">
            <h5 className="text-h2 text-white leading-tight font-semibold">
              <AnimatedCounter to={900} />+
            </h5>
            <h5 className="text-h6 text-white">Projects Completed</h5>
          </div>
          <div className="py-11 flex justify-center items-center flex-col rounded-[1.25rem] even:bg-toned-dark odd:bg-gradient-to-r from-[#21D6A2] to-[#4F60E8]">
            <h5 className="text-h2 text-white leading-tight font-semibold">
              <AnimatedCounter to={300} />+
            </h5>
            <h5 className="text-h6 text-white">Comments</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FortuneCompanies;
