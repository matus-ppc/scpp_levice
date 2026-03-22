import { motion } from 'framer-motion';
import illustration1 from '../assets/illustration1.png';
import './About.css';

function About() {
  return (
    <div className="page-wrapper">
      <section className="bg-secondary section">
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            O nás
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '1.2rem', opacity: 0.8 }}
          >
            Súkromné centrum poradenstva a prevencie (SCPP) v Leviciach je miestom, kde odbornosť kráča ruka v ruke s hlboko ľudským prístupom. Sme váš spoľahlivý partner pri prekonávaní prekážok, ktoré život priniesol deťom, žiakom či študentom.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <h2>Naša misia a hodnoty</h2>
          </div>
          <div className="about-grid" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
              <div className="about-text">
                <p>
                  Veríme, že každé dieťa má v sebe obrovský potenciál. Niekedy je však obklopené prekážkami — či už v učení, správaní, komunikácii alebo v rodinnom kruhu —, ktoré mu bránia naplno sa prejaviť. Našou úlohou je pomôcť vám tieto prekážky spoznať, porozumieť im a nájsť cestu, ako ich zvládnuť.
                </p>
                <p>
                  Naše centrum je budované na štyroch základných pilieroch:
                </p>
                <ul style={{ marginTop: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)', paddingLeft: 'var(--spacing-lg)' }}>
                  <li><strong>Bezpečie a Dôvera:</strong> Vytvárame prostredie bez posudzovania, kde sa môže každý bez obáv otvoriť.</li>
                  <li><strong>Tímová spolupráca:</strong> Problémy nevnímame oddelene, naši odborníci (psychológovia, špeciálni pedagógovia, logopédi) spájajú svoje sily v prospech dieťaťa.</li>
                  <li><strong>Individuálny prístup:</strong> Uvedomujeme si, že neexistujú dve rovnaké deti a neexistuje jeden univerzálny návod.</li>
                  <li><strong>Podpora celej rodiny:</strong> Pomoc dieťaťu často znamená aj pomoc a správne nasmerovanie dospelých v jeho okolí.</li>
                </ul>
              </div>
              <motion.div 
                className="about-visual"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img src={illustration1} alt="Rovnováha a potenciál" className="about-image" />
              </motion.div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default About;
