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
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });

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

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      targetMouseRef.current = { x, y };
    };

    // Smooth interpolation for mouse movement
    let animationId: number;
    const smoothMouse = () => {
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.08;
      animationId = requestAnimationFrame(smoothMouse);
    };
    smoothMouse();

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Scroll-based effects combined with mouse parallax
  useEffect(() => {
    let rafId: number;

    const updateTransform = () => {
      if (!containerRef.current || !imageRef.current) {
        rafId = requestAnimationFrame(updateTransform);
        return;
      }

      const scrollY = window.scrollY;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollProgress = Math.min(scrollY / containerHeight, 1);

      // Keep scale at minimum 1.0 to always cover viewport
      const minScale = 1.0;
      const finalScale = Math.max(baseScaleRef.current - scrollProgress * 0.5, minScale);

      // Enhanced parallax movement - moves slower than scroll for depth
      const parallaxY = scrollY * 0.4;

      // Mouse-based subtle movement for 3D effect
      const mouseX = mouseRef.current.x * 15;
      const mouseY = mouseRef.current.y * 10;

      // Fade out as you scroll
      const opacity = 0.55 - scrollProgress * 0.4;

      imageRef.current.style.transform = `scale(${finalScale}) translate3d(${mouseX}px, ${parallaxY + mouseY}px, 0)`;
      imageRef.current.style.opacity = String(Math.max(opacity, 0.08));

      rafId = requestAnimationFrame(updateTransform);
    };

    rafId = requestAnimationFrame(updateTransform);

    return () => {
      cancelAnimationFrame(rafId);
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
        className={`fixed inset-0 w-full h-full z-[-1] will-change-transform transition-opacity duration-700 overflow-hidden ${
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
