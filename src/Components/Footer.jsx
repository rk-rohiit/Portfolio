import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] text-[aliceblue] px-4 sm:px-12 py-4 mt-0 border-t border-orange-500/30 shadow-inner shadow-orange-900/20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-0">
        {/* Left: Logo & Tagline */}
        <div className="text-center sm:text-left">
          <img
            src={assets.logo}
            alt=""
            className="w-[max(20%,250px)] cursor-pointer tracking-wide"
          />
          <p className="text-sm text-orange-500 mt-1">
            MERN Stack Developer | Passionate about web experiences
          </p>
        </div>

        {/* Middle: Navigation */}
        <div className="hidden sm:flex gap-8 text-sm text-white/70 border-x border-orange-500 px-10">
          <a href="#home" className="hover:text-orange-500 transition">
            Home
          </a>
          <a href="#about" className="hover:text-orange-500 transition">
            About
          </a>
          <a href="#contact" className="hover:text-orange-500 transition">
            Contact
          </a>
          <a href="#projects" className="hover:text-orange-500 transition">
            Projects
          </a>
          <a href="#expertise" className="hover:text-orange-500 transition">
            Skills
          </a>
        </div>

        {/* Right: Socials */}
        <div className="flex gap-6 text-xl text-white/80">
          <a
            href="https://github.com/rk-rohiit"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rohitkumar46/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[aliceblue] text-orange-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:askrohiitsharma@gmail.com"
            className="hover:text-orange-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-8 text-center text-xs text-white/40 tracking-wider">
        © {new Date().getFullYear()} Brain Coder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
