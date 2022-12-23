import './style.scss';
import PropTypes from 'prop-types';
import { Watch } from 'react-feather';
import logoWish from '../../assets/images/logo-wish.png';
import logoOffer from '../../assets/images/logo-offer.png';
import barter from '../../assets/images/barter.jpg';

function AnnoucementCard({
  title,
  mainCategory,
  category,
  content,
  image,
  profilImage,
  pseudo,
  createdAt,
  logo,
  isLended,
  type,
}) {
  let previewContent = content;
  if (previewContent.length > 60) {
    previewContent = content.substr(0, 60);
    previewContent += '... (suite)';
  }

  return (
    <div className="card">
      <div className="card-header">
        {type === 'temporaire' && <span className="card-header-span">temporaire</span>}
        <img src={image || barter} alt="Objet de l'échange" />
      </div>
      <div className="card-body">
        <div>
          <span className="card-tag card-tag-purple">{mainCategory}</span>
          <span className="card-tag card-tag-teal">{category}</span>
        </div>
        <div className="card-title">
          <h4>
            {title}
          </h4>
          {isLended && <Watch color="rgb(84, 155, 212)" />}
        </div>
        <p className="card-content">
          {previewContent}
        </p>
        <div className="card-user">
          <img src={profilImage} alt="utilisateur" />
          <div className="card-user-info">
            <h5>{pseudo}</h5>
            <small>{createdAt}</small>
          </div>
        </div>
        <div className="card-body-logo">
          {logo === 'wish' && <img src={logoWish} alt="logo demande" />}
          {logo === 'offer' && <img src={logoOffer} alt="logo offre" />}
        </div>
      </div>
    </div>
  );
}
AnnoucementCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  mainCategory: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string,
  profilImage: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  isLended: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

AnnoucementCard.defaultProps = {
  image: null,
  isLended: false,
};

export default AnnoucementCard;
