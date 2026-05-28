"use client";

import { Button } from "./Button";
import { useQuote } from "./QuoteContext";

export function Nav() {
  const { openQuote } = useQuote();

  return (
    <div className="fixed inset-x-0 top-[18px] z-[80] flex justify-center pointer-events-none px-5">
      <nav className="pointer-events-auto inline-flex items-center gap-1 px-3 py-[10px] pr-3 rounded-pill bg-gradient-to-b from-[rgba(20,22,30,.65)] to-[rgba(20,22,30,.45)] backdrop-blur-[22px] backdrop-saturate-[180%] border border-white/10 shadow-nav">
        <a href="/" className="flex items-center gap-[10px] px-2 text-[15px] font-medium tracking-tight">
          <div className="w-7 h-7 rounded-lg bg-[radial-gradient(120%_80%_at_30%_20%,#ffffff_0%,rgba(255,255,255,.55)_30%,transparent_60%),linear-gradient(135deg,#6FA8FF,#B69BFF)] shadow-brand-mark grid place-items-center text-[#0A0E18] mono font-bold text-[13px] tracking-tight">
            A
          </div>
          <span className="max-[680px]:hidden">
            Akshay V T <small className="text-muted font-normal text-xs">· Freelance Web Developer</small>
          </span>
        </a>

        <div className="flex items-center gap-0.5 ml-2">
          <a
            href="/services"
            className="px-[14px] py-2 rounded-pill text-[13.5px] text-ink-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:text-ink max-[900px]:hidden"
          >
            Services
          </a>
          <a
            href="/portfolio"
            className="px-[14px] py-2 rounded-pill text-[13.5px] text-ink-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:text-ink max-[900px]:hidden"
          >
            Portfolio
          </a>
          <a
            href="/locations"
            className="px-[14px] py-2 rounded-pill text-[13.5px] text-ink-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:text-ink max-[900px]:hidden"
          >
            Locations
          </a>
          <a
            href="/blog"
            className="px-[14px] py-2 rounded-pill text-[13.5px] text-ink-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:text-ink max-[900px]:hidden"
          >
            Blog
          </a>
          <a
            href="/about"
            className="px-[14px] py-2 rounded-pill text-[13.5px] text-ink-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:text-ink max-[900px]:hidden"
          >
            About
          </a>

          <span className="inline-flex items-center gap-2 px-3 py-[6px] pl-[10px] rounded-pill bg-whatsapp/10 text-[#BFEFCB] mono text-[11px] tracking-wider border border-whatsapp/25 ml-1 max-[900px]:hidden">
            <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_0_0_rgba(66,228,122,.7)] animate-pulse-dot" />
            Accepting clients
          </span>

          <div className="ml-1.5">
            <Button variant="primary" size="sm" onClick={openQuote}>
              Get Free Quote
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
