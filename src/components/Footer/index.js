import { Link } from 'react-router-dom';
import './style.scss';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/mentions-legales">Mentions Légales</Link>
      <Link to="/cgu">Conditions Générales d'Utilisation</Link>
      <Link to="/contact">Nous contacter</Link>
      <Link to="/a-propos">A propos</Link>
    </footer>
  );
}

export default Footer;
