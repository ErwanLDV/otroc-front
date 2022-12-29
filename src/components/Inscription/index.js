/* eslint-disable jsx-a11y/label-has-associated-control */
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../CustomInput';
import { actionChangeCustomInputUser, actionChangeRedirection, actionUserIncscription } from '../../actions/user';

function Inscription() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirection = useSelector((state) => state.user.redirection);
  const isLogged = useSelector((state) => state.user.isLogged);

  useEffect(() => {
    if (isLogged) {
      navigate('/');
    }
  }, [isLogged]);

  useEffect(() => {
    if (redirection.bool) {
      navigate(redirection.path);
      dispatch(actionChangeRedirection(false));
    }
  }, [redirection.bool]);

  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);
  const pseudo = useSelector((state) => state.user.pseudo);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const zipcode = useSelector((state) => state.user.zipcode);
  const phoneNumber = useSelector((state) => state.user.phoneNumber);

  const handleChangeInput = (newValue, inputName) => {
    dispatch(actionChangeCustomInputUser(newValue, inputName));
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
        <div className="input-container-inscriptionForm">
          <CustomInput className="form-inscription-input" onChange={handleChangeInput} value={firstname} name="firstname" type="text" required />
          <label htmlFor="Prénom">Prénom*</label>
        </div>
        <div className="input-container-inscriptionForm">
          <CustomInput className="form-inscription-input" onChange={handleChangeInput} value={lastname} name="lastname" type="text" required />
          <label htmlFor="Nom">Nom*</label>
        </div>
      </div>
      <div className="input-container-inscriptionForm">
        <CustomInput className="form-inscription-input" onChange={handleChangeInput} value={pseudo} name="pseudo" type="text" required />
        <label htmlFor="Pseudo">Pseudo*</label>
      </div>
      <div className="input-container-inscriptionForm">
        <CustomInput className="form-inscription-input" onChange={handleChangeInput} value={email} name="email" type="email" required />
        <label htmlFor="email">Votre adresse email*</label>
      </div>
      <div className="input-container-inscriptionForm">
        <CustomInput className="form-inscription-input" onChange={handleChangeInput} value={password} name="password" type="text" required />
        <label htmlFor="password">Mot de passe*</label>
      </div>
      <div className="input-container-inscriptionForm">
        <CustomInput className="form-inscription-input" onChange={handleChangeInput} value={zipcode} name="zipcode" maxLength="5" type="zipcode" required />
        <label htmlFor="zipcode">Code postal*</label>
      </div>
      <div className="input-container-inscriptionForm">
        <CustomInput className="form-inscription-input" onChange={handleChangeInput} value={phoneNumber || ''} name="phoneNumber" maxLength="10" type="phone" />
        <label htmlFor="phoneNumber">Numero de telephone</label>
      </div>
      <button className="form-inscription-button" type="submit">Valider</button>
    </form>
  );
}

export default Inscription;
