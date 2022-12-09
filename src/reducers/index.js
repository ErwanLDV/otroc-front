import { combineReducers } from 'redux';

import userReducer from './user';
import annoucementsReducer from './annoucements';

const rootReducer = combineReducers({
  user: userReducer,
  annoucements: annoucementsReducer,
});

export default rootReducer;
