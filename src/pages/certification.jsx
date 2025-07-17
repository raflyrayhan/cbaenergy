// src/pages/CertificationPage.jsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./certification.css";

export default function CertificationPage() {
  const cardContainerRef = useRef(null);

  useEffect(() => {
    const container = cardContainerRef.current;
    if (container) {
      const cards = Array.from(container.children);
      cards.sort(() => Math.random() - 0.5);
      cards.forEach(card => container.appendChild(card));
    }
  }, []);

  return (
    <main id="certification-page">
      <motion.section 
        className="certification-hero"
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={{ color: "black", fontSize: "4rem" }}>Legal Certification</h1>
        <p style={{ color: "black", fontSize: "2rem" }}>
          Recognitions and legal acknowledgements from oil & gas authorities.
        </p>
      </motion.section>

      <section className="certification-content">
  <div className="scrollbar-wrapper">
    <div className="card-container" ref={cardContainerRef}>
          {/* e-CHSEMS */}
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

          {/* SPDA */}
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

          {/* ISO 45001 */}
          <a 
            href={`${process.env.PUBLIC_URL}/file/CBA- Certificate ISO 45001-2018 (01 March 2026).pdf`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cert-card"
          >
            <img src="/img/certificate/ISO1.png" alt="ISO45001" />
            <div className="card-body">
              <h2>ISO 45001:2018 – Occupational Health and Safety Management System</h2>
              <p>
                Certified that the Occupational Health and Safety Management System of
                PT. CAHAYA BUMI ABADI, Menara Rajawali Lt.15, Jl. Dr. Ide Anak Agung Gde Agung Lot.#5.1,
                Mega Kuningan, Setiabudi, South Jakarta 12950, Indonesia<br/>
                has been assessed and complies with the standard: ISO 45001:2018
              </p>
              <ul>
                <li>Issued: 02 Mar 2025</li>
                <li>Valid Until: 01 Mar 2026</li>
                <li>Certificate No: OHSMS/CQM-REG/0851</li>
              </ul>
            </div>
          </a>

          {/* ISO 9001 */}
          <a 
            href={`${process.env.PUBLIC_URL}/file/CBA- Certificate of ISO 9001-2015 (06 July 2026).pdf`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cert-card"
          >
            <img src="/img/certificate/ISO2.png" alt="ISO9001" />
            <div className="card-body">
              <h2>ISO 9001:2015 – Quality Management System</h2>
              <p>
                Certified that the Quality Management System of
                PT. CAHAYA BUMI ABADI, Menara Rajawali Lt.15, Jl. Dr. Ide Anak Agung Gde Agung Lot.#5.1,
                Mega Kuningan, Setiabudi, South Jakarta 12950, Indonesia<br/>
                has been assessed and complies with the standard: ISO 9001:2015
              </p>
              <ul>
                <li>Issued: 07 Jul 2025</li>
                <li>Valid Until: 06 Jul 2026</li>
                <li>Certificate No: QMS/CQM-REG/0897</li>
              </ul>
            </div>
          </a>

          {/* ISO 14001 */}
          <a 
            href={`${process.env.PUBLIC_URL}/file/CBA- Certificate of ISO 14001-2015 (06 July 2026).pdf`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cert-card"
          >
            <img src="/img/certificate/ISO3.png" alt="ISO14001" />
            <div className="card-body">
              <h2>ISO 14001:2015 – Environmental Management System</h2>
              <p>
                Certified that the Environmental Management System of
                PT. CAHAYA BUMI ABADI, Menara Rajawali Lt.15, Jl. Dr. Ide Anak Agung Gde Agung Lot.#5.1,
                Mega Kuningan, Setiabudi, South Jakarta 12950, Indonesia<br/>
                has been assessed and complies with the standard: ISO 14001:2015
              </p>
              <ul>
                <li>Issued: 07 Jul 2025</li>
                <li>Valid Until: 06 Jul 2026</li>
                <li>Certificate No: EMS/CQM-REG/0899</li>
              </ul>
            </div>
          </a>
        </div>
        </div>
      </section>
    </main>
  );
}
