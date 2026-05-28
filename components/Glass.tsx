import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "flat" | "warm";
  as?: keyof JSX.IntrinsicElements;
  hover?: boolean;
}

export function Glass({
  children,
  className,
  variant = "default",
  as: Component = "div",
  hover = true
}: GlassProps) {
  return (
    <Component
      className={cn(
        // Base glass styles
        "relative isolate overflow-hidden rounded-[22px]",
        "glass-bg glass-border glass-blur",
        "shadow-glass",
        // Smooth hover effects with gradient
        hover && [
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "hover:-translate-y-[5px]",
          "hover:shadow-glass-hover",
          "hover:border-white/25",
          // Gradient overlay on hover
          "before:transition-opacity before:duration-500 before:ease-[cubic-bezier(0.16,1,0.3,1)]",
          "hover:before:opacity-100",
        ],
        // Pseudo-elements via CSS - gradient shine
        "before:absolute before:inset-0 before:rounded-[inherit] before:pointer-events-none before:z-[2]",
        hover
          ? "before:bg-[linear-gradient(135deg,rgba(111,168,255,.12)_0%,transparent_40%,transparent_60%,rgba(182,155,255,.08)_100%)] before:opacity-0"
          : "before:bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(255,255,255,.20),transparent_60%),linear-gradient(180deg,rgba(255,255,255,.04),transparent_30%)]",
        // After pseudo (corner glow)
        variant === "default" && "after:absolute after:right-[-30%] after:bottom-[-50%] after:w-[80%] after:h-[120%]",
        variant === "default" && "after:bg-[radial-gradient(closest-side,rgba(111,168,255,.18),transparent_70%)]",
        variant === "default" && "after:blur-[20px] after:pointer-events-none after:z-0",
        variant === "default" && hover && "after:transition-all after:duration-500 hover:after:bg-[radial-gradient(closest-side,rgba(111,168,255,.30),transparent_70%)]",
        variant === "warm" && "after:absolute after:right-[-30%] after:bottom-[-50%] after:w-[80%] after:h-[120%]",
        variant === "warm" && "after:bg-[radial-gradient(closest-side,rgba(244,197,140,.18),transparent_70%)]",
        variant === "warm" && "after:blur-[20px] after:pointer-events-none after:z-0",
        variant === "warm" && hover && "after:transition-all after:duration-500 hover:after:bg-[radial-gradient(closest-side,rgba(244,197,140,.30),transparent_70%)]",
        // Child elements need z-index
        "[&>*]:relative [&>*]:z-[3]",
        className
      )}
    >
      {children}
    </Component>
  );
}
