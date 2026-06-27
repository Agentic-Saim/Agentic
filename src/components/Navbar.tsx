"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // If still in the canvas scroll section, perhaps scroll down entirely
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[95%] max-w-2xl px-4 md:px-6 py-3 rounded-full bg-black/20 backdrop-blur-xl border border-white/5 shadow-[0_0_30px_rgba(255,255,255,0.03)] text-xs md:text-sm font-medium text-neutral-300">
      <div className="flex items-center gap-3 md:gap-6">
        <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="hover:text-white transition-colors">About</a>
        <a href="#experience" onClick={(e) => scrollToSection(e, "experience")} className="hover:text-white transition-colors">Experience</a>
        <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className="hover:text-white transition-colors">Projects</a>
      </div>
      <div className="flex items-center gap-3 md:gap-4">
        <a href="https://github.com/taha-codes09" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-lg">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/taha-codes09" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-lg">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}
