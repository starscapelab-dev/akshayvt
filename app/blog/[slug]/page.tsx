"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Glass } from "@/components/Glass";
import { Chip } from "@/components/Chip";
import { Button } from "@/components/Button";
import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";

// Table of contents items (would be generated from headings in real app)
const tocItems = [
  { id: "why", label: "Why this market is messy" },
  { id: "five", label: "The five questions to ask" },
  { id: "red", label: "Red flags to walk from" },
  { id: "price", label: "What pricing should look like" },
  { id: "whatsapp", label: "The WhatsApp test" },
  { id: "close", label: "Closing the conversation" },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <Nav />

      {/* Article Header */}
      <header className="relative pt-[168px] pb-[60px] overflow-hidden isolate">
        {/* Background gradient */}
        <div
          className="absolute inset-0 z-[-2]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(111,168,255,.20), transparent 60%), linear-gradient(180deg, #06070A 0%, #0A0F1C 60%, #06070A 100%)",
          }}
        />
        {/* Grid background */}
        <div
          className="absolute inset-0 z-[-1] opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 80%)",
          }}
        />

        <div className="container">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[13px] mb-8">
            <a href="/" className="text-muted hover:text-ink transition-colors">
              Home
            </a>
            <span className="text-muted">/</span>
            <a href="/blog" className="text-muted hover:text-ink transition-colors">
              Blog
            </a>
            <span className="text-muted">/</span>
            <span className="text-ink-2">{post.category}</span>
          </nav>

          {/* Article meta */}
          <div className="flex gap-3 items-center flex-wrap mono text-[11.5px] text-muted uppercase tracking-[.08em] mb-7">
            <a href="/blog" className="text-accent">
              {post.category}
            </a>
            <span className="text-muted-2">·</span>
            <span>{post.date}</span>
            <span className="text-muted-2">·</span>
            <span>{post.readTime} read</span>
            <span className="text-muted-2">·</span>
            <span>2,184 words</span>
          </div>

          {/* Title */}
          <h1
            className="serif text-[clamp(38px,5.4vw,72px)] leading-[1.02] tracking-[-.022em] m-0 mb-7 balance max-w-[22ch]"
            style={{
              textWrap: "balance",
            }}
          >
            {post.title.split(" ").map((word, i, arr) => {
              // Make the last 2 words gradient
              if (i >= arr.length - 2) {
                return (
                  <em
                    key={i}
                    className="italic"
                    style={{
                      background: "linear-gradient(120deg, #B69BFF 0%, #6FA8FF 50%, #F4C58C 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {word}{" "}
                  </em>
                );
              }
              return word + " ";
            })}
          </h1>

          {/* Deck/subtitle */}
          <p className="serif italic text-[clamp(19px,1.9vw,24px)] text-ink-2 leading-[1.45] tracking-tight max-w-[58ch] m-0 mb-9">
            {post.excerpt}
          </p>

          {/* Byline */}
          <div className="inline-flex items-center gap-[14px] px-5 py-[14px] rounded-pill bg-gradient-to-b from-white/8 to-white/[.03] border border-white/10 backdrop-blur-[12px]">
            <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#2B3046] to-[#0F121C] border border-white/15 grid place-items-center serif italic text-[18px] text-ink">
              A
            </span>
            <div>
              <b className="block text-sm text-ink font-medium tracking-tight">Akshay V T</b>
              <span className="mono text-[11px] text-muted tracking-[.06em]">
                Freelance Developer · Kerala
              </span>
            </div>
          </div>

          {/* Cover image */}
          <figure
            className="relative mt-9 rounded-[32px] overflow-hidden aspect-[16/8] border border-white/8"
            style={{
              backgroundImage: `url('${post.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
              boxShadow: "0 24px 60px -20px rgba(0,0,0,.55)",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, transparent 60%, rgba(6,7,10,.4) 100%)",
              }}
            />
            <span className="absolute bottom-5 left-[22px] mono text-[11px] text-ink-2 tracking-[.06em] px-[14px] py-2 rounded-pill bg-bg/50 backdrop-blur-[10px] border border-white/10">
              Cover — {post.title.split(" ").slice(0, 3).join(" ")}
            </span>
          </figure>
        </div>
      </header>

      {/* Article Layout: TOC | Content | Share */}
      <main className="grid grid-cols-[200px_minmax(0,720px)_240px] gap-14 max-w-[1280px] mx-auto px-[var(--pad)] py-20 items-start max-[1100px]:grid-cols-[minmax(0,1fr)_240px] max-[820px]:grid-cols-1">
        {/* TOC Sidebar */}
        <aside className="sticky top-[110px] max-[1100px]:hidden">
          <Glass className="p-5">
            <h4 className="mono text-[10.5px] font-medium uppercase tracking-[.14em] text-muted m-0 mb-[14px]">
              On this page
            </h4>
            <ol className="list-none p-0 m-0 flex flex-col gap-2">
              {tocItems.map((item, i) => (
                <li key={item.id} className="flex gap-[10px] text-[13px] leading-[1.4] text-ink-2">
                  <span className="mono text-[10.5px] text-muted-2 tracking-[.04em] flex-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${item.id}`}
                    className="text-ink-2 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </Glass>
        </aside>

        {/* Article Content */}
        <article className="prose-custom">
          {/* Lead paragraph */}
          <p className="serif text-[22px] text-ink italic border-l-2 border-accent pl-5 mb-[1.6em] leading-[1.5]">
            If you're a small business owner in Dubai, Abu Dhabi or Sharjah, the search for a web
            developer probably looks the same: a flood of WhatsApp messages, quotes ranging from AED
            800 to AED 80,000, and no clear way to tell who's any good. This guide is the
            conversation I wish every prospective client had with themselves before getting in touch
            with anyone.
          </p>

          <h2 id="why" className="serif text-[clamp(28px,3.4vw,38px)] leading-[1.1] tracking-tight mt-[2em] mb-[.6em] balance">
            <span className="italic text-accent opacity-65 mr-[14px]">§</span>
            Why this market is messy
          </h2>
          <p className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] tracking-tight">
            The UAE web development market is unusual. You have Gulf-based agencies charging
            European prices for Asian work, freelancers in Asia and Europe charging less than your
            monthly Salik balance, and a growing layer of "developer-agency hybrids" who sit in the
            middle and rarely communicate well from either side.
          </p>
          <p className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] tracking-tight mt-5">
            For a business owner, the only thing that matters is: <em className="italic">did you
            get a site that does what you needed it to do?</em> Everything else — stack choices,
            pricing models, project management software — is plumbing.
          </p>

          {/* Tip callout */}
          <div className="grid grid-cols-[28px_1fr] gap-4 p-[22px_26px] rounded-[18px] bg-gradient-to-b from-[rgba(66,228,122,.08)] to-[rgba(66,228,122,.02)] border border-[rgba(66,228,122,.25)] my-7 text-[15px] leading-[1.6] text-ink-2 tracking-tight">
            <div className="w-7 h-7 rounded-full bg-[rgba(66,228,122,.18)] grid place-items-center text-green flex-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4">
                <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c1 .9 2 1.6 2 3.3h4c0-1.7 1-2.4 2-3.3A7 7 0 0 0 12 2z" />
              </svg>
            </div>
            <div>
              <span className="mono text-[11px] uppercase tracking-[.12em] text-green block mb-1">
                Quick note
              </span>
              Almost every problem in this article reduces to one thing:{" "}
              <strong className="text-ink font-semibold">
                can you actually talk to the person doing the work?
              </strong>{" "}
              Everything I recommend below is just different ways of testing that.
            </div>
          </div>

          <h2 id="five" className="serif text-[clamp(28px,3.4vw,38px)] leading-[1.1] tracking-tight mt-[2em] mb-[.6em] balance">
            <span className="italic text-accent opacity-65 mr-[14px]">§</span>
            The five questions to ask in the first call
          </h2>
          <p className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] tracking-tight">
            Skip the portfolio review for ten minutes. Have a 30-minute call instead. Ask these five
            things and listen for the texture of the answers, not the answers themselves.
          </p>
          <ol className="pl-[22px] flex flex-col gap-[10px] my-5">
            <li className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] marker:text-muted marker:mono marker:text-sm">
              <strong className="text-ink font-semibold">Who actually writes the code?</strong> If
              the person on the call won't be writing it, you're hiring an agency. That isn't bad —
              but it changes who you should be evaluating.
            </li>
            <li className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] marker:text-muted marker:mono marker:text-sm">
              <strong className="text-ink font-semibold">What does support look like on day 91?</strong>{" "}
              Anyone can promise the moon for the first 90 days. The question is what happens after
              that.
            </li>
            <li className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] marker:text-muted marker:mono marker:text-sm">
              <strong className="text-ink font-semibold">What's the worst-case scenario you've handled?</strong>{" "}
              A developer who can't tell you about a real disaster has either never shipped anything
              important or is lying.
            </li>
            <li className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] marker:text-muted marker:mono marker:text-sm">
              <strong className="text-ink font-semibold">Who owns the code at the end?</strong> If
              the answer is "we host it on our infrastructure" — read the contract carefully. Some
              agencies effectively rent you a site.
            </li>
            <li className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] marker:text-muted marker:mono marker:text-sm">
              <strong className="text-ink font-semibold">Can I see a project from 12+ months ago that's still live?</strong>{" "}
              Half of all freelancer portfolios are dead links. Recency isn't the test — survival is.
            </li>
          </ol>

          <h2 id="red" className="serif text-[clamp(28px,3.4vw,38px)] leading-[1.1] tracking-tight mt-[2em] mb-[.6em] balance">
            <span className="italic text-accent opacity-65 mr-[14px]">§</span>
            Red flags to walk from
          </h2>
          <p className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] tracking-tight">
            Each of these alone isn't disqualifying. Two or more, and you should probably keep
            looking.
          </p>
          <ul className="pl-[22px] flex flex-col gap-[10px] my-5">
            <li className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] marker:text-accent">
              A quote within an hour of describing the project. Real scoping takes a day or two of
              thinking.
            </li>
            <li className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] marker:text-accent">
              No staging URL during development. You should be able to see the site take shape, not
              get a single "ta-da" demo at the end.
            </li>
            <li className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] marker:text-accent">
              Heavy upfront payment (more than 40%) with no clear milestones tied to it.
            </li>
            <li className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] marker:text-accent">
              Vague answers about ongoing support — "we'll figure it out after launch" is code for
              "we won't be there".
            </li>
            <li className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] marker:text-accent">
              Templates passed off as custom work. Look for meta tags or footer credits in their
              portfolio.
            </li>
          </ul>

          {/* Blockquote */}
          <blockquote className="relative rounded-[18px] p-[24px_28px] my-[1.6em] bg-gradient-to-b from-white/[.06] to-white/[.02] border border-white/10 backdrop-blur-[12px] serif italic text-ink">
            <span
              className="absolute top-[-10px] left-4 serif text-[64px] text-accent leading-none"
              style={{ fontFamily: "'Newsreader', serif" }}
            >
              "
            </span>
            I've taken over maybe a dozen sites in the last two years that were built by someone who
            vanished. Every single one had at least three of the red flags above visible during the
            first sales conversation. The clients just didn't know what to look for.
          </blockquote>

          <h2 id="price" className="serif text-[clamp(28px,3.4vw,38px)] leading-[1.1] tracking-tight mt-[2em] mb-[.6em] balance">
            <span className="italic text-accent opacity-65 mr-[14px]">§</span>
            What pricing should look like
          </h2>
          <p className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] tracking-tight">
            I won't share specific numbers — every project is different and I don't want to set
            false anchors. But the <em className="italic">shape</em> of a healthy quote always looks
            the same:
          </p>
          <ul className="pl-[22px] flex flex-col gap-[10px] my-5">
            <li className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] marker:text-accent">
              <strong className="text-ink font-semibold">One clear scope</strong> — not a tiered
              "good / better / best" upsell ladder.
            </li>
            <li className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] marker:text-accent">
              <strong className="text-ink font-semibold">Itemised line items</strong> — design,
              build, content, deployment, post-launch support — each with a price you could question.
            </li>
            <li className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] marker:text-accent">
              <strong className="text-ink font-semibold">A fixed timeline</strong> with a kick-off
              date and a launch date, not "approximately 6–10 weeks".
            </li>
            <li className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] marker:text-accent">
              <strong className="text-ink font-semibold">An explicit change-request process</strong>{" "}
              — because requirements will change, and you want to know how that gets priced.
            </li>
          </ul>

          {/* Rule of thumb callout */}
          <div className="grid grid-cols-[28px_1fr] gap-4 p-[22px_26px] rounded-[18px] bg-gradient-to-b from-[rgba(244,197,140,.10)] to-[rgba(244,197,140,.02)] border border-[rgba(244,197,140,.22)] my-7 text-[15px] leading-[1.6] text-ink-2 tracking-tight">
            <div className="w-7 h-7 rounded-full bg-[rgba(244,197,140,.20)] grid place-items-center text-warm flex-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4l3 2" />
              </svg>
            </div>
            <div>
              <span className="mono text-[11px] uppercase tracking-[.12em] text-warm block mb-1">
                Rule of thumb
              </span>
              If a developer's proposal is shorter than your last lease agreement, that's actually a
              good sign. Long proposals from freelancers are usually sales theatre — short ones come
              from people who plan to do the work, not pitch it.
            </div>
          </div>

          <h2 id="whatsapp" className="serif text-[clamp(28px,3.4vw,38px)] leading-[1.1] tracking-tight mt-[2em] mb-[.6em] balance">
            <span className="italic text-accent opacity-65 mr-[14px]">§</span>
            The WhatsApp test
          </h2>
          <p className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] tracking-tight">
            This one is specific to the Gulf market. In the UAE, WhatsApp is the primary business
            communication channel. A developer who insists on Slack-only, email-only, or "we'll send
            weekly reports via PDF" is either inexperienced in this market or doesn't want you to be
            able to reach them.
          </p>
          <p className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] tracking-tight mt-5">
            Send a WhatsApp message at 7pm on a weekday with a quick technical question. Don't
            expect an instant answer — but do expect an answer the next morning. If a developer
            can't manage that during the sales process, they certainly won't manage it after you've
            paid.
          </p>

          {/* Warning callout */}
          <div className="grid grid-cols-[28px_1fr] gap-4 p-[22px_26px] rounded-[18px] bg-gradient-to-b from-[rgba(255,123,111,.08)] to-[rgba(255,123,111,.02)] border border-[rgba(255,123,111,.25)] my-7 text-[15px] leading-[1.6] text-ink-2 tracking-tight">
            <div className="w-7 h-7 rounded-full bg-[rgba(255,123,111,.18)] grid place-items-center text-[#FFB1A8] flex-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4">
                <path d="M12 9v4M12 17h.01M10.3 3.86l-8.4 14a2 2 0 0 0 1.7 3h16.8a2 2 0 0 0 1.7-3l-8.4-14a2 2 0 0 0-3.4 0z" />
              </svg>
            </div>
            <div>
              <span className="mono text-[11px] uppercase tracking-[.12em] text-[#FFB1A8] block mb-1">
                Avoid
              </span>
              Developers who route all communication through a sales rep or "client success manager".
              You're paying for the developer's attention. If their organisation is structured to
              prevent you from getting it, that's the signal.
            </div>
          </div>

          <h2 id="close" className="serif text-[clamp(28px,3.4vw,38px)] leading-[1.1] tracking-tight mt-[2em] mb-[.6em] balance">
            <span className="italic text-accent opacity-65 mr-[14px]">§</span>
            Closing the conversation
          </h2>
          <p className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] tracking-tight">
            The right freelance developer for you isn't the cheapest, the most expensive, or the one
            with the best portfolio. It's the one whose communication style and risk profile match
            yours. Some businesses want a hand-holding senior who explains every choice — others
            want a heads-down operator who delivers and disappears. Both can be the right call.
          </p>
          <p className="serif text-[18.5px] leading-[1.65] text-[#E2E5EE] tracking-tight mt-5">
            The test I recommend at the end of the first call:{" "}
            <strong className="text-ink font-semibold">
              can you imagine sending this person a panicked WhatsApp at 11pm three months from now,
              and feeling confident they'll handle it?
            </strong>{" "}
            If yes, you're probably in the right place. If you hesitate, keep looking.
          </p>

          <p className="mt-8 text-ink-2 italic serif text-[17px]">— A.</p>

          {/* Article footer: tags + author */}
          <div className="mt-[60px] pt-9 border-t border-dashed border-white/10">
            {/* Tags */}
            <div className="flex gap-2 flex-wrap mb-9">
              {["#freelancing", "#uae", "#web-development", "#hiring", "#dubai"].map((tag) => (
                <span
                  key={tag}
                  className="mono text-[11px] tracking-[.04em] px-3 py-1.5 rounded-pill bg-white/[.06] border border-white/10 text-ink-2"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author card */}
            <Glass className="p-[26px] flex gap-[18px] items-start max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-center">
              <span className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2B3046] to-[#0F121C] border border-white/15 grid place-items-center serif italic text-[28px] text-ink flex-none">
                A
              </span>
              <div>
                <h4 className="m-0 text-[16px] font-medium">Akshay V T</h4>
                <div className="mono text-[11px] text-muted tracking-[.08em] mt-1 mb-3">
                  FREELANCE WEB DEVELOPER · KERALA, INDIA
                </div>
                <p className="text-[14.5px] text-ink-2 leading-[1.55] m-0 mb-[14px]">
                  I've spent the last six years building React and Next.js sites for businesses in
                  the UAE, India, and Australia. I write about freelancing and the web — usually
                  between projects, occasionally during.
                </p>
                <div className="flex gap-[10px] max-[640px]:justify-center">
                  <Chip href="/about">About me →</Chip>
                  <Chip href="/contact">Work with me →</Chip>
                  <Chip href="https://wa.me/919746220043">WhatsApp →</Chip>
                </div>
              </div>
            </Glass>
          </div>
        </article>

        {/* Share Sidebar */}
        <aside className="sticky top-[110px] max-[820px]:hidden">
          <Glass className="p-5 flex flex-col gap-3">
            <h4 className="mono text-[10.5px] font-medium uppercase tracking-[.14em] text-muted m-0">
              Share
            </h4>
            <div className="flex gap-2">
              <a
                href="#"
                className="w-9 h-9 rounded-[10px] bg-white/[.06] border border-white/10 grid place-items-center text-ink-2 hover:bg-white/10 hover:text-ink transition-all"
                aria-label="Share on Twitter"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M22 5.8a8.5 8.5 0 0 1-2.36.64 4.13 4.13 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.74A11.65 11.65 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.27 5.48 4.1 4.1 0 0 1-1.86-.5v.04a4.1 4.1 0 0 0 3.3 4 4.1 4.1 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.28a11.6 11.6 0 0 0 6.3 1.85c7.55 0 11.68-6.26 11.68-11.68v-.53A8.4 8.4 0 0 0 22 5.8z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-[10px] bg-white/[.06] border border-white/10 grid place-items-center text-ink-2 hover:bg-white/10 hover:text-ink transition-all"
                aria-label="Share on LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10H5.67v8.34h2.67zM7 8.84a1.57 1.57 0 1 0 0-3.14 1.57 1.57 0 0 0 0 3.14zM18.34 18.34v-4.67c0-2.42-1.3-3.55-3.04-3.55a2.62 2.62 0 0 0-2.38 1.3V10h-2.67v8.34h2.67v-4.65c0-1.23.23-2.42 1.75-2.42 1.5 0 1.52 1.4 1.52 2.5v4.57h2.15z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-[10px] bg-white/[.06] border border-white/10 grid place-items-center text-ink-2 hover:bg-white/10 hover:text-ink transition-all"
                aria-label="Copy link"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.7 1.7" />
                  <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.7-1.7" />
                </svg>
              </a>
              <a
                href="https://wa.me/?text="
                className="w-9 h-9 rounded-[10px] bg-white/[.06] border border-white/10 grid place-items-center text-ink-2 hover:bg-white/10 hover:text-ink transition-all"
                aria-label="Share on WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M20.5 3.5A10.6 10.6 0 0 0 3.4 16.2L2 22l6-1.4a10.6 10.6 0 0 0 12.5-17.1zM12 20a8 8 0 0 1-4.2-1.2l-.3-.2-3.6.8.8-3.5-.2-.3A8 8 0 1 1 12 20z" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col gap-[10px] pt-[14px] mt-[6px] border-t border-dashed border-white/10">
              <div className="flex items-center justify-between mono text-[11px] text-muted tracking-[.04em]">
                <span>Views</span>
                <b className="text-ink font-medium serif text-[18px] tracking-tight">4.2k</b>
              </div>
              <div className="flex items-center justify-between mono text-[11px] text-muted tracking-[.04em]">
                <span>Shares</span>
                <b className="text-ink font-medium serif text-[18px] tracking-tight">148</b>
              </div>
              <div className="flex items-center justify-between mono text-[11px] text-muted tracking-[.04em]">
                <span>Reading time</span>
                <b className="text-ink font-medium serif text-[18px] tracking-tight">14m</b>
              </div>
            </div>
          </Glass>
        </aside>
      </main>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-bg-2 ">
          <div className="container">
            <div className="flex gap-12 items-end justify-between mb-10 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6">
              <div className="max-w-[64ch]">
                <div className="eyebrow mb-4 inline-block">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
                  &nbsp;&nbsp;Keep reading
                </div>
                <h2 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0">
                  Related <em className="italic text-ink-2">articles.</em>
                </h2>
              </div>
              <div className="text-sm text-ink-2 max-w-[38ch]">
                More on freelancing and building for the UAE/India market.
              </div>
            </div>

            <div className="grid grid-cols-3 gap-[22px] max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
              {relatedPosts.map((relatedPost) => (
                <a
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="block group"
                >
                  <Glass className="p-0 overflow-hidden flex flex-col min-h-[320px]">
                    <div
                      className="h-[180px] bg-cover bg-center transition-transform duration-[1.2s] group-hover:scale-[1.06]"
                      style={{ backgroundImage: `url('${relatedPost.image}')` }}
                    />
                    <div className="p-5 flex flex-col gap-2 flex-1">
                      <span className="mono text-[10.5px] uppercase tracking-[.12em] text-accent">
                        {relatedPost.category}
                      </span>
                      <h4 className="serif text-[19px] leading-[1.2] tracking-tight m-0 balance">
                        {relatedPost.title}
                      </h4>
                      <div className="mt-auto pt-3 border-t border-dashed border-white/10 mono text-[11px] text-muted flex justify-between">
                        <span>
                          {relatedPost.date} · {relatedPost.readTime}
                        </span>
                        <span className="text-accent">→</span>
                      </div>
                    </div>
                  </Glass>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(180deg, var(--bg) 0%, rgba(6,7,10,.55) 25%, rgba(6,7,10,.6) 75%, var(--bg) 100%), url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "32px",
          }}
        />

        <div className="container relative z-[1]">
          <Glass className="p-12 text-center max-w-[800px] mx-auto">
            <div className="eyebrow mb-4 inline-block">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_#6FA8FF]" />
              &nbsp;&nbsp;Apply the framework
            </div>
            <h2 className="serif text-[clamp(38px,5vw,56px)] leading-[1.06] tracking-tight m-0 mb-5">
              Try the WhatsApp test <em className="italic text-ink-2">on me.</em>
            </h2>
            <p className="text-[clamp(17px,1.6vw,21px)] leading-[1.5] text-ink-2 mb-8">
              Send a message about your project. See how I respond. If it feels right, we'll talk.
              If not, no hard feelings.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Button variant="whatsapp" href="https://wa.me/919746220043">
                WhatsApp me
              </Button>
              <Button variant="ghost" href="/contact">
                Send a message instead
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
