import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Web Development Projects",
  description:
    "22+ websites built for clients in UAE, India & Australia. Custom sites, Shopify stores & e-commerce. View my work.",
  openGraph: {
    title: "Portfolio | Akshay V T - Freelance Web Developer",
    description:
      "22+ websites built for clients in UAE, India & Australia. Custom sites, Shopify stores & e-commerce.",
    url: "https://akshayvt.com/portfolio",
  },
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
