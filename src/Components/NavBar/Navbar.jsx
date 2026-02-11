import React, { useEffect, useState } from "react";
import "./navbar.css";
import logoDark from "../../assets/logoDark.png";
import logoLight from "../../assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const location = useLocation();
  
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    // Update favicon based on dark mode
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = darkMode ? "/logoDark.png" : "/logo.png";
    }
  }, [darkMode]);

  useEffect(() => {
    if (location.pathname !== "/") {
      // When not on homepage, set active based on route
      const routeToSection = {
        "/about": "skills",
        "/portfolio": "works",
        "/contact": "contactPage",
      };
      setActiveSection(routeToSection[location.pathname] || "intro");
      return;
    }

    const sectionIds = ["intro", "skills", "works", "contactPage"];
    
    const updateActiveFromScroll = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (sections.length === 0) {
        console.log("No sections found");
        return;
      }

      const scrollPos = window.scrollY + 200;
      let currentId = "intro";

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPos >= section.offsetTop - 100) {
          currentId = section.id;
          break;
        }
      }

      console.log("Active section:", currentId, "Scroll:", scrollPos);
      setActiveSection(currentId);
    };

    const initTimer = setTimeout(updateActiveFromScroll, 300);
    
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveFromScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActiveFromScroll, { passive: true });

    return () => {
      clearTimeout(initTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
    };
  }, [location.pathname]);

  const desktopLinkClass = (sectionId) => ({ isActive }) => {
    const active = location.pathname === "/" ? activeSection === sectionId : isActive;
    return `desktopMenuListItem${active ? " active" : ""}`;
  };

  const mobileLinkClass = (sectionId) => ({ isActive }) => {
    const active = location.pathname === "/" ? activeSection === sectionId : isActive;
    return `listItem${active ? " active" : ""}`;
  };

  const handleHomeClick = (event) => {
    if (location.pathname === "/") {
      event.preventDefault();
      const target = document.getElementById("intro");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }
    setShowMenu(false);
  };

  return (
    <nav data-aos="fade-down" className="navbar">
      <NavLink to="/" end className="cursor-pointer">
        <img src={darkMode ? logoDark : logoLight} alt="Logo" className="logo" />
      </NavLink>
      <div className="desktopMenu">
        <NavLink to="/" end className={desktopLinkClass("intro")} onClick={handleHomeClick}>
          Home
        </NavLink>
        <NavLink to="/about" className={desktopLinkClass("skills")}>
          About
        </NavLink>
        <NavLink to="/portfolio" className={desktopLinkClass("works")}>
          Portfolio
        </NavLink>
        <NavLink to="/contact" className={desktopLinkClass("contactPage")}>
          Contact
        </NavLink>
      </div>
     

     
      <button
        className={`darkModeSwitch${darkMode ? " is-on" : ""}`}
        onClick={() => setDarkMode(!darkMode)}
        aria-pressed={darkMode}
        aria-label="Toggle dark mode"
      >
        <span className="switch-track"></span>
        <span className="switch-icon switch-sun">
          <i className="fa-solid fa-sun"></i>
        </span>
        <span className="switch-icon switch-moon">
          <i className="fa-solid fa-moon"></i>
        </span>
        <span className="switch-thumb"></span>
      </button>

      <i
        onClick={() => setShowMenu(!showMenu)}
        className="fa-solid fa-bars mobMenu"
      ></i>
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <NavLink
          to="/"
          end
          className={mobileLinkClass("intro")}
          onClick={handleHomeClick}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={mobileLinkClass("skills")}
          onClick={() => setShowMenu(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/portfolio"
          className={mobileLinkClass("works")}
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </NavLink>

        <NavLink
          to="/contact"
          className={mobileLinkClass("contactPage")}
          onClick={() => setShowMenu(false)}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
