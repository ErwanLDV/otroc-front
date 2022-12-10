import './style.scss';
import PropTypes from 'prop-types';
import imgBase from '../../assets/images/image-default.png';

function ProfilCard({ title, content, img }) {
  return (
    <div className="Profil-offers-container">
      <div className="Profil-offers-container-card">
        <div className="Profil-offers-container-img-div">
          <img className="Profil-offers-container-img" src={imgBase} alt="default" />
        </div>
        <div className="Profil-offers-container-centralDiv">
          <header className="Profil-offers-container-title"> Title</header>
          <div className="Profil-offers-container-content-buttons">
            <div className="Profil-offers-container-content">Content</div>
            <div className="Profil-offers-container-buttons">
              <button className="Profil-offers-container-button" type="button">Modifier</button>
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
  // title: PropTypes.string.isRequired,
  // content: PropTypes.string.isRequired,
};

export default ProfilCard;
