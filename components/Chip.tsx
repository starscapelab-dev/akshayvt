import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ChipProps {
  children: ReactNode;
  variant?: "accent" | "warm" | "green" | "default";
  className?: string;
  href?: string;
}

export function Chip({ children, variant = "default", className, href }: ChipProps) {
  const variantStyles = {
    default: "border-white/10 text-muted hover:text-ink hover:border-white/20",
    accent: "border-accent/30 text-accent bg-accent/10 hover:bg-accent/20",
    warm: "border-warm/30 text-warm bg-warm/10 hover:bg-warm/20",
    green: "border-green/30 text-green bg-green/10 hover:bg-green/20",
  };

  const baseClasses = cn(
    "mono inline-flex items-center gap-1.5",
    "px-[10px] py-[5px] rounded-pill",
    "text-[11px] tracking-wide",
    "border transition-colors duration-200",
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <span className={baseClasses}>
      {children}
    </span>
  );
}
