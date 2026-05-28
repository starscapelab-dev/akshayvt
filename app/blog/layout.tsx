import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s | Blog | Akshay V T",
  },
  description:
    "Web development insights, SEO tips, and freelancing advice from a developer with 6+ years of experience. Practical guides for small business owners and fellow developers.",
  openGraph: {
    title: "Blog | Akshay V T | Web Development Insights",
    description:
      "Web development insights, SEO tips, and freelancing advice. Practical guides for small business owners.",
    url: "https://akshayvt.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
