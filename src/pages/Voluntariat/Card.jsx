import React from "react";
import "./Card.scss";

function Card() {
  const documents = [
    { name: "Contract de voluntariat", filePath: "/docs/Contract de voluntariat.docx" },
    { name: "Fisa de voluntariat", filePath: "/docs/Fisa de voluntariat.docx" },
    { name: "Apreciere", filePath: "/docs/Apreciere.docx" },
    { name: "Raport de activitate", filePath: "/docs/Raport de activitate.docx" },
    { name: "Fisa de protectie a voluntarului", filePath: "/docs/Fisa de protectie a voluntarului.docx" },
  ];

  return (
    <div className="card">
      {documents.map((doc, index) => (
        <a key={index} href={doc.filePath} download>
          {doc.name}
        </a>
      ))}
    </div>
  );
}

export default Card;
