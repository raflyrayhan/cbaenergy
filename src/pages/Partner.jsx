import React from "react";
import { Gallery } from "../components/gallery";
import JsonData from "../data/data.json";
import PartnerHeader from "../components/partnerheader";
import "./partnerpage.css";

export default function Partner() {
  return (
    <main id="partner-page">
      <PartnerHeader />

      <Gallery data={JsonData.Gallery} />

      <footer className="product-footer">
        <div className="product-footer__inner">
          <p>© 2025 CBA Energy | Website by Infimech</p>
        </div>
      </footer>
    </main>
  );
}
