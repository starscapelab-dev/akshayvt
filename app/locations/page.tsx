import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { PageHero } from "@/components/PageHero";
import { Glass } from "@/components/Glass";
import { Button } from "@/components/Button";
import { locations } from "@/data/locations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations | Freelance Web Developer | Akshay V T",
  description:
    "I work with clients in Dubai, Kerala, Sydney, Doha, Riyadh, Jeddah and worldwide. Wherever you are, I deliver professional web development with direct communication.",
  openGraph: {
    title: "Locations | Freelance Web Developer | Akshay V T",
    description:
      "Web development services for businesses in UAE, India, Australia, Qatar, Saudi Arabia and worldwide.",
  },
};

export default function LocationsPage() {
  return (
    <>
      <Nav />

      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]}
        eyebrow="🌍 Serving clients worldwide"
        title={
          <>
            Wherever you are, <em className="italic text-accent">I deliver.</em>
          </>
        }
        lede="I work with businesses across the UAE, India, Australia, and beyond. Different time zones, same professional service — direct communication with the person building your site."
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Locations Grid */}
      <section className="container py-20">
        <div className="grid grid-cols-2 gap-[14px] max-[820px]:grid-cols-1">
          {locations.map((location) => (
            <a
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="group block"
            >
              <Glass className="p-0 overflow-hidden flex flex-col md:flex-row min-h-[320px]">
                <div
                  className="w-full md:w-[45%] min-h-[200px] md:min-h-full bg-cover bg-center transition-transform duration-[1.2s] group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url('${location.heroImage}')` }}
                />
                <div className="flex-1 p-7 flex flex-col">
                  <span className="mono text-[10.5px] uppercase tracking-[.12em] text-accent mb-2">
                    {location.flag} {location.country}
                  </span>
                  <h3 className="serif text-[clamp(28px,3vw,36px)] leading-[1.05] tracking-tight m-0 mb-3">
                    {location.city}
                  </h3>
                  <p className="text-[14.5px] text-ink-2 leading-[1.55] m-0 mb-5 flex-1">
                    {location.tagline}
                  </p>

                  {/* Stats row */}
                  <div className="flex gap-6 mb-5">
                    <div>
                      <div className="serif text-[24px] leading-none tracking-tight text-ink">
                        {location.stats.clients}
                      </div>
                      <div className="mono text-[9px] uppercase tracking-[.12em] text-muted mt-1">
                        Clients
                      </div>
                    </div>
                    <div>
                      <div className="serif text-[24px] leading-none tracking-tight text-ink">
                        {location.stats.projects}
                      </div>
                      <div className="mono text-[9px] uppercase tracking-[.12em] text-muted mt-1">
                        Projects
                      </div>
                    </div>
                    <div>
                      <div className="serif text-[24px] leading-none tracking-tight text-ink">
                        {location.stats.years}
                      </div>
                      <div className="mono text-[9px] uppercase tracking-[.12em] text-muted mt-1">
                        Years
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-dashed border-white/10 flex justify-between items-center">
                    <span className="mono text-[11px] text-muted tracking-[.04em]">
                      {location.timezoneOffset}
                    </span>
                    <span className="mono text-[12px] text-accent group-hover:translate-x-1 transition-transform">
                      Learn more →
                    </span>
                  </div>
                </div>
              </Glass>
            </a>
          ))}
        </div>
      </section>

      {/* Global Coverage Section */}
      <section className="py-20 bg-bg-2 border-t border-b border-line-soft">
        <div className="container">
          <div className="grid grid-cols-[1fr_1.2fr] gap-16 items-center max-[900px]:grid-cols-1">
            <div>
              <div className="eyebrow mb-4 inline-block">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-warm shadow-[0_0_12px_#F4C58C]" />
                &nbsp;&nbsp;Not listed?
              </div>
              <h2 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0 mb-5">
                I work with clients <em className="italic text-ink-2">anywhere.</em>
              </h2>
              <p className="text-[15.5px] text-ink-2 leading-[1.6] mb-6">
                While I have the most experience with clients in the UAE, Saudi Arabia, India, Australia, and Qatar, I work with businesses worldwide. English is my primary working language, and I'm comfortable with any timezone that has reasonable overlap with IST.
              </p>
              <p className="text-[15.5px] text-ink-2 leading-[1.6] mb-8">
                If you're somewhere not listed here, that's not a problem. The important thing is clear communication and shared expectations — which we'll establish in our first conversation.
              </p>
              <Button variant="primary" href="/contact" showChevron>
                Start a conversation
              </Button>
            </div>

            {/* Timezone overlap visual */}
            <Glass className="p-8">
              <h3 className="serif text-[24px] leading-[1.1] tracking-tight m-0 mb-6">
                Timezone <em className="italic text-accent">compatibility.</em>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-24 mono text-[11px] text-muted tracking-[.04em]">
                    Best overlap
                  </div>
                  <div className="flex-1 flex gap-2 flex-wrap">
                    <span className="px-3 py-1.5 rounded-pill bg-green/20 border border-green/30 text-[12px] text-[#BFEFCB]">
                      UAE
                    </span>
                    <span className="px-3 py-1.5 rounded-pill bg-green/20 border border-green/30 text-[12px] text-[#BFEFCB]">
                      Saudi Arabia
                    </span>
                    <span className="px-3 py-1.5 rounded-pill bg-green/20 border border-green/30 text-[12px] text-[#BFEFCB]">
                      India
                    </span>
                    <span className="px-3 py-1.5 rounded-pill bg-green/20 border border-green/30 text-[12px] text-[#BFEFCB]">
                      Qatar
                    </span>
                    <span className="px-3 py-1.5 rounded-pill bg-green/20 border border-green/30 text-[12px] text-[#BFEFCB]">
                      Singapore
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 mono text-[11px] text-muted tracking-[.04em]">
                    Good overlap
                  </div>
                  <div className="flex-1 flex gap-2 flex-wrap">
                    <span className="px-3 py-1.5 rounded-pill bg-accent/20 border border-accent/30 text-[12px] text-accent">
                      UK
                    </span>
                    <span className="px-3 py-1.5 rounded-pill bg-accent/20 border border-accent/30 text-[12px] text-accent">
                      Europe
                    </span>
                    <span className="px-3 py-1.5 rounded-pill bg-accent/20 border border-accent/30 text-[12px] text-accent">
                      Australia
                    </span>
                    <span className="px-3 py-1.5 rounded-pill bg-accent/20 border border-accent/30 text-[12px] text-accent">
                      East Africa
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 mono text-[11px] text-muted tracking-[.04em]">
                    Some overlap
                  </div>
                  <div className="flex-1 flex gap-2 flex-wrap">
                    <span className="px-3 py-1.5 rounded-pill bg-warm/20 border border-warm/30 text-[12px] text-warm">
                      US East Coast
                    </span>
                    <span className="px-3 py-1.5 rounded-pill bg-warm/20 border border-warm/30 text-[12px] text-warm">
                      Canada
                    </span>
                    <span className="px-3 py-1.5 rounded-pill bg-warm/20 border border-warm/30 text-[12px] text-warm">
                      South America
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-[13px] text-muted mt-6 m-0">
                Note: "Less overlap" doesn't mean "can't work together" — just means we'll rely more on async communication.
              </p>
            </Glass>
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
              Let's talk about{" "}
              <em className="italic text-ink-2">your project.</em>
            </h2>
            <p className="text-[clamp(17px,1.6vw,21px)] leading-[1.5] text-ink-2 mb-8">
              Free consultation. No commitment. I reply within 24 hours — usually
              within 3.
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
