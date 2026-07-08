import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { motion } from "framer-motion";
const SectionHeading = memo(function SectionHeading({ title, id, }) {
    return (_jsxs(motion.div, { initial: { y: 30, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6, ease: "easeOut" }, className: "mb-16", children: [_jsx("h2", { id: id, className: "mb-3 text-3xl font-bold text-white sm:text-4xl", children: title }), _jsx("div", { className: "h-1 w-12 rounded-full bg-primary" })] }));
});
export default SectionHeading;
