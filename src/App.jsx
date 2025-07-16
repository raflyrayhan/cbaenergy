// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navigation from "./components/navigation";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ExperiencePage from "./pages/Experience";
import ProductPage from "./pages/Product";
import Partner from "./pages/Partner";
import ContactUs from "./pages/Contactus";
import CertificationPage from "./pages/certification";
import JsonData from "./data/data.json";
import "./App.css";

export default function App() {
  const [landingPageData, setLandingPageData] = useState(null);

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  if (!landingPageData) {
    return (
      <p style={{ padding: 50, textAlign: "center" }}>
        Loading data…
      </p>
    );
  }

  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              headerData={landingPageData.Header}
              aboutPreviewData={landingPageData.Aboutpreview}
              servicesPreviewData={landingPageData.Services}
              contactData={landingPageData.Contact}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/certification" element={<CertificationPage />} />
        <Route
          path="/experience"
          element={<ExperiencePage/>}
        />
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/partners" element={<Partner/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}