import React from "react";
import Container from "./Container";
import "../assets/styles/ProjectsContainer.css";

// {
//   c.content.map((i) => <Container key={i.title} content={i} />);
// }

const ProjectsContainer = ({ mainTitle, content }) => {
  return (
    <div className="projects">
      <h1 className="title">{mainTitle}</h1>
      <div className="projects">
        {content.map((m) => (
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