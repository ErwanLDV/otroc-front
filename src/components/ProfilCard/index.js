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
} from '../../actions/annoucements';

function ProfilCard({
  title,
  content,
  img,
  id,
  annoucementType,
  isActive,
  isLended,
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
        break;
      case 'wish':
        dispatch(actionToggleActiveWishAnnoucement(id));
        break;
      default:
        break;
    }
  };

  const handleDelete = () => {
    switch (annoucementType) {
      case 'offer':
        dispatch(actionDeleteOfferAnnoucement(id));
        break;
      case 'wish':
        dispatch(actionDeleteWishAnnoucement(id));
        break;
      default:
        break;
    }
  };

  return (
    <div className="Profil-offers-container">
      <div className="Profil-offers-container-card">
        <div className="Profil-offers-container-img-div">
          <img className="Profil-offers-container-img" src={img !== null ? img : imgBase} alt="default" />
        </div>
        <div className="Profil-offers-container-centralDiv">
          <header className="Profil-offers-container-title"> {title}</header>
          <div className="Profil-offers-container-content-buttons">
            <div className="Profil-offers-container-content">{content}</div>
            <div className="Profil-offers-container-buttons">
              <Link to="/annonces/editer">
                <button className="Profil-offers-container-button" type="button" onClick={handleEditAnnoucement}>Modifier</button>
              </Link>
              <button className="Profil-offers-container-button" type="button" onClick={handleDelete}>Supprimmer</button>
              <button className="Profil-offers-container-button" type="button" onClick={handleToggleActive}>Activer/Désactiver</button>
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
  // isActive: PropTypes.bool.isRequired,
};

ProfilCard.defaultProps = {
  img: imgBase,
  isLended: null,
};

export default ProfilCard;
