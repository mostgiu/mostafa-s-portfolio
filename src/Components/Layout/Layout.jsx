import Navbar from "./Components/NavBar/Navbar";
import Intro from "./Components/Intro/Intro";
import Works from "./Components/Works/works";
import Footer from "./Components/Footer/footer";
import Contact from "./Components/Contact/contact";
import Skills from "./Components/Skills/skills";
import { Outlet } from "react-router-dom";

function layOut() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

export default layOut;
