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
          Noi suntem Organizația Studenților din Facultatea de Inginerie
          Industrială și Robotică (O.S.F.I.I.R.) și suntem o asociație
          apolitică, non-profit și non-guvernamentală, care reprezintă
          interesele studenților din cadrul facultății. Activitatea noastră are
          ca scop principal crearea unui mediu academic și social de susținere,
          oferind oferind oportunități de dezvoltare profesională prin
          conectarea cu mediul industrial, dar și de dezvoltare personală prin
          proiectele culturale desfășurate. Ne propunem să fim, în continuare,
          un liant între studenți, profesori și industrie, pentru a putea fi,
          cum de la bun început suntem, un sprijin în parcursul educațional și
          profesional al celor care vizează un viitor prin facultatea aceasta.
        </p>
        <Link to="/about">Afla mai multe</Link>
      </div>
    </div>
  );
}

export default AboutSection;
