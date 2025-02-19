import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Exprience from "./components/Exprience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";
import Education from "./components/Education";
import { HelmetProvider } from 'react-helmet-async';
import FloatingWhatsApp from "./components/FloatingWhatsApp ";


const App = () => {
  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", disableRightClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <HelmetProvider>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        {/* Background */}
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <Exprience />
          <Education />
          <About />
          <Technologies />
          <Project />
          <Contact />
          <FloatingWhatsApp/>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
