import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/OTROC-logo.png';
import Nav from './Nav';
import FormLogin from '../FormLogin';
import { actionGetAllCategories } from '../../actions/categories';
import { User } from 'react-feather';

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
        <Link className="header-Link" to="/"><img src={logo} alt="Logo OTroc" /></Link>
        {location.pathname === '/inscription' || <FormLogin isLoginOpen={isLoginOpen} />}
        <div className="toggle-loginForm">
          <button onClick={() => setIsLoginOpen(!isLoginOpen)} type="button"><User size={16} /></button>
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
