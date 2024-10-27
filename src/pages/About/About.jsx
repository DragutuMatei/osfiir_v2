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
                    <p>
            {d.sections[0].texts[0]}

                    </p>
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
                  <h3>Departament 3</h3>
                  <div className="tess">
                    <p>
                      333333333333 Lorem ipsum dolor sit amet consectetur
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
                  <h3>Departament 4</h3>
                  <div className="tess">
                    <p>
                      444444444444 Lorem ipsum dolor sit amet consectetur
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
                  <h3>Departament 5</h3>
                  <div className="tess">
                    <p>
                      555555555555 Lorem ipsum dolor sit amet consectetur
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
