import { useEffect, useState } from 'react';
import {
  AlertTriangle, Watch, AtSign, Phone, Clock, Globe, Tag,
} from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link, useLocation, useNavigate, useParams,
} from 'react-router-dom';
import {
  actionCleanupAnnoucementPage,
  actionGetOneOfferAnnoucement,
  actionGetOneWishAnnoucement,
  actionReportedOfferAnnoucement,
  actionReportedWishAnnoucement,
} from '../../actions/annoucements';
import './style.scss';
import barter from '../../assets/images/barter.jpg';
import Loader from '../Loader';
import PopUp from '../PopUp';
import { actionPageReload } from '../../actions/utils';

function AnnouncementPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogged = useSelector((state) => state.user.isLogged);
  const isLoading = useSelector((state) => state.utils.isLoading);

  const idAnnoucement = useSelector((state) => state.annoucements.currentAnnoucement.id);
  const title = useSelector((state) => state.annoucements.currentAnnoucement.title);
  const description = useSelector((state) => state.annoucements.currentAnnoucement.description);
  const picture = useSelector((state) => state.annoucements.currentAnnoucement.picture);
  const zipcode = useSelector((state) => state.annoucements.currentAnnoucement.zipcode);
  const type = useSelector((state) => state.annoucements.currentAnnoucement.type);
  const createdAt = useSelector((state) => state.annoucements.currentAnnoucement.createdAt);
  const dateTime = new Date(createdAt);
  const isReported = useSelector((state) => state.annoucements.currentAnnoucement.isReported);
  const isLended = useSelector((state) => state.annoucements.currentAnnoucement.isLended);

  const userId = useSelector((state) => state.annoucements.currentAnnoucement.user?.id);
  const email = useSelector((state) => state.annoucements.currentAnnoucement.user?.email);
  const pseudo = useSelector((state) => state.annoucements.currentAnnoucement.user?.alias);
  const phoneNumber = useSelector(
    (state) => state.annoucements.currentAnnoucement.user?.phoneNumber,
  );
  const userPicture = useSelector((state) => state.annoucements.currentAnnoucement.user?.picture);
  const pageReload = useSelector((state) => state.utils.pageReload);
  const messagePopUp = useSelector((state) => state.utils.messagePopUp);

  const [isPreview, setIsPreview] = useState(false);

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

  useEffect(() => {
    if (pageReload) {
      dispatch(actionPageReload());
      navigate(0);
    }
  }, [pageReload]);

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
    !isLoading ? (
      <div className="annoucementPage-container">
        <div className="annoucementPage-container-header">
          <div className="annoucementPage-container-header-photo">
            <img className="image" src={picture || barter} alt="Objet de l'échange" onClick={() => setIsPreview(true)} />
          </div>
          <div className="annoucementPage-container-user">
            <div className="annoucementPage-container-user-image">
              <img src={userPicture} alt="userPicture" />
            </div>
            <span>{pseudo}</span>
            {isLogged && <p className="annoucementPage-container-user-info"><AtSign size={18} /> {email}</p>}
            {isLogged && phoneNumber && <p className="annoucementPage-container-user-info"><Phone size={18} /> {phoneNumber}</p>}
            <div className="annoucementPage-container-user-buttons">
              <Link to={`/utilisateur/${userId}`}>
                <button className="annoucementPage-container-user-buttons-button" type="button">Profil</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="annoucementPage-container-content">
          <PopUp className={messagePopUp ? 'popup' : 'popup-off'} />
          <h2>{title}</h2>
          <div className="annoucementPage-title_watch">
            {isLended && <p className="annoucementPage-title-watch-p"><Watch />Actuellement indisponible</p>}
          </div>
          <p className="annoucementPage-container-content-p">{description}</p>
          <div className="date-type">
            <p className="annoucementPage-container-content-p"><Globe size={14} color="#458E89" /> {zipcode}</p>
            <p className="annoucementPage-container-content-p"><Clock size={14} color="#458E89" /> {dateTime.toLocaleString()}</p>
            <p className="annoucementPage-container-content-p"><Tag size={14} color="#458E89" /> {type}</p>
          </div>
          {isLogged && isReported === null
            && (
              <div className="report" onClick={handleClick}>
                <AlertTriangle size={17} className="report-logo" />
                <span>Signaler</span>
              </div>
            )}
        </div>
        <div className={isPreview ? 'preview--on' : 'preview--off'} onClick={() => setIsPreview(false)}>
          <img src={picture} alt="Objet de l'échange" />
        </div>
      </div>
    ) : <Loader />
  );
}

export default AnnouncementPage;
