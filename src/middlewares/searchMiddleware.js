import axios from 'axios';
import {
  actionSaveSearchOffersOrWishes,
  actionSaveTypeAnnoucementsResults,
  POST_SEARCH_OFFERS,
  POST_SEARCH_WISHES,
} from '../actions/search';

const baseURL = process.env.BACK_API_BASE_URL;

const searchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POST_SEARCH_OFFERS: {
      const { inputSearchBar } = store.getState().search;

      axios.post(`${baseURL}/api/offers/results`, inputSearchBar)
        .then((result) => {
          store.dispatch(actionSaveSearchOffersOrWishes(result.data[0]));
          store.dispatch(actionSaveTypeAnnoucementsResults('offer'));
        }).catch((error) => {
          console.log('POST_SEARCH_OFFERS', error);
        });
      break;
    }

    case POST_SEARCH_WISHES: {
      const { inputSearchBar } = store.getState().search;

      axios.post(`${baseURL}/api/wishes/results`, inputSearchBar)
        .then((result) => {
          store.dispatch(actionSaveSearchOffersOrWishes(result.data[0]));
          store.dispatch(actionSaveTypeAnnoucementsResults('wish'));
        }).catch((error) => {
          console.log('POST_SEARCH_WISHES', error);
        });
      break;
    }
    default:
      break;
  }
  next(action);
};

export default searchMiddleware;
