"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { PageHero } from "@/components/PageHero";
import { Glass } from "@/components/Glass";
import { Chip } from "@/components/Chip";
import { blogPosts, categories } from "@/data/blog";
import { useState } from "react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <>
      <Nav />

      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        eyebrow="Web dev notes · SEO tips · Freelancing"
        title={
          <>
            Practical notes on building <em className="italic text-ink-2">better websites.</em>
          </>
        }
        lede="No fluff, no filler. Just honest articles about web development, SEO, performance, and what I've learned building sites for clients across UAE, India and Australia."
        backgroundImage="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Topics Filter */}
      <section className="container py-12">
        <div className="flex gap-2 flex-wrap p-[14px] rounded-pill bg-gradient-to-b from-white/6 to-white/2 border border-white/10 backdrop-blur-[14px] w-fit max-w-full overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-pill text-[13px] tracking-[-.005em] border transition-all duration-200 whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-gradient-to-b from-white to-[#d9e2f5] text-bg border-transparent"
                  : "bg-transparent border-transparent text-ink-2 hover:bg-white/6 hover:text-ink"
              }`}
            >
              {category}
              <span className="mono text-[11px] opacity-50 ml-1.5">
                ({category === "All" ? blogPosts.length : blogPosts.filter((p) => p.category === category).length})
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && (
        <section className="container pb-14">
          <a href={`/blog/${featuredPost.slug}`} className="block group">
            <Glass
              as="div"
              className="grid grid-cols-[1.1fr_1fr] gap-0 rounded-[32px] overflow-hidden min-h-[460px] max-[900px]:grid-cols-1"
            >
              {/* Visual */}
              <div
                className="relative overflow-hidden bg-cover bg-center max-[900px]:min-h-[320px]"
                style={{
                  backgroundImage: `url('${featuredPost.image}')`,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(6,7,10,.4) 70%, var(--bg) 100%), linear-gradient(180deg, rgba(6,7,10,.2), rgba(6,7,10,.6))",
                  }}
                />
                {/* Meta tags on image */}
                <div className="absolute top-[22px] left-[22px] flex gap-2 flex-wrap z-[2]">
                  <Chip variant="accent">{featuredPost.category}</Chip>
                  <Chip variant="default">Featured</Chip>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-10 max-[900px]:p-8">
                <div className="mono text-[11px] uppercase tracking-[.14em] text-muted mb-3">
                  {featuredPost.date} · {featuredPost.readTime} read
                </div>
                <h2 className="serif text-[clamp(28px,3.5vw,42px)] leading-[1.1] tracking-[-.02em] m-0 mb-4 group-hover:text-accent transition-colors balance">
                  {featuredPost.title}
                </h2>
                <p className="text-[15px] text-ink-2 leading-[1.6] m-0 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-2 text-accent text-[14px] font-medium group-hover:gap-3 transition-all">
                  Read article
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </Glass>
          </a>
        </section>
      )}

      {/* Blog Grid */}
      <section className="container pb-20">
        <div className="grid grid-cols-3 gap-[14px] max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
          {regularPosts.map((post) => (
            <a key={post.id} href={`/blog/${post.slug}`} className="block group">
              <Glass className="p-0 overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                {/* Image */}
                <div
                  className="relative h-[200px] bg-cover bg-center"
                  style={{ backgroundImage: `url('${post.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/90 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <Chip variant="accent">{post.category}</Chip>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mono text-[11px] uppercase tracking-[.14em] text-muted mb-2">
                    {post.date} · {post.readTime}
                  </div>
                  <h3 className="text-[18px] font-medium leading-[1.3] tracking-[-.01em] m-0 mb-3 group-hover:text-accent transition-colors balance">
                    {post.title}
                  </h3>
                  <p className="text-[14px] text-ink-2 leading-[1.5] m-0 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-ink-2 text-[13px] font-medium group-hover:text-accent group-hover:gap-3 transition-all">
                    Read more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </Glass>
            </a>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-ink-2 text-[18px]">
              No posts found in this category yet. Check back soon!
            </p>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="container pb-20">
        <Glass className="p-12 text-center max-w-[700px] mx-auto">
          <h2 className="serif text-[clamp(32px,4vw,48px)] leading-[1.06] tracking-tight m-0 mb-4">
            Want more web dev tips?
          </h2>
          <p className="text-[17px] leading-[1.5] text-ink-2 mb-6">
            I occasionally send out emails with new articles, freelancing tips, and things I'm learning. No spam, unsubscribe anytime.
          </p>
          <form className="flex gap-3 max-w-[480px] mx-auto max-[560px]:flex-col">
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-sm bg-white/[.04] border border-white/10 text-ink placeholder:text-muted-2 focus:border-accent focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-pill bg-gradient-to-b from-white to-[#d9e2f5] text-bg text-[15px] font-medium tracking-tight shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-px transition-all duration-250 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </Glass>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
