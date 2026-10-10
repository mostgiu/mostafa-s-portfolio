import React from "react";
import "./works.css";
import Uni from "../../assets/uni.jpg";
import eCommerce from "../../assets/ecommerce-1.jpg";
import LamaStore from "../../assets/lama-store-featured.png";
import Lamamia from "../../assets/lamamia.png";
import Restaurant from "../../assets/restaurant-ui.jpg";
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
        A selection of projects that demonstrates my approach to building
        scalable front-end applications with clean design, practical UX, and
        maintainable code.
      </span>
      <div className="projects-grid">
        {/* Project Card 1 - Personal Portfolio SPA */}
        <div
          data-aos="fade-right"
          className="project w-full h-full flex flex-col"
        >
          <div className="img-container">
            <img src={Uni} alt="Educity" className="worksImg" />
            <div className="dark-layer"></div>
            <div className="visit-btn">
              <a
                href="https://mostgiu.github.io/Educity/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="card-title text-start flex flex-col flex-1">
            <div className="card-header flex gap-2 items-center mb-3">
              <h2 className="font-bold text-2xl">Educity</h2>
            </div>
            <div className="card-desc flex flex-col flex-1">
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                A modern educational website with a clean interface, responsive
                layout, and smooth user experience focused on showcasing courses
                and campus information.
              </p>
              <div className="features-icons flex gap-3 mb-4 flex-wrap">
                <div className="feature-icon" title="Responsive">
                  <i className="fa-solid fa-mobile"></i>
                </div>
                <div className="feature-icon" title="UI Design">
                  <i className="fa-solid fa-palette"></i>
                </div>
                <div className="feature-icon" title="Performance">
                  <i className="fa-solid fa-gauge"></i>
                </div>
              </div>
              <div className="project-links flex gap-2 mb-2 mt-auto">
                <a
                  href="https://github.com/mostgiu/Educity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  <i className="fa-brands fa-github"></i>
                  GitHub
                </a>
                <a
                  href="https://mostgiu.github.io/Educity/"
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
        {/* Project Card 2 - Bazarlo */}
        <div
          data-aos="fade-left"
          className="project w-full h-full flex flex-col"
        >
          <div className="img-container">
            <img src={eCommerce} alt="" className="worksImg" />
            <div className="dark-layer"></div>
            <div className="visit-btn">
              <a
                href="https://mostgiu.github.io/E-commerce/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="card-title text-start flex flex-col flex-1">
            <div className="card-header flex gap-2 items-center mb-3">
              <h2 className="font-bold text-2xl">Bazarlo</h2>
            </div>
            <div className="card-desc flex flex-col flex-1">
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
              <div className="project-links flex gap-2 mb-2 mt-auto">
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
                  href="https://mostgiu.github.io/E-commerce/#/"
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

        {/* Project Card 3 - Lama Store */}
        <div
          data-aos="fade-right"
          className="project w-full h-full flex flex-col"
        >
          <div className="img-container">
            <img
              src={LamaStore}
              alt="Lama Store e-commerce storefront"
              className="worksImg"
            />
            <div className="dark-layer"></div>
            <div className="visit-btn">
              <a
                href="https://lama-store.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Lama Store live"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="card-title text-start flex flex-col flex-1">
            <div className="card-header flex gap-2 items-center mb-3">
              <h2 className="font-bold text-2xl">Lama Store</h2>
            </div>
            <div className="card-desc flex flex-col flex-1">
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                A modern Next.js e-commerce store for browsing products,
                exploring product details, and managing a shopping cart.
              </p>
              <div className="features-icons flex gap-3 mb-4 flex-wrap">
                <div className="feature-icon" title="Next.js">
                  <i className="fa-solid fa-code"></i>
                </div>
                <div className="feature-icon" title="Product Catalog">
                  <i className="fa-solid fa-store"></i>
                </div>
                <div className="feature-icon" title="Shopping Cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <div className="feature-icon" title="Responsive">
                  <i className="fa-solid fa-mobile"></i>
                </div>
              </div>
              <div className="project-links flex gap-2 mb-2 mt-auto">
                <a
                  href="https://github.com/mostgiu/Lama-store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  <i className="fa-brands fa-github"></i>
                  GitHub
                </a>
                <a
                  href="https://lama-store.vercel.app"
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

        {/* Project Card 4 - Lamamia */}
        <div
          data-aos="fade-right"
          className="project w-full h-full flex flex-col"
        >
          <div className="img-container">
            <img src={Lamamia} alt="Lamamia" className="worksImg" />
            <div className="dark-layer"></div>
            <div className="visit-btn">
              <a
                href="https://my-app-murex-iota.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="card-title text-start flex flex-col flex-1">
            <div className="card-header flex gap-2 items-center mb-3">
              <h2 className="font-bold text-2xl">Lamamia</h2>
            </div>
            <div className="card-desc flex flex-col flex-1">
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                A full-stack Next.js app with MongoDB-backed authentication, a
                blog, and a personal dashboard for creating, managing, and
                deleting posts.
              </p>
              <div className="features-icons flex gap-3 mb-4 flex-wrap">
                <div className="feature-icon" title="Authentication">
                  <i className="fa-solid fa-lock"></i>
                </div>
                <div className="feature-icon" title="Database">
                  <i className="fa-solid fa-database"></i>
                </div>
                <div className="feature-icon" title="Dashboard">
                  <i className="fa-solid fa-gauge"></i>
                </div>
                <div className="feature-icon" title="Responsive">
                  <i className="fa-solid fa-mobile"></i>
                </div>
              </div>
              <div className="project-links flex gap-2 mb-2 mt-auto">
                <a
                  href="https://github.com/mostgiu/Lama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  <i className="fa-brands fa-github"></i>
                  GitHub
                </a>
                <a
                  href="https://my-app-murex-iota.vercel.app"
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
        {/* Project Card 5 - Pizza Primavera */}
        <div
          data-aos="fade-left"
          className="project w-full h-full flex flex-col"
        >
          <div className="img-container">
            <img
              src={Restaurant}
              alt="Pizza Primavera restaurant ordering app"
              className="worksImg"
            />
            <div className="dark-layer"></div>
            <div className="visit-btn">
              <a
                href="https://pizza-primavera.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Pizza Primavera live"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="card-title text-start flex flex-col flex-1">
            <div className="card-header flex gap-2 items-center mb-3">
              <h2 className="font-bold text-2xl">Pizza Primavera</h2>
            </div>
            <div className="card-desc flex flex-col flex-1">
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                A responsive pizza ordering website built with Next.js,
                featuring menu browsing, product details, a shopping cart, and
                order management.
              </p>
              <div className="features-icons flex gap-3 mb-4 flex-wrap">
                <div className="feature-icon" title="Next.js">
                  <i className="fa-solid fa-code"></i>
                </div>
                <div className="feature-icon" title="Shopping Cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <div className="feature-icon" title="Responsive">
                  <i className="fa-solid fa-mobile"></i>
                </div>
              </div>
              <div className="project-links flex gap-2 mb-2 mt-auto">
                <a
                  href="https://github.com/mostgiu/pizza-primavera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  <i className="fa-brands fa-github"></i>
                  GitHub
                </a>
                <a
                  href="https://pizza-primavera.vercel.app"
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
