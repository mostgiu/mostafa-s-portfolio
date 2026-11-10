import React from "react";
import Icon from "../Icon/Icon";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mostafa-saleh-15970a1a6",
    icon: "linkedin",
    iconClass: "text-4xl text-blue-500",
  },
  {
    label: "GitHub",
    href: "https://github.com/mostgiu",
    icon: "github",
    iconClass: "text-4xl",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/393248860529",
    icon: "whatsapp",
    iconClass: "text-4xl text-green-500",
  },
  {
    label: "Email",
    href: "mailto:mostafakamal.mk966@gmail.com",
    icon: "envelope",
    iconClass: "text-4xl text-red-500",
  },
];

const SocialLinks = ({ className = "links" }) => (
  <div className={className}>
    {socials.map(({ label, href, icon, iconClass }) => {
      const external = href.startsWith("http");
      return (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        >
          <Icon name={icon} className={iconClass} />
        </a>
      );
    })}
  </div>
);

export default SocialLinks;
