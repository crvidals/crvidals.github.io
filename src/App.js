import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { useSEO } from "./hooks/useSEO";
import AppLayout from "./layout/AppLayout";
import Hero from "./sections/Hero";
import SectionSkeleton from "./components/SectionSkeleton";
const About = lazy(() => import("./sections/About"));
const CaseStudies = lazy(() => import("./sections/CaseStudies"));
const Contact = lazy(() => import("./sections/Contact"));
const Experience = lazy(() => import("./sections/Experience"));
const GitHub = lazy(() => import("./sections/GitHub"));
const Projects = lazy(() => import("./sections/Projects"));
const Technologies = lazy(() => import("./sections/Technologies"));
function App() {
    useSEO();
    return (_jsx(MotionConfig, { reducedMotion: "user", children: _jsx(HashRouter, { children: _jsx(Routes, { children: _jsx(Route, { element: _jsx(AppLayout, {}), children: _jsx(Route, { index: true, element: _jsxs(_Fragment, { children: [_jsx(Hero, {}), _jsx(Suspense, { fallback: _jsx(SectionSkeleton, {}), children: _jsx(About, {}) }), _jsx(Suspense, { fallback: _jsx(SectionSkeleton, {}), children: _jsx(Experience, {}) }), _jsx(Suspense, { fallback: _jsx(SectionSkeleton, {}), children: _jsx(Technologies, {}) }), _jsx(Suspense, { fallback: _jsx(SectionSkeleton, {}), children: _jsx(Projects, {}) }), _jsx(Suspense, { fallback: _jsx(SectionSkeleton, {}), children: _jsx(CaseStudies, {}) }), _jsx(Suspense, { fallback: _jsx(SectionSkeleton, {}), children: _jsx(GitHub, {}) }), _jsx(Suspense, { fallback: _jsx(SectionSkeleton, {}), children: _jsx(Contact, {}) })] }) }) }) }) }) }));
}
export default App;
