/* eslint-disable jsx-a11y/label-has-associated-control */
import './style.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Download } from 'react-feather';
import avatarIMG from '../../assets/images/avatar.jpg';
import { actionSaveUserPicture, actionPostUserPicture, actionGetUserProfil } from '../../actions/user';

function Profil() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetUserProfil());
  }, []);

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
      <h2>{pseudo}</h2>
      <div className="Profil-container">
        <div className="Profil-container-user">
          <img className="Profil-container-user-img" src={picture || avatarIMG} alt="avatar" />
          <div className="Profil-container-user-input">
            <input
              className="input-profil-file"
              id="profil-picture"
              name="picture"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleChangePicture}
            />
            <label htmlFor="profil-picture"><Download size={15} /> Changer d'image de profil </label>
          </div>
          <div className="profil-previewpicture">
            {previewPicture && <img className="Profil-container-user-img" src={previewPicture} alt="Prévisualisation" />}
            {previewPicture && <button type="button" onClick={handleSubmitPicture}>Valider</button>}
          </div>
        </div>
        <Link to="/profil/mes-informations">
          <button className="Profil-container-button" type="button">Mes informations personelles</button>
        </Link>
        <Link to="/profil/mes-offres">
          <button className="Profil-container-button" type="button">Mes offres</button>
        </Link>
        <Link to="/profil/historique">
          <button className="Profil-container-button" type="button">Mes annonces inactives</button>
        </Link>
        <Link to="/profil/mes-demandes">
          <button className="Profil-container-button" type="button">Mes demandes</button>
        </Link>
        <Link to="/profil/supprimer">
          <button className="Profil-container-button" type="button">Supprimer mon compte</button>
        </Link>
      </div>
    </section>
  );
}

export default Profil;
