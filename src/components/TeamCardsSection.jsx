import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import './TeamCardsSection.css';

const teamMembers = [
  {
    id: 1,
    name: 'Mgr. Jana Ellerová',
    role: 'Riaditeľka, špeciálna pedagogička',
    image: 'https://www.poradnalevice.sk/wp-content/uploads/2025/06/j-ellerova.jpg'
  },
  {
    id: 2,
    name: 'Bc. Jana Bešinová',
    role: 'Asistentka',
    image: 'https://www.poradnalevice.sk/wp-content/uploads/2025/06/besinova-2.jpg'
  },
  {
    id: 3,
    name: 'Mgr. Zuzana Fazekašová',
    role: 'Psychologička',
    image: 'https://www.poradnalevice.sk/wp-content/uploads/2025/06/fazekasova.jpg'
  },
  {
    id: 4,
    name: 'Mgr. Oľga Jančová Koháryová',
    role: 'Psychologička',
    image: 'https://www.poradnalevice.sk/wp-content/uploads/2025/06/koharyova.jpg'
  },
  {
    id: 5,
    name: 'Mgr. Martin Šutliak',
    role: 'Klinický psychológ',
    image: 'https://www.poradnalevice.sk/wp-content/uploads/2025/06/sutliak.jpg'
  },
  {
    id: 6,
    name: 'Mgr. Paulína Bugárová',
    role: 'Špeciálna pedagogička',
    image: 'https://www.poradnalevice.sk/wp-content/uploads/2025/06/bugarova.jpg'
  },
  {
    id: 7,
    name: 'PaedDr. Zuzana Čuriková',
    role: 'Špeciálna pedagogička',
    image: 'https://www.poradnalevice.sk/wp-content/uploads/2025/06/curikova.jpg'
  },
  {
    id: 8,
    name: 'PaedDr. Monika Krammerová',
    role: 'Špeciálna pedagogička',
    image: 'https://www.poradnalevice.sk/wp-content/uploads/2025/06/krammerova.jpg'
  },
  {
    id: 9,
    name: 'Mgr. Michaela Číková',
    role: 'Špeciálna pedagogička',
    image: 'https://www.poradnalevice.sk/wp-content/uploads/2025/06/cikova.jpg'
  },
  {
    id: 10,
    name: 'Mgr. Zuzana Hajková',
    role: 'Liečebná pedagogička',
    image: 'https://www.poradnalevice.sk/wp-content/uploads/2025/06/hajkova.jpg'
  },
  {
    id: 11,
    name: 'Mgr. Martina Broškovičová',
    role: 'Logopedička',
    image: 'https://www.poradnalevice.sk/wp-content/uploads/2025/06/broskovicova.jpg'
  }
];

function TeamCardsSection({ limit }) {
  const displayedMembers = limit ? teamMembers.slice(0, limit) : teamMembers;
  return (
    <section className="section team-section bg-secondary" id="nas-tim">

      <div className="container">
        <div className="section-header text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Náš tím odborníkov
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Ľudský prístup a odbornosť sú pre nás kľúčové. Zoznámte sa s tými, ktorí budú sprevádzať vaše dieťa.
          </motion.p>
        </div>

        <div className="team-grid">
          {displayedMembers.map((member, index) => (
            <motion.div 
              className="team-card" 
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="team-avatar-wrapper">
                <img src={member.image} alt={member.name} className="team-avatar" loading="eager" />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <span className="team-role">{member.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {limit && (
          <div className="text-center mt-xl">
            <Link to="/nas-tim" className="btn btn-outline">Zobraziť všetkých odborníkov</Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default TeamCardsSection;
