import React from "react";
import "./Card.scss";

function Card() {
  const documents = [
    { name: "Document 1", filePath: "/docs/document1.docx" },
    { name: "Document 2", filePath: "/docs/document2.docx" },
    { name: "Document 3", filePath: "/docs/document3.docx" },
    { name: "Document 4", filePath: "/docs/document4.docx" },
    { name: "Document 5", filePath: "/docs/document5.docx" },
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
