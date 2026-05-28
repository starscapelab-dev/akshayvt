import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for a free consultation. WhatsApp, email, or contact form. I reply within 24 hours, usually within 3. Let's discuss your web development project.",
  openGraph: {
    title: "Contact | Akshay V T | Freelance Web Developer",
    description:
      "Get in touch for a free consultation. I reply within 24 hours, usually within 3.",
    url: "https://akshayvt.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
