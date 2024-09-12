import React from "react";
import './bughy.scss';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footerbug() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__about">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
        <div className="footer__line"></div>
        <div className="footer__links">
          <div className="footer__column">
            <h3>CATEGORIES</h3>
            <ul>
              <li>C</li>
              <li>UI/UX Design</li>
              <li>PHP</li>
              <li>Java</li>
              <li>Android</li>
              <li>Templates</li>
            </ul>
          </div>
          <div className="footer__column">
            <h3>QUICK LINKS</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/contribute">Contribute</a></li>
              <li><a href="/sitemap">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__social">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />
      </div>
      <div className="footer__message">
        <input type="text" placeholder="Leave us a message" />
        <button>Send</button>
      </div>
      <div className="footer__brand">
        <h1>OSFIIR</h1>
      </div>
      <hr></hr>
      <div className="footer__legal">
        <p>@{new Date().getFullYear()} OSFIIR. All rights reserved.</p>
        <div className="footer__legal-links">
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy</a>
          <a href="/security">Security</a>
          <a href="/cookie">Cookie Declaration</a>
        </div>
      </div>
    </footer>
  );
}

export default Footerbug;

