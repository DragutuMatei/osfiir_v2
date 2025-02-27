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
import { AXIOS } from "../../utils/AxiosConfig";
import useLazyLoad from "../../utils/useLazyLoad";

function Home() {
  const [top, setScrollTop] = useState(0);
  useLazyLoad();
  useEffect(() => {
    AOS.init();
    getData();
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
      image: require("../../assets/img/diacon.png"),
      nume: "Diaconu Andrei-Iulian",
      departament: "Președinte",
    },
    {
      image: require("../../assets/img/diacon.png"),
      nume: "Diaconu Andrei-Iulian",
      departament: "Președinte",
    },
    {
      image: require("../../assets/img/hanga.png"),
      nume: "Hanga Mihail",
      departament: "Secretar General",
    },
    {
      image: require("../../assets/img/gio.png"),

      nume: "Tudose Georgiana-Maria",
      departament: "Vicepreședinte de Externe",
    },
    {
      image: require("../../assets/img/raducu.png"),
      nume: "Aciobăniței Radu-Ioan",
      departament: "Vicepreședinte de Interne",
    },
    {
      image: require("../../assets/img/raul.png"),
      nume: "Matei Raul-Ovidiu",
      departament: "Fundraising",
    },
    {
      image: require("../../assets/img/matei.png"),
      nume: "Dragutu Matei",
      departament: "Marketing & PR",
    },
    {
      image: require("../../assets/img/lexi.png"),
      nume: "Ionescu Alexandra",
      departament: "Human resources",
    },
    {
      image: require("../../assets/img/tudorica.png"),
      nume: "Tudorică Alexandru",
      departament: "Logistică",
    },
    {
      image: require("../../assets/img/ana.png"),
      nume: "Burtoiu Ana-Maria",
      departament: "Vocațional",
    },
  ]);

  const [data, setData] = useState([]);
  const getData = async () => {
    await AXIOS.get("/getBlogPosts/4").then((res) => {
      console.log(res);
      if (res.data.ok) {
        setData(res.data.data);
      }
    });
  };

  return (
    <>

      <div className="landingpage lazy">
        <h1>Bine ați venit la OSFIIR !</h1>
        <p>La O.S.F.I.I.R. suntem toți pentru unul și unul pentru toți. Ne identificăm drept o familie,
           nu o simplă organizație studențească, iar orice demers în parcursul academic este mai mult decât susținut de noi. 
           Creștem împreună, ne simțim bine împreună, croim drumuri împreună și la finalul zilei, împărtășim victoriile și înfrângerile 
           împreună. Prin micile și marile noastre evenimente avem ca scop legarea unor noi relații între studenți, dezvoltarea abilităților 
           individuale ce nu sunt creionate prin curricula neapărat și garanția unor ani de studenție frumoși, fără regrete, trăiți la potențial
            maxim. Alătură-te echipei O.S.F.I.I.R. pentru a petrece cei minim 4 ani de studenție 
          prin dezvoltare continuă, oportunități greu de ignorat și cei mai de calitate oameni din universitate. Te așteptăm!
        </p>
        <Button text="Află departamentul tău" link="/departamentul_tau" />
      </div>
     {/* <Slider /> */}
      <AboutSection top={top} />
      {/*
      <div className="projects">
        {data &&
          data.map((d) => {
            return (
              <div
                className="project"
                style={{
                  backgroundImage: `url( ${d.cover})`,
                }}
              >
                <h2>{d.title}</h2>
                <p>{d.sections[0].texts[0]}</p>
                <Button text={"Proiect"} link={`/blog/${d.uid}`} />
              </div>
            );
          })}

        
        <div
          className="project"
          style={{
            backgroundImage: `url( https://instagram.fsbz1-1.fna.fbcdn.net/v/t51.29350-15/464585912_3307879742676086_6136615481509660491_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsbz1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Ygt6kp0yXTAQ7kNvgE5cswI&_nc_gid=eebde1c4cbcc46f981a76dc09a333e0d&edm=AONqaaQBAAAA&ccb=7-5&ig_cache_key=MzQ4ODI0Njk0NjYxMTg0MTkzOQ%3D%3D.3-ccb7-5&oh=00_AYDtWonbsJUGc2WfosklD8i6htGUN_Hodhsxuu4uV3geTA&oe=6724821D&_nc_sid=4e3341)`,
          }}
        >
          <h2>asdas</h2>
          <p>asdkln alsdjaslnd lasndasndlk</p>
          <Button text={"Proiect"} link={`/blog/ajsdnasdnl`} />
        </div>{" "}
        <div
          className="project"
          style={{
            backgroundImage: `url( https://instagram.fsbz1-1.fna.fbcdn.net/v/t51.29350-15/464585912_3307879742676086_6136615481509660491_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsbz1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Ygt6kp0yXTAQ7kNvgE5cswI&_nc_gid=eebde1c4cbcc46f981a76dc09a333e0d&edm=AONqaaQBAAAA&ccb=7-5&ig_cache_key=MzQ4ODI0Njk0NjYxMTg0MTkzOQ%3D%3D.3-ccb7-5&oh=00_AYDtWonbsJUGc2WfosklD8i6htGUN_Hodhsxuu4uV3geTA&oe=6724821D&_nc_sid=4e3341)`,
          }}
        >
          <h2>asdas</h2>
          <p>asdkln alsdjaslnd lasndasndlk</p>
          <Button text={"Proiect"} link={`/blog/ajsdnasdnl`} />
        </div>{" "}
        <div
          className="project"
          style={{
            backgroundImage: `url( https://instagram.fsbz1-1.fna.fbcdn.net/v/t51.29350-15/464585912_3307879742676086_6136615481509660491_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsbz1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Ygt6kp0yXTAQ7kNvgE5cswI&_nc_gid=eebde1c4cbcc46f981a76dc09a333e0d&edm=AONqaaQBAAAA&ccb=7-5&ig_cache_key=MzQ4ODI0Njk0NjYxMTg0MTkzOQ%3D%3D.3-ccb7-5&oh=00_AYDtWonbsJUGc2WfosklD8i6htGUN_Hodhsxuu4uV3geTA&oe=6724821D&_nc_sid=4e3341)`,
          }}
        >
          <h2>asdas</h2>
          <p>asdkln alsdjaslnd lasndasndlk</p>
          <Button text={"Proiect"} link={`/blog/ajsdnasdnl`} />
        </div>
      </div>
      */}
      <Misiune top={top} />
      <Cards />
      <Cancer top={top} />
      <div className="scrollcnt">
        <div className="loc_de_premii">
          <h1>Board</h1>
          <div className="coca"></div>
          <h2>
            {new Date().getFullYear()} - {new Date().getFullYear() + 1}
          </h2>
        </div>
        <ScrollContainer className="scc">
          <div className="poate">
            {board &&
              board.map((lider) => {
                return (
                  <div className="cardd" key={Math.random()}>
                    <img src={lider.image} alt="" />
                    <div className="linie">
                      <h1 className="an">{lider.departament}</h1>
                    </div>
                    <p className="text">{lider.nume}</p>
                  </div>
                );
              })}
          </div>
        </ScrollContainer>
      </div>
      <Cifre />
      <SimpleContact />

      <ScrollToTopButton />
    </>
  );
}

export default Home; 
