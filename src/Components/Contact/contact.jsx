import "./contact.css";
import { useState } from "react";
import SocialLinks from "../SocialLinks/SocialLinks";

const Contact = () => {
  const [result, setResult] = useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const message = String(formData.get("message") || "").trim();
    if (!message) {
      setResult("Please enter a message before submitting.");
      return;
    }
    setSending(true);
    setResult("Sending...");
    formData.append("access_key", "c42b0e8e-c45f-4ca3-9265-4f6340472b9e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Thanks! Your message has been sent.");
        form.reset();
      } else {
        setResult("Something went wrong. Please try again or email me directly.");
      }
    } catch {
      setResult("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div id="contactPage">
      <div id="contact">
        <h2 className="contactPageTitle">Contact Me</h2>
        <span className="contactDesc">
          Let’s connect to discuss freelance projects, full-time opportunities,
          or potential collaborations.
        </span>
        <form className="contactForm" onSubmit={onSubmit}>
          <label htmlFor="contact-name" className="sr-only">
            Your name
          </label>
          <input
            id="contact-name"
            data-aos="fade-up"
            data-aos-delay="0"
            type="text"
            className="name"
            placeholder="Your name"
            name="from_name"
            autoComplete="name"
            required
          />
          <label htmlFor="contact-email" className="sr-only">
            Your email
          </label>
          <input
            id="contact-email"
            data-aos="fade-up"
            data-aos-delay="150"
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
            autoComplete="email"
            required
          />
          <label htmlFor="contact-message" className="sr-only">
            Your message
          </label>
          <textarea
            id="contact-message"
            data-aos="fade-up"
            data-aos-delay="300"
            name="message"
            placeholder="Your Message"
            rows={5}
            className="msg resize-none"
            required
          ></textarea>
          <button
            data-aos="fade-up"
            data-aos-delay="450"
            type="submit"
            className="submitBtn"
            disabled={sending}
          >
            {sending ? "Sending..." : "Submit"}
          </button>
          <span role="status" aria-live="polite">
            {result}
          </span>
        </form>
      </div>
      <SocialLinks className="links flex justify-start" />
    </div>
  );
};

export default Contact;
