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

function App() {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return (
    <div className="flex font-satoshi p-8 w-screen flex-col bg-[#0A0A0AFF] h-full items-center justify-center 2xl:container 2xl:mx-auto ">
      <StarsBackground />

      <div className="flex z-20 flex-col xl:flex-row w-full">
        <Navbar />
        <SideBar />
        <div className="flex z-20 xl:pl-64  pt-16 pb-10 flex-col w-full h-full">
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
          <div className="pt-44">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
