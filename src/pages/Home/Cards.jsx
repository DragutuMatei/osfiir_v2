import React from "react";
import { FaUserShield } from "react-icons/fa6";
import { RiUserFollowFill } from "react-icons/ri";
import { HiAdjustments } from "react-icons/hi";
import { SiPersistent } from "react-icons/si";

function Cards() {
  return (
    <div className="cards">
      <div className="card" data-aos="fade-up">
        <FaUserShield />
        <h2>Integritate</h2>
        <p>
          Prin fiecare acțiune desfășurată, OSFIIR promovează respectarea eticii
          și a principiilor morale, contribuind la formarea unor caractere
          puternice care susțin dezvoltarea în contexte sociale diverse.
        </p>
      </div>{" "}
      <div className="card" data-aos="fade-up">
        <RiUserFollowFill />
        <h2>Leadership</h2>
        <p>
          Activitățile din cadrul asociației pun în valoare fiecare membru, fie
          prin atribuirea de responsabilități, fie prin oferirea de resurse
          pentru dezvoltarea ideilor personale. Leadership-ul aduce cu sine
          meritocrație.
        </p>
      </div>
      <div className="card" data-aos="fade-up">
        <HiAdjustments />
        <h2>Adaptabilitate</h2>
        <p>
          Studenții noștri dobândesc capacitatea de a rezolva, în orice moment
          și în orice împrejurare, situații neprevăzute – un factor-cheie în
          dezvoltarea profesională promovată de OSFIIR.
        </p>
      </div>
      <div className="card" data-aos="fade-up">
        <SiPersistent />
        <h2>Perseverență</h2>
        <p>
          Activitățile de voluntariat implică eforturi ce nu sunt recompensate
          material, ceea ce îi ajută pe studenții implicați să se automotiveze
          pentru a iniția, desfășura și finaliza cu succes ceea ce și-au propus.
        </p>
      </div>
    </div>
  );
}

export default Cards;
