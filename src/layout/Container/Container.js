import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
const Container = memo(function Container({ children, className, }) {
    return (_jsx("div", { className: `mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className ?? ""}`, children: children }));
});
export default Container;
