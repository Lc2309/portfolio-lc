import React from "react";
import "./Experience.css";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const { language } = useLanguage();

  const experiences = [
    {
      id: 1,
      logo: "/images/logo1.jpg",
      posteFr: "Stagiaire Développeur Web",
      posteEn: "Web Developer Intern",
      entreprise: "Paositra Malagasy",
      descriptionFr:
        "Conception et développement d'une application web pour la gestion de stock des matériels de la Paositra Malagasy avec JavaScript, HTML, CSS et PHP.",
      descriptionEn:
        "Design and development of a web application for managing equipment stock for Paositra Malagasy using JavaScript, HTML, CSS, and PHP.",
    },
    {
      id: 2,
      logo: "/images/logo2.jpg",
      posteFr: "Designer Photoshop",
      posteEn: "Photoshop Designer",
      entreprise: "Église Évangélique Ziona Mahafinaritra",
      descriptionFr:
        "Conception de plusieurs affiches et flyers pour les évènements organisés par l'église évangélique.",
      descriptionEn:
        "Designed various posters and flyers for events organized by the evangelical church.",
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">
        {language === "fr"
          ? "Expériences Professionnelles"
          : "Professional Experiences"}
      </h2>

      <div className="experience-list">
        {experiences.map((exp) => (
          <div className="experience-item" key={exp.id}>
            <img src={exp.logo} alt={exp.entreprise} className="experience-logo" />
            <div className="experience-details">
              <h3>{language === "fr" ? exp.posteFr : exp.posteEn}</h3>
              <h4>{exp.entreprise}</h4>
              <p>{language === "fr" ? exp.descriptionFr : exp.descriptionEn}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
