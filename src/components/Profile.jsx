import React from "react";
import "./Profile.css";
import profile from "../assets/profile.png";

function Profile() {
  return (
    <section className="header-section">
      <div className="profile-container">
        <img src={profile} alt="Profil" className="profile-pic" />
      </div>
      <div className="name-container">
        <h1 className="fullname">Loïc Rasamoelina</h1>
        <h2 className="role">Développeur Full-Stack</h2>
      </div>
      <div className="description-container">
        <h6 className="description">Passionné par les nouvelles technologies et le développement informatique, je suis un jeune professionnel dynamique, ponctuel et doté d’une grande capacité d’adaptation. Curieux et motivé, j’aime relever de nouveaux défis et apprendre en continu pour rester à jour avec les tendances du secteur.
Je possède de solides compétences en programmation (front-end, back-end et bases de données), employant divers langages de programmation tels que C#, Python ou encore Java; mais également des frameworks comme ReactJS ou Laravel, ainsi qu’une bonne maîtrise des outils de conception graphique tels que Adobe Photoshop, ce qui me permet de combiner technicité et créativité dans mes projets.
Autonome mais également à l’aise en travail d’équipe, je m’efforce toujours d’apporter une contribution positive et des solutions efficaces à chaque mission qui m’est confiée.</h6>
      </div>
    </section>
  );
}

export default Profile;
