import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import UnifiedConceptSection from "@/components/UnifiedConceptSection";
import CAIGMethodSection from "@/components/CAIGMethodSection";
import IndicativeImpactSection from "@/components/IndicativeImpactSection";
import TwoPathwaysSection from "@/components/TwoPathwaysSection";
import HowItFitsSection from "@/components/HowItFitsSection";
import StandardsSection from "@/components/StandardsSection";
import RAIGFSection from "@/components/RAIGFSection";
import UnifiedSystemSection from "@/components/UnifiedSystemSection";
import SocialProofSection from "@/components/SocialProofSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Hero />
      <ProblemSection />
      <UnifiedConceptSection />
      <CAIGMethodSection />
      <IndicativeImpactSection />
      <TwoPathwaysSection />
      <HowItFitsSection />
      <StandardsSection />
      <RAIGFSection />
      <UnifiedSystemSection />
      <SocialProofSection />
      <CTASection />
      <Footer />
    </main>
  );
}
