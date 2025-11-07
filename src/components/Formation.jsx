import React from "react";
import "./Formation.css";
import { useLanguage } from "../context/LanguageContext";

function Formation() {
  const { language } = useLanguage();

  return (
    <section id="formation" className="formation-section">
      <h2 className="section-title">
        {language === "fr" ? "Formations" : "Education"}
      </h2>

      <div className="formation-list">
        <div className="formation-item">
          <h3>
            {language === "fr"
              ? "Master 1 — Informatique, Programmation"
              : "Master 1 — Computer Science, Programming"}
          </h3>
          <p>Institut de Formation Technique (IFT)</p>

          <h3>
            {language === "fr"
              ? "Licence — Informatique"
              : "Bachelor’s Degree — Computer Science"}
          </h3>
          <p>Institut de Formation Technique (IFT)</p>
        </div>

        <div className="formation-item">
          <h3>
            {language === "fr"
              ? "Baccalauréat Malgache"
              : "Malagasy Baccalaureate"}
          </h3>
          <p>
            {language === "fr"
              ? "Série A2, Mention BIEN"
              : "Series A2, Honors: GOOD"}
          </p>
        </div>

        <div className="formation-item">
          <h3>
            {language === "fr"
              ? "Diplôme de Langue Française"
              : "French Language Diploma"}
          </h3>
          <p>{language === "fr" ? "Niveau DALF C1" : "Level DALF C1"}</p>
        </div>
      </div>
    </section>
  );
}

export default Formation;
