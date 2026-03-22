import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Puzzle, MessageCircle, HeartHandshake, ArrowRight, X } from 'lucide-react';
import './ServiceCardsSection.css';

const services = [
  {
    id: 1,
    title: 'Psychológia a Diagnostika',
    desc: 'Porozumenie prežívaniu, emóciám a správaniu. Pomáhame odhaliť hlbšie príčiny ťažkostí.',
    icon: <Brain size={40} className="service-icon-svg" />,
    color: 'var(--color-primary)',
    modalTitle: 'Psychológia a Diagnostika',
    modalContent: {
      intro: 'Psychológ poskytuje psychologickú diagnostiku detí a žiakov, psychologické poradenstvo, prevenciu, terapiu, krízovú intervenciu a odbornú pomoc deťom a žiakom.',
      sections: [
        {
          heading: 'Čo zahŕňa psychologická starostlivosť?',
          bullets: [
            'Psychodiagnostika a psychologické poradenstvo',
            'Pomoc pri rôznych psychických problémoch a v náročných životných situáciách',
            'Krízová intervencia — stabilizácia a podpora po krízovej udalosti',
            'Prevencia a terapia porúch správania, emócií a sociálnych vzťahov',
            'Vypracovanie odborných správ pre školy, úrady a súdy',
          ],
        },
        {
          heading: 'Komu pomáhame?',
          bullets: [
            'Deťom s problémami s rovesníkmi alebo so sociálnymi vzťahmi',
            'Deťom s nepozornosťou, poruchami správania alebo ťažkosťami v dokončovaní činností',
            'Rodinám v náročných životných situáciách alebo rozvode',
            'Deťom a žiakom s rôznymi psychickými ťažkosťami',
          ],
        },
      ],
    },
  },
  {
    id: 2,
    title: 'Špeciálna a Liečebná pedagogika',
    desc: 'Pomoc s učením, sústredením a rozvojom zručností pre lepšie zvládanie školských úloh.',
    icon: <Puzzle size={40} className="service-icon-svg" />,
    color: '#D4A373',
    modalTitle: 'Špeciálna a Liečebná pedagogika',
    modalContent: {
      intro: 'Špeciálna a liečebná pedagogika sa zameriava na diagnostiku a cielenú intervenčnú činnosť pre deti s rôznymi ťažkosťami vo vývine, učení alebo správaní.',
      sections: [
        {
          heading: 'Špeciálna pedagogika',
          bullets: [
            'Diagnostika čitateľských, pravopisných a matematických schopností',
            'Identifikácia špecifických porúch učenia: dyslexia, dysortografia, dyskalkúlia, dysgrafia',
            'Starostlivosť o deti z autistického spektra (PAS)',
            'Reedukačné a intervenčné programy šité na mieru',
            'Odporúčania k prideleniu pedagogického asistenta a podporných opatrení',
          ],
        },
        {
          heading: 'Liečebná pedagogika',
          bullets: [
            'Terapia hrou — filiálna terapia, sandplaying',
            'Expresívne terapie: arteterapia, muzikoterapia, dramatoterapia, psychomotorická terapia',
            'Bazálna stimulácia pre deti s viacnásobným postihnutím, PAS alebo DMO',
            'ABA terapia a alternatívna a augmentatívna komunikácia (AAK)',
            'Tréning fonematického uvedomovania podľa D. B. Eľkonina',
            'Feuersteinova metóda inštrumentálneho obohacovania (FIE)',
          ],
        },
      ],
    },
  },
  {
    id: 3,
    title: 'Logopédia a Rozvoj reči',
    desc: 'Podpora pri správnej výslovnosti a komunikácii. Odstraňovanie porúch reči a jazyka.',
    icon: <MessageCircle size={40} className="service-icon-svg" />,
    color: 'var(--color-accent)',
    modalTitle: 'Logopédia a Rozvoj reči',
    modalContent: {
      intro: 'Logopéd sa zaoberá poruchami reči a výslovnosti a ich nápravou. Poskytujeme komplexnú odbornú logopedickú starostlivosť deťom aj žiakom s narušenou komunikačnou schopnosťou.',
      sections: [
        {
          heading: 'Čo zahŕňa logopedická starostlivosť?',
          bullets: [
            'Logopedická diagnostika a vyšetrenie komunikačných schopností',
            'Terapia porúch výslovnosti a reči',
            'Rozvoj komunikačných a jazykových schopností',
            'Tréning fonematického uvedomovania podľa D. B. Eľkonina',
            'Tréning pre deti so sluchovým postihnutím',
            'Logopedické poradenstvo a prevencia pre rodičov a pedagógov',
          ],
        },
        {
          heading: 'Kedy sa na nás obrátiť?',
          bullets: [
            'Dieťa nechce rozprávať alebo má oneskorený vývoj reči',
            'Dieťa nesprávne vyslovuje alebo s ťažkosťami skladá vety',
            'Dieťa má problémy s porozumením alebo s komunikáciou s rovesníkmi',
            'Potrebujete odbornú správu pre školu alebo úrad',
          ],
        },
      ],
    },
  },
  {
    id: 4,
    title: 'Krízová intervencia a Terapie',
    desc: 'Bezpečný priestor v náročných životných situáciách. Sprevádzanie pri zvládaní traumy.',
    icon: <HeartHandshake size={40} className="service-icon-svg" />,
    color: '#E29578',
    modalTitle: 'Krízová intervencia a Terapie',
    modalContent: {
      intro: 'Krízová intervencia predstavuje podpornú sieť opatrení zameraných na stabilizáciu jednotlivca alebo skupiny, prinavrátenie pocitu bezpečia a posilnenie vlastných kompetencií pri zvládaní náročných situácií.',
      sections: [
        {
          heading: 'Čo zahŕňa krízová intervencia?',
          bullets: [
            'Stabilizácia a podpora bezprostredne po krízovej udalosti',
            'Práca s emóciami a zvládacími stratégiami',
            'Redukcia stresu a nastavenie ďalších opatrení',
            'Podpora rodín v rozvode a pri rodinných ťažkosťách',
            'Terapia traumy — individuálne aj skupinové sedenia',
          ],
        },
        {
          heading: 'Individuálne programy a terapie',
          bullets: [
            'Terapia hrou, filiálna terapia, sandplaying',
            'Expresívne terapie: arteterapia, muzikoterapia, psychomotorická terapia, dramatoterapia',
            'Práca s rodinnými vzťahmi',
            'Preventívne programy pre školy (KOZMO, Zippyho kamaráti, Kamaráti Jabĺčka)',
            'Programy pre stredné školy: sebaspoznanie, zvládanie záťaže, prevencia sebapoškodzovania',
          ],
        },
      ],
    },
  },
];

function ServiceModal({ service, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="service-modal-overlay"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
    >
      <motion.div
        className="service-modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.25 }}
      >
        <button className="service-modal-close" onClick={onClose} aria-label="Zavrieť">
          <X size={20} />
        </button>

        <div className="service-modal-header" style={{ borderColor: service.color }}>
          <div
            className="service-modal-icon"
            style={{ backgroundColor: `${service.color}18`, color: service.color }}
          >
            {service.icon}
          </div>
          <h2 className="service-modal-title">{service.modalTitle}</h2>
        </div>

        <div className="service-modal-body">
          <p className="service-modal-intro">{service.modalContent.intro}</p>

          {service.modalContent.sections.map((section, i) => (
            <div key={i} className="service-modal-section">
              <h3 className="service-modal-section-title" style={{ color: service.color }}>
                {section.heading}
              </h3>
              <ul className="service-modal-list">
                {section.bullets.map((bullet, j) => (
                  <li key={j}>
                    <span className="service-modal-bullet" style={{ backgroundColor: service.color }} />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="service-modal-footer">
            <p>Máte otázky? Kontaktujte nás na <a href="tel:+421905362219">0905 362 219</a> alebo <a href="mailto:kontakt@poradnalevice.sk">kontakt@poradnalevice.sk</a></p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ServiceCardsSection() {
  const [activeService, setActiveService] = useState(null);
  const closeModal = useCallback(() => setActiveService(null), []);

  return (
    <>
      <section className="section services-section" id="sluzby">
        <div className="container">
          <div className="section-header text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Čo ponúkame
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Sústreďujeme sa na celostný rozvoj dieťaťa. Odborníci u nás pracujú v tíme,
              aby vám zabezpečili komplexný pohľad a podporu, ktorú práve potrebujete.
            </motion.p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div
                  className="service-icon-wrapper"
                  style={{ backgroundColor: `${service.color}15`, color: service.color }}
                >
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <button
                  className="service-link"
                  onClick={() => setActiveService(service)}
                >
                  Zistiť viac <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeService && (
          <ServiceModal service={activeService} onClose={closeModal} />
        )}
      </AnimatePresence>
    </>
  );
}

export default ServiceCardsSection;
