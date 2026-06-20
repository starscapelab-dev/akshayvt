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
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Auto-animate common elements for subtle fade-in effect
    const autoAnimateSelectors = [
      "section",
      "header",
      "main > div",
      ".container > div",
      "article",
      "[data-animate]",
      ".reveal",
    ];

    // Add slight delay to allow initial render
    setTimeout(() => {
      autoAnimateSelectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
          // Don't re-animate already animated elements or elements with data-no-animate
          if (!el.hasAttribute("data-auto-animated") && !el.hasAttribute("data-no-animate")) {
            el.setAttribute("data-auto-animated", "true");

            // Add staggered animation delay based on position
            const staggerDelay = Math.min(index * 50, 300);
            (el as HTMLElement).style.setProperty("--stagger-delay", `${staggerDelay}ms`);

            observer.observe(el);
          }
        });
      });
    }, 100);

    // Create global mouse gradient background element
    const gradientBg = document.createElement("div");
    gradientBg.className = "mouse-gradient-bg";
    document.body.appendChild(gradientBg);

    let hideTimeout: NodeJS.Timeout;

    // Mouse tracking for gradient hover effects on background
    const handleMouseMove = (e: MouseEvent) => {
      // Update global background gradient position
      gradientBg.style.setProperty("--mouse-x", `${e.clientX}px`);
      gradientBg.style.setProperty("--mouse-y", `${e.clientY}px`);
      gradientBg.classList.add("active");

      // Hide gradient after mouse stops moving
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        gradientBg.classList.remove("active");
      }, 2000);
    };

    const handleMouseLeave = () => {
      gradientBg.classList.remove("active");
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Parallax effect for section background images
    const parallaxElements = document.querySelectorAll("[data-parallax], .parallax-bg");

    const handleParallax = () => {
      parallaxElements.forEach((el) => {
        const element = el as HTMLElement;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if element is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Calculate parallax offset based on element position
          const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
          const parallaxSpeed = parseFloat(element.dataset.parallaxSpeed || "0.3");
          const offset = (scrollProgress - 0.5) * 100 * parallaxSpeed;

          element.style.setProperty("--parallax-y", `${offset}px`);
        }
      });
    };

    // Also apply parallax to elements with background images in sections
    const sectionBgElements = document.querySelectorAll("section [style*='background-image'], section .bg-cover");

    const handleSectionParallax = () => {
      sectionBgElements.forEach((el) => {
        const element = el as HTMLElement;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
          const offset = (scrollProgress - 0.5) * 40; // Subtle parallax

          // Apply parallax via background-position or transform
          if (element.style.backgroundImage) {
            element.style.backgroundPositionY = `calc(50% + ${offset}px)`;
          }
        }
      });
    };

    const combinedScrollHandler = () => {
      handleParallax();
      handleSectionParallax();
    };

    window.addEventListener("scroll", combinedScrollHandler, { passive: true });
    combinedScrollHandler(); // Initial call

    return () => {
      observer.disconnect();
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", combinedScrollHandler);
      clearTimeout(hideTimeout);
      gradientBg.remove();
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
