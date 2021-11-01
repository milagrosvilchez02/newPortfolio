import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/home">
        <figure>
          <img
            className="header-icon"
            src="https://img.icons8.com/external-ddara-lineal-color-ddara/64/000000/external-hospitality-professions-ddara-lineal-color-ddara.png"
            alt="icon"
          />
        </figure>
      </NavLink>
      <NavLink to="/interests">Interests</NavLink>
    </div>
  );
};

export default Header;
