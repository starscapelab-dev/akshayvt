import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Free web development consultation. WhatsApp, email or form. Reply within 24h, usually 3h. Let's discuss your project.",
  openGraph: {
    title: "Contact | Akshay V T | Freelance Web Developer",
    description:
      "Free consultation. Reply within 24h. Let's discuss your web project.",
    url: "https://akshayvt.com/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
