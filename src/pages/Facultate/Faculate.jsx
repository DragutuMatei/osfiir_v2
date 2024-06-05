import React, { useEffect, useState } from "react";
import { BsRobot } from "react-icons/bs";
import Button from "../../utils/Button";
import ScrollContainer from "react-indiana-drag-scroll";
import "./facultate.scss";
import { Link } from "react-router-dom";
import SimpleContact from "../Home/SimpleContact";
import Aos from "aos";
import "aos/dist/aos.css";
import Footerbug from "../../components/FooterBughy";
import ScrollToTopButton from "../../components/Scrolltotop";

function Faculate() {
  const [top, setScrollTop] = useState(0);

  useEffect(() => {
    Aos.init();
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
      nume: "DragutASDASDASDu Matei",
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
      <div className="banner">
        <h1>Despre Facultatea de Inginerie Industriala si Robotica</h1>
      </div>
      <div className="desc">
        <h1>Facultatea de Inginerie Industriala si Robotica</h1>
        <div className="ps">
          {" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            dolor delectus suscipit repellat natus! Magnam repellendus
            accusamus, illum perferendis debitis dolorem, consequatur eos
            molestias quisquam id illo sequi ab accusantium. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Similique perspiciatis iusto
            aut maiores quisquam ducimus ab laboriosam doloribus illum odio,
            beatae quae consequuntur libero tempore eaque corporis praesentium
            neque ipsam?
          </p>
        </div>
      </div>
      <div className="anunturi">
        <div className="img"></div>
        <h2>anunturi</h2>
        <div className="al">
          <div className="anunt">
            <h2>Titlu de anunt</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo repellat nesciunt quia laboriosam enim eaque inventore
              sed, eveniet totam ratione!
            </p>{" "}
            <Link to="/">Afla mai multe</Link>
          </div>
          <div className="anunt">
            <h2>Titlu de anunt</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo repellat nesciunt quia laboriosam enim eaque inventore
              sed, eveniet totam ratione!
            </p>{" "}
            <Link to="/">Afla mai multe</Link>
          </div>
          <div className="anunt">
            <h2>Titlu de anunt</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo repellat nesciunt quia laboriosam enim eaque inventore
              sed, eveniet totam ratione!
            </p>{" "}
            <Link to="/">Afla mai multe</Link>
          </div>
          <div className="anunt">
            <h2>Titlu de anunt</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo repellat nesciunt quia laboriosam enim eaque inventore
              sed, eveniet totam ratione!
            </p>{" "}
            <Link to="/">Afla mai multe</Link>
          </div>
        </div>
      </div>
      <div className="camine">
        <div className="bac"></div>
        <h1>Caminele Facultatii de Inginerie Industriala si Robotica</h1>
        <p>
          Alături de compania noastră veți intra într-o echipă dinamică și
          puternică, cu o gândire modernă și folosind cele mai actuale
          instrumente de management, având oportunitatea de a lucra împreună la
          proiecte mari și foarte mari din domeniul producției și a
          construcțiilor industriale.
        </p>
        <div className="camins">
          <div className="camin">
            <h1>P4</h1>
            <h2>Caminul P4 </h2>
            <p>
              Ofera plosnite si gandaci in prostie. Mucegaiul nu este uitat si
              primesti o admina cu retard mental sever.
            </p>
            <h2>Contact: </h2>
            <div className="con">
              <a href="mailto: mateidr7@gmail.com">email</a>
              <a href="tel: 0786782763">0786782763</a>
            </div>
          </div>
          <div className="camin">
            <h1>P25</h1>
            <h2>Caminul P25 </h2>
            <p>
              Ofera plosnite si gandaci in prostie. Mucegaiul nu este uitat si
              primesti o admina cu retard mental sever.
            </p>
            <h2>Contact: </h2>
            <div className="con">
              <a href="mailto: mateidr7@gmail.com">email</a>
              <a href="tel: 0786782763">0786782763</a>
            </div>
          </div>
        </div>
      </div>
      <div className="scrollcnt">
        <div className="loc_de_premii">
          <h1>Studenti Consilieri si Senatori</h1>
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
      <div className="about">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.6227426840974!2d26.046770775937777!3d44.4409002710756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201c047f8d021%3A0x41c874ce747cee15!2sFaculty%20of%20Industrial%20Engineering%20and%20Robotics!5e0!3m2!1sen!2sro!4v1714445192641!5m2!1sen!2sro"
          className="map"
          allowFullScreen=""
          id="map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <ScrollToTopButton />
      <SimpleContact />
      <Footerbug />
    </>
  );
}

export default Faculate;
