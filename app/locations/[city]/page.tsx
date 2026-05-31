import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { PageHero } from "@/components/PageHero";
import { Glass } from "@/components/Glass";
import { Button } from "@/components/Button";
import { locations, getLocationBySlug } from "@/data/locations";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: { city: string };
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    city: location.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = getLocationBySlug(params.city);
  if (!location) return {};

  return {
    title: `Web Developer in ${location.city} ${location.flag} | Akshay V T`,
    description: location.description,
    openGraph: {
      title: `Freelance Web Developer in ${location.city} | Akshay V T`,
      description: location.tagline,
      images: [location.heroImage],
    },
  };
}

export default function LocationPage({ params }: Props) {
  const location = getLocationBySlug(params.city);

  if (!location) {
    notFound();
  }

  return (
    <>
      <Nav />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: location.city },
        ]}
        eyebrow={`${location.flag} Serving ${location.city}, ${location.country}`}
        title={
          <>
            Web Developer in{" "}
            <em className="italic text-accent">{location.city}.</em>
          </>
        }
        lede={location.tagline}
        backgroundImage={location.heroImage}
      />

      {/* Main Content */}
      <section className="container py-20">
        <div className="grid grid-cols-[1.1fr_.9fr] gap-16 items-start max-[980px]:grid-cols-1">
          {/* Left: Content */}
          <div>
            <p className="serif text-[clamp(19px,2vw,23px)] leading-[1.55] text-ink tracking-tight mb-8">
              {location.content.intro}
            </p>

            <h2 className="serif text-[clamp(28px,3.4vw,38px)] leading-[1.05] tracking-tight m-0 mb-6">
              Why work with <em className="italic text-accent">me?</em>
            </h2>

            <ul className="flex flex-col gap-4 mb-10">
              {location.content.whyMe.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-4 items-start text-[15.5px] text-ink-2 leading-[1.55]"
                >
                  <span className="w-6 h-6 rounded-full bg-accent/20 border border-accent/30 grid place-items-center text-accent flex-none mt-[2px]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="w-3.5 h-3.5"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <h2 className="serif text-[clamp(28px,3.4vw,38px)] leading-[1.05] tracking-tight m-0 mb-4">
              How we <em className="italic text-accent">work together.</em>
            </h2>
            <p className="text-[15.5px] text-ink-2 leading-[1.6] mb-10">
              {location.content.process}
            </p>

            {/* Services offered */}
            <h3 className="serif text-[24px] leading-[1.1] tracking-tight m-0 mb-4">
              Services for {location.city} businesses
            </h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {location.services.map((service) => (
                <span
                  key={service}
                  className="px-4 py-2 rounded-pill bg-white/[.06] border border-white/10 text-[13.5px] text-ink-2"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-3 flex-wrap">
              <Button variant="primary" href="/contact" showChevron>
                Get a free quote
              </Button>
              <Button variant="whatsapp" href="https://wa.me/919746220043">
                WhatsApp me
              </Button>
            </div>
          </div>

          {/* Right: Stats + Info Cards */}
          <div className="flex flex-col gap-[14px]">
            {/* Stats Card */}
            <Glass className="p-7">
              <h3 className="serif text-[22px] leading-[1.1] tracking-tight m-0 mb-5">
                {location.city} <em className="italic text-accent">at a glance.</em>
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-2xl bg-white/[.04] border border-white/8">
                  <div className="serif text-[32px] leading-none tracking-tight text-ink">
                    {location.stats.clients}
                  </div>
                  <div className="mono text-[10px] uppercase tracking-[.12em] text-muted mt-2">
                    Clients
                  </div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-white/[.04] border border-white/8">
                  <div className="serif text-[32px] leading-none tracking-tight text-ink">
                    {location.stats.projects}
                  </div>
                  <div className="mono text-[10px] uppercase tracking-[.12em] text-muted mt-2">
                    Projects
                  </div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-white/[.04] border border-white/8">
                  <div className="serif text-[32px] leading-none tracking-tight text-ink">
                    {location.stats.years}
                  </div>
                  <div className="mono text-[10px] uppercase tracking-[.12em] text-muted mt-2">
                    Years
                  </div>
                </div>
              </div>
            </Glass>

            {/* Timezone Card */}
            <Glass className="p-7">
              <h3 className="serif text-[22px] leading-[1.1] tracking-tight m-0 mb-4">
                Timezone <em className="italic text-accent">overlap.</em>
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center py-3 border-b border-dashed border-white/10">
                  <span className="text-[14px] text-ink-2">Your timezone</span>
                  <span className="text-[14px] text-ink font-medium">
                    {location.timezone}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-dashed border-white/10">
                  <span className="text-[14px] text-ink-2">Offset</span>
                  <span className="text-[14px] text-ink font-medium">
                    {location.timezoneOffset}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-[14px] text-ink-2">My timezone</span>
                  <span className="text-[14px] text-ink font-medium">
                    IST (UTC+5:30)
                  </span>
                </div>
              </div>
            </Glass>

            {/* Client Types Card */}
            <Glass className="p-7">
              <h3 className="serif text-[22px] leading-[1.1] tracking-tight m-0 mb-4">
                Clients I work <em className="italic text-accent">with.</em>
              </h3>
              <div className="flex flex-wrap gap-2">
                {location.clientTypes.map((type) => (
                  <span
                    key={type}
                    className="px-3 py-[6px] rounded-pill bg-white/[.06] border border-white/10 text-[12.5px] text-ink-2"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </Glass>

            {/* Testimonial Card */}
            {location.testimonial && (
              <Glass variant="warm" className="p-7">
                <div className="text-warm mono text-sm tracking-[.2em] mb-4">
                  ★★★★★
                </div>
                <blockquote className="serif text-[18px] leading-[1.45] tracking-tight text-ink italic m-0 mb-5">
                  "{location.testimonial.quote}"
                </blockquote>
                <cite className="flex flex-col not-italic">
                  <strong className="text-[14px] font-medium text-ink">
                    {location.testimonial.name}
                  </strong>
                  <span className="text-[13px] text-muted mt-1">
                    {location.testimonial.role}
                  </span>
                </cite>
              </Glass>
            )}
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-20 bg-bg-2 ">
        <div className="container">
          <div className="flex gap-12 items-end justify-between mb-10 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6">
            <div className="max-w-[64ch]">
              <div className="eyebrow mb-4 inline-block">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
                &nbsp;&nbsp;Also serving
              </div>
              <h2 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0">
                Other <em className="italic text-ink-2">locations.</em>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-[14px] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
            {locations
              .filter((loc) => loc.slug !== location.slug)
              .map((loc) => (
                <a
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group block"
                >
                  <Glass className="p-0 overflow-hidden flex flex-col min-h-[280px]">
                    <div
                      className="h-[140px] bg-cover bg-center transition-transform duration-[1.2s] group-hover:scale-[1.06]"
                      style={{ backgroundImage: `url('${loc.heroImage}')` }}
                    />
                    <div className="p-5 flex flex-col gap-2 flex-1">
                      <span className="mono text-[10.5px] uppercase tracking-[.12em] text-accent">
                        {loc.flag} {loc.country}
                      </span>
                      <h4 className="serif text-[22px] leading-[1.1] tracking-tight m-0">
                        {loc.city}
                      </h4>
                      <p className="text-[13.5px] text-ink-2 leading-[1.45] m-0 mt-1">
                        {loc.stats.clients} clients · {loc.stats.projects} projects
                      </p>
                      <div className="mt-auto pt-3 border-t border-dashed border-white/10 mono text-[11px] text-accent">
                        View details →
                      </div>
                    </div>
                  </Glass>
                </a>
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
              Let's build something{" "}
              <em className="italic text-ink-2">great together.</em>
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
