import React from "react";
import Container from "./Container";
import workData from "../workData.json";

const Work = () => {
  return (
    <div>
      <div className="projects">
        <h1 className="title">Works</h1>
        <div className="projects">
          {workData.map((m) => (
            <Container
              key={m.title}
              info={m.title}
              link={m.link}
              descr={m.descr}
              img={m.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
