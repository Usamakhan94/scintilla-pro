import BestSolution from "@/components/sections/home/best-solution";
import Hero from "@/components/sections/home/hero";
import OurFeatures from "@/components/sections/home/our-features";
import Services from "@/components/sections/home/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurFeatures />
      <Services />
      <BestSolution />
    </main>
  );
}
