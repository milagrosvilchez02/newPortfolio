import React from "react";
import Section from "./Section";
import PersonalInfo from "./PersonalInfo";
import data from "../data.json";
import skills from "../skills.json";
import "../assets/styles/Home.css";
import SkillsContainer from "./SkillsContainer";

const Home = () => {
  return (
    <div className="home-container">
      <PersonalInfo />
      {data.map((c) => (
        <Section
          key={c.mainTitle}
          mainTitle={c.mainTitle}
          content={c.content}
        ></Section>
      ))}
      <SkillsContainer mainTitle={skills.mainTitle} content={skills.content} />
    </div>
  );
};

export default Home;
