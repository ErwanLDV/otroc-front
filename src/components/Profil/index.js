import './style.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import avatarIMG from '../../assets/images/avatar.jpg';
import { actionSaveUserPicture, actionPostUserPicture } from '../../actions/user';

function Profil() {
  const dispatch = useDispatch();
  const pseudo = useSelector((state) => state.user.currentUserProfil.alias);
  const picture = useSelector((state) => state.user.currentUserProfil.picture);
  const [previewPicture, setPreviewPicture] = useState(null);
  const [newPicture, setNewPicture] = useState(null);

  const handleChangePicture = (event) => {
    setNewPicture(event.target.files[0]);
  };

  const reader = new FileReader();
  if (newPicture) {
    reader.readAsDataURL(newPicture);
  }
  reader.onload = (readerEvent) => {
    if (newPicture.type.includes('image')) {
      setPreviewPicture(readerEvent.target.result);
    }
  };

  const handleSubmitPicture = () => {
    dispatch(actionSaveUserPicture(previewPicture));
    dispatch(actionPostUserPicture(newPicture));
    setPreviewPicture(null);
    setNewPicture(null);
  };

  return (
    <section className="Profil-section">
      <h2>Profil</h2>
      <div className="Profil-container">
        <div className="Profil-container-user">
          <img className="Profil-container-user-img" src={picture || avatarIMG} alt="avatar" />
          <span className="Profil-container-user-span">{pseudo}</span>
          <div className="Profil-container-user-input">
            <label htmlFor="picture">
              <input
                name="picture"
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleChangePicture}
              />
            </label>
          </div>
          {previewPicture && <img src={previewPicture} width="150" alt="Prévisualisation" />}
          {previewPicture && <button type="button" onClick={handleSubmitPicture}>Valider</button>}
        </div>
        <Link to="/profil/mes-informations">
          <button className="Profil-container-button" type="button">Mes informations personelles</button>
        </Link>
        <Link to="/profil/mes-offres">
          <button className="Profil-container-button" type="button">Mes offres</button>
        </Link>
        <Link to="/profil/historique">
          <button className="Profil-container-button" type="button">Mon historique</button>
        </Link>
        <Link to="/profil/mes-demandes">
          <button className="Profil-container-button" type="button">Mes demandes</button>
        </Link>
      </div>
    </section>
  );
}

export default Profil;
