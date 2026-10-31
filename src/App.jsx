import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
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
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return saved === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const location = useLocation();
  const homePage = (
    <>
      <Intro />
      <Skills />
      <Works />
      <Contact />
    </>
  );

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="app-shell">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={homePage} />
          <Route path="/about" element={<Skills />} />
          <Route path="/portfolio" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={homePage} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
