import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/resume">Resume</NavLink>
      <figure>
        <NavLink to="/home">
          <img
            className="header-icon"
            src="https://img.icons8.com/external-ddara-lineal-color-ddara/64/000000/external-hospitality-professions-ddara-lineal-color-ddara.png"
            alt="icon"
          />
        </NavLink>
      </figure>
      <NavLink to="/interests">Interests</NavLink>
    </div>
  );
};

export default Header;
