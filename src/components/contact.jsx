import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-col">
            <h3>Products</h3>
            <ul>
              <li>Integrated Steel</li>
              <li>Engineered Items</li>
              <li>Package Modular</li>
            </ul>
            <h3>Experience</h3>
            <ul>
              <li><a href="/Projectgallery.jsx">Closed Projects List</a></li>
              <li><a href="/Experience.jsx">Projects Gallery</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Partners</h3>
            <ul>
              <li>Integrated Steel Manufacturers</li>
              <li>OEM Manufacturers</li>
              <li>Supporting Services-Local</li>
              <li>Supporting Services-Global</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>About Us</h3>
            <ul>
              <li><a href="/About.jsx">Introduction</a></li>
              <li><a href="/certification.jsx">Legal Documents</a></li>
            </ul>
          </div>
          <div className="footer-col footer-contact">
            <img 
              src="img/CBA_logo_fonted.png" 
              alt="CBA Logo" 
              className="footer-logo"
            />
            <h3>Contact Us</h3>
            <p>P: +6221 576 1725 (hunting)</p>
            <p>F: +6221 576 2581</p>
            <p>E-mail: sales@cba-energy.com</p>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © 2025 CBA Energy | Website by Infimech
        </p>
      </div>
    </footer>
  );
}
 