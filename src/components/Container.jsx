import React from "react";
import "../assets/styles/Project.css";

const Project = ({ info, img, link, descr }) => {
  return (
    <div className="project-container">
      <div className="about">
        <h2 className="about-text">{info}</h2>
        <a href={link} target="_blank" rel="noreferrer">
          {link}
        </a>
        <p>{descr}</p>
      </div>
      <img className="proj-img" src={img} alt="view" />
    </div>
  );
};

export default Project;
