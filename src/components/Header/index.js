import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, FileText, User, XCircle } from 'react-feather';
import logo from '../../assets/images/OTROC Merienda avec logo.png';
import Nav from './Nav';
import FormLogin from '../FormLogin';
import { actionGetAllCategories } from '../../actions/categories';
import { actionGetUserProfil, actionLogout } from '../../actions/user';

function Header() {
  const dispatch = useDispatch();
  const categoriesArray = useSelector((state) => state.categories.categoriesArray);
  const categoriesLoaded = useSelector((state) => state.categories.categoriesLoaded);
  const navBarRerender = useSelector((state) => state.categories.navBarRerender);
  const isLogged = useSelector((state) => state.user.isLogged);
  useEffect(() => {
    dispatch(actionGetAllCategories());
  }, []);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    dispatch(actionLogout());
    localStorage.removeItem('activeSession');
  };

  const handleClickProfil = () => {
    dispatch(actionGetUserProfil());
  };

  return (
    <header className="header">
      <div className="header-nav">
        <Link className="header-addAnnoucement" to="/annonces/ajouter">
          <p>Nouv O'Troc</p>
        </Link>
        <div className="header-logo">
          <Link className="header-Link" to="/"><img src={logo} alt="Logo OTroc" /></Link>
        </div>
        {location.pathname === '/inscription' || <FormLogin isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />}
        {!isLogged
          ? (
            <div className="header-container-icon">
              <div className={isLoginOpen ? 'toggle-loginForm--hidden' : 'toggle-loginForm'} onClick={() => setIsLoginOpen(!isLoginOpen)}>
                <button className="login" type="button">
                  <CheckCircle size={24} color="#398782" />
                  <span className="header-span">Connexion</span>
                </button>
              </div>
              <div className={isLoginOpen ? 'toggle-loginForm--hidden' : 'toggle-loginForm'}>
                <Link to="/inscription">
                  <button className="login" type="button">
                    <FileText size={24} color="#398782" />
                    <span className="header-span">S'inscrire</span>
                  </button>
                </Link>
              </div>
            </div>
          )
          : (
            <div className="header-container-icon">
              <div className="toggle-loginForm">
                <Link to="/profil">
                  <button className="login" type="button" onClick={handleClickProfil}>
                    <User size={24} color="#398782" />
                    <span className="header-span">Mon Profil</span>
                  </button>
                </Link>
              </div>
              <div className="toggle-loginForm">
                <button className="login" type="button" onClick={handleLogout}>
                  <XCircle size={24} color="#398782" />
                  <span className="header-span">Déconnexion</span>
                </button>
              </div>
            </div>
          )}
      </div>
      {
        categoriesLoaded
        && <Nav categoriesArray={categoriesArray} navBarRerender={navBarRerender} />
      }
    </header>
  );
}

export default Header;
