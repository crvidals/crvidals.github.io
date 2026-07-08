import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { projects } from "../../data/projects";
import Container from "../../layout/Container";
import SectionHeading from "../../components/SectionHeading";
import TechBadge from "../../components/TechBadge";

function Projects() {
  return (
    <section id="proyectos" aria-labelledby="heading-proyectos" className="py-24">
      <Container>
        <SectionHeading id="heading-proyectos" title="Proyectos" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col rounded-xl bg-card p-6"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {project.name}
                </h3>
                <span className="shrink-0 rounded-md bg-surface px-2.5 py-0.5 text-xs text-slate-400">
                  {project.type}
                </span>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between">
                {project.status && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {project.status}
                  </span>
                )}

                {project.repository && (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver repositorio de ${project.name} (se abre en ventana nueva)`}
                    className="inline-flex items-center gap-1 text-sm text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Repositorio
                    <ExternalLink size={14} aria-hidden={true} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
