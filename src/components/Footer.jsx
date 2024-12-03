import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-distributed">
      <link
        rel="stylesheet"
        href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
      />
      <div className="footer-left">
        <img src={require("../assets/img/logo.png")} alt="" />

        <p className="footer-links">
          <Link to="/" className="link-1">
            Home
          </Link>

          <Link to="/blog">Blog</Link>
          <Link to="/about">Despre noi</Link>
          <Link to="/about_facultate">Despre Facultate</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </p>

        <p className="footer-company-name">OSFIIR © 2024</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Politehnica Corp E, București</span>{" "}
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+40 732 078 129</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:osfiir@gmail.com">osfiir@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>Despre OSFIIR</span>
          Noi suntem Organizația Studenților din Facultatea de Inginerie
          Industrială și Robotică (OSFIIR) și suntem o asociație apolitică,
          non-profit și non-guvernamentală, care reprezintă interesele
          studenților din cadrul facultății.
        </p>

        <div className="footer-icons">
          <a href="https://www.facebook.com/OSFIIR" target="_blank">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/osfiir/" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/osfiir" target="_blank">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
