import React from "react";
import "./works.css";
import Uni from "../../assets/uni.jpg";
import BazarloThumbnail from "../../assets/e-commerce-2.jpg";
import Vendora from "../../assets/vendora.png";
import Inkora from "../../assets/inkora.png";
import VendoraLogo from "../../assets/vendora-logo.svg";
import InkoraLogo from "../../assets/inkora-logo.svg";
import PizzaPrimaveraThumbnail from "../../assets/pizza-primavera-thumbnail.jpg";
import NewsMagThumbnail from "../../assets/newsmag.jpg";

// Ordered by strength: the first cards are what recruiters see first.
const projects = [
  {
    title: "Inkora",
    logo: InkoraLogo,
    image: Inkora,
    alt: "Inkora blog with a personal dashboard for managing posts",
    description:
      "A full-stack Next.js app with MongoDB-backed authentication, a blog, and a personal dashboard for creating, managing, and deleting posts.",
    tags: ["Next.js", "MongoDB", "Authentication", "Dashboard", "Responsive"],
    github: "https://github.com/mostgiu/inkora",
    live: "https://inkora-blog.vercel.app",
  },
  {
    title: "Vendora",
    logo: VendoraLogo,
    image: Vendora,
    alt: "Vendora e-commerce storefront",
    description:
      "A modern Next.js e-commerce store for browsing products, exploring product details, and managing a shopping cart.",
    tags: ["Next.js", "Product Catalog", "Shopping Cart", "Responsive"],
    github: "https://github.com/mostgiu/vendora",
    live: "https://vendora-fashion.vercel.app",
  },
  {
    title: "Bazarlo",
    image: BazarloThumbnail,
    alt: "Shopping bag and cart for the Bazarlo e-commerce store",
    description:
      "A fully functional e-commerce platform built with React. Features product browsing, shopping cart management, checkout process, and responsive design for seamless shopping experience.",
    tags: ["React", "State Management", "Cart System", "Checkout", "Responsive"],
    github: "https://github.com/mostgiu/E-commerce",
    live: "https://bazarlo.vercel.app",
  },
  {
    title: "NewsMag",
    image: NewsMagThumbnail,
    alt: "NewsMag news app showing the latest headlines",
    description:
      "A React news app built with Bootstrap and the NewsAPI, featuring live headlines by category, keyword search, and a responsive card grid with loading and error states.",
    tags: ["React", "Bootstrap", "REST API", "Search", "Responsive"],
    github: "https://github.com/mostgiu/newsmag",
    live: "https://newsmag-black.vercel.app",
  },
  {
    title: "Pizza Primavera",
    image: PizzaPrimaveraThumbnail,
    alt: "Pizza Primavera restaurant ordering app",
    description:
      "A responsive pizza ordering website built with Next.js, featuring menu browsing, product details, a shopping cart, and order management.",
    tags: ["Next.js", "Shopping Cart", "Responsive"],
    github: "https://github.com/mostgiu/pizza-primavera",
    live: "https://pizza-primavera.vercel.app",
  },
  {
    title: "Educity",
    image: Uni,
    alt: "Educity university website homepage",
    description:
      "A modern educational website with a clean interface, responsive layout, and smooth user experience focused on showcasing courses and campus information.",
    tags: ["UI Design", "Performance", "Responsive"],
    github: "https://github.com/mostgiu/Educity",
    live: "https://educity-ruddy.vercel.app/",
  },
];

const ProjectCard = ({ project, index }) => {
  const { title, logo, image, alt, description, tags, github, live } = project;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={(index % 3) * 100}
      className="project w-full h-full flex flex-col"
    >
      <div className="img-container">
        <img src={image} alt={alt} className="worksImg" loading="lazy" />
        <div className="dark-layer"></div>
        <div className="visit-btn">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} live`}
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
      <div className="card-title text-start flex flex-col flex-1">
        <div className="card-header flex gap-2 items-center mb-3">
          {logo && <img src={logo} alt="" className="card-logo" />}
          <h3 className="font-bold text-2xl">{title}</h3>
        </div>
        <div className="card-desc flex flex-col flex-1">
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            {description}
          </p>
          <ul className="tech-tags">
            {tags.map((tag) => (
              <li key={tag} className="tech-tag">
                {tag}
              </li>
            ))}
          </ul>
          <div className="project-links flex gap-2 mb-2 mt-auto">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link github-link"
            >
              <i className="fa-brands fa-github"></i>
              GitHub
            </a>
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link visit-link"
            >
              View Project{" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">Selected Projects</h2>
      <span className="worksDesc">
        A selection of projects that demonstrates my approach to building
        scalable front-end applications with clean design, practical UX, and
        maintainable code.
      </span>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Works;
