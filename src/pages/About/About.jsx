import React, { useEffect, useRef, useState } from "react";
import AboutSection from "../Home/AboutSection";
import "./about.scss";
import Button from "../../utils/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mousewheel, EffectFade, Pagination } from "swiper/modules";
import SimpleContact from "../Home/SimpleContact";
import { Link } from "react-router-dom";
import Footerbug from "../../components/FooterBughy";
import ScrollToTopButton from "../../components/Scrolltotop";
import { AXIOS } from "../../utils/AxiosConfig";

function About() {
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  useEffect(() => {
    AOS.init();
    const handleResize = () => setWindowWidth(window.innerWidth);
    getData();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [top, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [data, setData] = useState([]);
  const getData = async () => {
    await AXIOS.get("/getAnunturi/4").then((res) => {
      console.log(res);
      if (res.data.ok) {
        setData(res.data.data);
      }
    });
  };

  return (
    <>
      <section className="landing">
        <div className="banner">
          <h1>Despre noi</h1>
        </div>
        <AboutSection top={top} />
        <div className="anunturi">
          <div className="img"></div>
          <h2>anunturi</h2>
          <div className="al">
            {data &&
              data.map((d) => {
                return (
                  <div className="anunt">
                    <h2>{d.title}</h2>
                    <p>{d.sections[0].texts[0]}</p>
                    <Link to={`blog/${d.uid}`}>Afla mai multe</Link>
                  </div>
                );
              })}
            <div className="anunt">
              <h2>Titlu de anunt</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo repellat nesciunt quia laboriosam enim eaque inventore
                sed, eveniet totam ratione!
              </p>
              <Link to="/anunt/cel-mai-blana-anunt">Afla mai multe</Link>
            </div>
            <div className="anunt">
              <h2>Titlu de anunt</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo repellat nesciunt quia laboriosam enim eaque inventore
                sed, eveniet totam ratione!
              </p>
              <Link to="/anunt/cel-mai-blana-anunt">Afla mai multe</Link>
            </div>
            <div className="anunt">
              <h2>Titlu de anunt</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo repellat nesciunt quia laboriosam enim eaque inventore
                sed, eveniet totam ratione!
              </p>
              <Link to="/anunt/cel-mai-blana-anunt">Afla mai multe</Link>
            </div>
          </div>
        </div>
        <div className="altcancer">
          <Swiper
            ref={swiperRef}
            direction={"vertical"}
            slidesPerView={1}
            onSlideChange={(swiperCore) => {
              const { activeIndex, snapIndex, previousIndex, realIndex } =
                swiperCore;
              setIndex(activeIndex);
              console.log({
                activeIndex,
                snapIndex,
                previousIndex,
                realIndex,
              });
            }}
            effect={"fade"}
            speed={1500}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
              releaseOnEdges: true,
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return '<span class="' + className + '"></span>';
              },
            }}
            modules={[Pagination, Mousewheel, EffectFade]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="sl">
                <div className="departamente">
                  <h1>Departamente</h1>
                  <div className="alld">
                    <h2 onClick={() => goToSlide(0)}>Public relations (PR)</h2>
                    <h2 onClick={() => goToSlide(1)}>human resources (HR)</h2>

                    <h2 onClick={() => goToSlide(2)}>Vocational</h2>

                    <h2 onClick={() => goToSlide(3)}>Logistic</h2>

                    <h2 onClick={() => goToSlide(4)}>
                      Financial Reporting (FR)
                    </h2>
                  </div>
                </div>
                <div className="texts">
                  <div className="tess">
                    <p>
                      Supranumit și „imaginea asociației”, departamentul PR are
                      în principal rolul de a asigura vizibilitate de calitate
                      în mediul online, dar și fizic, fiind responsabil cu
                      afișe, postări și tot ceea ce conține elemente grafice și
                      are ca scop promovarea OSFIIR și a inițiativelor sale.
                    </p>
                    <div></div>
                    <div></div>
                    <p>
                      Studenții afiliați acestui departament beneficiază de o
                      dezvoltare extracurriculară în ceea ce privește designul
                      grafic și utilizarea resurselor online pentru realizarea
                      de imagini cu scop prestabilit, oferind o direcție clară
                      și nemărginită creativității.
                    </p>
                  </div>
                </div>
              </div>
              <div className="imgs">
                <img src="https://picsum.photos/id/1/200/300" alt="" />
                <img src="https://picsum.photos/id/1/200/300" alt="" />
                <img src="https://picsum.photos/id/1/200/300" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sl">
                <div className="departamente">
                  <h1>Departamente</h1>
                  <div className="alld">
                    <h2 onClick={() => goToSlide(0)}>Public relations (PR)</h2>
                    <h2 onClick={() => goToSlide(1)}>human resources (HR)</h2>

                    <h2 onClick={() => goToSlide(2)}>Vocational</h2>

                    <h2 onClick={() => goToSlide(3)}>Logistic</h2>

                    <h2 onClick={() => goToSlide(4)}>
                      Financial Reporting (FR)
                    </h2>
                  </div>
                </div>
                <div className="texts">
                  <div className="tess">
                    <p>
                      Ceea ce face posibilă existența asociației este resursa
                      umană. Departamentul de HR asigură necesarul de oameni
                      pentru fiecare sarcină în parte, fiind prezent în cadrul
                      fiecărui departament, și are ca scop mobilizarea,
                      monitorizarea și îndrumarea persoanelor din OSFIIR, pentru
                      ca acestea să poată duce la bun sfârșit sarcinile date.
                    </p>
                    <div></div>
                    <div></div>
                    <p>
                      Distribuind în mod echitabil volumul de muncă,
                      departamentul face astfel ca drumul activităților să fie
                      la fel de lung pentru toți participanții. Printre altele,
                      HR-ul are ca scop și monitorizarea sănătății relațiilor
                      interumane din organizație, iar prin diverse workshopuri
                      și alte activități reușește să mențină OSFIIR ca un mediu
                      de lucru prielnic și prietenos
                    </p>
                  </div>
                </div>
              </div>
              <div className="imgs">
                <img src="https://picsum.photos/id/2/200/300" alt="" />
                <img src="https://picsum.photos/id/2/200/300" alt="" />
                <img src="https://picsum.photos/id/2/200/300" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sl">
                <div className="departamente">
                  <h1>Departamente</h1>
                  <div className="alld">
                    <h2 onClick={() => goToSlide(0)}>Public relations (PR)</h2>
                    <h2 onClick={() => goToSlide(1)}>human resources (HR)</h2>

                    <h2 onClick={() => goToSlide(2)}>Vocational</h2>

                    <h2 onClick={() => goToSlide(3)}>Logistic</h2>

                    <h2 onClick={() => goToSlide(4)}>
                      Financial Reporting (FR)
                    </h2>
                  </div>
                </div>
                <div className="texts">
                  <div className="tess">
                    <p>
                      {" "}
                      Considerat sufletul și imaginația asociației, acest
                      departament provine din unificarea a două departamente,
                      „Sportiv” și „Cultural”, creând astfel un departament care
                      rupe OSFIIR de mediul academic și pune în prim-plan
                      inovarea și dezvoltarea unor evenimente cu adevărat
                      extracurriculare.
                    </p>
                    <div></div>
                    <div></div>
                    <p>
                      Scopul acestui departament este de a plasa o serie de
                      evenimente la polul opus domeniilor studiate de către
                      studenții din asociație, pentru a oferi participanților un
                      suflu relaxant, educativ și, cel mai important, o
                      adevărată reîmprospătare.
                    </p>
                  </div>
                </div>
              </div>
              <div className="imgs">
                <img src="https://picsum.photos/id/3/200/300" alt="" />
                <img src="https://picsum.photos/id/3/200/300" alt="" />
                <img src="https://picsum.photos/id/3/200/300" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sl">
                <div className="departamente">
                  <h1>Departamente</h1>
                  <div className="alld">
                    <h2 onClick={() => goToSlide(0)}>Public relations (PR)</h2>
                    <h2 onClick={() => goToSlide(1)}>human resources (HR)</h2>

                    <h2 onClick={() => goToSlide(2)}>Vocational</h2>

                    <h2 onClick={() => goToSlide(3)}>Logistic</h2>

                    <h2 onClick={() => goToSlide(4)}>
                      Financial Reporting (FR)
                    </h2>
                  </div>
                </div>
                <div className="texts">
                  <div className="tess">
                    <p>
                      Logistica este cea mai funcțională parte a OSFIIR. Acest
                      departament asigură necesarul fizic la evenimente, având
                      în prim-plan pregătirea acestora până la cel mai mic
                      detaliu, cu respect față de resursele existente, și
                      reprezintă tranziția de la idee la realitate. Acest
                      departament nu se rezumă doar la muncă fizică, ci le arată
                      celor implicați cum o sarcină corect planificată și
                      distribuită între persoane devine exponențial mai ușoară
                      prin organizarea între mai mulți oameni.
                    </p>
                    <div></div>
                    <div></div>
                    <p>
                      Situații neprevăzute? Echipament lipsă? Lacune
                      organizatorice? Aceste probleme nu apar atunci când
                      departamentul Logistică este implicat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="imgs">
                <img src="https://picsum.photos/id/4/200/300" alt="" />
                <img src="https://picsum.photos/id/4/200/300" alt="" />
                <img src="https://picsum.photos/id/4/200/300" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sl">
                <div className="departamente">
                  <h1>Departamente</h1>
                  <div className="alld">
                    <h2 onClick={() => goToSlide(0)}>Public relations (PR)</h2>
                    <h2 onClick={() => goToSlide(1)}>human resources (HR)</h2>

                    <h2 onClick={() => goToSlide(2)}>Vocational</h2>

                    <h2 onClick={() => goToSlide(3)}>Logistic</h2>

                    <h2 onClick={() => goToSlide(4)}>
                      Financial Reporting (FR)
                    </h2>
                  </div>
                </div>
                <div className="texts">
                  <div className="tess">
                    <p>
                      Se poate vorbi în continuu despre evenimentele OSFIIR și
                      cum sunt acestea puse cap la cap, dar fără resurse, cum
                      poate trece o idee la stadiul de realitate? Răspunsul se
                      află în cadrul departamentului FR, care are ca scop
                      principal atragerea fondurilor, partenerilor și
                      colaboratorilor, pentru ca asociația să își poată extinde
                      orizonturile ce țin de posibilitățile realizării unui
                      eveniment.
                    </p>
                    <div></div>
                    <div></div>
                    <p>
                      Studenții care alcătuiesc acest departament au ocazia să
                      își dezvolte abilități de comunicare formală, negociere și
                      planificare, întrucât partea financiară este strict
                      orientată către evenimente, căci OSFIIR este o organizație
                      non-profit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="imgs">
                <img src="https://picsum.photos/id/5/200/300" alt="" />
                <img src="https://picsum.photos/id/5/200/300" alt="" />
                <img src="https://picsum.photos/id/5/200/300" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <SimpleContact />
      <ScrollToTopButton />
      {/* <Footerbug /> */}
    </>
  );
}

export default About;
