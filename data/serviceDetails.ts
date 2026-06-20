export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  whatYouGet: string[];
  process: Array<{ step: string; title: string; description: string }>;
  techStack: Array<{ category: string; items: string[] }>;
  faqs: Array<{ q: string; a: string }>;
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "001": {
    id: "001",
    title: "Custom Website Development",
    tagline: "Built for your business. Not from a template.",
    description: "Every business is different — your website should be too. I build fully custom websites from scratch, tailored to your brand, your audience, and your goals. No templates, no shortcuts, no compromise on quality.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=2400&q=80",
    tags: ["React", "Next.js", "Custom Design", "Responsive"],
    whatYouGet: [
      "Fully custom design (no page builders or templates)",
      "React or Next.js development with TypeScript",
      "Mobile-first, fully responsive layout",
      "On-page SEO — meta tags, schema, sitemap, robots.txt",
      "Contact forms with email/WhatsApp integration",
      "Google Analytics 4 setup",
      "Performance-optimized for Core Web Vitals",
      "Deployment to Vercel or your hosting",
      "30 days post-launch support"
    ],
    process: [
      {
        step: "01",
        title: "Discovery Call",
        description: "We discuss your business, goals, audience, and what success looks like for your website."
      },
      {
        step: "02",
        title: "Design Direction",
        description: "I share a design approach and structure before writing any code. You approve the direction first."
      },
      {
        step: "03",
        title: "Development",
        description: "I build the site cleanly — performance, SEO, and accessibility baked in throughout."
      },
      {
        step: "04",
        title: "Launch & Support",
        description: "We go live together. I remain available for edits, fixes, and questions after delivery."
      }
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["API Routes", "Node.js", "Prisma"] },
      { category: "Deploy", items: ["Vercel", "Google Analytics 4", "Cloudflare"] }
    ],
    faqs: [
      {
        q: "Do you use templates or page builders?",
        a: "No. Every website I build is coded from scratch using React and Next.js. This gives you better performance, more flexibility, and cleaner code than any template or page builder."
      },
      {
        q: "What if I already have a design?",
        a: "I can build from your existing design (Figma, Adobe XD, or even a reference site). Or I can handle the design direction myself — your choice."
      },
      {
        q: "Will I be able to update the site myself?",
        a: "Yes. I can integrate a headless CMS so you can update content without touching code, or I can provide documentation for direct edits."
      },
      {
        q: "Do you offer ongoing support after launch?",
        a: "Yes. I offer 30 days of included support after launch, and ongoing maintenance packages if needed."
      }
    ]
  },

  "002": {
    id: "002",
    title: "Next.js Development Services",
    tagline: "The framework that makes your site fast, SEO-friendly, and future-proof.",
    description: "Next.js is the gold standard for modern web development — and I've been building with it for years. Whether you need a marketing site, SaaS product, or complex web app, I deliver Next.js solutions that are fast, scalable, and built to rank.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=80",
    tags: ["Next.js 14+", "React", "TypeScript", "SSR"],
    whatYouGet: [
      "App Router or Pages Router — whichever fits your project",
      "Server-side rendering (SSR) and static generation (SSG)",
      "SEO-optimized metadata, Open Graph, and JSON-LD schema",
      "Image optimization with next/image",
      "API routes and server actions",
      "TypeScript throughout",
      "Tailwind CSS styling",
      "Deployment-ready for Vercel",
      "Core Web Vitals optimized"
    ],
    process: [
      {
        step: "01",
        title: "Requirements Review",
        description: "I review your goals, existing codebase (if any), and recommended Next.js architecture for your use case."
      },
      {
        step: "02",
        title: "Architecture Planning",
        description: "App Router vs Pages Router, data fetching strategy, rendering mode, and folder structure — planned before coding."
      },
      {
        step: "03",
        title: "Development",
        description: "Clean, typed, performant Next.js code — built to scale and easy to hand off."
      },
      {
        step: "04",
        title: "Deployment & Optimization",
        description: "Deployed to Vercel with performance monitoring, analytics, and post-launch support."
      }
    ],
    techStack: [
      { category: "Core", items: ["Next.js 14+", "React 18", "TypeScript"] },
      { category: "Styling", items: ["Tailwind CSS", "Framer Motion", "CSS Modules"] },
      { category: "Data", items: ["Prisma", "Sanity", "next-seo", "Zod"] },
      { category: "Deploy", items: ["Vercel", "Edge Functions", "Cloudflare"] }
    ],
    faqs: [
      {
        q: "App Router or Pages Router — which do you use?",
        a: "I default to App Router for new projects as it's the current Next.js standard. I also work with Pages Router for existing codebases."
      },
      {
        q: "Can you work on my existing Next.js project?",
        a: "Yes. I can audit, refactor, extend, or maintain existing Next.js projects."
      },
      {
        q: "Do you handle deployment?",
        a: "Yes. I deploy to Vercel by default, with environment variables, custom domains, and performance monitoring configured."
      },
      {
        q: "Can you integrate a CMS with Next.js?",
        a: "Yes — I commonly integrate Sanity, Contentlayer, or MDX for content management with Next.js."
      }
    ]
  },

  "003": {
    id: "003",
    title: "React Development Services",
    tagline: "Scalable, interactive UIs built the right way.",
    description: "React is at the core of everything I build. I write component-driven, typed, performant React code that's clean enough for your team to maintain and scalable enough to grow with your product.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=2400&q=80",
    tags: ["React 18", "TypeScript", "Components", "Hooks"],
    whatYouGet: [
      "Component architecture design",
      "React 18 with Hooks and Context",
      "TypeScript integration",
      "State management (Zustand, Context, Redux if needed)",
      "React Query / SWR for data fetching",
      "Reusable UI component library",
      "Unit and integration test setup",
      "Accessibility-compliant markup"
    ],
    process: [
      {
        step: "01",
        title: "Component Planning",
        description: "We map out the component tree, data flow, and state architecture before writing code."
      },
      {
        step: "02",
        title: "Development",
        description: "Clean, typed React components — reusable, well-named, and easy to work with."
      },
      {
        step: "03",
        title: "Testing & Review",
        description: "Components are tested and reviewed for edge cases, accessibility, and performance."
      },
      {
        step: "04",
        title: "Handoff",
        description: "Code is documented and handed off cleanly — ready for your team to build on."
      }
    ],
    techStack: [
      { category: "Core", items: ["React 18", "TypeScript", "Vite"] },
      { category: "State", items: ["Zustand", "React Query", "Context API"] },
      { category: "Styling", items: ["Tailwind CSS", "Framer Motion"] },
      { category: "Testing", items: ["Vitest", "React Testing Library"] }
    ],
    faqs: [
      {
        q: "Do you use class components or functional components?",
        a: "Functional components with hooks exclusively — that's the modern React standard."
      },
      {
        q: "Can you work with an existing React codebase?",
        a: "Yes. I can add features, fix bugs, refactor, or review an existing React project."
      },
      {
        q: "Do you handle the backend too?",
        a: "Yes — I offer full-stack development combining React frontend with Node.js or PHP backends."
      }
    ]
  },

  "004": {
    id: "004",
    title: "E-Commerce Development",
    tagline: "Online stores that look great and actually convert.",
    description: "Building an online store isn't just about displaying products. I build e-commerce solutions optimized for conversions, fast page loads, and a smooth checkout experience using Shopify, WooCommerce, or custom Next.js implementations.",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e05cde2a?auto=format&fit=crop&w=2400&q=80",
    tags: ["Shopify", "WooCommerce", "Stripe", "E-Commerce"],
    whatYouGet: [
      "Product catalog and inventory management",
      "Secure payment processing (Stripe, PayPal)",
      "Shopping cart and checkout flow",
      "Product filtering and search",
      "Order management system",
      "Customer accounts and order history",
      "Email notifications for orders",
      "Mobile-optimized experience",
      "Post-purchase support"
    ],
    process: [
      {
        step: "01",
        title: "Store Strategy",
        description: "We discuss your products, pricing, shipping, and target audience."
      },
      {
        step: "02",
        title: "Platform Setup",
        description: "I choose the best platform (Shopify, custom Next.js, or WooCommerce) based on your needs."
      },
      {
        step: "03",
        title: "Development",
        description: "I build the store with product uploads, payment integration, and SEO optimization."
      },
      {
        step: "04",
        title: "Launch & Training",
        description: "Final testing, payment testing, and training on how to manage your store."
      }
    ],
    techStack: [
      { category: "Platform", items: ["Shopify", "WooCommerce", "Custom Next.js"] },
      { category: "Payments", items: ["Stripe", "PayPal", "Square"] },
      { category: "Frontend", items: ["React", "Tailwind CSS", "Next.js"] },
      { category: "Integration", items: ["Inventory APIs", "Shipping APIs", "Email services"] }
    ],
    faqs: [
      {
        q: "Should I use Shopify or build custom e-commerce?",
        a: "Shopify is great for quick launches and simplicity. Custom is better for unique requirements and better margins long-term. I recommend Shopify for most businesses starting out."
      },
      {
        q: "How do I handle payments securely?",
        a: "I integrate PCI-compliant payment processors (Stripe or PayPal). You never handle sensitive payment data directly."
      },
      {
        q: "Can you help with product uploads and optimization?",
        a: "I can set up the system and train you. For large catalogs, I recommend hiring a data entry specialist or using import tools."
      }
    ]
  },

  "005": {
    id: "005",
    title: "SEO-Focused Web Development",
    tagline: "Built to rank on Google from day one.",
    description: "Every website I build has SEO baked in from the start — not as an afterthought. Clean code, proper markup, Core Web Vitals optimization, and technical SEO that gives Google everything it needs to rank your site.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=80",
    tags: ["SEO", "Technical SEO", "Schema Markup", "Core Web Vitals"],
    whatYouGet: [
      "Semantic HTML and proper heading hierarchy",
      "Meta tags, Open Graph, and JSON-LD schema",
      "XML sitemap and robots.txt",
      "Canonical URLs and redirects",
      "Mobile-first responsive design",
      "Core Web Vitals optimization (90+ Lighthouse)",
      "Image optimization and lazy loading",
      "Internal linking strategy",
      "SEO audit and recommendations"
    ],
    process: [
      {
        step: "01",
        title: "Keyword Research",
        description: "I research your target keywords and competitive landscape."
      },
      {
        step: "02",
        title: "Content Strategy",
        description: "Plan the site structure and content hierarchy for SEO success."
      },
      {
        step: "03",
        title: "Development",
        description: "Build with SEO best practices embedded — no optimization needed later."
      },
      {
        step: "04",
        title: "Launch & Monitoring",
        description: "Deploy with Google Search Console setup and initial ranking tracking."
      }
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "React", "Semantic HTML"] },
      { category: "SEO Tools", items: ["next-seo", "Schema.org", "Open Graph"] },
      { category: "Performance", items: ["Image optimization", "Code splitting", "Caching"] },
      { category: "Monitoring", items: ["Google Search Console", "Analytics 4", "Lighthouse CI"] }
    ],
    faqs: [
      {
        q: "Will my site rank on Google immediately?",
        a: "No. I build the technical foundation Google rewards. Rankings depend on content quality and competition, but typically take 3-6 months to see results."
      },
      {
        q: "Do you do SEO consulting and strategy?",
        a: "I focus on technical SEO and on-page optimization through development. For broader SEO strategy and content planning, I can recommend specialists."
      },
      {
        q: "What about backlinks and link building?",
        a: "That's outside my scope. I ensure your site is technically perfect for Google. Link building is a separate service."
      }
    ]
  },

  "006": {
    id: "006",
    title: "Performance Optimization",
    tagline: "Cut load times, improve Core Web Vitals, and give your users a faster experience.",
    description: "Slow websites cost money. Every 100ms delay can reduce conversions. I audit your site, identify bottlenecks, and optimize it until your Lighthouse score hits 90+.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=80",
    tags: ["Performance", "Optimization", "Core Web Vitals", "Lighthouse"],
    whatYouGet: [
      "Lighthouse performance audit",
      "Image optimization and WebP conversion",
      "Code splitting and lazy loading",
      "CSS and JavaScript minification",
      "Font optimization and preloading",
      "CDN setup and caching strategy",
      "Core Web Vitals optimization",
      "Performance monitoring setup",
      "Detailed optimization report"
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        description: "I run Lighthouse, WebPageTest, and other tools to identify bottlenecks."
      },
      {
        step: "02",
        title: "Optimization Plan",
        description: "I prioritize improvements by impact and effort."
      },
      {
        step: "03",
        title: "Implementation",
        description: "I implement optimizations iteratively, testing each change."
      },
      {
        step: "04",
        title: "Monitoring",
        description: "Set up continuous performance monitoring to catch regressions."
      }
    ],
    techStack: [
      { category: "Tools", items: ["Lighthouse", "WebPageTest", "GTmetrix"] },
      { category: "Optimization", items: ["Image optimization", "Code splitting", "Compression"] },
      { category: "CDN", items: ["Cloudflare", "Vercel Edge", "AWS CloudFront"] },
      { category: "Monitoring", items: ["Sentry", "LogRocket", "New Relic"] }
    ],
    faqs: [
      {
        q: "How much improvement can I expect?",
        a: "Depends on the starting point. Most sites see 30-50% improvement. Sites scoring below 50 usually hit 80+ with optimization."
      },
      {
        q: "Will optimization break anything?",
        a: "No. I test extensively to ensure functionality isn't affected. All changes are carefully documented."
      },
      {
        q: "What about Core Web Vitals?",
        a: "I optimize specifically for LCP, FID, and CLS — Google's three key metrics. These directly affect rankings."
      }
    ]
  },

  "007": {
    id: "007",
    title: "Website Maintenance & Support",
    tagline: "Your site stays updated, secure, and running smoothly.",
    description: "Launch day isn't the end — it's the beginning. I provide ongoing maintenance, security updates, performance monitoring, and support so you can focus on your business, not your website.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=80",
    tags: ["Maintenance", "Support", "Security", "Updates"],
    whatYouGet: [
      "Monthly security updates and patches",
      "Framework and dependency updates",
      "Performance monitoring and reporting",
      "Uptime monitoring (99.9% SLA)",
      "Daily automated backups",
      "Content updates and edits",
      "Emergency support (24/7 critical issues)",
      "Monthly performance report",
      "SEO health check"
    ],
    process: [
      {
        step: "01",
        title: "Setup",
        description: "I audit your current setup and establish monitoring, backups, and security."
      },
      {
        step: "02",
        title: "Ongoing Maintenance",
        description: "Monthly updates, monitoring, and proactive security patches."
      },
      {
        step: "03",
        title: "Support",
        description: "Email support for questions, emergency phone support for critical issues."
      },
      {
        step: "04",
        title: "Reporting",
        description: "Monthly reports on performance, security, and recommendations."
      }
    ],
    techStack: [
      { category: "Monitoring", items: ["Uptime Robot", "Sentry", "LogRocket"] },
      { category: "Backup", items: ["Vercel", "AWS S3", "Automated daily backups"] },
      { category: "Security", items: ["SSL/TLS", "WAF", "DDoS protection"] },
      { category: "Updates", items: ["Dependency updates", "Security patches", "Framework upgrades"] }
    ],
    faqs: [
      {
        q: "What's included in maintenance?",
        a: "Security updates, framework updates, backups, uptime monitoring, performance reports, and priority email support."
      },
      {
        q: "Do I have to keep you as my developer?",
        a: "No contracts. I provide maintenance on a month-to-month basis. Cancel anytime, but I hope you'll stay!"
      },
      {
        q: "What if I need emergency help?",
        a: "Critical issues get priority. WhatsApp or emergency line during business hours. Response time usually under 1 hour."
      }
    ]
  },

  "008": {
    id: "008",
    title: "Full-Stack Web Application",
    tagline: "From database to UI — I build and connect the whole stack.",
    description: "Some projects need more than a frontend. I design and build full-stack web applications — handling the database, server logic, API design, and React-based UI from a single point of accountability.",
    image: "https://images.unsplash.com/photo-1516534775068-bb57e5c42bb4?auto=format&fit=crop&w=2400&q=80",
    tags: ["Full-Stack", "Node.js", "Database", "API Design"],
    whatYouGet: [
      "Frontend: React or Next.js with TypeScript",
      "Backend: Node.js / Next.js API routes / PHP",
      "Database design and setup (PostgreSQL, MySQL, or MongoDB)",
      "Authentication (JWT, NextAuth, session-based)",
      "REST or GraphQL API design",
      "Third-party API integrations",
      "Admin panel or dashboard development",
      "Deployment and hosting configuration",
      "Documentation"
    ],
    process: [
      {
        step: "01",
        title: "Scope & Architecture",
        description: "We define the features, data model, tech stack, and integrations before any code is written."
      },
      {
        step: "02",
        title: "Backend First",
        description: "API and data layer built and tested before UI work begins — solid foundation, no surprises."
      },
      {
        step: "03",
        title: "Frontend Development",
        description: "React/Next.js UI built against the real API — not mocked data."
      },
      {
        step: "04",
        title: "Testing, Deployment & Handoff",
        description: "End-to-end testing, production deployment, and documentation delivered with the project."
      }
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Next.js API Routes", "Express.js", "PHP"] },
      { category: "Database", items: ["PostgreSQL", "Prisma", "MongoDB"] },
      { category: "Deploy", items: ["Vercel", "Railway", "Heroku", "AWS"] }
    ],
    faqs: [
      {
        q: "How do you handle database hosting?",
        a: "I use managed databases on Railway, PlanetScale, or Supabase — reliable, scalable, and easy to manage."
      },
      {
        q: "Can you build an admin panel too?",
        a: "Yes — admin dashboards and management panels are a common addition to full-stack projects."
      },
      {
        q: "What if I need the app to scale to thousands of users?",
        a: "I design with scale in mind — efficient queries, edge caching, and architecture that doesn't need to be rebuilt as you grow."
      }
    ]
  },

  "009": {
    id: "009",
    title: "AI Integration for Websites",
    tagline: "Add AI-powered features — chatbots, recommendations, generation — to your product.",
    description: "AI is no longer a futuristic feature — it's practical. I integrate AI into your website for customer support chatbots, product recommendations, content generation, and more using OpenAI, Anthropic, and other APIs.",
    image: "https://images.unsplash.com/photo-1677442d019cecf3da3b5e4e6fa24f0f?auto=format&fit=crop&w=2400&q=80",
    tags: ["AI", "OpenAI", "Chatbots", "Automation"],
    whatYouGet: [
      "AI chatbot (customer support, lead qualification)",
      "Product recommendation engine",
      "Content generation (product descriptions, blog)",
      "Email generation and personalization",
      "Document summarization",
      "AI search functionality",
      "Prompt engineering and fine-tuning",
      "Cost optimization and monitoring",
      "Documentation and training"
    ],
    process: [
      {
        step: "01",
        title: "AI Strategy",
        description: "We identify where AI adds value to your product or business process."
      },
      {
        step: "02",
        title: "Integration Planning",
        description: "I choose the right AI provider (OpenAI, Anthropic, etc.) and design the integration."
      },
      {
        step: "03",
        title: "Development & Testing",
        description: "I build the feature with proper error handling, cost monitoring, and quality checks."
      },
      {
        step: "04",
        title: "Launch & Optimization",
        description: "Deploy with monitoring, and continuously optimize prompts and costs."
      }
    ],
    techStack: [
      { category: "AI Providers", items: ["OpenAI", "Anthropic", "Google Vertex AI"] },
      { category: "Integration", items: ["Next.js AI SDK", "Vercel AI", "LangChain"] },
      { category: "Frontend", items: ["React", "Streaming UI", "TypeScript"] },
      { category: "Monitoring", items: ["Cost tracking", "API monitoring", "Error logging"] }
    ],
    faqs: [
      {
        q: "Which AI provider should I use?",
        a: "OpenAI (GPT-4) is most powerful and affordable. Anthropic (Claude) is great for detailed analysis. I recommend based on your use case."
      },
      {
        q: "How much will AI cost me?",
        a: "Depends on usage. A simple chatbot might cost $50-200/month. High-volume applications can cost more. I set up monitoring so you see costs in real-time."
      },
      {
        q: "Can I use my own AI model?",
        a: "Yes, if you have a custom model. I can integrate it. For most use cases, using OpenAI or Anthropic is simpler and more cost-effective."
      }
    ]
  },

  "010": {
    id: "010",
    title: "Landing Page Development",
    tagline: "One page. One goal. Maximum conversions.",
    description: "A landing page is the most focused investment you can make in your web presence. I build landing pages engineered for one outcome — converting your visitors into leads, signups, or sales.",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e05cde2a?auto=format&fit=crop&w=2400&q=80",
    tags: ["Landing Pages", "Conversion", "Ads", "Campaigns"],
    whatYouGet: [
      "Single-goal page architecture",
      "Conversion-optimized layout and hierarchy",
      "Mobile-first design",
      "Fast load time (critical for ad quality scores)",
      "Contact form or CTA integration",
      "A/B test-ready structure",
      "Analytics and conversion event tracking",
      "SEO metadata (for organic landing pages)"
    ],
    process: [
      {
        step: "01",
        title: "Goal & Audience",
        description: "We define the one action you want visitors to take and who we're designing for."
      },
      {
        step: "02",
        title: "Structure & Hierarchy",
        description: "Content blocks ordered by conversion psychology — problem, solution, proof, CTA."
      },
      {
        step: "03",
        title: "Development",
        description: "Clean, fast code. No unnecessary scripts that slow load time and hurt ad Quality Score."
      },
      {
        step: "04",
        title: "Tracking Setup",
        description: "Analytics, conversion events, and heatmap tools (if needed) configured before launch."
      }
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "TypeScript"] },
      { category: "Analytics", items: ["Google Analytics 4", "Google Tag Manager", "Conversion API"] },
      { category: "Forms", items: ["React Hook Form", "Email integration", "Zapier"] },
      { category: "Deploy", items: ["Vercel", "99.9% uptime"] }
    ],
    faqs: [
      {
        q: "How quickly can you build a landing page?",
        a: "Most landing pages are delivered in 3–5 working days, depending on complexity and how quickly content is provided."
      },
      {
        q: "Can you set up conversion tracking?",
        a: "Yes — I configure Google Analytics 4 events, Google Tag Manager, and can set up Meta Pixel if needed."
      },
      {
        q: "Can I easily duplicate the page for different campaigns?",
        a: "Yes — I build with reusability in mind so you can spin up variations without starting from scratch."
      }
    ]
  },

  "011": {
    id: "011",
    title: "Website Redesign",
    tagline: "Modernize your outdated site without losing your SEO rankings or existing traffic.",
    description: "Your website is outdated and losing you customers. A redesign can breathe new life into your online presence — but only if done right. I redesign sites while preserving SEO rankings and redirecting traffic properly.",
    image: "https://images.unsplash.com/photo-1554115176-81342ee5ff30?auto=format&fit=crop&w=2400&q=80",
    tags: ["Redesign", "Migration", "SEO Preservation", "Modern Stack"],
    whatYouGet: [
      "Full site audit and competitive analysis",
      "Modern, mobile-first design",
      "Clean code with Next.js/React",
      "Proper 301 redirects to preserve SEO",
      "URL structure optimization",
      "Performance improvements",
      "Enhanced conversion funnel",
      "Seamless content migration",
      "Post-launch monitoring"
    ],
    process: [
      {
        step: "01",
        title: "Audit & Strategy",
        description: "I audit your current site, document URLs, analyze what's working and what isn't."
      },
      {
        step: "02",
        title: "Design & Planning",
        description: "New design while planning SEO preservation and redirect strategy."
      },
      {
        step: "03",
        title: "Development",
        description: "Build the new site with clean redirects and SEO best practices."
      },
      {
        step: "04",
        title: "Migration & Monitoring",
        description: "Smooth migration, 301 redirects, and 30 days of monitoring for SEO impact."
      }
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { category: "SEO", items: ["301 redirects", "Sitemap migration", "Search Console"] },
      { category: "Migration", items: ["Content preservation", "URL mapping", "Backup strategy"] },
      { category: "Monitoring", items: ["Google Search Console", "Ranking tracking", "Traffic monitoring"] }
    ],
    faqs: [
      {
        q: "Will I lose my Google rankings after a redesign?",
        a: "Not if we do it right. Proper 301 redirects, URL preservation, and SEO best practices minimize ranking impact. Most sites see no drop or slight gain."
      },
      {
        q: "How long does a redesign take?",
        a: "4-8 weeks typically, depending on site size and content complexity."
      },
      {
        q: "What happens to my content?",
        a: "All content is migrated and properly redirected. I can improve content as we migrate if you'd like."
      }
    ]
  },

  "012": {
    id: "012",
    title: "API Integration Services",
    tagline: "Connect your platform to any third-party service — cleanly and reliably.",
    description: "Your website doesn't exist in isolation. I integrate it with third-party APIs — payment processors, email services, CRM systems, analytics platforms, and more — seamlessly.",
    image: "https://images.unsplash.com/photo-1517694712202-14819c9cb5c7?auto=format&fit=crop&w=2400&q=80",
    tags: ["API Integration", "Third-party Services", "Webhooks", "Automation"],
    whatYouGet: [
      "Integration with Stripe, PayPal, or other payment processors",
      "Email service integration (SendGrid, Mailgun, etc.)",
      "CRM integration (HubSpot, Pipedrive, Salesforce)",
      "Analytics and tracking setup",
      "Webhook handling and real-time updates",
      "Data synchronization between systems",
      "Error handling and retry logic",
      "Security and API key management",
      "Documentation and troubleshooting"
    ],
    process: [
      {
        step: "01",
        title: "API Review",
        description: "I review the third-party API documentation and plan the integration."
      },
      {
        step: "02",
        title: "Implementation",
        description: "I build the integration with proper error handling and security."
      },
      {
        step: "03",
        title: "Testing",
        description: "Thorough testing of all integration scenarios and edge cases."
      },
      {
        step: "04",
        title: "Deployment & Support",
        description: "Deploy to production and provide documentation for ongoing support."
      }
    ],
    techStack: [
      { category: "Payments", items: ["Stripe API", "PayPal", "Square"] },
      { category: "Communication", items: ["SendGrid", "Twilio", "Mailgun"] },
      { category: "CRM", items: ["HubSpot API", "Salesforce API", "Pipedrive"] },
      { category: "Tools", items: ["Node.js", "TypeScript", "Axios", "REST/GraphQL"] }
    ],
    faqs: [
      {
        q: "Which APIs can you integrate?",
        a: "Any API with documentation. I've worked with hundreds — payment processors, CRMs, email, analytics, automation platforms, and custom APIs."
      },
      {
        q: "How do you handle API rate limits?",
        a: "I implement caching, queuing, and batching to work within rate limits. For high-volume APIs, I discuss scaling strategies upfront."
      },
      {
        q: "What about API security?",
        a: "API keys are never exposed to the frontend. I use backend routes or serverless functions to keep keys secure."
      }
    ]
  },

  "013": {
    id: "013",
    title: "Shopify Development",
    tagline: "Fast, beautiful Shopify stores that sell.",
    description: "Shopify is a powerful e-commerce platform. I build custom Shopify themes and apps tailored to your brand, optimized for conversions and SEO.",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e05cde2a?auto=format&fit=crop&w=2400&q=80",
    tags: ["Shopify", "E-Commerce", "Liquid", "App Development"],
    whatYouGet: [
      "Custom Shopify theme development",
      "Liquid template programming",
      "Custom app development",
      "Payment gateway setup",
      "Shipping integration",
      "Product SEO optimization",
      "Conversion rate optimization",
      "Migration from other platforms",
      "App Store integration"
    ],
    process: [
      {
        step: "01",
        title: "Requirements",
        description: "Discuss your store needs, branding, and features."
      },
      {
        step: "02",
        title: "Theme Development",
        description: "Build a custom Shopify theme using Liquid and custom code."
      },
      {
        step: "03",
        title: "App Integration",
        description: "Add necessary Shopify apps and custom integrations."
      },
      {
        step: "04",
        title: "Launch & Training",
        description: "Deploy theme, configure store, and train you on management."
      }
    ],
    techStack: [
      { category: "Platform", items: ["Shopify", "Liquid", "Storefront API"] },
      { category: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
      { category: "Customization", items: ["Custom apps", "Webhooks", "REST API"] },
      { category: "Integrations", items: ["Payment gateways", "Shipping", "Analytics"] }
    ],
    faqs: [
      {
        q: "Should I use a pre-made Shopify theme or custom?",
        a: "Pre-made themes work for basic stores. Custom themes give you unique branding and better conversion optimization. I recommend custom for serious e-commerce."
      },
      {
        q: "Can you migrate my store from another platform?",
        a: "Yes — WooCommerce, BigCommerce, Squarespace, or custom platforms. Migration includes product, customer, and order history."
      },
      {
        q: "Do you help with product uploads?",
        a: "I can set up the system and import sample products. For large catalogs, I recommend using import tools or hiring a data specialist."
      }
    ]
  },

  "014": {
    id: "014",
    title: "WordPress Development",
    tagline: "Powerful, flexible WordPress sites when you need simplicity.",
    description: "WordPress powers a third of the web for good reason. I build custom WordPress sites optimized for performance and SEO, often faster than you'd expect.",
    image: "https://images.unsplash.com/photo-1517694712202-14819c9cb5c7?auto=format&fit=crop&w=2400&q=80",
    tags: ["WordPress", "PHP", "Plugins", "Themes"],
    whatYouGet: [
      "Custom WordPress theme development",
      "Plugin development or customization",
      "WooCommerce setup (if e-commerce)",
      "SEO plugin setup and configuration",
      "Custom post types and taxonomies",
      "Page builders (Elementor, custom)",
      "Performance optimization",
      "Security hardening",
      "Maintenance and support"
    ],
    process: [
      {
        step: "01",
        title: "Planning",
        description: "Design WordPress structure, plugins, and features."
      },
      {
        step: "02",
        title: "Development",
        description: "Build custom theme and plugins as needed."
      },
      {
        step: "03",
        title: "Content Setup",
        description: "Import content, set up menus, configure plugins."
      },
      {
        step: "04",
        title: "Training & Launch",
        description: "Train you on WordPress and prepare for launch."
      }
    ],
    techStack: [
      { category: "Platform", items: ["WordPress", "PHP", "MySQL"] },
      { category: "Plugins", items: ["ACF", "SEO plugins", "WooCommerce"] },
      { category: "Performance", items: ["Caching", "CDN", "Image optimization"] },
      { category: "Hosting", items: ["Managed WordPress hosting", "Security"] }
    ],
    faqs: [
      {
        q: "WordPress or Next.js — which is better?",
        a: "WordPress is great for blogs and content sites. Next.js is better for web apps and performance-critical sites. Choose based on your needs."
      },
      {
        q: "Is WordPress secure?",
        a: "Yes, with proper setup. I configure security plugins, regular updates, and backups to keep your site safe."
      },
      {
        q: "Can I use WordPress for e-commerce?",
        a: "Yes, with WooCommerce. It works well for most e-commerce needs, though Shopify is often simpler for large catalogs."
      }
    ]
  },

  "015": {
    id: "015",
    title: "Headless CMS Development",
    tagline: "Separate your content from your presentation for maximum flexibility.",
    description: "Headless CMS gives you content management flexibility without the limitations of traditional CMS. I integrate Sanity, Contentlayer, or similar with your Next.js or React frontend.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80",
    tags: ["Headless CMS", "Sanity", "Contentlayer", "API-driven"],
    whatYouGet: [
      "Headless CMS setup (Sanity, Contentlayer, etc.)",
      "Content model design",
      "Frontend integration",
      "Rich text editor configuration",
      "Media asset management",
      "Preview/draft functionality",
      "Content scheduling",
      "User roles and permissions",
      "Documentation"
    ],
    process: [
      {
        step: "01",
        title: "Content Structure",
        description: "Design the content model and information architecture."
      },
      {
        step: "02",
        title: "CMS Setup",
        description: "Configure headless CMS with your content model."
      },
      {
        step: "03",
        title: "Frontend Integration",
        description: "Connect frontend to CMS and fetch content dynamically."
      },
      {
        step: "04",
        title: "Training",
        description: "Train your team on content management and publishing."
      }
    ],
    techStack: [
      { category: "CMS", items: ["Sanity", "Contentlayer", "Hygraph"] },
      { category: "Frontend", items: ["Next.js", "React", "TypeScript"] },
      { category: "Integration", items: ["REST API", "GraphQL", "Real-time webhooks"] },
      { category: "Deployment", items: ["Vercel", "GitHub", "Automated deploys"] }
    ],
    faqs: [
      {
        q: "What's the difference between headless and traditional CMS?",
        a: "Traditional CMS (WordPress) ties content to a single presentation. Headless CMS separates them, giving you freedom to publish anywhere."
      },
      {
        q: "Should I use Sanity or Contentlayer?",
        a: "Sanity for larger teams and complex content. Contentlayer for simpler sites with Git-based content. I recommend based on your needs."
      },
      {
        q: "Can I edit content myself?",
        a: "Yes. The whole point of headless CMS is easy content editing by non-technical team members."
      }
    ]
  },

  "016": {
    id: "016",
    title: "UI/UX Frontend Development",
    tagline: "Beautiful, accessible, performant user interfaces.",
    description: "Great design means nothing without great implementation. I build pixel-perfect UIs with React and Next.js, focusing on accessibility, animation, and user experience.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2400&q=80",
    tags: ["Frontend", "UI/UX", "Accessibility", "Animation"],
    whatYouGet: [
      "Pixel-perfect design implementation",
      "Component library development",
      "Accessibility (WCAG compliance)",
      "Responsive design across devices",
      "Smooth animations and transitions",
      "Micro-interactions and feedback",
      "Performance optimization",
      "Cross-browser testing",
      "Design system documentation"
    ],
    process: [
      {
        step: "01",
        title: "Design Review",
        description: "I review Figma/XD designs and identify implementation approach."
      },
      {
        step: "02",
        title: "Component Development",
        description: "Build reusable, accessible components from design system."
      },
      {
        step: "03",
        title: "Integration",
        description: "Integrate with backend APIs and state management."
      },
      {
        step: "04",
        title: "Testing & Refinement",
        description: "Cross-browser testing and final refinements."
      }
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript"] },
      { category: "Styling", items: ["Tailwind CSS", "CSS Modules", "Framer Motion"] },
      { category: "Accessibility", items: ["ARIA", "Keyboard navigation", "Screen readers"] },
      { category: "Testing", items: ["Axe DevTools", "WAVE", "Manual testing"] }
    ],
    faqs: [
      {
        q: "Do you need the design file?",
        a: "Ideally yes (Figma or Adobe XD). If not, I can build from wireframes or your description."
      },
      {
        q: "Can you make animations smooth?",
        a: "Yes. Framer Motion is great for complex animations. I balance animations with performance to keep page speed high."
      },
      {
        q: "Is accessibility complex?",
        a: "Not really. Proper semantic HTML, ARIA labels, and keyboard navigation cover 90% of accessibility needs. I build with it baked in."
      }
    ]
  },

  "017": {
    id: "017",
    title: "Business Website Development",
    tagline: "Professional websites that convert visitors into clients.",
    description: "Every business needs a professional online presence. I build business websites designed to establish trust, communicate value, and turn visitors into leads or customers.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80",
    tags: ["Business", "Marketing", "Lead Generation", "Trust"],
    whatYouGet: [
      "Professional business site design",
      "Service/product showcase",
      "Lead capture forms",
      "Client testimonials section",
      "About and team pages",
      "Contact information and CTAs",
      "Google My Business integration",
      "Email lead notifications",
      "SEO optimization"
    ],
    process: [
      {
        step: "01",
        title: "Business Understanding",
        description: "Learn about your business, target audience, and competitive landscape."
      },
      {
        step: "02",
        title: "Site Structure",
        description: "Design site structure and content flow optimized for conversions."
      },
      {
        step: "03",
        title: "Development",
        description: "Build your site with conversion-focused design and functionality."
      },
      {
        step: "04",
        title: "Launch & Follow-up",
        description: "Deploy and set up systems to capture leads and track performance."
      }
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
      { category: "Forms", items: ["React Hook Form", "Email integration", "CRM sync"] },
      { category: "SEO", items: ["next-seo", "Schema markup", "Sitemap"] },
      { category: "Analytics", items: ["Google Analytics 4", "Conversion tracking"] }
    ],
    faqs: [
      {
        q: "How do you capture leads?",
        a: "Contact forms that email you and sync with your CRM. I can also set up WhatsApp integration for direct messaging."
      },
      {
        q: "Will my site get leads?",
        a: "A good website is necessary but not sufficient. Traffic comes from SEO, ads, or marketing. The website converts traffic into leads."
      },
      {
        q: "Can you help with content?",
        a: "I can guide content strategy and structure. For actual writing, I recommend a copywriter, but I can connect you if needed."
      }
    ]
  },

  "018": {
    id: "018",
    title: "Startup Website Development",
    tagline: "Credible, fast web presence for growing startups.",
    description: "Startups need web presence fast and affordable. I build lean, credible startup websites optimized for attracting investors, customers, and team members.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80",
    tags: ["Startups", "MVP", "Growth", "Bootstrap"],
    whatYouGet: [
      "Landing page or full website",
      "Credibility elements (team, testimonials, metrics)",
      "Lead capture and waitlist",
      "Blog setup for content marketing",
      "Fast, SEO-optimized site",
      "Social proof integration",
      "Email and SMS integration",
      "Analytics and tracking",
      "Cost-effective design"
    ],
    process: [
      {
        step: "01",
        title: "Vision & Goals",
        description: "Understand your startup vision and primary goal (funding, customers, hires)."
      },
      {
        step: "02",
        title: "Fast Design",
        description: "Design and build quickly — startup speed is essential."
      },
      {
        step: "03",
        title: "Launch & Iterate",
        description: "Launch with core features, then iterate based on feedback."
      },
      {
        step: "04",
        title: "Growth Support",
        description: "Stay available as you grow and your website needs evolve."
      }
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "Tailwind CSS", "TypeScript"] },
      { category: "CMS", items: ["Contentlayer", "Sanity"] },
      { category: "Leads", items: ["Zapier", "email integrations", "CRM sync"] },
      { category: "Analytics", items: ["GA4", "Conversion tracking", "Heatmaps"] }
    ],
    faqs: [
      {
        q: "Can we start with just a landing page?",
        a: "Yes. Many startups launch with a landing page, then expand. We can build it quickly and iterate."
      },
      {
        q: "Will investors be impressed by my website?",
        a: "A professional website shows you're serious. It's not the deciding factor, but it matters. Credibility through polish and clarity is important."
      },
      {
        q: "Can the site grow with me?",
        a: "Yes. I build with scaling in mind. As your startup grows, we can add features without rebuilding."
      }
    ]
  },

  "019": {
    id: "019",
    title: "Conversion-Focused Web Design",
    tagline: "Design every page to drive one specific outcome.",
    description: "Most websites are built for looks, not results. I design specifically for conversions — every color, button, and word is placed to maximize the desired action.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80",
    tags: ["CRO", "Conversion", "Design", "Psychology"],
    whatYouGet: [
      "Conversion psychology analysis",
      "CTA optimization and placement",
      "Form optimization (reduce friction)",
      "Trust signals and social proof",
      "A/B testing setup and guidance",
      "Heatmap and session recording",
      "Page speed optimization",
      "Mobile conversion optimization",
      "Conversion report and recommendations"
    ],
    process: [
      {
        step: "01",
        title: "Baseline Analysis",
        description: "I analyze current site, heatmaps, and visitor behavior."
      },
      {
        step: "02",
        title: "CRO Strategy",
        description: "Develop optimization strategy based on data and psychology."
      },
      {
        step: "03",
        title: "Implementation",
        description: "Build A/B tests and implement optimizations."
      },
      {
        step: "04",
        title: "Testing & Iteration",
        description: "Run tests, measure results, iterate continuously."
      }
    ],
    techStack: [
      { category: "Testing", items: ["Google Optimize", "Optimizely", "VWO"] },
      { category: "Analytics", items: ["GA4", "Heatmaps", "Session recordings"] },
      { category: "Frontend", items: ["React", "Next.js", "A/B test variations"] },
      { category: "Tools", items: ["Figma", "Data analysis", "Statistics"] }
    ],
    faqs: [
      {
        q: "How much can conversion rate improve?",
        a: "Depends on starting point. 10-30% improvement is common. Some sites see 50%+ gains with aggressive optimization."
      },
      {
        q: "How long do A/B tests take?",
        a: "Usually 2-4 weeks for statistical significance. Depends on traffic volume."
      },
      {
        q: "What if tests show no improvement?",
        a: "We learn from it and try different approaches. Testing is iterative — some tests fail, others win."
      }
    ]
  },

  "020": {
    id: "020",
    title: "Responsive Website Development",
    tagline: "Perfect on desktop, tablet, and mobile. Every time.",
    description: "Over 60% of web traffic is mobile. I build responsive websites that work beautifully on all devices, from large desktop monitors to small smartphones.",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=2400&q=80",
    tags: ["Responsive Design", "Mobile-First", "Cross-device", "Adaptive"],
    whatYouGet: [
      "Mobile-first design approach",
      "Flexible layouts (CSS Grid, Flexbox)",
      "Responsive images (srcset, webp)",
      "Touch-friendly navigation",
      "Fast mobile performance",
      "Testing on real devices",
      "Cross-browser compatibility",
      "Mobile form optimization",
      "Viewport optimization"
    ],
    process: [
      {
        step: "01",
        title: "Mobile Strategy",
        description: "Design mobile experience first, then enhance for larger screens."
      },
      {
        step: "02",
        title: "Responsive Code",
        description: "Build with flexible layouts using CSS Grid and Flexbox."
      },
      {
        step: "03",
        title: "Performance",
        description: "Optimize for mobile network and device performance."
      },
      {
        step: "04",
        title: "Testing",
        description: "Test on real phones and tablets, not just browser emulation."
      }
    ],
    techStack: [
      { category: "CSS", items: ["Tailwind CSS", "CSS Grid", "Flexbox", "Media queries"] },
      { category: "Responsive", items: ["srcset", "Picture element", "Responsive images"] },
      { category: "Performance", items: ["Mobile-first loading", "Lazy loading", "Compression"] },
      { category: "Testing", items: ["Real device testing", "Chrome DevTools", "Safari"] }
    ],
    faqs: [
      {
        q: "Should I have a separate mobile site?",
        a: "No. Responsive design is better for SEO and user experience. Separate mobile sites are outdated."
      },
      {
        q: "Why is my site slow on mobile?",
        a: "Usually large images, unoptimized JavaScript, or poor caching. I optimize all three."
      },
      {
        q: "How do you test on mobile?",
        a: "I test on real iPhones and Android phones, not just browser emulation. Physical testing reveals issues emulation misses."
      }
    ]
  },

  "021": {
    id: "021",
    title: "Technical SEO Optimization",
    tagline: "Fix the foundations Google looks at before any content.",
    description: "Technical SEO is the foundation of any SEO strategy. I audit and optimize your site's technical infrastructure so Google can crawl, index, and rank it properly.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=80",
    tags: ["Technical SEO", "Core Web Vitals", "Crawlability", "Indexing"],
    whatYouGet: [
      "XML sitemap and robots.txt optimization",
      "Crawl budget optimization",
      "Canonical tags and URL structure",
      "Core Web Vitals optimization",
      "Mobile friendliness testing",
      "Schema markup implementation",
      "Internal linking strategy",
      "Redirect chain cleanup",
      "Security (SSL/HTTPS) verification"
    ],
    process: [
      {
        step: "01",
        title: "Technical Audit",
        description: "Deep audit using Google Search Console, PageSpeed Insights, and Lighthouse."
      },
      {
        step: "02",
        title: "Issue Prioritization",
        description: "Identify and prioritize issues by SEO impact."
      },
      {
        step: "03",
        title: "Implementation",
        description: "Fix issues systematically — fastest wins first."
      },
      {
        step: "04",
        title: "Monitoring",
        description: "Set up Search Console monitoring to track improvements."
      }
    ],
    techStack: [
      { category: "Tools", items: ["Google Search Console", "Lighthouse", "PageSpeed", "Screaming Frog"] },
      { category: "Implementation", items: ["next-seo", "Schema markup", "Redirect management"] },
      { category: "Performance", items: ["Core Web Vitals", "Caching", "CDN"] },
      { category: "Monitoring", items: ["Search Console", "GA4", "Ranking tracking"] }
    ],
    faqs: [
      {
        q: "How much will technical SEO improve my rankings?",
        a: "Technical SEO removes barriers to ranking. It won't guarantee ranking #1, but it ensures Google can find and index your content properly."
      },
      {
        q: "What's the difference between technical and on-page SEO?",
        a: "Technical SEO is about how Google crawls and indexes your site. On-page SEO is about content optimization. Both matter."
      },
      {
        q: "How long do improvements take?",
        a: "Some technical fixes show results in days, others take weeks or months. It depends on how long Google takes to recrawl and re-index."
      }
    ]
  },

  "022": {
    id: "022",
    title: "Custom Dashboard Development",
    tagline: "Data visualization and management tools built for your business.",
    description: "Dashboards are powerful tools for understanding your business. I build custom dashboards to visualize data, track KPIs, and manage operations — all in one place.",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e05cde2a?auto=format&fit=crop&w=2400&q=80",
    tags: ["Dashboard", "Data Visualization", "Analytics", "Management"],
    whatYouGet: [
      "Custom dashboard design tailored to your KPIs",
      "Real-time data visualization",
      "Interactive charts and graphs",
      "Data filtering and drill-down",
      "Export reports (PDF, CSV)",
      "User roles and permissions",
      "Mobile responsive dashboard",
      "API integration for data sources",
      "Documentation and training"
    ],
    process: [
      {
        step: "01",
        title: "Requirements",
        description: "Understand your data sources, KPIs, and user needs."
      },
      {
        step: "02",
        title: "Design",
        description: "Design dashboard layout and visualization approach."
      },
      {
        step: "03",
        title: "Development",
        description: "Build dashboard with real-time data updates."
      },
      {
        step: "04",
        title: "Integration",
        description: "Integrate with your data sources and APIs."
      }
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript"] },
      { category: "Charts", items: ["Recharts", "Chart.js", "D3.js"] },
      { category: "Data", items: ["REST APIs", "GraphQL", "Real-time updates"] },
      { category: "Styling", items: ["Tailwind CSS", "Custom styling"] }
    ],
    faqs: [
      {
        q: "Can you pull data from our existing systems?",
        a: "Yes. I can integrate with databases, APIs, and third-party services to pull real-time data."
      },
      {
        q: "How often is the data updated?",
        a: "Real-time, near-real-time (seconds), or scheduled — depends on your needs and data source."
      },
      {
        q: "Can we export reports?",
        a: "Yes. Dashboards can export to PDF, CSV, or Excel for sharing and analysis."
      }
    ]
  },

  "023": {
    id: "023",
    title: "Admin Panel Development",
    tagline: "Manage your content and business from a powerful admin interface.",
    description: "Every SaaS or web app needs an admin panel. I build custom admin interfaces for managing users, content, settings, and operations — powerful and intuitive.",
    image: "https://images.unsplash.com/photo-1516534775068-bb57e5c42bb4?auto=format&fit=crop&w=2400&q=80",
    tags: ["Admin Panel", "Management", "CRUD", "Backend"],
    whatYouGet: [
      "User and role management",
      "Content CRUD operations",
      "Bulk operations and exports",
      "Search and filtering",
      "Settings and configuration",
      "Activity logs and audit trails",
      "Analytics and reporting",
      "Permission-based access control",
      "Mobile responsive admin UI"
    ],
    process: [
      {
        step: "01",
        title: "Requirements",
        description: "Understand what needs to be managed and by whom."
      },
      {
        step: "02",
        title: "Design",
        description: "Design intuitive admin interface for your workflows."
      },
      {
        step: "03",
        title: "Development",
        description: "Build admin panel with full CRUD functionality."
      },
      {
        step: "04",
        title: "Integration",
        description: "Integrate with your backend and database."
      }
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript"] },
      { category: "UI", items: ["Tailwind CSS", "shadcn/ui", "Data tables"] },
      { category: "Backend", items: ["Node.js", "REST API", "Database"] },
      { category: "Auth", items: ["JWT", "Session-based", "Role-based access"] }
    ],
    faqs: [
      {
        q: "How complex should the admin panel be?",
        a: "As complex as needed. Start with core features (CRUD), add more as you grow."
      },
      {
        q: "Can I use a third-party admin system?",
        a: "Yes, there are open-source options. I can customize them or build from scratch depending on your needs."
      },
      {
        q: "How do you handle permissions?",
        a: "Role-based access control (RBAC) is standard. Different users see different features based on their role."
      }
    ]
  },

  "024": {
    id: "024",
    title: "Portfolio Website Development",
    tagline: "Showcase your work and attract clients or employers.",
    description: "Your portfolio is your resume on the web. I build portfolio websites that showcase your best work, tell your story, and make a strong impression on potential clients or employers.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2400&q=80",
    tags: ["Portfolio", "Showcase", "Case Studies", "Personal Brand"],
    whatYouGet: [
      "Professional portfolio design",
      "Project showcase with case studies",
      "Before/after comparisons",
      "Client testimonials section",
      "Skills and expertise highlighting",
      "Contact and inquiry form",
      "Blog for thought leadership",
      "Social media integration",
      "SEO optimization"
    ],
    process: [
      {
        step: "01",
        title: "Story & Brand",
        description: "Understand your story, specialties, and target audience."
      },
      {
        step: "02",
        title: "Project Selection",
        description: "Curate best projects and write compelling case studies."
      },
      {
        step: "03",
        title: "Design & Build",
        description: "Design portfolio that showcases your work beautifully."
      },
      {
        step: "04",
        title: "Launch & Promotion",
        description: "Deploy and ensure it's discoverable through SEO."
      }
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "React", "TypeScript"] },
      { category: "Design", items: ["Tailwind CSS", "Animations", "Modern aesthetics"] },
      { category: "CMS", items: ["Sanity", "Contentlayer", "Markdown"] },
      { category: "SEO", items: ["next-seo", "Open Graph", "Sitemap"] }
    ],
    faqs: [
      {
        q: "How many projects should I showcase?",
        a: "Quality over quantity. 3-6 strong projects with case studies is better than 20 weak ones."
      },
      {
        q: "Should I include testimonials?",
        a: "Yes. Social proof is powerful. Client testimonials build trust with potential clients."
      },
      {
        q: "Can I update my portfolio easily?",
        a: "Yes. I'll set it up with a CMS so you can add projects without touching code."
      }
    ]
  },

  "025": {
    id: "025",
    title: "Personal Brand Website",
    tagline: "Build your authority and stand out in your field.",
    description: "Your personal website is your digital home. I help you build a professional online presence that establishes authority, builds your audience, and opens opportunities.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2400&q=80",
    tags: ["Personal Brand", "Authority", "Content", "Thought Leadership"],
    whatYouGet: [
      "Professional brand identity",
      "About page that tells your story",
      "Blog for content and SEO",
      "Newsletter subscription option",
      "Social proof and testimonials",
      "Speaking and media mentions",
      "Contact and collaboration inquiries",
      "Email capture and automation",
      "Content calendar setup"
    ],
    process: [
      {
        step: "01",
        title: "Brand Definition",
        description: "Define your brand, voice, and unique value proposition."
      },
      {
        step: "02",
        title: "Content Strategy",
        description: "Plan content pillars and editorial calendar."
      },
      {
        step: "03",
        title: "Site Development",
        description: "Build site with blog, newsletter, and growth tools."
      },
      {
        step: "04",
        title: "Growth Setup",
        description: "Set up email marketing, social integration, and tracking."
      }
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "React", "TypeScript"] },
      { category: "Blog", items: ["Contentlayer", "Sanity", "MDX"] },
      { category: "Email", items: ["Resend", "Buttondown", "Substack"] },
      { category: "Growth", items: ["GA4", "Newsletter tracking", "Social"] }
    ],
    faqs: [
      {
        q: "How important is a personal website?",
        a: "Very. It's your owned platform, unlike social media. Essential for building authority and creating opportunities."
      },
      {
        q: "Should I publish frequently?",
        a: "Quality over frequency. 1-2 posts per month is better than 1 per week of mediocre content."
      },
      {
        q: "Can I grow an audience from my website?",
        a: "Yes. Through SEO, newsletter, and social sharing. Growth is slower than social media but more sustainable."
      }
    ]
  },

  "026": {
    id: "026",
    title: "Speed Optimization & Core Web Vitals",
    tagline: "90+ Lighthouse score, every time. Fast websites rank higher and convert better.",
    description: "Page speed is a ranking factor and a conversion factor. I obsessively optimize every byte, every image, and every script to get your Lighthouse score to 90+.",
    image: "https://images.unsplash.com/photo-1523994005018-02e83b00c207?auto=format&fit=crop&w=2400&q=80",
    tags: ["Speed", "Performance", "Optimization", "Core Web Vitals"],
    whatYouGet: [
      "Comprehensive speed audit",
      "Image optimization and WebP conversion",
      "JavaScript code splitting and lazy loading",
      "CSS and font optimization",
      "Caching strategy implementation",
      "CDN setup and configuration",
      "Core Web Vitals optimization (LCP, FID, CLS)",
      "Performance monitoring and alerts",
      "Detailed optimization report"
    ],
    process: [
      {
        step: "01",
        title: "Speed Audit",
        description: "Measure current performance using Lighthouse, WebPageTest, and monitoring tools."
      },
      {
        step: "02",
        title: "Optimization Plan",
        description: "Identify bottlenecks and prioritize improvements by impact."
      },
      {
        step: "03",
        title: "Implementation",
        description: "Implement optimizations: images, code, caching, CDN."
      },
      {
        step: "04",
        title: "Continuous Monitoring",
        description: "Set up monitoring to maintain performance over time."
      }
    ],
    techStack: [
      { category: "Measurement", items: ["Lighthouse", "WebPageTest", "GTmetrix", "SpeedCurve"] },
      { category: "Image", items: ["ImageOptim", "WebP", "Responsive images"] },
      { category: "Caching", items: ["Vercel Edge Caching", "Cloudflare", "Browser caching"] },
      { category: "Monitoring", items: ["Sentry", "New Relic", "Datadog"] }
    ],
    faqs: [
      {
        q: "What's a good Lighthouse score?",
        a: "90+ is excellent, 80-90 is good, 50-80 needs work, below 50 is critical."
      },
      {
        q: "How much faster will my site be?",
        a: "Depends on starting point. Most sites see 30-50% improvement in load time."
      },
      {
        q: "Will optimizations break anything?",
        a: "No. All changes are thoroughly tested. I never trade functionality for speed."
      }
    ]
  },

  "027": {
    id: "027",
    title: "Modern Web Animation & Interactive UI",
    tagline: "Smooth animations and interactions that delight users and showcase your brand.",
    description: "Animation isn't just for show — it guides users, builds trust, and makes sites memorable. I build smooth, performant animations using Framer Motion and modern CSS.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2400&q=80",
    tags: ["Animation", "Framer Motion", "Interaction", "Micro-interactions"],
    whatYouGet: [
      "Page transition animations",
      "Scroll-triggered animations",
      "Hover and click interactions",
      "Loading states and feedback",
      "Parallax and depth effects",
      "Modal and overlay animations",
      "Form interaction animations",
      "Performance-optimized animations",
      "Animation guidelines documentation"
    ],
    process: [
      {
        step: "01",
        title: "Animation Strategy",
        description: "Identify where animation adds value and guides users."
      },
      {
        step: "02",
        title: "Design & Planning",
        description: "Plan animations for consistency and performance."
      },
      {
        step: "03",
        title: "Implementation",
        description: "Build animations using Framer Motion and CSS."
      },
      {
        step: "04",
        title: "Performance Testing",
        description: "Ensure animations don't hurt performance or accessibility."
      }
    ],
    techStack: [
      { category: "Animation", items: ["Framer Motion", "React Spring", "CSS animations"] },
      { category: "Frontend", items: ["React", "Next.js", "TypeScript"] },
      { category: "Performance", items: ["GPU acceleration", "requestAnimationFrame", "Optimize motion"] },
      { category: "Tools", items: ["Chrome DevTools", "Performance profiler"] }
    ],
    faqs: [
      {
        q: "Can you do complex animations?",
        a: "Yes. Anything from simple hover effects to complex orchestrated sequences."
      },
      {
        q: "Do animations hurt performance?",
        a: "Not if done right. I use GPU-accelerated animations and keep frame rates at 60fps."
      },
      {
        q: "Are animations accessible?",
        a: "Yes. I respect prefers-reduced-motion and provide non-animated alternatives."
      }
    ]
  },

  "028": {
    id: "028",
    title: "Web Application UI Development",
    tagline: "Complex, scalable UIs for demanding web applications.",
    description: "Web applications require more than a pretty design — they need intuitive UIs that scale with complexity. I build robust, accessible application UIs using React and modern patterns.",
    image: "https://images.unsplash.com/photo-1560264357-8d9766bed4ad?auto=format&fit=crop&w=2400&q=80",
    tags: ["Web App", "UI", "Scalable", "Complex"],
    whatYouGet: [
      "Component library and design system",
      "Data table and list components",
      "Form handling and validation",
      "Navigation and layout systems",
      "Real-time data visualization",
      "Keyboard shortcuts and accessibility",
      "Responsive mobile UI",
      "State management patterns",
      "Performance optimization"
    ],
    process: [
      {
        step: "01",
        title: "App Understanding",
        description: "Understand app structure, data model, and user workflows."
      },
      {
        step: "02",
        title: "Design System",
        description: "Create reusable component library based on app needs."
      },
      {
        step: "03",
        title: "UI Development",
        description: "Build application UI with components and patterns."
      },
      {
        step: "04",
        title: "Integration",
        description: "Integrate with backend APIs and state management."
      }
    ],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Next.js"] },
      { category: "UI", items: ["Tailwind CSS", "shadcn/ui", "Headless UI"] },
      { category: "Data", items: ["React Query", "SWR", "Zustand"] },
      { category: "Tables", items: ["TanStack Table", "AG Grid"] }
    ],
    faqs: [
      {
        q: "Can you design the UI too?",
        a: "I can guide UI design. For professional design, I recommend a designer to create Figma designs, then I implement."
      },
      {
        q: "How do you handle complex forms?",
        a: "React Hook Form with validation, error handling, and user-friendly feedback."
      },
      {
        q: "Can the UI scale with the app?",
        a: "Yes. I build with growth in mind. Component library scales with your app complexity."
      }
    ]
  },

  "029": {
    id: "029",
    title: "Custom PHP Development",
    tagline: "Powerful backend systems built with PHP when you need them.",
    description: "PHP powers a large part of the web. When PHP is the right tool for your project, I build clean, modern PHP applications with current best practices.",
    image: "https://images.unsplash.com/photo-1517694712202-14819c9cb5c7?auto=format&fit=crop&w=2400&q=80",
    tags: ["PHP", "Backend", "REST API", "Custom Systems"],
    whatYouGet: [
      "Modern PHP development (PHP 8+)",
      "RESTful API design",
      "Database design and queries",
      "Authentication and authorization",
      "Error handling and logging",
      "Security best practices",
      "Performance optimization",
      "Testing and documentation",
      "Deployment guidance"
    ],
    process: [
      {
        step: "01",
        title: "Requirements",
        description: "Understand requirements and API design."
      },
      {
        step: "02",
        title: "Architecture",
        description: "Plan PHP architecture, database design, and API structure."
      },
      {
        step: "03",
        title: "Development",
        description: "Build clean, tested PHP code following best practices."
      },
      {
        step: "04",
        title: "Deployment",
        description: "Deploy and set up monitoring for production."
      }
    ],
    techStack: [
      { category: "Language", items: ["PHP 8+", "Composer", "Modern patterns"] },
      { category: "Framework", items: ["Laravel", "Slim", "Custom PHP"] },
      { category: "Database", items: ["MySQL", "PostgreSQL", "Eloquent ORM"] },
      { category: "API", items: ["REST API", "JSON", "API documentation"] }
    ],
    faqs: [
      {
        q: "When should I use PHP vs Node.js?",
        a: "PHP is great for traditional server-side rendering and when you need simplicity. Node.js is better for real-time and complex applications."
      },
      {
        q: "Is PHP secure?",
        a: "Yes, with proper practices. I follow security best practices: prepared statements, input validation, secure password hashing."
      },
      {
        q: "Can PHP scale?",
        a: "Yes. Large sites like WordPress, Facebook originally, and many others use PHP at scale with proper architecture."
      }
    ]
  },

  "030": {
    id: "030",
    title: "Freelance Web Developer for Hire",
    tagline: "Flexible, on-demand web development without the agency overhead.",
    description: "Need an extra pair of hands on your development team? I work as a freelance developer for hire — flexible hours, no long-term contracts, project-based or retainer options available.",
    image: "https://images.unsplash.com/photo-1517694712202-14819c9cb5c7?auto=format&fit=crop&w=2400&q=80",
    tags: ["Freelance", "Hourly", "Retainer", "Flexible"],
    whatYouGet: [
      "Flexible engagement model (hourly, project, retainer)",
      "Quick onboarding to your codebase",
      "Seamless integration with your team",
      "Regular updates and communication",
      "No long-term contracts",
      "Quality guaranteed",
      "UTC timezone compatibility",
      "Remote-first workflow",
      "Portfolio of successful projects"
    ],
    process: [
      {
        step: "01",
        title: "Discussion",
        description: "Understand your needs, tech stack, and project scope."
      },
      {
        step: "02",
        title: "Agreement",
        description: "Define scope, rate, and engagement model."
      },
      {
        step: "03",
        title: "Onboarding",
        description: "Quick onboarding to your codebase and workflow."
      },
      {
        step: "04",
        title: "Delivery",
        description: "Regular updates, quality code, and clear communication."
      }
    ],
    techStack: [
      { category: "Languages", items: ["JavaScript", "TypeScript", "PHP", "Python"] },
      { category: "Frontend", items: ["React", "Next.js", "Vue", "Angular"] },
      { category: "Backend", items: ["Node.js", "Express", "PHP", "Django"] },
      { category: "Everything", items: ["Whatever you need"] }
    ],
    faqs: [
      {
        q: "Do you require contracts?",
        a: "Simple agreements for clarity, but no long lock-in contracts. Month-to-month or project-based work."
      },
      {
        q: "What's your response time?",
        a: "Usually respond within a few hours during business hours. Critical issues get priority."
      },
      {
        q: "Can I hire you part-time?",
        a: "Yes. Flexible hours — whether you need 5 hours/week or 40 hours/week."
      },
      {
        q: "How do you fit with my existing team?",
        a: "I integrate quickly. I'm comfortable in any tech stack and work well with existing teams."
      }
    ]
  },

  "031": {
    id: "031",
    title: "Business Email Setup",
    tagline: "Professional email addresses on your domain — configured correctly the first time.",
    description: "Nothing says 'amateur' like a gmail.com business email. I set up professional email addresses on your domain with proper DNS records, spam protection, and deliverability optimization. Whether you choose Zoho, Google Workspace, or cPanel email, I'll configure it right.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=2400&q=80",
    tags: ["Email", "DNS", "Setup", "Professional"],
    whatYouGet: [
      "Email accounts on your domain (you@yourdomain.com)",
      "DNS record configuration (MX, SPF, DKIM, DMARC)",
      "Email client setup (Outlook, Apple Mail, mobile)",
      "Webmail access configuration",
      "Spam filter optimization",
      "Email forwarding and aliases",
      "Signature template setup",
      "Documentation for adding future accounts",
      "7 days post-setup support"
    ],
    process: [
      {
        step: "01",
        title: "Platform Selection",
        description: "We choose the best email platform based on your budget and needs — Zoho (free option), Google Workspace, or cPanel."
      },
      {
        step: "02",
        title: "DNS Configuration",
        description: "I configure MX, SPF, DKIM, and DMARC records for deliverability and spam protection."
      },
      {
        step: "03",
        title: "Account Setup",
        description: "Create email accounts, configure webmail, and set up your email clients."
      },
      {
        step: "04",
        title: "Testing & Handoff",
        description: "Test send/receive, verify spam scores, and provide documentation for ongoing management."
      }
    ],
    techStack: [
      { category: "Platforms", items: ["Zoho Mail", "Google Workspace", "cPanel Email", "Microsoft 365"] },
      { category: "DNS Records", items: ["MX", "SPF", "DKIM", "DMARC", "TXT"] },
      { category: "Clients", items: ["Outlook", "Apple Mail", "Gmail App", "Thunderbird"] },
      { category: "Testing", items: ["Mail-Tester", "MXToolbox", "DMARC Analyzer"] }
    ],
    faqs: [
      {
        q: "Which email platform do you recommend?",
        a: "Zoho Mail is free for up to 5 users and works well for small businesses. Google Workspace is best if you need Google Drive and Calendar integration. cPanel email works if you already have hosting."
      },
      {
        q: "Will my emails still go to spam?",
        a: "With proper SPF, DKIM, and DMARC records, your deliverability will be excellent. I test every setup with mail-tester.com to ensure high scores."
      },
      {
        q: "Can I add more email accounts later?",
        a: "Yes. I provide documentation so you can add accounts yourself, or I can do it for a small fee."
      },
      {
        q: "How long does setup take?",
        a: "Most setups are complete within 24-48 hours. DNS propagation can take up to 24 hours."
      }
    ]
  },

  "032": {
    id: "032",
    title: "Email Troubleshooting",
    tagline: "Can't send? Can't receive? Emails going to spam? I'll fix it.",
    description: "Email problems are frustrating and can cost you business. Whether emails are bouncing, going to spam, not arriving, or authentication is failing — I diagnose and fix the issue quickly so you can get back to work.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2400&q=80",
    tags: ["Email", "Troubleshooting", "Deliverability", "Fix"],
    whatYouGet: [
      "Complete email system diagnosis",
      "DNS record audit and fixes (MX, SPF, DKIM, DMARC)",
      "Blacklist check and removal requests",
      "Spam filter configuration",
      "Email client troubleshooting",
      "Sending reputation analysis",
      "Authentication issue resolution",
      "Detailed report of issues found and fixed",
      "Prevention recommendations"
    ],
    process: [
      {
        step: "01",
        title: "Diagnosis",
        description: "I analyze your DNS records, check blacklists, test authentication, and identify the root cause."
      },
      {
        step: "02",
        title: "Fix Implementation",
        description: "I implement fixes — DNS corrections, authentication setup, spam filter adjustments, or client configuration."
      },
      {
        step: "03",
        title: "Testing",
        description: "I test thoroughly — send/receive tests, spam score checks, and authentication verification."
      },
      {
        step: "04",
        title: "Documentation",
        description: "You receive a report of what was wrong, what I fixed, and how to prevent future issues."
      }
    ],
    techStack: [
      { category: "Diagnostic", items: ["MXToolbox", "Mail-Tester", "DMARC Analyzer", "Blacklist checkers"] },
      { category: "DNS", items: ["MX records", "SPF", "DKIM", "DMARC", "PTR"] },
      { category: "Platforms", items: ["Zoho", "Google Workspace", "cPanel", "Microsoft 365"] },
      { category: "Testing", items: ["Email delivery tests", "Spam score analysis", "Authentication checks"] }
    ],
    faqs: [
      {
        q: "How quickly can you fix my email?",
        a: "Most issues are diagnosed within 1-2 hours. Fixes depend on the problem — DNS changes take 24-48 hours to propagate, but configuration issues are often fixed same day."
      },
      {
        q: "Why are my emails going to spam?",
        a: "Common causes: missing SPF/DKIM/DMARC records, blacklisted IP, poor sending reputation, or content triggers. I'll identify your specific cause."
      },
      {
        q: "I'm on a blacklist — can you help?",
        a: "Yes. I identify which blacklists, fix the underlying cause, and submit removal requests. Most removals take 24-72 hours."
      },
      {
        q: "Do you support all email providers?",
        a: "Yes — Google Workspace, Microsoft 365, Zoho, cPanel/Webmail, and custom SMTP servers. If it sends email, I can troubleshoot it."
      }
    ]
  },

  "033": {
    id: "033",
    title: "Zoho Mail Setup",
    tagline: "Free or paid Zoho Mail — properly configured with your domain.",
    description: "Zoho Mail offers professional email hosting with a generous free tier. I set up Zoho Mail with your domain, configure all DNS records for optimal deliverability, and ensure everything works perfectly across all your devices.",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=2400&q=80",
    tags: ["Zoho", "Email", "Free", "Business"],
    whatYouGet: [
      "Zoho Mail account setup (free tier: 5 users, paid: unlimited)",
      "Domain verification and DNS configuration",
      "MX, SPF, DKIM, and DMARC record setup",
      "User account creation",
      "Email client configuration (desktop and mobile)",
      "Zoho webmail access setup",
      "Email migration from previous provider (if needed)",
      "Signature and branding setup",
      "Admin training documentation"
    ],
    process: [
      {
        step: "01",
        title: "Zoho Account Setup",
        description: "I create your Zoho organization and verify your domain ownership."
      },
      {
        step: "02",
        title: "DNS Configuration",
        description: "I configure MX records for Zoho and set up SPF, DKIM, and DMARC for deliverability."
      },
      {
        step: "03",
        title: "User Setup",
        description: "Create email accounts, configure webmail access, and set up email clients on your devices."
      },
      {
        step: "04",
        title: "Testing & Training",
        description: "Test deliverability, provide admin documentation, and walk you through managing accounts."
      }
    ],
    techStack: [
      { category: "Platform", items: ["Zoho Mail Free", "Zoho Mail Lite", "Zoho Mail Premium", "Zoho Workplace"] },
      { category: "DNS", items: ["MX records", "SPF (TXT)", "DKIM (TXT)", "DMARC (TXT)"] },
      { category: "Clients", items: ["Zoho Mail App", "Outlook", "Apple Mail", "Any IMAP client"] },
      { category: "Features", items: ["Webmail", "Calendar", "Contacts", "Tasks"] }
    ],
    faqs: [
      {
        q: "Is Zoho Mail really free?",
        a: "Yes, Zoho Mail Free gives you 5 email accounts with 5GB storage each, webmail access, and mobile apps. Paid plans add more users, storage, and features."
      },
      {
        q: "Can I migrate my existing emails to Zoho?",
        a: "Yes. Zoho has migration tools for Gmail, other Zoho accounts, and IMAP servers. I can handle the migration for you."
      },
      {
        q: "Will Zoho emails avoid spam folders?",
        a: "With proper DNS setup (which I configure), Zoho has excellent deliverability. I verify with spam score testing."
      },
      {
        q: "Can I upgrade to paid Zoho later?",
        a: "Yes, upgrading is seamless. All your emails and settings transfer automatically."
      }
    ]
  },

  "034": {
    id: "034",
    title: "Google Workspace Setup",
    tagline: "Gmail for your business — professional email with Google's reliability.",
    description: "Google Workspace (formerly G Suite) gives you Gmail, Drive, Calendar, and Meet on your own domain. I handle the complete setup — domain verification, DNS configuration, user creation, and email client setup — so you get the power of Google with your professional domain.",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=2400&q=80",
    tags: ["Google", "Gmail", "Workspace", "Business"],
    whatYouGet: [
      "Google Workspace account setup and domain verification",
      "DNS configuration (MX, SPF, DKIM, DMARC)",
      "User account creation and organization structure",
      "Gmail configuration on desktop and mobile",
      "Google Drive setup and sharing settings",
      "Google Calendar and Meet configuration",
      "Security settings and 2FA setup",
      "Email migration from previous provider",
      "Admin console training"
    ],
    process: [
      {
        step: "01",
        title: "Workspace Setup",
        description: "I create your Google Workspace organization and verify your domain."
      },
      {
        step: "02",
        title: "DNS & Email Config",
        description: "Configure MX records, SPF, DKIM, and DMARC for Gmail on your domain."
      },
      {
        step: "03",
        title: "User & App Setup",
        description: "Create user accounts, configure Gmail apps, and set up Drive/Calendar."
      },
      {
        step: "04",
        title: "Migration & Training",
        description: "Migrate existing emails, set up security, and train you on admin console."
      }
    ],
    techStack: [
      { category: "Platform", items: ["Google Workspace Business Starter", "Business Standard", "Business Plus", "Enterprise"] },
      { category: "Apps", items: ["Gmail", "Google Drive", "Google Calendar", "Google Meet", "Docs/Sheets/Slides"] },
      { category: "DNS", items: ["MX records", "SPF", "DKIM", "DMARC", "Domain verification TXT"] },
      { category: "Security", items: ["2-Step Verification", "Admin controls", "Data retention"] }
    ],
    faqs: [
      {
        q: "How much does Google Workspace cost?",
        a: "Business Starter is $6/user/month with 30GB storage. Business Standard is $12/user/month with 2TB. I recommend Starter for most small businesses."
      },
      {
        q: "Can I migrate from my current email?",
        a: "Yes. Google has migration tools for most providers. I handle the migration to ensure no emails are lost."
      },
      {
        q: "Is Google Workspace better than Zoho?",
        a: "Google is more integrated if you use Google tools heavily. Zoho is more affordable (free tier available). I recommend based on your needs."
      },
      {
        q: "How long does setup take?",
        a: "Basic setup takes 2-4 hours. DNS propagation takes up to 24 hours. Full migration depends on email volume."
      }
    ]
  },

  "035": {
    id: "035",
    title: "cPanel Email Troubleshooting",
    tagline: "cPanel email issues fixed — DNS, delivery, spam filters, quotas.",
    description: "cPanel email can be frustrating when it breaks. Emails not sending, not receiving, going to spam, quota issues, authentication failures — I diagnose and fix cPanel email problems quickly so your business communication keeps flowing.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2400&q=80",
    tags: ["cPanel", "Email", "Troubleshooting", "Hosting"],
    whatYouGet: [
      "Complete cPanel email diagnosis",
      "DNS record audit and correction",
      "Mail queue investigation and clearing",
      "Spam filter (SpamAssassin) configuration",
      "Email authentication setup (SPF, DKIM)",
      "Quota management and optimization",
      "Email client configuration fixes",
      "Blacklist check and removal",
      "Server-side delivery issue resolution"
    ],
    process: [
      {
        step: "01",
        title: "Diagnosis",
        description: "I check DNS records, mail logs, spam filters, quotas, and authentication to find the problem."
      },
      {
        step: "02",
        title: "Server-Side Fixes",
        description: "Fix cPanel configuration, clear mail queues, adjust spam filters, and correct DNS."
      },
      {
        step: "03",
        title: "Client-Side Fixes",
        description: "Reconfigure email clients with correct settings, SSL certificates, and ports."
      },
      {
        step: "04",
        title: "Testing & Prevention",
        description: "Test thoroughly and implement preventive measures to avoid future issues."
      }
    ],
    techStack: [
      { category: "Platform", items: ["cPanel", "WHM", "Exim", "Dovecot"] },
      { category: "Spam", items: ["SpamAssassin", "BoxTrapper", "Email Filters"] },
      { category: "DNS", items: ["MX records", "SPF", "DKIM via cPanel", "PTR records"] },
      { category: "Clients", items: ["Outlook", "Apple Mail", "Thunderbird", "Webmail (Roundcube, Horde)"] }
    ],
    faqs: [
      {
        q: "Why aren't my cPanel emails sending?",
        a: "Common causes: mail queue issues, quota exceeded, SPF/DKIM not configured, or IP blacklisted. I'll find and fix your specific issue."
      },
      {
        q: "My cPanel emails go to spam — why?",
        a: "Usually missing SPF/DKIM records, shared hosting IP reputation issues, or SpamAssassin misconfiguration. Proper authentication fixes most cases."
      },
      {
        q: "Can you fix issues without cPanel access?",
        a: "I need cPanel or WHM access to fix most issues. I can diagnose some problems with just DNS access, but fixes require panel access."
      },
      {
        q: "Should I switch from cPanel email to Zoho/Google?",
        a: "If you have ongoing deliverability issues or need more features, yes. I can help migrate. cPanel email works fine for basic needs with proper setup."
      }
    ]
  },

  "036": {
    id: "036",
    title: "Website Troubleshooting",
    tagline: "Site down? Errors? Slow loading? I diagnose and fix web issues fast.",
    description: "Website problems cost you visitors and revenue. Whether your site is completely down, showing errors, loading slowly, or behaving strangely — I diagnose the root cause and fix it quickly. No generic advice, just solutions.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=2400&q=80",
    tags: ["Website", "Troubleshooting", "Debugging", "Fix"],
    whatYouGet: [
      "Complete website diagnosis",
      "Server error investigation (500, 502, 503, 504)",
      "Database connection troubleshooting",
      "SSL/HTTPS certificate fixes",
      "DNS and domain issues resolution",
      "Performance bottleneck identification",
      "Plugin/theme conflict resolution (WordPress)",
      "Code error debugging",
      "Detailed report with fixes applied"
    ],
    process: [
      {
        step: "01",
        title: "Initial Assessment",
        description: "I assess the symptoms, check server status, DNS, SSL, and error logs to identify the problem category."
      },
      {
        step: "02",
        title: "Deep Diagnosis",
        description: "I dig into server logs, database, code, or hosting configuration to find the root cause."
      },
      {
        step: "03",
        title: "Fix Implementation",
        description: "I implement the fix — server configuration, code changes, database repairs, or hosting adjustments."
      },
      {
        step: "04",
        title: "Verification & Prevention",
        description: "I verify the site works correctly and recommend steps to prevent recurrence."
      }
    ],
    techStack: [
      { category: "Servers", items: ["Apache", "Nginx", "LiteSpeed", "Node.js"] },
      { category: "Platforms", items: ["WordPress", "Next.js", "PHP", "Vercel", "cPanel hosting"] },
      { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
      { category: "Tools", items: ["Error logs", "Server monitoring", "Browser DevTools", "GTmetrix"] }
    ],
    faqs: [
      {
        q: "How quickly can you fix my website?",
        a: "Most issues are diagnosed within 1-2 hours. Simple fixes (SSL, DNS, configuration) are done same day. Complex code issues may take longer."
      },
      {
        q: "My site shows a white screen — what's wrong?",
        a: "White screen (WSOD) usually means a PHP fatal error, memory limit exceeded, or plugin conflict. I check error logs to find the exact cause."
      },
      {
        q: "Can you fix WordPress sites?",
        a: "Yes. I troubleshoot WordPress frequently — plugin conflicts, database issues, theme problems, update failures, and security breaches."
      },
      {
        q: "Do you need hosting access?",
        a: "Usually yes — I need server/hosting access to view logs and make fixes. I can diagnose some issues externally, but fixes require access."
      }
    ]
  },

  "037": {
    id: "037",
    title: "Tech Strategy & Consulting",
    tagline: "Prevent expensive mistakes before a single line of code is written.",
    description: "Not ready to build yet? I help founders and teams make the right technical decisions upfront — from choosing between Next.js, WordPress, or Shopify, to reviewing existing architecture, auditing code performance, and creating technical roadmaps. Clear, jargon-free advice that saves you thousands in wrong turns.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80",
    tags: ["Consulting", "Tech Strategy", "Architecture", "Code Review"],
    whatYouGet: [
      "Architecture & Tech Stack Audits — choose the right framework for your goals",
      "Code & Performance Reviews — actionable checklist for your developers",
      "Technical Roadmaps — clear implementation plan with priorities",
      "Core Web Vitals analysis and optimization recommendations",
      "Third-party API and integration strategy",
      "Hosting, security, and scaling guidance",
      "1-page summary PDF with all recommendations",
      "Follow-up Q&A support"
    ],
    process: [
      {
        step: "01",
        title: "Discovery Call",
        description: "We discuss your business goals, technical challenges, budget, and timeline to understand what you're trying to achieve."
      },
      {
        step: "02",
        title: "Analysis & Review",
        description: "I review your existing code, architecture, or requirements depending on where you are in your journey."
      },
      {
        step: "03",
        title: "Strategy Session",
        description: "60-minute deep-dive video call where I walk you through my recommendations and answer all your questions."
      },
      {
        step: "04",
        title: "Deliverables",
        description: "You receive a clear summary document with tech stack recommendations, architecture diagram, and actionable next steps."
      }
    ],
    techStack: [
      { category: "Frameworks", items: ["Next.js", "React", "WordPress", "Shopify"] },
      { category: "Analysis", items: ["Core Web Vitals", "Lighthouse", "Code review"] },
      { category: "Architecture", items: ["System design", "API strategy", "Database selection"] },
      { category: "Infrastructure", items: ["Hosting", "CDN", "Security", "Scaling"] }
    ],
    faqs: [
      {
        q: "Who is this service for?",
        a: "Founders choosing tech stacks, businesses with existing teams who want an outside expert opinion, or anyone about to invest significant money in development and wants to validate their approach first."
      },
      {
        q: "How is this different from your free consultation?",
        a: "The free consultation is for scoping projects I might build. This paid service is dedicated strategic advice — even if you never hire me to build anything. You get my full attention and documented recommendations."
      },
      {
        q: "What if I want you to build it after consulting?",
        a: "Many clients do. The consulting fee can be credited toward development if we proceed within 30 days. The roadmap we create together becomes the blueprint for the build."
      },
      {
        q: "Can you review code from my existing developers?",
        a: "Yes. I can audit your repository, analyze performance, identify issues, and give your team a prioritized checklist of improvements."
      }
    ]
  }
};

// For services without full details, use this default template
export const defaultServiceDetail: ServiceDetail = {
  id: "000",
  title: "Service Details",
  tagline: "Professional web development service",
  description: "Get in touch for more details about this service.",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2400&q=80",
  tags: ["Web Development", "Custom Solutions"],
  whatYouGet: [
    "Professional development",
    "Clean, maintainable code",
    "SEO optimization",
    "Responsive design",
    "Performance tuning",
    "Documentation",
    "Post-launch support",
  ],
  process: [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your needs and planning the approach.",
    },
    {
      step: "02",
      title: "Development",
      description: "Building your solution with regular updates.",
    },
    {
      step: "03",
      title: "Launch",
      description: "Testing, optimization, and deployment.",
    },
  ],
  techStack: [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript"] },
    { category: "Styling", items: ["Tailwind CSS", "Modern CSS"] },
    { category: "Tools", items: ["Git", "VS Code", "Figma"] },
  ],
  faqs: [
    {
      q: "How do I get started?",
      a: "Contact me via the form or WhatsApp. We'll discuss your needs and I'll provide a detailed quote.",
    },
    {
      q: "What's your typical timeline?",
      a: "Depends on the project scope. Simple projects take 1-2 weeks, complex ones 4-8 weeks.",
    },
    {
      q: "Do you offer support after launch?",
      a: "Yes, I offer post-launch support packages tailored to your needs.",
    },
  ],
};
