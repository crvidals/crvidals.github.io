import { motion } from "framer-motion";
import {
  AlertCircle,
  ExternalLink,
  RefreshCw,
  Star,
  Users,
  BookOpen,
  UserPlus,
} from "lucide-react";

import Container from "../../layout/Container";
import SectionHeading from "../../components/SectionHeading";
import TechBadge from "../../components/TechBadge";
import { useGitHub } from "../../hooks/useGitHub";

function GitHub() {
  const { user, repos, languages, totalStars, loading, error, retry } =
    useGitHub();

  return (
    <section id="github" aria-labelledby="heading-github" className="py-24">
      <Container>
        <SectionHeading id="heading-github" title="GitHub" />

        {loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-xl bg-card p-6"
              >
                <div className="mb-2 h-4 w-20 rounded bg-slate-800" />
                <div className="h-8 w-16 rounded bg-slate-800" />
              </div>
            ))}
            <div className="col-span-full grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={`repo-${i}`}
                  className="animate-pulse rounded-xl bg-card p-6"
                >
                  <div className="mb-3 h-5 w-3/4 rounded bg-slate-800" />
                  <div className="mb-2 h-3 w-full rounded bg-slate-800" />
                  <div className="mb-2 h-3 w-2/3 rounded bg-slate-800" />
                  <div className="mt-3 h-4 w-1/3 rounded bg-slate-800" />
                </div>
              ))}
            </div>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center rounded-xl bg-card p-12 text-center">
              <AlertCircle className="mb-4 text-red-400" size={40} aria-hidden={true} />
            <p className="mb-4 text-slate-400">{error}</p>
            <button
              type="button"
              onClick={retry}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary/90"
            >
              <RefreshCw size={18} aria-hidden={true} />
              Reintentar
            </button>
          </div>
        )}

        {!loading && !error && user && (
          <>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              <div className="rounded-xl bg-card p-6">
                <div className="mb-1 flex items-center gap-2 text-sm text-slate-500">
                  <BookOpen size={16} aria-hidden={true} />
                  Repositorios
                </div>
                <p className="text-2xl font-bold text-white">
                  {user.public_repos}
                </p>
              </div>

              <div className="rounded-xl bg-card p-6">
                <div className="mb-1 flex items-center gap-2 text-sm text-slate-500">
                  <Star size={16} aria-hidden={true} />
                  Estrellas
                </div>
                <p className="text-2xl font-bold text-white">{totalStars}</p>
              </div>

              <div className="rounded-xl bg-card p-6">
                <div className="mb-1 flex items-center gap-2 text-sm text-slate-500">
                  <Users size={16} aria-hidden={true} />
                  Seguidores
                </div>
                <p className="text-2xl font-bold text-white">
                  {user.followers}
                </p>
              </div>

              <div className="rounded-xl bg-card p-6">
                <div className="mb-1 flex items-center gap-2 text-sm text-slate-500">
                  <UserPlus size={16} aria-hidden={true} />
                  Siguiendo
                </div>
                <p className="text-2xl font-bold text-white">
                  {user.following}
                </p>
              </div>
            </motion.div>

            {languages.length > 0 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="mb-8"
              >
                <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-slate-500">
                  Lenguajes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <TechBadge key={lang} label={lang} />
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            >
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-500">
                Repositorios destacados
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver repositorio ${repo.name} (se abre en ventana nueva)`}
                    className="group rounded-xl bg-card p-5 transition-colors hover:bg-surface"
                  >
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <h4 className="text-sm font-semibold text-white group-hover:text-primary">
                        {repo.name}
                      </h4>
                      <ExternalLink
                        size={14}
                        aria-hidden={true}
                        className="mt-0.5 shrink-0 text-slate-600"
                      />
                    </div>
                    <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-slate-400">
                      {repo.description ?? "Sin descripción"}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      {repo.language && (
                        <span>{repo.language}</span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star size={12} aria-hidden={true} />
                        {repo.stargazers_count}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </Container>
    </section>
  );
}

export default GitHub;
