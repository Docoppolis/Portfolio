import { useState, useEffect } from "react";
import { SocialIcon } from 'react-social-icons';

export default function Hero({ lenisRef }) {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // triggers when 50% of section is visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Smooth scroll to section using Lenis
  const scrollToSection = (id) => {
    const lenis = lenisRef?.current;
    const target = document.getElementById(id);
    if (lenis && target) {
      lenis.scrollTo(target, { offset: -100 }); // optional offset to avoid overlapping
    }
  };

  return (
    <div className="px-6 sm:px-10 text-center mt-15 lg:text-left lg:ml-10">
      {/* Header content */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-2">John Parrott</h1>
      <h2 className="text-xl sm:text-2xl text-slate-400 mb-6">Backend Developer</h2>
      <p className="text-slate-400 text-sm sm:text-base lg:mb-8">
        I build reliable, data-driven systems and enjoy exploring how backend
        architecture powers modern web apps.
      </p>

      <a
        href="/resume_JOHNPARROTT.pdf"
        download
        className="inline-block bg-violet-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-violet-500 transition-colors duration-300 mt-10 mb-0 lg:mt-0 lg:mb-8"
      >
        Download Resume
      </a>

      {/* Navigation Tabs */}
      <div className="hidden lg:flex flex-col space-y-2">
        <Tab
          label="About"
          active={activeSection === "about"}
          onClick={() => scrollToSection("about")}
        />
        <Tab
          label="Experience"
          active={activeSection === "experience"}
          onClick={() => scrollToSection("experience")}
        />
        <Tab
          label="Skills"
          active={activeSection === "skills"}
          onClick={() => scrollToSection("skills")}
        />
        <Tab
          label="Projects"
          active={activeSection === "projects"}
          onClick={() => scrollToSection("projects")}
        />
      </div>

      
      <div className="fixed lg:left-4 lg:right-4 bottom-4 right-4 flex space-x-4 z-50">
        <SocialIcon url="https://github.com/Docoppolis" bgColor="#7c3aed" target="_blank" rel="noopener noreferrer" />
        <SocialIcon url="https://www.linkedin.com/in/john-parrott-6b88ba27a/" bgColor="#7c3aed" target="_blank" rel="noopener noreferrer" />
        <SocialIcon url="https://www.instagram.com/john.parrott653" bgColor="#7c3aed" target="_blank" rel="noopener noreferrer" />
      </div>
      

    </div>
    
    
  );
}

function Tab({ label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 cursor-pointer transition-all duration-300 ${
        active ? "text-violet-400 scale-[1.05]" : "text-white/70"
      }`}
    >
      <div
        className={`w-10 h-px transition-all duration-300 ${
          active ? "bg-violet-400" : "bg-white/40"
        }`}
      ></div>
      <span className="text-lg font-semibold">{label}</span>
    </div>
  );
}
