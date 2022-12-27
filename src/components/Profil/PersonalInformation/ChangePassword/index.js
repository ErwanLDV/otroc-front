import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import CustomInput from '../../../CustomInput';
import {
  actionChangeCustomInputUser,
  actionChangePassword,
  actionCheckLogin,
} from '../../../../actions/user';
import { useState } from 'react';

function ChangePassword() {
  const dispatch = useDispatch();
  const password = useSelector((state) => state.user.password);
  const [newPassword1, setNewPassword1] = useState(null);
  const [newPassword2, setNewPassword2] = useState(null);

  const handleChangeInput = (newValue, inputName) => {
    dispatch(actionChangeCustomInputUser(newValue, inputName));
  };

  const handleChangeNewPassword = (newValue, inputName) => {
    switch (inputName) {
      case 'newpassword1':
        setNewPassword1(newValue);
        console.log(newValue);
        break;
      case 'newpassword2':
        setNewPassword2(newValue);
        console.log(newValue);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword1 === newPassword2) {
      console.log('Même mot de passe');
      dispatch(actionChangePassword(newPassword1));
    }
  };
  return (
    <form className="form-connection" onSubmit={handleSubmit}>
      <p className="form-connection-p">Changer le mot de passe</p>
      <div className="form-connection-container">
        <div className="form-connection-inputs">
          {/* <div className="form-connection-container">
            <CustomInput className="form-connection-input" name="password" type="password" value={password} onChange={handleChangeInput} required />
            <label htmlFor="oldpassword">Ancien mot de passe</label>
          </div> */}
          <div className="form-connection-container">
            <CustomInput className="form-connection-input" name="newpassword1" type="password" value={newPassword1} onChange={handleChangeNewPassword} required />
            <label htmlFor="newpassword1">Nouveau mot de passe</label>
          </div>
          <div className="form-connection-container">
            <CustomInput className="form-connection-input" name="newpassword2" type="password" value={newPassword2} onChange={handleChangeNewPassword} required />
            <label htmlFor="newpassword2">Confirmer nouveau mot de passe</label>
          </div>
        </div>
        <div className="form-connection-login">
          <button className="form-connection-button" type="submit">Valider le nouveau mot de passe</button>
        </div>
      </div>
    </form>
  );
}

export default ChangePassword;
