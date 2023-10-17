import React from "react";

const Button = ({ title, onClicked }) => (
  <div className="btn" onClick={() => onClicked(title)}>
    {title.toUpperCase()}
  </div>
);

export default Button;
