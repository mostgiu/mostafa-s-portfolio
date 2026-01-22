import React from "react";
import "./works.css";
import Uni from "../../assets/uni.jpg";
import To_do from "../../assets/to-do.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Works = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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
        <div
          data-aos="fade-right"
          className="project bg-gray-100 block max-w-sm  border border-gray-300 shadow-md p-4"
        >
          <div className="img-container">
            <img src={Uni} alt="" className="worksImg" />
          </div>
          <div className="card-title text-start">
            <div className="card-header flex gap-2 items-center mb-2">
              <h2 className="font-bold text-2xl ">University Website</h2>
            </div>
            <div className="card-desc ">
             
              <p className="text-gray-600 text-sm ">
                A fully responsive university website showcasing structured
                content, clean UI design, and front-end best practices
                
              </p>
              <div className="project-link hover:text-black text-stone-800  border-black border-3 rounded-2xl flex w-35 h-10 justify-center items-center"> <a href="">
                  View Project <i className="fa-solid fa-up-right-from-square"></i>
                </a></div>
             
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="project max-w-sm ">
          <img src={To_do} alt="" className="worksImg" />
          <div className="layer">
            <a
              href="https://www.w3schools.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              <span> To Do App </span>
              <br />
              <div className="text-xs">
                View Project <i className="fa-solid fa-arrow-right"></i>
              </div>
            </a>
          </div>
          Manage your tasks effortlessly with this React app—add, update, and
          delete items in a clean, responsive interface.
        </div>
        <div className="bg-gray-100 block max-w-sm p-6 border border-gray-300 rounded-lg shadow-md">
          <a href="#">
            <img className="rounded-lg" src={Uni} alt="Blog Image" />
          </a>
          <a href="#">
            <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-gray-800">
              Streamlining your design process today.
            </h5>
          </a>
          <p className="mb-6 text-gray-600">
            In today’s fast-paced digital landscape, fostering seamless
            collaboration among Developers and IT Operations.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-white   font-medium rounded-lg text-sm px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Read
          </a>
        </div>
      </div>
    </section>
  );
};

export default Works;
