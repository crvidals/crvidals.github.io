import { motion } from "framer-motion";

import { experiences } from "../../data/experience";
import Container from "../../layout/Container";
import SectionHeading from "../../components/SectionHeading";
import TechBadge from "../../components/TechBadge";

function Experience() {
  return (
    <section id="experiencia" aria-labelledby="heading-experiencia" className="py-24">
      <Container>
        <SectionHeading id="heading-experiencia" title="Experiencia" />

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-slate-800 md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="relative mb-8 pl-10 md:w-1/2 md:pl-0 md:odd:pr-12 md:even:ml-auto md:even:pl-12"
            >
              <span className="absolute left-1.5 top-2 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-auto md:odd:right-[-7px] md:even:left-[-7px]" />

              <div className="rounded-xl bg-card p-6">
                <span className="mb-2 inline-block text-sm font-medium text-primary">
                  {exp.period}
                </span>

                <h3 className="mb-1 text-lg font-semibold text-white">
                  {exp.company}
                </h3>

                <p className="mb-3 text-sm font-medium text-slate-400">
                  {exp.role}
                </p>

                {exp.clients && exp.clients.length > 0 && (
                  <p className="mb-3 text-sm text-slate-500">
                    Clientes: {exp.clients.join(", ")}
                  </p>
                )}

                {exp.description && (
                  <p className="mb-4 text-sm leading-relaxed text-slate-400">
                    {exp.description}
                  </p>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {exp.stack.map((tech) => (
                    <TechBadge key={tech} label={tech} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;
