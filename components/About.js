import { about, brands } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container-page">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <p className="section-title">About</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              4+ years building commerce platforms at Jio scale.
            </h2>
          </div>

          <div className="md:col-span-2 space-y-4 text-slate-300 leading-relaxed">
            {about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            <div className="pt-4">
              <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">
                Brands I&apos;ve helped power
              </p>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span key={brand} className="chip">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
