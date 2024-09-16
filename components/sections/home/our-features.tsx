import {
  WrenchIcon,
  SeoFriendly,
  SupportIcon,
  GroupIcon,
} from "@/components/ui/icons";

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
        <div className="bg-white shadow-xl flex items-center rounded-[1.125rem] -translate-y-1/2 p-16">
          <div className="max-w-[21.25rem] border-r">
            <h2 className="text-h2 font-semibold leading-tight">
              Our Unique Features
            </h2>
          </div>
          <div className="flex-1 pl-10 grid grid-cols-4 gap-4">
            {featuresList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 px-14"
                >
                  <div
                    className={`w-20 h-20 grid place-items-center rounded-full ${
                      index % 2 == 0 ? "bg-primary" : "bg-black"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <p className="text-sm font-medium text-center">
                    {item.title}
                  </p>
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
