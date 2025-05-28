import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Download() {
  const { nr, uid } = useParams();

  const fct = async () => {
    var link = document.createElement("a");
    if (nr == 1) {
      fetch("https://server-levelup.vercel.app/test", {
        method: "POST", // Specify the HTTP method as POST
        headers: {
          "Content-Type": "application/json", // Set the Content-Type header
        },
        body: JSON.stringify({ uid: uid }), // Convert the JavaScript object to a JSON string for the request body
      });

      // var x = new XMLHttpRequest();
      // x.open("POST", "http://localhost:3001/test");
      // x.setRequestHeader("Content-Type", "application/json");
      // console.log(uid);
      // x.send(JSON.stringify({ uid: uid }));
      link.download = "bafta";
      link.href = require("../assets/levelup/bafta.txt");
    } else {
      link.download = "cauta_numele.pdf";
      link.href = require("../assets/levelup/cauta numele.pdf");
    }
    link.click();
    link.remove();
  };

  useEffect(() => {
    fct();
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
