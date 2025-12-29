import React, { useEffect } from "react";
import "./intro.css";
import bg from "../../assets/bg.png";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section data-aos="fade-down" id="intro">
      <div data-aos="fade-left" className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Mostafa</span> <br />
          Web Developer
        </span>
        <p className="introPara">
          I am a skilled web developer with experience in creating
          <br />
          visually appealing and user friendly websites and web apps.
        </p>
        <a href="/CCR.pdf" download>
          <button className="btn">
           
            <i className="fa-solid fa-download"></i> <span>Download CV</span>
          </button>
        </a>

        <div className="links  flex justify-start">
          <a
            href="https://www.linkedin.com/in/mostafa-saleh-15970a1a6"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin text-4xl text-blue-500"></i>
          </a>
          <a target="_blank" href="https://github.com/mostgiu">
            <i className="fa-brands fa-github text-4xl"></i>
          </a>
        </div>
      </div>
      <img data-aos="fade-right" src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
