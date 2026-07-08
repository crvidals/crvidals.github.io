import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileDown, ExternalLink, User } from "lucide-react";

import { profile } from "../../data/profile";
import { socialLinks } from "../../data/social";
import Container from "../../layout/Container";

function Hero() {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("https://api.github.com/users/crvidals")
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API error");
        return res.json() as Promise<{ avatar_url: string }>;
      })
      .then((data) => {
        if (!cancelled) setAvatarUrl(data.avatar_url);
      })
      .catch(() => {
        if (!cancelled) setAvatarError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const github = socialLinks.find((link) => link.platform === "GitHub");
  const linkedIn = socialLinks.find((link) => link.platform === "LinkedIn");

  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden pt-16 bg-gradient-to-br from-primary/[0.03] via-background to-background"
    >
      <Container>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 shrink-0 lg:order-2"
          >
            {avatarUrl && !avatarError ? (
              <img
                src={avatarUrl}
                alt={profile.name}
                className="h-40 w-40 rounded-full border-2 border-slate-700 object-cover shadow-xl lg:h-56 lg:w-56"
              />
            ) : (
              <div className="flex h-40 w-40 items-center justify-center rounded-full border-2 border-slate-700 bg-surface shadow-xl lg:h-56 lg:w-56">
                <User size={48} className="text-slate-500 lg:size-[60px]" />
              </div>
            )}
          </motion.div>

          <div className="order-2 max-w-3xl lg:order-1">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-sm text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {profile.location.city}, {profile.location.region}
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="mb-2 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="relative mb-6"
            >
              <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
                {profile.title}
              </h2>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="mt-2 h-1 rounded-full bg-primary"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mb-8 text-lg leading-relaxed text-slate-400 sm:text-xl"
            >
              {profile.description}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
              className="mb-8 flex items-center gap-2"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm text-slate-400">
                Disponible para nuevos proyectos
              </span>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <FileDown size={18} aria-hidden={true} />
                Descargar CV
              </a>
              <a
                href={github?.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (se abre en ventana nueva)"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <ExternalLink size={18} aria-hidden={true} />
                GitHub
              </a>
              <a
                href={linkedIn?.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (se abre en ventana nueva)"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <ExternalLink size={18} aria-hidden={true} />
                LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
