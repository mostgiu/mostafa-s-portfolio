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
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const HomePage = () => (
    <>
      <Intro />
      <Skills />
      <Works />
      <Contact />
    </>
  );

  return (
    <>
      <div className="container">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Skills />} />
          <Route path="/portfolio" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
