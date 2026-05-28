"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Wait for fonts and critical resources
    const handleLoad = () => {
      // Small delay to ensure everything is rendered
      setTimeout(() => {
        setIsExiting(true);
        // Remove from DOM after exit animation
        setTimeout(() => setIsLoading(false), 800);
      }, 500);
    };

    // Check if document is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback timeout
      const fallbackTimer = setTimeout(handleLoad, 3000);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-bg transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isExiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(111,168,255,.15), transparent 60%), radial-gradient(ellipse 40% 30% at 80% 30%, rgba(182,155,255,.1), transparent 50%)",
        }}
      />

      {/* Content */}
      <div className={`relative flex flex-col items-center transition-all duration-700 ${isExiting ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}`}>
        {/* Logo mark */}
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-2xl bg-[radial-gradient(120%_80%_at_30%_20%,#ffffff_0%,rgba(255,255,255,.55)_30%,transparent_60%),linear-gradient(135deg,#6FA8FF,#B69BFF)] shadow-[0_0_40px_rgba(111,168,255,.4)] grid place-items-center text-[#0A0E18] mono font-bold text-2xl animate-pulse">
            A
          </div>
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-2xl animate-ping opacity-30 bg-accent" style={{ animationDuration: "1.5s" }} />
        </div>

        {/* Loading text */}
        <div className="flex items-center gap-3">
          <span className="serif italic text-lg text-ink-2">Loading</span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-6 w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r from-accent to-accent-2 rounded-full transition-all duration-[2000ms] ease-out ${
              isExiting ? "w-full" : "w-0"
            }`}
            style={{ width: isExiting ? "100%" : "70%" }}
          />
        </div>
      </div>
    </div>
  );
}
