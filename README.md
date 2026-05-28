# Handoff: Freelancer Website (Akshay V T)

A complete marketing-site design for a freelance web developer based in Kerala / UAE, targeting small businesses, founders, and Gulf NRIs.

---

## ⚠️ About the design files

Everything in `design/` is a **design reference**, not production code.

The HTML/CSS in this bundle is a static prototype that captures the **intended look, layout, copy, and interaction patterns** of the marketing site. Your job is to **recreate these designs in your target codebase** using its existing patterns, libraries, and conventions — *not* to ship the prototype HTML as-is.

If you do not yet have a codebase, the recommended stack is below (see "Recommended Stack"). If you are dropping these designs into an existing app, follow that app's conventions for components, routing, styling, and state.

## Fidelity

**High-fidelity (hi-fi).** Colors, typography, spacing, shadows, glass effects, and interaction patterns are final. Reproduce pixel-for-pixel. The only things that are *not* final:

- Photography is pulled from Unsplash placeholder URLs — replace with the client's own art direction
- Copy is final draft but should be reviewed by the client before launch
- Email / WhatsApp / phone numbers in the forms are placeholders

---

## Recommended Stack

If starting from scratch, the design was authored with this stack in mind:

- **Next.js 14+** (App Router) — SEO-first, server-rendered, perfect for marketing sites
- **TypeScript**
- **Tailwind CSS** — port the tokens in `Design Tokens` below into `tailwind.config.ts`
- **next/font** with `Newsreader` (serif headings) + `Geist` (UI sans) + `Geist Mono` (monospace)
- **next/image** for all photography
- **MDX** for blog posts (BlogPost page is structured around long-form article content)
- Hosted on **Vercel**

Any equivalent framework (Astro, Remix, SvelteKit) is fine — Astro is an especially good fit since the design is mostly static. Drop Tailwind in favor of CSS Modules or vanilla CSS if that's the house style; the design system is small enough that tokens-as-CSS-variables (as already authored in `styles.css`) work everywhere.

---

## Design system

### Visual identity

> **"Liquid glass on photography, electric blue accent, dark mode."**

The whole site is dark (`#06070A` base) with frosted-glass cards floating over warm photographic backdrops (desert / Kerala / Gulf imagery). Serif italic headings (Newsreader) provide editorial warmth; mono labels (Geist Mono) provide technical credibility; sans body (Geist) keeps it readable.

### Design tokens

Copy these into your theme system. They are also defined as CSS custom properties at the top of `design/styles.css` and `design/Homepage.html`.

#### Colors

| Token        | Hex           | Use                                                |
| ------------ | ------------- | -------------------------------------------------- |
| `--bg`       | `#06070A`     | Base page background                               |
| `--bg-2`     | `#0B0D14`     | Alternating section background                     |
| `--ink`      | `#F4F6FB`     | Primary text                                       |
| `--ink-2`    | `#C8CEDB`     | Secondary text, body copy on dark                  |
| `--muted`    | `#8089A0`     | Tertiary text, labels, meta                        |
| `--muted-2`  | `#5A6478`     | Quaternary text, code line numbers                 |
| `--line`     | `rgba(255,255,255,.10)` | Borders                                  |
| `--line-soft`| `rgba(255,255,255,.06)` | Subtle dividers                          |
| `--accent`   | `#6FA8FF`     | Electric blue — primary accent, links, CTAs        |
| `--accent-2` | `#B69BFF`     | Lilac — gradient pair, code keywords               |
| `--warm`     | `#F4C58C`     | Warm tan — stars, code strings, "why" eyebrow      |
| `--green`    | `#42E47A`     | Online/available status, success                   |
| `--whatsapp` | `#25D366`     | WhatsApp brand green (FAB + buttons)               |

#### Typography

| Family          | Source           | Weights              | Use                                        |
| --------------- | ---------------- | -------------------- | ------------------------------------------ |
| **Newsreader**  | Google Fonts     | 400, 500 (italic 400, 500) — `opsz 6..72` | All headings, large display, blockquotes, hero numbers |
| **Geist**       | Google Fonts     | 300, 400, 500, 600, 700 | Body, UI, buttons, default                    |
| **Geist Mono**  | Google Fonts     | 400, 500             | Labels, eyebrows, code, badges, chips, meta |

Type scale (all `font-optical-sizing: auto` for Newsreader; `letter-spacing` tuned per element):

- **Display H1 (hero):** `clamp(52px, 7.8vw, 108px)`, line-height `.98`, tracking `-.022em`
- **Page H1 (inner pages):** `clamp(46px, 6.8vw, 96px)`, line-height `.98`, tracking `-.022em`
- **Section H2:** `clamp(38px, 5.2vw, 70px)`, line-height `1.0`, tracking `-.02em`
- **Card H3 (Newsreader italic):** `36px`, line-height `1.04`
- **Lede / large body:** `clamp(17px, 1.6vw, 21px)`, line-height `1.5`
- **Body:** `14.5px – 15px`, line-height `1.5 – 1.6`
- **Eyebrow (mono):** `11px`, `text-transform: uppercase`, `letter-spacing: .18em`

#### Radius

| Token         | Value  | Use                                  |
| ------------- | ------ | ------------------------------------ |
| `--radius`    | `22px` | Default glass cards                  |
| `--radius-sm` | `14px` | Form fields, inner pills             |
| `--radius-lg` | `28px` | Large project / hero cards           |
| —             | `999px`| Pills, buttons, status, chips        |
| —             | `32px` | Bottom CTA block                     |

#### Spacing

| Token           | Value                          | Use                          |
| --------------- | ------------------------------ | ---------------------------- |
| `--pad`         | `clamp(20px, 4vw, 56px)`       | Container horizontal padding |
| `--section-pad` | `clamp(72px, 8.5vw, 128px)`    | Section vertical padding     |

Grid gap inside multi-card sections is consistently `14px`.

#### Shadows / glass

```css
--glass-shadow:
  0 1px 0 rgba(255,255,255,.18) inset,        /* top edge highlight */
  0 0 0 1px rgba(255,255,255,.04) inset,      /* inner stroke */
  0 24px 60px -20px rgba(0,0,0,.55),          /* drop shadow */
  0 8px 24px -8px rgba(0,0,0,.4);             /* close shadow */

--glass-blur: saturate(160%) blur(22px);
--glass-border: 1px solid rgba(255,255,255,.14);
```

### The `.glass` primitive (CORE PATTERN — read carefully)

The single most important component in this design system. Every card, panel, nav bar, badge surface is built on it. Spec:

- `position: relative`, `isolation: isolate`, `overflow: hidden`, `border-radius: var(--radius)`
- Background: `linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.04))`
- `backdrop-filter: saturate(160%) blur(22px)` + `-webkit-backdrop-filter` for Safari
- Border: `var(--glass-border)`, Box-shadow: `var(--glass-shadow)`
- **`::before` pseudo:** top-edge highlight + faint top sheen (a radial gradient at the top and a soft linear fade)
- **`::after` pseudo:** a soft electric-blue (or warm) radial glow positioned bottom-right `-30% -50%`, blurred 20px — this is the "specular" / liquid refraction hint. Modifiers: `.flat` (no glow), `.warm` (warm glow instead of blue)
- Direct children of `.glass` must be `position: relative; z-index: 1;` so they sit above the pseudo-elements

Implement this as a `<Glass>` wrapper component or a Tailwind `@apply` utility. **Do not skip the pseudo-elements** — the glow + edge highlight is what makes it look "liquid" rather than just frosted.

### Buttons

| Class            | Description                                           |
| ---------------- | ----------------------------------------------------- |
| `.btn-primary`   | White→light-blue gradient pill, dark text, blue glow shadow. Primary CTA. |
| `.btn-ghost`     | Frosted glass pill, white text — secondary CTA        |
| `.btn-whatsapp`  | WhatsApp green pill, dark green text                  |
| `.btn-sm`        | Smaller padding modifier                              |

All buttons are rounded-pill (`999px`), include a `transform: translateY(-1px)` lift on hover, and have a chevron SVG on primary CTAs.

### Chips / tags

`.chip` (mono, 11px, subtle stroke) with color modifiers `.accent` (blue), `.warm` (tan), `.green` (success).

### Recurring layout patterns

1. **Sticky glass nav** — `position: fixed; top:18px; left:18px; right:18px;` centered, pill-shaped, frosted. Contains brand mark + nav links + green "Accepting clients" status pill + primary CTA.
2. **Page hero (inner pages)** — `padding-top: 168px` (clears the fixed nav), radial gradient background + grid overlay + masked photo, breadcrumbs (mono uppercase), eyebrow pill, large serif H1 with italic gradient-text span, lede paragraph, CTA row.
3. **Section header** — flex row with left column (eyebrow + h2) and right column (38ch supporting paragraph). H2 contains an italic `<em>` for the second half of the headline.
4. **Photographic section** — `<div class="*-bg">` with `position: absolute; inset: 0; z-index: 0;` carrying a darkened photo background, container at `z-index: 1`.
5. **Card grid** — 14px gaps, 1–4 columns responsive (`grid-template-columns: repeat(N, 1fr)`).
6. **Bottom CTA block** — large centered glass card with serif H2 (italic accent word), supporting paragraph, primary + ghost CTA row.
7. **WhatsApp floating action button** — `position: fixed; right:22px; bottom:22px;` with a ping-pulse animation behind it.

---

## Pages / Routes

All seven pages are in `design/`. Each carries `data-screen-label` attributes on its sections — these are commentary anchors and **should not be ported** to production.

### 1. `Homepage.html` → `/`

The flagship marketing page. Sections in order:

1. **Sticky glass nav** (shared)
2. **Hero** — large serif headline ("Your website, *built right.* Fixed fast."), eyebrow pill ("Now booking · April / May | UAE · India · Worldwide"), lede paragraph, primary + ghost CTAs, four-up trust stats (`6+ years`, `15+ clients`, `4 countries`, `<24h reply`), and a right-column **liquid glass card cluster** containing:
   - Profile card with avatar, name, location, rating, tech-stack chips, "online · 4 min ago" reply badge
   - Code snippet card (mono, syntax-highlighted) showing a stylized "project = { client: 'You', ... }" object
3. **City marquee** — Newsreader italic city names scrolling horizontally (Dubai, Abu Dhabi, Doha, Sydney, Kochi, Bangalore, Sharjah, London)
4. **Services grid (12 cards)** — first card is featured with blue tint, each card has an SVG icon top-left, "01" number top-right, title, one-liner, "Read more →" arrow that animates wider on hover
5. **Why me (3 cards over warm desert photo)** — large warm-italic numbers, principle headings, supporting paragraphs
6. **Process (3 steps)** — mono step numbers, Newsreader-italic step titles, descriptions, dashed-border footer with deliverable tag
7. **Projects (4 cards, 2-row asymmetric grid: 7/5 + 5/7)** — full-bleed photo + dark gradient overlay, glass tag pills top-left, country flag top-right, serif title + paragraph + outcome stats strip at bottom
8. **Testimonials (3 cards over warm photo, 1.2fr/1fr/1fr grid)** — stars row in warm color, Newsreader blockquote, dashed-border cite footer with avatar
9. **FAQ (2-column: heading / `<details>` list)** — custom `+`/`×` toggle that rotates and changes color when open, blue when active
10. **Contact card (2-column glass: copy/channels + form)** — large serif H2, channel rows (WhatsApp, Email, Phone, Location), form fields with mono-uppercase labels, primary submit
11. **Footer (5-column grid)** — large italic brand wordmark, link columns, dashed-border bottom row with copyright + tag
12. **Floating WhatsApp FAB** (shared, fixed bottom-right)

### 2. `Services.html` → `/services`

Index page listing all services. Page hero with breadcrumbs ("Home / Services") and italic gradient H1, then a grid of service cards (same `.glass` card pattern as homepage), grouped or filtered as the design shows. Bottom CTA block.

### 3. `Service.html` → `/services/[slug]`

Individual service detail page template. Sections:

1. Page hero with breadcrumbs + service-specific title
2. **What's included** — two-column layout: left descriptive copy, right checklist
3. **Who it's for** (alt-background section using `--bg-2`)
4. **Process** (steps specific to this service)
5. **Why me for this service** (alt-background)
6. **Related projects** (3-card grid linking to case studies)
7. **FAQ** (two-column, alt-background)
8. Bottom CTA + footer + FAB

Build as a single `[slug]/page.tsx` reading from MDX or a CMS — the structure is identical across services, only copy/checklist content varies.

### 4. `About.html` → `/about`

The personal story page. Sections:

1. Page hero ("01 Intro")
2. **Story / manifesto** (long-form prose in a two-column grid)
3. **Principles** (card grid)
4. **Skills** (alt-background; tech stack with proficiency, organized into categories)
5. **Journey timeline** (vertical timeline of career milestones)
6. **Working with me** (process + expectations)
7. Bottom CTA + footer + FAB

### 5. `Blog.html` → `/blog`

Blog index. Page hero, then a grid of post cards. Each card uses the glass primitive with the post's hero image, title, eyebrow (category + read time), and meta.

### 6. `BlogPost.html` → `/blog/[slug]`

Individual article. Sections:

1. **Article header** — eyebrow (category), large serif title, byline + reading time + date, optional hero image
2. **Article shell** with **left-rail TOC** (sticky on desktop) and main content column. Content uses prose typography — large drop-cap optional, blockquote in italic serif, code blocks in Geist Mono on subtle frosted background, inline links in `--accent`
3. **Related articles** (3-card grid, alt-background)
4. Bottom CTA + footer + FAB

Implement as MDX with custom components for `blockquote`, `pre`, `code`, `h2`, `h3`, etc., styled to match.

### 7. `Contact.html` → `/contact`

Sections:

1. Page hero
2. **Inline FAQ** + **contact form / channel grid**
3. **Trust strip** (testimonials or stats)
4. Bottom CTA + footer + FAB

---

## Interactions & Behavior

| Surface              | Behavior                                                                                  |
| -------------------- | ----------------------------------------------------------------------------------------- |
| Nav                  | Fixed, always visible. Active route gets `.active` class (slightly brighter pill).        |
| Nav status pill      | "Accepting clients" with green pulsing dot — keyframes `pulse` in CSS. Hide < 900px.       |
| Hero CTA buttons     | `translateY(-1px)` + brighter shadow on hover.                                            |
| Service cards        | `translateY(-3px)` lift, border brightens, arrow text turns `--accent` and gap widens.    |
| Project cards        | Image `scale(1.04)` over 1.2s on hover (1.2s ease).                                       |
| FAQ items            | Native `<details>` element. Toggle icon rotates: `+` (closed) → `×` (open, blue bg).      |
| Marquee              | CSS `@keyframes scroll` translating the duplicated track `-50%` over 35s, linear, infinite. |
| WhatsApp FAB         | Always visible. `::before` ping animation (2.2s scale + fade).                            |
| Form field           | On `:focus-within`, border switches to `--accent`.                                        |
| Reveal-on-scroll     | `.reveal` → `.reveal.in` adds `opacity:1; transform:none;` over 800ms. Trigger via IntersectionObserver in your framework. |
| Page transitions     | None specified — use the framework default.                                               |

### Forms

The contact form posts to whatever backend the client provides (Formspree, Resend, Postmark, custom API). Fields:

- Name (text, required)
- Email (email, required)
- Company / project type (text, optional)
- Budget range (select, optional)
- Message (textarea, required)

Show inline validation on blur. On submit, replace the form with a success state (serif "Thanks — I'll reply within 24h" message).

### State management

The site is almost entirely static / server-rendered. Per-page client state needed:

- FAQ `<details>` (native, no JS)
- Mobile nav toggle (when adding mobile menu — design currently hides nav links < 900px, so add a hamburger that opens a full-screen frosted menu)
- Contact form (form state + submit)
- IntersectionObserver for reveal-on-scroll

No global state needed.

### Responsive behavior

Breakpoints used in the design:

- `< 1100px` — services grid drops from 4 → 3 columns
- `< 1000px` — hero collapses to single column
- `< 980px` — testimonials collapse to single column
- `< 960px` — why-me drops to single column
- `< 900px` — projects, process, FAQ, footer collapse; nav links hide (need hamburger)
- `< 780px` — services grid drops to 2 columns
- `< 560px` — footer drops to single column
- `< 480px` — services grid drops to 1 column

Mobile-first refactor is welcome, but preserve the responsive collapse logic.

---

## Assets

### Photography (PLACEHOLDERS — replace before launch)

All `background-image: url(...)` calls reference `images.unsplash.com`. These are placeholders that thematically represent:

- Hero / Contact bg — desert dunes (warm, Gulf-evocative)
- Why-me bg — warm orange/sand tones
- Testimonials bg — desert
- Projects — varied product/lifestyle shots

**Action:** ask the client for original photography (their own portfolio shots, abstract Gulf/Kerala landscape imagery, or commissioned art). Until then, leave Unsplash URLs but cite them in `<credits>`.

### Fonts

All from Google Fonts — loaded in `<head>` of every HTML file:

```html
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400;1,6..72,500&display=swap" rel="stylesheet">
```

In Next.js, swap this for `next/font/google` to self-host and eliminate layout shift.

### Icons

All inline SVG, 24×24 viewBox, 1.6–1.8 stroke-width, `currentColor`. They appear to be hand-tuned (not from a library). Either:

- Keep as inline SVGs in a `components/icons/` folder (one file per icon), or
- Replace with **Lucide React** equivalents — most map cleanly (`Globe`, `Code`, `ShoppingBag`, `Wrench`, `Search`, `Zap`, `Bot`, `Layout`, `Layers`, `Database`, etc.)

### Brand mark

A 28×28 rounded-square containing the letter "A" on an electric-blue → lilac gradient with a top-left specular highlight. Spec is in `.brand-mark` in `styles.css`. Render as a small React component.

---

## Files in this bundle

```
design_handoff_freelancer_website/
├── README.md                  ← you are here
└── design/
    ├── Homepage.html          ← /
    ├── Services.html          ← /services
    ├── Service.html           ← /services/[slug] template
    ├── About.html             ← /about
    ├── Blog.html              ← /blog
    ├── BlogPost.html          ← /blog/[slug] template
    ├── Contact.html           ← /contact
    └── styles.css             ← shared design system (canonical token source)
```

`styles.css` is the **canonical source of truth** for tokens and shared primitives — it is what every inner page links to. `Homepage.html` inlines its own copy of the same tokens in a `<style>` block (kept self-contained for prototype simplicity). When porting, derive your theme from `styles.css`.

---

## Suggested build order

1. **Tokens & primitives first** — port colors, fonts, radii, spacing into your theme system. Build the `<Glass>` wrapper, `<Button variant>`, `<Chip>`, `<Eyebrow>`, `<SectionHead>` components.
2. **Layout shell** — `<Nav>`, `<Footer>`, `<WhatsAppFab>`, root layout with the dark background.
3. **Homepage** — the largest page; once it's done, every other page reuses the patterns.
4. **Inner page template** — `page-hero` + bottom CTA block become a layout/template you reuse for Services, About, Contact, Blog.
5. **Services index → service detail → about → contact** in that order.
6. **Blog index → blog post** last (MDX setup adds ceremony; do once everything else is shipped).
7. **Animations & polish** — pulse, ping, marquee, reveal-on-scroll, hover micro-interactions.
8. **Real content** — swap placeholder copy where the client has provided final copy; swap Unsplash photos for client-supplied imagery.
9. **SEO** — meta tags, Open Graph, sitemap, robots.txt, JSON-LD `Person` + `Service` schema, semantic headings.
10. **Perf budget** — Lighthouse 90+ on every page (a stated value-prop on the site itself).

## Done = Definition

- All 7 pages built and routed
- Pixel-matches the prototypes at 1440px and degrades gracefully to 375px
- Lighthouse 90+ across Performance, Accessibility, Best Practices, SEO on every page
- Contact form delivers reliably (test with the client's chosen backend)
- Real photography in place
- Deployed to production with custom domain
