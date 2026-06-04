import { experience, awards } from "@/data/content";
import { Award } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="container-page">
        <div className="mb-10">
          <p className="section-title">Career</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Where I&apos;ve worked.
          </h2>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-8">
          {experience.map((job, i) => (
            <div key={i} className="relative">
              {/* dot */}
              <span
                className={`absolute -left-[34px] sm:-left-[42px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  job.current
                    ? "bg-accent border-accent shadow-[0_0_0_4px_rgba(56,189,248,0.2)]"
                    : "bg-navy-950 border-slate-600"
                }`}
              />
              <div className="card-base p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-1">
                  <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                    {job.role}
                    {job.current && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent text-navy-950 font-bold uppercase tracking-wider">
                        Current
                      </span>
                    )}
                  </h3>
                  <span className="text-sm text-slate-500 font-mono">{job.period}</span>
                </div>
                <p className="text-accent text-sm mb-2">{job.company}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{job.summary}</p>
              </div>
            </div>
          ))}
        </div>

        {/* AWARDS */}
        <div className="mt-16">
          <p className="section-title">Recognition</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-8">
            Awards.
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {awards.map((award) => (
              <div key={award.title} className="card-base card-hover p-5 sm:p-6">
                <div className="flex items-start gap-3 mb-2">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white">
                      {award.title}
                    </h3>
                    <p className="text-xs text-accent font-mono uppercase tracking-widest mt-0.5">
                      {award.meta}
                    </p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mt-3">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
