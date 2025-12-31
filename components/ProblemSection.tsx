"use client";

import { useState } from "react";

export default function ProblemSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const problemPoints = [
    {
      title: "Ownership is unclear",
      description: "AI-assisted decisions lack defined accountability",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-primary to-secondary",
      number: "01",
    },
    {
      title: "Policies aren't operational",
      description: "Governance exists on paper, not in practice",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: "from-secondary to-accent",
      number: "02",
    },
    {
      title: "Evidence is difficult",
      description: "Oversight documentation is hard to produce",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-accent to-primary",
      number: "03",
    },
  ];

  return (
    <section
      id="problem"
      className="relative py-20 md:py-28 overflow-hidden scene-3d"
      style={{ background: 'linear-gradient(to bottom, #06090e 0%, #0f1b26 50%, #1a2835 100%)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20 fade-in-up">
            <div className="inline-block mb-6">
              <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary font-semibold text-sm md:text-base">
                The Challenge
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              The Problem
            </h2>
            <p className="text-xl md:text-2xl text-light-gray200 max-w-3xl mx-auto leading-relaxed">
              Most organisations are already using AI — but:
            </p>
          </div>

          {/* Problem Cards - Enhanced Design */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-20">
            {problemPoints.map((point, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Subtle Glow */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${point.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
                
                {/* Card */}
                <div className="glass rounded-2xl p-8 md:p-10 border-2 border-white/10 hover:border-primary/40 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                  {/* Number Badge */}
                  <div className={`absolute top-4 right-4 w-10 h-10 rounded-lg bg-gradient-to-br ${point.gradient} flex items-center justify-center border-2 border-dark-medium shadow-lg opacity-80`}>
                    <span className="text-white text-sm font-bold">{point.number}</span>
                  </div>

                  {/* Icon Section */}
                  <div className="mb-6">
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${point.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500`}>
                      {/* Inner Glow */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${point.gradient} blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                      
                      {/* Icon */}
                      <div className="text-white relative z-10 transform group-hover:rotate-6 transition-transform duration-300">
                        {point.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-secondary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {point.title}
                  </h3>
                  
                  <p className="text-light-gray200 leading-relaxed text-base md:text-lg flex-grow group-hover:text-light-gray100 transition-colors duration-300">
                    {point.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className={`mt-6 h-1 w-0 bg-gradient-to-r ${point.gradient} rounded-full group-hover:w-full transition-all duration-500`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Message - Elegant Centerpiece */}
          <div className="relative mb-12 md:mb-16">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 rounded-3xl blur-2xl transform scale-105"></div>
            
            {/* Message Container */}
            <div className="relative glass rounded-3xl p-10 md:p-16 border-2 border-accent/30 hover:border-accent/50 transition-all duration-500 overflow-hidden">
              {/* Subtle Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  The risk isn't AI.
                </p>
                
                <div className="relative inline-block">
                  <p className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent leading-tight">
                    It's unmanaged AI.
                  </p>
                  
                  {/* Elegant Underline */}
                  <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Expand/Collapse Section */}
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 group"
            >
              <span className="text-primary font-semibold group-hover:text-accent transition-colors text-lg">
                {isExpanded ? "Hide" : "Show"} why this matters
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
                  <p className="text-lg md:text-xl">
                    Across professional and regulated environments, AI adoption has been informal and decentralised. Tools are used well-intentionally by individuals and teams, but without consistent governance design.
                  </p>
                  
                  <div className="mt-6">
                    <p className="font-semibold text-white mb-4 text-lg md:text-xl">This creates a structural gap:</p>
                    <div className="space-y-3">
                      {[
                        "AI influences outputs and decisions",
                        "Accountability is assumed, not defined",
                        "Governance exists on paper, not in practice"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-dark-medium/30 transition-colors">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </div>
                          <p className="text-light-gray200 text-base md:text-lg">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 p-5 rounded-xl bg-dark-medium/50 border border-white/10">
                    <p className="text-white font-medium text-lg md:text-xl">
                      Most organisations are not failing through negligence — they are operating without a governance model designed for AI-driven judgement.
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
