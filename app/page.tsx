import Hero from "@/components/Hero";
import PracticeSection from "@/components/PracticeSection";
import RAIGFSection from "@/components/RAIGFSection";
import StandardsSection from "@/components/StandardsSection";
import UnifiedSystemSection from "@/components/UnifiedSystemSection";
import SocialProofSection from "@/components/SocialProofSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Hero />
      <StandardsSection />
      <PracticeSection />
      <RAIGFSection />
      <UnifiedSystemSection />
      <SocialProofSection />
      <CTASection />
      <Footer />
    </main>
  );
}
