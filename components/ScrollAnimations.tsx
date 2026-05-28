"use client";

import { useEffect } from "react";

export function ScrollAnimations() {
  useEffect(() => {
    // Initialize Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll("[data-animate]");
    animatedElements.forEach((el) => observer.observe(el));

    // Also observe elements with reveal class
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}

// Animated gradient background component - subtle and smooth
export function AnimatedGradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-60">
      {/* Main gradient orbs - more subtle */}
      <div
        className="absolute -top-[300px] -left-[300px] w-[800px] h-[800px] rounded-full blur-[120px] opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(111, 168, 255, 0.4) 0%, transparent 70%)",
          animation: "float 15s ease-in-out infinite, aurora 40s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/4 -right-[200px] w-[600px] h-[600px] rounded-full blur-[100px] opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(182, 155, 255, 0.35) 0%, transparent 70%)",
          animation: "float 18s ease-in-out infinite reverse, aurora 45s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute -bottom-[250px] left-1/3 w-[700px] h-[700px] rounded-full blur-[110px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(66, 228, 122, 0.25) 0%, transparent 70%)",
          animation: "float 20s ease-in-out infinite, aurora 50s ease-in-out infinite",
        }}
      />
    </div>
  );
}

// Animated section wrapper
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale";
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0
}: AnimatedSectionProps) {
  const animationType = animation === "fade-up" ? undefined : animation.replace("fade-", "fade-");

  return (
    <div
      data-animate={animationType}
      data-delay={delay > 0 ? delay : undefined}
      className={className}
    >
      {children}
    </div>
  );
}
