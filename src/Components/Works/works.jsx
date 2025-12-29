import React from "react";
import "./works.css";
import Uni from "../../assets/uni.jpg";
import To_do from "../../assets/to-do.jpg";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Works = () => {
    useEffect(()=>{
         Aos.init({duration:1000})
       },[])
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        experience to help businesses achieve their goals and create a strong
        online presence.
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div data-aos='fade-right'  className="project">
          <img src={Uni} alt="" className="worksImg" />
          <div className="layer">
            <a
              href="https://www.w3schools.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              <span>University website </span><br />
             <div className="text-xs">View Project <i className="fa-solid fa-arrow-right"></i></div> 
            </a>
          </div>
        </div>
        <div data-aos='fade-left'  className="project">
          <img src={To_do} alt="" className="worksImg" />
          <div className="layer">
            <a
              href="https://www.w3schools.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              <span> To Do App </span><br />
             <div className="text-xs">View Project <i className="fa-solid fa-arrow-right"></i></div> 
            </a>
          </div>
        </div>
        <div data-aos='fade-right'  className="project">
          <img src={Uni} alt="" className="worksImg" />
        </div>
        <div data-aos='fade-left'  className="project">
          <img src={Uni} alt="" className="worksImg" />
        </div>
      </div>
    </section>
  );
};

export default Works;
