import './style.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import avatarIMG from '../../assets/images/avatar.jpg';

function Profil() {
  const pseudo = useSelector((state) => state.user.currentUserProfil.alias);
  const picture = useSelector((state) => state.user.currentUserProfil.picture);
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
              />
            </label>
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
