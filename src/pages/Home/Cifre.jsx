import CountUp from "react-countup";
import React from "react";

function Cifre() {
  return (
    <div className="cifre">
      <div className="side">
        <h2>OSFIIR in cifre :</h2>
      </div>
      <div className="numbers">
        <div className="row">
          <div className="cifra">
            <h3>
              +{" "}
              <CountUp
                end={45}
                enableScrollSpy
                scrollSpyDelay={600}
              />
            </h3>
            <h4>ANI DE EXPERIENȚĂ</h4>
          </div>
          <div className="cifra">
            <h3>
              +{" "}
              <CountUp
                end={62}
                enableScrollSpy
                scrollSpyDelay={600}
              />
            </h3>
            <h4>ANI DE EXPERIENȚĂ</h4>
          </div>
        </div>
        <div className="row">
          <div className="cifra">
            <h3>
              +{" "}
              <CountUp
                end={16}
                enableScrollSpy
                scrollSpyDelay={600}
              />
            </h3>
            <h4>ANI DE EXPERIENȚĂ</h4>
          </div>
          <div className="cifra">
            <h3>
              +{" "}
              <CountUp
                end={36}
                enableScrollSpy
                scrollSpyDelay={600}
              />
            </h3>
            <h4>ANI DE EXPERIENȚĂ</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cifre;
