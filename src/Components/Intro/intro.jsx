import React from "react";
import "./intro.css";
import bg from "../../assets/bg.png";
import "animate.css";
import SocialLinks from "../SocialLinks/SocialLinks";

const Intro = () => {
  const cvUrl = `${import.meta.env.BASE_URL}Mostafa_Saleh_Frontend_Resume_Updated.pdf`;

  return (
    <section className="intro" id="intro">
      <div className="introContent animate__animated animate__fadeInUp">
        <span className="hello">Hello,</span>
        <h1 className="introText">
          I'm <span className="introName">Mostafa</span> <br />
          Front End Developer
        </h1>
        <p className="introPara">
          Front-end developer focused on building modern, responsive web
          experiences with clean UI, solid performance, and accessible UX.
        </p>
        <div className="introActions">
          <a href={cvUrl} download="Mostafa_Saleh_CV.pdf" className="btn">
            <i className="fa-solid fa-download"></i> <span>Download CV</span>
          </a>
          <a href="#works" className="btn secondary">
            <span>View projects</span>
          </a>
        </div>
        <SocialLinks />
      </div>
      <div className="introImageWrap" data-aos="fade-left">
        <img
          src={bg}
          alt="Mostafa Saleh standing on a bridge by the river"
          className="introImage rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Intro;
