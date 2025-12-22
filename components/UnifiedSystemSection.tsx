"use client";

import { useRef } from "react";

export default function UnifiedSystemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const professionalBenefits = [
    "Develop understanding, judgement, and confidence",
    "Learn through structured curriculum",
    "Gain recognized certification",
    "Build individual capability",
  ];

  const businessBenefits = [
    "Embed structure, oversight, and assurance",
    "Implement governance frameworks",
    "Establish organizational controls",
    "Ensure compliance and accountability",
  ];

  const connectionBenefits = [
    "Professionals trained on the framework can seamlessly work within organizations using the same framework",
    "Organizational governance aligns with individual training",
    "Consistent language, principles, and practices across both levels",
    "Reduced friction between learning and implementation",
  ];

  return (
    <section
      ref={sectionRef}
      id="unified"
      className="relative py-16 md:py-24 overflow-hidden scene-3d"
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
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary font-semibold text-sm">
                Unified Platform
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              One System, Two Experiences
            </h2>
            <p className="text-lg md:text-xl text-light-gray200 max-w-3xl mx-auto leading-relaxed">
              Vidos RAI brings together learning, certification, and governance within a single, coherent system.
            </p>
          </div>

          {/* Visual Connection Layout */}
          <div className="relative mb-12 md:mb-16">
            {/* Connection Lines - Desktop Only */}
            <div className="hidden lg:block absolute inset-0 top-1/2 left-0 right-0 h-full pointer-events-none">
              <svg className="w-full h-full" style={{ maxHeight: '400px' }}>
                {/* Left to Center */}
                <line
                  x1="20%"
                  y1="50%"
                  x2="45%"
                  y2="50%"
                  stroke="url(#gradient-left)"
                  strokeWidth="3"
                  strokeDasharray="8,4"
                  opacity="0.4"
                  className="animate-pulse"
                />
                {/* Right to Center */}
                <line
                  x1="80%"
                  y1="50%"
                  x2="55%"
                  y2="50%"
                  stroke="url(#gradient-right)"
                  strokeWidth="3"
                  strokeDasharray="8,4"
                  opacity="0.4"
                  className="animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                />
                {/* Center connection point */}
                <circle cx="50%" cy="50%" r="8" fill="url(#gradient-center)" opacity="0.6" className="animate-pulse" />
                
                <defs>
                  <linearGradient id="gradient-left" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#91B7AC" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#6D889D" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="gradient-right" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6EA2DC" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#6D889D" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="gradient-center" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#91B7AC" />
                    <stop offset="50%" stopColor="#6D889D" />
                    <stop offset="100%" stopColor="#6EA2DC" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Three Column Layout - Enhanced */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
              {/* For Professionals - Left */}
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="glass rounded-xl md:rounded-2xl p-6 md:p-8 border border-primary/30 hover:border-primary/60 transition-all duration-500 relative h-full flex flex-col group-hover:shadow-2xl group-hover:shadow-primary/20">
                  {/* Side accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-primary to-secondary mb-5 md:mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative">
                    <div className="absolute inset-0 rounded-xl bg-white/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <svg className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 group-hover:text-primary transition-colors duration-300">
                    For Professionals
                  </h3>
                  
                  <ul className="space-y-3 flex-1">
                    {professionalBenefits.map((benefit, index) => (
                      <li key={index} className="text-sm md:text-base text-light-gray200 flex items-start group/item">
                        <span className="text-primary mr-3 mt-1 flex-shrink-0 font-bold group-hover/item:scale-125 transition-transform duration-300">✓</span>
                        <span className="group-hover/item:text-light-gray100 transition-colors duration-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-xl"></div>
                </div>
              </div>

              {/* The Connection - Center */}
              <div className="relative group">
                {/* Pulsing glow */}
                <div className="absolute -inset-2 bg-gradient-to-br from-accent/30 via-secondary/30 to-primary/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                
                <div className="glass rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-accent/40 hover:border-accent/70 transition-all duration-500 text-center flex flex-col justify-center relative h-full group-hover:shadow-2xl group-hover:shadow-accent/30">
                  {/* Rotating ring */}
                  <div className="absolute inset-0 rounded-xl border-2 border-accent/20 animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '10s' }}></div>
                  
                  {/* Central Icon */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-accent via-secondary to-primary mx-auto mb-5 md:mb-6 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 relative">
                    {/* Inner glow */}
                    <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon */}
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    
                    {/* Outer rotating ring */}
                    <div className="absolute -inset-2 rounded-full border-2 border-accent/30 animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-accent transition-colors duration-300">
                    The Connection
                  </h3>
                  
                  <p className="text-sm md:text-base text-light-gray200 leading-relaxed group-hover:text-light-gray100 transition-colors duration-300">
                    Both pathways are underpinned by the same framework — ensuring consistency between individual behaviour and organisational practice.
                  </p>

                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-accent/40 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-accent/40 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* For Businesses - Right */}
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="glass rounded-xl md:rounded-2xl p-6 md:p-8 border border-accent/30 hover:border-accent/60 transition-all duration-500 relative h-full flex flex-col group-hover:shadow-2xl group-hover:shadow-accent/20">
                  {/* Side accent bar */}
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-secondary rounded-r-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-accent to-secondary mb-5 md:mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 relative">
                    <div className="absolute inset-0 rounded-xl bg-white/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <svg className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 group-hover:text-accent transition-colors duration-300">
                    For Businesses
                  </h3>
                  
                  <ul className="space-y-3 flex-1">
                    {businessBenefits.map((benefit, index) => (
                      <li key={index} className="text-sm md:text-base text-light-gray200 flex items-start group/item">
                        <span className="text-accent mr-3 mt-1 flex-shrink-0 font-bold group-hover/item:scale-125 transition-transform duration-300">✓</span>
                        <span className="group-hover/item:text-light-gray100 transition-colors duration-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits - Enhanced */}
          <div className="glass rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10 relative overflow-hidden group">
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center group-hover:text-primary transition-colors duration-300">
                Key Benefits
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {connectionBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 md:p-5 rounded-lg bg-dark-medium/50 hover:bg-dark-medium/70 border border-white/5 hover:border-primary/30 transition-all duration-300 group/item relative overflow-hidden"
                  >
                    {/* Animated arrow */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-lg group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300 shadow-lg">
                      →
                    </div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000"></div>
                    
                    <p className="text-sm md:text-base text-light-gray200 group-hover/item:text-light-gray100 transition-colors duration-300 flex-1">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
