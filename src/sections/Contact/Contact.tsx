import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink } from "lucide-react";

import { profile } from "../../data/profile";
import { socialLinks } from "../../data/social";
import Container from "../../layout/Container";
import SectionHeading from "../../components/SectionHeading";

function Contact() {
  const email = socialLinks.find((link) => link.platform === "Email");
  const github = socialLinks.find((link) => link.platform === "GitHub");
  const linkedIn = socialLinks.find((link) => link.platform === "LinkedIn");

  return (
    <section id="contacto" aria-labelledby="heading-contacto" className="py-24">
      <Container>
        <SectionHeading id="heading-contacto" title="Contacto" />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2"
        >
          <a
            href={email?.url}
            className="flex items-center gap-4 rounded-xl bg-card p-5 transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Mail size={20} className="text-primary" aria-hidden={true} />
            </span>
            <div>
              <p className="text-sm text-slate-500">Correo</p>
              <p className="text-sm font-medium text-white">
                {email?.label}
              </p>
            </div>
          </a>

          <a
            href={github?.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (se abre en ventana nueva)"
            className="flex items-center gap-4 rounded-xl bg-card p-5 transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <ExternalLink size={20} className="text-primary" aria-hidden={true} />
            </span>
            <div>
              <p className="text-sm text-slate-500">GitHub</p>
              <p className="text-sm font-medium text-white">
                {github?.label}
              </p>
            </div>
          </a>

          <a
            href={linkedIn?.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (se abre en ventana nueva)"
            className="flex items-center gap-4 rounded-xl bg-card p-5 transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <ExternalLink size={20} className="text-primary" aria-hidden={true} />
            </span>
            <div>
              <p className="text-sm text-slate-500">LinkedIn</p>
              <p className="text-sm font-medium text-white">
                {linkedIn?.label}
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-xl bg-card p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <MapPin size={20} className="text-primary" aria-hidden={true} />
            </span>
            <div>
              <p className="text-sm text-slate-500">Ubicación</p>
              <p className="text-sm font-medium text-white">
                {profile.location.city}, {profile.location.region}
              </p>
            </div>
          </div>

          <div className="col-span-full rounded-xl bg-card p-5">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
              <p className="text-sm text-slate-400">
                Disponible para nuevos proyectos
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Contact;
