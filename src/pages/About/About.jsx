// import React, { useEffect, useRef, useState } from "react";
// import AboutSection from "../Home/AboutSection";
// import "./about.scss";
// import Button from "../../utils/Button";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Mousewheel, EffectFade, Pagination } from "swiper/modules";
// import SimpleContact from "../Home/SimpleContact";
// import { Link } from "react-router-dom";
// import Footerbug from "../../components/FooterBughy";
// import ScrollToTopButton from "../../components/Scrolltotop";
// function About() {
//   const [index, setIndex] = useState(0);
//   const swiperRef = useRef(null);
//   const goToSlide = (index) => {
//     if (swiperRef.current) {
//       swiperRef.current.swiper.slideTo(index);
//     }
//   };
//   const [top, setScrollTop] = useState(0);

//   useEffect(() => {
//     AOS.init();
//     const handleScroll = (event) => {
//       setScrollTop(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <section className="landing">
//         <div className="banner">
//           <h1>Despre noi</h1>
//         </div>{" "}
//         <AboutSection top={top} />{" "}
//         <div className="anunturi">
//           <div className="img"></div>
//           <h2>anunturi</h2>
//           <div className="al">
//             <div className="anunt">
//               <h2>Titlu de anunt</h2>
//               <p>
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Explicabo repellat nesciunt quia laboriosam enim eaque inventore
//                 sed, eveniet totam ratione!
//               </p>{" "}
//               <Link to="/anunt/cel-mai-blana-anunt">Afla mai multe</Link>
//             </div>
//             <div className="anunt">
//               <h2>Titlu de anunt</h2>
//               <p>
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Explicabo repellat nesciunt quia laboriosam enim eaque inventore
//                 sed, eveniet totam ratione!
//               </p>{" "}
//               <Link to="/anunt/cel-mai-blana-anunt">Afla mai multe</Link>
//             </div>
//             <div className="anunt">
//               <h2>Titlu de anunt</h2>
//               <p>
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Explicabo repellat nesciunt quia laboriosam enim eaque inventore
//                 sed, eveniet totam ratione!
//               </p>{" "}
//               <Link to="/anunt/cel-mai-blana-anunt">Afla mai multe</Link>
//             </div>
//             <div className="anunt">
//               <h2>Titlu de anunt</h2>
//               <p>
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Explicabo repellat nesciunt quia laboriosam enim eaque inventore
//                 sed, eveniet totam ratione!
//               </p>{" "}
//               <Link to="/anunt/cel-mai-blana-anunt">Afla mai multe</Link>
//             </div>
//           </div>
//         </div>
//         {/* <div className="projects">
//           <div
//             className="project"
//             style={{
//               backgroundImage:
//                 "url(https://dev.quantum-group.ro/fi/assets/images/business-line/division_steel.jpg)",
//             }}
//           >
//             <h2>Titlu de proiect</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
//               enim ea in nulla aut nemo, saepe cupiditate sequi eos. Repellendus
//               necessitatibus recusandae earum cupiditate sint qui, adipisci
//               asperiores voluptate fugiat!
//             </p>
//             <Button text={"Proiect"} />
//           </div>
//           <div
//             className="project"
//             style={{
//               backgroundImage:
//                 "url(https://dev.quantum-group.ro/fi/assets/images/business-line/division_projects.jpg)",
//             }}
//           >
//             <h2>Titlu de proiect</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
//               enim ea in nulla aut nemo, saepe cupiditate sequi eos. Repellendus
//               necessitatibus recusandae earum cupiditate sint qui, adipisci
//               asperiores voluptate fugiat!
//             </p>
//             <Button text={"Proiect"} />
//           </div>
//           <div
//             className="project"
//             style={{
//               backgroundImage:
//                 "url(https://dev.quantum-group.ro/fi/assets/images/business-line/division_steel.jpg)",
//             }}
//           >
//             <h2>Titlu de proiect</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
//               enim ea in nulla aut nemo, saepe cupiditate sequi eos. Repellendus
//               necessitatibus recusandae earum cupiditate sint qui, adipisci
//               asperiores voluptate fugiat!
//             </p>
//             <Button text={"Proiect"} />
//           </div>
//           <div
//             className="project"
//             style={{
//               backgroundImage:
//                 "url(https://dev.quantum-group.ro/fi/assets/images/business-line/division_projects.jpg)",
//             }}
//           >
//             <h2>Titlu de proiect</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
//               enim ea in nulla aut nemo, saepe cupiditate sequi eos. Repellendus
//               necessitatibus recusandae earum cupiditate sint qui, adipisci
//               asperiores voluptate fugiat!
//             </p>
//             <Button text={"Proiect"} />
//           </div>
//         </div> */}
//         <div className="altcancer">
//           <Swiper
//             ref={swiperRef}
//             direction={"vertical"}
//             slidesPerView={1}
//             onSlideChange={(swiperCore) => {
//               const { activeIndex, snapIndex, previousIndex, realIndex } =
//                 swiperCore;
//               setIndex(activeIndex);
//               console.log({
//                 activeIndex,
//                 snapIndex,
//                 previousIndex,
//                 realIndex,
//               });
//             }}
//             effect={"fade"}
//             speed={1500}
//             mousewheel={{
//               forceToAxis: true,
//               sensitivity: 1,
//               releaseOnEdges: true,
//             }}
//             pagination={{
//               clickable: true,
//               renderBullet: (index, className) => {
//                 return '<span class="' + className + '"></span>';
//               },
//             }}
//             // pagination={{
//             //   clickable: true,
//             //   el: ".swiper-pagination",
//             //   type: "bullets",
//             // }}
//             modules={[Pagination, Mousewheel, EffectFade]}
//             className="mySwiper"
//           >
//             <SwiperSlide>
//               <div className="sl">
//                 <div className="departamente">
//                   <h1>Departamente</h1>
//                   <div className="alld">
//                     <h2 onClick={() => goToSlide(0)}>Public relations (PR)</h2>
//                     <h2 onClick={() => goToSlide(1)}>human resources (HR)</h2>

//                     <h2 onClick={() => goToSlide(2)}>Vocational</h2>

//                     <h2 onClick={() => goToSlide(3)}>Logistic</h2>

//                     <h2 onClick={() => goToSlide(4)}>
//                       Financial Reporting (FR)
//                     </h2>
//                   </div>
//                 </div>
//                 <div className="texts">
//                   <h3>Departament 1</h3>
//                   <div className="tess">
//                     <p>
//                       111111111111 Lorem ipsum dolor sit amet consectetur
//                       adipisicing elit. Obcaecati in provident reiciendis, ab
//                       pariatur libero hic praesentium quibusdam velit?
//                     </p>
//                     <div></div>
//                     <div></div>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Obcaecati in provident reiciendis, ab pariatur libero hic
//                       praesentium quibusdam velit?
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="imgs">
//                 <img src="https://picsum.photos/id/1/200/300" alt="" />
//                 <img src="https://picsum.photos/id/1/200/300" alt="" />
//                 <img src="https://picsum.photos/id/1/200/300" alt="" />
//                 <img src="https://picsum.photos/id/1/200/300" alt="" />
//                 <img src="https://picsum.photos/id/1/200/300" alt="" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               {" "}
//               <div className="sl">
//                 <div className="departamente">
//                   <h1>Departamente</h1>
//                   <div className="alld">
//                     <h2 onClick={() => goToSlide(0)}>Public relations (PR)</h2>
//                     <h2 onClick={() => goToSlide(1)}>human resources (HR)</h2>

//                     <h2 onClick={() => goToSlide(2)}>Vocational</h2>

//                     <h2 onClick={() => goToSlide(3)}>Logistic</h2>

//                     <h2 onClick={() => goToSlide(4)}>
//                       Financial Reporting (FR)
//                     </h2>
//                   </div>
//                 </div>
//                 <div className="texts">
//                   <h3>Departament 2</h3>
//                   <div className="tess">
//                     <p>
//                       222222222222 Lorem ipsum dolor sit amet consectetur
//                       adipisicing elit. Obcaecati in provident reiciendis, ab
//                       pariatur libero hic praesentium quibusdam velit?
//                     </p>
//                     <div></div>
//                     <div></div>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Obcaecati in provident reiciendis, ab pariatur libero hic
//                       praesentium quibusdam velit?
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="imgs">
//                 <img src="https://picsum.photos/id/2/200/300" alt="" />
//                 <img src="https://picsum.photos/id/2/200/300" alt="" />
//                 <img src="https://picsum.photos/id/2/200/300" alt="" />
//                 <img src="https://picsum.photos/id/2/200/300" alt="" />
//                 <img src="https://picsum.photos/id/2/200/300" alt="" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               {" "}
//               <div className="sl">
//                 <div className="departamente">
//                   <h1>Departamente</h1>
//                   <div className="alld">
//                     <h2 onClick={() => goToSlide(0)}>Public relations (PR)</h2>
//                     <h2 onClick={() => goToSlide(1)}>human resources (HR)</h2>

//                     <h2 onClick={() => goToSlide(2)}>Vocational</h2>

//                     <h2 onClick={() => goToSlide(3)}>Logistic</h2>

//                     <h2 onClick={() => goToSlide(4)}>
//                       Financial Reporting (FR)
//                     </h2>
//                   </div>
//                 </div>
//                 <div className="texts">
//                   <h3>Departament 3</h3>
//                   <div className="tess">
//                     <p>
//                       3333333333 Lorem ipsum dolor sit amet consectetur
//                       adipisicing elit. Obcaecati in provident reiciendis, ab
//                       pariatur libero hic praesentium quibusdam velit?
//                     </p>
//                     <div></div>
//                     <div></div>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Obcaecati in provident reiciendis, ab pariatur libero hic
//                       praesentium quibusdam velit?
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="imgs">
//                 <img src="https://picsum.photos/id/3/200/300" alt="" />
//                 <img src="https://picsum.photos/id/3/200/300" alt="" />
//                 <img src="https://picsum.photos/id/3/200/300" alt="" />
//                 <img src="https://picsum.photos/id/3/200/300" alt="" />
//                 <img src="https://picsum.photos/id/3/200/300" alt="" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               {" "}
//               <div className="sl">
//                 <div className="departamente">
//                   <h1>Departamente</h1>
//                   <div className="alld">
//                     <h2 onClick={() => goToSlide(0)}>Public relations (PR)</h2>
//                     <h2 onClick={() => goToSlide(1)}>human resources (HR)</h2>

//                     <h2 onClick={() => goToSlide(2)}>Vocational</h2>

//                     <h2 onClick={() => goToSlide(3)}>Logistic</h2>

//                     <h2 onClick={() => goToSlide(4)}>
//                       Financial Reporting (FR)
//                     </h2>
//                   </div>
//                 </div>
//                 <div className="texts">
//                   <h3>Departament 4</h3>
//                   <div className="tess">
//                     <p>
//                       4444444444 Lorem ipsum dolor sit amet consectetur
//                       adipisicing elit. Obcaecati in provident reiciendis, ab
//                       pariatur libero hic praesentium quibusdam velit?
//                     </p>
//                     <div></div>
//                     <div></div>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Obcaecati in provident reiciendis, ab pariatur libero hic
//                       praesentium quibusdam velit?
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="imgs">
//                 <img src="https://picsum.photos/id/4/200/300" alt="" />
//                 <img src="https://picsum.photos/id/4/200/300" alt="" />
//                 <img src="https://picsum.photos/id/4/200/300" alt="" />
//                 <img src="https://picsum.photos/id/4/200/300" alt="" />
//                 <img src="https://picsum.photos/id/4/200/300" alt="" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               {" "}
//               <div className="sl">
//                 <div className="departamente">
//                   <h1>Departamente</h1>
//                   <div className="alld">
//                     <h2 onClick={() => goToSlide(0)}>Public relations (PR)</h2>
//                     <h2 onClick={() => goToSlide(1)}>human resources (HR)</h2>

//                     <h2 onClick={() => goToSlide(2)}>Vocational</h2>

//                     <h2 onClick={() => goToSlide(3)}>Logistic</h2>

//                     <h2 onClick={() => goToSlide(4)}>
//                       Financial Reporting (FR)
//                     </h2>
//                   </div>
//                 </div>
//                 <div className="texts">
//                   <h3>Departament 5</h3>
//                   <div className="tess">
//                     <p>
//                       55555555 Lorem ipsum dolor sit amet consectetur
//                       adipisicing elit. Obcaecati in provident reiciendis, ab
//                       pariatur libero hic praesentium quibusdam velit?
//                     </p>
//                     <div></div>
//                     <div></div>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Obcaecati in provident reiciendis, ab pariatur libero hic
//                       praesentium quibusdam velit?
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="imgs">
//                 <img src="https://picsum.photos/id/5/200/300" alt="" />
//                 <img src="https://picsum.photos/id/5/200/300" alt="" />
//                 <img src="https://picsum.photos/id/5/200/300" alt="" />
//                 <img src="https://picsum.photos/id/5/200/300" alt="" />
//                 <img src="https://picsum.photos/id/5/200/300" alt="" />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//         <div className="struc">
//           <h1 style={{ left: top / 4 - 80 + "px" }}>STRUCTURA</h1>
//           <div className="text">
//             <h2>Structura asociatiei</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
//               commodi quisquam blanditiis quas? Impedit praesentium temporibus
//               alias sit commodi magnam debitis, itaque ipsam ad doloribus? Nulla
//               rerum molestiae in perspiciatis.
//             </p>
//           </div>
//         </div>
//         <div className="structura">
//           <div className="row">
//             <div className="t">
//               <h1>1</h1>
//               <h2>Voluntar</h2>
//               <p>
//                 Ut eu lacinia nibh onec in feugiat quam, non eleifend nunc auris
//                 a dapibus nunc. Aliquam id arcu quam uisque pellentesque velit
//                 vel imperdiet.
//               </p>
//             </div>
//             <img
//               src="https://dev.quantum-group.ro/fi/assets/images/quantum-method/1.png"
//               alt=""
//             />
//           </div>
//           <div className="row">
//             <img
//               src="https://dev.quantum-group.ro/fi/assets/images/quantum-method/1.png"
//               alt=""
//             />
//             <div className="t">
//               <h1>2</h1>
//               <h2>Membru</h2>
//               <p>
//                 Ut eu lacinia nibh onec in feugiat quam, non eleifend nunc auris
//                 a dapibus nunc. Aliquam id arcu quam uisque pellentesque velit
//                 vel imperdiet.
//               </p>
//             </div>
//           </div>
//           <div className="row">
//             <div className="t">
//               <h1>3</h1>
//               <h2>Board</h2>
//               <p>
//                 Ut eu lacinia nibh onec in feugiat quam, non eleifend nunc auris
//                 a dapibus nunc. Aliquam id arcu quam uisque pellentesque velit
//                 vel imperdiet.
//               </p>
//             </div>
//             <img
//               src="https://dev.quantum-group.ro/fi/assets/images/quantum-method/1.png"
//               alt=""
//             />
//           </div>
//           <div className="row">
//             <img
//               src="https://dev.quantum-group.ro/fi/assets/images/quantum-method/1.png"
//               alt=""
//             />
//             <div className="t">
//               <h1>4</h1>
//               <h2>Alumni</h2>
//               <p>
//                 Ut eu lacinia nibh onec in feugiat quam, non eleifend nunc auris
//                 a dapibus nunc. Aliquam id arcu quam uisque pellentesque velit
//                 vel imperdiet.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="struc las">
//           <h1 style={{ right: top / 18 - 80 + "px" }}>STRUCTURA</h1>
//           <div className="text">
//             <h2>Structura asociatiei</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
//               commodi quisquam blanditiis quas? Impedit praesentium temporibus
//               alias sit commodi magnam debitis, itaque ipsam ad doloribus? Nulla
//               rerum molestiae in perspiciatis.
//             </p>
//           </div>
//         </div>
//         <SimpleContact />
//         <Footerbug/>
//         <ScrollToTopButton/>
//       </section>
//     </>
//   );
// }

// export default About;
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
                <img src="https://picsum.photos/id/5/200/300" alt="" />
                <img src="https://picsum.photos/id/5/200/300" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <SimpleContact />
      <ScrollToTopButton />
      <Footerbug />
    </>
  );
}

export default About;
