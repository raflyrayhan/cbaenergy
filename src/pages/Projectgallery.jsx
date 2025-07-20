import React, { useState, useEffect, useRef } from "react";
import "./projectgallery.css";
import { timeline } from "@motionone/dom";

const projectData = [
  {
    title: "SO2 Gas Scrubber",
    category: "Instrumentation",
    description: "Modular skid fabrication for offshore platforms including structure, piping, and E&I.",
    images: [
      "img/projects/SAM_3805.JPG",
      "img/projects/SAM_4174.JPG",
      "img/projects/SAM_4197.JPG",
    ]
  },
  {
    title: "Saka - Civil Works",
    category: "Construction",
    description: "Skid-based high-pressure gas metering system for custody transfer.",
    images: [
      "img/projects/Saka_1.jpeg",
      "img/projects/Saka_2.jpeg",
      "img/projects/Saka_3.jpeg",
      "img/projects/Saka_4.jpeg",
      "img/projects/Saka_5.jpeg",
      "img/projects/Saka_6.jpeg",
      "img/projects/Saka_7.jpeg"
    ]
  },
  {
    title: "PHSS - VLP Gas Compressor",
    category: "Instrumentation",
    description: "Piping construction work for tank farm and utilities at refinery site.",
    images: [
      "img/projects/GasComp_1.jpeg",
      "img/projects/GasComp_2.jpeg",
    ]
  },
  {
    title: "PHE WMO - Coated Pipe",
    category: "Piping",
    description: "Fabrication of coated pipes for offshore pipeline projects.",
    images: [
      "img/projects/PHE_WMO_1.jpg",
      "img/projects/PHE_WMO_2.jpg",
      "img/projects/PHE_WMO_3.jpg",
      "img/projects/PHE_WMO_4.jpg",
      "img/projects/PHE_WMO_5.jpg"
    ]
  },
  {
    title: "Medco - Supply Beam",
    category: "Construction",
    description: "Structural beam supply for civil works.",
    images: [
      "img/projects/Medco_beam_1.jpg",
      "img/projects/Medco_beam_2.jpg",
      "img/projects/Medco_beam_3.jpg",
      "img/projects/Medco_beam_4.jpg",
      "img/projects/Medco_beam_5.jpg",
      "img/projects/Medco_beam_6.jpg",
      "img/projects/Medco_beam_7.jpg",
      "img/projects/Medco_beam_8.jpg",
      "img/projects/Medco_beam_9.jpg"
    ]
  }
];

export default function ProjectGallery() {
  const [currentIndex, setCurrentIndex] = useState(projectData.map(() => 0));
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [detailsOpen, setDetailsOpen] = useState(Array(projectData.length).fill(false));
  const containerRef = useRef(null);

  // Animasi masuk card
  useEffect(() => {
    if (!containerRef.current) return;
    const cards = Array.from(containerRef.current.querySelectorAll(".project-card-vertical"));
    if (!cards.length) return;
    timeline(
      cards.map((el, i) => [
        el,
        { opacity: [0, 1], transform: ["translateY(30px)", "translateY(0px)"] },
        { delay: i * 0.1, duration: 0.5, easing: "ease-out" }
      ])
    );
  }, [selectedCategory]);

  // Navigasi image
  const handleNext = (projectIdx) => {
    setCurrentIndex((prev) => {
      const newIndex = [...prev];
      newIndex[projectIdx] = (newIndex[projectIdx] + 1) % projectData[projectIdx].images.length;
      return newIndex;
    });
  };
  const handlePrev = (projectIdx) => {
    setCurrentIndex((prev) => {
      const newIndex = [...prev];
      newIndex[projectIdx] =
        (newIndex[projectIdx] - 1 + projectData[projectIdx].images.length) % projectData[projectIdx].images.length;
      return newIndex;
    });
  };

  // Filter kategori
  const categories = ["All", ...new Set(projectData.map(p => p.category))];
  const filteredProjects = selectedCategory === "All"
    ? projectData
    : projectData.filter(p => p.category === selectedCategory);

  // Modal
  const handleImgClick = (imgSrc, title) => {
    setModalImg(imgSrc);
    setModalTitle(title);
    setModalOpen(true);
  };
  const closeModal = (e) => {
    if (e.target.className === "modal-overlay" || e.target.className === "modal-close") {
      setModalOpen(false);
      setModalImg("");
      setModalTitle("");
    }
  };

  // Collapsible
  const toggleDetails = (idx) => {
    setDetailsOpen((prev) => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };

  return (
    <>
      {/* Modal Preview */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <img src={modalImg} alt={modalTitle} />
            <div className="modal-caption">{modalTitle}</div>
          </div>
        </div>
      )}

      {/* Gallery */}
      <div className="hero-banner-progal">
        <div className="hero-progal-overlay">
          <div className="hero-progal-content">
            <h1>Projects Gallery</h1>
            <p>Documentation of our finished projects.</p>
          </div>
        </div>
        <div className="hero-progal-diagonal-divider"></div>
      </div>
      <section className="project-gallery">
        <div className="filter-bar">
          <label htmlFor="category">Filter:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="vertical-stack" ref={containerRef}>
          {filteredProjects.map((project, idx) => {
            const globalIndex = projectData.findIndex(p => p.title === project.title);
            const currentImageIndex = currentIndex[globalIndex] ?? 0;

            return (
              <div className="project-card-vertical" key={idx}>
                <div className="image-slider-vertical">
                  {project.images.length > 0 ? (
                    <img
                      src={project.images[currentImageIndex]}
                      alt={`${project.title} - ${currentImageIndex + 1}`}
                      className="clickable-img"
                      onClick={() => handleImgClick(project.images[currentImageIndex], project.title)}
                    />
                  ) : (
                    <div className="no-image">No image available</div>
                  )}
                  {project.images.length > 1 && (
                    <>
                      <button
                        className="nav-button prev"
                        onClick={() => handlePrev(globalIndex)}
                      >
                        &#10094;
                      </button>
                      <button
                        className="nav-button next"
                        onClick={() => handleNext(globalIndex)}
                      >
                        &#10095;
                      </button>
                    </>
                  )}
                </div>

                <div className="project-info">
                  <h2>{project.title}</h2>
                  {/* Collapsible */}
                  <button className="see-details-btn" onClick={() => toggleDetails(globalIndex)}>
                    {detailsOpen[globalIndex] ? "Hide Details" : "See Details"}
                  </button>
                  <div className={`collapsible-details${detailsOpen[globalIndex] ? " open" : ""}`}>
                    <p>{project.description}</p>
                    {/* Bisa tambahkan info lain di sini */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
