import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  actionChangeCustomInputUser,
  actionCheckLogin,
  actionGetUserProfil,
  actionLogout,
} from '../../actions/user';
import CustomInput from '../CustomInput';

function FormLogin() {
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

  return (
    <form className="formLogin" onSubmit={handleSubmit}>
      {
        !isLogged
          ? (
            <>
              <div className="formLogin-inputs">
                <CustomInput name="email" type="email" placeholder="email" value={email} onChange={handleChangeInput} />
                <CustomInput name="password" type="password" placeholder="Mot de passe" value={password} onChange={handleChangeInput} />
              </div>
              <div>
                <button type="submit">Connexion</button>
              </div>
              <p>Pas encore inscrit?<Link to="/inscription">Cliquez ici</Link></p>
            </>
          )
          : (<div className="formLogin-buttons"><Link to="/profil"><button className="formLogin-buttons-myProfil" type="button" onClick={handleClickProfil}>Mon profil</button></Link><button className="formLogin-buttons-disconnect" type="button" onClick={handleLogout}>Déconnexion</button></div>)
      }
    </form>
  );
}

export default FormLogin;
