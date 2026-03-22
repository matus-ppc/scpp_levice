import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WaveDivider from './WaveDivider';
import heroImg from '../assets/hero.png';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      {/* Decorative child-friendly background elements */}
      <div className="hero-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="container hero-content" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-text">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Spolu nájdeme ten správny kľúč k duševnej pohode vášho dieťaťa.
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            S našou pomocou nájdete cestu k lepšiemu pochopeniu, rovnováhe a pohode, ktorá je základom šťastného a naplneného života.
          </motion.p>
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/o-nas" className="btn btn-primary">Zistite o nás viac</Link>
          </motion.div>
        </div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={heroImg} 
            alt="Ilustrácia rodiny" 
            className="hero-image" 
          />
        </motion.div>
      </div>
      
      <WaveDivider position="bottom" fillColor="#FFFFFF" />
    </section>
  );
}

export default HeroSection;
