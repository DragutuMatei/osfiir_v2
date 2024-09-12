import { IoMdCloseCircle } from "react-icons/io";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./simple.scss";
import SimpleContact from "../Home/SimpleContact";
import Aos from "aos";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function SimplePostPage() {
  const { slug } = useParams();
  const [images, setImages] = useState([
    "https://dev-api.quantum-group.ro/storage/projects/165935193762e7b381a4bd1.JPG",
    "https://dev-api.quantum-group.ro/storage/projects/165935193762e7b381a4bd1.JPG",
    "https://dev-api.quantum-group.ro/storage/projects/165935193762e7b381a4bd1.JPG",
    "https://dev-api.quantum-group.ro/storage/projects/165935193762e7b381a4bd1.JPG",
    "https://dev-api.quantum-group.ro/storage/projects/165935193762e7b381a4bd1.JPG",
    "https://dev-api.quantum-group.ro/storage/projects/165935193762e7b381a4bd1.JPG",
    "https://dev-api.quantum-group.ro/storage/projects/165935193762e7b381a4bd1.JPG",
    "https://dev-api.quantum-group.ro/storage/projects/165935193762e7b381a4bd1.JPG",
    "https://dev-api.quantum-group.ro/storage/projects/165935193762e7b381a4bd1.JPG",
    "https://dev-api.quantum-group.ro/storage/projects/165935193762e7b381a4bd1.JPG",
    "https://dev-api.quantum-group.ro/storage/projects/165935193762e7b381a4bd1.JPG",
  ]);
  const [display, setDisplay] = useState("none");
  const show = () => {
    setDisplay("flex");
  };
  const hide = () => {
    setDisplay("none");
  };

  const KEY_NAME_ESC = "Escape";
  const KEY_EVENT_TYPE = "keyup";

  const handleEscKey = useCallback(
    (event) => {
      if (event.key === KEY_NAME_ESC) {
        hide();
      }
    },
    [hide]
  );

  useEffect(() => {
    Aos.init();
    document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);

    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
    };
  }, [handleEscKey]);
  return (
    <>
      <div className="banner">
        <h1>Titlul postarii de blog</h1>
      </div>
      <div className="texts">
        <h1>
          Un titlu drept placeholder ca sa vad cum se incadreaza in pagina
        </h1>
        <div className="ps">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quod eos, veritatis laudantium incidunt tempora sit quos praesentium
            consectetur expedita temporibus, similique voluptatum odit ut
            adipisci quae quibusdam nam ab?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            officiis soluta harum, beatae, labore illum dolor neque laboriosam
            doloribus nesciunt non sit? Ea, consectetur nam dolores maxime
            soluta sunt molestiae!
          </p>
        </div>
      </div>
      <div
        className="img"
        style={{
          backgroundImage:
            "url(https://dev-api.quantum-group.ro/storage/projects/165935181562e7b307c2ceb.JPG)",
        }}
      />
      <div className="texts">
        <div className="ps">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quod eos, veritatis laudantium incidunt tempora sit quos praesentium
            consectetur expedita temporibus, similique voluptatum odit ut
            adipisci quae quibusdam nam ab?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            officiis soluta harum, beatae, labore illum dolor neque laboriosam
            doloribus nesciunt non sit? Ea, consectetur nam dolores maxime
            soluta sunt molestiae!
          </p>
        </div>
        <h1>Subtitlul2</h1>
      </div>{" "}
      <div className="texts">
        <h1>un alt titlu pus la ora 4:04 AM</h1>
        <div className="ps">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quod eos, veritatis laudantium incidunt tempora sit quos praesentium
            consectetur expedita temporibus, similique voluptatum odit ut
            adipisci quae quibusdam nam ab?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            officiis soluta harum, beatae, labore illum dolor neque laboriosam
            doloribus nesciunt non sit? Ea, consectetur nam dolores maxime
            soluta sunt molestiae!
          </p>
        </div>
      </div>
      <div className="over">
        <div className="grid">
          <div className="limg cont">
            <img
              src="https://dev-api.quantum-group.ro/storage/projects/165935193762e7b381a4bd1.JPG"
              alt=""
            />
          </div>
          <div className="rimg">
            <div className="timg cont">
              <img
                src="https://dev-api.quantum-group.ro/storage/projects/165935193762e7b381a4bd1.JPG"
                alt=""
              />
            </div>
            <div className="limg">
              <div className="rlimg cont">
                <img
                  src="https://dev-api.quantum-group.ro/storage/projects/165935193762e7b381a4bd1.JPG"
                  alt=""
                />
              </div>
              <div className="rect" onClick={show}>
                <h1>+{images.length - 3}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="texts">
        <div className="ps">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quod eos, veritatis laudantium incidunt tempora sit quos praesentium
            consectetur expedita temporibus, similique voluptatum odit ut
            adipisci quae quibusdam nam ab?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            officiis soluta harum, beatae, labore illum dolor neque laboriosam
            doloribus nesciunt non sit? Ea, consectetur nam dolores maxime
            soluta sunt molestiae!
          </p>
        </div>
        <h1>Subtitlul2</h1>
      </div>
      <SimpleContact />
      <div className="show" style={{ display: display }}>
        <IoMdCloseCircle onClick={hide} />
        <Swiper
          slidesPerView={1}
          modules={[Navigation]}
          navigation={true}
          className="mySwiper"
        >
          {images &&
            images.map((img) => {
              return (
                <SwiperSlide>
                  <img src={img} alt="" />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}

export default SimplePostPage;
