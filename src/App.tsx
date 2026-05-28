import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [active, setActive] = useState("home");

  return (
    <>
      {/* For animation divs */}
      <div className="background-animation">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>
      <div className="portfolio">

        {/* Navbar */}
        <Navbar active={active} setActive={setActive} />

        {/* Hero Section */}
        <Hero setActive={setActive} />

        {/* About Section */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <Projects />

        {/* Experience */}
        <Experience />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <footer>
          <p>© 2026 Ishika M. Rana. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;