import {
  WrenchIcon,
  SeoFriendly,
  SupportIcon,
  GroupIcon,
} from "@/components/ui/icons";
import Transition from "@/components/ui/text-appear";

const OurFeatures = () => {
  const featuresList = [
    { icon: <WrenchIcon />, title: "Powerful Customization" },
    { icon: <SeoFriendly />, title: "SEO Friendly Coding" },
    { icon: <SupportIcon />, title: "24/7 Instant Support" },
    { icon: <GroupIcon />, title: "Expert Designers Team" },
  ];

  return (
    <section>
      <div className="container">
        <div className="bg-white shadow-xl flex lg:flex-row flex-col items-center rounded-[1.125rem] sm:-translate-y-1/2 -translate-y-[14%] xl:p-16 p-8 sm:mx-0 mx-2">
          <div className="lg:max-w-[21.25rem] lg:border-r lg:border-b-0 border-b lg:pb-0 pb-2 lg:mb-0 mb-4">
            <h2 className="sm:text-h2 text-3xl font-semibold leading-tight">
              <Transition>Our Unique Features</Transition>
            </h2>
          </div>
          <div className="flex-1 lg:pl-10 grid md:grid-cols-4 sm:grid-cols-2 gap-4">
            {featuresList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 2xl:px-14 xl:px-6 px-2"
                >
                  <div
                    className={`w-20 h-20 grid place-items-center rounded-full ${
                      index % 2 == 0
                        ? "bg-gradient-to-b to-[#21D6A2] from-[#4F60E8]"
                        : "bg-black"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <Transition>
                    <p className="text-sm font-medium text-center">
                      {item.title}
                    </p>
                  </Transition>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
