import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import "./About/about.scss";
import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Mousewheel, EffectFade, Pagination } from "swiper/modules"; 
import Button from "../utils/Button";

function Test() {
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
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };
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
      {" "}
      <section className="landing">
        
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
            // pagination={{
            //   clickable: true,
            //   el: ".swiper-pagination",
            //   type: "bullets",
            // }}
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
                  <h3>Departament 1</h3>
                  <div className="tess">
                    <p>
                      111111111111 Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Obcaecati in provident reiciendis, ab
                      pariatur libero hic praesentium quibusdam velit?
                    </p>
                    <div></div>
                    <div></div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati in provident reiciendis, ab pariatur libero hic
                      praesentium quibusdam velit?
                    </p>
                  </div>
                </div>
              </div>
              <div className="imgs">
                <img src="https://picsum.photos/id/1/200/300" alt="" />
                <img src="https://picsum.photos/id/1/200/300" alt="" />
                <img src="https://picsum.photos/id/1/200/300" alt="" />
                <img src="https://picsum.photos/id/1/200/300" alt="" />
                <img src="https://picsum.photos/id/1/200/300" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
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
                  <h3>Departament 2</h3>
                  <div className="tess">
                    <p>
                      222222222222 Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Obcaecati in provident reiciendis, ab
                      pariatur libero hic praesentium quibusdam velit?
                    </p>
                    <div></div>
                    <div></div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati in provident reiciendis, ab pariatur libero hic
                      praesentium quibusdam velit?
                    </p>
                  </div>
                </div>
              </div>
              <div className="imgs">
                <img src="https://picsum.photos/id/2/200/300" alt="" />
                <img src="https://picsum.photos/id/2/200/300" alt="" />
                <img src="https://picsum.photos/id/2/200/300" alt="" />
                <img src="https://picsum.photos/id/2/200/300" alt="" />
                <img src="https://picsum.photos/id/2/200/300" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
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
                  <h3>Departament 3</h3>
                  <div className="tess">
                    <p>
                      3333333333 Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Obcaecati in provident reiciendis, ab
                      pariatur libero hic praesentium quibusdam velit?
                    </p>
                    <div></div>
                    <div></div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati in provident reiciendis, ab pariatur libero hic
                      praesentium quibusdam velit?
                    </p>
                  </div>
                </div>
              </div>
              <div className="imgs">
                <img src="https://picsum.photos/id/3/200/300" alt="" />
                <img src="https://picsum.photos/id/3/200/300" alt="" />
                <img src="https://picsum.photos/id/3/200/300" alt="" />
                <img src="https://picsum.photos/id/3/200/300" alt="" />
                <img src="https://picsum.photos/id/3/200/300" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
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
                  <h3>Departament 4</h3>
                  <div className="tess">
                    <p>
                      4444444444 Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Obcaecati in provident reiciendis, ab
                      pariatur libero hic praesentium quibusdam velit?
                    </p>
                    <div></div>
                    <div></div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati in provident reiciendis, ab pariatur libero hic
                      praesentium quibusdam velit?
                    </p>
                  </div>
                </div>
              </div>
              <div className="imgs">
                <img src="https://picsum.photos/id/4/200/300" alt="" />
                <img src="https://picsum.photos/id/4/200/300" alt="" />
                <img src="https://picsum.photos/id/4/200/300" alt="" />
                <img src="https://picsum.photos/id/4/200/300" alt="" />
                <img src="https://picsum.photos/id/4/200/300" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
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
                  <h3>Departament 5</h3>
                  <div className="tess">
                    <p>
                      55555555 Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Obcaecati in provident reiciendis, ab
                      pariatur libero hic praesentium quibusdam velit?
                    </p>
                    <div></div>
                    <div></div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati in provident reiciendis, ab pariatur libero hic
                      praesentium quibusdam velit?
                    </p>
                  </div>
                </div>
              </div>
              <div className="imgs">
                <img src="https://picsum.photos/id/5/200/300" alt="" />
                <img src="https://picsum.photos/id/5/200/300" alt="" />
                <img src="https://picsum.photos/id/5/200/300" alt="" />
                <img src="https://picsum.photos/id/5/200/300" alt="" />
                <img src="https://picsum.photos/id/5/200/300" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>{" "}
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
        </div>{" "}
      </section>
    </>
  );
}

export default Test;
