import "./globals.css";
import { Inter, Fraunces } from "next/font/google";

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

export const metadata = {
  title: "Amar Gupta — AI-Native Software Engineer",
  description:
    "Software Development Engineer 2 at Fynd (Jio Commerce Platform). Building autonomous AI engineering workflows and multi-tenant commerce platforms powering AJIO, JioMart, Tira, Netmeds, and more.",
  keywords: [
    "Amar Gupta",
    "AI-Native Engineer",
    "Software Engineer",
    "Fynd",
    "Jio Commerce",
    "Platform Engineering",
    "Next.js",
    "React",
    "AI Agents",
  ],
  authors: [{ name: "Amar Gupta" }],
  openGraph: {
    title: "Amar Gupta — AI-Native Software Engineer",
    description:
      "Building autonomous AI systems that compress engineering toil into pipelines.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
