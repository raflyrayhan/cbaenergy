// src/pages/Home.jsx
import React from "react";
import Header from "../components/header";
import AboutPreview from "../components/aboutpreview";
import ServicePreview from "../components/servicepreview";
import Contact from "../components/contact";
import JsonData from "../data/data.json"

export default function Home({contactData}) {
  return (
    <>
      <Header data={JsonData.header} />
      <AboutPreview data={JsonData.about} />
      <ServicePreview data={JsonData.services} />
      <Contact data={contactData} />
    </>
  );
}