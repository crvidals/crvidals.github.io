import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Lightbulb, Target, CheckCircle } from "lucide-react";

import { projects } from "../../data/projects";
import { caseStudies } from "../../data/caseStudies";
import Container from "../../layout/Container";
import SectionHeading from "../../components/SectionHeading";
import TechBadge from "../../components/TechBadge";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
  }),
};

function CaseStudies() {
  const [[currentIndex, direction], setPage] = useState([0, 0]);

  const next = useCallback(() => {
    setPage(([index]) => [(index + 1) % caseStudies.length, 1]);
  }, []);

  const prev = useCallback(() => {
    setPage(
      ([index]) => [(index - 1 + caseStudies.length) % caseStudies.length, -1],
    );
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setPage(([current]) => [index, index > current ? 1 : -1]);
    },
    [],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  const cs = caseStudies[currentIndex];
  const project = projects.find((p) => p.name === cs.projectName);

  return (
    <section
      id="casos-de-exito"
      aria-labelledby="heading-casos-de-exito"
      className="py-24"
    >
      <Container>
        <SectionHeading id="heading-casos-de-exito" title="Casos de Éxito" />

        <div className="relative mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-xl">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={cs.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <div className="rounded-xl bg-card p-6 sm:p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white">
                      {cs.projectName}
                    </h3>
                    {project?.type && (
                      <span className="text-sm text-slate-500">
                        {project.type}
                      </span>
                    )}
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
                        {(cs.technologies ?? project?.technologies ?? []).map(
                          (tech) => (
                            <TechBadge key={tech} label={tech} variant="card" />
                          ),
                        )}
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
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Caso anterior"
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-surface p-2 text-slate-400 shadow-lg transition-colors hover:text-white lg:flex"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Caso siguiente"
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-surface p-2 text-slate-400 shadow-lg transition-colors hover:text-white lg:flex"
          >
            <ChevronRight size={20} />
          </button>

          <div className="mt-4 flex items-center justify-center gap-4 lg:hidden">
            <button
              type="button"
              onClick={prev}
              aria-label="Caso anterior"
              className="rounded-full bg-surface p-2 text-slate-400 transition-colors hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Caso siguiente"
              className="rounded-full bg-surface p-2 text-slate-400 transition-colors hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {caseStudies.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir al caso ${i + 1}`}
                aria-current={i === currentIndex ? "true" : undefined}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex
                    ? "w-6 bg-primary"
                    : "w-2 bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CaseStudies;
