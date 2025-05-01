import React, { useEffect } from "react";

function Download() {
  const { nr } = useParams();

  useEffect(() => {
    var link = document.createElement("a");
    if (nr == 1) {
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
