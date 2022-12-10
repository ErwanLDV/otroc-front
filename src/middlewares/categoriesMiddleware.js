import axios from 'axios';
import { GET_ALL_CATEGORIES, actionSaveAllCategories } from '../actions/categories';

const baseURL = 'http://yannlebouc-server.eddi.cloud/projet-11-o-troc-back/public';

const categoriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES: {
      const categoriesArray = [];
      axios.get(`${baseURL}/api/maincategories/`)
        .then((result) => {
          const mainCategoriesArray = result.data;
          mainCategoriesArray.map((mainCategory) => {
            axios.get(`${baseURL}/api/maincategories/${mainCategory.id}/categories`)
              .then((result2) => {
                categoriesArray.push(result2.data);
              })
              .catch((error2) => {
                console.log(error2);
              });
            return categoriesArray;
          });
          store.dispatch(actionSaveAllCategories(categoriesArray));
        })
        .catch((error) => {
          console.log('GET_OFFERS_ANNOUCEMENTS : ', error);
        })
        .finally(() => {
          store.dispatch(actionSaveAllCategories(categoriesArray));
        });
      break;
    }
    default:
      break;
  }
  next(action);
};

export default categoriesMiddleware;
