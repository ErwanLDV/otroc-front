/* eslint-disable jsx-a11y/label-has-associated-control */
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  actionChangeCustomInputUser,
  actionCheckLogin,
} from '../../actions/user';
import CustomInput from '../CustomInput';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const isLogged = useSelector((state) => state.user.isLogged);

  const handleChangeInput = (newValue, inputName) => {
    dispatch(actionChangeCustomInputUser(newValue, inputName));
  };

  useEffect(() => {
    if (isLogged) {
      navigate('/');
    }
  }, [isLogged]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actionCheckLogin());
  };
  return (
    <form className="form-connection" onSubmit={handleSubmit}>
      <p className="form-connection-p">Connectez-vous</p>
      <div className="form-connection-container">
        <div className="form-connection-inputs">
          <div className="form-connection-container">
            <CustomInput className="form-connection-input" name="email" type="email" value={email} onChange={handleChangeInput} required />
            <label htmlFor="email">Votre adresse email</label>
          </div>
          <div className="form-connection-container">
            <CustomInput className="form-connection-input" name="password" type="password" value={password} onChange={handleChangeInput} required />
            <label htmlFor="password">Mot de passe</label>
          </div>
        </div>
        <div className="form-connection-login">
          <button className="form-connection-button" type="submit">Connexion</button>
        </div>
      </div>
    </form>
  );
}

export default LoginPage;
