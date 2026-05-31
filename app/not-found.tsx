import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Glass } from "@/components/Glass";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <>
      <Nav />

      <section className="min-h-[80vh] flex items-center justify-center py-20">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(244,197,140,.12), transparent 60%)",
          }}
        />

        <div className="container relative z-[1]">
          <Glass className="p-12 max-[600px]:p-8 text-center max-w-[700px] mx-auto">
            <div className="serif text-[80px] max-[600px]:text-[60px] leading-none tracking-tight text-warm mb-4">
              404
            </div>

            <h1 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0 mb-5">
              Page <em className="italic text-warm">not found.</em>
            </h1>

            <p className="text-[clamp(17px,1.6vw,21px)] leading-[1.5] text-ink-2 mb-8 max-w-[48ch] mx-auto">
              The page you're looking for doesn't exist or has been moved. But don't worry — there's plenty more to explore.
            </p>

            <div className="flex gap-3 justify-center flex-wrap mb-8">
              <Button variant="primary" href="/" showChevron>
                Back to home
              </Button>
              <Button variant="outline" href="/contact">
                Contact me
              </Button>
            </div>

            <div className="pt-8 border-t border-dashed border-white/10">
              <p className="text-sm text-muted mb-4">
                Popular pages:
              </p>
              <div className="flex gap-2 justify-center flex-wrap text-sm">
                <a href="/services" className="text-accent hover:underline">Services</a>
                <span className="text-muted">·</span>
                <a href="/portfolio" className="text-accent hover:underline">Portfolio</a>
                <span className="text-muted">·</span>
                <a href="/blog" className="text-accent hover:underline">Blog</a>
                <span className="text-muted">·</span>
                <a href="/locations" className="text-accent hover:underline">Locations</a>
                <span className="text-muted">·</span>
                <a href="/about" className="text-accent hover:underline">About</a>
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
