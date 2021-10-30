import React from "react";
import resumeDownload from "../resources/Resume.pdf";
import image from "../resources/resume.jpg";
import "../assets/styles/Resume.css";
const Resume = () => {
  return (
    <div className="resume-container">
      <a href={resumeDownload} download="MariaResume.pdf">
        Download my resume!
      </a>
      <img src={image} alt="resume" />
    </div>
  );
};

export default Resume;
