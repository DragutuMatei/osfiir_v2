import React, {useState} from "react";
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
import { AXIOS } from "../../utils/AxiosConfig";

function Voluntariat() {
  const [voluntar, setVoluntar] = useState("");
  const handleSearch =async (query) => {
    console.log(query);
    query = query.replace("/", "-");
    // Aici poți adăuga logica de căutare
    const rasp = await AXIOS.get(`/voluntari/${query}`);
    console.log(rasp);
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

            <Card not={false} />
            {/*DOCUMENTE DACA NUAM FCT LA OSFIIR*/}

            <Card not={true} />
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
