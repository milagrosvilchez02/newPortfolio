import React from "react";

const PersonalInfo = () => {
  return (
    <div className="main">
      <div className="picture-section">
        <img
          className="me"
          src="https://avatars.githubusercontent.com/u/84051347?v=4"
          alt="me"
        />
        <div className="list">
          <p>• La Plata, Buenos Aires, Argentina</p>
          <p>• 22 years old</p>
        </div>
      </div>
      <div className="text">
        <p className="about-me">
          Hello! I'm Milagros and I'm passionate about programming.
          <br /> Here you'll see what I've learned.
        </p>
      </div>
    </div>
  );
};

export default PersonalInfo;
