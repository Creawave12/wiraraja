import Hero from "@/components/sections/home/Hero";
import StatsBar from "@/components/sections/home/StatsBar";
import PillarsSection from "@/components/sections/home/PillarsSection";
import WhySection from "@/components/sections/home/WhySection";
import StatementSection from "@/components/sections/home/StatementSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <PillarsSection />
      <WhySection />
      <StatementSection />
    </>
  );
}