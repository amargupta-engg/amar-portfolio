import Image from "next/image";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
      <div className="container-page">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-16">
          {/* LEFT — TEXT */}
          <div className="flex-1 animate-slide-up">
            <div className="flex items-center gap-2 text-accent text-xs font-mono tracking-widest uppercase mb-4">
              <span className="inline-block w-8 h-px bg-accent" />
              <span>Hello, World</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-none mb-4 gradient-text">
              {profile.name}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-1 font-medium">
              {profile.title}
            </p>
            <p className="text-sm sm:text-base text-accent/90 mb-6">
              {profile.subtitle}
            </p>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-navy-950 font-semibold hover:bg-accent-glow transition-colors"
              >
                <Download size={16} /> Resume
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 hover:border-accent hover:text-accent transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 hover:border-accent hover:text-accent transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 hover:border-accent hover:text-accent transition-colors"
              >
                <Mail size={16} /> Email
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} /> {profile.location}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Open to opportunities
              </span>
            </div>
          </div>

          {/* RIGHT — PHOTO */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-30 animate-pulse-slow" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
