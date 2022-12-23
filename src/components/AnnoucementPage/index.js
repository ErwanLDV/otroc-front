import { useEffect } from 'react';
import { AlertTriangle, Watch } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
  actionCleanupAnnoucementPage,
  actionGetOneOfferAnnoucement,
  actionGetOneWishAnnoucement,
  actionReportedOfferAnnoucement,
  actionReportedWishAnnoucement,
} from '../../actions/annoucements';
import './style.scss';
import barter from '../../assets/images/barter.jpg';

function AnnouncementPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.user.isLogged);

  const idAnnoucement = useSelector((state) => state.annoucements.currentAnnoucement.id);
  const title = useSelector((state) => state.annoucements.currentAnnoucement.title);
  const description = useSelector((state) => state.annoucements.currentAnnoucement.description);
  const picture = useSelector((state) => state.annoucements.currentAnnoucement.picture);
  const zipcode = useSelector((state) => state.annoucements.currentAnnoucement.zipcode);
  const type = useSelector((state) => state.annoucements.currentAnnoucement.type);
  const createdAt = useSelector((state) => state.annoucements.currentAnnoucement.createdAt);
  const isReported = useSelector((state) => state.annoucements.currentAnnoucement.isReported);
  const isLended = useSelector((state) => state.annoucements.currentAnnoucement.isLended);

  const userId = useSelector((state) => state.annoucements.currentAnnoucement.user?.id);
  const email = useSelector((state) => state.annoucements.currentAnnoucement.user?.email);
  const pseudo = useSelector((state) => state.annoucements.currentAnnoucement.user?.alias);
  const phoneNumber = useSelector(
    (state) => state.annoucements.currentAnnoucement.user?.phoneNumber,
  );
  const userPicture = useSelector((state) => state.annoucements.currentAnnoucement.user?.picture);
  // A voir pour les categories ! elles sont aussi renvoyer voir si besoin
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case `/annonces/offres/${id}`:
        dispatch(actionGetOneOfferAnnoucement(id));
        break;
      case `/annonces/demandes/${id}`:
        dispatch(actionGetOneWishAnnoucement(id));
        break;
      default:
        break;
    }
    return () => dispatch(actionCleanupAnnoucementPage());
  }, []);

  const handleClick = () => {
    switch (location.pathname) {
      case `/annonces/offres/${id}`:
        dispatch(actionReportedOfferAnnoucement(idAnnoucement));
        break;
      case `/annonces/demandes/${id}`:
        dispatch(actionReportedWishAnnoucement(idAnnoucement));
        break;
      default:
        break;
    }
  };
  return (
    <div className="annoucementPage-container">
      <div>
        Annoucement
      </div>
      <div className="annoucementPage-container-img">
        <div className="annoucementPage-container-img-photo">
          <img className="image" src={picture || barter} alt="Objet de l'échange" />
        </div>
        <div className="annoucementPage-container-user">
          <span>{pseudo}</span>
          <img className="annoucementPage-container-user-image" src={userPicture} alt="userPicture" />
          {isLogged && <p className="annoucementPage-container-user-info">{email}</p>}
          {isLogged && phoneNumber && <p className="annoucementPage-container-user-info">{phoneNumber}</p>}
          <div className="annoucementPage-container-user-buttons">
            <button className="annoucementPage-container-user-buttons-button" type="button">Contacter</button>
            <Link to={`/utilisateur/${userId}`}>
              <button className="annoucementPage-container-user-buttons-button" type="button">Profil</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="annoucementPage-container-content">
        <div className="annoucementPage-title_watch">
          <p>{title}</p>
          {isLended && <p className="annoucementPage-title_watch-p"><Watch />Actuellement indisponible</p>}
        </div>
        <p>{description}</p>
        <p>{zipcode}</p>
        <p>{createdAt}</p>
        <p>{type}</p>
        {isReported === null
          && (
            <div className="report" onClick={handleClick}>
              <AlertTriangle className="report-logo" />
              <p>Signaler</p>
            </div>
          )}
      </div>
    </div>
  );
}

export default AnnouncementPage;
