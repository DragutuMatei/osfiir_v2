import React from "react";
import "./confidentialitate.scss";

const UPDATED = "20 noiembrie 2026";

function Confidentialitate() {
  return (
    <div className="conf">
      <h1>Politica de confidențialitate</h1>
      <p className="conf__muted">Ultima actualizare: {UPDATED}</p>

      <section>
        <h2>Cine suntem</h2>
        <p>
          Operatorul datelor este Organizația Studenților din Facultatea de
          Inginerie Industrială și Robotică (OSFIIR), Universitatea Națională
          de Știință și Tehnologie POLITEHNICA București, Corp E. Ne poți
          contacta la <a href="mailto:office@osfiir.ro">office@osfiir.ro</a>.
        </p>
      </section>

      <section>
        <h2>Formularul de contact</h2>
        <p>
          Când ne scrii prin formularul de contact, folosim numele, numărul de
          telefon, adresa de email și mesajul tău doar ca să îți răspundem.
        </p>
      </section>

      <section id="coduri-qr">
        <h2>Codurile QR pentru Spectacolul Caritabil 2026</h2>
        <p>
          Când scanezi un cod QR de pe afișele sau pliantele Spectacolului
          Caritabil 2026, înainte să te redirecționăm către
          spectacol2026.osfiir.ro înregistrăm vizita, ca să aflăm câți oameni
          au ajuns la eveniment prin fiecare material de promovare.
        </p>
        <p>Înregistrăm:</p>
        <ul>
          <li>adresa IP;</li>
          <li>
            locația aproximativă dedusă din IP (oraș, regiune, țară) și
            operatorul de internet;
          </li>
          <li>sursa codului scanat (afiș sau pliant), data și ora;</li>
          <li>
            informații despre dispozitiv: sistemul de operare, browserul,
            modelul telefonului (dacă browserul îl transmite), dimensiunea
            ecranului, limba, fusul orar, tipul conexiunii și pagina de pe care
            ai venit;
          </li>
          <li>
            un identificator aleator salvat în browserul tău, ca să știm dacă
            același dispozitiv a mai scanat un cod;
          </li>
          <li>
            locația GPS, <strong>doar dacă ai dat deja</strong> site-ului
            osfiir.ro acces la locație. Nu îți cerem această permisiune și nu
            afișăm niciun mesaj în acest scop.
          </li>
        </ul>
        <p>
          <strong>Temeiul legal</strong> este interesul nostru legitim de a
          măsura eficiența promovării unui eveniment caritabil (art. 6 alin.
          (1) lit. f din Regulamentul (UE) 2016/679, GDPR). Datele sunt văzute
          doar de membrii OSFIIR care se ocupă de eveniment și sunt folosite
          doar pentru statistici agregate. Nu le vindem, nu le folosim pentru
          reclame și nu încercăm să te identificăm.
        </p>
        <p>
          <strong>Cât le păstrăm:</strong> cel mult 12 luni de la eveniment,
          apoi le ștergem.
        </p>
        <p>
          <strong>Cine le mai procesează:</strong> Google (Firebase /
          Firestore), unde sunt stocate datele, și serviciile GeoJS și ipify,
          care primesc adresa IP ca să întoarcă locația aproximativă.
        </p>
      </section>

      <section>
        <h2>Drepturile tale</h2>
        <p>
          Ai dreptul să ceri acces la datele tale, rectificarea sau ștergerea
          lor, restricționarea prelucrării și să te opui prelucrării. Scrie-ne
          la <a href="mailto:office@osfiir.ro">office@osfiir.ro</a>. Dacă
          vrei să ștergem datele unei scanări, spune-ne aproximativ data și
          ora la care ai scanat codul. Dacă nu vrei să fie înregistrată vizita,
          poți intra direct pe spectacol2026.osfiir.ro, fără să scanezi codul.
        </p>
        <p>
          Poți depune o plângere la Autoritatea Națională de Supraveghere a
          Prelucrării Datelor cu Caracter Personal (
          <a
            href="https://www.dataprotection.ro"
            target="_blank"
            rel="noreferrer"
          >
            dataprotection.ro
          </a>
          ).
        </p>
      </section>
    </div>
  );
}

export default Confidentialitate;
