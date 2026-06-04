"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { profile } from "@/data/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#tech-stack", label: "Stack" },
  { href: "#experience", label: "Career" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/80 backdrop-blur-md border-b border-slate-800/60"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16">
        {/* LOGO */}
        <a
          href="#top"
          className="flex items-center gap-2 group"
          onClick={() => setMobileOpen(false)}
        >
          <span className="w-8 h-8 rounded-lg bg-navy-800 border border-accent/40 flex items-center justify-center font-serif font-bold text-accent group-hover:border-accent transition-colors">
            A
          </span>
          <span className="font-serif font-bold text-white hidden sm:inline">
            Amar Gupta
          </span>
        </a>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-7 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-400 hover:text-accent transition-colors link-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-navy-950 font-semibold text-sm hover:bg-accent-glow transition-colors"
            >
              <Download size={14} /> Resume
            </a>
          </li>
        </ul>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-slate-300 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur-md border-b border-slate-800 animate-fade-in">
          <ul className="container-page py-5 space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-slate-300 hover:text-accent transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-navy-950 font-semibold text-sm mt-2"
                onClick={() => setMobileOpen(false)}
              >
                <Download size={14} /> Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
