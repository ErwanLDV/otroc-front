import './style.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import imgBase from '../../assets/images/image-default.png';
import {
  actionGetEditOfferAnnoucement,
  actionGetEditWishAnnoucement,
  actionDeleteOfferAnnoucement,
  actionDeleteWishAnnoucement,
  actionToggleActiveOfferAnnoucement,
  actionToggleActiveWishAnnoucement,
  actionPageReload,
  actionToggleLendOfferAnnoucement,
} from '../../actions/annoucements';
import barter from '../../assets/images/barter.jpg';

function ProfilCard({
  title,
  content,
  img,
  id,
  annoucementType,
  isActive,
  isLended,
  type,
}) {
  const dispatch = useDispatch();

  const handleEditAnnoucement = () => {
    switch (annoucementType) {
      case 'offer':
        dispatch(actionGetEditOfferAnnoucement(id));
        break;
      case 'wish':
        dispatch(actionGetEditWishAnnoucement(id));
        break;
      default:
        break;
    }
  };

  const handleToggleActive = () => {
    switch (annoucementType) {
      case 'offer':
        dispatch(actionToggleActiveOfferAnnoucement(id));
        dispatch(actionPageReload());
        break;
      case 'wish':
        dispatch(actionToggleActiveWishAnnoucement(id));
        dispatch(actionPageReload());
        break;
      default:
        break;
    }
  };

  const handleToggleLend = () => {
    switch (annoucementType) {
      case 'offer':
        dispatch(actionToggleLendOfferAnnoucement(id));
        dispatch(actionPageReload());
        break;
      default:
        break;
    }
  };

  const handleDelete = () => {
    switch (annoucementType) {
      case 'offer':
        dispatch(actionDeleteOfferAnnoucement(id));
        dispatch(actionPageReload());
        break;
      case 'wish':
        dispatch(actionDeleteWishAnnoucement(id));
        dispatch(actionPageReload());
        break;
      default:
        break;
    }
  };

  let previewContent = content;
  if (previewContent.length > 60) {
    previewContent = content.substr(0, 60);
    previewContent += '... (suite)';
  }

  return (
    <div className="Profil-offers-container">
      <div className="Profil-offers-container-card">
        <div className="Profil-offers-container-img-div">
          <Link to={`/annonces/${annoucementType === 'offer' ? 'offres' : 'demandes'}/${id}`}>
            <img className="Profil-offers-container-img" src={img !== null ? img : barter} alt="Objet de l'échange" />
          </Link>
        </div>
        <div className="Profil-offers-container-centralDiv">
          <Link to={`/annonces/${annoucementType === 'offer' ? 'offres' : 'demandes'}/${id}`}>
            <header className="Profil-offers-container-title"> {title}</header>
          </Link>
          <div className="Profil-offers-container-content-buttons">
            <Link to={`/annonces/${annoucementType === 'offer' ? 'offres' : 'demandes'}/${id}`}>
              <div className="Profil-offers-container-content">{previewContent}</div>
            </Link>
            <div className="Profil-offers-container-buttons">
              <Link to="/annonces/editer">
                <button className="Profil-offers-container-button" type="button" onClick={handleEditAnnoucement}>Modifier</button>
              </Link>
              <button className="Profil-offers-container-button" type="button" onClick={handleDelete}>Supprimer</button>
              {type === 'temporaire' && <button className="Profil-offers-container-button" type="button" onClick={handleToggleLend}>{!isLended ? 'Rendre indisponible' : 'Rendre disponible'}</button>}
              <button className="Profil-offers-container-button" type="button" onClick={handleToggleActive}>{!isActive ? 'Activer' : 'Désactiver'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProfilCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  annoucementType: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.string,
  isLended: PropTypes.bool,
  isActive: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

ProfilCard.defaultProps = {
  img: imgBase,
  isLended: null,
  isActive: null,
};

export default ProfilCard;
