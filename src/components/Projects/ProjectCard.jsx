import React from "react";
import "./Projects.css";

const ProjectCard = ({ project, openModal }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <div className="thumbnails">
        {project.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Capture ${i + 1}`}
            onClick={() => openModal(project.images, i)}
            className="thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
