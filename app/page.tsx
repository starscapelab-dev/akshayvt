import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/Button";
import { Glass } from "@/components/Glass";
import { Chip } from "@/components/Chip";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HeroBackground } from "@/components/HeroBackground";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { faqs } from "@/data/faq";
import type { Metadata } from "next";

// Technology logos for the carousel
const techLogos = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Vercel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

export const metadata: Metadata = {
  title: "Akshay V T | Freelance Web Developer | React & Next.js Expert",
  description:
    "Freelance web developer with 6+ years experience. React, Next.js, e-commerce & SEO. Serving Dubai, Kerala, Sydney & worldwide.",
  openGraph: {
    title: "Akshay V T | Freelance Web Developer | React & Next.js Expert",
    description:
      "Freelance web developer with 6+ years experience. React, Next.js, e-commerce & SEO.",
    url: "https://akshayvt.com",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* Hero Section */}
      <header
        id="top"
        className="relative min-h-[920px] max-[900px]:min-h-[auto] pt-[140px] max-[900px]:pt-[120px] pb-24 max-[600px]:pb-16 overflow-hidden isolate"
      >
        {/* Sticky parallax background with scroll-based scale effect */}
        <HeroBackground imageUrl="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2400&q=80" />

        <div className="container">
          <div className="relative grid grid-cols-[1.15fr_.85fr] gap-10 max-[900px]:gap-8 items-end max-[1000px]:grid-cols-1">
            {/* Left column */}
            <div>
              {/* Eyebrow pill */}
              <div className="inline-flex items-center gap-2 max-[480px]:gap-1.5 px-4 max-[480px]:px-3 py-[10px] max-[480px]:py-2 rounded-pill bg-gradient-to-b from-white/10 to-white/4 backdrop-blur-[12px] border border-white/10 mono text-[11.5px] max-[480px]:text-[10px] tracking-[.12em] text-ink-2 uppercase mb-7 max-[600px]:mb-5 flex-wrap max-[480px]:flex-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_12px_#42E47A] flex-shrink-0" />
                <span className="max-[380px]:hidden">Now booking · April / May</span>
                <span className="hidden max-[380px]:inline">Booking now</span>
                <span className="opacity-45 max-[480px]:hidden">|</span>
                <span className="max-[480px]:hidden">UAE · India · Worldwide</span>
              </div>

              {/* Hero headline */}
              <h1 className="serif font-normal text-[clamp(36px,7.8vw,108px)] leading-[.98] tracking-[-.022em] mb-[26px] max-[600px]:mb-5 balance animate-fadeInUp">
                Your website,
                <br />
                <em className="italic bg-gradient-to-r from-[#B69BFF] via-[#6FA8FF] to-[#F4C58C] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                  built right.
                </em>
                <br />
                <span className="relative whitespace-nowrap after:absolute after:left-0 after:right-0 after:bottom-[.08em] after:h-[.06em] after:bg-current after:opacity-25 after:rounded-pill">
                  Fixed&nbsp;fast.
                </span>
              </h1>

              {/* Lede */}
              <p className="text-[clamp(15px,1.6vw,21px)] leading-[1.5] text-ink-2 max-w-[56ch] mb-9 max-[600px]:mb-6 pretty">
                I'm a freelance web developer with <b className="text-ink">6+ years</b> shipping
                React &amp; Next.js sites for small businesses, founders, and Gulf NRIs. Talk to
                the person building your site — not an account manager.
              </p>

              {/* CTAs */}
              <div className="flex gap-3 flex-wrap mb-12 max-[600px]:mb-8">
                <Button variant="primary" href="#contact" showChevron>
                  Get a Free Quote
                </Button>
                <Button variant="ghost" href="#projects">
                  See My Work
                </Button>
              </div>

              {/* Trust stats */}
              <Glass className="grid grid-cols-4 max-[600px]:grid-cols-2 gap-4 max-[480px]:gap-3 p-5 max-[480px]:p-4 px-[26px] max-[480px]:px-4">
                <div className="flex items-center gap-[10px] max-[480px]:gap-2">
                  <span className="serif text-[30px] max-[480px]:text-[24px] leading-none tracking-tight">6+</span>
                  <span className="text-xs max-[480px]:text-[10px] text-muted leading-[1.3] max-w-[14ch]">
                    Years building
                    <br />
                    for the web
                  </span>
                </div>
                <div className="flex items-center gap-[10px] max-[480px]:gap-2">
                  <span className="serif text-[30px] max-[480px]:text-[24px] leading-none tracking-tight">50+</span>
                  <span className="text-xs max-[480px]:text-[10px] text-muted leading-[1.3] max-w-[14ch]">
                    Happy clients
                    <br />
                    shipped
                  </span>
                </div>
                <div className="flex items-center gap-[10px] max-[480px]:gap-2">
                  <span className="serif text-[30px] max-[480px]:text-[24px] leading-none tracking-tight">4</span>
                  <span className="text-xs max-[480px]:text-[10px] text-muted leading-[1.3] max-w-[14ch]">
                    Countries
                    <br />
                    served
                  </span>
                </div>
                <div className="flex items-center gap-[10px] max-[480px]:gap-2">
                  <span className="serif text-[30px] max-[480px]:text-[24px] leading-none tracking-tight">&lt;24h</span>
                  <span className="text-xs max-[480px]:text-[10px] text-muted leading-[1.3] max-w-[14ch]">
                    Average reply
                    <br />
                    time
                  </span>
                </div>
              </Glass>
            </div>

            {/* Right column - Card cluster */}
            <div className="relative grid gap-[18px] max-[1000px]:gap-4 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1">
              {/* Profile card */}
              <Glass className="p-[22px] max-[480px]:p-4">
                <div className="flex items-center gap-[14px] max-[480px]:gap-3 flex-wrap max-[380px]:flex-nowrap">
                  <div className="relative w-[54px] h-[54px] max-[480px]:w-11 max-[480px]:h-11 rounded-full bg-[radial-gradient(120%_100%_at_30%_20%,#ffffff_0%,transparent_30%),linear-gradient(135deg,#2B3046_0%,#0F121C_100%)] border border-white/18 flex-none overflow-hidden">
                    <div className="absolute inset-0 grid place-items-center serif text-[22px] max-[480px]:text-[18px] italic text-white/85">
                      AV
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="m-0 text-[17px] max-[480px]:text-[15px] font-medium tracking-tight">Akshay V T</h3>
                    <div className="text-[12.5px] max-[480px]:text-[11px] text-muted mt-[2px]">
                      Freelance Developer · Kerala, India 🇮🇳
                    </div>
                  </div>
                  <div className="ml-auto text-right max-[380px]:hidden">
                    <div className="mono text-[11px] max-[480px]:text-[10px] text-muted tracking-wide">RATING</div>
                    <div className="serif text-[22px] max-[480px]:text-[18px]">
                      4.9 <span className="text-warm text-sm max-[480px]:text-xs">★★★★★</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-[6px] max-[480px]:gap-1.5 mt-[18px] max-[480px]:mt-3">
                  <Chip>React</Chip>
                  <Chip>Next.js</Chip>
                  <Chip>TypeScript</Chip>
                  <Chip>Tailwind</Chip>
                  <Chip>Node</Chip>
                  <Chip>Shopify</Chip>
                  <Chip>SEO</Chip>
                  <Chip>AI APIs</Chip>
                </div>

                <div className="mt-5 max-[480px]:mt-3 pt-[18px] max-[480px]:pt-3 border-t border-dashed border-white/10 flex items-center justify-between gap-[10px]">
                  <span className="text-xs max-[480px]:text-[10px] text-muted">Last reply</span>
                  <span className="text-[13px] max-[480px]:text-[11px] text-[#BFEFCB] mono">● online · 4 min ago</span>
                </div>
              </Glass>

              {/* Code snippet card */}
              <Glass className="p-[18px] max-[480px]:p-3 px-5 max-[480px]:px-3 mono text-xs max-[480px]:text-[10px] text-ink-2 leading-[1.7] max-[600px]:hidden">
                <div className="flex gap-[14px]">
                  <span className="text-muted-2">01</span>
                  <span>
                    <span className="text-[#B69BFF]">export const</span>{" "}
                    <span className="text-accent">project</span> = {"{"}
                  </span>
                </div>
                <div className="flex gap-[14px]">
                  <span className="text-muted-2">02</span>
                  <span>
                    &nbsp;&nbsp;client: <span className="text-warm">"You"</span>,
                  </span>
                </div>
                <div className="flex gap-[14px]">
                  <span className="text-muted-2">03</span>
                  <span>
                    &nbsp;&nbsp;stack:&nbsp;{" "}
                    <span className="text-warm">["Next.js", "Tailwind"]</span>,
                  </span>
                </div>
                <div className="flex gap-[14px]">
                  <span className="text-muted-2">04</span>
                  <span>
                    &nbsp;&nbsp;delivery: <span className="text-warm">"5–10 days"</span>,
                  </span>
                </div>
                <div className="flex gap-[14px]">
                  <span className="text-muted-2">05</span>
                  <span>
                    &nbsp;&nbsp;support:&nbsp; <span className="text-accent">always</span>,{" "}
                    <span className="text-muted italic">// I don't disappear</span>
                  </span>
                </div>
                <div className="flex gap-[14px]">
                  <span className="text-muted-2">06</span>
                  <span>{"};"};</span>
                </div>
              </Glass>
            </div>
          </div>

          {/* City marquee */}
          <div className="mt-20 max-[900px]:mt-12 max-[600px]:mt-8 relative">
            <div className="text-center mono text-[11px] max-[480px]:text-[10px] tracking-[.18em] uppercase text-muted mb-6 max-[600px]:mb-4">
              Worked with founders &amp; teams across
            </div>
            <div
              className="flex gap-[60px] max-[600px]:gap-10 whitespace-nowrap overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
              }}
            >
              <div className="flex gap-[60px] max-[600px]:gap-10 flex-none animate-scroll">
                {[
                  "Dubai",
                  "Abu Dhabi",
                  "Doha",
                  "Sydney",
                  "Kochi",
                  "Bangalore",
                  "Sharjah",
                  "London",
                  "Dubai",
                  "Abu Dhabi",
                  "Doha",
                  "Sydney",
                  "Kochi",
                  "Bangalore",
                  "Sharjah",
                  "London",
                ].map((city, i) => (
                  <span
                    key={i}
                    className="serif italic text-[30px] max-[600px]:text-[22px] text-ink-2 opacity-70 after:content-['·'] after:ml-[60px] max-[600px]:after:ml-10 after:text-accent after:not-italic"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section
        id="services"
        className="relative pt-[clamp(72px,8.5vw,128px)] pb-[clamp(72px,8.5vw,128px)] bg-bg-2 border-t border-b border-white/[.06]"
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(40% 50% at 10% 20%, rgba(111,168,255,.10), transparent 60%), radial-gradient(40% 60% at 90% 80%, rgba(244,197,140,.07), transparent 60%)",
          }}
        />

        <div className="container relative z-[1]">
          {/* Section header */}
          <div className="flex gap-12 max-[900px]:gap-6 items-end justify-between mb-12 max-[900px]:mb-8 max-[900px]:flex-col max-[900px]:items-start" data-animate>
            <div className="max-w-[64ch]">
              <div className="eyebrow mb-[18px] max-[600px]:mb-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
                &nbsp;&nbsp;What I do
              </div>
              <h2 className="serif font-normal text-[clamp(28px,5.2vw,70px)] leading-[1.0] tracking-[-.02em] m-0 balance">
                Twelve ways I can <em className="italic text-ink-2">help your website</em> earn
                its keep.
              </h2>
            </div>
            <div className="text-sm max-[600px]:text-[13px] text-ink-2 max-w-[38ch] max-[900px]:max-w-none">
              From custom builds to a one-evening fix, every project is handled personally — no
              agency layers, no template farms. Pick what fits, or describe your problem and I'll
              tell you which one you actually need.
            </div>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-4 gap-[14px] max-[1100px]:grid-cols-3 max-[780px]:grid-cols-2 max-[480px]:grid-cols-1 stagger-children">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-9">
            <Button variant="ghost" href="#contact" showChevron>
              Explore all 30 services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section id="about" className="relative pt-[clamp(72px,8.5vw,128px)] pb-[clamp(72px,8.5vw,128px)] overflow-hidden">
        {/* Background photo */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,7,10,.85) 0%, rgba(6,7,10,.7) 50%, rgba(6,7,10,.92) 100%), url('https://images.unsplash.com/photo-1546484959-f9a381d1330d?auto=format&fit=crop&w=2400&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container relative z-[1]">
          {/* Section header */}
          <div className="flex gap-12 max-[900px]:gap-6 items-end justify-between mb-12 max-[900px]:mb-8 max-[900px]:flex-col max-[900px]:items-start" data-animate>
            <div className="max-w-[64ch]">
              <div className="eyebrow mb-[18px] max-[600px]:mb-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-warm shadow-[0_0_12px_#F4C58C]" />
                &nbsp;&nbsp;Why me
              </div>
              <h2 className="serif font-normal text-[clamp(28px,5.2vw,70px)] leading-[1.0] tracking-[-.02em] m-0 balance">
                Why clients choose me <em className="italic text-ink-2">over an agency.</em>
              </h2>
            </div>
            <div className="text-sm max-[600px]:text-[13px] text-ink-2 max-w-[38ch] max-[900px]:max-w-none">
              Agencies charge for layers of management. I am the developer, the project manager,
              and the person who answers your WhatsApp on Sunday evening. Less overhead, more
              accountability.
            </div>
          </div>

          {/* Why cards grid */}
          <div className="grid grid-cols-3 gap-[14px] max-[960px]:grid-cols-2 max-[600px]:grid-cols-1 max-[600px]:gap-3 stagger-children">
            {[
              {
                num: "i.",
                title: "You talk to me directly",
                description:
                  "No middlemen, no PMs reading back what they don't understand. I handle your project personally — start to finish.",
              },
              {
                num: "ii.",
                title: "Senior-level quality",
                description:
                  "Six years of shipping production sites for businesses that depend on them. Every deliverable is production-grade — not \"good enough\".",
              },
              {
                num: "iii.",
                title: "Fast turnaround",
                description:
                  "Simple sites in 3–7 days. Larger builds on a clear schedule. I respect deadlines because your launch matters.",
              },
              {
                num: "iv.",
                title: "Global client experience",
                description:
                  "Built sites for clients in Qatar, Australia, UAE, India and beyond. I understand what works for Gulf NRIs, Kerala SMBs and global startups.",
              },
              {
                num: "v.",
                title: "Ongoing support",
                description:
                  "I don't vanish after launch. Need a copy change, plugin update, urgent fix? I'm here — and I respond within hours, not weeks.",
              },
              {
                num: "vi.",
                title: "SEO baked in",
                description:
                  "Every site I build is optimised for Google from day one — semantic markup, Core Web Vitals, schema, the lot. Not bolted on later.",
              },
            ].map((card, i) => (
              <Glass key={i} variant="warm" className="p-7 max-[600px]:p-5 px-[26px] max-[600px]:px-5 min-h-[240px] max-[600px]:min-h-0">
                <span className="serif italic text-[34px] max-[600px]:text-[28px] text-warm block mb-[18px] max-[600px]:mb-3 leading-none">
                  {card.num}
                </span>
                <h3 className="text-xl max-[600px]:text-lg font-medium tracking-tight m-0 mb-[10px] max-[600px]:mb-2">{card.title}</h3>
                <p className="m-0 text-[14.5px] max-[600px]:text-[13px] text-ink-2 leading-[1.55]">{card.description}</p>
              </Glass>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative pt-[clamp(72px,8.5vw,128px)] pb-[clamp(72px,8.5vw,128px)] bg-bg-2 border-t border-white/[.06]">
        {/* Background gradient */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 100%, rgba(182,155,255,.10), transparent 70%), radial-gradient(40% 40% at 0% 0%, rgba(111,168,255,.06), transparent 70%)",
          }}
        />

        <div className="container relative z-[1]">
          {/* Section header */}
          <div className="flex gap-12 max-[900px]:gap-6 items-end justify-between mb-12 max-[900px]:mb-8 max-[900px]:flex-col max-[900px]:items-start" data-animate>
            <div className="max-w-[64ch]">
              <div className="eyebrow mb-[18px] max-[600px]:mb-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
                &nbsp;&nbsp;How it works
              </div>
              <h2 className="serif font-normal text-[clamp(28px,5.2vw,70px)] leading-[1.0] tracking-[-.02em] m-0 balance">
                From "I need a site" to <em className="italic text-ink-2">"it's live"</em> in three
                honest steps.
              </h2>
            </div>
            <div className="text-sm max-[600px]:text-[13px] text-ink-2 max-w-[38ch] max-[900px]:max-w-none">
              No discovery decks. No 30-page proposals. We talk, I scope it, and I build. The whole
              thing is calibrated for small teams that need to move now.
            </div>
          </div>

          {/* Process steps */}
          <div className="grid grid-cols-3 gap-[14px] max-[600px]:gap-3 relative max-[900px]:grid-cols-1 stagger-children">
            {[
              {
                num: "STEP 01",
                title: (
                  <>
                    Tell me about
                    <br className="max-[600px]:hidden" />
                    <span className="max-[600px]:hidden"> </span>your project
                  </>
                ),
                description:
                  "WhatsApp, email, or the form. Free consultation — no commitment, no upsell. Even if it's just \"my site is broken, can you look?\"",
                time: "~ 15 min call",
              },
              {
                num: "STEP 02",
                title: (
                  <>
                    Get a clear,
                    <br className="max-[600px]:hidden" />
                    <span className="max-[600px]:hidden"> </span>honest quote
                  </>
                ),
                description:
                  "A scoped proposal with a fixed price, a timeline, and exactly what you'll get. No surprise add-ons. No agency fluff.",
                time: "~ 24–48 hours",
              },
              {
                num: "STEP 03",
                title: (
                  <>
                    I build it.
                    <br className="max-[600px]:hidden" />
                    <span className="max-[600px]:hidden"> </span>You launch.
                  </>
                ),
                description:
                  "Fast, SEO-optimised, and yours to keep. I stay available after delivery for fixes, tweaks, and the inevitable \"can we add one more thing?\"",
                time: "5 days – 4 weeks",
              },
            ].map((step, i) => (
              <Glass key={i} className="p-7 max-[600px]:p-5 min-h-[280px] max-[600px]:min-h-0 flex flex-col">
                <div className="mono text-[11px] max-[600px]:text-[10px] text-accent tracking-wide mb-5 max-[600px]:mb-3">{step.num}</div>
                <h3 className="serif text-[28px] max-[600px]:text-[22px] leading-[1.1] tracking-tight m-0 mb-4 max-[600px]:mb-3">
                  {step.title}
                </h3>
                <p className="m-0 mb-auto text-[14.5px] max-[600px]:text-[13px] text-ink-2 leading-[1.55]">
                  {step.description}
                </p>
                <div className="mt-5 max-[600px]:mt-4 pt-5 max-[600px]:pt-4 border-t border-dashed border-white/10 flex items-center justify-between gap-3">
                  <span className="text-xs max-[600px]:text-[11px] text-muted">Time</span>
                  <strong className="text-[13px] max-[600px]:text-[12px] text-ink">{step.time}</strong>
                </div>
              </Glass>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative pt-[clamp(72px,8.5vw,128px)] pb-[clamp(72px,8.5vw,128px)] bg-bg">
        <div className="container relative z-[1]">
          {/* Section header */}
          <div className="flex gap-12 max-[900px]:gap-6 items-end justify-between mb-12 max-[900px]:mb-8 max-[900px]:flex-col max-[900px]:items-start" data-animate>
            <div className="max-w-[64ch]">
              <div className="eyebrow mb-[18px] max-[600px]:mb-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
                &nbsp;&nbsp;Selected work
              </div>
              <h2 className="serif font-normal text-[clamp(28px,5.2vw,70px)] leading-[1.0] tracking-[-.02em] m-0 balance">
                A few recent builds <em className="italic text-ink-2">worth showing.</em>
              </h2>
            </div>
            <div className="text-sm max-[600px]:text-[13px] text-ink-2 max-w-[38ch] max-[900px]:max-w-none">
              Each project below shipped on schedule, passed Core Web Vitals, and continues to
              rank. Live URLs, full case studies and tech stacks on request.
            </div>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-12 max-[900px]:flex max-[900px]:flex-col gap-[14px] max-[600px]:gap-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="relative rounded-lg max-[600px]:rounded-xl overflow-hidden isolate min-h-[460px] max-[900px]:min-h-[380px] max-[600px]:min-h-[320px] flex flex-col justify-end p-7 max-[600px]:p-5 border border-white/[.08] group"
                style={{
                  gridColumn: `span ${project.span}`,
                }}
              >
                {/* Photo background */}
                <div
                  className="absolute inset-0 z-[-2] bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                {/* Dark overlay */}
                <div
                  className="absolute inset-0 z-[-1]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(6,7,10,.10) 0%, rgba(6,7,10,.55) 50%, rgba(6,7,10,.92) 100%)",
                  }}
                />

                {/* Top tags */}
                <div className="absolute top-6 max-[600px]:top-4 left-6 max-[600px]:left-4 right-6 max-[600px]:right-4 flex items-center justify-between gap-3 max-[480px]:gap-2">
                  <span className="inline-flex items-center gap-2 max-[480px]:gap-1.5 px-3 max-[480px]:px-2 py-[7px] max-[480px]:py-1.5 rounded-pill bg-gradient-to-b from-white/18 to-white/6 backdrop-blur-[12px] backdrop-saturate-[160%] border border-white/18 mono text-[11px] max-[480px]:text-[10px] tracking-wider text-ink">
                    <span
                      className={`inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        project.tagColor === "accent"
                          ? "bg-accent shadow-[0_0_8px_#6FA8FF]"
                          : project.tagColor === "accent-2"
                          ? "bg-accent-2 shadow-[0_0_8px_#B69BFF]"
                          : project.tagColor === "warm"
                          ? "bg-warm shadow-[0_0_8px_#F4C58C]"
                          : "bg-green shadow-[0_0_8px_#42E47A]"
                      }`}
                    />
                    {project.tags}
                  </span>
                  <span className="mono text-[11px] max-[480px]:text-[10px] text-white/70 tracking-wider max-[380px]:hidden">
                    {project.location}
                  </span>
                </div>

                {/* Content */}
                <h3 className="serif font-normal text-[clamp(22px,3.2vw,42px)] leading-[1.06] tracking-tight m-0 mb-3 max-[600px]:mb-2 balance">
                  {project.title} — <em className="italic opacity-78">{project.subtitle}</em>
                </h3>
                <p className="m-0 mb-[22px] max-[600px]:mb-4 text-[14.5px] max-[600px]:text-[13px] text-ink-2 max-w-[50ch]">
                  {project.description}
                </p>

                {/* Outcomes */}
                <div className="flex gap-[18px] max-[600px]:gap-3 flex-wrap px-[18px] max-[600px]:px-3 py-[14px] max-[600px]:py-3 rounded-2xl max-[600px]:rounded-xl bg-gradient-to-b from-black/32 to-black/12 backdrop-blur-[10px] backdrop-saturate-[160%] border border-white/10">
                  {project.outcomes.map((outcome, i) => (
                    <div key={i} className="flex flex-col gap-[2px]">
                      <span className="mono text-[10px] max-[480px]:text-[9px] text-muted uppercase tracking-[.12em]">
                        {outcome.label}
                      </span>
                      <span
                        className={`serif text-2xl max-[600px]:text-xl tracking-tight ${
                          outcome.mono ? "mono text-sm max-[600px]:text-xs" : ""
                        }`}
                      >
                        {outcome.value}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="ghost" href="#contact">
              Want results like these? Let's talk →
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative pt-[clamp(72px,8.5vw,128px)] pb-[clamp(72px,8.5vw,128px)] overflow-hidden">
        {/* Background photo */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,7,10,.78), rgba(6,7,10,.78)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container relative z-[1]">
          {/* Section header */}
          <div className="flex gap-12 max-[900px]:gap-6 items-end justify-between mb-12 max-[900px]:mb-8 max-[900px]:flex-col max-[900px]:items-start" data-animate>
            <div className="max-w-[64ch]">
              <div className="eyebrow mb-[18px] max-[600px]:mb-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-warm shadow-[0_0_12px_#F4C58C]" />
                &nbsp;&nbsp;What clients say
              </div>
              <h2 className="serif font-normal text-[clamp(28px,5.2vw,70px)] leading-[1.0] tracking-[-.02em] m-0 balance">
                Trusted by founders <em className="italic text-ink-2">on three continents.</em>
              </h2>
            </div>
            <div className="text-sm max-[600px]:text-[13px] text-ink-2 max-w-[38ch] max-[900px]:max-w-none">
              Most of my work comes through referrals from clients I've shipped for over the last
              few years. Here are a few of them — names and businesses real on request.
            </div>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* Technology Logo Carousel */}
      <section className="py-16 max-[600px]:py-10 overflow-hidden bg-bg-2">
        <div className="container mb-10 max-[600px]:mb-6">
          <div className="text-center">
            <div className="eyebrow mb-[18px] max-[600px]:mb-3 justify-center">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
              &nbsp;&nbsp;Trusted Technologies
            </div>
            <h2 className="serif font-normal text-[clamp(24px,4vw,48px)] leading-[1.1] tracking-[-.02em] m-0">
              Built with <em className="italic text-ink-2">industry-standard tools</em>
            </h2>
          </div>
        </div>
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-2 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-2 to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex animate-scroll">
            {/* First set */}
            <div className="flex gap-12 max-[600px]:gap-6 px-6 max-[600px]:px-3">
              {techLogos.map((logo, i) => (
                <div key={i} className="flex flex-col items-center gap-3 max-[600px]:gap-2 min-w-[90px] max-[600px]:min-w-[70px]">
                  <div className="w-16 h-16 max-[600px]:w-12 max-[600px]:h-12 rounded-xl bg-white/5 border border-white/10 p-3 max-[600px]:p-2 flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="w-10 h-10 max-[600px]:w-7 max-[600px]:h-7 object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <span className="mono text-[11px] max-[600px]:text-[9px] text-muted tracking-wide">{logo.name}</span>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex gap-12 max-[600px]:gap-6 px-6 max-[600px]:px-3">
              {techLogos.map((logo, i) => (
                <div key={`dup-${i}`} className="flex flex-col items-center gap-3 max-[600px]:gap-2 min-w-[90px] max-[600px]:min-w-[70px]">
                  <div className="w-16 h-16 max-[600px]:w-12 max-[600px]:h-12 rounded-xl bg-white/5 border border-white/10 p-3 max-[600px]:p-2 flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="w-10 h-10 max-[600px]:w-7 max-[600px]:h-7 object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <span className="mono text-[11px] max-[600px]:text-[9px] text-muted tracking-wide">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative pt-[clamp(72px,8.5vw,128px)] pb-[clamp(72px,8.5vw,128px)] bg-bg-2">
        {/* Background gradient */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(50% 60% at 80% 30%, rgba(111,168,255,.08), transparent 70%), radial-gradient(40% 50% at 20% 80%, rgba(182,155,255,.06), transparent 70%)",
          }}
        />

        <div className="container relative z-[1]">
          <div className="grid grid-cols-[.9fr_1.1fr] gap-16 max-[900px]:gap-10 max-[900px]:grid-cols-1">
            {/* Left side */}
            <div>
              <div className="eyebrow mb-[18px] max-[600px]:mb-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
                &nbsp;&nbsp;Common questions
              </div>
              <h2 className="serif font-normal text-[clamp(28px,5.2vw,70px)] leading-[1.0] tracking-[-.02em] m-0 mb-5 max-[600px]:mb-4 balance">
                Questions you're probably <em className="italic text-ink-2">about to ask.</em>
              </h2>
              <p className="text-[14.5px] max-[600px]:text-[13px] text-ink-2 leading-[1.55] mb-[18px] max-[600px]:mb-4">
                If yours isn't here, send it on WhatsApp. I read every message myself — not a
                chatbot, not a VA.
              </p>
              <Button variant="ghost" href="#contact">
                Ask a question →
              </Button>
            </div>

            {/* FAQ list */}
            <FAQAccordion faqs={faqs} defaultOpen={0} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative pt-[clamp(72px,8.5vw,128px)] pb-[clamp(72px,8.5vw,128px)]">
        {/* Background gradient */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(111,168,255,.12), transparent 60%)",
          }}
        />

        <div className="container relative z-[1]">
          <Glass className="grid grid-cols-[1fr_1.1fr] gap-12 max-[900px]:gap-8 p-12 max-[900px]:p-8 max-[600px]:p-5 max-[900px]:grid-cols-1">
            {/* Left: Contact info */}
            <div>
              <div className="eyebrow mb-5 max-[600px]:mb-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
                &nbsp;&nbsp;Let's talk
              </div>
              <h2 className="serif font-normal text-[clamp(28px,5.2vw,56px)] leading-[1.06] tracking-[-.02em] m-0 mb-4 max-[600px]:mb-3">
                Let's build something
                <br className="max-[480px]:hidden" />
                <span className="max-[480px]:hidden"> </span><em className="italic text-ink-2">great together.</em>
              </h2>
              <p className="text-[clamp(15px,1.6vw,21px)] leading-[1.5] text-ink-2 mb-8 max-[600px]:mb-5">
                Free consultation. No commitment. I reply within 24 hours — usually a lot faster.
              </p>

              {/* Contact channels */}
              <div className="flex flex-col gap-4 max-[600px]:gap-3">
                <a
                  href="https://wa.me/919746220043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 max-[480px]:gap-3 p-4 max-[480px]:p-3 rounded-2xl max-[480px]:rounded-xl bg-white/[.04] border border-white/8 transition-all duration-200 hover:bg-white/[.08] hover:border-white/12"
                >
                  <span className="w-12 h-12 max-[480px]:w-10 max-[480px]:h-10 rounded-xl max-[480px]:rounded-lg bg-whatsapp/20 border border-whatsapp/30 grid place-items-center text-whatsapp flex-none">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="max-[480px]:w-4 max-[480px]:h-4">
                      <path d="M20.5 3.5A10.6 10.6 0 0 0 3.4 16.2L2 22l6-1.4a10.6 10.6 0 0 0 12.5-17.1zM12 20a8 8 0 0 1-4.2-1.2l-.3-.2-3.6.8.8-3.5-.2-.3A8 8 0 1 1 12 20zm4.4-5.6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.6.1l-.8 1c-.2.2-.3.2-.5.1a6.6 6.6 0 0 1-3.2-2.8c-.2-.4 0-.4.2-.6l.4-.5.3-.5c0-.2 0-.4-.1-.5l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-.9 2.4s1 2.8 1.2 3a8.4 8.4 0 0 0 3.6 3.1c1.3.5 1.9.5 2.5.4.4-.1 1.4-.6 1.5-1.1.2-.6.2-1 .1-1.1z" />
                    </svg>
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs max-[480px]:text-[10px] text-muted mb-1">WhatsApp · preferred</div>
                    <div className="text-[15px] max-[480px]:text-[13px] font-medium">+91 974 622 0043</div>
                  </div>
                  <span className="px-3 max-[480px]:px-2 py-1 rounded-pill bg-green/20 border border-green/30 text-[#BFEFCB] text-xs max-[480px]:text-[10px] font-medium whitespace-nowrap">
                    ● Online
                  </span>
                </a>

                <a
                  href="mailto:info@akshayvt.com"
                  className="flex items-center gap-4 max-[480px]:gap-3 p-4 max-[480px]:p-3 rounded-2xl max-[480px]:rounded-xl bg-white/[.04] border border-white/8 transition-all duration-200 hover:bg-white/[.08] hover:border-white/12"
                >
                  <span className="w-12 h-12 max-[480px]:w-10 max-[480px]:h-10 rounded-xl max-[480px]:rounded-lg bg-white/[.08] border border-white/10 grid place-items-center text-ink flex-none">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="max-[480px]:w-4 max-[480px]:h-4">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs max-[480px]:text-[10px] text-muted mb-1">Email</div>
                    <div className="text-[15px] max-[480px]:text-[13px] font-medium truncate">info@akshayvt.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 max-[480px]:gap-3 p-4 max-[480px]:p-3 rounded-2xl max-[480px]:rounded-xl bg-white/[.04] border border-white/8">
                  <span className="w-12 h-12 max-[480px]:w-10 max-[480px]:h-10 rounded-xl max-[480px]:rounded-lg bg-white/[.08] border border-white/10 grid place-items-center text-ink flex-none">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="max-[480px]:w-4 max-[480px]:h-4">
                      <circle cx="12" cy="10" r="3" />
                      <path d="M12 22s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12z" />
                    </svg>
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs max-[480px]:text-[10px] text-muted mb-1">Based in</div>
                    <div className="text-[15px] max-[480px]:text-[13px] font-medium">Kerala, India 🇮🇳 <span className="max-[380px]:hidden">— serving 🇦🇪 🇮🇳 🇦🇺 🌍</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <form className="flex flex-col gap-5 max-[600px]:gap-4">
              <div className="grid grid-cols-2 gap-4 max-[600px]:gap-3 max-[600px]:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label className="mono text-[11px] max-[480px]:text-[10px] uppercase tracking-[.14em] text-muted">
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder="Ayesha Rahman"
                    required
                    className="px-4 max-[480px]:px-3 py-3 max-[480px]:py-2.5 rounded-sm bg-white/[.04] border border-white/10 text-ink text-[15px] max-[480px]:text-[14px] placeholder:text-muted-2 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="mono text-[11px] max-[480px]:text-[10px] uppercase tracking-[.14em] text-muted">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="ayesha@company.ae"
                    required
                    className="px-4 max-[480px]:px-3 py-3 max-[480px]:py-2.5 rounded-sm bg-white/[.04] border border-white/10 text-ink text-[15px] max-[480px]:text-[14px] placeholder:text-muted-2 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 max-[600px]:gap-3 max-[600px]:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label className="mono text-[11px] max-[480px]:text-[10px] uppercase tracking-[.14em] text-muted">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+971 50 000 0000"
                    className="px-4 max-[480px]:px-3 py-3 max-[480px]:py-2.5 rounded-sm bg-white/[.04] border border-white/10 text-ink text-[15px] max-[480px]:text-[14px] placeholder:text-muted-2 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="mono text-[11px] max-[480px]:text-[10px] uppercase tracking-[.14em] text-muted">
                    What you need
                  </label>
                  <select className="px-4 max-[480px]:px-3 py-3 max-[480px]:py-2.5 rounded-sm bg-white/[.04] border border-white/10 text-ink text-[15px] max-[480px]:text-[14px] focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer">
                    <option>New website build</option>
                    <option>Fix an existing site</option>
                    <option>Maintenance retainer</option>
                    <option>SEO &amp; performance</option>
                    <option>AI integration</option>
                    <option>Not sure yet — let's chat</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="mono text-[11px] max-[480px]:text-[10px] uppercase tracking-[.14em] text-muted">
                  Tell me about your project
                </label>
                <textarea
                  rows={4}
                  placeholder="A few sentences about your business, the site, and what you're hoping to achieve."
                  className="px-4 max-[480px]:px-3 py-3 max-[480px]:py-2.5 rounded-sm bg-white/[.04] border border-white/10 text-ink text-[15px] max-[480px]:text-[14px] placeholder:text-muted-2 focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex items-center gap-3 pt-2 max-[480px]:flex-col max-[480px]:items-stretch">
                <Button variant="primary" type="submit" showChevron>
                  Send Message
                </Button>
                <span className="text-xs max-[480px]:text-[11px] text-muted max-[480px]:text-center">
                  Usually reply within <b className="text-ink">4 hours</b>
                </span>
              </div>
            </form>
          </Glass>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
