import './style.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import imgBase from '../../assets/images/image-default.png';
import { actionGetEditOfferAnnoucement, actionGetEditWishAnnoucement } from '../../actions/annoucements';

function ProfilCard({
  title,
  content,
  img,
  id,
  type,
}) {
  const dispatch = useDispatch();
  const handleEditAnnoucement = () => {
    switch (type) {
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
              <button className="Profil-offers-container-button" type="button">Supprimmer</button>
              <button className="Profil-offers-container-button" type="button">Désactiver</button>
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
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.string,
};

ProfilCard.defaultProps = {
  img: imgBase,
};

export default ProfilCard;
