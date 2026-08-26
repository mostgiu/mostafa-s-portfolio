import React from "react";
import "./skills.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Tailwind_logo from "../../assets/tailwind.svg";

const skillsList = [
  { label: "HTML", icon: "fa-brands fa-html5", color: "#e34f26", chip: "#fee2e2", chipDark: "rgba(227,79,38,0.18)" },
  { label: "CSS", icon: "fa-brands fa-css3-alt", color: "#1572b6", chip: "#dbeafe", chipDark: "rgba(21,114,182,0.18)" },
  { label: "Java Script", icon: "fa-brands fa-square-js", color: "#d6a800", chip: "#fef9c3", chipDark: "rgba(247,223,30,0.18)" },
  { label: "React", icon: "fa-brands fa-react", color: "#06b6d4", chip: "#cffafe", chipDark: "rgba(6,182,212,0.18)" },
  { label: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "#7c3aed", chip: "#ede9fe", chipDark: "rgba(124,58,237,0.18)" },
  { label: "Tailwind", img: Tailwind_logo, color: "#0d9488", chip: "#ccfbf1", chipDark: "rgba(45,212,191,0.18)" },
  { label: "NPM", icon: "fa-brands fa-npm", color: "#e0234e", chip: "#ffe4e6", chipDark: "rgba(224,35,78,0.18)" },
  { label: "GIT", icon: "fa-brands fa-git-alt", color: "#f05033", chip: "#ffedd5", chipDark: "rgba(240,80,51,0.18)" },
];

const Skills = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section data-aos="zoom-in-down" id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I create user-focused front-end solutions using modern web technologies,
        from reusable UI components to responsive layouts and accessible
        interactions with HTML, CSS, JavaScript, and React.
      </span>
      <div className="skillBars">
        {skillsList.map((skill, index) => (
          <div
            key={skill.label}
            className="skillBar"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div
              className="skill-chip"
              style={{
                "--chip-color": skill.color,
                "--chip-bg": skill.chip,
                "--chip-bg-dark": skill.chipDark,
              }}
            >
              {skill.img ? (
                <img src={skill.img} alt={skill.label} />
              ) : (
                <i className={skill.icon}></i>
              )}
            </div>
            <div className="skillBarText">
              <span>{skill.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
