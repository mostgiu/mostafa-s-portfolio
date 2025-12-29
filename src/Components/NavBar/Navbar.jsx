import React, { useEffect, useState } from "react";
import "./navbar.css";
import logoDark from "../../assets/logoDark.png";
import logoLight from "../../assets/logo.png";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <nav data-aos="fade-down" className="navbar">
      <Link className="cursor-pointer" to="intro" smooth={true}>
        <img src={darkMode? logoDark :logoLight} alt="Logo" className="logo" />
      </Link>
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Contact
        </Link>
      </div>
     

     
       <button className="darkModeBtn" onClick={() => setDarkMode(!darkMode)}>
        <i className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
      </button>

      <i
        onClick={() => setShowMenu(!showMenu)}
        className="fa-solid fa-bars mobMenu"
      ></i>
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>

        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
