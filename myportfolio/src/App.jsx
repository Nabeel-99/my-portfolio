import "./App.css";
import SideBar from "./components/SideBar";
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
    if (match) {
      setShowComponent(false);
    } else {
      setShowComponent(true);
    }
  }, [location]);

  return (
    <div className="flex font-satoshi p-8 w-screen flex-col bg-[#0A0A0AFF] h-full items-center  2xl:container 2xl:mx-auto ">
      <StarsBackground />

      <div className="flex z-20 flex-col xl:flex-row w-full">
        <Navbar />
        {showComponent && <SideBar />}
        <ScrollToTop />
        <div
          className={`"flex z-20 ${
            showComponent ? "xl:pl-64" : "xl:pl-0 pt-0  w-full  "
          }  pt-16 pb-10 items-center flex-col w-full h-full`}
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div id="home" className="">
                    <Hero />
                  </div>
                  <Projects />
                  <div id="stack" className="pt-44">
                    <Stack />
                  </div>
                  <div id="experience" className="pt-44">
                    <Experience />
                  </div>
                  <div id="contact" className="pt-44">
                    <Contact />
                  </div>
                </>
              }
            />
            <Route path="/project-details/:id" element={<ProjectDetails />} />
          </Routes>

          <div className="pt-44">
            <Footer showComponent={showComponent} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
