import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import WaveDivider from './WaveDivider';
import './FaqSection.css';

const faqs = [
  {
    id: 1,
    question: 'Potrebujem odporúčanie od lekára / výmenný lístok?',
    answer: 'Nie, do nášho centra nevyžadujeme žiadne odporúčanie od lekára ani výmenný lístok. Môžete nás kontaktovať priamo z vašej iniciatívy.'
  },
  {
    id: 2,
    question: 'Ako dlho sa čaká na termín?',
    answer: 'Snažíme sa reagovať čo najrýchlejšie. Pri akútnej krízovej intervencii hľadáme termín okamžite. V prípade štandardných diagnostík sa doba čakania pohybuje od 1 do 3 týždňov, v závislosti od kapacity konkrétneho odborníka.'
  },
  {
    id: 3,
    question: 'Je vyšetrenie u vás bezplatné?',
    answer: 'Naše centrum je súkromným zariadením, preto sú naše psychologické a pedagogické služby spoplatnené podľa aktuálneho cenníka. V cene je zahrnutý maximálne individuálny prístup bez časového tlaku.'
  },
  {
    id: 4,
    question: 'Ako vysvetliť dieťaťu, že ideme k psychológovi?',
    answer: 'Odporúčame prispôsobiť vysvetlenie veku dieťaťa. Menším deťom môžete povedať, že idete za "tetou/ujom, s ktorým sa budete hrať, kresliť a rozprávať, aby sa v škole/doma cítilo lepšie a aby veci išli ľahšie".'
  },
  {
    id: 5,
    question: 'Čo je potrebné priniesť na prvé stretnutie?',
    answer: 'Na prvé stretnutie je vhodné priniesť zdravotný záznam dieťaťa a akékoľvek predchádzajúce správy z odborných vyšetrení (lekárske, neurologické, psychologické), ak boli v minulosti realizované. Tiež odporúčame priniesť dieťaťu niečo malé na pitie/jedenie a obľúbenú hračku na spríjemnenie atmosféry.'
  }
];

function FaqSection() {
  const [openId, setOpenId] = useState(null);

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section faq-section" id="faq">
      <WaveDivider position="top" fillColor="#F4F1EA" />
      <div className="container faq-container">
        <div className="section-header text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Najčastejšie otázky rodičov
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Vybrali sme odpovede na otázky, ktoré nám pri prvom kontakte kladiete najčastejšie.
          </motion.p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div 
              key={faq.id} 
              className={`faq-item ${openId === faq.id ? 'open' : ''}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleOpen(faq.id)}
                aria-expanded={openId === faq.id}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={`faq-icon ${openId === faq.id ? 'rotated' : ''}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-answer-wrapper"
                  >
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
