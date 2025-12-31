"use client";

import { useState } from "react";

export default function TwoPathwaysSection() {
  const [professionalsExpanded, setProfessionalsExpanded] = useState(false);
  const [businessesExpanded, setBusinessesExpanded] = useState(false);

  const professionalsFeatures = [
    { text: "Governance literacy", icon: "📖" },
    { text: "Professional judgement", icon: "⚖️" },
    { text: "Stewardship-aligned CPD", icon: "🎓" },
  ];

  const businessesFeatures = [
    { text: "Defined roles and controls", icon: "👥" },
    { text: "Policy and procedure implementation", icon: "📋" },
    { text: "Evidence, review, and oversight", icon: "🔍" },
  ];

  return (
    <section
      id="two-pathways"
      className="relative py-8 md:py-12 overflow-hidden scene-3d"
      style={{ background: 'linear-gradient(to bottom, #06090e 0%, #0f1b26 50%, #1a2835 100%)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12 fade-in-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary font-semibold text-sm">
                Choose Your Path
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Two Clear Pathways
            </h2>
            <p className="text-lg md:text-xl text-light-gray200 max-w-3xl mx-auto">
              Choose the route that fits your role
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* For Professionals - Enhanced Card */}
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
              
              <div className="glass rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-white/10 hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
                {/* Rotating Ring Effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 animate-spin transition-opacity duration-500" style={{ animationDuration: '10s' }}></div>
                
                {/* Badge Label */}
                <div className="absolute -top-3 -right-3 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary border-2 border-dark-medium shadow-lg z-20">
                  <span className="text-white text-xs font-bold">PROFESSIONAL</span>
                </div>

                <div className="mb-6 relative z-10">
                  {/* Enhanced Icon Container */}
                  <div className="relative mb-6">
                    {/* Rotating Ring Around Icon */}
                    <div className="absolute inset-0 w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full border-2 border-transparent bg-gradient-to-r from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 animate-spin transition-opacity duration-500" style={{ animationDuration: '4s' }}></div>
                    
                    {/* Icon Background */}
                    <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                      {/* Inner Glow */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-secondary blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                      
                      {/* Icon */}
                      <svg className="w-12 h-12 md:w-14 md:h-14 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      
                      {/* Corner Accents */}
                      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/40 rounded-tr-lg"></div>
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/40 rounded-bl-lg"></div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                    For Professionals
                  </h3>
                  
                  {/* Description */}
                  <p className="text-lg text-light-gray200 mb-6 group-hover:text-white transition-colors duration-300">
                    Build responsible AI capability and stewardship.
                  </p>

                  {/* Enhanced Features List */}
                  <div className="space-y-3 mb-6">
                    {professionalsFeatures.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-4 p-3 rounded-lg bg-dark-medium/30 border border-white/5 hover:border-primary/30 hover:bg-dark-medium/50 transition-all duration-300 group/item"
                      >
                        <div className="text-2xl group-hover/item:scale-110 transition-transform duration-300">{feature.icon}</div>
                        <span className="text-light-gray200 group-hover/item:text-white transition-colors duration-300 flex-1">{feature.text}</span>
                        <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced CTA Button */}
                  <a
                    href="https://course.responsibleai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block w-full px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all transform hover:scale-105 text-center overflow-hidden group/btn"
                  >
                    {/* Button Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/btn:opacity-100 blur-xl transition-opacity duration-500"></div>
                    
                    {/* Button Content */}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>👉 Explore Learning & Stewardship</span>
                      <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </a>
                </div>

                {/* Expand/Collapse Button - Enhanced */}
                <button
                  onClick={() => setProfessionalsExpanded(!professionalsExpanded)}
                  className="relative w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 group/btn z-10 overflow-hidden"
                >
                  <span className="text-primary font-medium group-hover/btn:text-white transition-colors duration-300 relative z-10">
                    {professionalsExpanded ? "Hide" : "Show"} who this is for
                  </span>
                  <svg
                    className={`w-5 h-5 text-primary transition-all duration-300 relative z-10 ${professionalsExpanded ? "rotate-180" : ""} group-hover/btn:translate-y-0.5`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </button>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    professionalsExpanded ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="glass rounded-lg p-5 border-2 border-white/10 mt-6 bg-dark-medium/50">
                    <div className="pt-2 text-light-gray200 leading-relaxed space-y-4">
                      <p className="text-white">
                        This pathway is designed for individuals who use AI as part of their professional judgement and want to operate responsibly and confidently.
                      </p>
                      <div>
                        <p className="font-semibold text-white mb-3">It supports:</p>
                        <ul className="space-y-2 ml-4">
                          {["professionals and specialists", "managers and team leads", "advisors operating in risk-bearing environments"].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-primary text-lg font-bold mt-0.5">•</span>
                              <span className="text-light-gray200">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                        <p className="text-white font-medium">
                          The focus is on capability, accountability, and informed judgement — not tool proficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-2 right-2 w-10 h-10 border-t-2 border-r-2 border-primary/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-2 left-2 w-10 h-10 border-b-2 border-l-2 border-secondary/20 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* For Businesses - Enhanced Card */}
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
              
              <div className="glass rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-white/10 hover:border-accent/50 transition-all duration-500 relative overflow-hidden">
                {/* Rotating Ring Effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 animate-spin transition-opacity duration-500" style={{ animationDuration: '10s' }}></div>
                
                {/* Badge Label */}
                <div className="absolute -top-3 -right-3 px-4 py-1 rounded-full bg-gradient-to-r from-accent to-secondary border-2 border-dark-medium shadow-lg z-20">
                  <span className="text-white text-xs font-bold">BUSINESS</span>
                </div>

                <div className="mb-6 relative z-10">
                  {/* Enhanced Icon Container */}
                  <div className="relative mb-6">
                    {/* Rotating Ring Around Icon */}
                    <div className="absolute inset-0 w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full border-2 border-transparent bg-gradient-to-r from-accent/30 to-secondary/30 opacity-0 group-hover:opacity-100 animate-spin transition-opacity duration-500" style={{ animationDuration: '4s' }}></div>
                    
                    {/* Icon Background */}
                    <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                      {/* Inner Glow */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent to-secondary blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                      
                      {/* Icon */}
                      <svg className="w-12 h-12 md:w-14 md:h-14 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      
                      {/* Corner Accents */}
                      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/40 rounded-tr-lg"></div>
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/40 rounded-bl-lg"></div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                    For Businesses
                  </h3>
                  
                  {/* Description */}
                  <p className="text-lg text-light-gray200 mb-6 group-hover:text-white transition-colors duration-300">
                    Implement AI governance, oversight, and assurance.
                  </p>

                  {/* Enhanced Features List */}
                  <div className="space-y-3 mb-6">
                    {businessesFeatures.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-4 p-3 rounded-lg bg-dark-medium/30 border border-white/5 hover:border-accent/30 hover:bg-dark-medium/50 transition-all duration-300 group/item"
                      >
                        <div className="text-2xl group-hover/item:scale-110 transition-transform duration-300">{feature.icon}</div>
                        <span className="text-light-gray200 group-hover/item:text-white transition-colors duration-300 flex-1">{feature.text}</span>
                        <div className="w-2 h-2 rounded-full bg-accent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced CTA Button */}
                  <a
                    href="https://vidos.responsibleai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block w-full px-6 py-4 rounded-xl bg-gradient-to-r from-accent to-secondary text-white font-semibold hover:shadow-2xl hover:shadow-accent/50 transition-all transform hover:scale-105 text-center overflow-hidden group/btn"
                  >
                    {/* Button Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover/btn:opacity-100 blur-xl transition-opacity duration-500"></div>
                    
                    {/* Button Content */}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>👉 Explore Governance Implementation</span>
                      <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </a>
                </div>

                {/* Expand/Collapse Button - Enhanced */}
                <button
                  onClick={() => setBusinessesExpanded(!businessesExpanded)}
                  className="relative w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-accent/10 to-secondary/10 border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 group/btn z-10 overflow-hidden"
                >
                  <span className="text-accent font-medium group-hover/btn:text-white transition-colors duration-300 relative z-10">
                    {businessesExpanded ? "Hide" : "Show"} what this enables
                  </span>
                  <svg
                    className={`w-5 h-5 text-accent transition-all duration-300 relative z-10 ${businessesExpanded ? "rotate-180" : ""} group-hover/btn:translate-y-0.5`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </button>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    businessesExpanded ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="glass rounded-lg p-5 border-2 border-white/10 mt-6 bg-dark-medium/50">
                    <div className="pt-2 text-light-gray200 leading-relaxed space-y-4">
                      <p className="text-white">
                        This pathway is designed for organisations that need to govern AI use consistently and defensibly.
                      </p>
                      <div>
                        <p className="font-semibold text-white mb-3">It enables:</p>
                        <ul className="space-y-2 ml-4">
                          {["organisation-wide governance alignment", "clear ownership of AI-assisted decisions", "evidence-based responses to audit, client, or regulator queries"].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-accent text-lg font-bold mt-0.5">•</span>
                              <span className="text-light-gray200">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                        <p className="text-white">
                          Delivery is through the Vidos Responsible AI Governance Framework and an implementation platform designed to make governance usable, not bureaucratic.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-2 right-2 w-10 h-10 border-t-2 border-r-2 border-accent/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-2 left-2 w-10 h-10 border-b-2 border-l-2 border-secondary/20 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
