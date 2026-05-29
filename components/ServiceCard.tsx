import { ReactNode } from "react";
import { Glass } from "./Glass";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  tags?: string;
  featured?: boolean;
  href?: string;
}

export function ServiceCard({
  id,
  title,
  description,
  icon,
  tags,
  featured = false,
  href = "#contact",
}: ServiceCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "group block h-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[4px]"
      )}
    >
      <Glass
        hover={false}
        className={cn(
          "px-[22px] max-[600px]:px-4 pt-6 max-[600px]:pt-5 pb-[22px] max-[600px]:pb-5 h-full flex flex-col",
          "border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-white/[.22] group-hover:shadow-glass-hover",
          featured &&
            "bg-[linear-gradient(180deg,rgba(111,168,255,.16),rgba(111,168,255,.04)),linear-gradient(180deg,rgba(255,255,255,.10),rgba(255,255,255,.04))] border-accent/30"
        )}
      >
        {/* Header: Icon + ID */}
        <div className="flex items-start justify-between mb-5 max-[600px]:mb-4">
          <div
            className={cn(
              "w-[38px] h-[38px] max-[600px]:w-9 max-[600px]:h-9 rounded-xl max-[600px]:rounded-lg grid place-items-center text-ink flex-none",
              "bg-gradient-to-b from-white/14 to-white/4",
              "border border-white/14 shadow-[0_1px_0_rgba(255,255,255,.18)_inset]",
              featured &&
                "bg-gradient-to-b from-accent to-[#4D7CC9] text-bg border-white/40"
            )}
          >
            <div className="w-[18px] h-[18px] max-[600px]:w-4 max-[600px]:h-4">{icon}</div>
          </div>
          <span className="mono text-[11px] max-[600px]:text-[10px] text-muted tracking-wide">{id}</span>
        </div>

        {/* Title */}
        <h3 className="text-[17.5px] max-[600px]:text-[16px] font-medium tracking-tight m-0 mb-2">{title}</h3>

        {/* Description - flex grow to push footer down */}
        <p className="text-[13px] max-[600px]:text-[12px] text-ink-2 m-0 leading-[1.55] flex-1">{description}</p>

        {/* Footer: Tags + Link */}
        <div className="flex items-center justify-between mt-5 max-[600px]:mt-4 pt-4 max-[600px]:pt-3 border-t border-white/[.06]">
          {tags && (
            <span className="mono text-[10px] max-[600px]:text-[9px] text-muted tracking-[.08em] uppercase">{tags}</span>
          )}
          <span className="mono inline-flex items-center gap-1.5 text-[11px] max-[600px]:text-[10px] tracking-wide text-muted uppercase transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-accent group-hover:gap-2 ml-auto">
            View
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-0.5 max-[600px]:w-[10px] max-[600px]:h-[10px]">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Glass>
    </a>
  );
}
