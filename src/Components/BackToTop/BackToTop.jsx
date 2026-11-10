import { useEffect, useState } from "react";
import "./backToTop.css";
import Icon from "../Icon/Icon";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`backToTop ${show ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <Icon name="arrow-up" />
    </button>
  );
};

export default BackToTop;
