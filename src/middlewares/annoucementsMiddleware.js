import axios from 'axios';
import {
  actionSaveOffersAnnoucements,
  actionSaveWishesAnnoucements,
  GET_OFFERS_ANNOUCEMENTS,
  GET_WISHES_ANNOUCEMENTS,
} from '../actions/annoucements';

// For tests
const baseURL = 'http://yannlebouc-server.eddi.cloud/projet-11-o-troc-back/public';

const annoucementsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_OFFERS_ANNOUCEMENTS:
      axios.get(`${baseURL}/api/offers`)
        .then((result) => {
          store.dispatch(actionSaveOffersAnnoucements(result.data));
          console.log(result);
        })
        .catch((error) => {
          console.log('GET_OFFERS_ANNOUCEMENTS : ', error);
        });
      break;

    case GET_WISHES_ANNOUCEMENTS:
      axios.get(`${baseURL}/api/wishes`)
        .then((result) => {
          store.dispatch(actionSaveWishesAnnoucements(result.data));
          console.log(result);
        })
        .catch((error) => {
          console.log('GET_OFFERS_ANNOUCEMENTS : ', error);
        });
      break;

    default:
      break;
  }
  next(action);
};

export default annoucementsMiddleware;
