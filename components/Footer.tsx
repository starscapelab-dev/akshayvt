export function Footer() {
  return (
    <footer className="border-t border-white/[.06] pt-20 pb-10 bg-bg relative">
      <div className="container">
        <div className="grid grid-cols-[1.6fr_.8fr_.8fr_.8fr_1fr] gap-10 mb-[60px] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          <div>
            <div className="serif text-[34px] tracking-tight leading-none mb-3">
              Akshay&nbsp;<em className="italic text-accent">V&nbsp;T</em>
            </div>
            <p className="text-ink-2 text-[14.5px] leading-[1.6] max-w-[36ch]">
              A freelance web developer with 6+ years building React &amp; Next.js sites for
              clients in UAE, India and worldwide.
            </p>
            <div className="serif italic text-[17px] text-ink-2 mt-[18px]">
              "Reliable. Fast. Always available."
            </div>
          </div>

          <div className="footer-col">
            <h4 className="mono text-[11px] uppercase tracking-[.14em] text-muted m-0 mb-[18px] font-medium">
              Services
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-[11px]">
              <li>
                <a
                  href="/services"
                  className="text-ink-2 text-sm transition-colors duration-200 hover:text-ink"
                >
                  Custom Websites
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-ink-2 text-sm transition-colors duration-200 hover:text-ink"
                >
                  Next.js Development
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-ink-2 text-sm transition-colors duration-200 hover:text-ink"
                >
                  E-Commerce
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-ink-2 text-sm transition-colors duration-200 hover:text-ink"
                >
                  SEO Optimization
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-ink-2 text-sm transition-colors duration-200 hover:text-ink"
                >
                  Email Setup
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-ink-2 text-sm transition-colors duration-200 hover:text-ink"
                >
                  View all 36+ →
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="mono text-[11px] uppercase tracking-[.14em] text-muted m-0 mb-[18px] font-medium">
              Locations
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-[11px]">
              <li>
                <a
                  href="/locations/dubai"
                  className="text-ink-2 text-sm transition-colors duration-200 hover:text-ink"
                >
                  Dubai, UAE
                </a>
              </li>
              <li>
                <a
                  href="/locations/kerala"
                  className="text-ink-2 text-sm transition-colors duration-200 hover:text-ink"
                >
                  Kerala, India
                </a>
              </li>
              <li>
                <a
                  href="/locations/sydney"
                  className="text-ink-2 text-sm transition-colors duration-200 hover:text-ink"
                >
                  Sydney, Australia
                </a>
              </li>
              <li>
                <a
                  href="/locations/riyadh"
                  className="text-ink-2 text-sm transition-colors duration-200 hover:text-ink"
                >
                  Riyadh, Saudi Arabia
                </a>
              </li>
              <li>
                <a
                  href="/locations"
                  className="text-ink-2 text-sm transition-colors duration-200 hover:text-ink"
                >
                  View all locations →
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="mono text-[11px] uppercase tracking-[.14em] text-muted m-0 mb-[18px] font-medium">
              Site
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-[11px]">
              <li>
                <a
                  href="/about"
                  className="text-ink-2 text-sm transition-colors duration-200 hover:text-ink"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-ink-2 text-sm transition-colors duration-200 hover:text-ink"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-ink-2 text-sm transition-colors duration-200 hover:text-ink"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-ink-2 text-sm transition-colors duration-200 hover:text-ink"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="mono text-[11px] uppercase tracking-[.14em] text-muted m-0 mb-[18px] font-medium">
              Contact
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-[11px]">
              <li>
                <a
                  href="https://wa.me/919746220043"
                  className="text-ink-2 text-sm transition-colors duration-200 hover:text-ink inline-flex items-center gap-2"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-whatsapp">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@akshayvt.com"
                  className="text-ink-2 text-sm transition-colors duration-200 hover:text-ink inline-flex items-center gap-2"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                  info@akshayvt.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-ink-2 text-sm transition-colors duration-200 hover:text-ink inline-flex items-center gap-2"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#0A66C2]">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.3 18.3V10H5.7v8.3h2.6zM7 8.8a1.6 1.6 0 1 0 0-3.1 1.6 1.6 0 0 0 0 3.1zm11.3 9.5v-4.7c0-2.4-1.3-3.5-3-3.5a2.6 2.6 0 0 0-2.4 1.3V10h-2.6v8.3h2.6v-4.6c0-1.2.2-2.4 1.7-2.4 1.5 0 1.5 1.4 1.5 2.5v4.5h2.2z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-ink-2 text-sm transition-colors duration-200 hover:text-ink inline-flex items-center gap-2"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[.06] pt-[30px] flex items-center justify-center text-[12.5px] text-muted mono">
          <div>© 2026 Akshay V T · Freelance Web Developer · UAE · India · UK · Australia · Worldwide</div>
        </div>
      </div>
    </footer>
  );
}
