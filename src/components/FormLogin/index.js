import { useDispatch, useSelector } from 'react-redux';
import { actionChangeCustomInput } from '../../actions/user';
import CustomInput from '../CustomInput';

function FormLogin() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  const handleChangeInput = (newValue, inputName) => {
    dispatch(actionChangeCustomInput(newValue, inputName));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <CustomInput name="email" type="email" placeholder="email" value={email} onChange={handleChangeInput} />
      <CustomInput name="password" type="password" placeholder="Mot de passe" value={password} onChange={handleChangeInput} />
      <button type="submit">Connexion</button>
      <p>Pas encore inscrit ? <a href="#">Cliquez ici</a></p>
    </form>
  );
}

export default FormLogin;
