import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Glass } from "@/components/Glass";
import { Button } from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Message Received",
  description: "Thank you for reaching out. I'll get back to you within 24 hours.",
  robots: "noindex, nofollow",
};

export default function ThankYouPage() {
  return (
    <>
      <Nav />

      <section className="min-h-[80vh] flex items-center justify-center py-20">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(66,228,122,.12), transparent 60%)",
          }}
        />

        <div className="container relative z-[1]">
          <Glass className="p-12 max-[600px]:p-8 text-center max-w-[700px] mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green/20 border border-green/30 mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8 text-green">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </div>

            <h1 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0 mb-5">
              Message <em className="italic text-green">received.</em>
            </h1>

            <p className="text-[clamp(17px,1.6vw,21px)] leading-[1.5] text-ink-2 mb-8 max-w-[48ch] mx-auto">
              Thank you for reaching out. I've received your message and will get back to you within 24 hours — usually within 3.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center justify-center gap-3 text-sm text-ink-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_8px_#42E47A]" />
                Your message has been delivered to my inbox
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-ink-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#6FA8FF]" />
                No newsletters or spam — just a personal reply from me
              </div>
            </div>

            <div className="pt-8 border-t border-dashed border-white/10">
              <p className="text-sm text-muted mb-4">
                Need something urgent?
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button variant="whatsapp" href="https://wa.me/919746220043">
                  WhatsApp me instead
                </Button>
                <Button variant="outline" href="/">
                  Back to home
                </Button>
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
