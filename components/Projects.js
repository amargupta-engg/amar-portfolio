import { projects } from "@/data/content";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="container-page">
        <div className="mb-10">
          <p className="section-title">Selected Work</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Things I&apos;ve built.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
