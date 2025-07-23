// src/components/Footer.jsx
import React, { useState } from "react";

export default function Footer() {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(false);

  return (
    <footer style={{ background: "rgba(190, 143, 2, 1)", color: "white", padding: "20px 0" }}>
      <div className="container">
        <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="col-md-2">
            <div style={{ position: "relative" }}>
              <h3 
                style={{ marginBottom: "20px" }}
              >
                Products
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
               <li style={{ marginBottom: "10px" }}>Integrated Steel</li>
                  <li style={{ marginBottom: "10px" }}>Engineered Items</li>
                  <li style={{ marginBottom: "10px" }}>Package Modular</li>
              </ul>
            </div>
            <div style={{ position: "relative" }}>
              <h3 
                style={{ marginBottom: "20px" }}
              >
                Experience
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
               <li style={{ marginBottom: "10px" }}><a href="/Projectgallery.jsx" style={{color:"white"}}>Closed Projects List</a></li>
               <li style={{ marginBottom: "10px" }}><a href="/Experience.jsx" style={{color:"white"}}>Projects Gallery</a></li>
              </ul>
            </div>
          </div>

           <div className="col-md-2">
            <div style={{ position: "relative" }}>
              <h3 
                style={{ marginBottom: "20px" }}
              >
                Partners
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
               <li style={{ marginBottom: "10px" }}>Integrated Steel Manufacturers</li>
                  <li style={{ marginBottom: "10px" }}>OEM Manufacturers</li>
                  <li style={{ marginBottom: "10px" }}>Supporting Services-Local</li>
                  <li style={{ marginBottom: "10px" }}>Supporting Services-Global</li>
              </ul>
            </div>
          </div>

          <div className="col-md-2">
            <h3 style={{ marginBottom: "20px" }}>About Us</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "10px" }}><a href="/About.jsx" style={{color:"white"}}>Introduction</a></li>
              <li style={{ marginBottom: "10px" }}><a href="/certification.jsx" style={{color:"white"}}>Legal Documents</a></li>
            </ul>
          </div>

          <div className="col-md-3" style={{marginRight: "2rem"}}>
             <img 
              src="img/CBA_logo_fonted.png" 
              alt="CBA Logo" 
              style={{ maxWidth: "45%", padding: "0 0", margin: "0 0"}} 
            />
            <h3 style={{ marginBottom: "1rem" }}>Contact Us</h3>
            <p style={{ marginBottom: "1rem" }}>P: +6221 576 1725 (hunting)</p>
            <p style={{ marginBottom: "1rem" }}>F: +6221 576 2581</p>
            <p style={{ marginBottom: "1rem" }}>E-mail: sales@cba-energy.com</p>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "30px", borderTop: "1px solid rgba(255, 255, 255, 0.2)", padding: "20px 0" }}>
        <p style={{ textAlign: "center", fontSize: "14px" }}>
          © 2025 CBA Energy | Website by Infimech
        </p>
      </div>
    </footer>
  );
}