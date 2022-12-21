import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { Link, useLocation } from 'react-router-dom';
import { User, UserPlus } from 'react-feather';
import logo from '../../assets/images/OTROC-logo.png';
import Nav from './Nav';
import FormLogin from '../FormLogin';
import { actionGetAllCategories } from '../../actions/categories';

function Header() {
  const dispatch = useDispatch();
  const categoriesArray = useSelector((state) => state.categories.categoriesArray);
  const categoriesLoaded = useSelector((state) => state.categories.categoriesLoaded);
  const navBarRerender = useSelector((state) => state.categories.navBarRerender);
  useEffect(() => {
    dispatch(actionGetAllCategories());
  }, []);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();
  return (
    <header className="header">
      <div className="header-nav">
        <Link className="header-addAnnoucement" to="/annonces/ajouter">
          <p>Deposer une annonce</p>
        </Link>
        <Link className="header-Link" to="/"><img src={logo} alt="Logo OTroc" /></Link>
        {location.pathname === '/inscription' || <FormLogin isLoginOpen={isLoginOpen} />}
        <div className="header-container-login-signUp">
          <div className="toggle-loginForm" onClick={() => setIsLoginOpen(!isLoginOpen)}>
            <button className="login" type="button">
              <User size={24} />
              <span className="header-span">Se connecter</span>
            </button>
          </div>
          <div className="toggle-loginForm">
            <Link to="/inscription">
              <button className="login" type="button">
                <UserPlus size={24} />
                <span className="header-span">S'inscrire</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {
        categoriesLoaded
        && <Nav categoriesArray={categoriesArray} navBarRerender={navBarRerender} />
      }
    </header>
  );
}

export default Header;
