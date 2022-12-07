import './style.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/OTROC-logo.png';
import Nav from './Nav';
import FormLogin from '../FormLogin';

function Header() {
  return (
    <header className="header">
      <div className="header-nav">
        <Link to="/login">Se connecter / s'inscrire</Link>
        <img src={logo} alt="Logo OTroc" />
        <FormLogin />
      </div>
      <Nav />
    </header>
  );
}

export default Header;
