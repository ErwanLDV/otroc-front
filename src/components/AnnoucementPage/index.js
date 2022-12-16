import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { actionCleanupAnnoucementPage, actionGetOneOfferAnnoucement, actionGetOneWishAnnoucement } from '../../actions/annoucements';
import './style.scss';

function AnnouncementPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const title = useSelector((state) => state.annoucements.currentAnnoucement.title);
  const description = useSelector((state) => state.annoucements.currentAnnoucement.description);
  const picture = useSelector((state) => state.annoucements.currentAnnoucement.picture);
  const zipcode = useSelector((state) => state.annoucements.currentAnnoucement.zipcode);
  const type = useSelector((state) => state.annoucements.currentAnnoucement.type);
  const createdAt = useSelector((state) => state.annoucements.currentAnnoucement.createdAt);

  const userId = useSelector((state) => state.annoucements.currentAnnoucement.user?.id);
  const email = useSelector((state) => state.annoucements.currentAnnoucement.user?.email);
  const pseudo = useSelector((state) => state.annoucements.currentAnnoucement.user?.alias);
  const phoneNumber = useSelector((state) => state.annoucements.currentAnnoucement.user?.phoneNumber);
  const userPicture = useSelector((state) => state.annoucements.currentAnnoucement.user?.picture);
  // A voir pour les categories ! elles sont aussi renvoyer voir si besoin
console.log(title);
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case `/annonces/offers/${id}`:
        dispatch(actionGetOneOfferAnnoucement(id));
        break;
      case `/annonces/wishes/${id}`:
        dispatch(actionGetOneWishAnnoucement(id));
        break;
      default:
        break;
    }
    return () => dispatch(actionCleanupAnnoucementPage());
  }, []);
  return (
    <div className="annoucementPage-container">
      <div>
        Annoucement
      </div>
      <div className="annoucementPage-container-img">
        <div className="annoucementPage-container-img-photo">
          <img className="image" src={picture || 'https://www.assuronline.com/wp-content/uploads/2022/01/103948580_l-scaled.jpg'} alt="voiture" />
        </div>
        <div className="annoucementPage-container-user">
          informations troqueur
          <span>{pseudo}</span>
          <img className="annoucementPage-container-user-image" src={userPicture} alt="userPicture" />
          <p>{email}</p>
          <p>{phoneNumber}</p>
          <Link to={`/utilisateur/${pseudo}`}>
            <button type="button">Voir le profil</button>
          </Link>
        </div>
      </div>
      <div className="annoucementPage-container-content">
        {title}
        {description}
        {zipcode}
        {createdAt}
        {type}
      </div>
    </div>
  );
}

export default AnnouncementPage;
