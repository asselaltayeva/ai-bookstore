import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full px-10 py-8 flex flex-col items-center gap-2 mb-4">
      <div className="w-full h-px bg-zinc-400" />
      <span className="text-sm text-gray-700 text-center">
        Bookstore is built for educational purpose only.
      </span>
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-gray-700 hover:text-black transition"
      >
        <FaGithub size={20} />
      </a>
    </div>
  );
};

export default Footer;
