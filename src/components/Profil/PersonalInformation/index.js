/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import CustomInput from '../../CustomInput';
import { actionChangeCustomInputUser, actionPutUserProfil } from '../../../actions/user';
import './style.scss';

function PersonalInformation() {
  const dispatch = useDispatch();

  const firstname = useSelector((state) => state.user.currentUserProfil.firstname);
  const lastname = useSelector((state) => state.user.currentUserProfil.lastname);
  const pseudo = useSelector((state) => state.user.currentUserProfil.alias);
  const email = useSelector((state) => state.user.currentUserProfil.email);
  const zipcode = useSelector((state) => state.user.currentUserProfil.zipcode);
  const phoneNumber = useSelector((state) => state.user.currentUserProfil.phoneNumber);

  const handleChangeInput = (newValue, inputName) => {
    dispatch(actionChangeCustomInputUser(newValue, inputName, 'currentUserProfil'));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actionPutUserProfil());
  };

  return (
    <section>
      <h2>Mes informations personnelles</h2>
      <form className="PersonalInformation-form" onSubmit={handleSubmit}>
        <div className="input-container-PersonalForm">
          <CustomInput onChange={handleChangeInput} className="PersonalInformation-form-input" value={firstname} type="text" name="firstname" required />
          <label htmlFor="firstname">Prénom*</label>
        </div>
        <div className="input-container-PersonalForm">
          <CustomInput onChange={handleChangeInput} className="PersonalInformation-form-input" value={lastname} type="text" name="lastname" required />
          <label htmlFor="lastname">Nom*</label>
        </div>
        <div className="input-container-PersonalForm">
          <CustomInput onChange={handleChangeInput} className="PersonalInformation-form-input" value={email} type="text" name="email" required />
          <label htmlFor="email">Email*</label>
        </div>
        <div className="input-container-PersonalForm">
          <CustomInput onChange={handleChangeInput} className="PersonalInformation-form-input" value={pseudo} type="text" name="alias" required />
          <label htmlFor="pseudo">Pseudo*</label>
        </div>
        <div className="input-container-PersonalForm">
          <CustomInput onChange={handleChangeInput} className="PersonalInformation-form-input" maxLength="5" value={zipcode} type="zipcode" name="zipcode" />
          <label htmlFor="zipcode">Code postal*</label>
        </div>
        <div className="input-container-PersonalForm">
          <CustomInput onChange={handleChangeInput} className="PersonalInformation-form-input" maxLength="10" value={phoneNumber || ''} type="phone" name="phoneNumber" />
          <label htmlFor="phoneNumber">Téléphone</label>
        </div>
        <div>
          {/* <label htmlFor="mot-de-passe">Mot de passe</label> */}
          <button className="PersonalInformation-form-button" type="button">changer le mot de passe</button>
        </div>
        <button className="PersonalInformation-form-button" type="submit">Valider les changements</button>
      </form>
    </section>
  );
}

export default PersonalInformation;
