// app/page.tsx

import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ANPPrivadoFooter from "@/components/ANPPrivadoFooter";
import ElevatedLivingSection from "@/components/ElevatedLivingSection";
import PropertyComparison from "@/components/PropertyComparison";
import CallBackForm from "@/components/CallBackForm";
import LocationContact from "@/components/LocationContact";
import ANPCorpAbout from "@/components/ANPCorpAbout";
import RitualRetreatComponent from "@/components/RitualRetreatComponent";

/**
 * The Home page component.
 *
 * It renders the main structure of the page, including the
 * Navbar, HeroSection, AboutSection, StatsSection, ProjectsSection,
 * ContactSection, and Footer.
 */
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ElevatedLivingSection />
      <RitualRetreatComponent/>
      <PropertyComparison />
      <CallBackForm />
      <LocationContact/>
      <ANPCorpAbout/>
      <ANPPrivadoFooter />
    </div>
  )
}