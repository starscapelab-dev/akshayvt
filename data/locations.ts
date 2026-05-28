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
  }
];

export const getLocationBySlug = (slug: string): LocationData | undefined => {
  return locations.find(location => location.slug === slug);
};
