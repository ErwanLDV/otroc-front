import './style.scss';
import logo from '../../assets/images/OTROC-logo.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo OTroc" />
      <div className="header-nav">
        <button type="button"> Nav</button>
        <button type="button"> Se connecter / s'inscrire</button>
      </div>
    </header>
  );
}

export default Header;
