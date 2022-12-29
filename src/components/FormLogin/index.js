import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { User, X } from 'react-feather';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  actionChangeCustomInputUser,
  actionCheckLogin,
} from '../../actions/user';
import CustomInput from '../CustomInput';

function FormLogin({ isLoginOpen, setIsLoginOpen }) {
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

  // Close LoginForm when user is logged
  useEffect(() => {
    if (isLogged) {
      setIsLoginOpen(false);
    }
  }, [isLogged]);

  return (
    !isLogged && (
      <form className={isLoginOpen ? 'formLogin' : 'formLogin formLogin--closed'} onSubmit={handleSubmit}>
        <div className="formLogin-inputs">
          <CustomInput className="formLogin-inputs-input" name="email" type="email" placeholder="email" value={email} onChange={handleChangeInput} />
          <CustomInput className="formLogin-inputs-input" name="password" type="password" placeholder="Mot de passe" value={password} onChange={handleChangeInput} />
        </div>
        <div className="formLogin-login">
          <User size={16} />
          <button className="formLogin-login-button" type="submit">Connexion</button>
        </div>
        <button className="formLogin-login-button-close" type="button" onClick={() => setIsLoginOpen(!isLoginOpen)}> <X size="16" /> </button>
      </form>
    )
  );
}

FormLogin.propTypes = {
  isLoginOpen: PropTypes.bool.isRequired,
  setIsLoginOpen: PropTypes.func.isRequired,
};

export default FormLogin;
