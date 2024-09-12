import React, { useState } from 'react'
import useWindowSize from "../../utils/useWindowSize";
import { IoIosArrowDown } from "react-icons/io";
import { IoSchoolOutline } from "react-icons/io5";

function  Cancer({ top }) {
    const { width } = useWindowSize();

    const txts = [
      `1  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum
      illo nulla nobis assumenda neque beatae sint voluptas maiores, aperiam
      eos mollitia harum explicabo vitae quos ipsum consequuntur, dolorum
      odio, et necessitatibus suscipit. `,
      `2  Laudantium alias eligendi
      repudiandae error laboriosam autem animi voluptatum amet quisquam,
      facere, quas esse incidunt dolorum harum iste laborum deserunt, ex hic
      aspernatur beatae nam necessitatibus!`,
      "3333333333333",
      "444444444444",
    ];
    const [txt, setTxt] = useState(txts[0]);
  
    const choose = (index) => {
      setTxt(txts[index]);
    };
    const drop = (asta) => {
      const down = document.querySelectorAll(".down")[asta];
      down.classList.toggle("see");
    };
  return (
      <>
       <div className="cancer">
          <h1 style={{ right: top / 3 - width / 1.7 + "px" }}>CEVA BLANA</h1>
          {width > 780 ? (
            <>
              <div className="stanga">
                <div className="click" id="but1" onClick={() => choose(0)}>
                  <IoSchoolOutline />
                  <h2>primul</h2>
                </div>
                <div className="click" id="but2" onClick={() => choose(1)}>
                  <IoSchoolOutline />
                  <h2>doi</h2>
                </div>
                <div className="click" id="but3" onClick={() => choose(2)}>
                  <IoSchoolOutline />
                  <h2>trei</h2>
                </div>
                <div className="click" id="but4" onClick={() => choose(3)}>
                  <IoSchoolOutline />
                  <h2>patru</h2>
                </div>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
              </div>
              <div className="dreapta">
                <h2>Ceva titlu blana</h2>
                <p>{txt}</p>
              </div>
            </>
          ) : (
            <>
              <div className="drop">
                <div className="up" onClick={() => drop(0)}>
                  <div>
                    <IoSchoolOutline className="first" />
                    <h2>Primul</h2>
                  </div>
                  <IoIosArrowDown className="second" />
                </div>
                <div className="down">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eligendi rem provident repudiandae perspiciatis excepturi
                    non laborum maiores minima consequuntur laboriosam? Impedit
                    corporis laboriosam suscipit, alias modi itaque. Saepe,
                    numquam fugiat?
                  </p>
                </div>
              </div>{" "}
              <div className="drop">
                <div className="up" onClick={() => drop(1)}>
                  <div>
                    <IoSchoolOutline className="first" />
                    <h2>Primul</h2>
                  </div>
                  <IoIosArrowDown className="second" />
                </div>
                <div className="down">
                  <p>
                    Lorem 22222222222222222222222222222222222ipsum dolor, sit
                    amet consectetur adipisicing elit. Eligendi rem provident
                    repudiandae perspiciatis excepturi non laborum maiores
                    minima consequuntur laboriosam? Impedit corporis laboriosam
                    suscipit, alias modi itaque. Saepe, numquam fugiat?
                  </p>
                </div>
              </div>
              <div className="drop">
                <div className="up" onClick={() => drop(2)}>
                  <div>
                    <IoSchoolOutline className="first" />
                    <h2>Primul</h2>
                  </div>
                  <IoIosArrowDown className="second" />
                </div>
                <div className="down">
                  <p>
                    Lorem 33333333333333333333333 dolor, sit amet consectetur
                    adipisicing elit. Eligendi rem provident repudiandae
                    perspiciatis excepturi non laborum maiores minima
                    consequuntur laboriosam? Impedit corporis laboriosam
                    suscipit, alias modi itaque. Saepe, numquam fugiat?
                  </p>
                </div>
              </div>
              <div className="drop">
                <div className="up" onClick={() => drop(3)}>
                  <div>
                    <IoSchoolOutline className="first" />
                    <h2>Primul</h2>
                  </div>
                  <IoIosArrowDown className="second" />
                </div>
                <div className="down">
                  <p>
                    Lorem 333333333333333333333333 dolor, sit amet consectetur
                    adipisicing elit. Eligendi rem provident repudiandae
                    perspiciatis excepturi non laborum maiores minima
                    consequuntur laboriosam? Impedit corporis laboriosam
                    suscipit, alias modi itaque. Saepe, numquam fugiat?
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </>
    )
}

export default Cancer