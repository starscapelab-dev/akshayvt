import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { PageHero } from "@/components/PageHero";
import { Glass } from "@/components/Glass";
import { Button } from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "36+ web development services. Custom sites, React, Next.js, e-commerce, SEO & email setup. Fixed pricing, no surprises.",
  openGraph: {
    title: "Web Development Services | Akshay V T",
    description:
      "36+ web development services. Custom sites, e-commerce, SEO & more. Fixed pricing.",
    url: "https://akshayvt.com/services",
  },
  alternates: {
    canonical: "/services",
  },
};

// All 36 services organized by 7 categories
const serviceCategories = [
  {
    id: 1,
    number: "01.",
    title: "Core development",
    subtitle: "The foundation of every modern website.",
    description:
      "Custom builds in React, Next.js and PHP — including full-stack web applications with database, auth, and admin baked in.",
    accentColor: "accent",
    services: [
      {
        id: "001",
        title: "Custom Website Development",
        description: "Tailor-made websites built for speed, SEO and conversion. No templates.",
        tags: "Web · Custom",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 3h18v18H3z" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        ),
      },
      {
        id: "002",
        title: "Next.js Development",
        description: "SEO-first, server-rendered apps with blazing fast performance.",
        tags: "Next.js · SSR",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M4 4l16 16M4 4v16h16" />
          </svg>
        ),
      },
      {
        id: "003",
        title: "React Development",
        description: "Scalable component-driven UIs with React best practices.",
        tags: "React · SPA",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="2.2" />
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          </svg>
        ),
      },
      {
        id: "004",
        title: "Full-Stack Web Apps",
        description: "End-to-end web apps with database, auth and admin — built to scale.",
        tags: "Full-stack",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 7l9 5 9-5" />
            <path d="M3 7v10l9 5 9-5V7" />
            <path d="M12 12v10" />
          </svg>
        ),
      },
      {
        id: "005",
        title: "Custom PHP Development",
        description: "Robust, maintainable PHP — custom-built for your exact requirements.",
        tags: "PHP · Custom",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M9 8l-6 4 6 4M15 8l6 4-6 4M14 4l-4 16" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 2,
    number: "02.",
    title: "E-Commerce & CMS",
    subtitle: "Online stores and content engines that sell.",
    description:
      "From Shopify themes to headless commerce on Next.js — and WordPress when it's the right call. Fast, secure, and built to convert.",
    accentColor: "accent-2",
    services: [
      {
        id: "006",
        title: "E-Commerce Development",
        description: "Sell online with a store that looks great and turns visitors into buyers.",
        tags: "Commerce",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 7h18l-2 12H5L3 7z" />
            <path d="M8 7V5a4 4 0 1 1 8 0v2" />
          </svg>
        ),
      },
      {
        id: "007",
        title: "Shopify Development",
        description: "Custom Shopify themes and apps that sell — without the bloat.",
        tags: "Shopify · Liquid",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M16 4l-5 16-5-16" />
            <path d="M6 4h10l-3 6" />
          </svg>
        ),
      },
      {
        id: "008",
        title: "WordPress Development",
        description: "Clean, fast WordPress builds — no overcomplicated page builders.",
        tags: "WordPress · ACF",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a13.5 13.5 0 0 1 0 18M12 3a13.5 13.5 0 0 0 0 18" />
          </svg>
        ),
      },
      {
        id: "009",
        title: "Headless CMS Development",
        description: "Content managed your way, delivered at the edge — Sanity, Contentful, Strapi.",
        tags: "Headless",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="4" width="18" height="6" rx="1" />
            <rect x="3" y="14" width="18" height="6" rx="1" />
            <path d="M7 7h.01M7 17h.01" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 3,
    number: "03.",
    title: "Specialized services",
    subtitle: "Sites with a specific job to do.",
    description:
      "SaaS marketing sites, landing pages for ads, founder portfolios — each one built around the goal it's there to achieve.",
    accentColor: "warm",
    services: [
      {
        id: "010",
        title: "SaaS Website Development",
        description: "Marketing site that sells your product before users even sign up.",
        tags: "SaaS",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9" />
            <path d="M3 12h6l3-3 3 3 3-3" />
          </svg>
        ),
      },
      {
        id: "011",
        title: "Landing Page Development",
        description: "One page. One goal. Maximum conversions for your ad spend.",
        tags: "Landing",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 9v12" />
          </svg>
        ),
      },
      {
        id: "012",
        title: "Business Website Development",
        description: "A website that works as hard as you do — generating leads 24/7.",
        tags: "Business",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 21V8l9-5 9 5v13" />
            <path d="M9 21v-8h6v8" />
          </svg>
        ),
      },
      {
        id: "013",
        title: "Startup Website Development",
        description: "Launch fast. Look funded. Attract users and investors.",
        tags: "Startup",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
          </svg>
        ),
      },
      {
        id: "014",
        title: "Portfolio Website Development",
        description: "Showcase your work with a site as polished as your projects.",
        tags: "Portfolio",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="9" cy="11" r="2" />
            <path d="M3 17l4-4 5 5 4-4 5 5" />
          </svg>
        ),
      },
      {
        id: "015",
        title: "Personal Brand Website",
        description: "Your online home — built to attract the right clients, employers, audience.",
        tags: "Personal",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 4,
    number: "04.",
    title: "Design & UI",
    subtitle: "Interfaces that feel as good as they look.",
    description:
      "Frontend development that respects design systems, accessibility, and the user's time. Pixel-perfect where it counts, fluid where it should.",
    accentColor: "green",
    services: [
      {
        id: "016",
        title: "UI/UX Frontend Development",
        description: "Pixel-perfect, accessible interfaces that match design intent exactly.",
        tags: "UI · UX",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3v18M3 12h18" />
          </svg>
        ),
      },
      {
        id: "017",
        title: "Conversion-Focused Web Design",
        description: "Design decisions driven by data, psychology and your business goals.",
        tags: "CRO",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 12h6l2-7 4 14 2-7h4" />
          </svg>
        ),
      },
      {
        id: "018",
        title: "Responsive Website Development",
        description: "Flawless on every screen — mobile, tablet, desktop, foldable.",
        tags: "Responsive",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="2" y="6" width="14" height="12" rx="2" />
            <rect x="14" y="9" width="8" height="9" rx="1" />
            <rect x="19" y="11" width="3" height="5" rx="1" />
          </svg>
        ),
      },
      {
        id: "019",
        title: "Web Animation & Interactive UI",
        description: "Motion that adds meaning, not noise. Micro-interactions that delight.",
        tags: "Motion",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M20 4L4 20M8 4l-4 4M20 16l-4 4M14 4l-4 4M20 10l-4 4M4 14l4-4" />
          </svg>
        ),
      },
      {
        id: "020",
        title: "Web Application UI",
        description: "Complex app interfaces made simple, fast and accessible.",
        tags: "App UI",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M3 9h18M7 4v5M11 13h6M11 16h4" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 5,
    number: "05.",
    title: "SEO & performance",
    subtitle: "Sites that load fast and rank high.",
    description:
      "Technical SEO, Core Web Vitals, and the boring infrastructure work that makes Google actually trust your site.",
    accentColor: "accent",
    services: [
      {
        id: "021",
        title: "SEO-Focused Development",
        description: "Your website, built to rank from line one of code.",
        tags: "SEO",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-5-5" />
          </svg>
        ),
      },
      {
        id: "022",
        title: "Technical SEO Optimization",
        description: "Fix the foundation. Let Google find, crawl, and rank your site.",
        tags: "Tech SEO",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 12h4l3-7 4 14 3-7h4" />
          </svg>
        ),
      },
      {
        id: "023",
        title: "Performance Optimization",
        description: "Cut load times. Improve UX. Rank higher. It's all connected.",
        tags: "Perf",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
          </svg>
        ),
      },
      {
        id: "024",
        title: "Speed Optimization & CWV",
        description: "Score 90+ on Lighthouse. Delight users. Rank higher.",
        tags: "Core Web Vitals",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
        ),
      },
      {
        id: "025",
        title: "Website Redesign",
        description: "Modern design. Better performance. Same URL — better rankings.",
        tags: "Redesign",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M21 12a9 9 0 1 1-9-9" />
            <path d="M21 3l-9 9" />
            <path d="M16 3h5v5" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 6,
    number: "06.",
    title: "Integration & maintenance",
    subtitle: "Wired up to everything else you use.",
    description:
      "APIs, AI features, ongoing maintenance, dashboards, admin panels — the connective tissue that turns a website into a tool.",
    accentColor: "accent-2",
    services: [
      {
        id: "026",
        title: "API Integration Services",
        description: "Connect your platform to any third-party API — cleanly, reliably.",
        tags: "APIs",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M8 4l-4 8 4 8M16 4l4 8-4 8M14 4l-4 16" />
          </svg>
        ),
      },
      {
        id: "027",
        title: "AI Integration for Websites",
        description: "Chatbots, recommendations, generation — wired into your product.",
        tags: "AI · LLM",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="6" width="18" height="14" rx="3" />
            <circle cx="9" cy="13" r="1.4" />
            <circle cx="15" cy="13" r="1.4" />
            <path d="M12 3v3" />
          </svg>
        ),
      },
      {
        id: "028",
        title: "Maintenance & Support",
        description: "I keep your site updated, secure, and online — long after launch.",
        tags: "Retainer",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M14 7l3 3-8 8-3 .5.5-3 7.5-8.5z" />
            <path d="M5 21h14" />
          </svg>
        ),
      },
      {
        id: "029",
        title: "Custom Dashboard Development",
        description: "Data-rich, beautifully designed dashboards for your product or business.",
        tags: "Dashboards",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="3" width="8" height="8" rx="1" />
            <rect x="13" y="3" width="8" height="5" rx="1" />
            <rect x="13" y="10" width="8" height="11" rx="1" />
            <rect x="3" y="13" width="8" height="8" rx="1" />
          </svg>
        ),
      },
      {
        id: "030",
        title: "Admin Panel Development",
        description: "Intuitive admin interfaces that make managing your platform effortless.",
        tags: "Admin",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M3 8h18M7 12h10M7 16h6" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 7,
    number: "07.",
    title: "Email & troubleshooting",
    subtitle: "Get your email working and websites fixed.",
    description:
      "Email setup, configuration issues, cPanel problems, website errors — I fix the frustrating technical issues so you can focus on running your business.",
    accentColor: "warm",
    services: [
      {
        id: "031",
        title: "Business Email Setup",
        description: "Professional email addresses on your domain — configured correctly the first time.",
        tags: "Email · Setup",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 6l-10 7L2 6" />
          </svg>
        ),
      },
      {
        id: "032",
        title: "Email Troubleshooting",
        description: "Can't send? Can't receive? Emails going to spam? I'll fix it.",
        tags: "Email · Fix",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
        ),
      },
      {
        id: "033",
        title: "Zoho Mail Setup",
        description: "Free or paid Zoho Mail — properly configured with your domain.",
        tags: "Zoho · Email",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M4 4h16v16H4z" />
            <path d="M4 12h16M12 4v16" />
          </svg>
        ),
      },
      {
        id: "034",
        title: "Google Workspace Setup",
        description: "Gmail for your business — professional email with Google's reliability.",
        tags: "Gmail · Workspace",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M2 8l10 6 10-6" />
          </svg>
        ),
      },
      {
        id: "035",
        title: "cPanel Email Troubleshooting",
        description: "cPanel email issues fixed — DNS, delivery, spam filters, quotas.",
        tags: "cPanel · Email",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 9h6M9 13h6M9 17h4" />
          </svg>
        ),
      },
      {
        id: "036",
        title: "Website Troubleshooting",
        description: "Site down? Errors? Slow loading? I diagnose and fix web issues fast.",
        tags: "Website · Fix",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        ),
      },
    ],
  },
];

const accentColors: Record<string, { dot: string; text: string }> = {
  accent: { dot: "bg-accent shadow-[0_0_12px_#6FA8FF]", text: "text-accent" },
  "accent-2": { dot: "bg-accent-2 shadow-[0_0_12px_#B69BFF]", text: "text-accent-2" },
  warm: { dot: "bg-warm shadow-[0_0_12px_#F4C58C]", text: "text-warm" },
  green: { dot: "bg-green shadow-[0_0_12px_#42E47A]", text: "text-green" },
};

export default function ServicesPage() {
  return (
    <>
      <Nav />

      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="36+ services · pick what fits"
        title={
          <>
            Web development services — <em className="italic text-ink-2">tailored to your business.</em>
          </>
        }
        lede="From custom websites to complex web applications, email setup to troubleshooting — every project is built with precision, speed and SEO in mind. Browse by category, or just tell me your problem and I'll point you to the right one."
        primaryCta={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCta={{ label: "Browse all services", href: "#core" }}
        stats={[
          { value: "6+", label: "Years experience" },
          { value: "50+", label: "Clients shipped" },
          { value: "36+", label: "Services offered" },
          { value: "<24h", label: "Avg reply time" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Service Categories */}
      <main id="core" className="container py-20">
        {serviceCategories.map((category, index) => {
          const colors = accentColors[category.accentColor] || accentColors.accent;
          return (
            <section
              key={category.id}
              className={`py-16 border-t border-white/[.06] ${index === 0 ? "pt-0 border-t-0" : ""}`}
            >
              {/* Category Header */}
              <div className="grid grid-cols-[280px_1fr] gap-12 mb-8 items-start max-[820px]:grid-cols-1 max-[820px]:gap-3">
                <div className={`serif italic text-[56px] leading-none tracking-tight ${colors.text} opacity-85`}>
                  {category.number}
                </div>
                <div>
                  <span className="eyebrow mb-2 block">
                    <span className={`inline-block w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                    &nbsp;&nbsp;{category.title}
                  </span>
                  <h2 className="serif font-normal text-[clamp(32px,4vw,48px)] leading-[1.0] tracking-[-.02em] m-0 mb-3">
                    {category.subtitle.split(/(\s+)/).map((word, i) => {
                      // Italicize the last few words
                      const words = category.subtitle.split(" ");
                      const lastTwo = words.slice(-2).join(" ");
                      if (category.subtitle.endsWith(word.trim()) && lastTwo.includes(word.trim())) {
                        return (
                          <em key={i} className={`italic ${colors.text}`}>
                            {word}
                          </em>
                        );
                      }
                      return word;
                    })}
                  </h2>
                  <p className="text-ink-2 text-[15px] max-w-[56ch] leading-[1.55] m-0">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-3 gap-[14px] max-[980px]:grid-cols-2 max-[560px]:grid-cols-1">
                {category.services.map((service) => (
                  <a
                    key={service.id}
                    href={`/services/${service.id}`}
                    className="group block"
                  >
                    <Glass className="px-[22px] py-6 flex flex-col gap-[14px] min-h-[180px] transition-all duration-[350ms] hover:-translate-y-[3px] hover:border-white/[.22] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,.4)]">
                      <div className="flex items-center justify-between gap-3">
                        <div className="w-[38px] h-[38px] rounded-xl bg-gradient-to-b from-white/14 to-white/4 border border-white/14 shadow-[0_1px_0_rgba(255,255,255,.18)_inset] grid place-items-center text-ink transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(111,168,255,.2)]">
                          <div className="w-[18px] h-[18px]">{service.icon}</div>
                        </div>
                        <span className="mono text-[11px] text-muted tracking-wide">{service.id}</span>
                      </div>
                      <h3 className="text-[17.5px] font-medium tracking-tight m-0 balance group-hover:text-ink transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[13px] text-ink-2 m-0 leading-[1.5]">{service.description}</p>
                      <div className="mt-auto pt-[14px] border-t border-dashed border-white/10 flex items-center justify-between mono text-[11px] text-muted uppercase tracking-wide">
                        <span>{service.tags}</span>
                        <span className="inline-flex items-center gap-1.5 text-ink-2 transition-all duration-200 group-hover:text-accent group-hover:gap-[10px]">
                          View
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="transition-transform duration-200 group-hover:translate-x-1"
                          >
                            <path d="M5 12h14M13 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </Glass>
                  </a>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden">
        {/* Background photo */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            background:
              "linear-gradient(180deg, var(--bg) 0%, rgba(6,7,10,.55) 25%, rgba(6,7,10,.6) 75%, var(--bg) 100%), url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container relative z-[1]">
          <Glass className="p-12 text-center max-w-[800px] mx-auto">
            <div className="eyebrow mb-4 inline-block">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
              &nbsp;&nbsp;Not sure which one?
            </div>
            <h2 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0 mb-5">
              Tell me your problem, <em className="italic text-ink-2">I'll tell you the service.</em>
            </h2>
            <p className="text-[clamp(17px,1.6vw,21px)] leading-[1.5] text-ink-2 mb-8">
              Free consultation. No commitment. WhatsApp me a few sentences and I'll point you at the right service — even if it's not one of mine.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Button variant="primary" href="/contact" showChevron>
                Get Free Quote
              </Button>
              <Button variant="whatsapp" href="https://wa.me/919746220043">
                Chat on WhatsApp
              </Button>
            </div>
          </Glass>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
