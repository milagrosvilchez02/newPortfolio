import React from "react";

const PersonalInfo = () => {
  return (
    <div className="main">
      <div className="personal-info-img">
        <img
          className="home-picture"
          src="https://avatars.githubusercontent.com/u/84051347?v=4"
          alt="me"
        />
        <div className="info-list">
          <p>• La Plata, Buenos Aires, Argentina</p>
          <p>• 22 years old</p>
        </div>
      </div>
      <div className="personal-info-text">
        <p className="about-me">
          Hello! I'm Milagros and I'm passionate about programming.
          <br /> I started by myself this year and here you'll see what I've
          learned.
        </p>
      </div>
    </div>
  );
};

export default PersonalInfo;