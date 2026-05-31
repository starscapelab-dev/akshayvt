import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { PageHero } from "@/components/PageHero";
import { Glass } from "@/components/Glass";
import { Button } from "@/components/Button";
import { locations } from "@/data/locations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Developer in Qatar | Doha, Lusail, Al Rayyan & More",
  description:
    "Freelance web developer serving Qatar. React & Next.js expert building websites for businesses across Doha, Lusail, Al Rayyan & Al Wakrah. Bilingual Arabic-English expertise.",
  openGraph: {
    title: "Freelance Web Developer in Qatar | Akshay V T",
    description:
      "Professional web development for Qatari businesses. React, Next.js, bilingual sites.",
    images: ["https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2400&q=80"],
  },
};

const qatarCities = locations.filter(loc => loc.country === "Qatar");

const aggregateStats = {
  clients: qatarCities.reduce((sum, city) => sum + parseInt(city.stats.clients), 0),
  projects: qatarCities.reduce((sum, city) => sum + parseInt(city.stats.projects), 0),
};

export default function QatarPage() {
  return (
    <>
      <Nav />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: "Qatar" },
        ]}
        eyebrow="Serving Qatar"
        title={
          <>
            Web Developer in{" "}
            <em className="italic text-accent">Qatar.</em>
          </>
        }
        lede="From Doha's business district to Lusail's smart city and Al Rayyan's growing sectors — professional web development for businesses across Qatar."
        backgroundImage="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Intro Section */}
      <section className="container py-20">
        <div className="grid grid-cols-[1.1fr_.9fr] gap-16 items-start max-[980px]:grid-cols-1">
          <div>
            <p className="serif text-[clamp(19px,2vw,23px)] leading-[1.55] text-ink tracking-tight mb-8">
              Qatar's business landscape demands excellence — from established enterprises in Doha to innovative startups in Lusail. I work with Qatari businesses that need professional, bilingual websites built to regional standards. Direct communication with the developer, transparent pricing, and results that match your ambitions.
            </p>

            <h2 className="serif text-[clamp(28px,3.4vw,38px)] leading-[1.05] tracking-tight m-0 mb-6">
              Why Qatar businesses <em className="italic text-accent">choose me.</em>
            </h2>

            <ul className="flex flex-col gap-4 mb-10">
              <li className="flex gap-4 items-start text-[15.5px] text-ink-2 leading-[1.55]">
                <span className="w-6 h-6 rounded-full bg-accent/20 border border-accent/30 grid place-items-center text-accent flex-none mt-[2px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <span><strong>Gulf business expertise.</strong> I understand Qatar's market dynamics, business culture, and communication expectations.</span>
              </li>
              <li className="flex gap-4 items-start text-[15.5px] text-ink-2 leading-[1.55]">
                <span className="w-6 h-6 rounded-full bg-accent/20 border border-accent/30 grid place-items-center text-accent flex-none mt-[2px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <span><strong>Perfect timezone overlap.</strong> Only 1.5 hours difference from AST — we work during the same business hours.</span>
              </li>
              <li className="flex gap-4 items-start text-[15.5px] text-ink-2 leading-[1.55]">
                <span className="w-6 h-6 rounded-full bg-accent/20 border border-accent/30 grid place-items-center text-accent flex-none mt-[2px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <span><strong>Bilingual excellence.</strong> Proper Arabic-English websites with native RTL support, cultural adaptation, and professional translation.</span>
              </li>
              <li className="flex gap-4 items-start text-[15.5px] text-ink-2 leading-[1.55]">
                <span className="w-6 h-6 rounded-full bg-accent/20 border border-accent/30 grid place-items-center text-accent flex-none mt-[2px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <span><strong>Modern technology stack.</strong> Next.js, React, and TypeScript — the same technologies used by top global companies.</span>
              </li>
              <li className="flex gap-4 items-start text-[15.5px] text-ink-2 leading-[1.55]">
                <span className="w-6 h-6 rounded-full bg-accent/20 border border-accent/30 grid place-items-center text-accent flex-none mt-[2px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <span><strong>Fixed pricing, no surprises.</strong> Transparent quotes with clear deliverables. You know exactly what you're paying.</span>
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
                Qatar <em className="italic text-accent">overview.</em>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-5 rounded-2xl bg-white/[.04] border border-white/8">
                  <div className="serif text-[36px] leading-none tracking-tight text-ink">
                    {aggregateStats.clients}+
                  </div>
                  <div className="mono text-[10px] uppercase tracking-[.12em] text-muted mt-2">
                    Qatar Clients
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
                  <span className="text-[14px] text-ink font-medium">{qatarCities.length} cities</span>
                </div>
              </div>
            </Glass>

            <Glass className="p-7">
              <h3 className="serif text-[22px] leading-[1.1] tracking-tight m-0 mb-4">
                Industries I <em className="italic text-accent">serve.</em>
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Professional services",
                  "Real estate & PropTech",
                  "Tech startups & SaaS",
                  "Hospitality & tourism",
                  "Healthcare providers",
                  "Education & training",
                  "Retail & e-commerce",
                  "Sports & facilities",
                  "Construction firms",
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
                "Akshay delivered exactly what we needed — a professional site that works perfectly in Arabic and English. The project was smooth from start to finish."
              </blockquote>
              <cite className="flex flex-col not-italic">
                <strong className="text-[14px] font-medium text-ink">
                  Khalid A.
                </strong>
                <span className="text-[13px] text-muted mt-1">
                  Managing Partner, Consultancy · Doha
                </span>
              </cite>
            </Glass>
          </div>
        </div>
      </section>

      {/* Qatar Cities Grid */}
      <section className="py-20 bg-bg-2">
        <div className="container">
          <div className="flex gap-12 items-end justify-between mb-10 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6">
            <div className="max-w-[64ch]">
              <div className="eyebrow mb-4 inline-block">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
                &nbsp;&nbsp;Across Qatar
              </div>
              <h2 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0">
                Cities I <em className="italic text-ink-2">serve.</em>
              </h2>
              <p className="text-[clamp(17px,1.6vw,21px)] leading-[1.5] text-ink-2 mt-4">
                From the capital to smart cities and growing municipalities, I work with businesses across Qatar.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[14px] max-[600px]:grid-cols-1">
            {qatarCities.map((city) => (
              <a
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="group block"
              >
                <Glass className="p-0 overflow-hidden flex flex-col md:flex-row min-h-[280px]">
                  <div
                    className="w-full md:w-[45%] min-h-[180px] md:min-h-full bg-cover bg-center transition-transform duration-[1.2s] group-hover:scale-[1.04]"
                    style={{ backgroundImage: `url('${city.heroImage}')` }}
                  />
                  <div className="flex-1 p-6 max-[600px]:p-5 flex flex-col">
                    <span className="mono text-[10.5px] uppercase tracking-[.12em] text-accent mb-2">
                      {city.flag} {city.country}
                    </span>
                    <h4 className="serif text-[26px] leading-[1.1] tracking-tight m-0 mb-3">
                      {city.city}
                    </h4>
                    <p className="text-[14px] text-ink-2 leading-[1.5] m-0 mb-4 flex-1">
                      {city.tagline}
                    </p>
                    <div className="flex gap-4 mb-4 text-[12px] text-muted">
                      <span>{city.stats.clients} clients</span>
                      <span>·</span>
                      <span>{city.stats.projects} projects</span>
                    </div>
                    <div className="pt-3 border-t border-dashed border-white/10 mono text-[11px] text-accent">
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
              Services for <em className="italic text-ink-2">Qatar businesses.</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">
            {[
              {
                title: "Arabic-English Bilingual Sites",
                desc: "Professional bilingual websites with proper RTL support and cultural adaptation for Qatar's diverse market.",
              },
              {
                title: "Tech Startup & SaaS Sites",
                desc: "Modern, high-performance websites for Lusail's innovation sector using Next.js, React, and cloud technologies.",
              },
              {
                title: "Corporate Websites",
                desc: "Professional sites for consultancies, professional services, and enterprises that establish credibility with decision-makers.",
              },
              {
                title: "Real Estate Platforms",
                desc: "Property showcases, booking systems, and lead generation platforms for Qatar's booming real estate market.",
              },
              {
                title: "E-commerce Solutions",
                desc: "Online stores with local payment integration, Arabic support, and mobile optimization for Qatar shoppers.",
              },
              {
                title: "SEO & Performance",
                desc: "Qatar-specific search optimization, Arabic keyword targeting, and Core Web Vitals optimization.",
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
              <em className="italic text-ink-2">Qatar presence.</em>
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
