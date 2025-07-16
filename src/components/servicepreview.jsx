// src/components/servicepreview.jsx
import React from "react";
import "./servicepreview.css";

export default function ServicePreview({ data }) {
  if (!data) return null;

  return (
    <section id="services-preview">
      <div className="services-bg">
        <div className="services-overlay">
          <div className="services-content">
            <h2>Who We Serve</h2>
            <p>{data.line1}</p>
            <ul>
              {data.services.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
            <a href="/experience" className="btn-custom">Check Our Experiences</a>
          </div>
        </div>
      </div>
    </section>
  );
}
