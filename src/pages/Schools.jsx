import { motion } from 'framer-motion';
import ContactSection from '../components/ContactSection';
import WaveDivider from '../components/WaveDivider';
import illustration2 from '../assets/illustration2.png';
import './Schools.css';

function Schools() {
  return (
    <div className="page-wrapper">
      <section className="page-header bg-secondary section" style={{ paddingBottom: 'calc(var(--spacing-section) * 1.5)' }}>
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h1>Spolupráca so školami</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
            Sme partnermi pre materské, základné i stredné školy v regióne. Spoločne budujeme podporné a inkluzívne prostredie pre vzdelávanie všetkých žiakov.
          </p>
        </div>
        <WaveDivider position="bottom" fillColor="#FFFFFF" />
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <h2>Terénna činnosť a prednášky</h2>
          </div>
          <div className="schools-grid" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
              <motion.div 
                className="schools-visual"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img src={illustration2} alt="Ilustrácia pomoci deťom" className="schools-image" />
              </motion.div>
              <div className="schools-text">
                <p>
                  Naše služby sa neobmedzujú len na priestory poradne. Aktívne vstupujeme do škôl s cieľom priniesť našu odbornosť priamo tam, kde ju metodici, učitelia či žiaci bezprostredne potrebujú.
                </p>
                <ul>
                  <li><strong>Diagnostika v prostredí školy:</strong> Pozorovanie dieťaťa v školskom kolektíve a priame konzultácie s pedagógmi.</li>
                  <li><strong>Metodická podpora pedagógov:</strong> Poskytujeme konzultácie ohľadom začleňovania detí so ŠVVP (špeciálnymi výchovno-vzdelávacími potrebami).</li>
                  <li><strong>Prednášky a workshopy:</strong> Zastrešujeme edukáciu pedagogických zborov v témach psychohygieny, riešenia šikany a krízových situácií.</li>
                  <li><strong>Preventívne programy:</strong> Spolupracujeme pri budovaní pozitívnej klímy v triedach.</li>
                </ul>
              </div>
            </div>
        </div>
      </section>
      
      <ContactSection />
    </div>
  );
}

export default Schools;
