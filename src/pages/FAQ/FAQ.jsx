import React, { useEffect } from "react";
import "./faq.scss";
import SimpleContact from "../Home/SimpleContact";
import Aos from "aos";
import Footerbug from "../../components/FooterBughy";
import ScrollToTopButton from "../../components/Scrolltotop";
function FAQ() {
  useEffect(() => {
    Aos.init();
    console.log(Math.floor(Math.random() * (500 - 1 + 1) + 1));
  }, []);
  return (
    <div className="faq">
      <div className="banner">
        <h1>FAQ</h1>
      </div>

      <div id={"intrb_1"} className="intrb aia">
        <h1>Când se afișează orarul?</h1>
        <p>De obicei, cu 2-3 zile înainte de a începe anul/semestrul.</p>
      </div>

      <div id={"intrb_2"} className="intrb">
        <h1>
        Când se pun căminele?
        </h1>
        <p>
        Repartizarea o primiți cu 2-3 zile înainte să vă cazați, bobocii sunt prioritari, așa că nu vă faceți griji că prindeți loc toți.
        </p>
      </div>

      <div id={"intrb_3"} className="intrb">
        <h1>
        Cum citim orarul?
        </h1>
        <p>
        Există o poză cum se citește orarul într-un mod explicativ.
        </p>
      </div>

      <div id={"intrb_4"} className="intrb">
        <h1>
        Cum îmi dau seama unde am laborator/seminar/curs?
        </h1>
        <p>
        Locația fiecărui laborator, seminar sau curs este specificată pe orar, folosind coduri sau denumiri pentru săli și clădiri.
         Cu ajutorul hărții campusului, poți identifica rapid și ușor locația exactă a fiecărei activități.
        </p>
      </div>

      <div id={"intrb_5"} className="intrb">
        <h1>
        Care sunt procentele pe materii?
        </h1>
        <p>
        60-40 pentru materii cu examene și 80-20 pentru materii cu colocviu. În cazul în care un 
        profesor dorește să modifice aceste procente, 
        este necesar să ne anunțe, deoarece astfel de schimbări nu respectă regulamentul intern.
        </p>
      </div>

      <div id={"intrb_6"} className="intrb">
        <h1>
        Când primim legitimațiile?
        </h1>
        <p>
        Între 2 săptămâni și o lună de când începeți, deoarece ele se scriu manual și durează.
        </p>
      </div>

      <div id={"intrb_7"} className="intrb">
        <h1>
        Care e faza cu transportul în comun?
        </h1>
        <p>
        Aveți 90% reducere la metrou, iar la STB e mai complicat.
        </p>
      </div>

      <div id={"intrb_8"} className="intrb">
        <h1>
        La ce avem prezențe obligatorii?
        </h1>
        <p>
        La laboratoare prezența este obligatorie, cu 2 absențe recuperabile; la seminare depinde de profesor, la curs nu este obligatoriu.
        </p>
      </div>

      <div id={"intrb_9"} className="intrb">
        <h1>
        Care e diferenta dintre restanta si refacere?
        </h1>
        <p>
        Restanta este atunci când nu ai promovat un examen la prima încercare- ai punctaj 
        pana in 5- și trebuie să îl susții din nou într-o sesiune specială pentru restanțe, 
        care are loc de obicei in vara. Dacă îl promovezi în restanță, materia este considerată trecută; 
        refacerea este atunci cand nu te-ai prezentat la examen sau nu ai promovat materia in sesiunea de 
        restante, insemnand ca 
        trebuie sa vii iar la cursurile, seminariile/ laboratoarele materiei respective.
        </p>
      </div>

      <div id={"intrb_10"} className="intrb">
        <h1>
        Ce inseamna prag?
        </h1>
        <p>
        Pragul este o conditie impusa de profesori pentru a promova materia, 
        de obicei ai nevoie de nota minima de jumatate din punctajul laboratorului/ cursului 
        pentru a fi trecut in examen (spre exemplu, ai nevoie de 30p / 60p la laboarator pentru 
        a fi bagat in examen). 3. Normal! 4. Exista 3 tipuri de burse de performanta: III (peste media 8), 
        de 1100 lei, II (peste media 9,5) de 1300 lei si I (peste media 9,7) de 1500 lei, doar ca exista 
        un numar limitat de studenti pentru aceste burse. 
        In plus, exista si burse sociale, in valoare de 925 lei.
        </p>
      </div>

      <div id={"intrb_11"} className="intrb">
        <h1>
        Merita practica facultativa din anul 1?
        </h1>
        <p>
        Orice activitate care te apropie de oameni din industrie este benefica si poate 
        avea urmari bune atunci cand stii cum sa o fructifici - totusi, trebuie luat in 
        considerare ca pana la sfarsitul anului 1 nu acumulezi multe 
        cunostinte de specialitate pe care sa le poti aplica la practica facultativa.
        </p>
      </div>

      <div id={"intrb_12"} className="intrb">
        <h1>
        Suntem luati de la zero cu programarea?
        </h1>
        <p>
        Raspunsul este da, sunteti luati de la zero cu programarea, 
        deci nu e o problema daca nu ati facut in liceu!
        </p>
      </div>

      <div id={"intrb_13"} className="intrb">
        <h1>
        Cum e cu prezentele la curs?
        </h1>
        <p>
        Prezenta la curs nu este obligatorie, lucru stabilit inca din regulamentul facultatii, 
        deci niciun profesor nu va poate impune sa veniti. Cu toate acestea,
         ei pot aloca un procent din nota finala prezentei la curs ( de obicei cam 10%)
        </p>
      </div>

      <div id={"intrb_14"} className="intrb">
        <h1>
        Putem folosi tableta/laptopul pentru a ne lua notite la facultate?
        </h1>
        <p>
        Da, se poate. Trebuie avut in vedere totusi ca unii profesori dau teste/examene 
        cu materialele pe masa, dar fara device-uri - ceea ce inseamna 
        ca ar trebui sa va printati notitele in prealabil.
        </p>
      </div>

      <div id={"intrb_15"} className="intrb">
        <h1>
        OSFIIR si ASPOLI sunt organizatii diferite?
        </h1>
        <p>
        Da, OSFIIR este Organizatia Studentilor din Facultatea de Inginerie Industriala si
         Robotica, iar ASPOLI Asociatia Studentilor din UNSTPB.
        </p>
      </div>

      <div id={"intrb_16"} className="intrb">
        <h1>
        De unde putem cumpara foi pentru desenul tehnic?
        </h1>
        <p>
        De la magazinul din rectorat, de la AN-uri sau de la magazinul facultatii noastre 
        (acolo foile sunt in general scoase cu chenarul stramb).
        </p>
      </div>

      <div id={"intrb_17"} className="intrb">
        <h1>
        Cum se impart subgrupele?
        </h1>
        <p>
        O grupa este impartita in 2 subgrupe, in ordine alfabetica 
        sau de comun acord in functie de preferintele fiecaruia.
        </p>
      </div>

      <div id={"intrb_18"} className="intrb">
        <h1>
        Cat de grea este specializarea Robotica?
        </h1>
        <p>
        1. Este o specializare complexa, care se axeaza pe toate aspectele 
        de creare a unui robot industrial: faci programare, mecanica, proiectare 
        2D si 3D, studiezi alcatuirea, prelucrarea si rezistenta unui material, etc. 
        Este o specializare provocatoare, dar este foarte 
        interesanta si ofera extrem de multe oportunitati. 
        </p>
      </div>

      <div id={"intrb_19"} className="intrb">
        <h1>
        Vom avea ocazia sa lucram si practic?
        </h1>
        <p>
        Exista diferite optionale care iti ofera posibilitatea de a lucra cu arduino, 
        care iti ofera o baza si te face sa intelegi principiul de creare, iar la materiile 
        de specialitate 
        vei avea ocazia sa lucrezi practic pe un robot industrial.
        </p>
      </div>

      <div id={"intrb_20"} className="intrb">
        <h1>
        Sunt companii care ofera stagii de practica/ intership-uri in domeniul ingineriei industriale?
        </h1>
        <p>
        n anul I ai dreptul de a te inscrie la "Practica facultativa", 
        iar din anul II vei avea 90h obligatorii de practica, si in anul 
        III toata vara. Exista o multitudine de firme bazate pe programare, mecanica, 
        proiectare sau chiar furnizori de roboti industriali, 
        care chiar au interesul de a te familiariza cu domeniul.
        </p>
      </div>

      <div id={"intrb_21"} className="intrb">
        <h1>
        Cine este profesorul tutore?
        </h1>
        <p>
        Repartizarea tutorilor este facuta pe acest site 
        https://fiir.upb.ro/Upload/Licenta/Tutori_Licenta_2023_2024_FINAL.pdf
        </p>
      </div>

      <div id={"intrb_22"} className="intrb">
        <h1>
        Ce cadru didactic este responsabil cu practica din anul 2 si 3?
        </h1>
        <p>
        Domnul Adrian Popescu este reprezentantul specializarii, insa responsabilii 
        stagiului de practica pot fi 
        accesati pe pagina facultatii, la sectiunea ”Stagii de practica”.
        </p>
      </div>

      <div id={"intrb_23"} className="intrb">
        <h1>
        Cum putem face rost de examenele din anii trecuti?
        </h1>
        <p>
        Din vorba in vorba, de la studentii tutori sau alti studenti din ani superiori.
        </p>
      </div>

      <div id={"intrb_24"} className="intrb">
        <h1>
        In ce consta examenul de practica?
        </h1>
        <p>
        Examenul de practica va fi reprezentat de o discutie libera 
        cu doamna Emilia Popescu sau cu domnul Adrian Popescu, 
        pe baza activitatilor si experientelor din cadrul stagiului.
        </p>
      </div>



    
      <SimpleContact />
      {/* <Footerbug /> */}

      <ScrollToTopButton />
    </div>
  );
}

export default FAQ;
