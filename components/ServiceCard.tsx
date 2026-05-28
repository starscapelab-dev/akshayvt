import { ReactNode } from "react";
import { Glass } from "./Glass";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  featured?: boolean;
  href?: string;
}

export function ServiceCard({
  id,
  title,
  description,
  icon,
  featured = false,
  href = "#contact",
}: ServiceCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "group block transition-all duration-[350ms] ease-out hover:-translate-y-[3px]"
      )}
    >
      <Glass
        hover={false}
        className={cn(
          "px-[22px] pt-6 pb-[22px] min-h-[200px] flex flex-col justify-between",
          "border transition-all duration-[350ms] group-hover:border-white/[.22] group-hover:shadow-glass-hover",
          featured &&
            "bg-[linear-gradient(180deg,rgba(111,168,255,.16),rgba(111,168,255,.04)),linear-gradient(180deg,rgba(255,255,255,.10),rgba(255,255,255,.04))] border-accent/30"
        )}
      >
        <div className="flex items-start justify-between mb-[30px]">
          <div
            className={cn(
              "w-[38px] h-[38px] rounded-xl grid place-items-center text-ink",
              "bg-gradient-to-b from-white/14 to-white/4",
              "border border-white/14 shadow-[0_1px_0_rgba(255,255,255,.18)_inset]",
              featured &&
                "bg-gradient-to-b from-accent to-[#4D7CC9] text-bg border-white/40"
            )}
          >
            <div className="w-[18px] h-[18px]">{icon}</div>
          </div>
          <span className="mono text-[11px] text-muted tracking-wide">{id}</span>
        </div>

        <div>
          <h3 className="text-[17.5px] font-medium tracking-tight m-0 mb-2 balance">{title}</h3>
          <p className="text-[13px] text-ink-2 m-0 leading-[1.5]">{description}</p>
          <span className="mono inline-flex items-center gap-1.5 mt-[18px] text-[11px] tracking-wide text-muted uppercase transition-all duration-200 group-hover:text-accent group-hover:gap-[10px]">
            Read more →
          </span>
        </div>
      </Glass>
    </a>
  );
}
