import React from "react";
import ProductHeader from "../components/productheader";
import { motion } from "framer-motion";
import "./productpage.css";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const PRODUCTS = [
  {
    title: "Integrated Steel",
    items: [
      "Rigid Line pipes & Bends (bare/coated)",
      "OCTG (Casing, Tubing, and Accessories)",
      "Offshore/Onshore Structural Steel Packages (Plates, Beams, Tubulars)",
      "Pressure Vessels/Tank Farm Steel Packages (Atmospheric/Cryogenic)",
      "Steel Sheet Piles",
    ],
    src: "img/integrated-steel.png",
    alt: "Integrated Steel",
  },
  {
    title: "Engineered Items",
    items: [
      "Mechanical and Structural Connectors",
      "Deck Equipment Systems",
      "SURF (Flexible Pipes, Umbilical & FOC/Power Cable) and Mooring Systems",
      "Mooring & Station Keeping Systems for Floating Units",
      "Mechanical / Electrical / Instrumentation Components",
    ],
    src: "img/engineered-item.png",
    alt: "Engineered Items",
  },
  {
    title: "Package Modular",
    items: [
      "Offshore/Marine Cranes",
      "Generator Set Package",
      "Static & Rotating Equipment On Skid Package",
      "Custody Metering Systems",
      "Gas Compressor",
      "Process Equipment Package",
      "Custom Engineering Package",
    ],
    src: "img/package-modular.png",
    alt: "Package Modular",
  }
];

export default function ProductPage() {
  return (
    <main id="product-page">
      <ProductHeader />

      <div className="product-grid">
        {PRODUCTS.map((sec, i) => (
          <motion.div
            key={i}
            className="product-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <div className="product-text">
              <h3>{sec.title}</h3>
              <ul className="product-list">
                {sec.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            </div>
            <div className="product-image">
              <img src={sec.src} alt={sec.alt} />
            </div>
          </motion.div>
        ))}
      </div>
      <footer className="product-footer">
        <div className="product-footer__inner">
          <p>© 2025 CBA Energy | Website by Infimech</p>
        </div>
      </footer>
    </main>
  );
}
