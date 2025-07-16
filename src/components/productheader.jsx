// src/components/productheader.jsx
import React from "react";

export default function ProductHeader() {
  return (
    <div className="img-overlay-service">
      <div
        style={{
          backgroundImage: `url('img/header-image-prods.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          padding: "120px 10px 50px",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />
        
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ margin: "0 0 10px", fontSize: "36px", fontWeight: "bold" }}>
            CBA Energy's Products
          </h1>
          <p style={{ fontSize: "18px", marginBottom: 0 }}>
           List of our products
          </p>
        </div>
      </div>
    </div>
  );
}