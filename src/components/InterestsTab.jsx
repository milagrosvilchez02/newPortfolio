import React from "react";
import interests from "../interests.json";

const InterestsTab = () => {
  return (
    <div className="interests">
      {interests.map((i) => (
        <div>
          <img className="item-img" src={i.src} alt={i.alt} />
        </div>
      ))}
    </div>
  );
};

export default InterestsTab;
