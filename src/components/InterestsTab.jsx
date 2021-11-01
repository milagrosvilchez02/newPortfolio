import React from "react";
import interests from "../interests.json";
import "../assets/styles/InterestsTab.css";

const InterestsTab = () => {
  return (
    <div className="inter-cont">
      {interests.map((i) => (
        <div className="inter-item">
          <img className="item-img" src={i.src} alt={i.alt} />
        </div>
      ))}
    </div>
  );
};

export default InterestsTab;
