import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Download() {
  const { nr, uid } = useParams();

  useEffect(() => {
    var link = document.createElement("a");
    if (nr == 1) {
      var x = new XMLHttpRequest();
      x.open("POST", "http://localhost:3001/test");
      console.log(uid);
      x.send({ uid: uid });
      link.download = "bafta";
      link.href = require("../assets/levelup/bafta.txt");
    } else {
      link.download = "cauta_numele.pdf";
      link.href = require("../assets/levelup/cauta numele.pdf");
    }
    link.click();
    link.remove();
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <a
        className="button"
        href={require(`../assets/levelup/${
          nr == 1 ? "bafta.txt" : "cauta numele.pdf"
        }`)}
        download={true}
      >
        Daca nu s a downloadad imaginea, apasa aici!
      </a>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Download;
