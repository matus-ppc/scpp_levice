import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-primary">
      <div className="container footer-content">
        <div className="footer-col">
          <Link to="/" className="footer-logo">
            Poradňa <span>Levice</span>
          </Link>
          <p className="footer-desc">
            Súkromné centrum poradenstva a prevencie. Spolu nájdeme ten správny kľúč k duševnej pohode vášho dieťaťa.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Rýchle odkazy</h4>
          <ul className="footer-links">
            <li><Link to="/o-nas">O nás</Link></li>
            <li><Link to="/co-ponukame">Služby</Link></li>
            <li><Link to="/nas-tim">Náš tím</Link></li>
            <li><Link to="/pre-skoly">Pre školy</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Dokumenty</h4>
          <ul className="footer-links">
            <li><a href="#">Tlačivá na stiahnutie</a></li>
            <li><a href="#">Žiadosť o vyšetrenie</a></li>
            <li><a href="#">Ochrana osobných údajov</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Kontakt</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} />
              <span>J. Hollého 1, 934 01 Levice</span>
            </li>
            <li>
              <Phone size={18} />
              <a href="tel:+421905362219">+421 905 362 219</a>
            </li>
            <li>
              <Mail size={18} />
              <a href="mailto:kontakt@poradnalevice.sk">kontakt@poradnalevice.sk</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Poradňa Levice – Súkromné centrum poradenstva a prevencie. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
