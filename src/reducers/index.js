import { combineReducers } from 'redux';

import userReducer from './user';
import annoucementsReducer from './annoucements';
import categoriesReducer from './categories';

const rootReducer = combineReducers({
  user: userReducer,
  annoucements: annoucementsReducer,
  categories: categoriesReducer,
});

export default rootReducer;
