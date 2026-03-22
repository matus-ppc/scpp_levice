import ServiceCardsSection from '../components/ServiceCardsSection';
import FlyersSection from '../components/FlyersSection';
import ContactSection from '../components/ContactSection';

function Services() {
  return (
    <div className="page-wrapper">
      <section className="page-header bg-primary section" style={{ color: 'var(--color-white)' }}>
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h1 style={{ color: 'var(--color-white)' }}>Služby a odborná pomoc</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
            Poskytujeme komplexnú podporu v oblasti psychológie, špeciálnej a liečebnej pedagogiky, logopédie a krízovej intervencie.
          </p>
        </div>
      </section>

      <ServiceCardsSection />

      <FlyersSection />
      
      <ContactSection />
    </div>
  );
}

export default Services;
