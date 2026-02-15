import React from "react";
import "./works.css";
import Uni from "../../assets/uni.jpg";
import eCommerce from "../../assets/ecommerce-1.jpg";
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
        This single-page portfolio highlights selected projects with a focus on
        clean interfaces, thoughtful UX, and reliable front end engineering.
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Card 1 - Personal Portfolio SPA */}
        

        {/* Project Card 2 - Bazarlo */}
        <div
          data-aos="fade-left"
          className="project bg-gray-100 block max-w-xs shadow-md p-3"
        >
          <div className="img-container">
            <img src={eCommerce} alt="" className="worksImg" />
            <div className="dark-layer"></div>
            <div className="visit-btn">
              <a
                href="https://e-commerce-g3u8-kxw3wunr9-mostafas-projects-e0563a56.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="card-title text-start">
            <div className="card-header flex gap-2 items-center mb-3">
              <h2 className="font-bold text-2xl">Bazarlo</h2>
            </div>
            <div className="card-desc">
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                A fully functional e-commerce platform built with React.
                Features product browsing, shopping cart management, checkout
                process, and responsive design for seamless shopping experience.
              </p>
              <div className="features-icons flex gap-3 mb-4 flex-wrap">
                <div className="feature-icon" title="React">
                  <i className="fa-brands fa-react"></i>
                </div>
                <div className="feature-icon" title="State Management">
                  <i className="fa-solid fa-database"></i>
                </div>
                <div className="feature-icon" title="Responsive">
                  <i className="fa-solid fa-mobile"></i>
                </div>
                <div className="feature-icon" title="Cart System">
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <div className="feature-icon" title="Payments">
                  <i className="fa-solid fa-credit-card"></i>
                </div>
              </div>
              <div className="project-links flex gap-2 mb-2">
                <a
                  href="https://github.com/mostgiu/E-commerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  <i className="fa-brands fa-github"></i>
                  GitHub
                </a>
                <a
                  href="https://e-commerce-g3u8-kxw3wunr9-mostafas-projects-e0563a56.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link visit-link"
                >
                  View Project{" "}
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
