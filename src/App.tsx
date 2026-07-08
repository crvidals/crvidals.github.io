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

  return (
    <MotionConfig reducedMotion="user">
      <HashRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              index
              element={
                <>
                  <Hero />
                  <Suspense fallback={<SectionSkeleton />}>
                    <About />
                  </Suspense>
                  <Suspense fallback={<SectionSkeleton />}>
                    <Experience />
                  </Suspense>
                  <Suspense fallback={<SectionSkeleton />}>
                    <Technologies />
                  </Suspense>
                  <Suspense fallback={<SectionSkeleton />}>
                    <Projects />
                  </Suspense>
                  <Suspense fallback={<SectionSkeleton />}>
                    <CaseStudies />
                  </Suspense>
                  <Suspense fallback={<SectionSkeleton />}>
                    <GitHub />
                  </Suspense>
                  <Suspense fallback={<SectionSkeleton />}>
                    <Contact />
                  </Suspense>
                </>
              }
            />
          </Route>
        </Routes>
      </HashRouter>
    </MotionConfig>
  );
}

export default App;
