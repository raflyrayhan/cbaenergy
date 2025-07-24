import React from "react";
import { motion } from "framer-motion";
import "./AboutPage.css";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const listContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function AboutPage() {

  const coreData = [
  {
    lead: "Be recognized by customers, employees, and shareholders",
    rest: "as the premier strategic partner."
  },
  {
    lead: "Continuously boost efficiency",
    rest: "through people development and technological innovation."
  },
  {
    lead: "Exceed customer and shareholder expectations",
    rest: "by building a capable, creative company."
  }
];


  const uniqueItems = [
    "Provides customers with specific and/or generic design engineering",
    "Performs specific and/or generic fabricated items",
    "Supplies specialty engineered goods",
    "Delivers a specific scope of work as required by customer requirements"
  ];

  const strategyItems = [
    "Early engagement and validation with an account management team who combines technical expertise with affiliate companies within our group.",
    "Partnering with other leading organizations in complementary sectors to provide packaged solutions.",
    "Investing in local infrastructure and integration of our local team."
  ];
  const coreImages = [
  "img/core_value1.png",
  "img/core_value2.png",
  "img/core_value3.png"
];


  return (
    <main id="about-page">
      <motion.section 
        className="about-hero"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={sectionVariants}
      >
        <h1 style={{fontSize: "4.5rem", fontWeight: "800"}}>About Us</h1>
        <p style={{fontsize: "3rem"}}>Your trusted partner in energy innovation, quality & safety.</p>
      </motion.section>

      <motion.div
        className="quality-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2><b style={{color:"orange"}}>QUALITY</b> &amp; <b style={{color:"navy"}}>HSE</b></h2>
        <p style={{ fontSize: "2rem" }}><b style={{color: "orange"}}>CBA</b> <b style={{color: "navy"}}>Energy</b> drives future-focused innovation with uncompromising quality and a <b>zero-harm</b> HSE culture, continuously improving our management system and holding <b>ISO 9001:2008, ISO 14001:2009, and OHSAS 18001:2007</b> certifications.</p>
        <img src="img/iso.png" alt="ISO Certifications" style={{maxWidth: "30%"}} />
      </motion.div>
        
      {/* CORE VALUE */}
      <motion.div
        className="quality-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2><b style={{color: "orange"}}>CORE</b> <b style={{color: "navy"}}>VALUE</b></h2>
        {coreData.map((data, i) => {
  const { lead, rest } = data;
  return (
    <motion.div
      key={i}
      className={`core-card ${i % 2 ? "reverse" : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="core-text">
        <p style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "left" }}>
          <strong>{lead}</strong> {rest}
        </p>
      </div>
      <div className="core-img">
        <img src={coreImages[i]} alt={`Core Value Illustration ${i + 1}`} />
      </div>
    </motion.div>
  );
})}
      </motion.div>
     
      <motion.div
        className="quality-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
       <h2><b style={{color: "orange"}}>UNIQUE</b> <b style={{color: "navy"}}>PROFILE</b></h2>
        <motion.p
        className="about-para"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
          <p style={{ fontSize: "2rem", padding:"0 4rem" }}><b style={{color: "orange"}}>CBA </b> <b style={{color: "navy"}}>Energy </b> provides customers with a unique solutions for your projects</p>
      </motion.p>
      <motion.ul
        className="about-list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={listContainer}
      >
        {uniqueItems.map((text, i) => (
          <motion.li key={i} variants={listItem}>
            {text}
          </motion.li>
        ))}
      </motion.ul>
      </motion.div>
      

      <motion.div
        className="quality-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2><b style={{color: "orange"}}>KEY</b> <b style={{color: "navy"}}>DIFFERENTIATORS</b></h2>
        <motion.p
        className="about-para"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
       <p style={{ fontSize: "2rem", padding: "0 4rem" }}><b style={{color: "orange"}}>CBA</b> <b style={{color: "navy"}}>Energy</b> listens closely to understand your needs, then taps our global network and industry expertise to deliver precisely the value you seek.</p>
      </motion.p>
      {["Our people", "Our knowledge"].map((sub, i) => (
        <motion.div
          key={i}
          className="subsection"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h5 className="subheading">{sub}</h5>
          <p>
            {sub === "Our people"
              ? "We cultivate local talent and equip them with global insights."
              : "Our specialists and knowledge-management platform keep you up to date with the latest market intelligence."}
          </p>
        </motion.div>
      ))}
      </motion.div>
      

      <motion.div
        className="quality-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2> <b style={{color: "orange"}}>OUR</b> <b style={{color: "navy"}}>STRATEGY</b></h2>
      </motion.div>
      <motion.ul
        className="about-list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={listContainer}
      >
        {strategyItems.map((text, i) => (
          <motion.li key={i} variants={listItem}>
            {text}
          </motion.li>
        ))}
      </motion.ul>

      <footer className="product-footer">
        <div className="product-footer__inner">
          <p>© 2025 CBA Energy | Website by Infimech</p>
        </div>
      </footer>

      <motion.button
        className="back-to-top-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </motion.button>
    </main>
  );
}
