import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s | Blog | Akshay V T",
  },
  description:
    "Web dev tips, SEO guides & freelancing insights. Practical advice from 6+ years building websites for businesses.",
  openGraph: {
    title: "Blog | Akshay V T | Web Development Insights",
    description:
      "Web dev tips, SEO guides & freelancing insights from 6+ years of experience.",
    url: "https://akshayvt.com/blog",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
