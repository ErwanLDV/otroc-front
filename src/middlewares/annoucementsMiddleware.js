import axios from 'axios';
import {
  actionSaveOffersAnnoucements,
  actionSaveOneOfferAnnoucement,
  actionSaveOneWishAnnoucement,
  actionSaveWishesAnnoucements,
  ADD_NEW_OFFER_ANNOUCEMENT,
  ADD_NEW_WISH_ANNOUCEMENT,
  GET_OFFERS_ANNOUCEMENTS,
  GET_ONE_OFFER_ANNOUCEMENT,
  GET_ONE_WISH_ANNOUCEMENT,
  GET_WISHES_ANNOUCEMENTS,
} from '../actions/annoucements';

// For tests
const baseURL = 'http://yannlebouc-server.eddi.cloud/projet-11-o-troc-back/public';

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

    case ADD_NEW_OFFER_ANNOUCEMENT: {
      const { addOrEditAnnoucement } = store.getState().annoucements;
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      axios.post(
        `${baseURL}/api/offers`,
        {
          title: addOrEditAnnoucement.title,
          zipcode: Number(addOrEditAnnoucement.zipcode),
          description: addOrEditAnnoucement.description,
          isActive: true,
          type: addOrEditAnnoucement.type,
          categories: addOrEditAnnoucement.categories,
        },
        config,
      ).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log('add new offer annoucement ', error);
      });
      break;
    }

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
          console.log(result.data);
          store.dispatch(actionSaveOneWishAnnoucement(result.data));
        })
        .catch((error) => {
          console.log('GET_ONE_WISH_ANNOUCEMENT', error);
        });
      break;

    case ADD_NEW_WISH_ANNOUCEMENT: {
      const { addOrEditAnnoucement } = store.getState().annoucements;
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      axios.post(
        `${baseURL}/api/wishes`,
        {
          title: addOrEditAnnoucement.title,
          zipcode: Number(addOrEditAnnoucement.zipcode),
          description: addOrEditAnnoucement.description,
          isActive: true,
          type: addOrEditAnnoucement.type,
          categories: addOrEditAnnoucement.categories,
        },
        config,
      ).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log('add new wish annoucement ', error);
      });
      break;
    }

    default:
      break;
  }
  next(action);
};

export default annoucementsMiddleware;
