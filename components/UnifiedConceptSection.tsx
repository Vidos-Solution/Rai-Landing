"use client";

import { useState } from "react";

export default function UnifiedConceptSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const pillars = [
    {
      title: "Understanding",
      description: "so people know their responsibilities",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-primary to-secondary",
      color: "primary",
    },
    {
      title: "Structure",
      description: "so governance is consistent and repeatable",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      gradient: "from-secondary to-accent",
      color: "secondary",
    },
    {
      title: "Stewardship",
      description: "so accountability is real, not abstract",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: "from-accent to-primary",
      color: "accent",
    },
    {
      title: "Evidence",
      description: "so AI use can be explained and defended",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: "from-primary via-secondary to-accent",
      color: "primary",
    },
  ];

  return (
    <section
      id="unified-concept"
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
                The Solution
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              The Unified Concept
            </h2>
            <p className="text-lg md:text-xl text-light-gray200 max-w-3xl mx-auto leading-relaxed mb-3">
              Responsible AI is not a single product.
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white max-w-3xl mx-auto mb-3">
              It is a governance system.
            </p>
            <p className="text-lg md:text-xl text-light-gray200 max-w-3xl mx-auto">
              It requires understanding, structure, stewardship, and evidence — working together.
            </p>
          </div>

          {/* Four Pillars Grid - Unique Horizontal Card Design */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-10">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Card with Horizontal Layout */}
                <div className="relative overflow-hidden rounded-lg border-l-4 border-transparent group-hover:border-primary transition-all duration-500">
                  {/* Background Gradient Layer */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Main Card Content */}
                  <div className="glass p-5 md:p-6 border border-white/10 group-hover:border-white/20 transition-all duration-500 relative">
                    {/* Vertical Accent Bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Content Layout */}
                    <div className="flex items-start gap-4 md:gap-5 relative z-10">
                      {/* Icon Section - Left Side */}
                      <div className="flex-shrink-0">
                        <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500`}>
                          {/* Icon Background Pattern */}
                          <div className="absolute inset-0 opacity-10 overflow-hidden rounded-lg">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                          </div>
                          
                          {/* Icon */}
                          <div className="text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                            {pillar.icon}
                          </div>
                          
                          {/* Top Right Corner Triangle */}
                          <div className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-t-white/20 border-l-[12px] border-l-transparent"></div>
                        </div>
                      </div>

                      {/* Text Content - Right Side */}
                      <div className="flex-1 min-w-0">
                        {/* Title */}
                        <h3 className={`text-lg md:text-xl font-bold mb-2 text-white group-hover:bg-gradient-to-r ${pillar.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                          {pillar.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-sm md:text-base text-light-gray200 leading-relaxed group-hover:text-light-gray100 transition-colors duration-300">
                          {pillar.description}
                        </p>
                        
                        {/* Bottom Indicator Line */}
                        <div className={`mt-3 h-0.5 w-0 bg-gradient-to-r ${pillar.gradient} group-hover:w-full transition-all duration-500`}></div>
                      </div>

                      {/* Arrow Indicator - Right Side */}
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${pillar.gradient} flex items-center justify-center`}>
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Border Effect */}
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${pillar.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                </div>
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
                {isExpanded ? "Hide" : "Show"} how Vidos Responsible AI addresses this
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
                    Responsible AI cannot be solved with a single policy, course, or tool.
                  </p>
                  
                  <div className="mt-6">
                    <p className="font-semibold text-white mb-4 text-lg">Sustainable AI governance requires:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {pillars.map((pillar, index) => (
                        <div key={index} className="glass rounded-lg p-4 border border-white/10 hover:border-primary/30 transition-all">
                          <div className={`text-lg font-semibold mb-2 bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent`}>
                            {pillar.title}
                          </div>
                          <div className="text-sm text-light-gray200">{pillar.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-lg bg-dark-medium/50 border border-white/10">
                    <p className="text-white font-medium text-lg">
                      Vidos Responsible AI is designed as a connected ecosystem that delivers all four — without reducing governance to box-ticking or certification theatre.
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
