import "./globals.css";
import { Inter, Fraunces } from "next/font/google";
import { profile } from "@/data/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const SITE_URL = "https://amargupta-engg.vercel.app";
const DESCRIPTION =
  "Amar Gupta — Software Development Engineer 2 at Fynd (Jio Commerce Platform). AI-Native engineer building autonomous AI agents, multi-tenant Storefront Platform, Headless CMS, and Marketplace Integrations powering AJIO, JioMart, Tira, Netmeds, Reliance Digital, SHEIN, Swadesh, and Urban Ladder.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Amar Gupta — AI-Native Software Engineer · SDE-2 @ Fynd",
    template: "%s · Amar Gupta",
  },
  description: DESCRIPTION,
  keywords: [
    "Amar Gupta",
    "Amar Gupta Fynd",
    "Amar Gupta Software Engineer",
    "Amar Gupta SDE-2",
    "Amar Gupta Jio Commerce",
    "Amar Gupta portfolio",
    "Amar Gupta resume",
    "AI-Native Engineer",
    "AI Native Engineer India",
    "Software Development Engineer 2",
    "Platform Engineering",
    "Next.js Developer Mumbai",
    "React Developer Mumbai",
    "Vue.js Developer Mumbai",
    "Full Stack Developer India",
    "AI Agent Developer",
    "Autonomous AI Workflows",
    "LangChain Engineer",
    "Claude API Developer",
    "OpenAI API Developer",
    "Fynd Engineer",
    "Jio Commerce Platform Engineer",
    "AJIO Developer",
    "JioMart Developer",
  ],
  authors: [{ name: "Amar Gupta", url: SITE_URL }],
  creator: "Amar Gupta",
  publisher: "Amar Gupta",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Amar Gupta — Portfolio",
    title: "Amar Gupta — AI-Native Software Engineer · SDE-2 @ Fynd",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Amar Gupta — AI-Native Software Engineer",
    description: DESCRIPTION,
    creator: "@amargupta-engg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification code here after registering
    // google: "your-verification-code",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: "Amar Bhailal Gupta",
  jobTitle: "Software Development Engineer 2",
  description: "AI-Native Software Engineer building autonomous AI agents and commerce platforms at Fynd (Jio Commerce Platform).",
  url: SITE_URL,
  image: `${SITE_URL}${profile.photo}`,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "Fynd (Jio Commerce Platform)",
    url: "https://www.fynd.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Mumbai University",
  },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: [
    "AI Agents",
    "Large Language Models",
    "Platform Engineering",
    "Distributed Systems",
    "Next.js",
    "React.js",
    "Vue.js",
    "Node.js",
    "Python",
    "Headless CMS",
    "Multi-tenant Architecture",
    "Marketplace Integrations",
    "TDD",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans" id="top">
        {children}
      </body>
    </html>
  );
}
