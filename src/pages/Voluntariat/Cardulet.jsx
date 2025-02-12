import React from "react";
import "./Cardulet.scss";

function Cardulet({ imageSrc, text }) {
  return (
    <div className="cardulet">
      <img src={imageSrc} alt="Card Image" className="card-image" />
      <div className="card-text">{text}</div>
    </div>
  );
}

export default Cardulet;
