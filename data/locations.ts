export interface LocationData {
  slug: string;
  city: string;
  country: string;
  flag: string;
  tagline: string;
  description: string;
  heroImage: string;
  timezone: string;
  timezoneOffset: string;
  clientTypes: string[];
  services: string[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
  stats: {
    clients: string;
    projects: string;
    years: string;
  };
  content: {
    intro: string;
    whyMe: string[];
    process: string;
  };
}

export const locations: LocationData[] = [
  // Existing locations
  {
    slug: "dubai",
    city: "Dubai",
    country: "UAE",
    flag: "🇦🇪",
    tagline: "Your trusted web developer in Dubai — without the agency overhead.",
    description: "I've been building websites for Dubai-based businesses for over 5 years. From startups in DIFC to trading companies in Deira, I understand what UAE businesses need: fast, professional sites that work across cultures and convert visitors into customers.",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=80",
    timezone: "Gulf Standard Time",
    timezoneOffset: "UTC+4",
    clientTypes: ["Trading companies", "Real estate agencies", "Restaurants & hospitality", "Professional services", "E-commerce", "Healthcare clinics"],
    services: ["Custom website development", "E-commerce solutions", "Website redesign", "SEO optimization", "Maintenance & support"],
    testimonial: {
      quote: "Akshay understood exactly what we needed for the UAE market. The site was delivered fast, looks professional, and our enquiries have tripled since launch.",
      name: "Ahmed K.",
      role: "Director, Trading Company · Dubai"
    },
    stats: {
      clients: "12+",
      projects: "25+",
      years: "5+"
    },
    content: {
      intro: "Dubai moves fast. Your website needs to keep up. I build sites for UAE businesses that load quickly, look professional, and convert visitors into customers. No agency middlemen, no drawn-out timelines — just direct communication with the person actually building your site.",
      whyMe: [
        "I understand the UAE market — bilingual layouts, WhatsApp integration, mobile-first design for a mobile-first market.",
        "Direct communication via WhatsApp. I'm 1.5 hours ahead of Dubai, so we overlap perfectly during business hours.",
        "Fixed pricing with no surprises. I quote what I'll charge, and that's what you pay.",
        "Fast turnaround. Most sites are delivered in 2-4 weeks, not months."
      ],
      process: "We start with a WhatsApp call to understand your business and goals. I send a clear proposal within 48 hours. Once approved, I build while you watch progress on a staging site. Launch happens on your schedule, and I stick around for support."
    }
  },
  {
    slug: "kerala",
    city: "Kerala",
    country: "India",
    flag: "🇮🇳",
    tagline: "A web developer who speaks your language — literally and professionally.",
    description: "Based in Kerala, I work with local businesses, startups, and NRIs who need a developer they can trust. Malayalam, English, Hindi — whatever works. From Kochi to Calicut, I understand the local market and deliver websites that work for it.",
    heroImage: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=2400&q=80",
    timezone: "India Standard Time",
    timezoneOffset: "UTC+5:30",
    clientTypes: ["Local SMBs", "Tourism & hospitality", "Healthcare", "Educational institutions", "Startups", "NRI businesses"],
    services: ["Business websites", "Tourism & booking sites", "Portfolio & personal sites", "E-commerce", "Website maintenance"],
    testimonial: {
      quote: "Finally, a developer who actually picks up the phone. Akshay delivered our clinic website on time and still helps us with updates. Highly recommend.",
      name: "Dr. Priya M.",
      role: "Director, Medical Clinic · Kochi"
    },
    stats: {
      clients: "20+",
      projects: "40+",
      years: "6+"
    },
    content: {
      intro: "Kerala businesses deserve better than template sites from Fiverr or overpriced agencies from Bangalore. I'm based right here, I understand the market, and I deliver professional websites at fair prices. Whether you're a restaurant in Fort Kochi or a clinic in Thrissur, I'll build something that works.",
      whyMe: [
        "Local presence, global quality. I bring international standards to Kerala businesses.",
        "Multilingual support — Malayalam, English, Hindi. Whatever your customers need.",
        "Affordable pricing calibrated for the local market, without compromising on quality.",
        "Face-to-face meetings available for Kochi-area clients. Otherwise, video calls work perfectly."
      ],
      process: "I start by understanding your business — what you sell, who buys it, what makes you different. Then I build a site that communicates that clearly. No jargon, no unnecessary complexity. Just a website that works."
    }
  },
  {
    slug: "sydney",
    city: "Sydney",
    country: "Australia",
    flag: "🇦🇺",
    tagline: "Quality web development for Australian businesses — at a fair price.",
    description: "Australian businesses often face a choice: expensive local agencies or unreliable offshore developers. I offer a third option. Professional-grade development with direct communication, delivered at a reasonable price point without the typical offshore communication headaches.",
    heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=2400&q=80",
    timezone: "Australian Eastern Time",
    timezoneOffset: "UTC+10/11",
    clientTypes: ["Professional services", "Small businesses", "Startups", "Consultants", "Creative agencies", "Health & wellness"],
    services: ["Business websites", "Web applications", "Landing pages", "Performance optimization", "Ongoing maintenance"],
    testimonial: {
      quote: "Working with Akshay felt like having a local developer at half the price. Clear communication, no timezone issues, and the quality speaks for itself.",
      name: "Sarah L.",
      role: "Founder, Consulting Firm · Sydney"
    },
    stats: {
      clients: "8+",
      projects: "15+",
      years: "3+"
    },
    content: {
      intro: "I work with Australian businesses who want quality without the Sydney agency price tag. The timezone difference actually works in our favor — I can work on your site while you sleep and have updates ready by your morning. Most of my Australian clients find this surprisingly efficient.",
      whyMe: [
        "Clear English communication with no cultural barriers. I've worked with Australian clients for years.",
        "Timezone advantage — submit feedback in the evening, see updates by morning.",
        "Australian-quality work at international rates. No compromises on professionalism.",
        "Reliable and responsive. I don't disappear after delivery."
      ],
      process: "We start with a video call during your morning (my evening) to discuss the project. I work overnight your time, sending daily progress updates. You review during your day, I implement during your night. Surprisingly smooth once you try it."
    }
  },
  {
    slug: "doha",
    city: "Doha",
    country: "Qatar",
    flag: "🇶🇦",
    tagline: "Professional web development for Qatar's growing business landscape.",
    description: "Qatar's economy is booming, and businesses need websites that match their ambition. I work with Doha-based companies who want professional, fast, mobile-optimized websites without the overhead of a local agency or the risks of untested freelancers.",
    heroImage: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2400&q=80",
    timezone: "Arabia Standard Time",
    timezoneOffset: "UTC+3",
    clientTypes: ["Professional services", "Hospitality", "Real estate", "Construction", "Retail", "Consultancies"],
    services: ["Corporate websites", "E-commerce", "Landing pages", "Website redesign", "SEO & performance"],
    testimonial: {
      quote: "Akshay delivered exactly what we needed — a professional site that works perfectly in Arabic and English. The project was smooth from start to finish.",
      name: "Khalid A.",
      role: "Managing Partner, Consultancy · Doha"
    },
    stats: {
      clients: "5+",
      projects: "10+",
      years: "3+"
    },
    content: {
      intro: "Qatar businesses operate at a high standard, and your website should reflect that. I build professional, bilingual websites for Doha companies — sites that load fast, work perfectly on mobile, and present your business exactly as it deserves to be presented.",
      whyMe: [
        "Experience with Arabic-English bilingual websites. Proper RTL support, not an afterthought.",
        "Understanding of Gulf business culture and communication expectations.",
        "Same timezone region — I'm 1.5 hours ahead, so we work the same business hours.",
        "Professional delivery with documentation and ongoing support options."
      ],
      process: "We connect via WhatsApp or email to discuss your needs. I provide a detailed proposal with timeline and fixed pricing. Development happens on a staging site you can review anytime. Launch when you're satisfied, and I remain available for ongoing support."
    }
  },

  // Saudi Arabia Locations
  {
    slug: "riyadh",
    city: "Riyadh",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    tagline: "Expert freelance web developer in Riyadh — aligned with Vision 2030 digital goals.",
    description: "I help Riyadh businesses build powerful, conversion-focused websites that match the Kingdom's digital ambitions. From tech startups in KAFD to established enterprises in Olaya, I deliver professional web development with direct communication and fixed pricing.",
    heroImage: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=2400&q=80",
    timezone: "Arabia Standard Time",
    timezoneOffset: "UTC+3",
    clientTypes: ["Tech startups", "Corporate enterprises", "E-commerce businesses", "Healthcare providers", "Real estate companies", "Financial services", "Government contractors"],
    services: ["Custom website development", "E-commerce solutions", "Web applications", "SEO optimization", "Arabic-English bilingual sites", "Performance optimization"],
    testimonial: {
      quote: "Akshay delivered a website that perfectly represents our brand in both Arabic and English. Fast, professional, and understands the Saudi market. Highly recommended for any Riyadh business.",
      name: "Mohammed S.",
      role: "CEO, Tech Startup · Riyadh"
    },
    stats: {
      clients: "15+",
      projects: "30+",
      years: "4+"
    },
    content: {
      intro: "Riyadh is the heart of Saudi Arabia's digital transformation. As the Kingdom accelerates towards Vision 2030 goals, businesses need websites that match this ambition — fast, professional, and built for both Arabic and English audiences. I specialize in creating high-performance websites for Riyadh businesses that convert visitors into customers.",
      whyMe: [
        "Deep understanding of Saudi business culture and Vision 2030 digital requirements.",
        "Expert in Arabic-English bilingual websites with proper RTL implementation — not an afterthought.",
        "Direct WhatsApp communication. I'm in a nearby timezone, so we work during the same business hours.",
        "Fixed pricing with transparent contracts. You know exactly what you're paying before we start.",
        "Modern tech stack: Next.js, React, and Tailwind CSS for blazing-fast, SEO-optimized sites."
      ],
      process: "We begin with a discovery call to understand your business, target audience, and goals. I deliver a detailed proposal within 48 hours with fixed pricing. Development happens on a live staging site you can review anytime. I iterate based on your feedback until launch, and provide ongoing support afterwards."
    }
  },
  {
    slug: "jeddah",
    city: "Jeddah",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    tagline: "Professional web development for Jeddah's thriving business community.",
    description: "Jeddah's position as Saudi Arabia's commercial gateway demands websites that impress. I build fast, beautiful, bilingual websites for Jeddah businesses — from trading companies along the Corniche to hospitality brands in Al-Balad. No agency overhead, just quality work delivered on time.",
    heroImage: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=2400&q=80",
    timezone: "Arabia Standard Time",
    timezoneOffset: "UTC+3",
    clientTypes: ["Trading companies", "Hospitality & tourism", "Retail businesses", "Import/export companies", "Restaurants & cafes", "Wedding & event services", "Healthcare clinics"],
    services: ["Business websites", "E-commerce platforms", "Restaurant & menu sites", "Booking systems", "Website redesign", "SEO & local search optimization"],
    testimonial: {
      quote: "Our restaurant needed a website that worked perfectly in Arabic and English with online reservations. Akshay delivered exactly that — beautiful design, fast loading, and easy to update ourselves.",
      name: "Fatima A.",
      role: "Owner, Restaurant Group · Jeddah"
    },
    stats: {
      clients: "12+",
      projects: "25+",
      years: "4+"
    },
    content: {
      intro: "Jeddah is Saudi Arabia's business and cultural hub, where commerce meets creativity. Your website needs to reflect that energy — professional enough for corporate clients, engaging enough for consumers, and fast enough for Saudi Arabia's mobile-first users. I specialize in building websites that help Jeddah businesses stand out in an increasingly competitive digital landscape.",
      whyMe: [
        "Extensive experience with Jeddah's diverse business community — from traditional trading to modern e-commerce.",
        "Bilingual Arabic-English websites built properly, with native RTL support and culturally appropriate design.",
        "Mobile-first development for Saudi Arabia's smartphone-dominant market.",
        "Local SEO expertise to help your business rank in Jeddah and across the Western Province.",
        "Competitive pricing without compromising on quality or professionalism."
      ],
      process: "We start with a consultation to understand your business and competitive landscape. I research your market and propose a site structure that serves your goals. Development is iterative — you see progress weekly and provide feedback. Launch is followed by 30 days of priority support."
    }
  },
  {
    slug: "dammam",
    city: "Dammam",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    tagline: "Reliable web development for Eastern Province businesses — Dammam, Dhahran, and beyond.",
    description: "The Eastern Province powers Saudi Arabia's economy, and businesses here need websites that match their professional standards. I work with companies across Dammam, Dhahran, and the industrial zones to build high-performance websites that generate leads and establish credibility.",
    heroImage: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=2400&q=80",
    timezone: "Arabia Standard Time",
    timezoneOffset: "UTC+3",
    clientTypes: ["Oil & gas contractors", "Industrial services", "Engineering firms", "Logistics companies", "B2B service providers", "Professional services", "Manufacturing"],
    services: ["Corporate websites", "B2B lead generation sites", "Company profile websites", "Industrial service catalogs", "SEO for B2B", "Website maintenance"],
    testimonial: {
      quote: "As an engineering firm, we needed a professional website that showcases our capabilities to enterprise clients. Akshay understood our industry and delivered a site that has directly generated new contracts.",
      name: "Abdulrahman T.",
      role: "Director, Engineering Firm · Dammam"
    },
    stats: {
      clients: "8+",
      projects: "18+",
      years: "3+"
    },
    content: {
      intro: "Eastern Province businesses operate in a demanding environment where professionalism and reliability are non-negotiable. Your website needs to communicate that same standard. I specialize in building corporate websites for Dammam-area companies — sites that establish credibility, generate leads, and support your business development efforts.",
      whyMe: [
        "Understanding of B2B and industrial sector requirements — I've built sites for oil & gas contractors, engineering firms, and industrial service providers.",
        "Professional, credibility-focused design that speaks to enterprise clients and decision-makers.",
        "SEO strategy tailored for B2B search — targeting the keywords your potential clients are actually searching.",
        "Fast, reliable communication via WhatsApp and email. Same timezone means same business hours.",
        "Ongoing maintenance and support to keep your site secure and updated."
      ],
      process: "We discuss your business, target clients, and sales process. I propose a site structure designed to convert visitors into qualified leads. Development includes clear calls-to-action, professional case studies presentation, and contact forms that work. Post-launch, I help you track performance and optimize."
    }
  },
  {
    slug: "khobar",
    city: "Khobar",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    tagline: "Modern web development for Khobar's tech-savvy business community.",
    description: "Khobar sits at the intersection of Saudi Arabia's energy industry and its tech future. I build modern, fast websites for businesses here — whether you're a tech startup, an established service provider, or an enterprise serving the Aramco ecosystem. Direct communication, professional results, fair pricing.",
    heroImage: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2400&q=80",
    timezone: "Arabia Standard Time",
    timezoneOffset: "UTC+3",
    clientTypes: ["Tech companies", "Professional services", "Aramco contractors", "Startups", "Consultancies", "Training providers", "IT services"],
    services: ["Startup websites", "Tech company sites", "SaaS landing pages", "Web applications", "API integrations", "Performance optimization"],
    testimonial: {
      quote: "We needed a developer who could build a modern, fast web application — not just a basic website. Akshay delivered exactly that, with clean code and excellent performance. Will work with him again.",
      name: "Tariq M.",
      role: "Founder, SaaS Startup · Khobar"
    },
    stats: {
      clients: "10+",
      projects: "22+",
      years: "4+"
    },
    content: {
      intro: "Khobar's business community is tech-savvy and discerning. You know what good websites look like, and you expect the same standard for your own. I build modern, high-performance websites using the latest technologies — Next.js, React, TypeScript — delivering the speed and polish that tech-forward businesses demand.",
      whyMe: [
        "Modern tech stack expertise — I use the same tools as top Silicon Valley companies: Next.js, React, Tailwind CSS.",
        "Clean, maintainable code that other developers can work with if needed.",
        "Experience with tech startups and SaaS companies — I understand your audience and requirements.",
        "API integrations, custom functionality, and web applications — not just template sites.",
        "Direct communication with a developer, not a sales team. You talk to the person building your site."
      ],
      process: "We discuss your product, users, and technical requirements. I propose a solution that balances sophistication with practicality. Development is agile — you see working features regularly and we iterate together. Launch includes documentation and handoff if needed."
    }
  },
  {
    slug: "mecca",
    city: "Mecca",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    tagline: "Trusted web development for Mecca's hospitality and service businesses.",
    description: "Mecca welcomes millions of visitors annually, and businesses serving these guests need websites that work flawlessly in multiple languages. I specialize in building hospitality-focused websites for Mecca businesses — hotels, tour operators, transport services, and retail — with proper Arabic, English, and Urdu support.",
    heroImage: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=2400&q=80",
    timezone: "Arabia Standard Time",
    timezoneOffset: "UTC+3",
    clientTypes: ["Hotels & accommodations", "Umrah tour operators", "Transport services", "Religious tourism", "Retail & shopping", "Food & beverage", "Healthcare services"],
    services: ["Hotel & booking websites", "Tour operator platforms", "Multi-language sites", "Booking systems", "Mobile-optimized sites", "Local SEO"],
    testimonial: {
      quote: "Our hotel needed a website that serves guests from around the world in their languages. Akshay built a beautiful, fast site with Arabic, English, and Urdu — and the booking inquiries have increased significantly.",
      name: "Ibrahim H.",
      role: "General Manager, Hotel · Mecca"
    },
    stats: {
      clients: "6+",
      projects: "14+",
      years: "3+"
    },
    content: {
      intro: "Mecca businesses serve a unique, international audience. Your website needs to communicate effectively across languages and cultures, load fast on any device, and convert visitors into bookings or inquiries. I build hospitality-focused websites for Mecca businesses that handle this complexity while remaining easy for you to manage.",
      whyMe: [
        "Expertise in multi-language websites — Arabic, English, Urdu, and more — with proper RTL support.",
        "Understanding of hospitality and tourism business needs — booking systems, tour packages, accommodation showcases.",
        "Mobile-first design for travelers who browse primarily on phones.",
        "Fast-loading sites optimized for international visitors with varying connection speeds.",
        "WhatsApp and contact integrations that make it easy for guests to reach you."
      ],
      process: "We start by understanding your guests — where they come from, what they need, how they search. I build a site that speaks their language and guides them to take action. Development includes proper SEO for religious tourism keywords and integration with your booking systems."
    }
  },
  {
    slug: "medina",
    city: "Medina",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    tagline: "Professional web development for Medina's hospitality and service sectors.",
    description: "As Saudi Arabia's second holiest city, Medina serves millions of visitors who need to find accommodation, services, and guidance. I help Medina businesses reach these visitors with professional, multi-language websites that convert browsers into customers.",
    heroImage: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=2400&q=80",
    timezone: "Arabia Standard Time",
    timezoneOffset: "UTC+3",
    clientTypes: ["Hotels & hospitality", "Tour operators", "Transport providers", "Restaurants", "Retail stores", "Local services", "Healthcare"],
    services: ["Hospitality websites", "Booking platforms", "Multi-language sites", "Restaurant websites", "Local business sites", "SEO optimization"],
    testimonial: {
      quote: "Akshay created a website for our tour company that works beautifully in four languages. Our international clients can now find and book our services easily. Excellent work and professional communication.",
      name: "Yusuf K.",
      role: "Owner, Tour Company · Medina"
    },
    stats: {
      clients: "5+",
      projects: "12+",
      years: "3+"
    },
    content: {
      intro: "Medina businesses serve visitors from across the globe, each with different languages and expectations. Your website is often their first impression of your business — it needs to be professional, fast, and accessible in multiple languages. I specialize in building websites for Medina's hospitality and service sectors that meet international standards.",
      whyMe: [
        "Multi-language website expertise — Arabic, English, Urdu, Indonesian, and more.",
        "Hospitality industry experience with hotels, tour operators, and service providers.",
        "Mobile-optimized design for travelers searching on their phones.",
        "Integration with WhatsApp, booking systems, and Google Maps.",
        "SEO strategy for religious tourism and Medina-specific search terms."
      ],
      process: "We discuss your business and the visitors you serve. I research how your target audience searches and what they need to see. Development focuses on clear communication, easy contact methods, and proper language support. Launch includes SEO setup and analytics to track your results."
    }
  },

  // New Saudi Arabia location
  {
    slug: "dhahran",
    city: "Dhahran",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    tagline: "Premium web development for Dhahran's corporate and tech ecosystem.",
    description: "Dhahran is home to Saudi Aramco and a thriving corporate ecosystem. I build enterprise-grade websites for businesses operating in this demanding market — professional, secure, and built to enterprise standards. From company profile sites to complex web applications, I deliver quality that matches Dhahran's high expectations.",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80",
    timezone: "Arabia Standard Time",
    timezoneOffset: "UTC+3",
    clientTypes: ["Aramco contractors", "Engineering companies", "IT service providers", "Corporate enterprises", "Consultancies", "Training institutes", "Professional services"],
    services: ["Enterprise websites", "Corporate web applications", "Contractor profile sites", "Secure client portals", "B2B platforms", "Technical documentation sites"],
    testimonial: {
      quote: "Working with enterprise clients demands a certain standard. Akshay understood that immediately and delivered a website that meets the stringent requirements of our Aramco-certified business. Professional from start to finish.",
      name: "Saeed A.",
      role: "Managing Director, Engineering Contractor · Dhahran"
    },
    stats: {
      clients: "7+",
      projects: "16+",
      years: "3+"
    },
    content: {
      intro: "Dhahran businesses operate at the highest standards — your website needs to reflect that. Whether you're an Aramco contractor, an engineering firm, or a corporate service provider, I build websites that communicate professionalism, competence, and reliability. These aren't flashy marketing sites — they're serious business tools built for serious businesses.",
      whyMe: [
        "Enterprise-level quality and security standards appropriate for corporate environments.",
        "Understanding of B2B sales cycles and what decision-makers look for in contractor websites.",
        "Clean, professional design that prioritizes credibility over trends.",
        "Technical expertise with modern frameworks and secure development practices.",
        "Reliable communication and project management — no surprises, no excuses."
      ],
      process: "We start by understanding your business requirements, compliance needs, and target audience. I propose a solution that balances technical sophistication with practical usability. Development follows structured milestones with regular reviews. Launch includes full documentation and training if needed."
    }
  },

  // Qatar locations
  {
    slug: "lusail",
    city: "Lusail",
    country: "Qatar",
    flag: "🇶🇦",
    tagline: "Cutting-edge web development for Lusail's smart city vision.",
    description: "Lusail represents Qatar's future — a smart, sustainable city built from the ground up. Businesses here expect the same forward-thinking approach in their digital presence. I build modern, high-performance websites for Lusail companies using the latest technologies: Next.js, React, and cloud-native architectures.",
    heroImage: "https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?auto=format&fit=crop&w=2400&q=80",
    timezone: "Arabia Standard Time",
    timezoneOffset: "UTC+3",
    clientTypes: ["Tech startups", "Real estate developers", "Smart city services", "Innovation companies", "Sustainability firms", "Modern enterprises", "SaaS businesses"],
    services: ["Startup websites", "SaaS landing pages", "Real estate platforms", "Web applications", "Progressive web apps", "API integrations"],
    testimonial: {
      quote: "Lusail businesses need cutting-edge solutions, not outdated templates. Akshay delivered a blazing-fast Next.js site that perfectly represents our tech-forward brand. Exactly what we needed.",
      name: "Nasser M.",
      role: "Founder, PropTech Startup · Lusail"
    },
    stats: {
      clients: "4+",
      projects: "9+",
      years: "2+"
    },
    content: {
      intro: "Lusail is Qatar's innovation hub — a city designed for the future. Your business operates here because you're forward-thinking, and your website should demonstrate that same vision. I specialize in modern web development using the same technologies as top tech companies worldwide, delivering sites that are fast, scalable, and built to impress.",
      whyMe: [
        "Expertise in modern tech stacks — Next.js 14, React 18, TypeScript, Tailwind CSS, and cloud deployments.",
        "Performance obsession — Core Web Vitals optimization, sub-second page loads, and smooth interactions.",
        "Understanding of tech startup and SaaS business models and what investors/customers expect to see.",
        "Mobile-first, responsive design that works flawlessly on any device.",
        "Direct communication with an actual developer, not a project manager reading from a script."
      ],
      process: "We discuss your product, market, and technical requirements. I propose a modern architecture that balances cutting-edge capabilities with practical maintenance. Development is iterative with weekly demos. Launch includes performance monitoring, analytics setup, and optional ongoing optimization."
    }
  },
  {
    slug: "al-rayyan",
    city: "Al Rayyan",
    country: "Qatar",
    flag: "🇶🇦",
    tagline: "Professional web development for Al Rayyan's diverse business community.",
    description: "Al Rayyan is Qatar's largest municipality by area and home to a diverse business landscape. From sports facilities to family businesses, education centers to retail, I help Al Rayyan companies establish strong online presences with bilingual websites that convert visitors into customers.",
    heroImage: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=2400&q=80",
    timezone: "Arabia Standard Time",
    timezoneOffset: "UTC+3",
    clientTypes: ["Sports clubs & facilities", "Education centers", "Family businesses", "Healthcare providers", "Retail stores", "Restaurants", "Local services"],
    services: ["Business websites", "Sports club sites", "Educational platforms", "Booking systems", "E-commerce stores", "Multi-language sites"],
    testimonial: {
      quote: "Our sports academy needed a website that appeals to both Arabic and expat families. Akshay created a beautiful bilingual site with easy registration and clear information. Inquiries have increased noticeably.",
      name: "Omar F.",
      role: "Director, Sports Academy · Al Rayyan"
    },
    stats: {
      clients: "3+",
      projects: "7+",
      years: "2+"
    },
    content: {
      intro: "Al Rayyan businesses serve Qatar's most diverse community — local families, expats, and visitors all mix here. Your website needs to speak to this varied audience effectively. I build bilingual websites for Al Rayyan companies that communicate clearly in both Arabic and English, work perfectly on mobile, and drive real business results.",
      whyMe: [
        "Experience serving Al Rayyan's diverse demographics — proper Arabic-English bilingual implementation.",
        "Mobile-first design for Qatar's smartphone-dominant market.",
        "Understanding of family-oriented businesses and how to present services that appeal to parents.",
        "Local SEO for Al Rayyan and surrounding areas to capture nearby searches.",
        "Fair pricing appropriate for local businesses without agency overhead."
      ],
      process: "We start by understanding who you serve and what makes your business different. I build a site that communicates your value clearly in both languages. Development includes proper bilingual SEO, contact forms, and WhatsApp integration for easy inquiries. Launch comes with training so you can update content yourself."
    }
  },
  {
    slug: "al-wakrah",
    city: "Al Wakrah",
    country: "Qatar",
    flag: "🇶🇦",
    tagline: "Quality web development for Al Wakrah's growing business sector.",
    description: "Al Wakrah is growing rapidly as Qatar expands south from Doha. New businesses are opening, and established ones are modernizing. I help Al Wakrah companies build professional websites that establish credibility and attract customers from across Qatar's southern region.",
    heroImage: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=2400&q=80",
    timezone: "Arabia Standard Time",
    timezoneOffset: "UTC+3",
    clientTypes: ["Local businesses", "Healthcare clinics", "Restaurants", "Retail stores", "Professional services", "Construction companies", "Family enterprises"],
    services: ["Local business websites", "Restaurant & cafe sites", "Professional service sites", "Healthcare websites", "Business directories", "Mobile-optimized sites"],
    testimonial: {
      quote: "As a new medical center in Al Wakrah, we needed to establish credibility fast. Akshay built us a professional website that patients trust. Clean design, easy appointment booking, and excellent support.",
      name: "Dr. Layla S.",
      role: "Director, Medical Center · Al Wakrah"
    },
    stats: {
      clients: "3+",
      projects: "6+",
      years: "2+"
    },
    content: {
      intro: "Al Wakrah is one of Qatar's fastest-growing areas, and businesses here need digital presence that matches the city's momentum. Whether you're opening a new clinic, restaurant, or service business, I'll build you a website that attracts local customers and establishes your credibility in this competitive market.",
      whyMe: [
        "Focus on local business needs — clear contact information, Google Maps integration, easy mobile access.",
        "Bilingual Arabic-English sites that serve Al Wakrah's mixed demographics.",
        "Fast delivery appropriate for businesses that need to launch quickly.",
        "Affordable pricing calibrated for local SMBs, not enterprise budgets.",
        "Post-launch support to help you update content and respond to customer needs."
      ],
      process: "We discuss your business, competitors, and target customers. I build a straightforward, professional site that communicates what you do and how to reach you. No unnecessary complexity — just a website that works. Launch includes basic SEO and Google Business integration."
    }
  },

  // Oman locations
  {
    slug: "muscat",
    city: "Muscat",
    country: "Oman",
    flag: "🇴🇲",
    tagline: "Expert web development for Muscat's thriving business community.",
    description: "Muscat is Oman's commercial heart, where tradition meets modernity. I work with businesses across the capital — from trading companies in Ruwi to hospitality brands in Shatti Al Qurum — building professional websites that drive growth and establish digital credibility in Oman's competitive market.",
    heroImage: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=2400&q=80",
    timezone: "Gulf Standard Time",
    timezoneOffset: "UTC+4",
    clientTypes: ["Trading companies", "Hospitality & tourism", "Professional services", "Retail businesses", "Healthcare providers", "Real estate", "Import/export companies"],
    services: ["Corporate websites", "E-commerce platforms", "Hotel & tourism sites", "Business directories", "Professional portfolios", "SEO & local search"],
    testimonial: {
      quote: "Finding a reliable web developer in the region is challenging. Akshay delivered our trading company website on time, on budget, and with excellent quality. Highly recommend for Muscat businesses.",
      name: "Ahmed Al-Balushi",
      role: "Managing Director, Trading Company · Muscat"
    },
    stats: {
      clients: "6+",
      projects: "13+",
      years: "3+"
    },
    content: {
      intro: "Muscat businesses operate in a sophisticated market where professionalism and trust matter. Your website is often the first impression potential clients have of your company — it needs to communicate competence, reliability, and quality. I specialize in building websites for Muscat companies that establish credibility and generate business.",
      whyMe: [
        "Understanding of Oman's business culture and communication expectations.",
        "Experience across Muscat's key sectors — trading, hospitality, professional services, and retail.",
        "Bilingual Arabic-English websites with proper cultural adaptation, not just translation.",
        "Same timezone region (only 30 minutes difference) — we work the same business hours.",
        "Fixed pricing with clear contracts. No hidden costs or scope creep."
      ],
      process: "We begin with a discovery call to understand your business, market position, and goals. I deliver a detailed proposal within 48 hours with transparent pricing. Development happens iteratively with weekly progress updates. You review on a staging site before launch, and I provide 30 days of priority support post-launch."
    }
  },
  {
    slug: "seeb",
    city: "Seeb",
    country: "Oman",
    flag: "🇴🇲",
    tagline: "Affordable web development for Seeb's local business community.",
    description: "Seeb is home to Muscat's airport and a thriving local business scene. I help Seeb businesses — from family restaurants to service providers — establish professional online presence without agency overhead. Quality web development at fair prices for companies that need results, not corporate complexity.",
    heroImage: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=2400&q=80",
    timezone: "Gulf Standard Time",
    timezoneOffset: "UTC+4",
    clientTypes: ["Family businesses", "Restaurants & cafes", "Local services", "Retail shops", "Healthcare clinics", "Educational centers", "Transportation services"],
    services: ["Small business websites", "Restaurant sites", "Service provider sites", "Appointment booking", "Business listings", "Mobile-first sites"],
    testimonial: {
      quote: "Our restaurant needed a simple, professional website with our menu and contact details. Akshay delivered exactly that at a fair price. Easy to work with and responds quickly on WhatsApp.",
      name: "Hassan Al-Lawati",
      role: "Owner, Restaurant · Seeb"
    },
    stats: {
      clients: "4+",
      projects: "8+",
      years: "2+"
    },
    content: {
      intro: "Seeb businesses don't need complicated corporate websites — you need straightforward, professional sites that show customers what you offer and how to reach you. I build practical websites for local Seeb companies that work on mobile, load fast, and don't require a manual to update.",
      whyMe: [
        "Straightforward approach focused on local business needs — clear menus, contact forms, Google Maps.",
        "Affordable pricing appropriate for family businesses and local SMBs.",
        "Fast delivery — most sites launch within 2-3 weeks.",
        "Bilingual support for Arabic and English-speaking customers.",
        "Post-launch training so you can update content yourself without ongoing developer costs."
      ],
      process: "We have a quick call or WhatsApp conversation about what you need. I send a simple proposal with fixed pricing. Build takes 2-3 weeks with one or two review checkpoints. Launch includes basic training on updating content. Ongoing support available if needed but not required."
    }
  },
  {
    slug: "sohar",
    city: "Sohar",
    country: "Oman",
    flag: "🇴🇲",
    tagline: "Professional web development for Sohar's industrial and business sectors.",
    description: "Sohar is Oman's industrial powerhouse, home to major manufacturing, logistics, and port operations. I work with Sohar-based companies that need professional B2B websites — industrial service providers, logistics companies, and engineering firms serving the industrial complex and beyond.",
    heroImage: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=2400&q=80",
    timezone: "Gulf Standard Time",
    timezoneOffset: "UTC+4",
    clientTypes: ["Industrial services", "Logistics companies", "Manufacturing", "Engineering firms", "Port-related businesses", "B2B service providers", "Construction companies"],
    services: ["Industrial company websites", "B2B service sites", "Logistics platforms", "Company profile sites", "Technical catalogs", "Client portals"],
    testimonial: {
      quote: "As a logistics provider serving Sohar Port, we needed a professional website that communicates competence to enterprise clients. Akshay delivered a site that has directly contributed to winning new contracts. Excellent work.",
      name: "Khalid Al-Harthy",
      role: "CEO, Logistics Company · Sohar"
    },
    stats: {
      clients: "5+",
      projects: "11+",
      years: "3+"
    },
    content: {
      intro: "Sohar businesses operate in demanding B2B environments where professionalism is non-negotiable. Your website needs to communicate capability, reliability, and scale to decision-makers evaluating contractors and service providers. I build industrial-focused websites for Sohar companies that win business and establish credibility.",
      whyMe: [
        "Experience with B2B and industrial sector websites — I understand what procurement teams and project managers look for.",
        "Professional, credibility-focused design that speaks to enterprise clients, not consumers.",
        "Clear presentation of services, capabilities, certifications, and past projects.",
        "SEO strategy for B2B keywords that decision-makers actually search for.",
        "Reliable communication and project delivery — critical for businesses operating on tight schedules."
      ],
      process: "We discuss your target clients, sales process, and competitive differentiation. I build a site designed to convert visitors into qualified leads with clear CTAs, capability presentations, and contact forms. Development includes case studies, service catalogs, and certification showcases relevant to your industry."
    }
  },
  {
    slug: "salalah",
    city: "Salalah",
    country: "Oman",
    flag: "🇴🇲",
    tagline: "Tourism-focused web development for Salalah's hospitality sector.",
    description: "Salalah is Oman's tourism jewel, attracting visitors year-round and especially during Khareef season. I help Salalah's hospitality businesses — hotels, tour operators, restaurants, and attractions — build websites that convert browsers into bookings with multi-language support and mobile-first design.",
    heroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=2400&q=80",
    timezone: "Gulf Standard Time",
    timezoneOffset: "UTC+4",
    clientTypes: ["Hotels & resorts", "Tour operators", "Restaurants", "Tourist attractions", "Car rental services", "Travel agencies", "Adventure tourism"],
    services: ["Hotel booking websites", "Tour operator platforms", "Restaurant sites", "Multi-language tourism sites", "Booking systems", "Attraction websites"],
    testimonial: {
      quote: "Our resort needed a website that showcases Salalah's beauty and makes bookings easy for international tourists. Akshay delivered a stunning site in three languages with integrated booking. Direct impact on our occupancy rates.",
      name: "Fatima Al-Kathiri",
      role: "General Manager, Beach Resort · Salalah"
    },
    stats: {
      clients: "4+",
      projects: "9+",
      years: "2+"
    },
    content: {
      intro: "Salalah's tourism industry thrives on attracting visitors from across the Gulf and beyond. Your website is often their first encounter with your business — it needs to inspire them with beautiful imagery, inform them with clear details, and convert them with easy booking processes. I specialize in tourism-focused websites for Salalah businesses.",
      whyMe: [
        "Tourism industry expertise — hotel websites, tour booking platforms, and attraction showcases.",
        "Multi-language support for Arabic, English, and other languages to reach international visitors.",
        "Mobile-first design for tourists browsing on their phones while planning trips.",
        "Integration with booking systems, WhatsApp, and Google Maps for easy conversions.",
        "SEO for tourism keywords and seasonal events like Khareef to capture search traffic."
      ],
      process: "We discuss your target visitors, booking process, and competitive landscape. I build a visually appealing site that showcases your offerings with professional photography support advice, clear pricing, and easy booking flows. Launch includes tourism SEO and integration with your reservation systems."
    }
  },
  {
    slug: "duqm",
    city: "Duqm",
    country: "Oman",
    flag: "🇴🇲",
    tagline: "Corporate web development for Duqm's emerging industrial hub.",
    description: "Duqm is rapidly developing as Oman's special economic zone, attracting industrial, logistics, and energy companies. Businesses operating here need professional digital presence that matches the scale of their operations. I build enterprise-grade websites for Duqm companies serving B2B markets.",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80",
    timezone: "Gulf Standard Time",
    timezoneOffset: "UTC+4",
    clientTypes: ["Industrial companies", "Energy sector", "Logistics providers", "Construction firms", "Engineering companies", "Port services", "Economic zone businesses"],
    services: ["Corporate websites", "Industrial company sites", "B2B platforms", "Contractor profiles", "Service catalogs", "Secure client portals"],
    testimonial: {
      quote: "Operating in Duqm's special economic zone means competing with international companies. Akshay built us a website that stands alongside major contractors — professional, comprehensive, and technically sound. Essential for winning tenders.",
      name: "Abdullah Al-Rashdi",
      role: "Director, Engineering Contractor · Duqm"
    },
    stats: {
      clients: "3+",
      projects: "7+",
      years: "2+"
    },
    content: {
      intro: "Duqm is positioning itself as Oman's industrial future, and businesses here operate at scale. Your website needs to reflect that ambition and professionalism — whether you're bidding for large contracts, attracting international partners, or establishing credentials in a competitive market. I build enterprise-focused websites for Duqm companies that communicate capability and reliability.",
      whyMe: [
        "Enterprise-level design and development appropriate for B2B and industrial sectors.",
        "Understanding of tender processes and what evaluation committees look for in contractor websites.",
        "Professional presentation of capabilities, certifications, past projects, and technical expertise.",
        "Secure, scalable architecture suitable for companies operating in regulated environments.",
        "Clear communication and documented processes — critical for large-scale projects."
      ],
      process: "We begin by understanding your business, target clients, and competitive positioning. I develop a site structure designed for B2B lead generation and credibility building. Development includes capability statements, project portfolios, certification showcases, and secure contact systems. Launch comes with full documentation and optional training."
    }
  },

  // Canada locations
  {
    slug: "toronto",
    city: "Toronto",
    country: "Canada",
    flag: "🇨🇦",
    tagline: "Professional web development for Toronto businesses — quality without the agency overhead.",
    description: "Toronto businesses need fast, modern websites that compete in North America's digital marketplace. I build high-performance sites for GTA companies using Next.js and React — the same tech stack used by top Canadian startups. Direct communication, transparent pricing, and quality that matches any Toronto agency.",
    heroImage: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=2400&q=80",
    timezone: "Eastern Time",
    timezoneOffset: "UTC-5/4",
    clientTypes: ["Tech startups", "Professional services", "E-commerce stores", "Local businesses", "Healthcare providers", "Real estate agencies", "SaaS companies"],
    services: ["Custom website development", "E-commerce solutions", "Web applications", "SEO optimization", "Website redesign", "Performance optimization"],
    testimonial: {
      quote: "Working with Akshay gave us agency-quality work at a fraction of the cost. Our cleaning business website loads fast, ranks well, and brings in consistent leads. Highly recommend for Toronto businesses.",
      name: "Sarah M.",
      role: "Owner, Service Business · Toronto"
    },
    stats: {
      clients: "5+",
      projects: "10+",
      years: "2+"
    },
    content: {
      intro: "Toronto's competitive market demands websites that perform. Whether you're a tech startup in King West, a professional service firm in the Financial District, or a local business anywhere in the GTA, I build sites that load fast, rank well, and convert visitors into customers. Modern tech stack, direct communication, and pricing that respects your budget.",
      whyMe: [
        "Modern tech stack — Next.js, React, TypeScript — the same tools used by top Canadian tech companies.",
        "Direct communication via video calls during overlapping business hours. No project managers, no delays.",
        "Competitive pricing without compromising on quality. Toronto agency results at freelancer rates.",
        "Fast turnaround — most projects launch within 3-4 weeks.",
        "Ongoing support and maintenance available for businesses that need it."
      ],
      process: "We start with a video call to understand your business, goals, and target audience. I deliver a detailed proposal within 48 hours with transparent pricing. Development happens on a staging site you can review anytime. Launch when you're satisfied, with 30 days of priority support included."
    }
  },
  {
    slug: "vancouver",
    city: "Vancouver",
    country: "Canada",
    flag: "🇨🇦",
    tagline: "Quality web development for Vancouver businesses — modern, fast, professional.",
    description: "Vancouver's tech-savvy market expects modern, high-performance websites. I build professional sites for Vancouver businesses using cutting-edge technology — Next.js, React, and cloud-native architectures. From Gastown startups to Richmond service businesses, I deliver quality that competes with any local agency.",
    heroImage: "https://images.unsplash.com/photo-1559511260-66a68ecd0ae7?auto=format&fit=crop&w=2400&q=80",
    timezone: "Pacific Time",
    timezoneOffset: "UTC-8/7",
    clientTypes: ["Tech companies", "Creative agencies", "Professional services", "Health & wellness", "E-commerce", "Real estate", "Tourism & hospitality"],
    services: ["Website development", "E-commerce platforms", "Web applications", "SEO & performance", "Website redesign", "Maintenance & support"],
    testimonial: {
      quote: "Akshay delivered a beautiful, fast website for our wellness business. Clear communication despite the timezone difference, and the quality exceeded our expectations. Would work with him again.",
      name: "Jennifer L.",
      role: "Founder, Wellness Studio · Vancouver"
    },
    stats: {
      clients: "3+",
      projects: "6+",
      years: "2+"
    },
    content: {
      intro: "Vancouver businesses operate in a competitive, design-conscious market. Your website needs to be beautiful, fast, and functional. I specialize in modern web development for Vancouver companies — using the latest technologies to create sites that impress visitors and drive business results.",
      whyMe: [
        "Modern tech stack expertise — Next.js, React, Tailwind CSS — for blazing-fast, SEO-optimized websites.",
        "Design-conscious approach that matches Vancouver's aesthetic expectations.",
        "Timezone difference works in your favor — I can work while you sleep and deliver updates by morning.",
        "Competitive international rates without compromising on North American quality standards.",
        "Clear English communication with extensive experience working with Canadian clients."
      ],
      process: "We connect via video call to discuss your project (evening your time, morning mine). I provide a detailed proposal with fixed pricing. Development is iterative — you see progress weekly. Launch includes SEO setup, performance optimization, and post-launch support."
    }
  }
];

export const getLocationBySlug = (slug: string): LocationData | undefined => {
  return locations.find(location => location.slug === slug);
};
