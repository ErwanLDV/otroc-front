import axios from 'axios';
import { GET_ALL_CATEGORIES, actionSaveAllCategories, actionCategoriesLoaded } from '../actions/categories';

const baseURL = process.env.BACK_API_BASE_URL;

const categoriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES: {
      store.dispatch(actionCategoriesLoaded(false));
      axios.get(`${baseURL}/api/maincategories/`)
        .then((result) => {
          store.dispatch(actionSaveAllCategories(result.data));
        })
        .catch((error) => {
          console.log('GET_OFFERS_ANNOUCEMENTS : ', error);
        })
        .finally(() => {
          store.dispatch(actionCategoriesLoaded(true));
        });
      break;
    }
    default:
      break;
  }
  next(action);
};

export default categoriesMiddleware;
