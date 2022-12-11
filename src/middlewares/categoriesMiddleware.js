import axios from 'axios';
import { GET_ALL_CATEGORIES, actionSaveAllCategories, actionCategoriesLoaded } from '../actions/categories';

const baseURL = 'http://yannlebouc-server.eddi.cloud/projet-11-o-troc-back/public';

const categoriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES: {
      store.dispatch(actionCategoriesLoaded(false));
      const categoriesArray = [];
      axios.get(`${baseURL}/api/maincategories/`)
        .then((result) => {
          const mainCategoriesArray = result.data;
          mainCategoriesArray.map((mainCategory) => {
            axios.get(`${baseURL}/api/maincategories/${mainCategory.id}/categories`)
              .then((result2) => {
                categoriesArray[mainCategory.id] = result2.data;
              })
              .catch((error) => {
                console.log('SUBCATEGORIES', error);
              });
            return store.dispatch(actionSaveAllCategories(categoriesArray));
          });
        })
        .catch((error) => {
          console.log('GET_OFFERS_ANNOUCEMENTS : ', error);
        })
        .finally(() => {
          setTimeout(() => {
            store.dispatch(actionCategoriesLoaded(true));
          }, 300);
        });
      break;
    }
    default:
      break;
  }
  next(action);
};

export default categoriesMiddleware;
