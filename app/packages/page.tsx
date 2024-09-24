import ContactUs from "@/components/sections/contact-us";
import PackagesHero from "@/components/sections/packages/packages-hero";
import AllPricing from "@/components/sections/packages/packages-pricing";

const page = () => {
  return (
    <main>
      <PackagesHero />
      <AllPricing />
      <ContactUs />
    </main>
  );
};

export default page;
