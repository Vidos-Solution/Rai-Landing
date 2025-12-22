"use client";

import { useRef } from "react";

export default function RAIGFSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const frameworkPoints = [
    {
      title: "Practical governance structures",
      description:
        "Operational frameworks, not theoretical concepts. Clear organizational roles and responsibilities. Scalable implementation models.",
      gradient: "from-primary to-secondary",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Clear roles and decision points",
      description:
        "Defined governance roles (User, Reviewer, Steward, Sponsor). Decision-making processes and approval workflows. Accountability chains.",
      gradient: "from-secondary to-accent",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Defined controls and evidence",
      description:
        "Specific controls for AI use. Documentation requirements. Evidence collection and retention.",
      gradient: "from-accent to-primary",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Assurance and reporting",
      description:
        "Audit-ready structures. Compliance reporting capabilities. Professional standards alignment.",
      gradient: "from-primary via-secondary to-accent",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="framework"
      className="relative py-16 md:py-24 overflow-hidden scene-3d"
      style={{ background: 'linear-gradient(to bottom, #06090e 0%, #0f1b26 50%, #1a2835 100%)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(145, 183, 172, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(145, 183, 172, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 fade-in-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary font-semibold text-sm">
                The Foundation
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              The Responsible AI Governance Framework
            </h2>
            <p className="text-lg md:text-xl text-light-gray200 max-w-3xl mx-auto leading-relaxed mb-3">
              The RAIGF is the foundation of the Vidos RAI platform.
            </p>
            <p className="text-base md:text-lg text-light-gray600 max-w-2xl mx-auto">
              It translates Responsible AI principles into practical, operational structures.
            </p>
          </div>

          {/* Central Core Badge with Connections */}
          <div className="relative mb-12 md:mb-16">
            {/* Connecting Lines - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
              <svg className="w-full h-full" style={{ maxHeight: '500px' }}>
                {frameworkPoints.map((point, index) => {
                  const positions = [
                    { x: 25, y: 20 }, // Top left
                    { x: 75, y: 20 }, // Top right
                    { x: 25, y: 80 }, // Bottom left
                    { x: 75, y: 80 }, // Bottom right
                  ];
                  const pos = positions[index];
                  return (
                    <line
                      key={index}
                      x1="50%"
                      y1="50%"
                      x2={`${pos.x}%`}
                      y2={`${pos.y}%`}
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      opacity="0.3"
                      className="animate-pulse"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    />
                  );
                })}
                <defs>
                  {frameworkPoints.map((point, index) => (
                    <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#91B7AC" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#6EA2DC" stopOpacity="0.6" />
                    </linearGradient>
                  ))}
                </defs>
              </svg>
            </div>

            {/* Central Core Badge */}
            <div className="flex items-center justify-center">
              <div className="relative group">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-2 rounded-full border border-accent/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                
                {/* Core Badge */}
                <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shadow-2xl border-4 border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-3 rounded-full bg-dark-overlay/90 border-2 border-primary/40 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-bold text-xl md:text-2xl">RAIGF</span>
                  </div>
                  
                  {/* Pulsing inner glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-xl animate-pulse"></div>
                </div>
                
                {/* Outer glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl -z-10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>

          {/* Framework Pillars - Enhanced Multi-Layer Design */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 relative">
            {frameworkPoints.map((point, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Animated background orb */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-all duration-500 group-hover:scale-150`}></div>
                
                {/* Main Card Container */}
                <div className="glass rounded-xl md:rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 relative flex flex-col md:flex-row h-full transform group-hover:-translate-y-1">
                  {/* Animated border glow */}
                  <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500 -z-10`}></div>
                  
                  {/* Side Panel - Enhanced Gradient Bar */}
                  <div className={`w-full md:w-24 h-24 md:h-auto bg-gradient-to-br ${point.gradient} relative flex-shrink-0 flex items-center justify-center md:flex-col p-4 md:p-6 overflow-hidden`}>
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10 animate-pulse" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`,
                    }}></div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${30 + i * 20}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${2 + i}s`
                          }}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Number Badge - Enhanced */}
                    <div className="absolute top-2 right-2 md:top-4 md:right-4 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-bold text-xs md:text-sm border-2 border-white/40 shadow-xl group-hover:scale-125 group-hover:rotate-180 group-hover:shadow-2xl group-hover:shadow-white/50 transition-all duration-500 z-20">
                      <span className="relative z-10">{index + 1}</span>
                      {/* Rotating ring inside badge */}
                      <div className="absolute inset-1 rounded-full border border-white/30 animate-spin" style={{ animationDuration: '3s' }}></div>
                    </div>
                    
                    {/* Icon Container - Enhanced */}
                    <div className="relative z-10">
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 rounded-xl bg-white/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Icon box with multiple layers */}
                      <div className="relative">
                        <div className="w-14 h-14 md:w-18 md:h-18 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white border-2 border-white/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl relative overflow-hidden">
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          
                          {/* Icon */}
                          <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                            {point.icon}
                          </div>
                          
                          {/* Corner accents */}
                          <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-white/50"></div>
                          <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-white/50"></div>
                        </div>
                        
                        {/* Rotating outer ring */}
                        <div className="absolute -inset-2 rounded-xl border-2 border-white/20 animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '8s' }}></div>
                      </div>
                    </div>
                    
                    {/* Decorative corner elements - Enhanced */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/40 group-hover:border-white/80 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/40 group-hover:border-white/80 transition-colors duration-300"></div>
                    
                    {/* Side accent lines */}
                    <div className={`absolute ${index % 2 === 0 ? 'left-0' : 'right-0'} top-1/2 transform -translate-y-1/2 w-1 h-16 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>

                  {/* Content Panel - Enhanced */}
                  <div className="flex-1 p-6 md:p-8 relative">
                    {/* Layered background effects */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-8 transition-opacity duration-500`}></div>
                    
                    {/* Animated grid pattern */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px',
                    }}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Title with underline effect */}
                      <div className="relative inline-block mb-3 md:mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300 leading-tight relative">
                          {point.title}
                        </h3>
                        {/* Animated underline */}
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${point.gradient} w-0 group-hover:w-full transition-all duration-500`}></div>
                      </div>
                      
                      <p className="text-sm md:text-base text-light-gray200 leading-relaxed group-hover:text-light-gray100 transition-colors duration-300 relative">
                        {point.description}
                        {/* Reading indicator */}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-1000 delay-300"></span>
                      </p>
                    </div>

                    {/* Multi-layer accent lines */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${point.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className={`absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r ${point.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-700 delay-100`}></div>
                  </div>

                  {/* Corner accents - Multiple layers */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-bl-full`}></div>
                  <div className={`absolute top-2 right-2 w-12 h-12 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 delay-100 rounded-bl-full`}></div>
                  
                  {/* Side glow effect */}
                  <div className={`absolute ${index % 2 === 0 ? 'left-0' : 'right-0'} top-0 bottom-0 w-1 bg-gradient-to-b ${point.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                </div>

                {/* Enhanced Connection indicator */}
                <div className={`absolute ${index % 2 === 0 ? '-left-3' : '-right-3'} top-1/2 transform -translate-y-1/2 z-20`}>
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${point.gradient} border-2 border-dark-overlay/50 shadow-xl opacity-0 md:opacity-100 group-hover:scale-200 group-hover:shadow-2xl group-hover:shadow-primary/50 transition-all duration-500 relative`}>
                    {/* Pulsing ring */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-50 group-hover:scale-150 transition-all duration-500 animate-ping`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Framework Characteristics - Enhanced */}
          <div className="text-center">
            <div className="inline-block glass rounded-xl md:rounded-2xl px-6 md:px-10 py-6 md:py-8 border border-white/10 max-w-4xl relative overflow-hidden group">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <p className="text-base md:text-lg text-light-gray200 mb-5 font-medium">
                  The framework is designed to be
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-5">
                  {["operational", "scalable", "auditable"].map((word, index) => (
                    <span
                      key={index}
                      className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold text-sm md:text-base shadow-xl hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 cursor-default relative overflow-hidden group/badge"
                    >
                      {/* Shimmer effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-1000"></span>
                      <span className="relative z-10">{word}</span>
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
                  <p className="text-sm md:text-base text-light-gray600 italic">
                    not theoretical
                  </p>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
