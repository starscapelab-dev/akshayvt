import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Glass } from "@/components/Glass";
import { Chip } from "@/components/Chip";
import { Button } from "@/components/Button";
import { serviceDetails, defaultServiceDetail } from "@/data/serviceDetails";

// Use dynamic rendering instead of static generation to avoid build memory issues
export const dynamic = 'force-dynamic';

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  // Get service details or use default template
  const service = serviceDetails[params.id] || defaultServiceDetail;

  return (
    <>
      <Nav />

      {/* Service Hero */}
      <header className="relative min-h-[720px] pt-[168px] pb-[60px] overflow-hidden">
        <div
          className="absolute inset-0 z-[-2]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(111,168,255,.18), transparent 60%), linear-gradient(180deg, #06070A 0%, #0A0F1C 60%, #06070A 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-[-1] bg-cover bg-center opacity-[0.42]"
          style={{
            backgroundImage: `url('${service.image}')`,
            backgroundPosition: "center 30%",
            maskImage:
              "linear-gradient(180deg, transparent 0%, #000 20%, #000 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 0%, #000 20%, #000 70%, transparent 100%)",
          }}
        />

        <div className="container">
          <div className="grid grid-cols-[1.2fr_1fr] gap-12 items-end max-[980px]:grid-cols-1">
            {/* Left: Service Info */}
            <div>
              <div className="flex items-center gap-2 text-[13px] mb-6">
                <a href="/" className="text-muted hover:text-ink transition-colors">
                  Home
                </a>
                <span className="text-muted">/</span>
                <a href="/services" className="text-muted hover:text-ink transition-colors">
                  Services
                </a>
                <span className="text-muted">/</span>
                <span className="text-ink-2">{service.id}</span>
              </div>

              <div className="eyebrow mb-4 inline-block">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
                &nbsp;&nbsp;Service · {service.id}
              </div>

              <h1 className="serif text-[clamp(48px,6vw,68px)] leading-[1.0] tracking-[-.02em] m-0 mb-6">
                {service.title}
              </h1>

              <p className="text-[clamp(18px,2vw,22px)] leading-[1.5] text-ink-2 m-0 mb-8 max-w-[48ch]">
                {service.tagline}
              </p>

              <div className="flex gap-3 flex-wrap">
                <Button variant="primary" href="/contact" showChevron>
                  Get a Quote
                </Button>
                <Button variant="ghost" href="https://wa.me/919746220043">
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            {/* Right: Tech Stack Card */}
            <Glass className="p-6">
              <h4 className="mono text-[11px] font-medium uppercase tracking-[.14em] text-muted m-0 mb-4">
                Tech stack
              </h4>
              {service.techStack.map((stack, i) => (
                <div key={i} className={i > 0 ? "border-t border-dashed border-white/10 pt-[18px] mt-[18px]" : ""}>
                  <div className="text-[13px] font-medium text-ink mb-2">{stack.category}</div>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item, j) => (
                      <Chip key={j} variant="default">
                        {item}
                      </Chip>
                    ))}
                  </div>
                </div>
              ))}
            </Glass>
          </div>

          {/* Trust Bar */}
          <Glass
            as="div"
            className="grid grid-cols-4 mt-8 rounded-[var(--radius)] overflow-hidden max-[720px]:grid-cols-2"
          >
            <div className="px-6 py-[22px] border-r border-white/[.06] max-[720px]:last:border-r-0">
              <div className="serif text-[28px] leading-none tracking-[-.02em]">6+</div>
              <div className="mono text-[11px] text-muted uppercase tracking-[.08em] mt-1.5">
                Years exp
              </div>
            </div>
            <div className="px-6 py-[22px] border-r border-white/[.06] max-[720px]:border-r-0">
              <div className="serif text-[28px] leading-none tracking-[-.02em]">50+</div>
              <div className="mono text-[11px] text-muted uppercase tracking-[.08em] mt-1.5">
                Projects
              </div>
            </div>
            <div className="px-6 py-[22px] border-r border-white/[.06]">
              <div className="serif text-[28px] leading-none tracking-[-.02em]">90+</div>
              <div className="mono text-[11px] text-muted uppercase tracking-[.08em] mt-1.5">
                Lighthouse
              </div>
            </div>
            <div className="px-6 py-[22px]">
              <div className="serif text-[28px] leading-none tracking-[-.02em]">&lt;24h</div>
              <div className="mono text-[11px] text-muted uppercase tracking-[.08em] mt-1.5">
                Response
              </div>
            </div>
          </Glass>
        </div>
      </header>

      {/* What You Get */}
      <section className="container py-20">
        <div className="grid grid-cols-[320px_1fr] gap-14 items-start max-[980px]:grid-cols-1 max-[980px]:gap-8">
          <div className="sticky top-[110px]">
            <div className="eyebrow mb-3">What's included</div>
            <h2 className="serif text-[clamp(32px,4vw,48px)] leading-[1.0] tracking-[-.02em] m-0">
              What you <em className="italic text-accent">get</em>
            </h2>
          </div>

          <div>
            <p className="text-[17px] leading-[1.7] text-ink-2 mb-8 max-w-[64ch]">
              {service.description}
            </p>

            <ul className="space-y-3">
              {service.whatYouGet.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green flex-none mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span className="text-[16px] leading-[1.6] text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-bg-2 border-t border-b border-line-soft py-20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="eyebrow mb-4 inline-block">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
              &nbsp;&nbsp;How it works
            </div>
            <h2 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0">
              My process
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-[14px] max-w-[1200px] mx-auto max-[900px]:grid-cols-1">
            {service.process.map((step, i) => (
              <Glass key={i} className="px-7 py-8 flex flex-col">
                <div className="serif italic text-[48px] leading-none text-accent mb-4">
                  {step.step}
                </div>
                <h3 className="text-[22px] font-medium leading-[1.2] tracking-[-.01em] m-0 mb-3">
                  {step.title}
                </h3>
                <p className="text-[15px] text-ink-2 leading-[1.6] m-0">{step.description}</p>
              </Glass>
            ))}
          </div>
        </div>
      </section>

      {/* Get Quote CTA */}
      <section className="container py-20">
        <div className="max-w-[800px] mx-auto">
          <Glass className="p-10 max-[640px]:p-6 text-center">
            <div className="eyebrow mb-4 inline-block">Ready to start?</div>
            <h2 className="serif text-[clamp(28px,4vw,42px)] leading-[1.1] tracking-tight m-0 mb-4">
              Get a free quote for your project
            </h2>
            <p className="text-[15px] text-ink-2 leading-[1.6] m-0 mb-8 max-w-[50ch] mx-auto">
              Every project is different. Let's discuss your specific needs and I'll provide a detailed, fixed-price quote with no surprises.
            </p>
            <div className="flex gap-3 justify-center max-[640px]:flex-col">
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

      {/* FAQs */}
      <section className="bg-bg-2 border-t border-line-soft py-20">
        <div className="container max-w-[900px]">
          <div className="text-center mb-12">
            <div className="eyebrow mb-4 inline-block">Common questions</div>
            <h2 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0">
              FAQ
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {service.faqs.map((faq, i) => (
              <details key={i} className="group" open={i === 0}>
                <Glass
                  as="summary"
                  className="px-6 py-5 cursor-pointer list-none flex items-center justify-between gap-4 transition-all duration-200 group-open:pb-0"
                >
                  <span className="text-[15px] font-medium">{faq.q}</span>
                  <span className="w-6 h-6 rounded-full bg-white/8 border border-white/10 grid place-items-center text-muted text-xl transition-all duration-200 group-open:bg-accent group-open:border-accent group-open:text-bg group-open:rotate-45 flex-none">
                    +
                  </span>
                </Glass>
                <div className="px-6 pb-5 pt-3 text-[14.5px] text-ink-2 leading-[1.6]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
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
            <h2 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0 mb-5">
              Ready to get started?
            </h2>
            <p className="text-[clamp(17px,1.6vw,21px)] leading-[1.5] text-ink-2 mb-8">
              Let's discuss your project. Free consultation, no pressure, and I'll give you an honest assessment of what it'll take.
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
