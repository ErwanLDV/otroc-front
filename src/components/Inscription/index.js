import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import CustomInput from '../CustomInput';
import { actionChangeCustomInput, actionUserIncscription } from '../../actions/user';

function Inscription() {
  const dispatch = useDispatch();
  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);
  const pseudo = useSelector((state) => state.user.pseudo);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const zipcode = useSelector((state) => state.user.zipcode);
  const phoneNumber = useSelector((state) => state.user.phoneNumber);

  const handleChangeInput = (newValue, inputName) => {
    dispatch(actionChangeCustomInput(newValue, inputName));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actionUserIncscription(
      firstname,
      lastname,
      pseudo,
      email,
      password,
      zipcode,
      phoneNumber,
    ));
  };

  return (
    <form className="form-inscription" onSubmit={handleSubmit}>
      <p className="form-inscription-p">Créez un compte</p>
      <div>
        <CustomInput onChange={handleChangeInput} value={firstname} name="firstname" type="text" placeholder="Prénom" required />
        <CustomInput onChange={handleChangeInput} value={lastname} name="lastname" type="text" placeholder="Nom" required />
      </div>
      <CustomInput onChange={handleChangeInput} value={pseudo} name="pseudo" type="text" placeholder="Pseudo" required />
      <CustomInput onChange={handleChangeInput} value={email} name="email" type="email" placeholder="Votre adresse email" required />
      <CustomInput onChange={handleChangeInput} value={password} name="password" type="text" placeholder="Mot de passe" required />
      <CustomInput onChange={handleChangeInput} value={zipcode} name="zipcode" maxLength="5" type="text" placeholder="Code postal" required />
      <div>
        <CustomInput onChange={handleChangeInput} value={phoneNumber} name="phoneNumber" maxLength="10" type="text" placeholder="Numero de telephone*" />
      </div>
      <button type="submit">Valider</button>
      <p className="form-inscription-p">*non obligatoire</p>

    </form>
  );
}

export default Inscription;
