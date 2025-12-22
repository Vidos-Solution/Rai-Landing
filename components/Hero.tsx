"use client";

import { useEffect, useRef } from "react";
import LottieAnimation from "./LottieAnimation";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPos = (clientX / innerWidth - 0.5) * 2;
      const yPos = (clientY / innerHeight - 0.5) * 2;

      if (card1Ref.current) {
        const rotateY = xPos * 15;
        const rotateX = -yPos * 15;
        const translateZ = Math.abs(xPos + yPos) * 30;
        card1Ref.current.style.transform = `perspective(1000px) translate3d(${xPos * 20}px, ${yPos * 20}px, ${translateZ}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
      }

      if (card2Ref.current) {
        const rotateY = -xPos * 15;
        const rotateX = yPos * 15;
        const translateZ = Math.abs(xPos + yPos) * 30;
        card2Ref.current.style.transform = `perspective(1000px) translate3d(${-xPos * 20}px, ${-yPos * 20}px, ${translateZ}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden scene-3d pt-20 md:pt-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <img
          src="/images/background3.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay shadow on top of image */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-overlay/80 via-dark-overlay/70 to-dark-overlay/80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-[10] container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full py-4 md:py-6 pt-20 lg:pt-4">
          {/* Hero Layout: Left Content, Right Lottie Animation */}
          <div className="grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center h-full">
            {/* Left Side - Content */}
            <div className="space-y-3 md:space-y-4 lg:space-y-5 fade-in-up flex flex-col justify-center">
              {/* Hero Text */}
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                  Vidos Responsible AI
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-light-gray200 mb-2 font-light">
                  Practical Responsible AI for professional environments
                </p>
                <p className="text-xs sm:text-sm md:text-base text-light-gray600 max-w-2xl leading-relaxed">
                  Vidos RAI helps professionals and organisations use AI responsibly, confidently, and in line with professional expectations — with clarity on what "good" looks like in practice.
                </p>
              </div>

              {/* 3D Pathway Cards */}
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-5">
            {/* For Professionals Card */}
            <div
              ref={card1Ref}
              className="card-3d group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="glass rounded-lg md:rounded-xl lg:rounded-2xl p-4 md:p-5 lg:p-6 h-full max-h-[280px] md:max-h-[320px] border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden flex flex-col" style={{ transform: "translateZ(0)" }}>
                <div className="mb-3 md:mb-4 flex-1 min-h-0 overflow-hidden">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br from-primary to-secondary mb-2 md:mb-3 flex items-center justify-center glow-primary flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1.5 md:mb-2 flex-shrink-0">For Professionals</h3>
                  <p className="text-xs sm:text-sm md:text-base text-light-gray200 leading-relaxed line-clamp-3">
                    Build confidence and capability through structured learning and recognised certification.
                  </p>
                </div>
                <button className="w-full py-2.5 md:py-3 px-3 md:px-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-xs sm:text-sm md:text-base font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 flex-shrink-0">
                  Start Learning
                </button>
              </div>
            </div>

            {/* For Businesses Card */}
            <div
              ref={card2Ref}
              className="card-3d group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="glass rounded-lg md:rounded-xl lg:rounded-2xl p-4 md:p-5 lg:p-6 h-full max-h-[280px] md:max-h-[320px] border border-accent/30 hover:border-accent/60 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 relative overflow-hidden flex flex-col" style={{ transform: "translateZ(0)" }}>
                <div className="mb-3 md:mb-4 flex-1 min-h-0 overflow-hidden">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br from-accent to-secondary mb-2 md:mb-3 flex items-center justify-center glow-accent flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1.5 md:mb-2 flex-shrink-0">For Businesses</h3>
                  <p className="text-xs sm:text-sm md:text-base text-light-gray200 leading-relaxed line-clamp-3">
                    Embed responsible AI with a practical governance framework, assurance, and ongoing support.
                  </p>
                </div>
                <button className="w-full py-2.5 md:py-3 px-3 md:px-4 rounded-lg bg-gradient-to-r from-accent to-secondary text-white text-xs sm:text-sm md:text-base font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 flex-shrink-0">
                  Explore Toolkit
                </button>
              </div>
            </div>
              </div>
            </div>

            {/* Right Side - Lottie Animation */}
            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] w-full flex items-center justify-center overflow-hidden">
              <div className="w-full h-full max-w-xl mx-auto">
                <LottieAnimation className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-[15]">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-light-gray600 rounded-full flex items-start justify-center p-1.5 md:p-2">
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-light-gray600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

