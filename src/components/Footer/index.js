import { Link } from 'react-router-dom';
import './style.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link className="footer-link" to="/mentions-legales">Mentions Légales</Link>
        <Link className="footer-link" to="/cgu">Conditions Générales d'Utilisation</Link>
        <Link className="footer-link" to="/contact">Nous contacter</Link>
        <Link className="footer-link" to="/a-propos">A propos</Link>
      </div>
    </footer>
  );
}

export default Footer;
