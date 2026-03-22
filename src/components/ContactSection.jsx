import { useState } from 'react';
import { motion } from 'framer-motion';
import WaveDivider from './WaveDivider';
import './ContactSection.css';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset after showing success briefly or leaving it
    }, 1500);
  };

  return (
    <section className="section contact-section bg-secondary" id="kontakt">
      <WaveDivider position="top" fillColor="#FFFFFF" />
      
      <div className="container contact-container">
        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Radi vás spoznáme. <br />Napíšte nám.</h2>
            <p className="contact-desc">
              Neodkladajte riešenie ťažkostí na neskôr. Sme tu pre vás a vaše dieťa. 
              Využite formulár na rýchle spojenie s nami, alebo nám priamo zavolajte.
            </p>
            
            <div className="contact-details">
              <div className="detail-item">
                <strong>Ordinačné hodiny:</strong>
                <p>Pondelok - Piatok: 08:00 - 16:00</p>
                <p><em>(Nutnosť dohodnúť si termín vopred)</em></p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Správa bola úspešne odoslaná!</h3>
                <p>Ďakujeme za dôveru. Náš odborník sa vám ozve v priebehu 24-48 hodín.</p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => setIsSubmitted(false)}
                >
                  Odoslať novú správu
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Meno rodiča / Zástupcu</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Napr. Jana Kováčová" />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="jana@priklad.sk" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefónne číslo</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+421 900 000 000" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="serviceType">V akej oblasti hľadáte pomoc?</label>
                  <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange} required>
                    <option value="" disabled>Vyberte oblasť...</option>
                    <option value="psychologia">Psychológia a Diagnostika</option>
                    <option value="pedagogika">Špeciálna a Liečebná pedagogika</option>
                    <option value="logopedia">Logopédia a Rozvoj reči</option>
                    <option value="kriza">Krízová intervencia a Terapie</option>
                    <option value="ine">Zatiaľ neviem posúdiť / Iné</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Krátky popis situácie</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required placeholder="Prosím, stručne popíšte s čím potrebujete pomôcť..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                  {isSubmitting ? 'Odosielam...' : 'Odoslať správu'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
