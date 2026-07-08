import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from "../Footer";
import Main from "../Main";
import Navbar from "../Navbar";
function AppLayout() {
    return (_jsxs("div", { className: "flex min-h-screen flex-col", children: [_jsx(Navbar, {}), _jsx(Main, {}), _jsx(Footer, {})] }));
}
export default AppLayout;
