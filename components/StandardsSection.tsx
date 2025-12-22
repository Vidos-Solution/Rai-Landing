"use client";

import { useRef, useEffect } from "react";

export default function StandardsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        badgesRef.current.forEach((badge, index) => {
          if (badge) {
            const badgeRect = badge.getBoundingClientRect();
            const scrollProgress =
              (window.innerHeight - badgeRect.top) / window.innerHeight;
            
            // More dramatic 3D effects
            const rotation = Math.sin(scrollProgress * Math.PI) * 25;
            const rotateX = Math.cos(scrollProgress * Math.PI) * 15;
            const translateZ = Math.sin(scrollProgress * Math.PI) * 80;
            const translateY = (scrollProgress - 0.5) * 60;
            const scale = 0.85 + Math.sin(scrollProgress * Math.PI) * 0.15;

            badge.style.transform = `perspective(1500px) translate3d(0, ${translateY}px, ${translateZ}px) rotateY(${rotation}deg) rotateX(${rotateX}deg) scale(${scale})`;
            badge.style.opacity = `${Math.max(0.5, Math.min(1, scrollProgress * 2))}`;
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const standards = [
    {
      title: "RICS Responsible AI principles",
      subtitle: "September 2025",
      description:
        "Supporting consistent and defensible AI use in professional services.",
      color: "from-primary to-secondary",
    },
    {
      title: "ISO/IEC AI governance and risk standards",
      description:
        "International best practices, risk management frameworks, and governance structures.",
      color: "from-secondary to-accent",
    },
    {
      title: "EU AI regulatory principles",
      description:
        "EU AI Act compliance, European regulatory requirements, and cross-border considerations.",
      color: "from-accent to-primary",
    },
    {
      title: "UK AI guidance",
      description:
        "UK-specific regulatory expectations, professional services standards, and national guidance alignment.",
      color: "from-primary via-secondary to-accent",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="standards"
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden scene-3d gradient-bg"
    >

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12 fade-in-up">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 mb-6">
              <span className="text-primary font-semibold text-sm">Trusted & Validated</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Standards and Professional Alignment
            </h2>
            <p className="text-xl md:text-2xl text-light-gray200 max-w-4xl mx-auto leading-relaxed mb-4">
              The RAIGF is mapped against recognized standards and regulatory frameworks, ensuring your AI governance stands up to scrutiny.
            </p>
            <p className="text-lg text-light-gray600 max-w-3xl mx-auto">
              Built for professionals who need defensible, auditable, and future-proof Responsible AI practices.
            </p>
          </div>

          {/* RICS Primary Highlight */}
          <div className="mb-12 md:mb-16">
            <div className="glass rics-card rounded-2xl p-8 md:p-10 border border-primary/30 max-w-5xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary">
                    <span className="text-white font-semibold">Primary Alignment</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
                  RICS Responsible AI principles
                </h3>
                <p className="text-light-gray600 mb-6 text-center">September 2025</p>
                <p className="text-light-gray200 text-lg md:text-xl text-center max-w-3xl mx-auto mb-6 leading-relaxed">
                  Supporting consistent and defensible AI use in professional services. The RAIGF framework directly aligns with RICS guidance, providing a clear pathway for built-environment professionals.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 rounded-xl bg-dark-medium/50">
                    <div className="text-2xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-light-gray200">Mapped Coverage</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-dark-medium/50">
                    <div className="text-2xl font-bold text-accent mb-2">2025</div>
                    <div className="text-sm text-light-gray200">Latest Standards</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-dark-medium/50">
                    <div className="text-2xl font-bold text-secondary mb-2">✓</div>
                    <div className="text-sm text-light-gray200">Audit Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Standards Matter */}
          <div className="mb-12 md:mb-16">
            <div className="text-center mb-8 md:mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Why Standards Alignment Matters
              </h3>
              <p className="text-light-gray200 max-w-2xl mx-auto">
                Professional credibility, regulatory compliance, and future-proofing — all in one framework.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8 md:mb-10">
              <div className="glass standards-card rounded-xl p-6 border border-white/10 text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Professional Credibility</h4>
                <p className="text-sm text-light-gray200">
                  Demonstrate alignment with recognized professional standards and regulatory frameworks.
                </p>
              </div>
              <div className="glass standards-card rounded-xl p-6 border border-white/10 text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-secondary mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Regulatory Confidence</h4>
                <p className="text-sm text-light-gray200">
                  Stay ahead of evolving regulations with a framework that adapts to new requirements.
                </p>
              </div>
              <div className="glass standards-card rounded-xl p-6 border border-white/10 text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-primary mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Future-Proof</h4>
                <p className="text-sm text-light-gray200">
                  Built to evolve with changing expectations, regulations, and industry best practices.
                </p>
              </div>
            </div>
          </div>

          {/* Comprehensive Standards Integration - Unique Flow Design */}
          <div className="mb-12 md:mb-16">
            <div className="text-center mb-10 md:mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Comprehensive Standards Integration
              </h3>
              <p className="text-light-gray200 max-w-2xl mx-auto">
                The RAIGF draws from multiple authoritative sources to ensure comprehensive coverage.
              </p>
            </div>
            
            {/* Unique Flow Design */}
            <div className="relative max-w-5xl mx-auto">
              {/* Connecting Flow Lines */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 via-accent/30 to-transparent hidden md:block transform -translate-y-1/2"></div>
              
              {/* Standards Flow Items */}
              <div className="relative space-y-8 md:space-y-12">
                {standards.slice(1).map((standard, index) => (
                  <div
                    key={index}
                    className="relative"
                  >
                    {/* Alternating Layout: Left/Right */}
                    <div className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Icon Node */}
                      <div className="relative flex-shrink-0">
                        <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${standard.color} flex items-center justify-center shadow-2xl relative z-10 border-4 border-dark-overlay/50`}>
                          <svg
                            className="w-10 h-10 md:w-12 md:h-12 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        {/* Pulse Effect */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${standard.color} opacity-20 animate-ping`}></div>
                      </div>

                      {/* Content */}
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center md:text-left`}>
                        <div className="inline-flex items-center gap-2 mb-3">
                          <div className={`h-1 w-8 bg-gradient-to-r ${standard.color} ${index % 2 === 0 ? '' : 'md:order-2'}`}></div>
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Fully integrated</span>
                          <div className={`h-1 w-8 bg-gradient-to-r ${standard.color} ${index % 2 === 0 ? 'md:hidden' : 'hidden md:block md:order-1'}`}></div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                          {standard.title}
                        </h3>
                        <p className="text-light-gray200 leading-relaxed text-sm md:text-base">
                          {standard.description}
                        </p>
                      </div>
                    </div>

                    {/* Connecting Line (Mobile) */}
                    {index < standards.slice(1).length - 1 && (
                      <div className="absolute left-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-primary/30 to-accent/30 transform -translate-x-1/2 md:hidden"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Central Integration Badge */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shadow-2xl border-4 border-dark-overlay/50 backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-12 md:mb-16">
            <div className="glass standards-card rounded-2xl p-8 md:p-10 border border-white/10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                What This Means for You
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Defensible Decisions</h4>
                    <p className="text-light-gray200 text-sm">
                      Your AI use decisions are backed by recognized standards and can be justified to clients, regulators, and stakeholders.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Audit Ready</h4>
                    <p className="text-light-gray200 text-sm">
                      Framework structure and documentation align with audit requirements, making compliance reviews straightforward.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Regulatory Preparedness</h4>
                    <p className="text-light-gray200 text-sm">
                      Stay ahead of evolving regulations with a framework that's already aligned with current and emerging requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Professional Recognition</h4>
                    <p className="text-light-gray200 text-sm">
                      Demonstrate commitment to professional standards and ethical AI use, enhancing your professional reputation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-center">
            <div className="inline-block glass standards-card rounded-2xl px-8 py-6 border border-accent/30 max-w-4xl">
              <p className="text-lg md:text-xl text-light-gray200 mb-2">
                This ensures the framework remains relevant as expectations and regulation evolve.
              </p>
              <p className="text-base text-light-gray600">
                Built for today's requirements, designed for tomorrow's challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

