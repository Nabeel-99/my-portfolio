import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Lenis from "lenis";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarsBackground from "./components/StarsBackground";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  matchPath,
} from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Dock from "./components/DockMenu";

function App() {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const [showComponent, setShowComponent] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const match = matchPath("/project-details/:id", location.pathname);
    setShowComponent(!match);
  }, [location]);

  return (
    <div className="flex font-satoshi p-8 w-screen flex-col bg-[#0A0A0AFF] h-full items-center 2xl:container 2xl:mx-auto">
      <StarsBackground />

      <Navbar showComponent={showComponent} />
      <ScrollToTop />
      <Dock />
      <div className="flex z-20 flex-col pt-16 w-full max-w-5xl mx-auto">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home">
                  <Hero />
                </div>
                <Projects />
                <div id="stack" className="pt-32">
                  <Stack />
                </div>
                <div id="experience" className="pt-32">
                  <Experience />
                </div>
                <div id="contact" className="pt-32">
                  <Contact />
                </div>
              </>
            }
          />
          <Route
            path="/project-details/:id"
            element={
              <>
                <ScrollToTop />
                <ProjectDetails />
              </>
            }
          />
        </Routes>

        <div className="pt-44">
          <Footer showComponent={showComponent} />
        </div>
      </div>
    </div>
  );
}

export default App;
