import React from "react";
import "./cadathon.scss";

function Cadathon({ top }) {
  return (
    <div className="cadathon lazy">
      <div className="decorations">
        <span></span>
        <span></span>
      </div>
      <h1 style={{ left: top / 3 - 50 + "px" }}>CAD &amp; CRAFT</h1>
      <div className="text">
        <h2>CAD &amp; CRAFT</h2>
        <p>
          CAD &amp; CRAFT este concursul care îți provoacă imaginația și abilitățile de proiectare!
          Intră în competiție, dezvoltă idei inovatoare și câștigă premii pe măsură.
          Fie că ești pasionat de inginerie sau design, acesta este momentul tău să strălucești.
        </p>
        <a href="https://cadathon.osfiir.ro/" target="_blank" rel="noopener noreferrer" className="cadathon-button">
          Înscrie-te acum!
        </a>
      </div>
    </div>
  );
}

export default Cadathon;
