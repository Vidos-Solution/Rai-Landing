"use client";

import { useState } from "react";

export default function IndicativeImpactSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const impacts = [
    { value: "30–60%", label: "reduction in unmanaged AI usage", gradient: "from-primary to-secondary", icon: "📉" },
    { value: "40–70%", label: "lower governance design effort", gradient: "from-secondary to-accent", icon: "⚡" },
    { value: "20–40%", label: "less senior time spent interpreting AI risk", gradient: "from-accent to-primary", icon: "⏱️" },
  ];

  const benefits = [
    "Faster audit, client, and regulatory responses",
    "Improved workforce confidence and consistency",
  ];

  return (
    <section
      id="indicative-impact"
      className="relative py-8 md:py-12 overflow-hidden scene-3d"
      style={{ background: 'linear-gradient(to bottom, #1a2835 0%, #0f1b26 50%, #06090e 100%)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12 fade-in-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary font-semibold text-sm">
                Measured Results
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Indicative Impact
            </h2>
            <p className="text-lg md:text-xl text-light-gray200 max-w-3xl mx-auto leading-relaxed">
              Organisations implementing structured AI governance typically see:
            </p>
          </div>

          {/* Impact Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {impacts.map((impact, index) => (
              <div
                key={index}
                className="glass rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 group text-center"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${impact.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-3xl md:text-4xl">{impact.icon}</div>
                </div>
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${impact.gradient} bg-clip-text text-transparent mb-3`}>
                  {impact.value}
                </div>
                <div className="text-sm md:text-base text-light-gray200 leading-relaxed">
                  {impact.label}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass rounded-lg p-4 border border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-light-gray200">{benefit}</p>
              </div>
            ))}
          </div>

          {/* Expand/Collapse Section */}
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
            >
              <span className="text-primary font-semibold group-hover:text-accent transition-colors">
                {isExpanded ? "Hide" : "Show"} how these figures should be interpreted
              </span>
              <svg
                className={`w-5 h-5 text-primary transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Tier 2 - Expanded Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? "max-h-[1000px] opacity-100 mt-6" : "max-h-0 opacity-0"
              }`}
            >
              <div className="glass rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10 mt-6">
                <div className="space-y-4 text-light-gray200 leading-relaxed">
                  <p className="text-lg">
                    These figures are drawn from observed governance, risk, and transformation programmes across professional and regulated environments.
                  </p>
                  
                  <div className="mt-6">
                    <p className="font-semibold text-white mb-4 text-lg">They reflect:</p>
                    <div className="space-y-3">
                      {[
                        "reduced duplication of governance effort",
                        "earlier visibility of AI risk",
                        "clearer accountability and escalation",
                        "faster access to evidence when challenged"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </div>
                          <p className="text-light-gray200">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="mt-6">
                    Actual impact will vary depending on organisational size, sector, and existing AI usage.
                  </p>
                  
                  <div className="mt-6 p-4 rounded-lg bg-dark-medium/50 border border-white/10">
                    <p className="text-white font-medium text-lg mb-2">
                      Vidos does not claim guaranteed outcomes.
                    </p>
                    <p className="text-light-gray200">
                      The CAIG Method provides a structured pathway to reduce exposure and build governance maturity over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

