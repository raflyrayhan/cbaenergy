// ProductPage.jsx
import React, { useState } from "react";
import ProductHeader from "../components/productheader";
import { motion } from "framer-motion";
import "./productpage.css";

const PRODUCTS = [
  {
    title: "Integrated Steel",
    items: [
      { name: "Rigid Line pipes & Bends (bare/coated)", img: "img/rigid-line.png" },
      { name: "OCTG (Casing, Tubing, and Accessories)", img: "img/octg.png" },
      { name: "Offshore/Onshore Structural Steel Packages", img: "img/structural-steel.png" },
      { name: "Pressure Vessels/Tank Farm Steel Packages", img: "img/pressure-vessel.png" },
      { name: "Steel Sheet Piles", img: "img/sheet-pile.png" },
    ],
    defaultImg: "img/integrated-steel.png",
  },
  {
    title: "Engineered Items",
    items: [
      { name: "Mechanical and Structural Connectors", img: "img/connector.png" },
      { name: "Deck Equipment Systems", img: "img/deck-equip.png" },
      { name: "SURF Systems", img: "img/surf.png" },
      { name: "Mooring & Station Keeping", img: "img/mooring.png" },
      { name: "Mech/Elec/Instr Components", img: "img/components.png" },
    ],
    defaultImg: "img/engineered-item.png",
  },
  {
    title: "Package Modular",
    items: [
      { name: "Offshore/Marine Cranes", img: "img/marine-crane.png" },
      { name: "Generator Set Package", img: "img/genset.png" },
      { name: "Static & Rotating Equipment", img: "img/static-rotating.png" },
      { name: "Custody Metering Systems", img: "img/metering.png" },
      { name: "Gas Compressor", img: "img/compressor.png" },
    ],
    defaultImg: "img/package-modular.png",
  },
];

export default function ProductPage() {
  const [activeImages, setActiveImages] = useState(
    PRODUCTS.map((sec) => sec.defaultImg)
  );

  const handleItemClick = (sectionIndex, newImg) => {
    const updated = [...activeImages];
    updated[sectionIndex] = newImg;
    setActiveImages(updated);
  };

  return (
    <main id="product-page">
      <ProductHeader />

      <div className="product-grid-catalog">
        {PRODUCTS.map((sec, i) => (
          <motion.div
            key={i}
            className="product-card-catalog"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="product-image-catalog">
              <img src={activeImages[i]} alt={sec.title} />
            </div>
            <div className="product-content">
              <h3>{sec.title}</h3>
              <ul className="product-list">
                {sec.items.map((it, j) => (
                  <li
                    key={j}
                    onClick={() => handleItemClick(i, it.img)}
                    className="clickable"
                  >
                    {it.name}
                  </li>
                ))}
              </ul>
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
