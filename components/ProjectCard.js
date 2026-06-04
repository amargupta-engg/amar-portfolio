import { ArrowUpRight, Sparkles } from "lucide-react";

export default function ProjectCard({ project }) {
  const { name, tagline, description, stack, link, linkLabel, highlight, metrics } = project;

  return (
    <article
      className={`card-base card-hover p-6 sm:p-7 group ${
        highlight ? "border-accent/30 bg-gradient-to-br from-navy-800/60 to-navy-900/60" : ""
      }`}
    >
      <header className="flex items-start justify-between gap-4 mb-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {highlight && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-[10px] font-mono uppercase tracking-widest">
                <Sparkles size={10} /> Flagship
              </span>
            )}
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">{name}</h3>
          <p className="text-accent text-sm font-medium mt-0.5">{tagline}</p>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-2 rounded-lg border border-slate-700 text-slate-400 hover:border-accent hover:text-accent transition-all group-hover:rotate-12"
            aria-label={linkLabel || "View project"}
          >
            <ArrowUpRight size={18} />
          </a>
        )}
      </header>

      <p className="text-slate-400 text-sm leading-relaxed my-4">{description}</p>

      {metrics && (
        <div className="grid grid-cols-3 gap-3 my-5 py-3 border-y border-slate-800">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="font-serif text-2xl font-bold text-accent">{m.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-1.5 mt-4">
        {stack.map((tech) => (
          <span key={tech} className="chip text-[11px]">
            {tech}
          </span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-glow mt-5 link-underline"
        >
          {linkLabel || "View Project"} <ArrowUpRight size={14} />
        </a>
      )}
    </article>
  );
}
