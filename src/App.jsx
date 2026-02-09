import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/intro";
import Works from "./Components/Works/works";
import Footer from "./Components/Footer/footer";
import Contact from "./Components/Contact/contact";
import Skills from "./Components/Skills/skills";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import BackToTop from "./Components/BackToTop/BackToTop";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
    <div className="container" >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
      <BackToTop />
      </div>
    </>
  );
}

export default App;
