import React from "react";
import { motion } from "framer-motion";

export default function CertificationPage() {
  return (
    <main id="certification-page">
      <motion.section 
        className="certification-hero"
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Certification</h1>
      </motion.section>
      
      <section className="certification-content">
        <div className="container">
          <p>Details about certifications will be added here.</p>
        </div>
      </section>
    </main>
  );
}