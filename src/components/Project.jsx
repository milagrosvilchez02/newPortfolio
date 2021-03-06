import React from "react";

const Project = ({ info, img, link, descr }) => {
  return (
    <div className="project-container">
      <div className="about">
        <h2>{info}</h2>
        <p>{descr}</p>
        <a href={link} target="_blank" rel="noreferrer">
          Click here to see the project
        </a>
      </div>
      <img className="proj-img" src={img} alt="view" />
    </div>
  );
};

export default Project;
