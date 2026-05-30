import type { Metadata } from "next";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import { QuoteProvider } from "@/components/QuoteContext";
import { ScrollAnimations, AnimatedGradientBackground } from "@/components/ScrollAnimations";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const geist = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akshayvt.com"),
  title: {
    default: "Akshay V T | Freelance Web Developer | React & Next.js Expert",
    template: "%s | Akshay V T",
  },
  description:
    "Freelance web developer specializing in React & Next.js. 6+ years experience. Serving clients in Dubai, Kerala, Sydney & worldwide.",
  keywords: [
    "freelance web developer",
    "web developer dubai",
    "web developer kerala",
    "react developer",
    "next.js developer",
    "freelance developer uae",
    "website development",
    "e-commerce development",
    "web design",
    "seo optimization",
  ],
  authors: [{ name: "Akshay V T", url: "https://akshayvt.com" }],
  creator: "Akshay V T",
  publisher: "Akshay V T",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akshayvt.com",
    siteName: "Akshay V T - Freelance Web Developer",
    title: "Akshay V T | Freelance Web Developer | React & Next.js Expert",
    description:
      "Freelance web developer with 6+ years experience. React, Next.js, e-commerce & SEO for businesses worldwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Akshay V T - Freelance Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay V T | Freelance Web Developer",
    description:
      "Freelance web developer. React & Next.js expert. 6+ years experience.",
    images: ["/og-image.jpg"],
    creator: "@akshayvt",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://akshayvt.com/#website",
      url: "https://akshayvt.com",
      name: "Akshay V T - Freelance Web Developer",
      description:
        "A freelancer you can trust. All your web needs. One developer. Direct communication.",
      publisher: {
        "@id": "https://akshayvt.com/#person",
      },
    },
    {
      "@type": "Person",
      "@id": "https://akshayvt.com/#person",
      name: "Akshay V T",
      url: "https://akshayvt.com",
      image: "https://akshayvt.com/akshay-vt.jpg",
      sameAs: [
        "https://linkedin.com/in/akshayvt",
        "https://github.com/akshayvt",
        "https://twitter.com/akshayvt",
      ],
      jobTitle: "Freelance Web Developer",
      worksFor: {
        "@type": "Organization",
        name: "Akshay V T - Freelance Web Development",
      },
      knowsAbout: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Web Development",
        "E-Commerce",
        "SEO",
        "WordPress",
        "Shopify",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kerala",
        addressCountry: "India",
      },
      email: "info@akshayvt.com",
      telephone: "+919746220043",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://akshayvt.com/#service",
      name: "Akshay V T - Web Development Services",
      url: "https://akshayvt.com",
      logo: "https://akshayvt.com/logo.png",
      image: "https://akshayvt.com/og-image.jpg",
      description:
        "Professional web development services including React, Next.js, e-commerce, and SEO optimization for businesses worldwide.",
      email: "info@akshayvt.com",
      telephone: "+919746220043",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kerala",
        addressCountry: "India",
      },
      areaServed: [
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "Qatar" },
      ],
      priceRange: "$$",
      serviceType: [
        "Web Development",
        "React Development",
        "Next.js Development",
        "E-Commerce Development",
        "Website Design",
        "SEO Optimization",
        "Website Maintenance",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${geist.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-ink bg-bg overflow-x-hidden tracking-tight">
        <AnimatedGradientBackground />
        <ScrollAnimations />
        <QuoteProvider>
          <div className="overflow-x-hidden w-full max-w-[100vw]">
            {children}
          </div>
        </QuoteProvider>
      </body>
    </html>
  );
}
