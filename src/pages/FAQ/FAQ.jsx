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
        <h1>Când se afișează orarul?</h1>
        <p>De obicei, cu 2-3 zile înainte de a începe anul/semestrul.</p>
      </div>

      <div id={"intrb_2"} className="intrb">
        <h1>
        Când se pun căminele?
        </h1>
        <p>
        Repartizarea o primiți cu 2-3 zile înainte să vă cazați, bobocii sunt prioritari, așa că nu vă faceți griji că prindeți loc toți.
        </p>
      </div>

      <div id={"intrb_3"} className="intrb">
        <h1>
        Cum citim orarul?
        </h1>
        <p>
        Există o poză cum se citește orarul într-un mod explicativ.
        </p>
      </div>

      <div id={"intrb_4"} className="intrb">
        <h1>
        Cum îmi dau seama unde am laborator/seminar/curs?
        </h1>
        <p>
        Locația fiecărui laborator, seminar sau curs este specificată pe orar, folosind coduri sau denumiri pentru săli și clădiri.
         Cu ajutorul hărții campusului, poți identifica rapid și ușor locația exactă a fiecărei activități.
        </p>
      </div>

      <div id={"intrb_5"} className="intrb">
        <h1>
        Care sunt procentele pe materii?
        </h1>
        <p>
        60-40 pentru materii cu examene și 80-20 pentru materii cu colocviu. În cazul în care un 
        profesor dorește să modifice aceste procente, 
        este necesar să ne anunțe, deoarece astfel de schimbări nu respectă regulamentul intern.
        </p>
      </div>

      <div id={"intrb_6"} className="intrb">
        <h1>
        Când primim legitimațiile?
        </h1>
        <p>
        Între 2 săptămâni și o lună de când începeți, deoarece ele se scriu manual și durează.
        </p>
      </div>

      <div id={"intrb_7"} className="intrb">
        <h1>
        Care e faza cu transportul în comun?
        </h1>
        <p>
        Aveți 90% reducere la metrou, iar la STB e mai complicat.
        </p>
      </div>

      <div id={"intrb_8"} className="intrb">
        <h1>
        La ce avem prezențe obligatorii?
        </h1>
        <p>
        La laboratoare prezența este obligatorie, cu 2 absențe recuperabile; la seminare depinde de profesor, la curs nu este obligatoriu.
        </p>
      </div>

    
      <SimpleContact />
      {/* <Footerbug /> */}

      <ScrollToTopButton />
    </div>
  );
}

export default FAQ;
