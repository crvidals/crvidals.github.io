import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
function MobileMenu({ isOpen, links, activeSection, onClose, onNavigate, }) {
    const closeButtonRef = useRef(null);
    const dialogRef = useRef(null);
    const handleKeyDown = useCallback((e) => {
        if (e.key === "Escape") {
            onClose();
            return;
        }
        if (e.key === "Tab" && dialogRef.current) {
            const focusable = dialogRef.current.querySelectorAll(FOCUSABLE_SELECTOR);
            if (focusable.length === 0)
                return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            }
            else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }
    }, [onClose]);
    useEffect(() => {
        if (!isOpen) {
            document.body.style.overflow = "";
            return;
        }
        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);
    return (_jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { ref: dialogRef, role: "dialog", "aria-modal": "true", "aria-label": "Men\u00FA de navegaci\u00F3n", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 }, className: "fixed inset-0 z-40 bg-background/95 backdrop-blur-md", children: _jsxs("div", { className: "flex h-full flex-col", children: [_jsx("div", { className: "flex justify-end px-4 pt-4", children: _jsx("button", { ref: closeButtonRef, type: "button", onClick: onClose, "aria-label": "Cerrar men\u00FA", className: "rounded-lg p-2 text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background", children: _jsx(X, { size: 24, "aria-hidden": true }) }) }), _jsx("nav", { role: "navigation", "aria-label": "Men\u00FA de navegaci\u00F3n m\u00F3vil", className: "flex flex-1 flex-col items-center justify-center gap-6", children: links.map((link) => (_jsx("a", { href: link.href, onClick: (e) => {
                                e.preventDefault();
                                onNavigate(link.href);
                                onClose();
                            }, "data-active": activeSection === link.href.slice(1), className: "text-2xl font-medium text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[active=true]:text-white", children: link.label }, link.href))) })] }) })) }));
}
export default MobileMenu;
