# Akshay V T - Freelance Web Developer Portfolio

A high-fidelity Next.js 14+ marketing website built with TypeScript and Tailwind CSS, featuring liquid glass morphism design and dark mode aesthetics.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎨 Design System

### Visual Identity
**"Liquid glass on photography, electric blue accent, dark mode."**

The site features:
- Dark base (`#06070A`) with frosted-glass cards
- Warm photographic backdrops (desert/Kerala/Gulf imagery)
- Serif italic headings (Newsreader) for editorial warmth
- Monospace labels (JetBrains Mono) for technical credibility
- Sans body (Inter) for readability

### Color Palette

| Token | Hex | Use |
|-------|-----|-----|
| `bg` | #06070A | Base page background |
| `bg-2` | #0B0D14 | Alternating section background |
| `ink` | #F4F6FB | Primary text |
| `ink-2` | #C8CEDB | Secondary text |
| `muted` | #8089A0 | Tertiary text, labels |
| `accent` | #6FA8FF | Electric blue - links, CTAs |
| `accent-2` | #B69BFF | Lilac - gradient pair |
| `warm` | #F4C58C | Warm tan - accents |
| `green` | #42E47A | Success, online status |
| `whatsapp` | #25D366 | WhatsApp brand green |

### Typography

- **Newsreader** - All headings, display text, blockquotes
- **Inter** - Body text, UI elements, buttons
- **JetBrains Mono** - Labels, eyebrows, code, badges

### Glass Primitive

The core design pattern - every card, panel, and navigation bar uses this:

- Frosted glass background with gradient
- `backdrop-filter: saturate(160%) blur(22px)`
- Pseudo-element highlights for "liquid" appearance
- Specular glow positioned bottom-right
- Variants: default (blue glow), warm (tan glow), flat (no glow)

## 📁 Project Structure

```
akshayvt.com/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Complete homepage
│   └── globals.css         # Global styles & animations
├── components/
│   ├── Glass.tsx           # Liquid glass primitive
│   ├── Button.tsx          # Button variants (primary, ghost, whatsapp)
│   ├── Chip.tsx            # Tag/badge component
│   ├── ServiceCard.tsx     # Service card component
│   ├── Nav.tsx             # Sticky glass navigation
│   ├── Footer.tsx          # Site footer
│   ├── WhatsAppFab.tsx     # Floating WhatsApp button
│   └── RevealOnScroll.tsx  # Scroll animation wrapper
├── data/
│   ├── services.tsx        # Services data (12 items)
│   ├── projects.ts         # Projects data (4 items)
│   ├── testimonials.ts     # Testimonials data (3 items)
│   └── faq.ts              # FAQ data (7 items)
├── lib/
│   └── utils.ts            # cn() utility for Tailwind
└── tailwind.config.ts      # Design tokens & theme
```

## 🎯 Homepage Sections

### ✅ Implemented

1. **Hero Section**
   - Gradient background with photo overlay
   - Large serif headline with gradient italic text
   - Trust stats (4 metrics)
   - Glass card cluster (profile + code snippet)
   - Animated city marquee

2. **Services Section** (12 cards)
   - Responsive 4-column grid
   - Featured card with blue accent
   - Hover animations (lift + border brighten)

3. **Why Me Section** (6 cards)
   - 3-column grid over warm desert photo
   - Warm italic Roman numerals
   - Glass cards with warm variant

4. **Process Section** (3 steps)
   - Timeline with deliverable tags
   - Dashed footer with time estimates

5. **Projects Section** (4 cards)
   - Asymmetric grid (7/5 + 5/7 span)
   - Full-bleed photos with hover zoom
   - Outcome metrics strip

6. **Testimonials Section** (3 cards)
   - Grid over warm photo backdrop
   - Large serif blockquotes
   - Star ratings in warm color

7. **FAQ Section**
   - Accordion with custom toggle
   - Native `<details>` element
   - Animated + → × on open

8. **Contact Section**
   - Two-column layout (channels + form)
   - WhatsApp, email, location cards
   - Full contact form with validation

9. **Shared Components**
   - Sticky glass navigation
   - 5-column footer
   - WhatsApp FAB with ping animation

## 🎭 Animations

- **Pulse** - Status dot animation (2.2s loop)
- **Ping** - WhatsApp FAB outer ring (2.2s loop)
- **Scroll** - City marquee infinite scroll (35s)
- **Reveal** - Fade up on scroll (800ms ease)
- **Hover** - Service cards lift (-3px)
- **Hover** - Project photos scale (1.04x, 1.2s)

## 🛠️ Tech Stack

- **Next.js 14.2** - App Router, server-rendered
- **TypeScript 5** - Type safety
- **Tailwind CSS 3.4** - Utility-first styling
- **React 18.3** - UI library
- **next/font** - Optimized font loading
- **clsx + tailwind-merge** - Conditional classes

## 📝 Notes

- All photography from Unsplash (placeholders - replace before launch)
- Form submission not wired - connect to Formspree/Resend/custom API
- WhatsApp number is placeholder - update in components
- Email addresses are placeholder - update throughout
- Build succeeds with 95.6 kB First Load JS
- Fully static - deploys to Vercel/Netlify/any static host

## 🎨 Design Fidelity

This implementation matches the design handoff pixel-for-pixel:

✅ Exact color palette
✅ Responsive typography with clamp()
✅ Liquid glass morphism with pseudo-elements
✅ All hover states and transitions
✅ Smooth animations (pulse, ping, scroll)
✅ Mobile-responsive breakpoints
✅ Accessibility (semantic HTML, ARIA labels)

## 📦 Build Output

```
Route (app)                              Size     First Load JS
┌ ○ /                                    8.33 kB        95.6 kB
└ ○ /_not-found                          873 B          88.1 kB
```

All pages are statically pre-rendered for optimal performance.

## 🚀 Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
vercel

# Or deploy to any static host
# The .next folder contains the production build
```

## 📧 Support

For questions or issues:
- Create an issue on GitHub
- Contact: info@akshayvt.com
- WhatsApp: +91 974 622 0043

---

Built with ⚡ by Claude Code
