import { motion } from "framer-motion";
import { Lightbulb, Target, CheckCircle } from "lucide-react";

import { projects } from "../../data/projects";
import { caseStudies } from "../../data/caseStudies";
import Container from "../../layout/Container";
import SectionHeading from "../../components/SectionHeading";
import TechBadge from "../../components/TechBadge";

function CaseStudies() {
  return (
    <section id="casos-de-exito" aria-labelledby="heading-casos-de-exito" className="py-24">
      <Container>
        <SectionHeading id="heading-casos-de-exito" title="Casos de Éxito" />

        <div className="space-y-8">
          {caseStudies.map((cs, index) => {
            const project = projects.find((p) => p.name === cs.projectName);
            if (!project) return null;

            return (
              <motion.div
                key={cs.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
              >
                <div className="rounded-xl bg-card p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {cs.projectName}
                      </h3>
                      {project.type && (
                        <span className="text-sm text-slate-500">
                          {project.type}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-3">
                    <div className="rounded-lg bg-surface p-5">
                      <div className="mb-3 flex items-center gap-2 text-sm font-medium text-amber-400">
                        <Target size={16} aria-hidden={true} />
                        Problema
                      </div>
                      <p className="text-sm leading-relaxed text-slate-300">
                        {cs.problem}
                      </p>
                    </div>

                    <div className="rounded-lg bg-surface p-5">
                      <div className="mb-3 flex items-center gap-2 text-sm font-medium text-primary">
                        <Lightbulb size={16} aria-hidden={true} />
                        Solución
                      </div>
                      <p className="mb-4 text-sm leading-relaxed text-slate-300">
                        {cs.solution}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <TechBadge key={tech} label={tech} variant="card" />
                        ))}
                      </div>
                    </div>

                    <div className="rounded-lg bg-surface p-5">
                      <div className="mb-3 flex items-center gap-2 text-sm font-medium text-emerald-400">
                        <CheckCircle size={16} aria-hidden={true} />
                        Resultado
                      </div>
                      <p className="text-sm leading-relaxed text-slate-300">
                        {cs.result}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default CaseStudies;
