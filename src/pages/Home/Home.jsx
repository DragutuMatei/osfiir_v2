import React, { useEffect, useRef, useState } from "react";
import "./home.scss";
import Slider from "./Slider";
import About from "./About";
import Misiune from "./Misiune";
import Cards from "./Cards";
import AOS from "aos";
import "aos/dist/aos.css";
import Cancer from "./Cancer";
import Cifre from "./Cifre";
import SimpleContact from "./SimpleContact";

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

  return (
    <>
      <section className="landing">
        <Slider />
        <About top={top} />
        <Misiune top={top} />
        <Cards />
        <Cancer top={top} />
        <br />
        <br />
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
      </section>
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
