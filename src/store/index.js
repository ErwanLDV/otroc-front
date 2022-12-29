import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';
import userMiddleware from '../middlewares/userMiddleware';
import annoucementsMiddleware from '../middlewares/annoucementsMiddleware';
import categoriesMiddleware from '../middlewares/categoriesMiddleware';
import searchMiddleware from '../middlewares/searchMiddleware';

const middlewareEnhancer = applyMiddleware(
  userMiddleware,
  annoucementsMiddleware,
  categoriesMiddleware,
  searchMiddleware,
);

const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(
  reducer,
  composedEnhancers,
);

export default store;
