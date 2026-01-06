import React from "react";
import "./skills.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section data-aos="zoom-in-down" id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate web developer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, JavaScript, and React
      </span>
      <div className="skillBars">
        <div className="skillBar hover:-translate-y-6 transition-all shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
          <i className="fa-brands fa-html5 text-red-500"></i>
          <div className="skillBarText">
            <span>html</span>
          </div>
        </div>
        <div className="skillBar hover:-translate-y-6 transition-all shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
          <i className="fa-brands fa-css3-alt text-blue-500"></i>
          <div className="skillBarText">
            <span>Css</span>
          </div>
        </div>
        <div className="skillBar hover:-translate-y-6 transition-all shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
          <i className="fa-brands fa-square-js text-yellow-500"></i>
          <div className="skillBarText">
            <span>Java Script</span>
          </div>
        </div>
        <div className="skillBar hover:-translate-y-6 transition-all  shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
          <i className="fa-brands fa-react text-cyan-500"></i>
          <div className="skillBarText">
            <span>React</span>
          </div>
        </div>
        <div className="skillBar hover:-translate-y-6 transition-all shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
          <i className="fa-brands fa-bootstrap text-violet-500"></i>
          <div className="skillBarText">
            <span>Bootstrap</span>
          </div>
        </div>
        <div className="skillBar hover:-translate-y-6 transition-all shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
          <i className="fa-brands fa-npm text-rose-500"></i>
          <div className="skillBarText">
            <span>NPM</span>
          </div>
        </div>
        <div className="skillBar hover:-translate-y-6 transition-all shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
          <i className="fa-brands fa-git-alt text-red-800"></i>
          <div className="skillBarText">
            <span>Git</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
