import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { PageHero } from "@/components/PageHero";
import { Glass } from "@/components/Glass";
import { Button } from "@/components/Button";

export const metadata = {
  title: "Freelance Web Developer in India | React & Next.js Expert | Akshay V T",
  description: "Freelance web developer serving India, Asia & worldwide. 6+ years building fast websites for Indian startups, businesses & entrepreneurs. Free consultation.",
};

export default function IndiaPage() {
  return (
    <>
      <Nav />

      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "India" }]}
        eyebrow="Serving India & Asia"
        title={
          <>
            Freelance Web Developer <em className="italic text-ink-2">for Indian Businesses</em>
          </>
        }
        lede="I serve Indian startups, small businesses, and entrepreneurs across major metros and beyond. Affordable, direct developer pricing. No agency markup. Just clean code, fast sites, and genuine partnership."
        backgroundImage="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-16 mb-16">
            <div className="grid grid-cols-2 gap-8 max-[768px]:grid-cols-1">
              <Glass className="p-10">
                <h2 className="serif text-[28px] mb-4">India Market Expertise</h2>
                <ul className="text-ink-2 text-[15px] space-y-3">
                  <li>🏙️ <strong>Bangalore, Delhi, Mumbai, Chennai</strong> - Tech hubs</li>
                  <li>🚀 <strong>Startups & Founders</strong> - Bootstrap-friendly pricing</li>
                  <li>💼 <strong>B2B Services</strong> - B2B lead generation sites</li>
                  <li>🛒 <strong>E-Commerce</strong> - Indian payment integrations</li>
                </ul>
              </Glass>

              <Glass className="p-10">
                <h2 className="serif text-[28px] mb-4">Why Hire Me from India</h2>
                <ul className="text-ink-2 text-[15px] space-y-3">
                  <li>✅ Direct developer — no intermediaries</li>
                  <li>✅ IST timezone — easy collaboration</li>
                  <li>✅ Affordable — no agency overhead</li>
                  <li>✅ Indian payment options (GPay, PayPal)</li>
                  <li>✅ Understand Indian startup ecosystem</li>
                </ul>
              </Glass>
            </div>

            <Glass className="p-12">
              <h2 className="serif text-[32px] mb-6">Services for Indian Startups & Businesses</h2>
              <div className="grid grid-cols-2 gap-6 max-[680px]:grid-cols-1 text-ink-2 text-[15px]">
                <div>
                  <h3 className="text-ink font-medium mb-2">Startup Websites</h3>
                  <p>MVP landing pages, pitch decks on the web, credible launch presence — all affordable for bootstrapped startups.</p>
                </div>
                <div>
                  <h3 className="text-ink font-medium mb-2">E-Commerce & D2C</h3>
                  <p>Razorpay, Instamojo, and direct bank transfers. Full Indian payment ecosystem integration.</p>
                </div>
                <div>
                  <h3 className="text-ink font-medium mb-2">Local SEO</h3>
                  <p>Rank for Indian keywords. Services, SaaS, or product-based — I optimize for Google India.</p>
                </div>
                <div>
                  <h3 className="text-ink font-medium mb-2">WhatsApp Business Integration</h3>
                  <p>Customers are on WhatsApp. Integrate messaging, lead capture, and customer support via WhatsApp.</p>
                </div>
              </div>
            </Glass>

            <Glass className="p-12 text-center">
              <h2 className="serif text-[clamp(28px,4vw,42px)] mb-6">Let's Build Together</h2>
              <p className="text-ink-2 mb-8 max-w-[60ch] mx-auto">Direct partnership with a developer who understands Indian business. No middlemen, no complexity — just straightforward web development.</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button variant="primary" href="/contact" showChevron>
                  Free Consultation
                </Button>
                <Button variant="ghost" href="https://wa.me/919746220043">
                  Chat on WhatsApp
                </Button>
              </div>
            </Glass>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
