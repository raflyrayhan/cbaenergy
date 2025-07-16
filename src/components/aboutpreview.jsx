// src/components/aboutpreview.jsx
import React from "react";
import "./aboutpreview.css";

export default function AboutPreview({ data }) {
  if (!data) return null;

  return (
    <section id="about-preview">
      <div className="about-bg">
        <div className="about-overlay">
          <div className="about-content">
            <h2 style={{fontSize: "4rem"}}>Who We Are</h2>
            <p style={{fontSize: "2.3rem"}}>{data.line1}</p>
            <span/>
            <p style={{fontSize: "2.3rem"}}>{data.line2}</p>
            <a href="/about" className="btn-custom" style={{marginTop: "3.6vh"}}>More About Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
