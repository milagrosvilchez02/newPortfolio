import React from "react";
import resumeDownload from "../resources/portfolioResume.pdf";
import image from "../resources/resume.jpg";
const Resume = () => {
  return (
    <div className="resume-container">
      <a href={resumeDownload} download="MariaResume.pdf">
        Download my resume!
      </a>
      <img className="resume" src={image} alt="resume" />
    </div>
  );
};

export default Resume;
