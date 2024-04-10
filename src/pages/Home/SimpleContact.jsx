import React from "react";

function SimpleContact() {
  return (
    <div className="simplecontact">
      <div className="text">
        <h1 className="op" data-aos="fade-down" data-aos-delay="300">
          Do you HAVE
        </h1>
        <h1 className="ful" data-aos="fade-down">
          A MESSAGE
        </h1>
        <h1 className="op d" data-aos="fade-down" data-aos-delay="500">
          for us?
        </h1>
      </div>
      <a
        href="mailto: mateidr7@gmail.com"
        className="button"
        data-aos="zoom-in"
      >
        contact us
      </a>
    </div>
  );
}

export default SimpleContact;
