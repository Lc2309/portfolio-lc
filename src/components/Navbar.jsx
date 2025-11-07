import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage(); // hook ici

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <>
      <header className="navbar">
        <div className="left-section">
          <div className="logo">Portfolio</div>
          <button className="lang-switch" onClick={toggleLanguage}>
            {language === "fr" ? "FR 🇫🇷" : "EN 🇬🇧"}
          </button>
        </div>

        <ul className="nav-links">
          <li onClick={() => scrollToSection("profile")}>
            {language === "fr" ? "Profil" : "Profile"}
          </li>
          <li onClick={() => scrollToSection("formation")}>
            {language === "fr" ? "Formation" : "Education"}
          </li>
          <li onClick={() => scrollToSection("experience")}>
            {language === "fr" ? "Expérience" : "Experience"}
          </li>
          <li onClick={() => scrollToSection("projects")}>
            {language === "fr" ? "Projets" : "Projects"}
          </li>
          <li onClick={() => scrollToSection("contact")}>
            {language === "fr" ? "Contact" : "Contact"}
          </li>
        </ul>

        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen((s) => !s)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </header>

      {isOpen && <div className="menu-overlay" onClick={() => setIsOpen(false)} />}

      <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => scrollToSection("profile")}>
            {language === "fr" ? "Profil" : "Profile"}
          </li>
          <li onClick={() => scrollToSection("formation")}>
            {language === "fr" ? "Formation" : "Education"}
          </li>
          <li onClick={() => scrollToSection("experience")}>
            {language === "fr" ? "Expérience" : "Experience"}
          </li>
          <li onClick={() => scrollToSection("projects")}>
            {language === "fr" ? "Projets" : "Projects"}
          </li>
          <li onClick={() => scrollToSection("contact")}>
            {language === "fr" ? "Contact" : "Contact"}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
