import './style.scss';
import PropTypes from 'prop-types';
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
}) {
  console.log(mainCategory, category);
  return (
    <div className="card">
      <div className="card-header">
        <img src={image} alt="rover" />
      </div>
      <div className="card-body">
        <div>
          <span className="card-tag card-tag-purple">{mainCategory}</span>
          <span className="card-tag card-tag-teal">{category}</span>
        </div>
        <h4>
          {title}
        </h4>
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
  image: PropTypes.string.isRequired,
  profilImage: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

AnnoucementCard.defaultProps = {
  title: 'Truck',
  mainCategory: 'Véhicule',
  category: 'Camion',
  content: 'Vend camion bon etat général, seulement 789 551 km au compteur',
  image: 'https://thumbs.dreamstime.com/b/vieux-camion-pourri-gradient-de-isol%C3%A9-dans-le-fond-blanc-213098076.jpg',
  profilImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0qCXAjYcFT6MfQ_MD7kCHNbQ8smuFnLzESw&usqp=CAU',
  pseudo: 'jean-mich',
  createdAt: '2 décembre 2022',
};

export default AnnoucementCard;
