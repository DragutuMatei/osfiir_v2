import React from 'react';
import Pagination from './Pagination'; 
import './departamentul_tau.scss';
import { Link } from "react-router-dom";

const questions = [
    "Îți place să interacționezi cu oamenii și să le oferi suport?",
    "Ai idei creative despre cum să promovezi un eveniment?",
    "Îți place să interacționezi cu oameni noi și să creezi conexiuni care pot duce la colaborări și parteneriate?",
    "Te atrage organizarea logistică a unui eveniment?",
    "Îți place să creezi experiențe memorabile pentru ceilalți, organizând evenimente care aduc oamenii împreună?",
    "Ai abilități de a coordona și motiva o echipă?",
    "Îți place să creezi conținut pe rețelele de socializare?",
    "Ai fi dispus(ă) să înveți cum să vorbești cu sponsori și parteneri pentru a obține resurse pentru proiecte?",
    "Te interesează planificarea decorului și a detaliilor tehnice ale unui eveniment?",
    "Îți place să organizezi activități pentru dezvoltarea personală a colegilor tăi?",
    "Ai răbdare să asculți oamenii și să-i ajuți să își găsească locul potrivit?",
    "Ai talent la scrierea textelor captivante și convingătoare?",
    "Te consideri o persoană perseverentă, care nu renunță ușor atunci când are un obiectiv de atins?",
    "Îți place să te ocupi de logistica unui eveniment cum ar fi săli, echipamente și materiale?",
    "Îți place să planifici activități culturale, sportive sau de divertisment?",
    "Te simți în largul tău când trebuie să intervievezi oameni pentru a-i selecta într-o echipă?",
    "Îți place să lucrezi la promovarea evenimentelor și să crești vizibilitatea organizației",
    "Îți place să gândești strategii și soluții creative pentru a atrage sprijin financiar sau material?",
    "Te pasionează partea logistică și tehnică a organizării unui eveniment?",
    "Îți place să creezi experiențe memorabile pentru participanții la evenimente?",
    "Îți place să discuți cu oamenii și să le oferi soluții potrivite nevoilor lor?",
    "Ești creativ și te pricepi la realizarea materialelor promoționale?",
    "Te simți confortabil să comunici cu persoane necunoscute dacă știi că asta ajută la succesul unui proiect?",
    "Ai abilități organizatorice și îți place să rezolvi probleme logistice?",
    "Ești pasionat de organizarea activităților care dezvoltă competențele participanților?",
    "Îți place să creezi un mediu pozitiv și să sprijini dezvoltarea unei echipe?",
    "Îți place să analizezi tendințele din social media și să le folosești pentru promovare?",
    "Ai vrea să înveți cum să negociezi și să convingi companii sau persoane să susțină evenimente studențești?",
    "Ai o gândire analitică și îți place să rezolvi probleme tehnice?",
    "Ești pasionat de organizarea evenimentelor tematice, cum ar fi baluri sau competiții?",
];

function Departamentul_tau() {
    return( 
    <div className="departamentul-tau-page">
    <div className="banner">
        <h1>Departamentul tău</h1>
    </div>
    <div className="department-container">
        <Pagination questions={questions} questionsPerPage={5} />
    </div>
</div>
);
}

export default Departamentul_tau;
