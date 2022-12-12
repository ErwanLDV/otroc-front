/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CustomInput from '../../CustomInput';
import { actionChangeCustomInput, actionGetUserProfil } from '../../../actions/user';
import './style.scss';

function PersonalInformation() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetUserProfil());
  }, []);

  const firstname = useSelector((state) => state.user.profil.firstname);
  const lastname = useSelector((state) => state.user.profil.lastname);
  const pseudo = useSelector((state) => state.user.profil.alias);
  const email = useSelector((state) => state.user.profil.email);
  const zipcode = useSelector((state) => state.user.profil.zipcode);
  const phoneNumber = useSelector((state) => state.user.profil.phoneNumber);

  const handleChangeInput = (newValue, inputName) => {
    dispatch(actionChangeCustomInput(newValue, inputName));
  };

  // en attente route update API
  const handleSubmit = (event) => {
  //   event.preventDefault();
    // dispatch(action...quelquechose(
    //   firstname,
    //   lastname,
    //   pseudo,
    //   email,
    //   zipcode,
    //   phoneNumber,
    // ));
  };
  return (
    <section>
      <h2>Mes informations personnelles</h2>
      <form className="PersonalInformation-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">Prénom</label>
          <CustomInput onChange={handleChangeInput} className="PersonalInformation-form-input" value={firstname} type="text" name="firstname" placeholder="Prénom" />
        </div>
        <div>
          <label htmlFor="lastname">Nom</label>
          <CustomInput onChange={handleChangeInput} className="PersonalInformation-form-input" value={lastname} type="text" name="lastname" placeholder="Nom" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <CustomInput onChange={handleChangeInput} className="PersonalInformation-form-input" value={email} type="text" name="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="pseudo">Pseudo</label>
          <CustomInput onChange={handleChangeInput} className="PersonalInformation-form-input" value={pseudo} type="text" name="pseudo" placeholder="Pseudo" />
        </div>
        <div>
          <label htmlFor="zipcode">Code postal</label>
          <CustomInput onChange={handleChangeInput} className="PersonalInformation-form-input" value={zipcode} type="text" name="zipcode" placeholder="Code postal" />
        </div>
        <div>
          <label htmlFor="phoneNumber">Téléphone*</label>
          <CustomInput onChange={handleChangeInput} className="PersonalInformation-form-input" value={phoneNumber} type="text" name="phoneNumber" placeholder="Téléphone*" />
        </div>
        <div>
          <label htmlFor="mot-de-passe">Mot de passe</label>
          <button type="button">changer le mot de passe</button>
        </div>
        <button type="button">Valider les changements</button>
      </form>
    </section>
  );
}

export default PersonalInformation;
