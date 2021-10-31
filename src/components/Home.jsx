import React from "react";
import Section from "./Section";
import Contact from "./Contact";
import PersonalInfo from "./PersonalInfo";
import data from "../data.json";
import contactData from "../contactData.json";
import "../assets/styles/Home.css";

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
      {/* <ProjectsContainer projects={data.projects} /> */}
      {/* <Work works={data.works} /> */}
      <Contact content={contactData} />
    </div>
  );
};

export default Home;
