export type Testimonial = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  large?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Fahad A.",
    role: "Owner · Athletes Gym, Qatar 🇶🇦",
    avatar: "F",
    quote:
      "Akshay rebuilt our gym's site from the ground up. Three months later we're top of Google for 'gym near me' in Doha.",
    large: true,
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "Boutique Owner · Dubai 🇦🇪",
    avatar: "S",
    quote:
      "Finally, a developer who actually replies. Our old site was broken for a month — Akshay fixed it in a day.",
  },
  {
    id: 3,
    name: "Rohan K.",
    role: "Founder · SaaS, Bangalore 🇮🇳",
    avatar: "R",
    quote:
      "I've worked with three agencies before this. None delivered like Akshay did. Honest, quick, and genuinely fast.",
  },
  {
    id: 4,
    name: "James T.",
    role: "CEO · Tech Startup, London 🇬🇧",
    avatar: "J",
    quote:
      "Our MVP was built in 3 weeks. Clean code, great communication, and exactly what we needed to launch.",
  },
  {
    id: 5,
    name: "Priya S.",
    role: "Marketing Head · E-commerce, Mumbai 🇮🇳",
    avatar: "P",
    quote:
      "Site speed improved by 300% after Akshay's optimization. Our bounce rate dropped significantly.",
  },
  {
    id: 6,
    name: "Ahmed H.",
    role: "Restaurant Owner · Abu Dhabi 🇦🇪",
    avatar: "A",
    quote:
      "Beautiful design, mobile-first approach, and online ordering integrated seamlessly. Revenue up 40%.",
  },
  {
    id: 7,
    name: "Lisa Chen",
    role: "Founder · Design Agency, Sydney 🇦🇺",
    avatar: "L",
    quote:
      "Akshay turned our Figma designs into pixel-perfect code. The animations are exactly what we envisioned.",
  },
  {
    id: 8,
    name: "Michael B.",
    role: "Director · Law Firm, Dubai 🇦🇪",
    avatar: "M",
    quote:
      "Professional, punctual, and understands business needs. Our new website has brought in 3x more leads.",
  },
  {
    id: 9,
    name: "Neha R.",
    role: "Entrepreneur · Wellness Brand, Kerala 🇮🇳",
    avatar: "N",
    quote:
      "From concept to launch in 2 weeks. Akshay made the entire process stress-free and enjoyable.",
  },
  {
    id: 10,
    name: "David W.",
    role: "Consultant · Finance, Singapore 🇸🇬",
    avatar: "D",
    quote:
      "Clear pricing, no surprises, delivered ahead of schedule. Will definitely work with Akshay again.",
  },
];
