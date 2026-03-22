import TeamCardsSection from '../components/TeamCardsSection';

function Team() {
  return (
    <div className="page-wrapper">
      <section className="page-header bg-secondary section">
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h1>Spoznajte náš tím</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
            Sme skupina nadšených odborníkov, ktorí sa neustále vzdelávajú a prepájajú svoje vedomosti pre to najlepšie riešenie pre vaše dieťa.
          </p>
        </div>
      </section>

      <TeamCardsSection />
    </div>
  );
}

export default Team;
