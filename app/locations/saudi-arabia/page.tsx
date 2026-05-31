import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { PageHero } from "@/components/PageHero";
import { Glass } from "@/components/Glass";
import { Button } from "@/components/Button";
import { locations } from "@/data/locations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Developer in Saudi Arabia | Riyadh, Jeddah, Dammam & More",
  description:
    "Freelance web developer serving Saudi Arabia. React & Next.js expert building websites for businesses across Riyadh, Jeddah, Dammam, Khobar, Mecca & Medina. Vision 2030 aligned.",
  openGraph: {
    title: "Freelance Web Developer in Saudi Arabia | Akshay V T",
    description:
      "Professional web development for Saudi Arabian businesses. React, Next.js, bilingual Arabic-English sites.",
    images: ["https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=2400&q=80"],
  },
};

const saudiCities = locations.filter(loc => loc.country === "Saudi Arabia");

const aggregateStats = {
  clients: saudiCities.reduce((sum, city) => sum + parseInt(city.stats.clients), 0),
  projects: saudiCities.reduce((sum, city) => sum + parseInt(city.stats.projects), 0),
};

export default function SaudiArabiaPage() {
  return (
    <>
      <Nav />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: "Saudi Arabia" },
        ]}
        eyebrow="Serving the Kingdom"
        title={
          <>
            Web Developer in{" "}
            <em className="italic text-accent">Saudi Arabia.</em>
          </>
        }
        lede="Supporting Vision 2030's digital transformation. Professional web development for businesses across the Kingdom."
        backgroundImage="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Intro Section */}
      <section className="container py-20">
        <div className="grid grid-cols-[1.1fr_.9fr] gap-16 items-start max-[980px]:grid-cols-1">
          <div>
            <p className="serif text-[clamp(19px,2vw,23px)] leading-[1.55] text-ink tracking-tight mb-8">
              Saudi Arabia is undergoing the most ambitious digital transformation in the region. As businesses across the Kingdom embrace Vision 2030's goals, the need for professional, high-performance websites has never been greater. I work with Saudi companies who understand that their digital presence is as important as their physical one.
            </p>

            <h2 className="serif text-[clamp(28px,3.4vw,38px)] leading-[1.05] tracking-tight m-0 mb-6">
              Why Saudi businesses <em className="italic text-accent">choose me.</em>
            </h2>

            <ul className="flex flex-col gap-4 mb-10">
              <li className="flex gap-4 items-start text-[15.5px] text-ink-2 leading-[1.55]">
                <span className="w-6 h-6 rounded-full bg-accent/20 border border-accent/30 grid place-items-center text-accent flex-none mt-[2px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <span><strong>Bilingual expertise.</strong> Proper Arabic-English websites with native RTL support — not afterthought translations. Your site works perfectly for both audiences.</span>
              </li>
              <li className="flex gap-4 items-start text-[15.5px] text-ink-2 leading-[1.55]">
                <span className="w-6 h-6 rounded-full bg-accent/20 border border-accent/30 grid place-items-center text-accent flex-none mt-[2px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <span><strong>Same business hours.</strong> I'm only 2.5 hours ahead of Saudi Arabia, so we work during the same hours. WhatsApp responses within minutes, not days.</span>
              </li>
              <li className="flex gap-4 items-start text-[15.5px] text-ink-2 leading-[1.55]">
                <span className="w-6 h-6 rounded-full bg-accent/20 border border-accent/30 grid place-items-center text-accent flex-none mt-[2px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <span><strong>Vision 2030 aligned.</strong> I understand the Kingdom's digital goals and build sites that support your growth in Saudi Arabia's evolving economy.</span>
              </li>
              <li className="flex gap-4 items-start text-[15.5px] text-ink-2 leading-[1.55]">
                <span className="w-6 h-6 rounded-full bg-accent/20 border border-accent/30 grid place-items-center text-accent flex-none mt-[2px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <span><strong>Mobile-first development.</strong> Saudi Arabia has one of the highest smartphone penetration rates globally. Every site I build performs flawlessly on mobile.</span>
              </li>
              <li className="flex gap-4 items-start text-[15.5px] text-ink-2 leading-[1.55]">
                <span className="w-6 h-6 rounded-full bg-accent/20 border border-accent/30 grid place-items-center text-accent flex-none mt-[2px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <span><strong>Fixed pricing, no surprises.</strong> I quote what I charge. No scope creep, no hidden fees. Contracts are clear and professional.</span>
              </li>
            </ul>

            <div className="flex gap-3 flex-wrap">
              <Button variant="primary" href="/contact" showChevron>
                Get a free quote
              </Button>
              <Button variant="whatsapp" href="https://wa.me/919746220043">
                WhatsApp me
              </Button>
            </div>
          </div>

          {/* Right: Stats Card */}
          <div className="flex flex-col gap-[14px]">
            <Glass className="p-7">
              <h3 className="serif text-[22px] leading-[1.1] tracking-tight m-0 mb-5">
                Saudi Arabia <em className="italic text-accent">overview.</em>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-5 rounded-2xl bg-white/[.04] border border-white/8">
                  <div className="serif text-[36px] leading-none tracking-tight text-ink">
                    {aggregateStats.clients}+
                  </div>
                  <div className="mono text-[10px] uppercase tracking-[.12em] text-muted mt-2">
                    Saudi Clients
                  </div>
                </div>
                <div className="text-center p-5 rounded-2xl bg-white/[.04] border border-white/8">
                  <div className="serif text-[36px] leading-none tracking-tight text-ink">
                    {aggregateStats.projects}+
                  </div>
                  <div className="mono text-[10px] uppercase tracking-[.12em] text-muted mt-2">
                    Projects Delivered
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-white/[.04] border border-white/8">
                <div className="flex justify-between items-center">
                  <span className="text-[14px] text-ink-2">Cities Served</span>
                  <span className="text-[14px] text-ink font-medium">{saudiCities.length} cities</span>
                </div>
              </div>
            </Glass>

            <Glass className="p-7">
              <h3 className="serif text-[22px] leading-[1.1] tracking-tight m-0 mb-4">
                Industries I <em className="italic text-accent">serve.</em>
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Tech startups",
                  "Corporate enterprises",
                  "Real estate",
                  "Healthcare",
                  "Hospitality & tourism",
                  "E-commerce",
                  "Professional services",
                  "Oil & gas contractors",
                  "Retail & F&B",
                  "Financial services",
                ].map((type) => (
                  <span
                    key={type}
                    className="px-3 py-[6px] rounded-pill bg-white/[.06] border border-white/10 text-[12.5px] text-ink-2"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </Glass>

            <Glass variant="warm" className="p-7">
              <div className="text-warm mono text-sm tracking-[.2em] mb-4">
                ★★★★★
              </div>
              <blockquote className="serif text-[18px] leading-[1.45] tracking-tight text-ink italic m-0 mb-5">
                "Akshay delivered a website that perfectly represents our brand in both Arabic and English. Fast, professional, and understands the Saudi market."
              </blockquote>
              <cite className="flex flex-col not-italic">
                <strong className="text-[14px] font-medium text-ink">
                  Mohammed S.
                </strong>
                <span className="text-[13px] text-muted mt-1">
                  CEO, Tech Startup · Riyadh
                </span>
              </cite>
            </Glass>
          </div>
        </div>
      </section>

      {/* Saudi Cities Grid */}
      <section className="py-20 bg-bg-2">
        <div className="container">
          <div className="flex gap-12 items-end justify-between mb-10 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6">
            <div className="max-w-[64ch]">
              <div className="eyebrow mb-4 inline-block">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
                &nbsp;&nbsp;Across the Kingdom
              </div>
              <h2 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0">
                Cities I <em className="italic text-ink-2">serve.</em>
              </h2>
              <p className="text-[clamp(17px,1.6vw,21px)] leading-[1.5] text-ink-2 mt-4">
                From the capital to the coasts, I work with businesses across Saudi Arabia's major cities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-[14px] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
            {saudiCities.map((city) => (
              <a
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="group block"
              >
                <Glass className="p-0 overflow-hidden flex flex-col min-h-[320px]">
                  <div
                    className="h-[160px] bg-cover bg-center transition-transform duration-[1.2s] group-hover:scale-[1.06]"
                    style={{ backgroundImage: `url('${city.heroImage}')` }}
                  />
                  <div className="p-5 flex flex-col gap-2 flex-1">
                    <span className="mono text-[10.5px] uppercase tracking-[.12em] text-accent">
                      {city.flag} {city.country}
                    </span>
                    <h4 className="serif text-[24px] leading-[1.1] tracking-tight m-0">
                      {city.city}
                    </h4>
                    <p className="text-[13.5px] text-ink-2 leading-[1.5] m-0 mt-1 line-clamp-2">
                      {city.tagline}
                    </p>
                    <div className="flex gap-4 mt-2 text-[12px] text-muted">
                      <span>{city.stats.clients} clients</span>
                      <span>·</span>
                      <span>{city.stats.projects} projects</span>
                    </div>
                    <div className="mt-auto pt-3 border-t border-dashed border-white/10 mono text-[11px] text-accent">
                      View {city.city} →
                    </div>
                  </div>
                </Glass>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-20">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <div className="eyebrow mb-4 inline-block">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
              &nbsp;&nbsp;What I offer
            </div>
            <h2 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0">
              Services for <em className="italic text-ink-2">Saudi businesses.</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">
            {[
              {
                title: "Arabic-English Websites",
                desc: "Bilingual sites with proper RTL support. Not machine translations — professionally crafted for both audiences.",
              },
              {
                title: "E-commerce Solutions",
                desc: "Online stores that work for Saudi customers. Local payment integration, Arabic support, mobile-optimized.",
              },
              {
                title: "Corporate Websites",
                desc: "Professional sites that establish credibility with enterprise clients and government entities.",
              },
              {
                title: "Startup & SaaS Sites",
                desc: "Modern, fast websites for tech companies. Next.js, React, and cutting-edge performance.",
              },
              {
                title: "Hospitality & Tourism",
                desc: "Multi-language sites for hotels, tour operators, and services in Mecca, Medina, and beyond.",
              },
              {
                title: "SEO & Performance",
                desc: "Rank higher in Saudi search results. Local SEO, Arabic keyword optimization, Core Web Vitals.",
              },
            ].map((service) => (
              <Glass key={service.title} className="p-6">
                <h3 className="serif text-[20px] leading-[1.1] tracking-tight m-0 mb-3">
                  {service.title}
                </h3>
                <p className="text-[14px] text-ink-2 leading-[1.55] m-0">
                  {service.desc}
                </p>
              </Glass>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(111,168,255,.12), transparent 60%)",
          }}
        />
        <div className="container relative z-[1]">
          <Glass className="p-12 text-center max-w-[800px] mx-auto">
            <div className="eyebrow mb-4 inline-block">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
              &nbsp;&nbsp;Ready to start?
            </div>
            <h2 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0 mb-5">
              Let's build your{" "}
              <em className="italic text-ink-2">Saudi presence.</em>
            </h2>
            <p className="text-[clamp(17px,1.6vw,21px)] leading-[1.5] text-ink-2 mb-8">
              Free consultation. No commitment. WhatsApp or email — I reply within 24 hours.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Button variant="primary" href="/contact" showChevron>
                Get a free quote
              </Button>
              <Button variant="whatsapp" href="https://wa.me/919746220043">
                WhatsApp me
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
