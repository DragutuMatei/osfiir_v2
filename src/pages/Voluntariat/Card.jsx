import React from "react";
import "./Card.scss";

function Card({not}) {
  const documents = [
    { name: "Contract de voluntariat", filePath: "public/Documente_necesare/OSFIIR/Contract de voluntariat.d0d9476c9cceade447fa (1).docx" },
    { name: "Fisa de voluntariat", filePath: "public/Documente_necesare/OSFIIR/Fisa de voluntariat.d843c838a771f7704378.docx" },
    { name: "Apreciere", filePath: "public/Documente_necesare/OSFIIR/Apreciere.docx" },
    { name: "Raport de activitate", filePath: "public/Documente_necesare/OSFIIR/Raport de activitate.5c10c77a4ebf5bcaf927.docx" },
    { name: "Fisa de protectie a voluntarului", filePath: "public/Documente_necesare/OSFIIR/Fişa de protecţie a voluntarului.eaf6b2c38ba415ce6e6a.docx" },
  ];
 const documents1 = [
    { name: "Contract de voluntariat", filePath: "public/Documente_necesare/OSFIIR/Contract de voluntariat.d0d9476c9cceade447fa (1).docx" },
    { name: "Fisa de voluntariat", filePath: "public/Documente_necesare/OSFIIR/Fisa de voluntariat.d843c838a771f7704378.docx" },
    { name: "Apreciere", filePath: "public/Documente_necesare/OSFIIR/Apreciere.docx" },
    { name: "Raport de activitate", filePath: "public/Documente_necesare/OSFIIR/Raport de activitate.5c10c77a4ebf5bcaf927.docx" },
    { name: "Fisa de protectie a voluntarului", filePath: "public/Documente_necesare/OSFIIR/Fişa de protecţie a voluntarului.eaf6b2c38ba415ce6e6a.docx" },
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
