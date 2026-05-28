"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "./Button";
import { useQuote } from "./QuoteContext";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export function Nav() {
  const { openQuote } = useQuote();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const hoverCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearMegaMenuTimer = () => {
    if (hoverCloseTimer.current) {
      clearTimeout(hoverCloseTimer.current);
      hoverCloseTimer.current = null;
    }
  };

  const scheduleMegaMenuClose = () => {
    clearMegaMenuTimer();
    hoverCloseTimer.current = setTimeout(() => {
      setActiveMegaMenu(null);
      hoverCloseTimer.current = null;
    }, 180);
  };

  // Fade in animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Track scroll for sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    return () => {
      clearMegaMenuTimer();
    };
  }, []);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/locations", label: "Locations" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ];

  const desktopNavLinks = navLinks.filter((link) => !["/services", "/locations"].includes(link.href));
  const serviceMenuItems = services.slice(0, 6);
  const locationMenuItems = locations.slice(0, 8);

  return (
    <>
      <div
        className={`fixed inset-x-0 top-[18px] z-[80] flex justify-center pointer-events-none  transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
        }`}
      >
        <div className="w-full mx-auto  max-w-6xl ">
          <nav className={`pointer-events-auto justify-between inline-flex items-center gap-1 px-3 py-[10px] pr-3 rounded-full backdrop-blur-[22px] backdrop-saturate-[180%] border shadow-nav transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] w-full max-w-none max-[900px]:w-full max-[900px]:max-w-[calc(100%-32px)] max-[900px]:justify-between max-[900px]:rounded-2xl ${
            isScrolled
              ? "bg-[rgba(12,14,22,.92)] border-white/15 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
              : "bg-gradient-to-b from-[rgba(20,22,30,.75)] to-[rgba(20,22,30,.55)] border-white/10"
          }`}>
          {/* Logo */}
          <a href="/" className="flex items-center gap-[10px] px-2 text-[15px] font-medium tracking-tight">
            <div className="w-7 h-7 rounded-lg bg-[radial-gradient(120%_80%_at_30%_20%,#ffffff_0%,rgba(255,255,255,.55)_30%,transparent_60%),linear-gradient(135deg,#6FA8FF,#B69BFF)] shadow-brand-mark grid place-items-center text-[#0A0E18] mono font-bold text-[13px] tracking-tight flex-none">
              A
            </div>
            <span className="max-[680px]:hidden">
              Akshay V T <small className="text-muted font-mono text-xs">· Freelance Web Developer</small>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-0.5 ml-2 max-[900px]:hidden">
            <div
              className="relative"
              onMouseEnter={() => {
                clearMegaMenuTimer();
                setActiveMegaMenu("services");
              }}
              onMouseLeave={() => scheduleMegaMenuClose()}
            >
              <button
                type="button"
                onClick={() => setActiveMegaMenu((current) => (current === "services" ? null : "services"))}
                aria-expanded={activeMegaMenu === "services"}
                className="px-[14px] py-2 rounded-pill text-[13.5px] text-ink-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:text-ink"
              >
                Services
              </button>

              <div
                onMouseEnter={() => clearMegaMenuTimer()}
                onMouseLeave={() => scheduleMegaMenuClose()}
                className={`absolute left-0 top-full mt-3 w-[760px] rounded-[28px] bg-[rgba(11,13,21,0.96)] backdrop-blur-[26px] backdrop-saturate-[180%] shadow-[0_24px_80px_-28px_rgba(0,0,0,0.8)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  activeMegaMenu === "services"
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="relative overflow-hidden rounded-[28px] p-4 before:absolute before:inset-0 before:rounded-[inherit] before:bg-[radial-gradient(circle_at_top_left,rgba(111,168,255,0.24),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(182,155,255,0.18),transparent_30%)] before:pointer-events-none">
                  <div className="relative z-[1] grid grid-cols-[1.25fr_0.75fr] gap-4">
                    <div className="rounded-3xl bg-white/5 p-3">
                      <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
                        <div>
                          <p className="mono text-[10px] uppercase tracking-[0.24em] text-warm">Popular services</p>
                          <p className="mt-1 text-xs text-muted">From strategy to launch, built for growth.</p>
                        </div>
                        <a href="/services" className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-ink hover:bg-white/15">
                          View all
                        </a>
                      </div>

                      <div className="grid gap-2">
                        {serviceMenuItems.map((service) => (
                          <a
                            key={service.id}
                            href={service.href}
                            className="group rounded-2xl bg-[rgba(255,255,255,0.04)] p-3 transition-all duration-300 hover:-translate-y-[1px] hover:bg-white/10"
                          >
                            <div className="flex items-start gap-3">
                              <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-[15px] text-ink">
                                {service.icon}
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center justify-between gap-3">
                                  <p className="text-[13.5px] font-medium text-ink">{service.title}</p>
                                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted">{service.id}</span>
                                </div>
                                <p className="mt-1 text-xs text-muted">{service.description}</p>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 rounded-3xl bg-[rgba(255,255,255,0.10)] p-3">
                      <div className="rounded-2xl bg-gradient-to-br from-[#6FA8FF]/20 to-[#B69BFF]/20 p-3">
                        <p className="mono text-[10px] uppercase tracking-[0.24em] text-warm">Launch ready</p>
                        <p className="mt-2 text-[15px] font-medium text-ink">High-performing websites for ambitious founders.</p>
                        <p className="mt-1 text-xs text-muted">Fast build timelines, direct communication, and SEO-first execution.</p>
                      </div>

                      <div className="rounded-2xl bg-[rgba(255,255,255,0.08)] p-3">
                        <p className="text-xs font-medium text-ink">What clients get</p>
                        <ul className="mt-2 space-y-2 text-xs text-muted">
                          <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-warm" /> Conversion-first layouts</li>
                          <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-warm" /> Clean, fast code</li>
                          <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-warm" /> Clear pricing, no surprises</li>
                        </ul>
                      </div>

                      <a href="/contact" className="mt-auto rounded-full bg-ink px-3 py-2 text-center text-[11px] font-semibold text-bg">
                        Book a discovery call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative"
              onMouseEnter={() => {
                clearMegaMenuTimer();
                setActiveMegaMenu("locations");
              }}
              onMouseLeave={() => scheduleMegaMenuClose()}
            >
              <button
                type="button"
                onClick={() => setActiveMegaMenu((current) => (current === "locations" ? null : "locations"))}
                aria-expanded={activeMegaMenu === "locations"}
                className="px-[14px] py-2 rounded-pill text-[13.5px] text-ink-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:text-ink"
              >
                Locations
              </button>

              <div
                onMouseEnter={() => clearMegaMenuTimer()}
                onMouseLeave={() => scheduleMegaMenuClose()}
                className={`absolute left-0 top-full mt-3 w-[720px] rounded-[28px] bg-[rgba(11,13,21,0.96)] backdrop-blur-[26px] backdrop-saturate-[180%] shadow-[0_24px_80px_-28px_rgba(0,0,0,0.8)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  activeMegaMenu === "locations"
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="relative overflow-hidden rounded-[28px] p-4 before:absolute before:inset-0 before:rounded-[inherit] before:bg-[radial-gradient(circle_at_top_left,rgba(244,197,140,0.22),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(111,168,255,0.16),transparent_30%)] before:pointer-events-none">
                  <div className="relative z-[1] grid grid-cols-[0.8fr_0.4fr] gap-4">
                    <div className="rounded-3xl bg-white/5 p-3">
                      <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
                        <div>
                          <p className="mono text-[10px] uppercase tracking-[0.24em] text-warm">Global service regions</p>
                          <p className="mt-1 text-xs text-muted">Built for founders across business hubs and fast-moving markets.</p>
                        </div>
                      
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {locationMenuItems.map((location) => (
                          <a
                            key={location.slug}
                            href={`/locations/${location.slug}`}
                            className="rounded-2xl bg-[rgba(255,255,255,0.04)] p-3 transition-all duration-300 hover:-translate-y-[1px] hover:bg-white/10"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <p className="text-[13.5px] font-medium text-ink">{location.city}</p>
                                <p className="mt-1 text-[11px] text-muted">{location.country}</p>
                              </div>
                              <span className="text-base">{location.flag}</span>
                            </div>
                           
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 rounded-3xl bg-[rgba(255,255,255,0.10)] p-3">
                      <div className="rounded-2xl bg-[rgba(255,255,255,0.10)] p-3">
                        <p className="mono text-[10px] uppercase tracking-[0.24em] text-warm">Popular hubs</p>
                        <div className="mt-2 grid gap-2">
                          {locationMenuItems.slice(0, 4).map((location) => (
                            <div key={location.slug} className="flex items-center justify-between rounded-xl bg-white/5 px-2.5 py-2 text-xs text-muted">
                              <span className="font-medium text-ink">{location.city}</span>
                              <span>{location.flag}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-2xl bg-gradient-to-br from-[#B69BFF]/18 to-[#6FA8FF]/20 p-3">
                        <p className="text-[13px] font-medium text-ink">Local presence, global standards</p>
                        <p className="mt-1 text-xs text-muted">Remote-friendly delivery with region-specific strategy, timezone alignment, and multilingual communication.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {desktopNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-[14px] py-2 rounded-pill text-[13.5px] text-ink-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:text-ink"
              >
                {link.label}
              </a>
            ))}

            <span className="inline-flex items-center gap-2 px-3 py-[6px] pl-[10px] rounded-pill bg-whatsapp/10 text-[#BFEFCB] mono text-[11px] tracking-wider border border-whatsapp/25 ml-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_0_0_rgba(66,228,122,.7)] animate-pulse-dot" />
              Accepting clients
            </span>

            <div className="ml-1.5">
              <Button variant="primary" size="sm" onClick={openQuote}>
                Get Free Quote
              </Button>
            </div>
          </div>

          {/* Mobile: Quote Button + Hamburger */}
          <div className="hidden max-[900px]:flex items-center gap-2">
            <Button variant="primary" size="sm" onClick={openQuote} className="max-[480px]:!px-3 max-[480px]:!py-2 max-[480px]:!text-[12px]">
              <span className="max-[380px]:hidden">Get Quote</span>
              <span className="hidden max-[380px]:inline">Quote</span>
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-white/8 border border-white/15 grid place-items-center text-ink transition-all duration-300 hover:bg-white/15"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute left-0 top-[6px] w-5 h-[2px] bg-current rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? "rotate-45 top-[9px]" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[12px] w-5 h-[2px] bg-current rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? "-rotate-45 top-[9px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[75] bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-[80px] left-4 right-4 z-[76] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-gradient-to-b from-[rgba(20,22,30,.95)] to-[rgba(15,18,28,.98)] backdrop-blur-[22px] border border-white/10 rounded-2xl p-5 shadow-2xl">
          {/* Navigation Links */}
          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl text-[16px] text-ink-2 transition-all duration-300 hover:bg-white/10 hover:text-ink"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-4" />

          {/* Status + Contact */}
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-[6px] pl-[10px] rounded-pill bg-whatsapp/10 text-[#BFEFCB] mono text-[11px] tracking-wider border border-whatsapp/25">
              <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_0_0_rgba(66,228,122,.7)] animate-pulse-dot" />
              Accepting clients
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-2">
            <Button variant="primary" onClick={() => { openQuote(); setMobileMenuOpen(false); }} className="w-full justify-center">
              Get Free Quote
            </Button>
            <a
              href="https://wa.me/919746220043"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-pill bg-whatsapp text-[#00220C] text-[15px] font-medium transition-all duration-300 hover:-translate-y-px"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.5 3.5A10.6 10.6 0 0 0 3.4 16.2L2 22l6-1.4a10.6 10.6 0 0 0 12.5-17.1zM12 20a8 8 0 0 1-4.2-1.2l-.3-.2-3.6.8.8-3.5-.2-.3A8 8 0 1 1 12 20z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
