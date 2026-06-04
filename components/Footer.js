import { Github, Linkedin, Mail, ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/content";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#tech-stack", label: "Stack" },
  { href: "#experience", label: "Career" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 mt-16 pt-14 pb-8">
      <div className="container-page">
        {/* TOP — CTA */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div className="md:col-span-2">
            <p className="section-title">Let&apos;s talk</p>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Have an idea or a role in mind?
            </h3>
            <p className="text-slate-400 text-base max-w-lg leading-relaxed">
              I&apos;m open to platform engineering, AI agent, and full-stack roles. The fastest way to reach me is email — I reply within a day.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 mt-5 px-5 py-3 rounded-lg bg-accent text-navy-950 font-semibold hover:bg-accent-glow transition-colors"
            >
              <Mail size={16} /> {profile.email}
            </a>
          </div>

          {/* QUICK LINKS */}
          <div>
            <p className="section-title">Navigate</p>
            <ul className="space-y-2 mt-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-accent text-sm transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-accent text-sm transition-colors inline-flex items-center gap-1.5"
                >
                  Resume <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* SOCIALS BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-slate-800/60">
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <MapPin size={12} /> {profile.location}
            </span>
            <span className="hidden sm:inline text-slate-700">·</span>
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span className="hidden sm:inline text-slate-700">·</span>
            <span className="font-mono">Built with Next.js + Tailwind</span>
          </div>

          <div className="flex gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-slate-700/60 hover:border-accent hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-slate-700/60 hover:border-accent hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2.5 rounded-lg border border-slate-700/60 hover:border-accent hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
