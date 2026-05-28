import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { PageHero } from "@/components/PageHero";
import { Glass } from "@/components/Glass";
import { Button } from "@/components/Button";
import { services } from "@/data/services";
import { faqs } from "@/data/faq";
import { Chip } from "@/components/Chip";

export const metadata = {
  title: "Freelance Web Developer in Dubai | React & Next.js Expert | Akshay V T",
  description: "Looking for a trusted freelance web developer in Dubai? Akshay V T builds fast, SEO-optimized websites for Dubai businesses. 6+ years experience. Free consultation.",
  keywords: "web developer Dubai, freelance developer UAE, Next.js developer Dubai, React developer Dubai"
};

export default function DubaiPage() {
  const topServices = services.slice(0, 8);

  return (
    <>
      <Nav />

      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Dubai" }]}
        eyebrow="Freelance Web Developer · Dubai, UAE"
        title={
          <>
            Freelance Web Developer <em className="italic text-ink-2">in Dubai</em>
          </>
        }
        lede="Dubai businesses move fast — and your website needs to keep up. I'm a freelance web developer with 6+ years of experience working with clients across Dubai, Abu Dhabi, and the wider UAE. I build modern, SEO-optimized websites that help UAE businesses attract customers and grow online."
        backgroundImage="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Main Content */}
      <section className="py-20 border-b border-white/[.06]">
        <div className="container">
          <div className="grid grid-cols-1 gap-16 mb-16">
            {/* Why Dubai Businesses Work With Me */}
            <Glass className="p-12 max-[640px]:p-6">
              <h2 className="serif text-[clamp(32px,4vw,48px)] leading-[1.06] tracking-tight m-0 mb-6">
                Why Dubai Businesses Work With Me
              </h2>
              <div className="grid grid-cols-2 gap-8 max-[680px]:grid-cols-1 text-ink-2 text-[15px] leading-[1.7]">
                <div>
                  <h3 className="text-ink font-medium mb-2">Remote-First, UAE Timezone</h3>
                  <p>I work with Dubai, Abu Dhabi, and Sharjah businesses in your timezone. Response times are quick — WhatsApp during office hours, email always available.</p>
                </div>
                <div>
                  <h3 className="text-ink font-medium mb-2">Bilingual Content</h3>
                  <p>I can build websites with Arabic content, Arabic/English toggles, and culturally appropriate design. Your audience speaks Arabic — your website should too.</p>
                </div>
                <div>
                  <h3 className="text-ink font-medium mb-2">UAE Market SEO</h3>
                  <p>I understand how to optimize for Gulf region keywords. Higher search volumes in UAE/Dubai mean better traffic potential than most global sites.</p>
                </div>
                <div>
                  <h3 className="text-ink font-medium mb-2">WhatsApp Integration & Community</h3>
                  <p>Your customers are on WhatsApp. I integrate WhatsApp chatbots, lead capture, and direct messaging into your website.</p>
                </div>
                <div>
                  <h3 className="text-ink font-medium mb-2">Mobile-First (Very Important for UAE)</h3>
                  <p>UAE mobile usage is among the highest globally. Every site I build is mobile-first, with performance optimized for 4G speeds.</p>
                </div>
                <div>
                  <h3 className="text-ink font-medium mb-2">PayFort, Telr & Local Payment Integrations</h3>
                  <p>I integrate local UAE payment processors. No need for international workarounds — full local payment support.</p>
                </div>
              </div>
            </Glass>

            {/* Services for Dubai Clients */}
            <div>
              <h2 className="serif text-[32px] leading-[1.06] tracking-tight mb-8">
                Services for Dubai Clients
              </h2>
              <div className="grid grid-cols-2 gap-4 max-[768px]:grid-cols-1">
                {topServices.map((service) => (
                  <Glass key={service.id} className="p-6 hover:bg-white/[.06] transition-colors">
                    <h3 className="text-ink font-medium mb-2">{service.title}</h3>
                    <p className="text-ink-2 text-[14px]">{service.description}</p>
                  </Glass>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="ghost" href="/services">
                  View All 30 Services
                </Button>
              </div>
            </div>

            {/* Understanding the Dubai Market */}
            <Glass className="p-12 max-[640px]:p-6">
              <h2 className="serif text-[32px] leading-[1.06] tracking-tight m-0 mb-6">
                Understanding the Dubai Market
              </h2>
              <div className="text-ink-2 text-[15px] leading-[1.7] space-y-4">
                <p>Dubai is one of the most competitive digital markets in the world. High-speed internet, mobile-first users, and constant business competition mean your website needs to stand out.</p>
                <p>Most successful Dubai businesses understand that a website isn't an afterthought — it's a revenue channel. I've built sites that help consultants attract high-ticket clients, e-commerce stores that convert, and SaaS platforms that scale.</p>
                <p>Whether you're a boutique in Deira, a consultancy in Marina, or a startup in DTEC — I build websites that work for your market.</p>
              </div>
            </Glass>
          </div>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="serif text-[32px] leading-[1.06] tracking-tight mb-8">
              FAQ for Dubai Clients
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Do you work with clients in Dubai and Abu Dhabi?",
                  a: "Yes — most of my current work is for clients in Dubai, Abu Dhabi, and Sharjah. Remote, WhatsApp-first, and timezone-friendly (UAE and India sit within an hour of each other)."
                },
                {
                  q: "What's the typical timeline for a Dubai website?",
                  a: "A standard business website takes 5–10 working days. E-commerce or complex web apps may take 2–4 weeks depending on scope. I always commit to a timeline upfront, in writing."
                },
                {
                  q: "Do you integrate UAE payment methods?",
                  a: "Yes. I integrate PayFort, Telr, and other local UAE payment processors. Your customers can pay with their local methods without friction."
                },
                {
                  q: "Can you help with Arabic content?",
                  a: "I can build Arabic layouts and integrate Arabic/English toggles. For translation, I recommend a professional translator, but I can coordinate the full implementation."
                },
                {
                  q: "How much does a website cost in Dubai?",
                  a: "Pricing depends on complexity. Simple business site: AED 6,000-15,000. E-commerce: AED 12,000-30,000. Contact for a free quote based on your specific needs."
                }
              ].map((faq, i) => (
                <Glass key={i} className="p-6">
                  <h3 className="text-ink font-medium mb-2">{faq.q}</h3>
                  <p className="text-ink-2 text-[14px]">{faq.a}</p>
                </Glass>
              ))}
            </div>
          </section>

          {/* CTA */}
          <Glass className="p-12 text-center max-[640px]:p-6">
            <h2 className="serif text-[clamp(28px,4vw,42px)] leading-[1.1] tracking-tight mb-4">
              Ready to Build Your Dubai Website?
            </h2>
            <p className="text-ink-2 text-[15px] mb-8 max-w-[60ch] mx-auto">
              Free consultation. Tell me what you need and I'll get back to you within 24 hours (usually much faster via WhatsApp).
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="primary" href="/contact" showChevron>
                Start a Consultation
              </Button>
              <Button variant="ghost" href="https://wa.me/919746220043?text=Hi+Akshay%2C+I+found+your+website+and+I%27m+interested+in+discussing+a+web+project+for+my+Dubai+business.">
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
