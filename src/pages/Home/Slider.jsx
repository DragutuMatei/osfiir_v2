import React from "react";
import useWindowSize from "../../utils/useWindowSize";
import "./slider.scss";

function Slider() {
  var curpage = 1;
  var sliding = false;
  var click = true;
  var pagePrefix = "slide";
  var pageShift = 500;
  var transitionPrefix = "circle";
  var svg = true;
  const { width, height } = useWindowSize();

  function leftSlide() {
    if (click) {
      if (curpage === 1) curpage = 5;
      console.log("woek");
      sliding = true;
      curpage--;
      svg = true;
      click = false;
      for (let k = 1; k <= 4; k++) {
        var a1 = document.getElementById(pagePrefix + k);
        a1.className += " tran";
      }
      setTimeout(() => {
        move();
      }, 200);
      setTimeout(() => {
        for (let k = 1; k <= 4; k++) {
          var a1 = document.getElementById(pagePrefix + k);
          a1.classList.remove("tran");
        }
      }, 1400);
    }
  }

  function rightSlide() {
    if (click) {
      if (curpage == 4) curpage = 0;
      console.log("woek");
      sliding = true;
      curpage++;
      svg = false;
      click = false;
      for (let k = 1; k <= 4; k++) {
        var a1 = document.getElementById(pagePrefix + k);
        a1.className += " tran";
      }
      setTimeout(() => {
        move();
      }, 200);
      setTimeout(() => {
        for (let k = 1; k <= 4; k++) {
          var a1 = document.getElementById(pagePrefix + k);
          a1.classList.remove("tran");
        }
      }, 1400);
    }
  }

  function move() {
    if (sliding) {
      sliding = false;
      if (svg) {
        for (let j = 1; j <= 28; j++) {
          var c = document.getElementById(transitionPrefix + j);
          c.classList.remove("steap");
          c.setAttribute("class", transitionPrefix + j + " streak");
          console.log("streak");
        }
      } else {
        for (let j = 28; j <= 56; j++) {
          var c = document.getElementById(transitionPrefix + j);
          c.classList.remove("steap");
          c.setAttribute("class", transitionPrefix + j + " streak");
          console.log("streak");
        }
      }
      setTimeout(() => {
        for (let i = 1; i <= 4; i++) {
          if (i == curpage) {
            var a = document.getElementById(pagePrefix + i);
            a.className += " up1";
          } else {
            var b = document.getElementById(pagePrefix + i);
            b.classList.remove("up1");
          }
        }
        sliding = true;
      }, 600);
      setTimeout(() => {
        click = true;
      }, 1700);

      setTimeout(() => {
        if (svg) {
          for (let j = 1; j <= 28; j++) {
            var c = document.getElementById(transitionPrefix + j);
            c.classList.remove("streak");
            c.setAttribute("class", transitionPrefix + j + " steap");
          }
        } else {
          console.log("am ajuns aicea");
          for (let j = 28; j <= 56; j++) {
            var c = document.getElementById(transitionPrefix + j);
            c.classList.remove("streak");
            c.setAttribute("class", transitionPrefix + j + " steap");
          }
          sliding = true;
        }
      }, 1350);
      setTimeout(() => {
        click = true;
      }, 1700);
    }
  }

  //   left.cu.onmousedown = () => {
  //   };

  //   right.onmousedown = () => {
  //     rightSlide();
  //   };

  document.onkeydown = (e) => {
    if (e.keyCode === 37) {
      leftSlide();
    } else if (e.keyCode === 39) {
      rightSlide();
    }
  };

  return (
    <>
      <div className="parent">
        <div className="slider">
          <button
            type="button"
            id="right"
            onClick={rightSlide}
            className="right"
            name="button"
          >
            <svg
              version="1.1"
              id="Capa_1"
              width="40px"
              height="40px "
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 477.175 477.175"
              //   style=enable-background:new 0 0 477.175 477.175;"
              space="preserve"
            >
              <g>
                <path
                  style={{ fill: "#9d9d9d" }}
                  d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
            c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
            "
                />
              </g>
            </svg>
          </button>
          <button
            type="button"
            id="left"
            onClick={() => {
              leftSlide();
            }}
            className="left"
            name="button"
          >
            <svg
              // style={{position:"absolute", zIndex:1, width:'100vw', height:'90lvh'}}
              version="1.1"
              id="Capa_2"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 477.175 477.175"
              //   style="enable-background:new 0 0 477.175 477.175;"
              space="preserve"
            >
              <g>
                <path
                  style={{ fill: "#9d9d9d" }}
                  d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
            c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
                />
              </g>
            </svg>
          </button>
          <svg
            id="svg2"
            className="up2"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
          >
            <circle
              id="circle1"
              className="circle1 steap"
              cx="34px"
              cy="49%"
              r="20"
            />
            <circle
              id="circle2"
              className="circle2 steap"
              cx="34px"
              cy="49%"
              r="100"
            />
            <circle
              id="circle3"
              className="circle3 steap"
              cx="34px"
              cy="49%"
              r="180"
            />
            <circle
              id="circle4"
              className="circle4 steap"
              cx="34px"
              cy="49%"
              r="260"
            />
            <circle
              id="circle5"
              className="circle5 steap"
              cx="34px"
              cy="49%"
              r="340"
            />
            <circle
              id="circle6"
              className="circle6 steap"
              cx="34px"
              cy="49%"
              r="420"
            />
            <circle
              id="circle7"
              className="circle7 steap"
              cx="34px"
              cy="49%"
              r="500"
            />
            <circle
              id="circle8"
              className="circle8 steap"
              cx="34px"
              cy="49%"
              r="580"
            />
            <circle
              id="circle9"
              className="circle9 steap"
              cx="34px"
              cy="49%"
              r="660"
            />
            <circle
              id="circle10"
              className="circle10 steap"
              cx="34px"
              cy="49%"
              r="740"
            />
            <circle
              id="circle11"
              className="circle11 steap"
              cx="34px"
              cy="49%"
              r="820"
            />
            <circle
              id="circle12"
              className="circle12 steap"
              cx="34px"
              cy="49%"
              r="900"
            />
            <circle
              id="circle13"
              className="circle13 steap"
              cx="34px"
              cy="49%"
              r="980"
            />
            {/* ////////////////////////////// */}
            <circle
              id="circle14"
              className="circle14 steap"
              cx="34px"
              cy="49%"
              r="1060"
            />{" "}
            <circle
              id="circle15"
              className="circle15 steap"
              cx="34px"
              cy="49%"
              r="1140"
            />{" "}
            <circle
              id="circle16"
              className="circle16 steap"
              cx="34px"
              cy="49%"
              r="1220"
            />{" "}
            <circle
              id="circle17"
              className="circle17 steap"
              cx="34px"
              cy="49%"
              r="1300"
            />{" "}
            <circle
              id="circle18"
              className="circle18 steap"
              cx="34px"
              cy="49%"
              r="1380"
            />{" "}
            <circle
              id="circle19"
              className="circle19 steap"
              cx="34px"
              cy="49%"
              r="1460"
            />{" "}
            <circle
              id="circle20"
              className="circle20 steap"
              cx="34px"
              cy="49%"
              r="1540"
            />{" "}
            <circle
              id="circle21"
              className="circle21 steap"
              cx="34px"
              cy="49%"
              r="1620"
            />{" "}
            <circle
              id="circle22"
              className="circle22 steap"
              cx="34px"
              cy="49%"
              r="1700"
            />{" "}
            <circle
              id="circle23"
              className="circle23 steap"
              cx="34px"
              cy="49%"
              r="1780"
            />{" "}
            <circle
              id="circle24"
              className="circle24 steap"
              cx="34px"
              cy="49%"
              r="1860"
            />{" "}
            <circle
              id="circle25"
              className="circle25 steap"
              cx="34px"
              cy="49%"
              r="1940"
            />{" "}
            <circle
              id="circle26"
              className="circle26 steap"
              cx="34px"
              cy="49%"
              r="2020"
            />{" "}
            <circle
              id="circle27"
              className="circle27 steap"
              cx="34px"
              cy="49%"
              r="2100"
            />{" "}
            <circle
              id="circle28"
              className="circle28 steap"
              cx="34px"
              cy="49%"
              r="2180"
            />{" "}
          </svg>
          <svg
            id="svg1"
            className="up2"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
          >
            <circle
              id="circle29"
              className="circle29 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="20"
            />
            <circle
              id="circle30"
              className="circle30 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="100"
            />
            <circle
              id="circle31"
              className="circle31 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="180"
            />
            <circle
              id="circle32"
              className="circle32 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="260"
            />
            <circle
              id="circle33"
              className="circle33 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="340"
            />
            <circle
              id="circle34"
              className="circle34 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="420"
            />
            <circle
              id="circle35"
              className="circle35 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="500"
            />
            <circle
              id="circle36"
              className="circle36 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="580"
            />
            <circle
              id="circle37"
              className="circle37 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="660"
            />
            <circle
              id="circle38"
              className="circle38 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="740"
            />
            <circle
              id="circle39"
              className="circle39 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="820"
            />
            <circle
              id="circle40"
              className="circle40 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="900"
            />
            <circle
              id="circle41"
              className="circle41 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="980"
            />
            <circle
              id="circle42"
              className="circle42 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="1060"
            />{" "}
            <circle
              id="circle43"
              className="circle43 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="1140"
            />{" "}
            <circle
              id="circle44"
              className="circle44 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="1220"
            />{" "}
            <circle
              id="circle45"
              className="circle45 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="1300"
            />{" "}
            <circle
              id="circle46"
              className="circle46 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="1380"
            />{" "}
            <circle
              id="circle47"
              className="circle47 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="1460"
            />{" "}
            <circle
              id="circle48"
              className="circle48 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="1540"
            />{" "}
            <circle
              id="circle49"
              className="circle49 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="1620"
            />{" "}
            <circle
              id="circle50"
              className="circle50 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="1700"
            />{" "}
            <circle
              id="circle51"
              className="circle51 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="1780"
            />{" "}
            <circle
              id="circle52"
              className="circle52 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="1860"
            />{" "}
            <circle
              id="circle53"
              className="circle53 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="1940"
            />{" "}
            <circle
              id="circle54"
              className="circle54 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="2020"
            />{" "}
            <circle
              id="circle55"
              className="circle55 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="2100"
            />{" "}
            <circle
              id="circle56"
              className="circle56 steap"
              cx={width - 60 + "px"}
              cy="49%"
              r="2180"
            />{" "}
          </svg>
          <div
            id="slide1"
            className="slide1 up1"
            style={{ fontFamily: "Cousine" }}
          >
            <div className="content">
                <h1>Bine ați venit pe OSFIIR!</h1>
    
                <p>
                    Textul tau aici Textul tau aici Textul tau aici Textul tau aici Textul tau aici Textul tau aici <br/>
                    Textul tau aici Textul tau aici Textul tau aici Textul tau aici Textul tau aici Textul tau aici <br/>
                    Textul tau aici Textul tau aici Textul tau aici Textul tau aici Textul tau aici Textul tau aici<br/>
                    Textul tau aici Textul tau aici Textul tau aici Textul tau aici Textul tau aici Textul tau aici<br/>
                    Textul tau aici Textul tau aici Textul tau aici Textul tau aici Textul tau aici Textul tau aici
                </p>
            </div>

            
            {/* <span
              style={{
                fontFamily: "Cousine",
                fontSize: "80px",
              }}
            >
              ORGANIZAȚIA STUDENȚILOR
            </span>
            <br />
            DIN
            <br />
            <span 
              style={{
                fontFamily: "Cousine",
                fontSize: "38px",
              }}>
            FACULTATEA DE INGINERIE INDUSTRIALĂ ȘI ROBOTICĂ
            </span> */}
          </div>
          <div id="slide2" className="slide2">
            VOLUNTARIAT
          </div>
          <div id="slide3" className="slide3">
            FOREST
          </div>
          <div id="slide4" className="slide4">
            DESERT
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
