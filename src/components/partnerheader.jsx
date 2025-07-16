import React from "react";

export default function PartnerHeader() {
  return (
    <div className="img-overlay-service">
      <div
        style={{
          backgroundImage: `url('img/headerpic2.jpg')`, // Use your image path here
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
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
            zIndex: 1,
          }}
        />
        
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ margin: "0 0 10px", fontSize: "36px", fontWeight: "bold" }}>
           Our Partners
          </h1>
          <p style={{ fontSize: "18px", marginBottom: 0 }}>
             Most of our partner relationships are long term and enduring.
          </p>
        </div>
      </div>
    </div>
  );
}