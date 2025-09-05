import React from "react";
import "./Card.scss";

function Card({not}) {
  const documents = [
    { name: "Contract de voluntariat", filePath: "/Documente_necesare/intern/Contract de voluntariat.docx" },
    { name: "Fisa de voluntariat", filePath: "/Documente_necesare/intern/Fisa de voluntariat.docx" },
    { name: "Apreciere", filePath: "/Documente_necesare/intern/Apreciere.docx" },
    { name: "Raport de activitate", filePath: "/Documente_necesare/intern/Raport de activitate.docx" },
    { name: "Fisa de protectie a voluntarului", filePath: "/Documente_necesare/intern/Fişa de protecţie a voluntarului.docx" },
  ];
 const documents1 = [
    { name: "Contract de voluntariat", filePath: "/Documente_necesare/extern/Contract de voluntariat.docx" },
    { name: "Fisa de voluntariat", filePath: "/Documente_necesare/extern/Fisa de voluntariat.docx" },
    { name: "Apreciere", filePath: "/Documente_necesare/extern/Model Apreciere.docx" },
    { name: "Raport de activitate", filePath: "/Documente_necesare/extern/Raport de activitate.docx" },
    { name: "Fisa de protectie a voluntarului", filePath: "/Documente_necesare/extern/Fişa de protecţie a voluntarului.docx" },
  ];
  return (
    <div className="card">
      {
      not ?
      documents1.map((doc, index) => (
        <a key={index} href={doc.filePath} download>
          {doc.name}
        </a>
      ))
      :
      documents.map((doc, index) => (
        <a key={index} href={doc.filePath} download>
          {doc.name}
        </a>
      ))}
    </div>
  );
}

export default Card;
