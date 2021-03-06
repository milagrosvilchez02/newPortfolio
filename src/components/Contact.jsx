import React from "react";

const Contact = ({ content }) => {
  return (
    <div className="contact">
      <p>Contact me!</p>
      <div className="links">
        {content.map((i) => (
          <a target="_blank" href={i.href} key={i.key}>
            <img src={i.img} alt={i.key} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
