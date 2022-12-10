import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionChangeCustomInput, actionCheckLogin, actionLogout } from '../../actions/user';
import CustomInput from '../CustomInput';

function FormLogin() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const isLogged = useSelector((state) => state.user.isLogged);

  const handleChangeInput = (newValue, inputName) => {
    dispatch(actionChangeCustomInput(newValue, inputName));
    console.log('test');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actionCheckLogin());
  };

  const handleLogout = () => {
    dispatch(actionLogout());
  };

  return (
    <form onSubmit={handleSubmit}>
      {
        !isLogged
          ? (
            <>
              <div>
                <CustomInput name="email" type="email" placeholder="email" value={email} onChange={handleChangeInput} />
                <CustomInput name="password" type="password" placeholder="Mot de passe" value={password} onChange={handleChangeInput} />
              </div>
              <div>
                <button type="submit">Connexion</button>
              </div>
              <p>Pas encore inscrit?<Link to="/inscription">Cliquez ici</Link></p>
            </>
          )
          : (<><Link to="/profil"><button type="button">Mon profil</button></Link><button type="button" onClick={handleLogout}>Déconnexion</button></>)
      }
    </form>
  );
}

export default FormLogin;
