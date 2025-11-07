import React from "react";
import "./Profile.css";
import profile from "../assets/profile.png";
import { useLanguage } from "../context/LanguageContext"; // 👈 import du contexte de langue
import cvPdf from "../assets/Loïc Rasamoelina - CV.pdf"; // 👈 ton CV PDF

function Profile() {
  const { language } = useLanguage(); // 👈 on récupère la langue actuelle

  return (
    <section id="profile" className="header-section">
      <div className="profile-container">
        <img src={profile} alt="Profil" className="profile-pic" />
      </div>

      <div className="name-container">
        <h1 className="fullname">Loïc Rasamoelina</h1>
        <h2 className="role">
          {language === "fr" ? "Développeur Full-Stack" : "Full-Stack Developer"}
        </h2>
      </div>

      <div className="description-container">
        {language === "fr" ? (
          <>
            <h6 className="description">
              Passionné par les nouvelles technologies et le développement
              informatique, je suis un jeune professionnel dynamique, ponctuel et
              doté d’une grande capacité d’adaptation. Curieux et motivé, j’aime
              relever de nouveaux défis et apprendre en continu pour rester à jour
              avec les tendances du secteur. <br />
              <br />
              Je possède de solides compétences en programmation (front-end,
              back-end et bases de données), employant divers langages de
              programmation tels que C#, Python ou encore Java ; mais également
              des frameworks comme ReactJS ou Laravel, ainsi qu’une bonne maîtrise
              des outils de conception graphique tels que Adobe Photoshop, ce qui
              me permet de combiner technicité et créativité dans mes projets.
              <br />
              <br />
              Autonome mais également à l’aise en travail d’équipe, je m’efforce
              toujours d’apporter une contribution positive et des solutions
              efficaces à chaque mission qui m’est confiée.
            </h6>
            <a
              href={cvPdf}
              download
              className="cv-btn"
            >
              Mon Curriculum Vitae
            </a>
          </>
        ) : (
          <>
            <h6 className="description">
              Passionate about new technologies and software development, I am a
              dynamic, punctual, and highly adaptable professional. Curious and
              motivated, I enjoy taking on new challenges and continuously
              learning to stay up to date with industry trends. <br />
              <br />
              I have solid programming skills (front-end, back-end, and database),
              using various programming languages such as C#, Python, and Java,
              as well as frameworks like ReactJS and Laravel. I also have strong
              proficiency with design tools such as Adobe Photoshop, allowing me
              to combine technical precision and creativity in my projects.
              <br />
              <br />
              Independent yet comfortable working in a team, I always strive to
              make a positive contribution and provide effective solutions for
              every task entrusted to me.
            </h6>
            <a
              href={cvPdf}
              download
              className="cv-btn"
            >
              My Curriculum Vitae
            </a>
          </>
        )}
      </div>
    </section>
  );
}

export default Profile;
