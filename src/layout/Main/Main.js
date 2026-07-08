import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { Outlet } from "react-router-dom";
const Main = memo(function Main() {
    return (_jsx("main", { children: _jsx(Outlet, {}) }));
});
export default Main;
