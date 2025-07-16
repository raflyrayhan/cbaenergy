// src/pages/CertificationPage.jsx
import React from "react";
import { motion } from "framer-motion";
import "./certification.css";

export default function CertificationPage() {
  return (
    <main id="certification-page">
      <motion.section 
        className="certification-hero"
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={{color:"black", fontSize: "4rem"}}>Legal Certification</h1>
        <p style={{color:"black", fontSize: "2rem"}}>Recognitions and legal acknowledgements from oil & gas authorities.</p>
      </motion.section>

      <section className="certification-content">
        <div className="card-container">
          <a 
  href={`${process.env.PUBLIC_URL}/file/CBA_ E-Chsems.pdf`} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="cert-card"
>
  <img src="/img/certificate/CBA_E-Chsems_page1.png" alt="e-CHSEMS Certificate" />
  <div className="card-body">
    <h2>e-CHSEMS Certificate</h2>
    <p>
      Issued by <strong>PT Pertamina Hulu Energi</strong>, this certificate affirms compliance to 
      <em> high-risk CHSEMS</em> standard after a comprehensive audit with a qualification score of <strong>62.04%</strong>.
    </p>
    <ul>
      <li>Issued: 07 Nov 2023</li>
      <li>Valid Until: 07 Nov 2025</li>
      <li>Certificate No: 4783/PHE/2023</li>
    </ul>
  </div>
</a>

<a 
  href={`${process.env.PUBLIC_URL}/file/CBA_ SPDA.pdf`} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="cert-card"
>
  <img src="/img/certificate/CBA_SPDA_page1.png" alt="SPDA Certificate" />
  <div className="card-body">
    <h2>SPDA Certificate</h2>
    <p>
      Legal document <strong>replacing administrative requirements</strong> for procurement eligibility,
      issued by <strong>Premier Oil Natuna Sea B.V.</strong> for PT Cahaya Bumi Abadi as a verified local provider.
    </p>
    <ul>
      <li>Issued: 10 Jul 2025</li>
      <li>Valid Until: 30 Apr 2026</li>
      <li>Certificate No: 83445/PREMIER OIL/2025</li>
    </ul>
  </div>
</a>
        </div>
      </section>
    </main>
  );
}
