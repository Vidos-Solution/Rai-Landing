"use client";

import { useRef, useEffect } from "react";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      const maxDistance = Math.max(rect.width / 2, rect.height / 2);
      const distanceX = mouseX / maxDistance;
      const distanceY = mouseY / maxDistance;

      // Professional 3D tilt effect
      if (card1Ref.current) {
        const rotateY = distanceX * 8; // Reduced for professional look
        const rotateX = -distanceY * 8;
        const translateZ = Math.abs(distanceX + distanceY) * 30;
        
        card1Ref.current.style.transform = `
          perspective(2000px) 
          translate3d(0, 0, ${translateZ}px) 
          rotateY(${rotateY}deg) 
          rotateX(${rotateX}deg)
        `;
      }

      if (card2Ref.current) {
        const rotateY = -distanceX * 8;
        const rotateX = distanceY * 8;
        const translateZ = Math.abs(distanceX + distanceY) * 30;
        
        card2Ref.current.style.transform = `
          perspective(2000px) 
          translate3d(0, 0, ${translateZ}px) 
          rotateY(${rotateY}deg) 
          rotateX(${rotateX}deg)
        `;
      }
    };

    const handleMouseLeave = () => {
      if (card1Ref.current) {
        card1Ref.current.style.transform = 'perspective(2000px) translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)';
      }
      if (card2Ref.current) {
        card2Ref.current.style.transform = 'perspective(2000px) translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)';
      }
    };

    // Scroll-based 3D effects
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const translateZ = Math.sin(scrollProgress * Math.PI) * 80;
        const scale = 0.95 + Math.sin(scrollProgress * Math.PI) * 0.05;

        if (card1Ref.current && !card1Ref.current.matches(':hover')) {
          const currentTransform = card1Ref.current.style.transform;
          if (!currentTransform.includes('rotateY') || currentTransform.includes('rotateY(0deg)')) {
            card1Ref.current.style.transform = `perspective(2000px) translate3d(0, 0, ${translateZ}px) scale(${scale})`;
          }
        }

        if (card2Ref.current && !card2Ref.current.matches(':hover')) {
          const currentTransform = card2Ref.current.style.transform;
          if (!currentTransform.includes('rotateY') || currentTransform.includes('rotateY(0deg)')) {
            card2Ref.current.style.transform = `perspective(2000px) translate3d(0, 0, ${translateZ}px) scale(${scale})`;
          }
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative py-16 md:py-24 overflow-hidden scene-3d"
      style={{ background: 'linear-gradient(to bottom, #1a2835 0%, #0f1b26 50%, #06090e 100%)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Closing
            </h2>
            <p className="text-lg md:text-xl text-light-gray200 max-w-3xl mx-auto leading-relaxed mb-6">
              Responsible AI isn't about slowing innovation.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-white max-w-3xl mx-auto mb-6">
              It's about making it safe to scale.
            </p>
            <p className="text-lg md:text-xl text-light-gray200 max-w-3xl mx-auto leading-relaxed">
              Choose your pathway to learn more, or contact us to discuss your governance context.
            </p>
          </div>

          {/* CTA Cards Container */}
          <div ref={containerRef} className="grid md:grid-cols-2 gap-6 md:gap-8 relative">
            {/* For Professionals CTA - Enhanced 3D */}
            <div
              ref={card1Ref}
              className="relative group cursor-pointer"
              style={{ transformStyle: "preserve-3d", transition: "transform 0.1s ease-out" }}
            >
              {/* 3D Shadow Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 transform translateZ(-50px)"></div>
              
              {/* Main Card */}
              <div className="glass rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 h-full border-2 border-primary/30 hover:border-primary/60 transition-all duration-500 relative overflow-hidden" style={{ transformStyle: "preserve-3d" }}>
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* 3D Depth layers */}
                <div className="absolute inset-0 rounded-xl md:rounded-2xl border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: 'translateZ(20px)' }}></div>
                
                {/* Content */}
                <div className="relative z-10" style={{ transformStyle: "preserve-3d" }}>
                  {/* Icon Container - 3D */}
                  <div className="flex justify-center mb-6 md:mb-8">
                    <div className="relative group/icon" style={{ transformStyle: "preserve-3d" }}>
                      {/* Icon shadow layer */}
                      <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-primary to-secondary blur-xl opacity-50 group-hover/icon:opacity-100 transition-opacity duration-500" style={{ transform: 'translateZ(-30px)' }}></div>
                      
                      {/* Main icon */}
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ transform: 'translateZ(30px)' }}>
                        <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 text-center group-hover:text-primary transition-colors duration-300">
                    For Professionals
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base md:text-lg text-light-gray200 mb-6 md:mb-8 text-center group-hover:text-light-gray100 transition-colors duration-300">
                    Learn how to use AI responsibly in your role.
                  </p>

                  {/* Features List */}
                  <div className="mb-6 md:mb-8">
                    <p className="font-semibold text-white mb-4 text-sm md:text-base">
                      What happens next:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Access Module 1: RAI Level 1 – Awareness",
                        "Begin structured microlearning curriculum",
                        "Track progress and earn certification",
                        "Progress through 5 levels of competency",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start group/item">
                          <span className="text-primary mr-3 mt-1 flex-shrink-0 font-bold group-hover/item:scale-125 transition-transform duration-300">→</span>
                          <span className="text-sm md:text-base text-light-gray200 group-hover/item:text-light-gray100 transition-colors duration-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button - 3D */}
                  <a
                    href="https://course.responsibleai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 md:py-5 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 text-center relative overflow-hidden group/button"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Button 3D effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">👉 For Professionals</span>
                    
                    {/* Button shadow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-lg opacity-0 group-hover/button:opacity-50 transition-opacity duration-300 -z-10" style={{ transform: 'translateZ(-20px)' }}></div>
                  </a>
                </div>

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-xl"></div>
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-xl"></div>
              </div>
            </div>

            {/* For Businesses CTA - Enhanced 3D */}
            <div
              ref={card2Ref}
              className="relative group cursor-pointer"
              style={{ transformStyle: "preserve-3d", transition: "transform 0.1s ease-out" }}
            >
              {/* 3D Shadow Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 transform translateZ(-50px)"></div>
              
              {/* Main Card */}
              <div className="glass rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 h-full border-2 border-accent/30 hover:border-accent/60 transition-all duration-500 relative overflow-hidden" style={{ transformStyle: "preserve-3d" }}>
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* 3D Depth layers */}
                <div className="absolute inset-0 rounded-xl md:rounded-2xl border border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: 'translateZ(20px)' }}></div>
                
                {/* Content */}
                <div className="relative z-10" style={{ transformStyle: "preserve-3d" }}>
                  {/* Icon Container - 3D */}
                  <div className="flex justify-center mb-6 md:mb-8">
                    <div className="relative group/icon" style={{ transformStyle: "preserve-3d" }}>
                      {/* Icon shadow layer */}
                      <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-accent to-secondary blur-xl opacity-50 group-hover/icon:opacity-100 transition-opacity duration-500" style={{ transform: 'translateZ(-30px)' }}></div>
                      
                      {/* Main icon */}
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500" style={{ transform: 'translateZ(30px)' }}>
                        <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 text-center group-hover:text-accent transition-colors duration-300">
                    For Businesses
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base md:text-lg text-light-gray200 mb-6 md:mb-8 text-center group-hover:text-light-gray100 transition-colors duration-300">
                    Build confidence that AI is being used appropriately across your organisation.
                  </p>

                  {/* Features List */}
                  <div className="mb-6 md:mb-8">
                    <p className="font-semibold text-white mb-4 text-sm md:text-base">
                      What happens next:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Explore the Complete Toolkit ($500 one-time)",
                        "Purchase Annual Maintenance ($200/year)",
                        "Access gated customer portal",
                        "Download DRM-protected content",
                        "Customize framework for your organization",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start group/item">
                          <span className="text-accent mr-3 mt-1 flex-shrink-0 font-bold group-hover/item:scale-125 transition-transform duration-300">→</span>
                          <span className="text-sm md:text-base text-light-gray200 group-hover/item:text-light-gray100 transition-colors duration-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button - 3D */}
                  <a
                    href="https://vidos.responsibleai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 md:py-5 px-6 rounded-xl bg-gradient-to-r from-accent to-secondary text-white font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 text-center relative overflow-hidden group/button"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Button 3D effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">👉 For Businesses</span>
                    
                    {/* Button shadow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary blur-lg opacity-0 group-hover/button:opacity-50 transition-opacity duration-300 -z-10" style={{ transform: 'translateZ(-20px)' }}></div>
                  </a>
                </div>

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-xl"></div>
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
