import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 mt-16 py-12">
      <div className="container-page">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Let&apos;s build something.
            </h3>
            <p className="text-slate-400 text-sm max-w-md">
              I&apos;m always open to interesting platform engineering, AI agent, or
              full-stack opportunities. Reach out at{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-accent link-underline"
              >
                {profile.email}
              </a>
              .
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-slate-700 hover:border-accent hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-slate-700 hover:border-accent hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-3 rounded-lg border border-slate-700 hover:border-accent hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-slate-700 hover:border-accent hover:text-accent transition-colors inline-flex items-center gap-1.5 px-4"
            >
              <span className="text-sm">Resume</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js + Tailwind.</p>
          <p className="font-mono">{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
