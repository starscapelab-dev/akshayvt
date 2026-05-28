import { ReactNode } from "react";
import { Button } from "./Button";

interface PageHeroProps {
  breadcrumbs: { label: string; href?: string }[];
  eyebrow: string;
  title: ReactNode;
  lede: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats?: { value: string; label: string }[];
  backgroundImage?: string;
}

export function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  lede,
  primaryCta,
  secondaryCta,
  stats,
  backgroundImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=80",
}: PageHeroProps) {
  return (
    <header className="relative min-h-[720px] pt-[168px] pb-20 overflow-hidden isolate">
      {/* Background layers */}
      <div
        className="absolute inset-0 z-[-2]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(111,168,255,.18), transparent 60%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(182,155,255,.12), transparent 60%), linear-gradient(180deg, #06070A 0%, #0A0F1C 50%, #06070A 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-[-1] bg-cover opacity-[.42]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center 40%",
          maskImage:
            "linear-gradient(180deg, transparent 0%, #000 20%, #000 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent 0%, #000 20%, #000 75%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-[-1] opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, #000 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, #000 30%, transparent 75%)",
        }}
      />

      <div className="container">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mono text-[11px] uppercase tracking-[.14em] text-muted mb-8">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {crumb.href ? (
                <a href={crumb.href} className="hover:text-ink transition-colors">
                  {crumb.label}
                </a>
              ) : (
                <span className="text-ink-2">{crumb.label}</span>
              )}
              {i < breadcrumbs.length - 1 && <span className="text-muted-2">/</span>}
            </span>
          ))}
        </nav>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 px-4 py-[10px] rounded-pill bg-gradient-to-b from-white/10 to-white/4 backdrop-blur-[12px] border border-white/10 mono text-[11.5px] tracking-[.12em] text-ink-2 uppercase mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
          {eyebrow}
        </div>

        {/* Title */}
        <h1 className="serif font-normal text-[clamp(46px,6.8vw,96px)] leading-[.98] tracking-[-.022em] mb-6 max-w-[20ch] balance">
          {title}
        </h1>

        {/* Lede */}
        <p className="text-[clamp(17px,1.6vw,21px)] leading-[1.5] text-ink-2 max-w-[62ch] mb-9">
          {lede}
        </p>

        {/* CTAs */}
        {(primaryCta || secondaryCta) && (
          <div className="flex gap-3 flex-wrap mb-14">
            {primaryCta && (
              <Button variant="primary" href={primaryCta.href} showChevron>
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button variant="ghost" href={secondaryCta.href}>
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="glass-bg glass-border glass-blur shadow-glass grid grid-cols-4 p-[22px] gap-5 rounded-DEFAULT max-[800px]:grid-cols-2">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="serif text-[36px] leading-none tracking-tight">{stat.value}</div>
                <div className="mono text-[11px] text-muted uppercase tracking-wider mt-1.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
