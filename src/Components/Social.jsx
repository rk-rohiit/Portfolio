import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/rk-rohiit" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/rohitkumar46/",
  },
  { icon: <FaTwitter />, path: "https://x.com/rohit_shaxma" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/rk_rohiit" },
];

const Social = () => {
  return (
    <div className="flex gap-3">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.path}
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-lg px-2 py-2 text-[aliceblue] transition-all duration-300 hover:text-orange-500 hover:scale-110"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
