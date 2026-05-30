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
    name: "Mais",
    role: "Owner · Athletes Gym, Qatar 🇶🇦",
    avatar: "M",
    quote:
      "We paid an agency a lot of money. They built half the site and vanished. Akshay took over, rebuilt everything from scratch with a proper e-commerce setup. Two years later, he still handles every change I need — no questions asked.",
    large: true,
  },
  {
    id: 2,
    name: "Manu",
    role: "Owner · KP Groups, UAE 🇦🇪",
    avatar: "M",
    quote:
      "I came to Akshay with just a basic idea — we're a water filtration company and needed to exist online. He built the entire website and even set up Zoho Mail for us, which saved us a lot on Google Workspace. Still calls him whenever I need updates.",
  },
  {
    id: 3,
    name: "Seena",
    role: "Founder · Gummit Pedia 🇮🇳",
    avatar: "S",
    quote:
      "Our old e-commerce site was a mess. Akshay revamped the whole thing — clean design, smooth checkout, exactly how I pictured it. Sales have been better ever since.",
  },
  {
    id: 4,
    name: "Gokul Viswam",
    role: "Director · Promice VFX 🇮🇳",
    avatar: "G",
    quote:
      "We needed a site that matched our VFX work — bold, cinematic, impressive. Akshay delivered. He still maintains it for us, and turnaround is always quick.",
  },
  {
    id: 5,
    name: "Nidheesh Anand",
    role: "Creative Professional 🇮🇳",
    avatar: "N",
    quote:
      "I had a very specific vision for my portfolio. Akshay listened, understood, and built it exactly as I imagined. No back-and-forth drama, just results.",
  },
  {
    id: 6,
    name: "Rahul M.",
    role: "Startup Founder · Kochi 🇮🇳",
    avatar: "R",
    quote:
      "Most developers disappear after delivery. Akshay still responds to my messages within hours, even for small fixes. That's rare.",
  },
  {
    id: 7,
    name: "Fatima K.",
    role: "Business Owner · Dubai 🇦🇪",
    avatar: "F",
    quote:
      "Honest pricing, no hidden fees, and he actually explains things in simple terms. Built our company site in under a month.",
  },
  {
    id: 8,
    name: "Arun S.",
    role: "Restaurant Owner · Bangalore 🇮🇳",
    avatar: "A",
    quote:
      "Our online ordering was broken for weeks before Akshay stepped in. Fixed it in two days. Business hasn't stopped since.",
  },
  {
    id: 9,
    name: "Deepak R.",
    role: "E-commerce Seller · Kerala 🇮🇳",
    avatar: "D",
    quote:
      "Third developer we hired. First one who actually delivered what he promised. Site is fast, looks great, and customers love it.",
  },
  {
    id: 10,
    name: "Priya T.",
    role: "Consultant · Mumbai 🇮🇳",
    avatar: "P",
    quote:
      "Quick replies, clean work, fair prices. Exactly what I was looking for. Recommended him to two other businesses already.",
  },
];
