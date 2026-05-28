import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { PageHero } from "@/components/PageHero";
import { Glass } from "@/components/Glass";
import { Button } from "@/components/Button";
import { services } from "@/data/services";

export const metadata = {
  title: "Freelance Web Developer in UAE | React & Next.js Expert | Akshay V T",
  description: "Trusted freelance web developer serving UAE, Dubai, Abu Dhabi & Sharjah. Fast, SEO-optimized websites for UAE businesses. 6+ years experience. Free consultation.",
};

export default function UAEPage() {
  const topServices = services.slice(0, 8);

  return (
    <>
      <Nav />

      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "UAE" }]}
        eyebrow="Freelance Web Developer · UAE"
        title={
          <>
            Freelance Web Developer <em className="italic text-ink-2">across the UAE</em>
          </>
        }
        lede="I serve businesses across Dubai, Abu Dhabi, Sharjah, Ajman, and the wider UAE. Fast, SEO-optimized websites for local businesses, consultancies, e-commerce stores, and SaaS companies."
        backgroundImage="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 mb-16 max-[768px]:grid-cols-1">
            <Glass className="p-10">
              <h2 className="serif text-[28px] mb-4">Serving UAE Emirates</h2>
              <ul className="text-ink-2 text-[15px] space-y-3">
                <li>🏙️ <strong>Dubai</strong> - The digital hub</li>
                <li>🏢 <strong>Abu Dhabi</strong> - Government & corporate</li>
                <li>🛍️ <strong>Sharjah</strong> - Growing e-commerce</li>
                <li>🏘️ <strong>Ajman, Fujairah, Umm Al Quwain, Ras Al Khaimah</strong> - Local businesses</li>
              </ul>
            </Glass>

            <Glass className="p-10">
              <h2 className="serif text-[28px] mb-4">UAE-Specific Expertise</h2>
              <ul className="text-ink-2 text-[15px] space-y-3">
                <li>✅ Local market SEO (UAE keywords, local ranking)</li>
                <li>✅ Arabic/English bilingual sites</li>
                <li>✅ UAE payment integrations (PayFort, Telr)</li>
                <li>✅ WhatsApp-first communication & integration</li>
                <li>✅ Mobile-optimized for high UAE mobile usage</li>
              </ul>
            </Glass>
          </div>

          <Glass className="p-12 mb-16 text-center">
            <h2 className="serif text-[32px] mb-6">Ready to Build Your UAE Website?</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="primary" href="/contact" showChevron>
                Get a Free Quote
              </Button>
              <Button variant="ghost" href="https://wa.me/919746220043">
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
