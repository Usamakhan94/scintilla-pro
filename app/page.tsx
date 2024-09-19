import BestSolution from "@/components/sections/home/best-solution";
import Hero from "@/components/sections/home/hero";
import MarketingMethods from "@/components/sections/home/marketing-methods";
import OurFeatures from "@/components/sections/home/our-features";
import OurPricing from "@/components/sections/home/our-pricing";
import Services from "@/components/sections/home/services";
import WorkTogether from "@/components/sections/home/work-together";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurFeatures />
      <Services />
      <BestSolution />
      <MarketingMethods />
      <OurPricing />
      <WorkTogether />
    </main>
  );
}
