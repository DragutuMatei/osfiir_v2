import React from "react";
import './bughy.scss';
// import fb from '../assets/fbimg.png';
// import twitter from '../assets/twitter.png';
// import linkedin from '../assets/linkedin.png';
// import insta from '../assets/insta.png';

function Footerbug() {
    return (
        <div className="footerbug">
            <div className="sb__footer section__padding">
                <div className="sb__footer-about">
                    <div className="sb__footer-about-div">
                        <h4>About Us</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi velit accusamus repellat unde asperiores culpa est ad corporis architecto. Deleniti suscipit aperiam soluta earum molestiae voluptas cupiditate saepe velit.</p>
                    </div>
                </div>
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <h4>Categories</h4>
                        <a href="/C"><p>C</p></a>
                        <a href="/uidesign"><p>Ui Design</p></a>
                        <a href="/php"><p>PHP</p></a>
                        <a href="/Java"><p>Java</p></a>
                        <a href="/Android"><p>Android</p></a>
                        <a href="/Templates"><p>Templates</p></a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Quick Links</h4>
                        <a href="/aboutus"><p>About Us</p></a>
                        <a href="/contactus"><p>Contact Us</p></a>
                        <a href="/contribute"><p>Contribute</p></a>
                        <a href="/privacy"><p>Privacy Policy</p></a>
                        <a href="/sitemap"><p>Sitemap</p></a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Social Media</h4>
                        <div className="socialmedia">
                            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src={fb} alt="Facebook" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="Twitter" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="LinkedIn" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src={insta} alt="Instagram" />
                            </a> */}
                        </div>
                    </div>
                </div>
                <hr />
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>@{new Date().getFullYear()} OSFIIR. All rights reserved.</p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footerbug;
