import { motion } from "framer-motion";

import { skills } from "../../data/skills";
import Container from "../../layout/Container";
import SectionHeading from "../../components/SectionHeading";
import TechBadge from "../../components/TechBadge";

function Technologies() {
  return (
    <section id="tecnologias" aria-labelledby="heading-tecnologias" className="py-24">
      <Container>
        <SectionHeading id="heading-tecnologias" title="Tecnologías" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-xl bg-card p-6"
            >
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-500">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Technologies;
