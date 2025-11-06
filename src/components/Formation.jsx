import React from "react";
import "./Formation.css";

function Formation() {
  return (
    <section className="formation-section">
      <h2 className="section-title">Formations</h2>

      <div className="formation-list">
        <div className="formation-item">
          <h3>Master 1 — Informatique, Programmation</h3>
          <p>Institut de Formation Technique (IFT)</p>
          
          <h3>Licence — Informatique</h3>
          <p>Institut de Formation Technique (IFT)</p>
        </div>

        <div className="formation-item">
          <h3>Baccalauréat Malgache</h3>
          <p>Série A2, Mention BIEN</p>
        </div>

        <div className="formation-item">
          <h3>Diplôme de Langue Française</h3>
          <p>Niveau DALF C1</p>
        </div>
      </div>
    </section>
  );
}

export default Formation;
