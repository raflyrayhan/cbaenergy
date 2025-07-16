import React, { useState, useEffect } from 'react';

const logos = [
  { src: '/img/clients/tripatra.png', alt: 'Tripatra' },
  { src: '/img/clients/KPI.png', alt: 'KPI' },
  { src: '/img/clients/reka.jpg', alt: 'Reka Energi' },
  { src: '/img/clients/timas.jpg', alt: 'Timas Suplindo' },
  { src: '/img/clients/casale.jpg', alt: 'Casale' },
  { src: '/img/clients/pkt.jpg', alt: 'Pupuk Kaltim' },
  { src: '/img/clients/pusri.jpg', alt: 'Pusri'},
];

export default function ClientsCarousel({ interval = 4000 }) {
  const [current, setCurrent] = useState(0);
  const lastIndex = logos.length - 1;

  // setiap `interval` naik index, lalu wrap ke 0
  useEffect(() => {
    const ticker = setInterval(() => {
      setCurrent(prev => (prev === lastIndex ? 0 : prev + 1));
    }, interval);
    return () => clearInterval(ticker);
  }, [lastIndex, interval]);

const trackLogos = [...logos, ...logos];

  return (
  <div className="clients-carousel">
    <div className="clients-track">
      {trackLogos.map((logo,i) => (
        <div className="client-item" key={i}>
          <img src={logo.src} alt={logo.alt}/>
        </div>
      ))}
    </div>
  </div>
);
}

