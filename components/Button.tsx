import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "ghost" | "whatsapp" | "outline";
  size?: "default" | "sm";
  href?: string;
  showChevron?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "default",
  className,
  href,
  showChevron = false,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center gap-[10px] max-[480px]:gap-2 rounded-pill border border-transparent",
    "font-medium tracking-tight whitespace-nowrap",
    "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
    "relative overflow-hidden active:scale-[0.97]",
    size === "default"
      ? "px-[22px] max-[480px]:px-5 py-[14px] max-[480px]:py-3 text-[15px] max-[480px]:text-[14px]"
      : "px-4 max-[480px]:px-3 py-[10px] max-[480px]:py-2 text-[13.5px] max-[480px]:text-[12px]",
    className
  );

  const variantStyles = {
    primary: cn(
      "bg-gradient-to-b from-white to-[#d9e2f5] text-bg",
      "shadow-btn-primary",
      "hover:shadow-btn-primary-hover hover:-translate-y-[3px] hover:scale-[1.02]",
      // Shine effect
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent",
      "before:translate-x-[-200%] before:skew-x-[-20deg]",
      "before:transition-transform before:duration-700 before:ease-[cubic-bezier(0.16,1,0.3,1)]",
      "hover:before:translate-x-[200%]"
    ),
    ghost: cn(
      "bg-gradient-to-b from-white/10 to-white/4",
      "backdrop-blur-[14px] backdrop-saturate-[160%]",
      "text-ink border-white/16",
      "shadow-[0_1px_0_rgba(255,255,255,.16)_inset]",
      "hover:bg-gradient-to-b hover:from-white/20 hover:to-white/8",
      "hover:-translate-y-[3px] hover:border-white/25",
      "hover:shadow-[0_1px_0_rgba(255,255,255,.25)_inset,0_20px_40px_-15px_rgba(111,168,255,.15)]"
    ),
    whatsapp: cn(
      "bg-whatsapp text-[#00220C]",
      "shadow-btn-whatsapp",
      "hover:-translate-y-[3px] hover:scale-[1.02]",
      "hover:shadow-[0_20px_50px_-10px_rgba(37,211,102,.6),0_0_0_1px_rgba(255,255,255,.3)_inset]"
    ),
    outline: cn(
      "bg-transparent text-ink border-white/20",
      "hover:bg-white/5 hover:border-white/30",
      "hover:-translate-y-[2px]"
    ),
  };

  const content = (
    <>
      {children}
      {showChevron && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cn(baseStyles, variantStyles[variant])}>
        {content}
      </a>
    );
  }

  return (
    <button className={cn(baseStyles, variantStyles[variant])} {...props}>
      {content}
    </button>
  );
}
