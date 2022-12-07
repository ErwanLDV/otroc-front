import './style.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/OTROC-logo.png';
import Nav from './Nav';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo OTroc" />
      <div className="header-nav">
        {/* <button type="button">Nav</button> */}
        <Link to="/login">Se connecter / s'inscrire</Link>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
