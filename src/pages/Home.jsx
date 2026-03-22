import HeroSection from '../components/HeroSection';
import ServiceCardsSection from '../components/ServiceCardsSection';
import ProcessSection from '../components/ProcessSection';
import TeamCardsSection from '../components/TeamCardsSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <ServiceCardsSection />
      <ProcessSection />
      <TeamCardsSection limit={3} />
      <FaqSection />
      <ContactSection />
    </div>
  );
}

export default Home;
