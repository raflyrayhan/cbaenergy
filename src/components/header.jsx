// src/components/header.jsx
import React from "react";
import "./header.css";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 }
  }
};

export default function Header({ data }) {
  if (!data) return null;

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="intro-text-container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
            <h2 className="intro-com">{data.com}</h2>
            <h1 className="intro-title">{data.title}</h1>
            <p className="intro-paragraph">{data.paragraph}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}
