import React from "react";
import "./voluntariat.scss";
import { Link } from "react-router-dom";
import all from "../../assets/img/Group 3.png";
import Card from "./Card";
import SearchBar from "./SearchBar"; // Importa componenta SearchBar
import Cardulet from "./Cardulet";
import nr2 from "../../assets/img/nr2.png";
import nr1 from "../../assets/img/nr1.png";
import nr3 from "../../assets/img/nr3.png";
import ScrollToTopButton from "../../components/Scrolltotop";


function Voluntariat() {
  const handleSearch = (query) => {
    console.log("Căutare:", query);
    // Aici poți adăuga logica de căutare
  };

  return (
    <>
      <div className="banner">
        <h1>Voluntariat</h1>
      </div>
      
      <h5>Caută-ți numărul matricol și vezi rezumatul activităților tale</h5>
      <SearchBar onSearch={handleSearch} /> {/* Integrează SearchBar */}

      <div className="acte">
        <div className="title">
          <h1>ACTE NECESARE</h1>
          <h2>Acte necesare:</h2>
          <div className="Documente">
            <h3>Dacă ai făcut voluntariat la OSFIIR</h3>
            <h4>Dacă nu ai făcut voluntariat la OSFIIR</h4>
            <div className="Card">

            {/*DOCUMENTE DACA AM FCT LA OSFIIR*/}

            <Card>
            <a href="/docs/document1.docx" download>Contract de voluntariat</a>
            <a href="/docs/document2.docx" download>Fisa de voluntariat</a>
            <a href="/docs/document3.docx" download>Apreciere</a>
            <a href="/docs/document4.docx" download>Raport de activitate</a>
            <a href="/docs/document5.docx" download>Fisa de protectie a voluntarului</a>

            </Card>

            {/*DOCUMENTE DACA NUAM FCT LA OSFIIR*/}

            <Card>
              <a href="/docs/document1.docx" download>Document 1</a>
              <a href="/docs/document2.docx" download>Document 2</a>
              <a href="/docs/document3.docx" download>Document 3</a>
              <a href="/docs/document4.docx" download>Document 4</a>
              <a href="/docs/document5.docx" download>Document 5</a>
            </Card>
            </div>
          </div>
        </div>
      </div>

      <h6>Ce trebuie să conțină dosarul ?</h6>

      <div className="card-section">
        <Cardulet 
            imageSrc={nr1}
            text="În ambele cazuri, studentul trebuie să aibă un CV 
                  și un dosar cu numele lui (recomandăm să fie de carton)!"
        />
        <Cardulet 
            imageSrc={nr2}
            text="Doar pentru studenții care fac voluntariat la OSFIIR, 
                  fișa de protecţie a voluntarului trebuie să fie în triplu exemplar!"
        />
        <Cardulet 
            imageSrc={nr3}
            text="PENTRU TOȚI STUDENȚII: TOATE DOCUMENTELE TREBUIE SĂ FIE TEHNOREDACTATE!!!"
        />
      </div>


      <div className="tabel">
  <p4>Rezumatul activităților tale, name</p4>
  <div className="table-container">
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            <th>Alte activități din cadrul departamentului de PR</th>
            <th>Alte activități din cadrul departamentului de FR</th>
            <th>Ședință Generală (24.10.2024)</th>
            <th>Ședință Generală AG#2 (14.01.2025)</th>
            <th>Alte activități privind coordonarea asociației</th>
            <th>Ședință Generală (24.10.2024)</th>
            <th>Ședință Generală AG#2 (14.01.2025)</th>
            <th>Alte activități privind coordonarea asociației</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5 ore</td>
            <td>5 ore</td>
            <td>2 ore</td>
            <td>2 ore</td>
            <td>140 ore</td>
            <td>5 ore</td>
            <td>5 ore</td>
            <td>2 ore</td>
          </tr>
          <tr>
            <td>5 ore</td>
            <td>5 ore</td>
            <td>2 ore</td>
            <td>2 ore</td>
            <td>140 ore</td>
            <td>5 ore</td>
            <td>5 ore</td>
            <td>2 ore</td>
          </tr>
          <tr>
            <td>5 ore</td>
            <td>5 ore</td>
            <td>2 ore</td>
            <td>2 ore</td>
            <td>140 ore</td>
            <td>5 ore</td>
            <td>5 ore</td>
            <td>2 ore</td>
          </tr>
          <tr>
            <td>5 ore</td>
            <td>5 ore</td>
            <td>2 ore</td>
            <td>2 ore</td>
            <td>140 ore</td>
            <td>5 ore</td>
            <td>5 ore</td>
            <td>2 ore</td>
          </tr>
          <tr>
            <td>5 ore</td>
            <td>5 ore</td>
            <td>2 ore</td>
            <td>2 ore</td>
            <td>140 ore</td>
            <td>5 ore</td>
            <td>5 ore</td>
            <td>2 ore</td>
          </tr>
          <tr>
            <td>5 ore</td>
            <td>5 ore</td>
            <td>2 ore</td>
            <td>2 ore</td>
            <td>140 ore</td>
            <td>5 ore</td>
            <td>5 ore</td>
            <td>2 ore</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<ScrollToTopButton />
    </>
  );
}

export default Voluntariat;
