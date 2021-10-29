import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <a href="../resources/MariaResume.pdf" download>
        Resume
      </a>
      <figure>{/* <img src="../resources/icon.png" alt="icon" /> */}</figure>
      <NavLink to="/interests">Interests</NavLink>
    </div>
  );
};

export default Header;
