import React from "react";
import "./intro.css";
import Icon from "../Icon/Icon";
import bg from "../../assets/bg.jpg";
import avatar from "../../assets/avatar.jpg";
import SocialLinks from "../SocialLinks/SocialLinks";

const Intro = () => {
  const cvUrl = `${import.meta.env.BASE_URL}Mostafa_Saleh_Frontend_Resume_Updated.pdf`;

  return (
    <section className="intro" id="intro">
      <div className="introContent">
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
            <Icon name="download" /> <span>Download CV</span>
          </a>
          <a href="#works" className="btn secondary">
            <span>View projects</span>
          </a>
        </div>
        <SocialLinks />
      </div>
      <div className="introImageWrap">
        {/* Small screens get a head-and-shoulders avatar, so the face reads at
            avatar size and name/role stay above the fold. */}
        <picture>
          <source media="(max-width: 840px)" srcSet={avatar} />
          <img
            src={bg}
            alt="Mostafa Saleh on an old stone bridge with mountains behind"
            className="introImage rounded-2xl"
            width="880"
            height="1100"
            fetchPriority="high"
          />
        </picture>
      </div>
    </section>
  );
};

export default Intro;
