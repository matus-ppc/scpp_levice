import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './FlyersSection.css';

import letak1 from '../assets/flyers/letak1.png';
import letak2 from '../assets/flyers/letak2.png';
import letak3 from '../assets/flyers/letak3.png';
import letak4 from '../assets/flyers/letak4.png';
import letak5 from '../assets/flyers/letak5.png';

const flyers = [
  { src: letak1, alt: 'Leták – Čo ponúkame (prehľad)' },
  { src: letak2, alt: 'Leták – Čo ponúkame (detaily)' },
  { src: letak3, alt: 'Leták – Novinka: Vyšetrenie psychomotorického vývinu' },
  { src: letak4, alt: 'Leták – Čo ponúkame (služby)' },
  { src: letak5, alt: 'Leták – Novinka: ADOS-2 diagnostika' },
];

function FlyersSection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % flyers.length);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + flyers.length) % flyers.length);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, goNext, goPrev]);

  return (
    <section className="flyers-section" id="letaky">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Naše letáky</h2>
          <p>Kliknite na leták pre zväčšenie</p>
        </motion.div>

        <div className="flyers-grid">
          {flyers.map((flyer, index) => (
            <motion.div
              key={index}
              className="flyer-card"
              onClick={() => openLightbox(index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="zoom-icon">
                <ZoomIn size={18} />
              </div>
              <img src={flyer.src} alt={flyer.alt} loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="lightbox-overlay"
            onClick={closeLightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Zavrieť"
            >
              <X size={20} />
            </button>

            <button
              className="lightbox-nav lightbox-prev"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Predchádzajúci"
            >
              <ChevronLeft size={24} />
            </button>

            <motion.div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
              key={lightboxIndex}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <img
                src={flyers[lightboxIndex].src}
                alt={flyers[lightboxIndex].alt}
              />
            </motion.div>

            <button
              className="lightbox-nav lightbox-next"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Nasledujúci"
            >
              <ChevronRight size={24} />
            </button>

            <div className="lightbox-counter">
              {lightboxIndex + 1} / {flyers.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default FlyersSection;
