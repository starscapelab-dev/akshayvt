export interface Project {
  slug: string;
  title: string;
  description: string;
  url: string;
  screenshot: string;
  category: "custom" | "shopify" | "australia" | "nextjs";
  tags: string[];
  featured?: boolean;
  location?: string;
}

export const projects: Project[] = [
  // Next.js Projects
  {
    slug: "pieces-to-peace",
    title: "Pieces to Peace",
    description: "Modern web application with a clean, minimalist design focused on user experience and conversion optimization.",
    url: "https://pieces-to-peace-v2.vercel.app/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://pieces-to-peace-v2.vercel.app/",
    category: "nextjs",
    tags: ["Web App", "Next.js", "Modern"],
    featured: true,
    location: "Global"
  },
  {
    slug: "haziex",
    title: "Haziex",
    description: "Design studio offering professional graphic templates, motion graphics, web design templates, and stock video resources.",
    url: "https://haziex.com/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://haziex.com/",
    category: "nextjs",
    tags: ["Design Studio", "Templates", "Creative"],
    featured: true,
    location: "Global"
  },
  {
    slug: "the-promice",
    title: "The Promice",
    description: "Visual effects and creative studio specializing in VFX, animations, motion graphics, and 3D design for the entertainment industry.",
    url: "https://thepromice.com/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://thepromice.com/",
    category: "nextjs",
    tags: ["VFX", "Animation", "Entertainment"],
    featured: true,
    location: "India"
  },
  {
    slug: "nidheesh-anand",
    title: "Nidheesh Anand",
    description: "Freelance 3D designer portfolio showcasing architectural renders, product visualization, event renders, and exhibition stands.",
    url: "https://nidheeshanand.com/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://nidheeshanand.com/",
    category: "nextjs",
    tags: ["Portfolio", "3D Design", "Visualization"],
    location: "Global"
  },

  // Custom Websites
  {
    slug: "kpgroups-uae",
    title: "KP Groups UAE",
    description: "Water treatment company website featuring premium purification solutions for hospitals, hotels, and industrial facilities across the UAE.",
    url: "https://kpgroupsuae.com/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://kpgroupsuae.com/",
    category: "custom",
    tags: ["Corporate", "Industrial", "UAE"],
    featured: true,
    location: "UAE"
  },
  {
    slug: "athletes-gym-qatar",
    title: "Athletes Gym Qatar",
    description: "Fitness facility website in Lusail, Qatar offering comprehensive workout programs, personal training, and state-of-the-art equipment.",
    url: "https://athletesgym.qa/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://athletesgym.qa/",
    category: "custom",
    tags: ["Fitness", "Gym", "Qatar"],
    featured: true,
    location: "Qatar"
  },
  {
    slug: "gumittypedia",
    title: "Gumittypedia",
    description: "Online art store specializing in original paintings, limited edition prints, and customized art accessories by artist Seena Anand.",
    url: "https://gumittypedia.com/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://gumittypedia.com/",
    category: "custom",
    tags: ["Art", "E-commerce", "Portfolio"],
    location: "India"
  },
  {
    slug: "mealkraft",
    title: "Mealkraft",
    description: "E-commerce store specializing in authentic spices and food products from Kerala, carefully sourced for quality and freshness.",
    url: "https://mealkraft.co/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://mealkraft.co/",
    category: "custom",
    tags: ["E-commerce", "Food", "Kerala"],
    location: "India"
  },
  {
    slug: "numinous-wishes",
    title: "Numinous Wishes",
    description: "Transformational travel company offering personalized spiritual retreats, yoga experiences, and immersive cultural explorations.",
    url: "https://numinouswishes.com/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://numinouswishes.com/",
    category: "custom",
    tags: ["Travel", "Wellness", "Retreats"],
    location: "India"
  },
  {
    slug: "ibs-mn",
    title: "IBS MN Saudi",
    description: "Corporate website for a Saudi Arabia-based business providing professional services and solutions.",
    url: "https://ibs-mn.sa.com/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://ibs-mn.sa.com/",
    category: "custom",
    tags: ["Corporate", "Saudi Arabia", "Business"],
    location: "Saudi Arabia"
  },
  {
    slug: "euro-dreams",
    title: "Euro Dreams",
    description: "Education consultancy helping students secure university admissions abroad with visa assistance and pre-departure guidance.",
    url: "https://eurodreams.org/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://eurodreams.org/",
    category: "custom",
    tags: ["Education", "Consultancy", "Immigration"],
    location: "India"
  },

  // Shopify Stores
  {
    slug: "sangovi",
    title: "Sangovi",
    description: "E-commerce fashion retailer specializing in traditional Indian ethnic wear including curated kurtis, salwar suits, and contemporary styles.",
    url: "https://sangovi.com/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://sangovi.com/",
    category: "shopify",
    tags: ["Fashion", "Ethnic Wear", "E-commerce"],
    featured: true,
    location: "India"
  },
  {
    slug: "the-fleur",
    title: "The Fleur",
    description: "Sustainable fashion e-commerce store offering elegant clothing made from natural fibers like linen and hemp with eco-friendly practices.",
    url: "https://thefleur.co.in/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://thefleur.co.in/",
    category: "shopify",
    tags: ["Fashion", "Sustainable", "E-commerce"],
    featured: true,
    location: "India"
  },

  // Australian Clients
  {
    slug: "south-pacific-aromas",
    title: "South Pacific Aromas",
    description: "Australian supplier of premium aromatherapy products, essential oils, and fragrance solutions for wellness and spa industries.",
    url: "https://www.southpacificaromas.com.au/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://www.southpacificaromas.com.au/",
    category: "australia",
    tags: ["E-commerce", "Aromatherapy", "Wellness"],
    location: "Australia"
  },
  {
    slug: "castor-master",
    title: "Castor Master",
    description: "Australian supplier of industrial castors and wheels, providing mobility solutions for commercial and industrial applications.",
    url: "https://castormaster.com.au/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://castormaster.com.au/",
    category: "australia",
    tags: ["Industrial", "E-commerce", "B2B"],
    location: "Australia"
  },
  {
    slug: "gps-vehicle-inspections",
    title: "GPS Vehicle Inspections",
    description: "Professional vehicle inspection services across Australia, offering comprehensive pre-purchase and roadworthy inspections.",
    url: "https://www.gpsvehicleinspections.com.au/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://www.gpsvehicleinspections.com.au/",
    category: "australia",
    tags: ["Automotive", "Services", "Inspections"],
    featured: true,
    location: "Australia"
  },
  {
    slug: "takeaway-packaging",
    title: "Takeaway Packaging",
    description: "Australian supplier of eco-friendly takeaway packaging solutions for restaurants, cafes, and food service businesses.",
    url: "https://www.takeawaypackaging.com.au/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://www.takeawaypackaging.com.au/",
    category: "australia",
    tags: ["E-commerce", "Packaging", "Food Service"],
    location: "Australia"
  },
  {
    slug: "the-tspoon-cafe",
    title: "The T Spoon Cafe",
    description: "Cafe and restaurant website showcasing menu, ambiance, and online ordering for a local Australian dining establishment.",
    url: "https://www.thetspooncafe.com.au/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://www.thetspooncafe.com.au/",
    category: "australia",
    tags: ["Restaurant", "Cafe", "Food & Beverage"],
    location: "Australia"
  },
  {
    slug: "demore-lending",
    title: "Demore Lending",
    description: "Financial services and mortgage lending website helping Australians navigate home loans and financing options.",
    url: "https://www.demorelending.com/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://www.demorelending.com/",
    category: "australia",
    tags: ["Finance", "Mortgage", "Services"],
    location: "Australia"
  },
  {
    slug: "headway-abi-australia",
    title: "Headway ABI Australia",
    description: "Non-profit organization supporting individuals with acquired brain injuries through rehabilitation and community services.",
    url: "https://headwayabiaustralia.org/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://headwayabiaustralia.org/",
    category: "australia",
    tags: ["Non-profit", "Healthcare", "Community"],
    location: "Australia"
  },
  {
    slug: "adl99",
    title: "ADL99",
    description: "Adelaide-based business providing professional services and solutions for local Australian clients.",
    url: "https://adl99.com.au/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://adl99.com.au/",
    category: "australia",
    tags: ["Business", "Services", "Adelaide"],
    location: "Australia"
  },
  {
    slug: "vigilant-security-services",
    title: "Vigilant Security Services",
    description: "Professional security services company providing guards, patrols, and security solutions across Australia.",
    url: "https://vigilantsecurityservices.com.au/",
    screenshot: "https://image.thum.io/get/width/800/crop/500/https://vigilantsecurityservices.com.au/",
    category: "australia",
    tags: ["Security", "Services", "B2B"],
    location: "Australia"
  }
];

export const categories = {
  all: { label: "All Projects", count: projects.length },
  nextjs: { label: "Next.js", count: projects.filter(p => p.category === "nextjs").length },
  custom: { label: "Custom Websites", count: projects.filter(p => p.category === "custom").length },
  shopify: { label: "Shopify Stores", count: projects.filter(p => p.category === "shopify").length },
  australia: { label: "Australian Clients", count: projects.filter(p => p.category === "australia").length }
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "all") return projects;
  return projects.filter(project => project.category === category);
};
