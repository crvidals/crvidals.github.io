import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { ExternalLink } from "lucide-react";
import { socialLinks } from "../../data/social";
import { profile } from "../../data/profile";
import Container from "../Container";
const Footer = memo(function Footer() {
    const quickLinks = socialLinks.filter((link) => link.platform === "GitHub" || link.platform === "LinkedIn");
    return (_jsx("footer", { "aria-label": "Pie de p\u00E1gina", className: "border-t border-slate-800", children: _jsx(Container, { children: _jsxs("div", { className: "flex flex-col items-center gap-4 py-8 sm:flex-row sm:justify-between", children: [_jsxs("p", { className: "text-sm text-slate-500", children: ["\u00A9 ", new Date().getFullYear(), " ", profile.name, ". Todos los derechos reservados."] }), quickLinks.length > 0 && (_jsx("div", { className: "flex items-center gap-4", children: quickLinks.map((link) => (_jsxs("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background", children: [link.label, _jsx(ExternalLink, { size: 12, "aria-hidden": true })] }, link.platform))) }))] }) }) }));
});
export default Footer;
