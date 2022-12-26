import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { User } from 'react-feather';
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
    <form className="login-page" onSubmit={handleSubmit}>
      <div className="login-page-inputs">
        <CustomInput className="login-page-inputs-input" name="email" type="email" placeholder="email" value={email} onChange={handleChangeInput} />
        <CustomInput className="login-page-inputs-input" name="password" type="password" placeholder="Mot de passe" value={password} onChange={handleChangeInput} />
      </div>
      <div className="login-page-login">
        <User size={16} />
        <button className="login-page-login-button" type="submit">Connexion</button>
      </div>
    </form>
  );
}

export default LoginPage;
