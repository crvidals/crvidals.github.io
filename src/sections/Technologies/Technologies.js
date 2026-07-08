import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import Container from "../../layout/Container";
import SectionHeading from "../../components/SectionHeading";
import TechBadge from "../../components/TechBadge";
function Technologies() {
    return (_jsx("section", { id: "tecnologias", "aria-labelledby": "heading-tecnologias", className: "py-24", children: _jsxs(Container, { children: [_jsx(SectionHeading, { id: "heading-tecnologias", title: "Tecnolog\u00EDas" }), _jsx("div", { className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: skills.map((group, index) => (_jsxs(motion.div, { initial: { y: 30, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" }, className: "rounded-xl bg-card p-6", children: [_jsx("h3", { className: "mb-4 text-sm font-medium uppercase tracking-wider text-slate-500", children: group.category }), _jsx("div", { className: "flex flex-wrap gap-2", children: group.items.map((tech) => (_jsx(TechBadge, { label: tech }, tech))) })] }, group.category))) })] }) }));
}
export default Technologies;
