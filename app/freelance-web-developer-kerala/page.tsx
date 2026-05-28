import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { PageHero } from "@/components/PageHero";
import { Glass } from "@/components/Glass";
import { Button } from "@/components/Button";

export const metadata = {
  title: "Freelance Web Developer in Kerala | React & Next.js Expert | Akshay V T",
  description: "Freelance web developer based in Kerala, India. 6+ years building fast, SEO-optimized websites for Kerala businesses and Gulf NRI entrepreneurs. Free consultation.",
};

export default function KeralaPage() {
  return (
    <>
      <Nav />

      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Kerala" }]}
        eyebrow="Based in Kerala · Serving Kerala & Global"
        title={
          <>
            Freelance Web Developer <em className="italic text-ink-2">from Kerala, India</em>
          </>
        }
        lede="I'm based in Kerala and serve Kerala businesses, NRI entrepreneurs, and clients globally. Whether you're in Kochi, Thiruvananthapuram, Thrissur, or Calicut — I build websites that attract customers and generate business."
        backgroundImage="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-16 mb-16">
            <Glass className="p-12 max-[640px]:p-6">
              <h2 className="serif text-[32px] mb-6">Kerala Market Expertise</h2>
              <div className="grid grid-cols-2 gap-8 max-[680px]:grid-cols-1 text-ink-2 text-[15px] leading-[1.7]">
                <div>
                  <h3 className="text-ink font-medium mb-2">Kerala Businesses</h3>
                  <p>I understand the Kerala business landscape — spice exporters, IT consultants, tourism businesses, hospitality, and manufacturing.</p>
                </div>
                <div>
                  <h3 className="text-ink font-medium mb-2">Gulf NRI Entrepreneurs</h3>
                  <p>If you're a Kerala native working in UAE/Gulf, I specialize in helping you build businesses that reach both local and global markets.</p>
                </div>
                <div>
                  <h3 className="text-ink font-medium mb-2">Local SEO for Kerala</h3>
                  <p>Rank for Kerala-specific keywords. I optimize for local search + national visibility, whether you're in Kochi or Thiruvananthapuram.</p>
                </div>
                <div>
                  <h3 className="text-ink font-medium mb-2">Cost-Effective Solutions</h3>
                  <p>No agency markup. Direct developer pricing. I invest in your business because I'm genuinely interested in Kerala's startup ecosystem.</p>
                </div>
              </div>
            </Glass>

            <Glass className="p-12 text-center max-[640px]:p-6">
              <h2 className="serif text-[clamp(28px,4vw,42px)] mb-6">Let's Build Your Website</h2>
              <p className="text-ink-2 mb-8">I'm available for projects in Kerala and worldwide. Free consultation — no commitment.</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button variant="primary" href="/contact" showChevron>
                  Start Project Discussion
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
