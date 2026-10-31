import React from "react";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mostafa-saleh-15970a1a6",
    icon: "fa-brands fa-linkedin text-4xl text-blue-500",
  },
  {
    label: "GitHub",
    href: "https://github.com/mostgiu",
    icon: "fa-brands fa-github text-4xl",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/393248860529",
    icon: "fa-brands fa-whatsapp text-4xl text-green-500",
  },
  {
    label: "Email",
    href: "mailto:mostafakamal.mk966@gmail.com",
    icon: "fa-solid fa-envelope text-4xl text-red-500",
  },
];

const SocialLinks = ({ className = "links" }) => (
  <div className={className}>
    {socials.map(({ label, href, icon }) => {
      const external = href.startsWith("http");
      return (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        >
          <i className={icon} aria-hidden="true"></i>
        </a>
      );
    })}
  </div>
);

export default SocialLinks;
