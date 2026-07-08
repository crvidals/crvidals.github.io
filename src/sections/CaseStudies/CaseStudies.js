import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Lightbulb, Target, CheckCircle } from "lucide-react";
import { projects } from "../../data/projects";
import { caseStudies } from "../../data/caseStudies";
import Container from "../../layout/Container";
import SectionHeading from "../../components/SectionHeading";
import TechBadge from "../../components/TechBadge";
function CaseStudies() {
    return (_jsx("section", { id: "casos-de-exito", "aria-labelledby": "heading-casos-de-exito", className: "py-24", children: _jsxs(Container, { children: [_jsx(SectionHeading, { id: "heading-casos-de-exito", title: "Casos de \u00C9xito" }), _jsx("div", { className: "space-y-8", children: caseStudies.map((cs, index) => {
                        const project = projects.find((p) => p.name === cs.projectName);
                        if (!project)
                            return null;
                        return (_jsx(motion.div, { initial: { y: 30, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true, margin: "-80px" }, transition: {
                                duration: 0.5,
                                delay: index * 0.15,
                                ease: "easeOut",
                            }, children: _jsxs("div", { className: "rounded-xl bg-card p-8", children: [_jsxs("div", { className: "mb-6 flex items-center gap-3", children: [_jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary", children: index + 1 }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold text-white", children: cs.projectName }), project.type && (_jsx("span", { className: "text-sm text-slate-500", children: project.type }))] })] }), _jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [_jsxs("div", { className: "rounded-lg bg-surface p-5", children: [_jsxs("div", { className: "mb-3 flex items-center gap-2 text-sm font-medium text-amber-400", children: [_jsx(Target, { size: 16, "aria-hidden": true }), "Problema"] }), _jsx("p", { className: "text-sm leading-relaxed text-slate-300", children: cs.problem })] }), _jsxs("div", { className: "rounded-lg bg-surface p-5", children: [_jsxs("div", { className: "mb-3 flex items-center gap-2 text-sm font-medium text-primary", children: [_jsx(Lightbulb, { size: 16, "aria-hidden": true }), "Soluci\u00F3n"] }), _jsx("p", { className: "mb-4 text-sm leading-relaxed text-slate-300", children: cs.solution }), _jsx("div", { className: "flex flex-wrap gap-1.5", children: project.technologies.map((tech) => (_jsx(TechBadge, { label: tech, variant: "card" }, tech))) })] }), _jsxs("div", { className: "rounded-lg bg-surface p-5", children: [_jsxs("div", { className: "mb-3 flex items-center gap-2 text-sm font-medium text-emerald-400", children: [_jsx(CheckCircle, { size: 16, "aria-hidden": true }), "Resultado"] }), _jsx("p", { className: "text-sm leading-relaxed text-slate-300", children: cs.result })] })] })] }) }, cs.id));
                    }) })] }) }));
}
export default CaseStudies;
