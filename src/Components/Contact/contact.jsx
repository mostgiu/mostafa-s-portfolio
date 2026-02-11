import "./contact.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    Aos.init({ duration: 700, once: true, offset: 120 });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const message = String(formData.get("message") || "").trim();
    if (!message) {
      setResult("Please enter a message before submitting.");
      return;
    }
    setResult("Sending....");
    formData.append("access_key", "c42b0e8e-c45f-4ca3-9265-4f6340472b9e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Reach out through the form below to discuss freelance work, full-time
          roles, or collaborations.
        </span>
        <form className="contactForm" onSubmit={onSubmit}>
          <input
            data-aos="fade-up"
            data-aos-delay="0"
            type="text"
            className="name"
            placeholder="Your name"
            name="from_name"
          />
          <input
            data-aos="fade-up"
            data-aos-delay="150"
            type="text"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            data-aos="fade-up"
            data-aos-delay="300"
            name="message"
            placeholder="Your Message"
            rows={5}
            className="msg resize-none"
          ></textarea>
          <button
            data-aos="fade-up"
            data-aos-delay="450"
            type="submit"
            value="Send"
            className="submitBtn"
          >
            Submit
          </button>
          <span>{result}</span>
        </form>
        
      </div>
      <div className="links  flex justify-start">
          <a
            href="https://www.linkedin.com/in/mostafa-saleh-15970a1a6"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin text-4xl text-blue-500"></i>
          </a>
          <a target="_blank" href="https://github.com/mostgiu">
            <i className="fa-brands fa-github text-4xl"></i>
          </a>
          <a target="_blank" href="https://wa.me/393248860529">
            <i className="fa-brands fa-whatsapp text-4xl text-green-500"></i>
          </a>
          <a href="mailto:mostafakamal.mk966@gmail.com">
            <i className="fa-solid fa-envelope text-4xl text-red-500"></i>
          </a>
        </div>
    </div>
  );
};

export default Contact;
