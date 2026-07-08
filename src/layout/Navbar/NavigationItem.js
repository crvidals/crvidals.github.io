import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
const NavigationItem = memo(function NavigationItem({ label, href, isActive, onClick, }) {
    return (_jsxs("a", { href: href, onClick: (e) => {
            e.preventDefault();
            onClick();
        }, "data-active": isActive, className: "relative px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[active=true]:text-white", children: [label, isActive && (_jsx("span", { className: "absolute -bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-primary" }))] }));
});
export default NavigationItem;
