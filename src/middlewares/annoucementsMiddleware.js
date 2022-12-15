import axios from 'axios';
import {
  actionSaveOffersAnnoucements,
  actionSaveOneOfferAnnoucement,
  actionSaveOneWishAnnoucement,
  actionSaveWishesAnnoucements,
  GET_OFFERS_ANNOUCEMENTS,
  GET_ONE_OFFER_ANNOUCEMENT,
  GET_ONE_WISH_ANNOUCEMENT,
  GET_WISHES_ANNOUCEMENTS,
} from '../actions/annoucements';

// For tests
const baseURL = process.env.BACK_API_BASE_URL;

const annoucementsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // OFFERS ------------------------------------------------------------
    case GET_OFFERS_ANNOUCEMENTS:
      axios.get(`${baseURL}/api/offers`)
        .then((result) => {
          store.dispatch(actionSaveOffersAnnoucements(result.data));
        })
        .catch((error) => {
          console.log('GET_OFFERS_ANNOUCEMENTS : ', error);
        });
      break;

    case GET_ONE_OFFER_ANNOUCEMENT:
      axios.get(`${baseURL}/api/offers/${action.payload}`)
        .then((result) => {
          console.log(result.data);
          store.dispatch(actionSaveOneOfferAnnoucement(result.data));
        })
        .catch((error) => {
          console.log('GET_ONE_OFFER_ANNOUCEMENT', error);
        });
      break;

    // WISHES -------------------------------------------------------------
    case GET_WISHES_ANNOUCEMENTS:
      axios.get(`${baseURL}/api/wishes`)
        .then((result) => {
          store.dispatch(actionSaveWishesAnnoucements(result.data));
        })
        .catch((error) => {
          console.log('GET_OFFERS_ANNOUCEMENTS : ', error);
        });
      break;

    case GET_ONE_WISH_ANNOUCEMENT:
      axios.get(`${baseURL}/api/wishes/${action.payload}`)
        .then((result) => {
          store.dispatch(actionSaveOneWishAnnoucement(result.data));
        })
        .catch((error) => {
          console.log('GET_ONE_WISH_ANNOUCEMENT', error);
        });
      break;

    default:
      break;
  }
  next(action);
};

export default annoucementsMiddleware;
