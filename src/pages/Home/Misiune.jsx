import React from "react";

function Misiune({ top }) {
  return (
    <div className="misiune">
      <h1 style={{ left: top / 3 - 50 + "px" }}>MISIUNEA NOASTRĂ</h1>
      <div className="text">
        <h2>Misiunea noastră</h2>
        <p>
          Misiunea noastră principală este sprijinirea studenților în parcursul
          lor academic, asigurându-le totodată un mediu prielnic pentru
          dezvoltarea lor personală ca membrii în societate. Prin intermediul
          O.S.F.I.I.R. promovăm inițiativele studențești și facilităm accesul la
          resursele necesare pentru o educație completă. Avem ca scop pregătirea
          studenților pentru realitatea mediului profesional și oferirea unei
          experiențe studențești respectând recreerea, îmbinând-o cu diverse
          oportunități, colaborări și toată susținerea pe care noi, în calitate
          de asociație studențească, o putem oferi. Tindem spre a ne dezvolta
          odată cu studenții, iar un alt obiectiv important pentru noi este de a
          fi, pentru studenți, un loc în care se simt înțeleși și ascultați; un
          refugiu pentru studenți în care pot lua o pauză fără a opri demersul
          lor universitar.
        </p>
      </div>
    </div>
  );
}

export default Misiune;
