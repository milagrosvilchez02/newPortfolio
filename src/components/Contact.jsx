import React from "react";
import contactData from "../contactData.json";
import "../assets/styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <p>Contact me!</p>
      <div className="links">
        {contactData.map((i) => (
          <a href={i.href} key={i.key}>
            <img className="contact-item" src={i.img} alt={i.key} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
