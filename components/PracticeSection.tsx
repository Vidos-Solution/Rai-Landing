"use client";

import { useRef, useEffect } from "react";

export default function PracticeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !cardRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        const cardRect = cardRef.current.getBoundingClientRect();
        const cardCenter = cardRect.top + cardRect.height / 2;
        const windowCenter = window.innerHeight / 2;
        const scrollProgress = (windowCenter - cardCenter) / window.innerHeight;
        
        // Subtle 3D effect for the card
        const rotateY = scrollProgress * 10;
        const translateZ = Math.abs(scrollProgress) * 50;
        
        cardRef.current.style.transform = `perspective(1500px) translate3d(0, 0, ${translateZ}px) rotateY(${rotateY}deg)`;
        cardRef.current.style.opacity = `${Math.max(0.8, 1 - Math.abs(scrollProgress) * 0.3)}`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const practices = [
    {
      title: "Knowing when AI can — and cannot — be used",
      points: [
        "Understanding appropriate use cases",
        "Recognizing limitations and boundaries",
        "Making informed decisions about AI adoption",
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Understanding how AI influences judgement and decisions",
      points: [
        "Awareness of AI's impact on professional judgment",
        "Recognizing cognitive biases in AI-assisted work",
        "Maintaining professional autonomy and critical thinking",
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Managing risk, bias, and accountability",
      points: [
        "Identifying and mitigating AI-related risks",
        "Addressing bias in AI systems and outputs",
        "Establishing clear accountability structures",
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Being able to explain and justify AI-assisted outputs",
      points: [
        "Transparency in AI usage",
        "Documentation and traceability",
        "Ability to defend AI-assisted decisions",
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="practice"
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden scene-3d"
      style={{ background: 'linear-gradient(to bottom, #1a2835 0%, #0f1b26 50%, #06090e 100%)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              What Responsible AI Means in Practice
            </h2>
            <p className="text-lg md:text-xl text-light-gray200 max-w-3xl mx-auto leading-relaxed">
              Responsible AI is not about abstract ethics or technical theory.
            </p>
          </div>

          {/* Two Column Layout: Left Content, Right Card */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            {/* Left Side - Practice Content */}
            <div className="flex-1 flex flex-col">
              {/* Practice Cards Grid - 2x2 */}
              <div className="grid md:grid-cols-2 gap-6 mb-6 flex-1">
                {practices.map((practice, index) => (
                  <div
                    key={index}
                    className="glass rounded-xl md:rounded-2xl p-5 md:p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 relative group flex flex-col"
                  >
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {practice.icon}
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-white leading-tight flex-1">
                        {practice.title}
                      </h3>
                    </div>
                    <ul className="space-y-1.5 flex-1">
                      {practice.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="text-xs md:text-sm text-light-gray200 flex items-start"
                        >
                          <span className="text-primary mr-2 mt-0.5 flex-shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bottom Message */}
              <div className="glass rounded-xl md:rounded-2xl px-5 md:px-6 py-4 md:py-5 border border-accent/30">
                <p className="text-lg md:text-xl font-bold text-white text-center">
                  In short:{" "}
                  <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    using AI in a way you can stand behind.
                  </span>
                </p>
              </div>
            </div>

            {/* Right Side - Practice Outcomes Card */}
            <div className="relative hidden lg:flex lg:mr-8 lg:flex-shrink-0">
              <div
                ref={cardRef}
                className="relative overflow-hidden rounded-2xl bg-white/5 p-5 md:p-6 ring-1 ring-white/10 backdrop-blur-lg w-full max-w-[420px] flex flex-col"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-white/3" />
                <div className="absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(145,183,172,0.18),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(109,136,157,0.16),transparent_50%)]" />
                
                <div className="relative flex flex-col flex-1 space-y-4 md:space-y-5 overflow-hidden">
                  {/* Enhanced Header */}
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3 md:py-3.5 text-sm text-white/80 backdrop-blur flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 ring-1 ring-primary/20">
                        <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-base">Practice Outcomes</span>
                        <p className="text-[10px] text-white/60 mt-0.5">What you'll achieve</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/30">
                      Results
                    </span>
                  </div>

                  {/* Practice-Related Features */}
                  <div className="grid gap-2.5 rounded-xl border border-white/10 bg-black/30 p-4 text-xs text-white/70 backdrop-blur flex-1">
                    <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2.5 border border-white/10 hover:bg-white/8 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/20 ring-1 ring-primary/30 flex-shrink-0">
                          <svg className="h-3.5 w-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <span className="font-medium text-xs block">Clear Boundaries</span>
                          <p className="text-[9px] text-white/50 mt-0.5">Know when to use AI</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-medium text-primary flex-shrink-0">✓</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2.5 border border-white/10 hover:bg-white/8 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-secondary/20 ring-1 ring-secondary/30 flex-shrink-0">
                          <svg className="h-3.5 w-3.5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <span className="font-medium text-xs block">Informed Decisions</span>
                          <p className="text-[9px] text-white/50 mt-0.5">Maintain judgment</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-medium text-secondary flex-shrink-0">✓</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2.5 border border-white/10 hover:bg-white/8 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/20 ring-1 ring-accent/30 flex-shrink-0">
                          <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <span className="font-medium text-xs block">Risk Management</span>
                          <p className="text-[9px] text-white/50 mt-0.5">Mitigate bias & risks</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-medium text-accent flex-shrink-0">✓</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2.5 border border-white/10 hover:bg-white/8 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/20 ring-1 ring-primary/30 flex-shrink-0">
                          <svg className="h-3.5 w-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <span className="font-medium text-xs block">Full Transparency</span>
                          <p className="text-[9px] text-white/50 mt-0.5">Explain & justify</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-medium text-primary flex-shrink-0">✓</span>
                    </div>
                  </div>

                  {/* Practice Stats */}
                  <div className="grid grid-cols-3 gap-1.5 overflow-hidden flex-shrink-0">
                    <div className="rounded-lg border border-white/10 bg-white/5 px-1.5 py-2 text-center backdrop-blur min-w-0 overflow-hidden">
                      <div className="text-xs md:text-sm font-bold text-white mb-0.5 leading-tight break-words px-0.5">Confidence</div>
                      <div className="text-[8px] md:text-[9px] text-white/70 font-medium leading-tight break-words px-0.5">in AI Use</div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 px-1.5 py-2 text-center backdrop-blur min-w-0 overflow-hidden">
                      <div className="text-xs md:text-sm font-bold text-white mb-0.5 leading-tight break-words px-0.5">Accountability</div>
                      <div className="text-[8px] md:text-[9px] text-white/70 font-medium leading-tight break-words px-0.5">Clear Lines</div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 px-1.5 py-2 text-center backdrop-blur min-w-0 overflow-hidden">
                      <div className="text-xs md:text-sm font-bold text-white mb-0.5 leading-tight break-words px-0.5">Stand Behind</div>
                      <div className="text-[8px] md:text-[9px] text-white/70 font-medium leading-tight break-words px-0.5">Your Work</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a 
                    href="#cta" 
                    className="block w-full rounded-lg px-4 py-2.5 text-sm font-semibold text-white text-center transition-all hover:scale-[1.02] hover:opacity-90 bg-gradient-to-r from-primary to-secondary flex-shrink-0"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

