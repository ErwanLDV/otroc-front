import './style.scss';
import logo from '../../assets/images/OTROC-logo.png';
import FormLogin from './FormLogin';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo OTroc" />
      <div className="header-nav">
        <button type="button"> Nav</button>
        <button type="button"> Se connecter / s'inscrire</button>
      </div>
      <FormLogin />
    </header>
  );
}

export default Header;
