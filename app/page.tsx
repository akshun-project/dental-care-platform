 import Hero from "@/components/landing/Hero";
import TrustStrip from "@/components/landing/TrustStrip";
import Intro from "@/components/landing/Intro";
import Services from "@/components/landing/Services";
import HowItWorks from "@/components/landing/HowItWorks";
import DentistDiscovery from "@/components/landing/DentistDiscovery";
import PatientStory from "@/components/landing/PatientStory";
import FinalCTA from "@/components/landing/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Intro />
      <Services />
      <HowItWorks />
      <DentistDiscovery />
      <PatientStory />
      <FinalCTA />
    </>
  );
}