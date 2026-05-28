"use client";

import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Glass } from "@/components/Glass";
import { Button } from "@/components/Button";
import { projects, categories } from "@/data/portfolio";

type CategoryKey = "all" | "custom" | "shopify" | "australia";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <Nav />

      {/* Hero Section */}
      <header className="relative min-h-[520px] pt-[168px] pb-[60px] overflow-hidden">
        <div
          className="absolute inset-0 z-[-2]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(111,168,255,.18), transparent 60%), linear-gradient(180deg, #06070A 0%, #0A0F1C 60%, #06070A 100%)",
          }}
        />

        <div className="container">
          <div className="max-w-[720px]">
            <div className="flex items-center gap-2 text-[13px] mb-6">
              <a href="/" className="text-muted hover:text-ink transition-colors">
                Home
              </a>
              <span className="text-muted">/</span>
              <span className="text-ink-2">Portfolio</span>
            </div>

            <div className="eyebrow mb-4 inline-block">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
              &nbsp;&nbsp;{projects.length}+ projects shipped
            </div>

            <h1 className="serif text-[clamp(48px,6vw,72px)] leading-[1.0] tracking-[-.02em] m-0 mb-6">
              Work that speaks <em className="italic text-ink-2">for itself.</em>
            </h1>

            <p className="text-[clamp(18px,2vw,22px)] leading-[1.5] text-ink-2 m-0 mb-8 max-w-[56ch]">
              From custom web applications to Shopify stores, here's a selection of projects I've built for clients across UAE, India, Australia, and beyond.
            </p>

            <div className="flex gap-3 flex-wrap">
              <Button variant="primary" href="/contact" showChevron>
                Start Your Project
              </Button>
              <Button variant="ghost" href="https://wa.me/919746220043">
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <section className="container py-8 border-b border-white/[.06]">
        <div className="flex gap-2 flex-wrap">
          {(Object.keys(categories) as CategoryKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-5 py-[10px] rounded-pill text-[13.5px] font-medium transition-all duration-300 ${
                activeCategory === key
                  ? "bg-gradient-to-b from-white to-[#d9e2f5] text-bg shadow-btn-primary"
                  : "bg-white/6 border border-white/10 text-ink-2 hover:bg-white/10 hover:text-ink"
              }`}
            >
              {categories[key].label}
              <span className="ml-2 opacity-60">({categories[key].count})</span>
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <main className="container py-16">
        <div className="grid grid-cols-2 gap-6 max-[900px]:grid-cols-1">
          {filteredProjects.map((project) => (
            <a
              key={project.slug}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Glass
                hover={false}
                className="overflow-hidden transition-all duration-500 hover:-translate-y-[5px] hover:shadow-glass-hover hover:border-white/25"
              >
                {/* Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden bg-bg-2">
                  <img
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-pill bg-accent/90 text-bg mono text-[10px] font-medium uppercase tracking-wider">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 rounded-pill bg-black/60 backdrop-blur-sm border border-white/10 text-ink-2 mono text-[10px] uppercase tracking-wider">
                      {project.category === "shopify" ? "Shopify" : project.category === "australia" ? "Australia" : "Custom"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-[20px] font-medium tracking-tight m-0 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-muted flex-none transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>

                  <p className="text-[14px] text-ink-2 leading-[1.6] m-0 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/6 border border-white/8 text-[11px] text-muted mono tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Glass>
            </a>
          ))}
        </div>
      </main>

      {/* CTA Section */}
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
            <div className="eyebrow mb-4 inline-block">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
              &nbsp;&nbsp;Ready to build?
            </div>
            <h2 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0 mb-5">
              Let's create something <em className="italic text-ink-2">worth showing.</em>
            </h2>
            <p className="text-[clamp(17px,1.6vw,21px)] leading-[1.5] text-ink-2 mb-8">
              Every project here started with a conversation. Tell me about yours — I'll share honest feedback on what it'll take to build it right.
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
