import HeroLanding from "@/components/sections/hero-landing";
import ExploreSection from "@/components/sections/explore-section";
import AmenitiesSection from "@/components/sections/amenities-section";
import LuxurySection from "@/components/sections/luxury-section";
import VirtualTourSection from "@/components/sections/virtual-tour-section";
import ReserveSection from "@/components/sections/reserve-section";

export default function IndexPage() {
  return (
    <main>
      <HeroLanding />
      <ExploreSection />
      <AmenitiesSection />
      <LuxurySection />
      <VirtualTourSection />
      <ReserveSection />
    </main>
  );
}
