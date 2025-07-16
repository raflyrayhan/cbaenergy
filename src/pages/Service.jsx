// src/pages/Service.jsx
import React from "react";
import Header          from "../components/header";
import ServicePreview  from "../components/servicepreview";

export default function Service({ servicesData, headerData }) {
  if (!servicesData || !headerData) return null;

  return (
    <>
      <section style={{ padding: 80, background:"#fafafa" }}>
        <div className="container" style={{ maxWidth:800, margin:"auto" }}>
          <h2 style={{ color: "black" }}>Our Services</h2>
          {servicesData.map((svc, i) => (
            <div key={i} style={{ marginBottom:20, color:"black" }}>
              <h3>{svc.title}</h3>
              <p>{svc.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}