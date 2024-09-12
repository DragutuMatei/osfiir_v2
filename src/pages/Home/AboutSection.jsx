import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AboutSection({ top }) {
  return (
    <div className="about">
      <img
        src="https://dev.quantum-group.ro/ro/assets/images/business-line/division_hero_about.png"
        alt=""
      />
      <div className="cine">
        <h1 style={{ right: top / 3 - 50 + "px" }}>DESPRE</h1>
        <h2>Cine suntem</h2>
        <p>
          Cu [NN] proiecte realizate în cei peste 14 ani de activitate, suntem o
          companie capabilă să ofere soluții complete, coerent integrate (în
          domenii precum proiectele de construcție, prelucrarea serializată în
          metal și construcția de structuri sau clădiri metalice).
        </p>
        <Link to="/">Afla mai multe</Link>
      </div>
    </div>
  );
}

export default AboutSection;
