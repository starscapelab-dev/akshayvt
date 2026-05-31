import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Glass } from "@/components/Glass";
import { aboutContent } from "@/data/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "6+ years building React & Next.js websites. Based in Kerala, serving clients in Dubai, Sydney & worldwide. My journey & skills.",
  openGraph: {
    title: "About Akshay V T | Freelance Web Developer",
    description:
      "6+ years building websites. Based in Kerala, serving Dubai, Sydney & worldwide.",
    url: "https://akshayvt.com/about",
  },
  alternates: {
    canonical: "/about",
  },
};

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

// SVG icons for skill cards
function FrontendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 text-ink">
      <circle cx="12" cy="12" r="2.2"/>
      <ellipse cx="12" cy="12" rx="10" ry="4"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
    </svg>
  );
}

function BackendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 text-ink">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6"/>
    </svg>
  );
}

function CMSIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 text-ink">
      <rect x="3" y="4" width="18" height="16" rx="2"/>
      <path d="M3 8h18M7 4v5"/>
    </svg>
  );
}

function InfraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 text-ink">
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[11px] h-[11px]">
      <path d="M5 12l4 4L19 6"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[11px] h-[11px]">
      <path d="M6 6l12 12M6 18L18 6"/>
    </svg>
  );
}

const skillIcons: Record<string, React.ReactNode> = {
  frontend: <FrontendIcon />,
  backend: <BackendIcon />,
  cms: <CMSIcon />,
  infra: <InfraIcon />,
};

export default function AboutPage() {
  const { hero, stats, story, principles, skills, timeline, pullQuote, workingWithMe } = aboutContent;
  return (
    <>
      <Nav />

      {/* Hero Section with Portrait */}
      <header className="relative min-h-[720px] pt-[168px] pb-20 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 z-[-2]"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(111,168,255,.15), transparent 60%), linear-gradient(180deg, #06070A 0%, #0A0F1C 50%, #06070A 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-[-1] bg-cover bg-center opacity-[0.38]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=80')",
            backgroundPosition: "center 50%",
            maskImage:
              "linear-gradient(180deg, transparent 0%, #000 20%, #000 75%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 0%, #000 20%, #000 75%, transparent 100%)",
          }}
        />

        <div className="container">
          {/* Breadcrumb */}
          <nav className="mb-8 mono text-[12px] text-muted">
            <a href="/" className="hover:text-ink transition-colors">Home</a>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-ink-2">About</span>
          </nav>

          <div className="grid grid-cols-[1.2fr_1fr] gap-[60px] items-end max-[980px]:grid-cols-1">
            {/* Left: Intro */}
            <div>
              <div className="eyebrow mb-4 inline-flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_10px_#42E47A]" />
                {hero.eyebrow}
              </div>
              <h1 className="serif text-[clamp(48px,6vw,72px)] leading-[1.0] tracking-[-.02em] m-0 mb-6 max-w-[14ch]">
                A developer you can <em className="italic text-accent">actually rely on.</em>
              </h1>
              <p className="serif text-[20px] leading-[1.55] text-ink m-0 mb-[22px] tracking-[-.005em]">
                {hero.intro}
              </p>
              <p className="text-[18px] leading-[1.65] text-ink-2 m-0">
                {hero.description}
              </p>
              <div className="flex gap-3 flex-wrap mt-7">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-[10px] px-[22px] py-[14px] rounded-pill text-[15px] font-medium tracking-tight bg-gradient-to-b from-white to-[#d9e2f5] text-bg shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-px transition-all duration-250"
                >
                  Let's work together
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7"/>
                  </svg>
                </a>
                <a
                  href="/#projects"
                  className="inline-flex items-center gap-[10px] px-[22px] py-[14px] rounded-pill text-[15px] font-medium tracking-tight border border-white/[.12] text-ink hover:border-white/20 hover:bg-white/[.03] transition-all duration-250"
                >
                  View my work
                </a>
              </div>
            </div>

            {/* Right: Portrait Card */}
            <Glass
              as="div"
              className="relative p-0 rounded-[28px] max-[600px]:rounded-[20px] aspect-[4/5] min-h-[460px] max-[600px]:min-h-[380px] overflow-hidden"
            >
              {/* Profile Image */}
              <img
                src="https://haziex.com/wp-content/uploads/2024/09/akshay-haziex.png"
                alt="Akshay V T - Freelance Web Developer"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,7,10,.7)] via-transparent to-[rgba(6,7,10,.2)]" />

              {/* Floating stats */}
              <Glass
                as="div"
                className="absolute top-5 right-5 flex items-center gap-[10px] px-[18px] py-[14px] rounded-[14px]"
              >
                <div className="serif text-[24px] leading-none tracking-[-.015em]">6+</div>
                <div className="mono text-[10.5px] text-muted uppercase tracking-[.08em]">
                  YRS<br/>SHIPPING
                </div>
              </Glass>

              <Glass
                as="div"
                className="absolute top-1/2 -left-[22px] flex items-center gap-[10px] px-[18px] py-[14px] rounded-[14px]"
              >
                <div className="serif text-[24px] leading-none tracking-[-.015em]">4</div>
                <div className="mono text-[10.5px] text-muted uppercase tracking-[.08em]">
                  COUNTRIES<br/>SERVED
                </div>
              </Glass>

              {/* Signature */}
              <div className="absolute bottom-6 left-[22px] serif italic text-[28px] text-white tracking-[-.01em] drop-shadow-lg">
                Akshay V T
              </div>
            </Glass>
          </div>

          {/* Stats Strip */}
          <Glass
            as="div"
            className="grid grid-cols-4 mt-14 rounded-[var(--radius)] overflow-hidden max-[720px]:grid-cols-2"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`px-7 py-[26px] ${i < stats.length - 1 ? "border-r border-white/[.06]" : ""} ${i === 1 ? "max-[720px]:border-r-0" : ""}`}
              >
                <div className="serif text-[40px] leading-none tracking-[-.02em]">
                  <em className="italic text-accent">{stat.value}</em>
                </div>
                <div className="mono text-[11px] text-muted uppercase tracking-[.1em] mt-[10px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </Glass>
        </div>
      </header>

      {/* Story / Manifesto Section */}
      <section className="bg-bg-2 py-[clamp(96px,11vw,160px)]">
        <div className="container">
          <div className="grid grid-cols-[280px_1fr] gap-16 max-[600px]:gap-10 items-start max-[900px]:grid-cols-1 max-[900px]:gap-8">
            {/* Aside */}
            <div className="sticky top-[110px]">
              <h2 className="serif text-[clamp(34px,4vw,52px)] leading-[1.0] tracking-[-.02em] m-0">
                Why I work <em className="italic text-accent">this way.</em>
              </h2>
            </div>

            {/* Body */}
            <div className="serif text-[19px] leading-[1.7] text-ink-2 tracking-[-.003em] max-w-[64ch]">
              {story.content.map((para, i) => (
                <p
                  key={i}
                  className={`m-0 mb-[1.2em] ${i === 0 ? "first-letter:text-[4.2em] first-letter:float-left first-letter:leading-[.9] first-letter:pr-4 first-letter:mt-2 first-letter:text-accent first-letter:italic" : ""} ${i === story.content.length - 1 ? "!mb-0" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: para
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-ink font-semibold">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em class="italic text-ink">$1</em>'),
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section - 6 principles */}
      <section className="py-[clamp(96px,11vw,160px)]">
        <div className="container">
          <div className="flex gap-12 items-end justify-between mb-12 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6">
            <div className="max-w-[64ch]">
              <div className="eyebrow mb-4 inline-block">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
                &nbsp;&nbsp;What I believe
              </div>
              <h2 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0">
                Six principles I <em className="italic text-accent">actually run on.</em>
              </h2>
            </div>
            <div className="text-sm text-ink-2 max-w-[38ch]">
              Every freelancer claims "client-first" and "best practices". These are the ones I'd actually defend in an argument.
            </div>
          </div>

          <div className="grid grid-cols-3 gap-[14px] max-[600px]:gap-3 max-[900px]:grid-cols-1">
            {principles.map((principle, i) => (
              <Glass key={i} className="px-7 max-[600px]:px-5 py-[30px] max-[600px]:py-6 flex flex-col">
                <h3 className="serif text-[28px] leading-[1.08] tracking-[-.018em] m-0 mb-[14px]" style={{ textWrap: 'balance' }}>
                  {principle.title.split(/(\s\S+\.)$/).map((part, j) =>
                    j === 1 ? <em key={j} className="italic text-accent">{part}</em> : part
                  )}
                </h3>
                <p className="text-[14.5px] text-ink-2 leading-[1.6] m-0">
                  {principle.description}
                </p>
              </Glass>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - 4 columns with icons */}
      <section className="relative bg-bg-2 py-[clamp(96px,11vw,160px)] overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 z-0 pointer-events-none bg-cover bg-center"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,7,10,.85), rgba(6,7,10,.78)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container relative z-[1]">
          <div className="flex gap-12 items-end justify-between mb-12 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6">
            <div className="max-w-[64ch]">
              <div className="eyebrow mb-4 inline-block">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
                &nbsp;&nbsp;What I'm fluent in
              </div>
              <h2 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0">
                The tools I reach for <em className="italic text-accent">every day.</em>
              </h2>
            </div>
            <div className="text-sm text-ink-2 max-w-[38ch]">
              I'm comfortable across the modern web stack — but pick boring tools by default, and bring in others only when the project genuinely needs them.
            </div>
          </div>

          <div className="grid grid-cols-4 gap-[14px] max-[980px]:grid-cols-2 max-[560px]:grid-cols-1">
            {skills.map((skill, i) => (
              <Glass key={i} className="px-6 py-6 flex flex-col gap-[14px]">
                <div className="flex items-center gap-3 pb-[14px] border-b border-dashed border-white/10">
                  <div className="w-8 h-8 rounded-[9px] bg-gradient-to-b from-white/14 to-white/4 border border-white/14 grid place-items-center">
                    {skillIcons[skill.icon] || <FrontendIcon />}
                  </div>
                  <h4 className="text-[15px] font-medium tracking-[-.005em] m-0">{skill.title}</h4>
                </div>
                <ul className="list-none p-0 m-0 flex flex-col gap-[6px]">
                  {skill.items.map((item, j) => (
                    <li key={j} className="mono text-[12px] text-ink-2 tracking-[-.005em] flex items-center gap-2">
                      <span className="text-accent">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Glass>
            ))}
          </div>
        </div>
      </section>

      {/* Journey/Timeline Section */}
      <section className="py-[clamp(96px,11vw,160px)]">
        <div className="container">
          <div className="flex gap-12 items-end justify-between mb-12 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6">
            <div className="max-w-[64ch]">
              <div className="eyebrow mb-4 inline-block">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
                &nbsp;&nbsp;The path here
              </div>
              <h2 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0">
                Six years on, <em className="italic text-accent">still finding the work fun.</em>
              </h2>
            </div>
            <div className="text-sm text-ink-2 max-w-[38ch]">
              An honest CV in eight beats. The interesting parts only.
            </div>
          </div>

          <div className="flex flex-col gap-[14px] max-[600px]:gap-3">
            {timeline.map((item, i) => (
              <Glass
                key={i}
                className="grid grid-cols-[220px_1fr] gap-8 px-7 max-[600px]:px-5 py-[26px] max-[600px]:py-5 items-center max-[720px]:grid-cols-1 max-[720px]:gap-[10px]"
              >
                <div>
                  <div className="serif italic text-[38px] leading-none tracking-[-.02em] text-accent">
                    {item.year}
                  </div>
                  <div className="mono text-[11px] text-muted uppercase tracking-[.12em] mt-2">
                    {item.subtitle}
                  </div>
                </div>
                <div>
                  <h4 className="text-[18px] font-medium tracking-[-.01em] m-0 mb-[6px]">
                    {item.title}
                  </h4>
                  <p className="text-[14.5px] text-ink-2 leading-[1.55] m-0 max-w-[60ch]">
                    {item.description}
                  </p>
                </div>
              </Glass>
            ))}
          </div>
        </div>
      </section>

      {/* Pull Quote Section */}
      <section className="pb-[var(--section-pad)]">
        <div className="container">
          <Glass className="relative p-[clamp(56px,7vw,88px)] text-center rounded-[32px] overflow-hidden">
            {/* Decorative quote mark */}
            <div className="absolute top-4 left-9 serif text-[180px] text-accent opacity-15 leading-none select-none">
              "
            </div>
            <blockquote className="serif text-[clamp(26px,3.4vw,44px)] leading-[1.18] tracking-[-.018em] m-0 mx-auto max-w-[26ch]" style={{ textWrap: 'balance' }}>
              {pullQuote.quote.split("actually").map((part, i) =>
                i === 0 ? part : <span key={i}><em className="italic text-accent">actually{part.split(".")[0]}.</em>{part.split(".").slice(1).join(".")}</span>
              )}
            </blockquote>
            <div className="mt-6 mono text-[12px] text-muted tracking-[.1em] uppercase">
              {pullQuote.source}
            </div>
          </Glass>
        </div>
      </section>

      {/* Working With Me Section */}
      <section className="bg-bg-2 py-[clamp(96px,11vw,160px)]">
        <div className="container">
          <div className="flex gap-12 items-end justify-between mb-12 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6">
            <div className="max-w-[64ch]">
              <div className="eyebrow mb-4 inline-block">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
                &nbsp;&nbsp;Fit check
              </div>
              <h2 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0">
                Working with me is <em className="italic text-accent">great for some — not all.</em>
              </h2>
            </div>
            <div className="text-sm text-ink-2 max-w-[38ch]">
              Better to find out now than three weeks into a project. Here's how I work, plainly.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[14px] max-[820px]:grid-cols-1">
            {/* Good Fit Card */}
            <Glass className="p-8">
              <h3 className="serif text-[28px] tracking-[-.018em] leading-[1.1] m-0 mb-[18px]">
                Great fit if you <em className="italic text-green">need…</em>
              </h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {workingWithMe.goodFit.map((item, i) => (
                  <li key={i} className="grid grid-cols-[22px_1fr] gap-3 text-[14.5px] text-ink-2 leading-[1.55] tracking-[-.003em]">
                    <span className="w-5 h-5 rounded-full bg-green/[.18] border border-green/30 text-green grid place-items-center mt-[3px]">
                      <CheckIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Glass>

            {/* Not Fit Card */}
            <Glass className="p-8">
              <h3 className="serif text-[28px] tracking-[-.018em] leading-[1.1] m-0 mb-[18px]">
                Maybe not the fit if you <em className="italic text-warm">want…</em>
              </h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {workingWithMe.notFit.map((item, i) => (
                  <li key={i} className="grid grid-cols-[22px_1fr] gap-3 text-[14.5px] text-ink-2 leading-[1.55] tracking-[-.003em]">
                    <span className="w-5 h-5 rounded-full bg-warm/[.14] border border-warm/[.28] text-[#FFB1A8] grid place-items-center mt-[3px]">
                      <XIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Glass>
          </div>
        </div>
      </section>

      {/* Technology Logo Carousel */}
      <section className="py-24 overflow-hidden">
        <div className="container mb-10">
          <div className="text-center">
            <div className="eyebrow mb-[18px] justify-center">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
              &nbsp;&nbsp;Trusted Technologies
            </div>
            <h2 className="serif font-normal text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-.02em] m-0">
              Built with <em className="italic text-ink-2">industry-standard tools</em>
            </h2>
          </div>
        </div>
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex animate-scroll">
            {/* First set */}
            <div className="flex gap-12 px-6">
              {techLogos.map((logo, i) => (
                <div key={i} className="flex flex-col items-center gap-3 min-w-[90px]">
                  <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 p-3 flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="w-10 h-10 object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <span className="mono text-[11px] text-muted tracking-wide">{logo.name}</span>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex gap-12 px-6">
              {techLogos.map((logo, i) => (
                <div key={`dup-${i}`} className="flex flex-col items-center gap-3 min-w-[90px]">
                  <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 p-3 flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="w-10 h-10 object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <span className="mono text-[11px] text-muted tracking-wide">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-40 overflow-hidden">
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
          <Glass className="relative p-12 overflow-hidden">
            <div className="relative z-[2] text-center max-w-[800px] mx-auto">
              <div className="eyebrow mb-4 inline-block">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
                &nbsp;&nbsp;Still reading?
              </div>
              <h2 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0 mb-5">
                You probably have <em className="italic text-accent">a project in mind.</em>
              </h2>
              <p className="text-[clamp(17px,1.6vw,21px)] leading-[1.5] text-ink-2 mb-8">
                If you've read this far, we should probably talk. Free consultation, no commitment — and I read every WhatsApp message myself.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-[10px] px-[22px] py-[14px] rounded-pill text-[15px] font-medium tracking-tight bg-gradient-to-b from-white to-[#d9e2f5] text-bg shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-px transition-all duration-250"
                >
                  Send me a message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/919746220043"
                  className="inline-flex items-center gap-[10px] px-[22px] py-[14px] rounded-pill text-[15px] font-medium tracking-tight bg-whatsapp text-[#00220C] shadow-btn-whatsapp hover:-translate-y-px transition-all duration-250"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M20.5 3.5A10.6 10.6 0 0 0 3.4 16.2L2 22l6-1.4a10.6 10.6 0 0 0 12.5-17.1zM12 20a8 8 0 0 1-4.2-1.2l-.3-.2-3.6.8.8-3.5-.2-.3A8 8 0 1 1 12 20z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </Glass>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
