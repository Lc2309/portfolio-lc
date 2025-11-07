import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import { useLanguage } from "../../context/LanguageContext"; // 👈 contexte langue

const Projects = () => {
  const { language } = useLanguage(); // 👈 récupération de la langue
  const isFr = language === "fr";

  const projects = [
    {
      id: 1,
      titleFr: "Application Web (HTML, JS, PhP, MySQL) sur la gestion de stock des matériels de la Paositra Malagasy",
      titleEn: "Web Application (HTML, JS, PHP, MySQL) for managing equipment stock at Paositra Malagasy",
      images: [
        "/assets/projets/projet1_img1.jpg",
        "/assets/projets/projet1_img2.jpg",
        "/assets/projets/projet1_img3.jpg",
        "/assets/projets/projet1_img4.jpg",
        "/assets/projets/projet1_img5.jpg",
        "/assets/projets/projet1_img6.jpg",
      ],
    },
    {
      id: 2,
      titleFr: "Projet Personnel: Site de réservation d'hôtel (ReactJS, Laravel, MySQL, API) avec un système de paiement en ligne (Stripe) et un Chatbot (Hugging Face)",
      titleEn: "Personal Project: Hotel booking website (ReactJS, Laravel, MySQL, API) with online payment system (Stripe) and Chatbot (Hugging Face)",
      images: [
        "/assets/projets/projet2_img1.png",
        "/assets/projets/projet2_img2.png",
        "/assets/projets/projet2_img3.png",
        "/assets/projets/projet2_img4.png",
        "/assets/projets/projet2_img5.png",
        "/assets/projets/projet2_img6.png",
        "/assets/projets/projet2_img7.png",
        "/assets/projets/projet2_img8.png",
        "/assets/projets/projet2_img9.png",
        "/assets/projets/projet2_img10.png",
        "/assets/projets/projet2_img11.png",
      ],
    },
    {
      id: 3,
      titleFr: "Quelques Affiches et Flyers Conçus pour l'église Ziona Mahafinaritra",
      titleEn: "Some Posters and Flyers Designed for Ziona Mahafinaritra Church",
      images: [
        "/assets/projets/projet3_img1.jpg",
        "/assets/projets/projet3_img2.jpg",
        "/assets/projets/projet3_img3.jpg",
        "/assets/projets/projet3_img4.jpg",
        "/assets/projets/projet3_img5.jpg",
        "/assets/projets/projet3_img6.jpg",
      ],
    },
  ];

  // Modal global
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");
  const [currentImages, setCurrentImages] = useState([]);

  const openModal = (images, index) => {
    setCurrentImages(images);
    setCurrentImg(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextImg = () => {
    setCurrentImg((prev) => (prev + 1) % currentImages.length);
  };

  const prevImg = () => {
    setCurrentImg((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">{isFr ? "Mes Projets" : "My Projects"}</h2>
      <div className="projects-list">
        {projects.map((proj) => (
          <ProjectCard
            key={proj.id}
            project={{
              ...proj,
              title: isFr ? proj.titleFr : proj.titleEn,
            }}
            openModal={openModal}
          />
        ))}
      </div>

      {/* Modal global */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <button className="close-btn" onClick={closeModal}>
            &times;
          </button>
          <button
            className="nav-btn left"
            onClick={(e) => {
              e.stopPropagation();
              prevImg();
            }}
          >
            &#10094;
          </button>
          <img
            src={currentImages[currentImg]}
            alt="Project screenshot"
            className="modal-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="nav-btn right"
            onClick={(e) => {
              e.stopPropagation();
              nextImg();
            }}
          >
            &#10095;
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
