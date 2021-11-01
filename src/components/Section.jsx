import React from "react";
import Project from "./Project";

const Section = ({ mainTitle, content }) => {
  return (
    <div className="section">
      <h1 className="title">{mainTitle}</h1>
      <div className="projects">
        {content.map((m) => (
          <Project
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

export default Section;
