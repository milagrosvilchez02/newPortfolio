import React from "react";
import Container from "./Container";
import projectData from "../projectData.json";

const ProjectsContainer = () => {
  return (
    <div className="projects">
      <h1 className="title">My projects</h1>
      <div className="projects">
        {projectData.map((m) => (
          <Container
            key={m.title}
            info={m.title}
            img={m.img}
            link={m.link}
            descr={m.descr}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;
