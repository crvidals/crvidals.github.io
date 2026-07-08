import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
const variantStyles = {
    default: "bg-surface text-slate-300",
    card: "bg-card text-slate-400",
    surface: "bg-surface text-slate-300",
};
const TechBadge = memo(function TechBadge({ label, variant = "default", }) {
    return (_jsx("span", { className: `rounded-md px-2.5 py-1 text-xs ${variantStyles[variant]}`, children: label }));
});
export default TechBadge;
