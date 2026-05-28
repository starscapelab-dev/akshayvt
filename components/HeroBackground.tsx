"use client";

import { useEffect, useRef, useState } from "react";

interface HeroBackgroundProps {
  imageUrl: string;
  className?: string;
}

export function HeroBackground({ imageUrl, className = "" }: HeroBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const baseScaleRef = useRef(1.5); // Start at 1.5x scale

  // Initial zoom-out animation on load
  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      // Small delay to ensure smooth animation
      setTimeout(() => {
        setIsLoaded(true);
        // Animate base scale from 1.5 to 1.0
        const startTime = Date.now();
        const duration = 1500; // 1.5 seconds
        const startScale = 1.5;
        const endScale = 1.0;

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          baseScaleRef.current = startScale + (endScale - startScale) * eased;

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }, 100);
    };
  }, [imageUrl]);

  // Scroll-based effects
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const scrollY = window.scrollY;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollProgress = Math.min(scrollY / containerHeight, 1);

      // Keep scale at minimum 1.0 to always cover viewport
      // Scale goes from baseScale down to 1.0 (not below)
      const minScale = 1.0;
      const finalScale = Math.max(baseScaleRef.current - scrollProgress * 0.5, minScale);
      // Slight parallax movement
      const translateY = scrollProgress * 30;
      // Fade out as you scroll
      const opacity = 0.5 - scrollProgress * 0.35;

      imageRef.current.style.transform = `scale(${finalScale}) translateY(${translateY}px)`;
      imageRef.current.style.opacity = String(Math.max(opacity, 0.08));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Continuous update during initial animation
    const animationInterval = setInterval(handleScroll, 16);
    setTimeout(() => clearInterval(animationInterval), 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Subtle color accents only - no dark background */}
      <div
        className="absolute inset-0 z-[-2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(111,168,255,.15), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 20%, rgba(182,155,255,.12), transparent 60%)",
        }}
      />

      {/* Fixed background image that sticks to viewport */}
      <div
        ref={imageRef}
        className={`fixed top-0 left-0 w-screen h-screen z-[-1] will-change-transform transition-opacity duration-700 ${
          isLoaded ? "opacity-50" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center 70%",
          backgroundRepeat: "no-repeat",
          transform: "scale(1.5)",
          transformOrigin: "center center",
          maskImage:
            "linear-gradient(180deg, transparent 0%, #000 15%, #000 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent 0%, #000 15%, #000 80%, transparent 100%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className={`absolute inset-0 z-[-1] transition-opacity duration-1000 ${
          isLoaded ? "opacity-60" : "opacity-0"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 80%)",
        }}
      />
    </div>
  );
}
