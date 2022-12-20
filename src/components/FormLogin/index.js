import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { User } from 'react-feather';
import PropTypes from 'prop-types';
import {
  actionChangeCustomInputUser,
  actionCheckLogin,
  actionGetUserProfil,
  actionLogout,
} from '../../actions/user';
import CustomInput from '../CustomInput';

function FormLogin({ isLoginOpen }) {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const isLogged = useSelector((state) => state.user.isLogged);

  const handleChangeInput = (newValue, inputName) => {
    dispatch(actionChangeCustomInputUser(newValue, inputName));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actionCheckLogin());
  };

  const handleLogout = () => {
    dispatch(actionLogout());
    localStorage.removeItem('activeSession');
  };

  const handleClickProfil = () => {
    dispatch(actionGetUserProfil());
  };
  console.log(isLoginOpen);
  return (
    <form className={isLoginOpen ? 'formLogin' : 'formLogin formLogin--closed'} onSubmit={handleSubmit}>
      {
        !isLogged
          ? (
            <>
              <div className="formLogin-inputs">
                <CustomInput className="formLogin-inputs-input" name="email" type="email" placeholder="email" value={email} onChange={handleChangeInput} />
                <CustomInput className="formLogin-inputs-input" name="password" type="password" placeholder="Mot de passe" value={password} onChange={handleChangeInput} />
              </div>
              <div className="formLogin-login">
                <User size={16} />
                <button className="formLogin-login-button" type="submit">Connexion</button>
              </div>
            </>
          )
          : (<div className="formLogin-buttons"><Link to="/profil"><button className="formLogin-buttons-myProfil" type="button" onClick={handleClickProfil}>Mon profil</button></Link><button className="formLogin-buttons-disconnect" type="button" onClick={handleLogout}>Déconnexion</button></div>)
      }
    </form>
  );
}

FormLogin.propTypes = {
  isLoginOpen: PropTypes.bool.isRequired,
};

export default FormLogin;
