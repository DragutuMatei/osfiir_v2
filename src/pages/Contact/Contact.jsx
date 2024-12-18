import React, { useEffect, useState } from "react";
import "./contact.scss";
import Button from "../../utils/Button";
import ScrollToTopButton from "../../components/Scrolltotop";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [numar, setNumar] = useState("");
  const [email, setEmail] = useState("");
  const [mesaj, setMesaj] = useState("");

  useEffect(() => {
    emailjs.init({
      publicKey: process.env.REACT_APP_MAILJS_KEY,
    });
  }, []);

  const send = async () => {
    const formdata = new FormData();
    formdata.append("nume", name);
    formdata.append("tel", numar);
    formdata.append("mail", email);
    formdata.append("mesaj", mesaj);

    emailjs
      .send(
        process.env.REACT_APP_MAILJS_SERVICE_ID,
        process.env.REACT_APP_MAILJS_TEMPLATE_ID,
        { nume: name, tel: numar, mail: email, mesaj: mesaj }
      )
      .then(
        () => {
          alert("Mesaj trimis cu succes!");
        },
        (error) => {
          alert("Mesajul nu a fost trimis!");
        }
      );
  };

  return (
    <>
      <div className="banner">
        <h1>Contact</h1>
      </div>
      <div className="contact_page">
        <div className="left_contact">
          <h1>Do you want to enter your team?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing eli ras velit
            justo, malesuada eget massa.
          </p>
        </div>
        <div className="right_contact">
          <div className="row">
            <div className="input_group">
              <input
                type="text"
                placeholder="Nume"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input_group">
              <input
                type="tel"
                placeholder="Numar de telefon"
                onChange={(e) => setNumar(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="input_group">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="input_group">
              <textarea
                placeholder="Mesaj"
                onChange={(e) => setMesaj(e.target.value)}
              />
            </div>
          </div>
          <div className="button_container">
            <Button click={send} text={"Send"} />
          </div>
        </div>
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default Contact;
