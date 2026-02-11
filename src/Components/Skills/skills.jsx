import React from "react";
import "./skills.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Tailwind_logo from "../../assets/tailwind.svg";

const Skills = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section data-aos="zoom-in-down" id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        This personal portfolio SPA showcases my core strengths in modern front
        end development, from UI design to component-driven interfaces. I build
        responsive, accessible experiences using HTML, CSS, JavaScript, and React.
      </span>
      <div className="skillBars grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        <div className="skillBar hover:-translate-y-6 transition-all shadow-[0_2px_8px_rgba(59,130,246,0.1)]" data-aos="fade-up" data-aos-delay="0">
          <i className="fa-brands fa-html5 text-red-500"></i>
          <div className="skillBarText">
            <span>HTML</span>
          </div>
        </div>
        <div className="skillBar hover:-translate-y-6 transition-all shadow-[0_2px_8px_rgba(59,130,246,0.1)]" data-aos="fade-up" data-aos-delay="100">
          <i className="fa-brands fa-css3-alt text-blue-500"></i>
          <div className="skillBarText">
            <span>CSS</span>
          </div>
        </div>
        <div className="skillBar hover:-translate-y-6 transition-all shadow-[0_2px_8px_rgba(59,130,246,0.1)]" data-aos="fade-up" data-aos-delay="200">
          <i className="fa-brands fa-square-js text-yellow-500"></i>
          <div className="skillBarText">
            <span>Java Script</span>
          </div>
        </div>
        <div className="skillBar hover:-translate-y-6 transition-all  shadow-[0_2px_8px_rgba(59,130,246,0.1)]" data-aos="fade-up" data-aos-delay="300">
          <i className="fa-brands fa-react text-cyan-500"></i>
          <div className="skillBarText">
            <span>React</span>
          </div>
        </div>
        <div className="skillBar hover:-translate-y-6 transition-all shadow-[0_2px_8px_rgba(59,130,246,0.1)]" data-aos="fade-up" data-aos-delay="400">
          <i className="fa-brands fa-bootstrap text-violet-500"></i>
          <div className="skillBarText">
            <span>Bootstrap</span>
          </div>
        </div>
          <div className="skillBar hover:-translate-y-6 transition-all shadow-[0_2px_8px_rgba(59,130,246,0.1)]" data-aos="fade-up" data-aos-delay="500">
          <img className="w-15" src={Tailwind_logo} alt="" />
          <div className="skillBarText">
            <span>Tailwind</span>
          </div>
        </div>
        <div className="skillBar hover:-translate-y-6 transition-all shadow-[0_2px_8px_rgba(59,130,246,0.1)]" data-aos="fade-up" data-aos-delay="600">
          <i className="fa-brands fa-npm text-rose-500"></i>
          <div className="skillBarText">
            <span>NPM</span>
          </div>
        </div>
        <div className="skillBar hover:-translate-y-6 transition-all shadow-[0_2px_8px_rgba(59,130,246,0.1)]" data-aos="fade-up" data-aos-delay="700">
          <i className="fa-brands fa-git-alt text-red-800"></i>
          <div className="skillBarText">
            <span>GIT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
