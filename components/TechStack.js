import { techStack } from "@/data/content";

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-16 sm:py-24">
      <div className="container-page">
        <div className="mb-10">
          <p className="section-title">Tech Stack</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            What I work with.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="card-base card-hover p-5">
              <h3 className="text-accent text-xs font-mono uppercase tracking-widest mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
