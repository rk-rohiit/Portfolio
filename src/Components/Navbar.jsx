import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import Slider from "./Slider";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent px-[4%] py-2 mt-8 flex items-center justify-between">
      {/* Logo */}
      <img
        src={assets.logo}
        className="w-[max(20%,200px)] sm:w-[220px] md:w-[250px] cursor-pointer object-contain"
        alt="logo"
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-7">
        <div className="relative text-[18px] border border-aliceblue text-aliceblue px-5 py-1 rounded cursor-pointer h-9 text-center overflow-hidden group transition-all duration-300">
          {/* Background hover effect */}
          <span className="absolute inset-0 bg-aliceblue translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>

          {/* Foreground link */}
          <a
            href="#contact"
            className="relative z-10 group-hover:text-black transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <button
        onClick={() => setShowMobileMenu(true)}
        className="md:hidden z-[60]"
      >
        <img src={assets.menu_icon} className="w-7" alt="menu" />
      </button>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-3/4 max-w-[280px] bg-[aliceblue] z-50 transform transition-transform duration-300 ease-in-out ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button onClick={() => setShowMobileMenu(false)}>
            <img src={assets.cross_icon} className="w-4" alt="close" />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col items-center gap-2 mt-2 px-5 text-lg font-medium">
          {[
            { name: "Home", link: "#home" },
            { name: "About", link: "#about" },
            { name: "Contact", link: "#contact" },
            { name: "Projects", link: "#projects" },
            { name: "Expertise", link: "#expertise" },
          ].map((item) => (
            <li
              key={item.name}
              onClick={() => setShowMobileMenu(false)}
              className="px-4 py-2 w-full text-center rounded-full hover:bg-gray-200 transition"
            >
              <a href={item.link} className="hover:text-orange-500 transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Side Slider Component */}
      <Slider />
    </div>
  );
};

export default Navbar;
