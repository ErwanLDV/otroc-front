import { combineReducers } from 'redux';

import userReducer from './user';
import annoucementsReducer from './annoucements';
import categoriesReducer from './categories';
import searchReducer from './search';
import utilsReducer from './utils';

const rootReducer = combineReducers({
  user: userReducer,
  annoucements: annoucementsReducer,
  categories: categoriesReducer,
  search: searchReducer,
  utils: utilsReducer,
});

export default rootReducer;
