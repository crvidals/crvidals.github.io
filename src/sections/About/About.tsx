import { motion } from "framer-motion";

import { profile } from "../../data/profile";
import Container from "../../layout/Container";
import SectionHeading from "../../components/SectionHeading";
import TechBadge from "../../components/TechBadge";

function About() {
  return (
    <section id="sobre-mi" aria-labelledby="heading-sobre-mi" className="py-24">
      <Container>
        <SectionHeading id="heading-sobre-mi" title="Sobre mí" />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-4"
          >
            {profile.biography.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-slate-400">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="rounded-xl bg-card p-6">
              <h3 className="mb-1 text-sm font-medium uppercase tracking-wider text-slate-500">
                Experiencia
              </h3>
              <p className="text-3xl font-bold text-white">
                {profile.yearsOfExperience}+
              </p>
              <p className="text-sm text-slate-400">años de experiencia</p>
            </div>

            <div className="rounded-xl bg-card p-6">
              <h3 className="mb-1 text-sm font-medium uppercase tracking-wider text-slate-500">
                Ubicación
              </h3>
              <p className="text-lg font-medium text-white">
                {profile.location.city}, {profile.location.region}
              </p>
              <p className="text-sm text-slate-400">{profile.location.country}</p>
            </div>

            <div className="rounded-xl bg-card p-6">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-500">
                Especialidades
              </h3>
              <ul className="space-y-2">
                {profile.specialties.map((specialty) => (
                  <li key={specialty} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {specialty}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-card p-6">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-500">
                Tecnologías principales
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.mainTechnologies.map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default About;
