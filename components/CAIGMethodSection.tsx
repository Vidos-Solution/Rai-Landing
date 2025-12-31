"use client";

import { useState } from "react";

export default function CAIGMethodSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const steps = [
    {
      id: 1,
      name: "Discover",
      description: "Identify AI use cases and governance needs",
      icon: "🔍",
      gradient: "from-primary to-secondary",
      color: "primary",
    },
    {
      id: 2,
      name: "Educate",
      description: "Build understanding and capability",
      icon: "📚",
      gradient: "from-secondary to-accent",
      color: "secondary",
    },
    {
      id: 3,
      name: "Implement",
      description: "Establish governance structure and controls",
      icon: "⚙️",
      gradient: "from-accent to-primary",
      color: "accent",
    },
    {
      id: 4,
      name: "Steward",
      description: "Maintain accountability and oversight",
      icon: "🛡️",
      gradient: "from-primary via-secondary to-accent",
      color: "primary",
    },
    {
      id: 5,
      name: "Assure & Evolve",
      description: "Review, improve, and adapt governance",
      icon: "🔄",
      gradient: "from-accent via-primary to-secondary",
      color: "accent",
    },
  ];

  return (
    <section
      id="caig-method"
      className="relative py-8 md:py-12 overflow-hidden scene-3d"
      style={{ background: 'linear-gradient(to bottom, #06090e 0%, #0f1b26 50%, #1a2835 100%)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12 fade-in-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary font-semibold text-sm">
                The Methodology
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              The CAIG Method™
            </h2>
            <p className="text-sm md:text-base text-light-gray600 mb-4">Capability-Anchored AI Governance</p>
            <p className="text-lg md:text-xl text-light-gray200 max-w-3xl mx-auto leading-relaxed mb-3">
              The CAIG Method™ is the governance lifecycle that underpins all Vidos Responsible AI offerings.
            </p>
            <p className="text-base md:text-lg text-light-gray600 max-w-2xl mx-auto">
              It provides a structured pathway from <span className="text-white font-medium">AI awareness → accountable governance → ongoing assurance</span>.
            </p>
          </div>

          {/* Enhanced Circular Process Visual */}
          <div className="relative mb-10 md:mb-12">
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-2xl aspect-square">
                {/* Multiple Rotating Rings - Enhanced */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/10 animate-spin" style={{ animationDuration: '30s' }}></div>
                <div className="absolute inset-4 rounded-full border border-accent/15 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
                <div className="absolute inset-8 rounded-full border border-secondary/10 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-12 rounded-full border-2 border-primary/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                
                {/* Connecting Lines Between Steps */}
                <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(-90deg)' }}>
                  {steps.map((step, index) => {
                    const angle1 = (index * 72 - 90) * (Math.PI / 180);
                    const angle2 = ((index + 1) * 72 - 90) * (Math.PI / 180);
                    const radius = 42;
                    const x1 = 50 + radius * Math.cos(angle1);
                    const y1 = 50 + radius * Math.sin(angle1);
                    const x2 = 50 + radius * Math.cos(angle2);
                    const y2 = 50 + radius * Math.sin(angle2);
                    
                    return (
                      <line
                        key={`line-${index}`}
                        x1={`${x1}%`}
                        y1={`${y1}%`}
                        x2={`${x2}%`}
                        y2={`${y2}%`}
                        stroke="rgba(145, 183, 172, 0.2)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        className="animate-pulse"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      />
                    );
                  })}
                </svg>
                
                {/* Steps positioned in circle - Enhanced */}
                {steps.map((step, index) => {
                  const angle = (index * 72 - 90) * (Math.PI / 180);
                  const radius = 42; // Percentage of container
                  const x = 50 + radius * Math.cos(angle);
                  const y = 50 + radius * Math.sin(angle);
                  
                  return (
                    <div
                      key={step.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                      }}
                    >
                      {/* Outer glow on hover */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                      
                      {/* Step Card */}
                      <div className={`glass rounded-xl md:rounded-2xl w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex flex-col items-center justify-center border-2 border-white/10 hover:border-primary/60 transition-all bg-gradient-to-br ${step.gradient} bg-opacity-20 group-hover:scale-110 group-hover:bg-opacity-30 relative overflow-hidden`}>
                        {/* Rotating inner ring */}
                        <div className="absolute inset-0 rounded-xl border border-white/10 animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '3s' }}></div>
                        
                        {/* Step Number Badge */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center border-2 border-dark-medium shadow-lg z-10">
                          <span className="text-white text-xs font-bold">{step.id}</span>
                        </div>
                        
                        {/* Icon */}
                        <div className="text-2xl md:text-3xl lg:text-4xl mb-1 group-hover:scale-110 transition-transform duration-300 relative z-10">
                          {step.icon}
                        </div>
                        
                        {/* Step Name */}
                        <div className="text-xs md:text-sm font-semibold text-white text-center leading-tight px-1 group-hover:text-primary transition-colors relative z-10">
                          {step.name}
                        </div>
                        
                        {/* Pulsing dot indicator */}
                        <div className={`absolute bottom-2 w-2 h-2 rounded-full bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300`}></div>
                      </div>
                      
                      {/* Description Tooltip on Hover */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-48 glass rounded-lg p-3 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
                        <p className="text-xs text-light-gray200 text-center leading-tight">{step.description}</p>
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 border-l border-t border-white/10 bg-dark-medium rotate-45"></div>
                      </div>
                    </div>
                  );
                })}

                {/* Enhanced Center Badge */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative group">
                    {/* Multiple rotating rings around center */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin" style={{ animationDuration: '20s' }}></div>
                    <div className="absolute inset-2 rounded-full border border-accent/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                    <div className="absolute inset-4 rounded-full border border-secondary/15 animate-spin" style={{ animationDuration: '10s' }}></div>
                    
                    {/* Main Center Badge */}
                    <div className="glass rounded-full w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 flex items-center justify-center border-4 border-accent/30 shadow-2xl group-hover:scale-110 transition-transform duration-500 relative">
                      {/* Inner layers */}
                      <div className="absolute inset-3 rounded-full bg-dark-overlay/90 border-2 border-primary/40 flex items-center justify-center backdrop-blur-sm">
                        <div className="text-center relative z-10">
                          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                            CAIG
                          </div>
                          <div className="text-xs md:text-sm text-light-gray200">Method™</div>
                        </div>
                      </div>
                      
                      {/* Pulsing inner glow */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-xl animate-pulse"></div>
                      
                      {/* Rotating gradient ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-spin opacity-50" style={{ animationDuration: '8s' }}></div>
                    </div>
                    
                    {/* Outer glow effect - Enhanced */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl -z-10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/15 to-secondary/15 blur-2xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    
                    {/* Radial lines from center */}
                    {steps.map((step, index) => {
                      const angle = (index * 72 - 90) * (Math.PI / 180);
                      return (
                        <div
                          key={`radial-${index}`}
                          className="absolute top-1/2 left-1/2 w-1 h-20 md:h-24 origin-top"
                          style={{
                            transform: `translate(-50%, -50%) rotate(${angle * (180 / Math.PI)}deg)`,
                            background: `linear-gradient(to bottom, rgba(145, 183, 172, 0.1), transparent)`,
                          }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expand/Collapse Section */}
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
            >
              <span className="text-primary font-semibold group-hover:text-accent transition-colors">
                {isExpanded ? "Hide" : "Show"} why CAIG was developed
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
                    The CAIG Method was designed in response to a consistent failure pattern: responsible AI initiatives treated as events rather than operating systems.
                  </p>
                  
                  <div className="mt-6">
                    <p className="font-semibold text-white mb-4 text-lg">Governance works in every other risk-critical domain because it is:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {["lifecycle-based", "accountable", "evidence-driven", "continuously reviewed"].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-light-gray200">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-white font-medium mt-6 mb-4">CAIG applies the same logic to AI.</p>
                  
                  <div className="mt-4">
                    <p className="font-semibold text-white mb-4 text-lg">It deliberately avoids:</p>
                    <div className="space-y-2">
                      {["compliance guarantees", "maturity score theatrics", "one-off certification"].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <p className="text-light-gray200">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-lg bg-dark-medium/50 border border-white/10">
                    <p className="text-white font-medium text-lg">
                      Instead, it anchors responsible AI in capability, judgement, and governance practice over time.
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
