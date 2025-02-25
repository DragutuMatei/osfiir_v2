import React, { useState } from "react";
import useWindowSize from "../../utils/useWindowSize";
import { IoIosArrowDown } from "react-icons/io";
import { IoSchoolOutline } from "react-icons/io5";

function Cancer({ top }) {
  const { width } = useWindowSize();

  const txts = [
    `Organizația este structurată în cinci departamente, fiecare având un rol specific în inovarea, dezvoltarea și implementarea inițiativelor studențești.

    Structurarea asociației este esențială pentru a organiza sarcinile variate și complexe, sprijinind astfel spiritul de echipă în atingerea unui scop comun. Această structură permite îndeplinirea simultană a diferitelor sarcini și, la finalul fiecărui eveniment, oferă fiecărui participant satisfacția de a-și vedea munca încheiată cu succes și la un standard înalt de calitate.
    
    Fiecare departament are un rol bine definit și responsabilități specifice; OSFIIR este structura centrală care le coordonează și oferă o direcție clară pentru realizarea tuturor sarcinilor.`,

    `Supranumit și „imaginea asociației”, departamentul PR are în principal rolul de a asigura vizibilitate de calitate în mediul online, dar și fizic, fiind responsabil cu afișe, postări și tot ceea ce conține elemente grafice și are ca scop promovarea OSFIIR și a inițiativelor sale.
Studenții afiliați acestui departament beneficiază de o dezvoltare extracurriculară în ceea ce privește designul grafic și utilizarea resurselor online pentru realizarea de imagini cu scop prestabilit, oferind o direcție clară și nemărginită creativității.`,
    `Se poate vorbi în continuu despre evenimentele OSFIIR și cum sunt acestea puse cap la cap, dar fără resurse, cum poate trece o idee la stadiul de realitate? Răspunsul se află în cadrul departamentului FR, care are ca scop principal atragerea fondurilor, partenerilor și colaboratorilor, pentru ca asociația să își poată extinde orizonturile ce țin de posibilitățile realizării unui eveniment.
Studenții care alcătuiesc acest departament au ocazia să își dezvolte abilități de comunicare formală, negociere și planificare, întrucât partea financiară este strict orientată către evenimente, căci OSFIIR este o organizație non-profit.`,
    `Ceea ce face posibilă existența asociației este resursa umană. Departamentul de HR asigură necesarul de oameni pentru fiecare sarcină în parte, fiind prezent în cadrul fiecărui departament, și are ca scop mobilizarea, monitorizarea și îndrumarea persoanelor din OSFIIR, pentru ca acestea să poată duce la bun sfârșit sarcinile date. Distribuind în mod echitabil volumul de muncă, departamentul face astfel ca drumul activităților să fie la fel de lung pentru toți participanții.
Printre altele, HR-ul are ca scop și monitorizarea sănătății relațiilor interumane din organizație, iar prin diverse workshopuri și alte activități reușește să mențină OSFIIR ca un mediu de lucru prielnic și prietenos.`,
    `Considerat sufletul și imaginația asociației, acest departament provine din unificarea a două departamente, „Sportiv” și „Cultural”, creând astfel un departament care rupe OSFIIR de mediul academic și pune în prim-plan inovarea și dezvoltarea unor evenimente cu adevărat extracurriculare.

Scopul acestui departament este de a plasa o serie de evenimente la polul opus domeniilor studiate de către studenții din asociație, pentru a oferi participanților un suflu relaxant, educativ și, cel mai important, o adevărată reîmprospătare.`,
    `Logistica este cea mai funcțională parte a OSFIIR. Acest departament asigură necesarul fizic la evenimente, având în prim-plan pregătirea acestora până la cel mai mic detaliu, cu respect față de resursele existente, și reprezintă tranziția de la idee la realitate.

Acest departament nu se rezumă doar la muncă fizică, ci le arată celor implicați cum o sarcină corect planificată și distribuită între persoane devine exponențial mai ușoară prin organizarea între mai mulți oameni.

Situații neprevăzute? Echipament lipsă? Lacune organizatorice? Aceste probleme nu apar atunci când departamentul Logistică este implicat.`,
  ];
  const txts_top = [
    `Cum funcționează OSFIIR?`,
    `Departamentul ”Public Relations” `,
    `Departamentul „Fundraising”`,
    `Departamentul „Human Resources”`,
    `Departamentul „Vocațional”`,
    `Departamentul „Logistică”`,
  ];
  const [txt, setTxt] = useState(txts[0]);
  const [txttop, setTxttop] = useState(txts_top[0]);

  const choose = (index) => {
    setTxt(txts[index]);
    setTxttop(txts_top[index]);
  };
  const drop = (asta) => {
    const down = document.querySelectorAll(".down")[asta];
    down.classList.toggle("see");
  };

  const out = () => {
    if (true) {
    }
  };
  return (
    <>
      <div className="cancer" onClick={() => out()}>
        <h1 style={{ right: top / 3 - width / 1.7 + "px" }}>Departamente</h1>
        {width > 780 ? (
          <>
            <div className="stanga">
              <div className="click" id="but1" onClick={() => choose(1)}>
                <IoSchoolOutline />
                <h2>PR</h2>
              </div>
              <div className="click" id="but2" onClick={() => choose(2)}>
                <IoSchoolOutline />
                <h2>FR</h2>
              </div>
              <div className="click" id="but3" onClick={() => choose(3)}>
                <IoSchoolOutline />
                <h2>HR</h2>
              </div>
              <div className="click" id="but4" onClick={() => choose(4)}>
                <IoSchoolOutline />
                <h2 style={{ fontSize: "19px" }}>VOCAȚIONAL</h2>
              </div>
              <div className="click" id="but5" onClick={() => choose(5)}>
                <IoSchoolOutline />
                <h2>LOGISTICĂ</h2>
              </div>
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
              <div className="line line4"></div>
              <div className="line line5"></div>
              <div className="line line6"></div>
            </div>
            <div className="dreapta">
              <h2>{txttop} </h2>
              <p>{txt}</p>
            </div>
          </>
        ) : (
          <>
            <div className="drop">
              <div className="up" onClick={() => drop(0)}>
                <div>
                  <IoSchoolOutline className="first" />
                  <h2>PR</h2>
                </div>
                <IoIosArrowDown className="second" />
              </div>
              <div className="down">
                <p>
                  Supranumit și „imaginea asociației”, departamentul PR are în
                  principal rolul de a asigura vizibilitate de calitate în
                  mediul online, dar și fizic, fiind responsabil cu afișe,
                  postări și tot ceea ce conține elemente grafice și are ca scop
                  promovarea OSFIIR și a inițiativelor sale. Studenții afiliați
                  acestui departament beneficiază de o dezvoltare
                  extracurriculară în ceea ce privește designul grafic și
                  utilizarea resurselor online pentru realizarea de imagini cu
                  scop prestabilit, oferind o direcție clară și nemărginită
                  creativității.
                </p>
              </div>
            </div>{" "}
            <div className="drop">
              <div className="up" onClick={() => drop(1)}>
                <div>
                  <IoSchoolOutline className="first" />
                  <h2>FR</h2>
                </div>
                <IoIosArrowDown className="second" />
              </div>
              <div className="down">
                <p>
                  Se poate vorbi în continuu despre evenimentele OSFIIR și cum
                  sunt acestea puse cap la cap, dar fără resurse, cum poate
                  trece o idee la stadiul de realitate? Răspunsul se află în
                  cadrul departamentului FR, care are ca scop principal
                  atragerea fondurilor, partenerilor și colaboratorilor, pentru
                  ca asociația să își poată extinde orizonturile ce țin de
                  posibilitățile realizării unui eveniment. Studenții care
                  alcătuiesc acest departament au ocazia să își dezvolte
                  abilități de comunicare formală, negociere și planificare,
                  întrucât partea financiară este strict orientată către
                  evenimente, căci OSFIIR este o organizație non-profit.{" "}
                </p>
              </div>
            </div>
            <div className="drop">
              <div className="up" onClick={() => drop(2)}>
                <div>
                  <IoSchoolOutline className="first" />
                  <h2>HR</h2>
                </div>
                <IoIosArrowDown className="second" />
              </div>
              <div className="down">
                <p>
                  Ceea ce face posibilă existența asociației este resursa umană.
                  Departamentul de HR asigură necesarul de oameni pentru fiecare
                  sarcină în parte, fiind prezent în cadrul fiecărui
                  departament, și are ca scop mobilizarea, monitorizarea și
                  îndrumarea persoanelor din OSFIIR, pentru ca acestea să poată
                  duce la bun sfârșit sarcinile date. Distribuind în mod
                  echitabil volumul de muncă, departamentul face astfel ca
                  drumul activităților să fie la fel de lung pentru toți
                  participanții. Printre altele, HR-ul are ca scop și
                  monitorizarea sănătății relațiilor interumane din organizație,
                  iar prin diverse workshopuri și alte activități reușește să
                  mențină OSFIIR ca un mediu de lucru prielnic și prietenos.
                </p>
              </div>
            </div>
            <div className="drop">
              <div className="up" onClick={() => drop(3)}>
                <div>
                  <IoSchoolOutline className="first" />
                  <h2>VOCAȚIONAL</h2>
                </div>
                <IoIosArrowDown className="second" />
              </div>
              <div className="down">
                <p>
                  Considerat sufletul și imaginația asociației, acest
                  departament provine din unificarea a două departamente,
                  „Sportiv” și „Cultural”, creând astfel un departament care
                  rupe OSFIIR de mediul academic și pune în prim-plan inovarea
                  și dezvoltarea unor evenimente cu adevărat extracurriculare.
                  Scopul acestui departament este de a plasa o serie de
                  evenimente la polul opus domeniilor studiate de către
                  studenții din asociație, pentru a oferi participanților un
                  suflu relaxant, educativ și, cel mai important, o adevărată
                  reîmprospătare.
                </p>
              </div>
            </div>
            <div className="drop">
              <div className="up" onClick={() => drop(4)}>
                <div>
                  <IoSchoolOutline className="first" />
                  <h2>LOGISTICĂ</h2>
                </div>
                <IoIosArrowDown className="second" />
              </div>
              <div className="down">
                <p>
                  Logistica este cea mai funcțională parte a OSFIIR. Acest
                  departament asigură necesarul fizic la evenimente, având în
                  prim-plan pregătirea acestora până la cel mai mic detaliu, cu
                  respect față de resursele existente, și reprezintă tranziția
                  de la idee la realitate. Acest departament nu se rezumă doar
                  la muncă fizică, ci le arată celor implicați cum o sarcină
                  corect planificată și distribuită între persoane devine
                  exponențial mai ușoară prin organizarea între mai mulți
                  oameni. Situații neprevăzute? Echipament lipsă? Lacune
                  organizatorice? Aceste probleme nu apar atunci când
                  departamentul Logistică este implicat.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cancer;
