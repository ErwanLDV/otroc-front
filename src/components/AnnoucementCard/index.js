import './style.scss';
import PropTypes from 'prop-types';
import { Watch } from 'react-feather';
import logoWish from '../../assets/images/logo-wish.png';
import logoOffer from '../../assets/images/logo-offer.png';

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
  const defaultImage = 'https://thumbs.dreamstime.com/b/vieux-camion-pourri-gradient-de-isol%C3%A9-dans-le-fond-blanc-213098076.jpg';
  return (
    <div className="card">
      <div className="card-header">
        {type === 'temporaire' && <span className="card-header-span">temporaire</span>}
        <img src={image || defaultImage} alt="rover" />
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
        <p>
          {content}
        </p>
        <div className="card-user">
          <img src={profilImage} alt="user" />
          <div className="card-user-info">
            <h5>{pseudo}</h5>
            <small>{createdAt}</small>
          </div>
        </div>
        <div className="card-body-logo">
          {logo === 'wish' && <img src={logoWish} alt="logo-demande" />}
          {logo === 'offer' && <img src={logoOffer} alt="logo-offre" />}
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
  title: 'Truck',
  mainCategory: 'Véhicule',
  category: 'Camion',
  content: 'Vend camion bon etat général, seulement 789 551 km au compteur',
  image: null,
  // profilImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0qCXAjYcFT6MfQ_MD7kCHNbQ8smuFnLzESw&usqp=CAU',
  pseudo: 'jean-mich',
  createdAt: '2 décembre 2022',
  isLended: false,
};

export default AnnoucementCard;
