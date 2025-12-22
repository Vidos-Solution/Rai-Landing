"use client";

import { useRef, useEffect, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface LottieAnimationProps {
  className?: string;
}

export default function LottieAnimation({ className = "" }: LottieAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Load the Lottie JSON file
    fetch("/images/MySphere.json")
      .then((response) => response.json())
      .then((data) => {
        setAnimationData(data);
      })
      .catch((error) => {
        console.error("Error loading Lottie animation:", error);
      });
  }, []);

  useEffect(() => {
    // Auto-play the animation when loaded
    if (lottieRef.current && animationData) {
      lottieRef.current.play();
    }
  }, [animationData]);

  if (!animationData) {
    return (
      <div className={`w-full h-full flex items-center justify-center ${className}`}>
        <div className="w-32 h-32 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={true}
        className="w-full h-full"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    </div>
  );
}
