import React, { useEffect } from "react";
import "./intro.css";
import bg from "../../assets/bg.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "animate.css";


const Intro = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="" id="intro">
      <div className="introContent animate__animated animate__bounceInLeft">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName animate__animated animate__bounce">Mostafa</span> <br />
          Front End Developer
        </span>
        <p className="introPara">
          Front end developer crafting a single-page portfolio that highlights
          <br />
          my skills, projects, and experience with a smooth user journey.
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
          <a target="_blank" href="https://wa.me/393248860529">
            <i className="fa-brands fa-whatsapp text-4xl text-green-500"></i>
          </a>
          <a href="mailto:mostafakamal.mk966@gmail.com">
            <i className="fa-solid fa-envelope text-4xl text-red-500"></i>
          </a>
        </div>
      </div>
      <img data-aos="fade-right" src={ bg} alt="Profile" className="bg rounded-2xl animate__animated animate__fadeInRight" />
    </section>
  );
};

export default Intro;
