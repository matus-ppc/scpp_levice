import { motion } from 'framer-motion';
import { Phone, Users, Star } from 'lucide-react';
import WaveDivider from './WaveDivider';
import './ProcessSection.css';

const steps = [
  {
    id: 1,
    title: 'Kontakt s nami',
    desc: 'Zavolajte nám alebo vyplňte krátky formulár. Vyberieme spoločne najvhodnejší termín.',
    icon: <Phone size={32} />
  },
  {
    id: 2,
    title: 'Prvé stretnutie a diagnostika',
    desc: 'V bezpečnom a priateľskom prostredí sa zoznámime, zistíme potreby vášho dieťaťa a navrhneme postup.',
    icon: <Users size={32} />
  },
  {
    id: 3,
    title: 'Riešenie a podpora',
    desc: 'Pravidelné terapie, cvičenia alebo konzultácie, ktoré prinesú úľavu a cielený rozvoj zručností.',
    icon: <Star size={32} />
  }
];

function ProcessSection() {
  return (
    <section className="section process-section">
      <WaveDivider position="top" fillColor="#F4F1EA" />
      <div className="container">
        <div className="section-header text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ako to u nás prebieha?
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Cesta k pomoci je u nás jednoduchá a transparentná. Sme tu pre vás od prvého kroku.
          </motion.p>
        </div>

          <div className="process-timeline">
            {steps.map((step, index) => (
              <motion.div 
                className="process-step" 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="step-card">
                  <div className="step-number">{step.id}</div>
                  <div className="step-icon">
                    {step.icon}
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
}

export default ProcessSection;
