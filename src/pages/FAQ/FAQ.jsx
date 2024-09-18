import React, { useEffect } from "react";
import "./faq.scss";
import SimpleContact from "../Home/SimpleContact";
import Aos from "aos";
import Footerbug from "../../components/FooterBughy";
import ScrollToTopButton from "../../components/Scrolltotop";
function FAQ() {
  useEffect(() => {
    Aos.init();
    console.log(Math.floor(Math.random() * (500 - 1 + 1) + 1));
  }, []);
  return (
    <div className="faq">
      <div className="banner">
        <h1>FAQ</h1>
      </div>

      <div id={"intrb_1"} className="intrb aia">
        <h1>Cate intrb au fost generate cu chatgbt?</h1>
        <p>toate</p>
      </div>

      <div id={"intrb_2"} className="intrb">
        <h1>
          Cum pot obține un loc la Facultatea de Inginerie Industrială și
          Robotică?
        </h1>
        <p>
          Pentru a obține un loc la această facultate, trebuie să parcurgi
          procesul de admitere, care poate include examene de admitere și
          evaluarea dosarului de candidatură.
        </p>
      </div>

      <div id={"intrb_3"} className="intrb">
        <h1>
          Cât de bine este echipată Facultatea de Inginerie Industrială și
          Robotică?
        </h1>
        <p>
          Facultatea dispune de laboratoare moderne, echipamente de ultimă
          generație și infrastructură adecvată pentru studiul și cercetarea în
          domeniul ingineriei industriale și robotice.
        </p>
      </div>

      <div id={"intrb_4"} className="intrb">
        <h1>
          Care sunt perspectivele de carieră pentru absolvenții de la Facultatea
          de Inginerie Industrială și Robotică?
        </h1>
        <p>
          Absolvenții acestei facultăți pot urma diverse căi profesionale în
          domenii precum inginerie robotică, management industrial,
          automatizări, consultanță în afaceri sau cercetare științifică.
        </p>
      </div>

      <div id={"intrb_5"} className="intrb">
        <h1>
          Care sunt principalele domenii de studiu acoperite în cadrul
          Facultății de Inginerie Industrială și Robotică?
        </h1>
        <p>
          Facultatea de Inginerie Industrială și Robotică acoperă domenii precum
          inginerie mecanică, electronică, automatizări, control și management
          industrial.
        </p>
      </div>

      <div id={"intrb_6"} className="intrb">
        <h1>
          Cum pot obține un loc la Facultatea de Inginerie Industrială și
          Robotică?
        </h1>
        <p>
          Pentru a obține un loc la această facultate, trebuie să parcurgi
          procesul de admitere, care poate include examene de admitere și
          evaluarea dosarului de candidatură.
        </p>
      </div>

      <div id={"intrb_7"} className="intrb">
        <h1>
          Cât de bine este echipată Facultatea de Inginerie Industrială și
          Robotică?
        </h1>
        <p>
          Facultatea dispune de laboratoare moderne, echipamente de ultimă
          generație și infrastructură adecvată pentru studiul și cercetarea în
          domeniul ingineriei industriale și robotice.
        </p>
      </div>

      <div id={"intrb_8"} className="intrb">
        <h1>
          Care sunt perspectivele de carieră pentru absolvenții de la Facultatea
          de Inginerie Industrială și Robotică?
        </h1>
        <p>
          Absolvenții acestei facultăți pot urma diverse căi profesionale în
          domenii precum inginerie robotică, management industrial,
          automatizări, consultanță în afaceri sau cercetare științifică.
        </p>
      </div>

      <div id={"intrb_9"} className="intrb">
        <h1>
          Există programe de schimb internațional pentru studenții de la
          Facultatea de Inginerie Industrială și Robotică?
        </h1>
        <p>
          Da, facultatea oferă programe de schimb internațional care le permit
          studenților să studieze în străinătate și să experimenteze alte
          culturi și sisteme de învățământ.
        </p>
      </div>
      <SimpleContact />
      {/* <Footerbug /> */}

      <ScrollToTopButton />
    </div>
  );
}

export default FAQ;
