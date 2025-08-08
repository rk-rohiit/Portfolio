import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="w-full mt-6 max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center gap-6 backdrop-blur-md text-white p-6 rounded-xl shadow-lg">
      {/* Location */}
      <div className="flex items-center gap-3 border-b-2 border-transparent hover:border-orange-500 transition-all pb-2 w-full sm:w-auto">
        <MdLocationOn className="text-2xl text-orange-500" />
        <div>
          <p className="text-sm text-gray-300">Location</p>
          <p className="text-base text-[aliceblue]">Bihar, India</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-3 border-b-2 border-transparent hover:border-orange-500 transition-all pb-2 w-full sm:w-auto">
        <MdPhone className="text-2xl text-orange-500" />
        <div>
          <p className="text-sm text-gray-300">Phone</p>
          <p className="text-base text-[aliceblue]">+91 9334025588</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-center gap-3 border-b-2 border-transparent hover:border-orange-500 transition-all pb-2 w-full sm:w-auto">
        <MdEmail className="text-2xl text-orange-500" />
        <div>
          <p className="text-sm text-gray-300">Email</p>
          <p className="text-base text-[aliceblue]">
            askrohiitsharma@gmail.com
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mt-2 md:mt-0">
        <a
          href="https://github.com/rk-rohiit"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 transition"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/rohitkumar46/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 transition"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="https://x.com/rohit_shaxma"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 transition"
        >
          <FaTwitter size={22} />
        </a>
        <a
          href="https://www.instagram.com/rk_rohiit"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 transition"
        >
          <FaInstagram size={22} />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
