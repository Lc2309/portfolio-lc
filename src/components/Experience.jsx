import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      logo: "/images/logo1.jpg",
      poste: "Stagiaire Développeur Web",
      entreprise: "Paositra Malagasy",
      description:
        "Conception et développement d'une application web pour la gestion de stock des maériels de la Paositra avec JavaScript, HTML, CSS et PHP.",
    },
    {
      id: 2,
      logo: "/images/logo2.jpg",
      poste: "Designer Photoshop",
      entreprise: "Eglise Evangélique Ziona Mahafinaritra",
      description:
        "Conception de plusieurs affiches et flyers pour les évènements organisés par l'église évangélique.",
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">Expériences Professionnelles</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <div className="experience-item" key={exp.id}>
            <img src={exp.logo} alt={exp.entreprise} className="experience-logo" />
            <div className="experience-details">
              <h3>{exp.poste}</h3>
              <h4>{exp.entreprise}</h4>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
