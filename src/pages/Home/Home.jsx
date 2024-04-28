import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import React, { useEffect, useRef, useState } from "react";
import "./home.scss";
import Slider from "./Slider";
import AboutSection from "./AboutSection";
import Misiune from "./Misiune";
import Cards from "./Cards";
import AOS from "aos";
import "aos/dist/aos.css";
import Cancer from "./Cancer";
import Cifre from "./Cifre";
import SimpleContact from "./SimpleContact";
import Button from "../../utils/Button";

function Home() {
  const [top, setScrollTop] = useState(0);

  useEffect(() => {
    AOS.init();
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [board, setBoard] = useState([
    {
      image:
        "https://dev.quantum-group.ro/ro/assets/images/home/timeline/2011.png",
      nume: "Dragutu Matei",
      departament: "Marketing & PR",
    },
    {
      image:
        "https://dev.quantum-group.ro/ro/assets/images/home/timeline/2011.png",
      nume: "Dragutu Matei",
      departament: "Marketing & PR",
    },
    {
      image:
        "https://dev.quantum-group.ro/ro/assets/images/home/timeline/2011.png",
      nume: "Dragutu Matei",
      departament: "Marketing & PR",
    },
    {
      image:
        "https://dev.quantum-group.ro/ro/assets/images/home/timeline/2011.png",
      nume: "Dragutu Matei",
      departament: "Marketing & PR",
    },
    {
      image:
        "https://dev.quantum-group.ro/ro/assets/images/home/timeline/2011.png",
      nume: "Dragutu Matei",
      departament: "Marketing & PR",
    },
    {
      image:
        "https://dev.quantum-group.ro/ro/assets/images/home/timeline/2011.png",
      nume: "Dragutu Matei",
      departament: "Marketing & PR",
    },
    {
      image:
        "https://dev.quantum-group.ro/ro/assets/images/home/timeline/2011.png",
      nume: "Dragutu Matei",
      departament: "Marketing & PR",
    },
    {
      image:
        "https://dev.quantum-group.ro/ro/assets/images/home/timeline/2011.png",
      nume: "Dragutu Matei",
      departament: "Marketing & PR",
    },
  ]);

  return (
    <>
      <Slider />
      <AboutSection top={top} />
      <div className="projects">
        <div
          className="project"
          style={{
            backgroundImage:
              "url(https://dev.quantum-group.ro/fi/assets/images/business-line/division_steel.jpg)",
          }}
        >
          <h2>Titlu de proiect</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            enim ea in nulla aut nemo, saepe cupiditate sequi eos. Repellendus
            necessitatibus recusandae earum cupiditate sint qui, adipisci
            asperiores voluptate fugiat!
          </p>
          <Button text={"Proiect"} />
        </div>
        <div
          className="project"
          style={{
            backgroundImage:
              "url(https://dev.quantum-group.ro/fi/assets/images/business-line/division_projects.jpg)",
          }}
        >
          <h2>Titlu de proiect</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            enim ea in nulla aut nemo, saepe cupiditate sequi eos. Repellendus
            necessitatibus recusandae earum cupiditate sint qui, adipisci
            asperiores voluptate fugiat!
          </p>
          <Button text={"Proiect"} />
        </div>
        <div
          className="project"
          style={{
            backgroundImage:
              "url(https://dev.quantum-group.ro/fi/assets/images/business-line/division_steel.jpg)",
          }}
        >
          <h2>Titlu de proiect</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            enim ea in nulla aut nemo, saepe cupiditate sequi eos. Repellendus
            necessitatibus recusandae earum cupiditate sint qui, adipisci
            asperiores voluptate fugiat!
          </p>
          <Button text={"Proiect"} />
        </div>
        <div
          className="project"
          style={{
            backgroundImage:
              "url(https://dev.quantum-group.ro/fi/assets/images/business-line/division_projects.jpg)",
          }}
        >
          <h2>Titlu de proiect</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            enim ea in nulla aut nemo, saepe cupiditate sequi eos. Repellendus
            necessitatibus recusandae earum cupiditate sint qui, adipisci
            asperiores voluptate fugiat!
          </p>
          <Button text={"Proiect"} />
        </div>
      </div>
      <Misiune top={top} />
      <Cards />
      <Cancer top={top} />
      <div className="scrollcnt">
        <div className="loc_de_premii">
          <h1>Board</h1>
          <div className="coca"></div>
          <h2>Since 2017</h2>
        </div>

        <ScrollContainer className="scc">
          <div className="poate">
            <div className="space"></div>
            {board &&
              board.map((lider) => {
                return (
                  <div className="cardd" key={Math.random()}>
                    <img src={lider.image} alt="" />
                    <div className="linie">
                      <h1 className="an">{lider.nume}</h1>
                    </div>
                    <p className="text">{lider.departament}</p>
                  </div>
                );
              })}
          </div>
        </ScrollContainer>
      </div>
      <Cifre />
      <SimpleContact />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Home;

// fastlane
// data 10 martie

// tokenomics: o sa mi dea sebi
// pag 4: pastrez grafice
// pag5 -> : las la fel
// pag 7 8 9 scot
/**

Servus. Astia suntem MCs de la regio la Iasi. voiam sa stiu cine e alumni si cine e inca in echipa ca sa stiu cum ne organiam
lore
(Pre sale,30),(Stategic,3.5),(KoL,2),(Public round,5),(Team,10),(Adv,2),(Marketing,12),(Liq,15.5),(Ecosistem,20)
,3.5,2,5,10,2,12,15.5,20 
 * 
 */
