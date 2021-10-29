import React from "react";
import ProjectsContainer from "./ProjectsContainer";
import Contact from "./Contact";
import PersonalInfo from "./PersonalInfo";
import Work from "./Work";
import "../assets/styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <PersonalInfo />
      <ProjectsContainer />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
