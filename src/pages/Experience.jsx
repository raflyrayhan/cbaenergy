import React from "react";
import "./experiencepage.css";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function ExperiencePage() {
  return (
    <main id="experience-page">
      <section className="experience-hero">
        <div className="experience-overlay" />
        <div className="experience-hero-content">
          <h1>Our Experience</h1>
          <p>Delivering reliable engineering solutions across industries</p>
        </div>
        <div className="exp-diagonal-divider" />
      </section>

      <motion.div
        className="exp-section-header"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        All Projects
      </motion.div>
      <motion.div
        className="exp-table-container"
        variants={projectVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Project Name</th>
              <th>Project Location</th>
              <th>Client</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Mechanical Connector</td><td>Marunda, Jakarta</td><td>AP / PHE Offshore North West Java</td></tr>
        <tr><td>2</td><td>Engineering, Procurement and Construction regarding Call Out Fabrication and Construction Service (Main Contract No. 902937)</td><td>Surabaya</td><td>Bahas Rekasatya / Santos</td></tr>
        <tr><td>3</td><td>Gas Metering System</td><td>Lippo Cikarang, Bekasi</td><td>TOP F / PLN UBE Batam</td></tr>
        <tr><td>4</td><td>Reclothing filter dimension: dia 168.4xL.870mm</td><td>Lippo Cikarang, Bekasi</td><td>TOP F / ConocoPhillips</td></tr>
        <tr><td>5</td><td>Indorama Synthetics Order MRL-130219-01-001</td><td>Lippo Cikarang, Bekasi</td><td>TOP F / Indorama</td></tr>
        <tr><td>6</td><td>Line Pipe Accessories</td><td>Marunda, Jakarta</td><td>AP / PHE Offshore North West Java</td></tr>
        <tr><td>7</td><td>Raw water storage tank, diesel oil storage tank, chilled water buffer tank</td><td>Lippo Cikarang, Bekasi</td><td>TOP F / PT P&G Indonesia</td></tr>
        <tr><td>8</td><td>Pipe interconnection fabrication & installation PT.P&G 80:13003944</td><td>Lippo Cikarang, Bekasi</td><td>TOP F / PT P&G Indonesia</td></tr>
        <tr><td>9</td><td>Project Steel Bulk Frame</td><td>Lippo Cikarang, Bekasi</td><td>TOP F / PT Asahimas Chemical</td></tr>
        <tr><td>10</td><td>Steel Bulk Frame</td><td>Lippo Cikarang, Bekasi</td><td>TOP F / PT Asahimas Chemical</td></tr>
        <tr><td>11</td><td>Fabrication of Housing BSTR-5403 A/B (2 Unit)</td><td>Lippo Cikarang, Bekasi</td><td>TOP F / PT Asahimas Chemical</td></tr>
        <tr><td>12</td><td>Fabrication of Housing BSTR-5402 A/B (2 Unit)</td><td>Lippo Cikarang, Bekasi</td><td>TOP F / PT Asahimas Chemical</td></tr>
        <tr><td>13</td><td>Deck Water Seal SO Dimension; Scrubber Dimension</td><td>Lippo Cikarang, Bekasi</td><td>TOP F / PHE Offshore North West Java</td></tr>
        <tr><td>14</td><td>Operation and Maintenance - Diesel Power Module Capacity 11.2 MW (2 Years)</td><td>Gunung Sitoli, Sumatera Utara</td><td>APR Energy (Singapore) Pte Ltd</td></tr>
        <tr><td>15</td><td>Perluasan Jetty Muara Tuhup</td><td>Surabaya</td><td>PT Bahas Rekasatya</td></tr>
        <tr><td>16</td><td>OCTG Package for Geothermal</td><td>Bandung</td><td>WMI / PT Teknosatria Energi Geothermal</td></tr>
        <tr><td>17</td><td>Pipe, Structural, 30In,25.4MM, LSAW, S355, VAR, 12</td><td>Balikpapan</td><td>WMI / Total E&P Indonesie</td></tr>
        <tr><td>18</td><td>Pipe Coating, Anode Installation, PQT</td><td>Batam / Surabaya</td><td>BPI / PT Kalimantan Jawa Gas</td></tr>
        <tr><td>19</td><td>JIB Crane</td><td>Marunda, Jakarta</td><td>AP / PHE Offshore North West Java</td></tr>
        <tr><td>20</td><td>Pipe Fitting and Connector</td><td>Marunda, Jakarta</td><td>AP / PHE Offshore North West Java</td></tr>
        <tr><td>21</td><td>Pipe Bend 12" & 14"</td><td>Marunda, Jakarta</td><td>AP / PHE Offshore North West Java</td></tr>
        <tr><td>22</td><td>Purchase of Coated Linepipe and Riser for PHE-24 Platform</td><td>Lamongan Shore Base</td><td>AP / PHE West Madura Offshore</td></tr>
        <tr><td>23</td><td>Coating Work Fabrication Services for Subsea Linepipe 10" FPRO-ECOM</td><td>Batam</td><td>AP / PHE Offshore North West Java</td></tr>
        <tr><td>24</td><td>Pipe Bend 12.75" OD</td><td>Marunda, Jakarta</td><td>AP / PHE Offshore North West Java</td></tr>
        <tr><td>25</td><td>Pipe Structural LSAW, S355, VAR, 12M</td><td>Balikpapan</td><td>WMI / Total E&P Indonesie</td></tr>
        <tr><td>26</td><td>Provision of Portable Air Compressor</td><td>Tanjung Priok</td><td>PT AKR Corporindo Tbk</td></tr>
        <tr><td>27</td><td>Fully Foldable Crane, DNV Classification</td><td>Batam</td><td>Songa Offshore (S) Pte. Ltd</td></tr>
        <tr><td>28</td><td>Double Girder Overhead Crane</td><td>Karimun</td><td>PT Saipem Indonesia</td></tr>
        <tr><td>29</td><td>Construction & Installation Work Package - 6 Units x 5.75 MW MHI Gas Generator System c/w Associated Facilities</td><td>Lampung</td><td>PT Berkat Manunggal Jaya</td></tr>
        <tr><td>30</td><td>Pipe Coating, Anode Installation, PQT</td><td>Batam</td><td>Bakrie Pipe Industries</td></tr>
        <tr><td>31</td><td>Actuated on-off Valves for FPSO Kaombo</td><td>Cowdenbeath, UK</td><td>PT Saipem Indonesia</td></tr>
        <tr><td>32</td><td>Supply of 4 Lots Primary Structural Steels for FPSO Kaombo Project</td><td>Karimun</td><td>PT Saipem Indonesia</td></tr>
        <tr><td>33</td><td>Pengadaan Fabrikasi Filter & Skid</td><td>Surabaya</td><td>PT Bahas Rekasatya</td></tr>
        <tr><td>34</td><td>Provision of Compressor, Wellhead Package Unit</td><td>Surabaya</td><td>PT Bahas Rekasatya</td></tr>
        <tr><td>35</td><td>Provision of Operation Facilities Minor Construction and Civil Improvement Services for Pangkah Facility</td><td>Gresik</td><td>AP / Saka (Indonesia-Pangkah) Limited</td></tr>
        <tr><td>36</td><td>Actuated Ball Valves, Control Valves, Insulating Joint</td><td>Karawang</td><td>PT Multi Nitrotama Kimia</td></tr>
        <tr><td>37</td><td>Enviroquip Rapid Sludge Removal Clarifier, Bespoke Traveling Band Screen</td><td>Indramayu</td><td>PT Biothane Asia Pacific</td></tr>
        <tr><td>38</td><td>Provision of Engineering, Procurement, Construction and Commissioning (EPCC) Phase II of Onshore Pipeline Tie-In for Bukit Tua Development Project, Ketapang PSC, East Java, Indonesia</td><td>Gresik</td><td>AP / PC Ketapang II ltd</td></tr>
        <tr><td>39</td><td>ANC Korea Butterfly Valve Concentric design, Water type (SRS 710), Bi-directional</td><td>Minahasa Selatan, Sulawesi Utara</td><td>PT. Delapan Pintu Utama</td></tr>
        <tr><td>40</td><td>Offshore Gas Production Facilities (GPF) Supply of Coated Linepipe Contract for Tangguh Expansion Project</td><td>Papua</td><td>AP / BP Berau</td></tr>
        <tr><td>41</td><td>Sala Self Rescue Device, Petzl Volt Harness, Portable Gas Compressor</td><td>Karimun</td><td>PT Saipem Indonesia</td></tr>
        <tr><td>42</td><td>Pengadaan Mechanical Connector Clamp: Typer Pipe Clamper</td><td>Jakarta</td><td>AP / PT Pertamina (Persero) Jasa Teknik PMS & Niaga</td></tr>
        <tr><td>43</td><td>EPCC of 50 KWp Ballasted Rooftop On-Grid Solar PV</td><td>Jakarta</td><td>PT Energia Prima Nusantara (Astra Power)</td></tr>
        <tr><td>44</td><td>Provision of SO2 Scrubber Vessel Replacement Services (Engineering, Procurement, Fabrication, and Installation)</td><td>Gresik</td><td>AP / Saka (Indonesia-Pangkah) Limited</td></tr>
        <tr><td>45</td><td>Jasa Pengadaan Listrik PLN 3 MW dan Instalasi di Unit Bisnis Pertambangan Bauksit Tayan</td><td>Tayan, Kalimantan</td><td>AP / PT Antam</td></tr>
        <tr><td>46</td><td>Jasa Pekerjaan Pembuatan Atap dan Penambahan Lantai Lapangan Tenis di Unit Bisnis Pertambangan Bauksit Tayan</td><td>Tayan, Kalimantan</td><td>AP / PT Antam</td></tr>
        <tr><td>47</td><td>Provision of Telescopic Crane</td><td>Gresik</td><td>AP / Saka (Indonesia-Pangkah) Limited</td></tr>
          </tbody>
        </table>
      </motion.div>

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
