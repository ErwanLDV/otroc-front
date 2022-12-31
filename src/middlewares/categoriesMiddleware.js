import axios from 'axios';
import {
  GET_ALL_CATEGORIES,
  actionSaveAllCategories,
  actionCategoriesLoaded,
  GET_CATEGORY_RESULTS,
  actionSaveCategoryResults,
  GET_MAIN_CATEGORY_RESULTS,
  actionSaveMainCategoriesResultForCards,
  GET_TOP_CATEGORIES,
  actionSaveTopCategories,
} from '../actions/categories';

const baseURL = process.env.BACK_API_BASE_URL;

const categoriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES: {
      store.dispatch(actionCategoriesLoaded(false));
      axios.get(`${baseURL}/api/maincategories/categories`)
        .then((result) => {
          store.dispatch(actionSaveAllCategories(result.data));
          store.dispatch(actionCategoriesLoaded(true));
        })
        .catch((error) => {
          console.log('GET_ALL_CATEGORIES : ', error);
        });
      break;
    }

    case GET_CATEGORY_RESULTS:
      axios.get(`${baseURL}/api/categories/${action.payload}/advertisements`)
        .then((result) => {
          store.dispatch(actionSaveCategoryResults(result.data));
        })
        .catch((error) => {
          console.log('GET_CATEGORY_RESULTS : ', error);
        });
      break;

    case GET_MAIN_CATEGORY_RESULTS:
      axios.get(`${baseURL}/api/maincategories/${action.payload}/categories`)
        .then((result) => {
          store.dispatch(actionSaveMainCategoriesResultForCards(result.data[0].categories));
        })
        .catch((error) => {
          console.log('GET_MAIN_CATEGORY_RESULTS : ', error);
        });
      break;

    case GET_TOP_CATEGORIES:
      axios.get(`${baseURL}/api/categories`)
        .then((result) => {
          store.dispatch(actionSaveTopCategories(result.data));
        })
        .catch((error) => {
          console.log('GET_TOP_CATEGORIES', error);
        });
      break;

    default:
      break;
  }
  next(action);
};

export default categoriesMiddleware;
