import React from "react";

const SkillsContainer = ({ mainTitle, content }) => {
  return (
    <div className="section" id="container">
      <h2>{mainTitle}</h2>
      <div className="items">
        {content.map((s) => (
          <p className="name" key={s.name}>
            {s.name}
            <img src={s.img} alt={s.name} />
          </p>
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
