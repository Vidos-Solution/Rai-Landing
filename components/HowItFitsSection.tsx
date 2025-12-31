"use client";

import { useState } from "react";

export default function HowItFitsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const components = [
    {
      title: "Courses",
      description: "build understanding and stewardship",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      gradient: "from-primary to-secondary",
      color: "primary",
      number: "01",
    },
    {
      title: "The Governance Framework",
      description: "defines structure and controls",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: "from-secondary to-accent",
      color: "secondary",
      number: "02",
    },
    {
      title: "The Platform",
      description: "makes governance operational and reviewable",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      gradient: "from-accent to-primary",
      color: "accent",
      number: "03",
    },
  ];

  return (
    <section
      id="how-it-fits"
      className="relative py-8 md:py-12 overflow-hidden scene-3d"
      style={{ background: 'linear-gradient(to bottom, #1a2835 0%, #0f1b26 50%, #06090e 100%)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12 fade-in-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary font-semibold text-sm">
                The Ecosystem
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              How the Pieces Fit Together
            </h2>
            <p className="text-lg md:text-xl text-light-gray200 max-w-3xl mx-auto leading-relaxed">
              Together, they form a complete responsible AI governance system — activated through the CAIG Method.
            </p>
          </div>

          {/* Components Grid - Enhanced Unique Cards */}
          <div className="relative mb-10">
            {/* Connecting Lines - Desktop Only */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 z-0">
              <div className="absolute left-1/3 w-1/3 h-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative z-10">
              {components.map((component, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* Card Container */}
                  <div className="glass rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-white/10 hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
                    {/* Rotating Ring Effect */}
                    <div className={`absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r ${component.gradient} opacity-0 group-hover:opacity-20 animate-spin transition-opacity duration-500`} style={{ animationDuration: '8s' }}></div>
                    
                    {/* Number Badge - Top Left */}
                    <div className={`absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-br ${component.gradient} flex items-center justify-center border-4 border-dark-medium shadow-xl z-20`}>
                      <span className="text-white text-xs font-bold">{component.number}</span>
                    </div>

                    {/* Outer Glow on Hover */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${component.gradient} rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10`}></div>

                    {/* Icon Container - Enhanced */}
                    <div className="relative mb-6">
                      {/* Rotating Ring Around Icon */}
                      <div className={`absolute inset-0 w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full border-2 border-transparent bg-gradient-to-r ${component.gradient} opacity-0 group-hover:opacity-30 animate-spin transition-opacity duration-500`} style={{ animationDuration: '3s' }}></div>
                      
                      {/* Icon Background */}
                      <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${component.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl`}>
                        {/* Inner Glow */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${component.gradient} blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                        
                        {/* Icon */}
                        <div className="text-white relative z-10">
                          {component.icon}
                        </div>
                        
                        {/* Corner Accents */}
                        <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-white/30 rounded-tr-lg"></div>
                        <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-white/30 rounded-bl-lg"></div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r ${component.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                      {component.title}
                    </h3>

                    {/* Description */}
                    <p className="text-light-gray200 leading-relaxed text-sm md:text-base mb-4 group-hover:text-white transition-colors duration-300">
                      {component.description}
                    </p>

                    {/* Bottom Accent Line */}
                    <div className={`h-1 bg-gradient-to-r ${component.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-4`}></div>

                    {/* Corner Decorations */}
                    <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-accent/20 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Arrow Connector - Desktop Only */}
                  {index < components.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${component.gradient} flex items-center justify-center border-2 border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Expand/Collapse Section */}
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
            >
              <span className="text-primary font-semibold group-hover:text-accent transition-colors">
                {isExpanded ? "Hide" : "Show"} why this separation matters
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
                  <p className="font-semibold text-white text-lg mb-4">Each component is intentionally distinct:</p>
                  <div className="space-y-4">
                    {components.map((component, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${component.gradient} flex items-center justify-center flex-shrink-0`}>
                          <div className="text-white text-sm font-bold">{index + 1}</div>
                        </div>
                        <div className="flex-1">
                          <span className={`font-semibold text-white bg-gradient-to-r ${component.gradient} bg-clip-text text-transparent`}>
                            {component.title}
                          </span>
                          <span className="text-light-gray200">
                            {" "}
                            {index === 0 && "address human understanding and judgement"}
                            {index === 1 && "removes interpretation ambiguity"}
                            {index === 2 && "enables consistent implementation and evidence"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 rounded-lg bg-dark-medium/50 border border-white/10">
                    <p className="text-white font-medium text-lg">
                      This separation allows organisations and professionals to adopt governance progressively, without being forced into a single monolithic solution.
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
