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
import Footer from "../../components/Footer";
import Footerbug from "../../components/FooterBughy";
import ScrollToTopButton from "../../components/Scrolltotop";
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
            enim ea in nulla aut nemo, saepe cupiditate sequi eos.
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
            enim ea in nulla aut nemo, saepe cupiditate sequi eos.
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
            enim ea in nulla aut nemo, saepe cupiditate sequi eos.
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
            enim ea in nulla aut nemo, saepe cupiditate sequi eos.
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
      <Footerbug />
      <ScrollToTopButton/>
    </>
  );
}

export default Home;
