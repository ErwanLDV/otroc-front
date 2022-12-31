/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomInput from '../../CustomInput';
import {
  actionChangeCustomInputUser, actionGetUserProfil, actionPutUserProfil,
} from '../../../actions/user';
import PopUp from '../../PopUp';
import { actionChangeRedirection } from '../../../actions/utils';

function PersonalInformation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirection = useSelector((state) => state.utils.redirection);

  useEffect(() => {
    dispatch(actionGetUserProfil());
  }, []);

  useEffect(() => {
    if (redirection.bool) {
      navigate(redirection.path);
      dispatch(actionChangeRedirection(false));
    }
  }, [redirection.bool]);

  const firstname = useSelector((state) => state.user.currentUserProfil.firstname);
  const lastname = useSelector((state) => state.user.currentUserProfil.lastname);
  const pseudo = useSelector((state) => state.user.currentUserProfil.alias);
  const email = useSelector((state) => state.user.currentUserProfil.email);
  const zipcode = useSelector((state) => state.user.currentUserProfil.zipcode);
  const phoneNumber = useSelector((state) => state.user.currentUserProfil.phoneNumber);
  const messagePopUp = useSelector((state) => state.utils.messagePopUp);

  const handleChangeInput = (newValue, inputName) => {
    dispatch(actionChangeCustomInputUser(newValue, inputName, 'currentUserProfil'));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actionPutUserProfil());
  };

  return (
    <section>
      <form className="form-connection" onSubmit={handleSubmit}>
        <p className="form-connection-p">Mes informations personnelles</p>
        <div className="form-connection-container">
          <CustomInput onChange={handleChangeInput} className="form-connection-input" value={firstname} type="text" name="firstname" required />
          <label htmlFor="firstname">Prénom*</label>
        </div>
        <div className="form-connection-container">
          <CustomInput onChange={handleChangeInput} className="form-connection-input" value={lastname} type="text" name="lastname" required />
          <label htmlFor="lastname">Nom*</label>
        </div>
        <div className="form-connection-container">
          <CustomInput onChange={handleChangeInput} className="form-connection-input" value={email} type="text" name="email" required />
          <label htmlFor="email">Email*</label>
        </div>
        <div className="form-connection-container">
          <CustomInput onChange={handleChangeInput} className="form-connection-input" value={pseudo} type="text" name="alias" required />
          <label htmlFor="pseudo">Pseudo*</label>
        </div>
        <div className="form-connection-container">
          <CustomInput onChange={handleChangeInput} className="form-connection-input" maxLength="5" value={zipcode} type="zipcode" name="zipcode" />
          <label htmlFor="zipcode">Code postal*</label>
        </div>
        <div className="form-connection-container">
          <CustomInput onChange={handleChangeInput} className="form-connection-input" maxLength="10" value={phoneNumber || ''} type="phone" name="phoneNumber" />
          <label htmlFor="phoneNumber">Téléphone</label>
        </div>
        <div>
          <Link to="/profil/mes-informations/mot-de-passe">
            <button className="form-connection-button" type="button">changer le mot de passe</button>
          </Link>
        </div>
        <button className="form-connection-button" type="submit">Valider les changements</button>
        <PopUp className={messagePopUp ? 'popup' : 'popup-off'} />
      </form>
    </section>
  );
}

export default PersonalInformation;
