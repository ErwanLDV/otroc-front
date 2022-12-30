import './style.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Edit, Power, Slash, Trash2,
} from 'react-feather';
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
  if (previewContent.length > 250) {
    previewContent = content.substr(0, 250);
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
          <div className="Profil-offers-container-content">
            <Link to={`/annonces/${annoucementType === 'offer' ? 'offres' : 'demandes'}/${id}`}>
              <div>{previewContent}</div>
            </Link>
          </div>
        </div>
        <div className="Profil-offers-container-buttons">
          <div>
            <Link to="/annonces/editer">
              <button className="Profil-offers-container-button" type="button" onClick={handleEditAnnoucement} title="Editer"> <Edit size={20} /> </button>
            </Link>
          </div>
          {type === 'temporaire' && <button className="Profil-offers-container-button" type="button" onClick={handleToggleLend} title={!isLended ? 'Rendre indisponible' : 'Rendre disponible'}> <Slash size={20} /> </button>}
          <button className="Profil-offers-container-button" type="button" onClick={handleToggleActive} title={!isActive ? 'Activer' : 'Désactiver'}> <Power size={20} /> </button>
          <button className="Profil-offers-container-button trash" type="button" onClick={handleDelete} title="Supprimer"> <Trash2 size={20} /> </button>
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
  img: barter,
  isLended: null,
  isActive: null,
};

export default ProfilCard;
