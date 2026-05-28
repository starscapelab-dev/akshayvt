export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
  image: string;
  wordCount?: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "why-nextjs-for-small-business",
    title: "Why I recommend Next.js for every small business website",
    excerpt:
      "Next.js isn't just a trendy framework — it's the best tool for building fast, SEO-friendly sites that actually rank on Google. Here's the honest breakdown from 40+ builds.",
    date: "2025-05-15",
    readTime: "6 min",
    category: "Web Development",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=2400&q=80",
    wordCount: 1124,
  },
  {
    id: "2",
    slug: "seo-checklist-2024",
    title: "The only SEO checklist you need in 2024",
    excerpt:
      "Forget the fluff. Here are the 12 things that actually move the needle for small business SEO. No tools to sell, no upsells — just what works.",
    date: "2025-05-01",
    readTime: "8 min",
    category: "SEO",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=2400&q=80",
    wordCount: 1287,
  },
  {
    id: "3",
    slug: "freelancing-in-uae",
    title: "How I built a freelance web dev business serving UAE clients from India",
    excerpt:
      "Remote work, time zones, payments, and building trust across borders. Everything I learned serving clients in Dubai and Abu Dhabi from Kerala.",
    date: "2025-04-20",
    readTime: "10 min",
    category: "Freelancing",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=80",
    wordCount: 1356,
  },
  {
    id: "4",
    slug: "lighthouse-score-90-plus",
    title: "How to get 90+ Lighthouse score (without selling your soul)",
    excerpt:
      "Page speed matters. A lot. Here's the exact checklist I use on every site to hit 90+ on Lighthouse — systematic, not magic.",
    date: "2025-04-05",
    readTime: "7 min",
    category: "Performance",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=80",
    wordCount: 1198,
  },
  {
    id: "5",
    slug: "react-vs-wordpress",
    title: "React vs WordPress: Which one should you actually choose?",
    excerpt:
      "Honest comparison from someone who builds with both. No vendor bias, no agenda — just what I've seen work over six years.",
    date: "2025-03-22",
    readTime: "9 min",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2400&q=80",
    wordCount: 1183,
  },
  {
    id: "6",
    slug: "client-red-flags",
    title: "5 client red flags I wish I'd spotted sooner",
    excerpt:
      "Not every project is worth taking. The warning signs that consistently predict difficult projects — and how to spot them in the first call.",
    date: "2025-03-08",
    readTime: "8 min",
    category: "Freelancing",
    image:
      "https://images.unsplash.com/photo-1554224311-beee260c201f?auto=format&fit=crop&w=2400&q=80",
    wordCount: 1342,
  },
];

export const categories = [
  "All",
  "Web Development",
  "SEO",
  "Freelancing",
  "Performance",
];
