"use client";

import { useRef } from "react";

export default function SocialProofSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "The RAIGF framework gave us the structure we needed to implement Responsible AI governance across our organization with confidence.",
      author: "Sarah Chen",
      role: "Chief Technology Officer",
      company: "Tech Solutions Inc.",
      gradient: "from-primary to-secondary",
    },
    {
      quote: "As a professional, the structured learning path helped me understand not just what Responsible AI means, but how to apply it in my daily work.",
      author: "Michael Rodriguez",
      role: "Senior Consultant",
      company: "Professional Services",
      gradient: "from-secondary to-accent",
    },
    {
      quote: "The unified system means our team training aligns perfectly with our organizational governance. It's seamless and effective.",
      author: "Emma Thompson",
      role: "Head of Innovation",
      company: "Global Enterprises",
      gradient: "from-accent to-primary",
    },
  ];

  const useCases = [
    {
      title: "Professional Services Firms",
      description: "Law firms, consulting companies, and professional service providers implementing AI tools for client work while maintaining professional standards and accountability.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: "from-primary to-secondary",
    },
    {
      title: "Healthcare Organizations",
      description: "Medical practices and healthcare systems using AI for diagnostics, patient care, and administrative tasks while ensuring ethical use and regulatory compliance.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      gradient: "from-secondary to-accent",
    },
    {
      title: "Financial Services",
      description: "Banks, insurance companies, and financial advisors leveraging AI for risk assessment, fraud detection, and client services with clear governance and audit trails.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-accent to-primary",
    },
    {
      title: "Built Environment",
      description: "Architecture, engineering, and construction firms using AI for design, project management, and analysis while maintaining professional standards and client trust.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: "from-primary via-secondary to-accent",
    },
  ];

  const stats = [
    { 
      number: "500+", 
      label: "Professionals Trained", 
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: "from-primary to-secondary",
      color: "primary",
    },
    { 
      number: "50+", 
      label: "Organizations", 
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: "from-secondary to-accent",
      color: "secondary",
    },
    { 
      number: "95%", 
      label: "Satisfaction Rate", 
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      gradient: "from-accent to-primary",
      color: "accent",
    },
    { 
      number: "100%", 
      label: "Standards Aligned", 
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-primary via-secondary to-accent",
      color: "primary",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="social-proof"
      className="relative py-16 md:py-24 overflow-hidden scene-3d"
      style={{ background: 'linear-gradient(to bottom, #06090e 0%, #0f1b26 50%, #1a2835 100%)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 fade-in-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary font-semibold text-sm">
                Trusted & Proven
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Real Results, Real Impact
            </h2>
            <p className="text-lg md:text-xl text-light-gray200 max-w-3xl mx-auto leading-relaxed">
              See how professionals and organizations are using Vidos RAI to implement Responsible AI practices.
            </p>
          </div>

          {/* Stats Section - Redesigned */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Main card */}
                <div className="glass rounded-xl md:rounded-2xl p-5 md:p-7 border border-white/10 hover:border-primary/50 transition-all duration-500 relative h-full flex flex-col items-center justify-center group-hover:shadow-2xl group-hover:shadow-primary/20">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl md:rounded-2xl`}></div>
                  
                  {/* Icon container */}
                  <div className={`relative mb-4 md:mb-5 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    {/* Rotating ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '3s' }}></div>
                    
                    {/* Icon */}
                    <div className="text-white relative z-10">
                      {stat.icon}
                    </div>
                    
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${stat.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  </div>

                  {/* Number */}
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-xs md:text-sm text-light-gray200 text-center group-hover:text-light-gray100 transition-colors duration-300 relative z-10 px-2">
                    {stat.label}
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`}></div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-xl"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Section */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              What Our Users Say
            </h3>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="glass rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 relative group"
                >
                  {/* Quote icon */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br ${testimonial.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300 flex items-center justify-center`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z" />
                    </svg>
                  </div>

                  {/* Quote */}
                  <p className="text-sm md:text-base text-light-gray200 mb-6 leading-relaxed group-hover:text-light-gray100 transition-colors duration-300 italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-white/10 pt-4">
                    <div className="font-bold text-white text-sm md:text-base">
                      {testimonial.author}
                    </div>
                    <div className="text-xs md:text-sm text-light-gray600">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-primary mt-1">
                      {testimonial.company}
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Use Cases Across Industries
            </h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="glass rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 relative group overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  {/* Side accent bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                  {/* Icon */}
                  <div className={`relative inline-flex w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${useCase.gradient} mb-4 md:mb-5 items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <div className="absolute inset-0 rounded-xl bg-white/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      {useCase.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
                    {useCase.title}
                  </h4>
                  <p className="text-sm md:text-base text-light-gray200 leading-relaxed group-hover:text-light-gray100 transition-colors duration-300">
                    {useCase.description}
                  </p>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

